import { useState, useCallback } from 'react'
import type { Question, SubLesson } from './types'
import { QuestionRenderer } from './QuestionRenderer'
import { Illustration } from '../assets/illustrations'
import styles from './LessonEngine.module.css'

interface Props {
  subLesson: SubLesson
  environmentName: string
  onComplete: (score: number) => void
  onExit: () => void
}

type FeedbackState = { showing: boolean; correct: boolean; explanation: string }

export function LessonRunner({ subLesson, environmentName, onComplete, onExit }: Props) {
  const questions = subLesson.questions
  // Stage: 'intro' | 'active' | 'complete'
  const [stage, setStage] = useState<'intro' | 'active' | 'complete'>('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<FeedbackState>({ showing: false, correct: false, explanation: '' })
  const [showHint, setShowHint] = useState(false)

  const current: Question | undefined = questions[currentIndex]
  const progressPercent = questions.length > 0 ? ((currentIndex) / questions.length) * 100 : 0

  const handleSelect = useCallback((answer: string) => {
    if (answered) return
    setSelectedAnswer(answer)
  }, [answered])

  function checkAnswer() {
    if (!current || !selectedAnswer) return

    let isCorrect = false

    switch (current.type) {
      case 'multiple-choice':
        isCorrect = selectedAnswer === current.correctId
        break
      case 'fill-blanks':
        isCorrect = selectedAnswer === current.correctWord
        break
      case 'matching':
        isCorrect = selectedAnswer === 'correct'
        break
      case 'ordering':
        isCorrect = selectedAnswer === 'correct'
        break
      case 'image-id':
        isCorrect = selectedAnswer === current.correctId
        break
      case 'pattern-completion':
        isCorrect = selectedAnswer === current.correctOption
        break
      case 'scenario':
        isCorrect = selectedAnswer === current.bestId
        break
      case 'interactive-challenge':
        isCorrect = selectedAnswer === current.correctValue
        break
    }

    if (isCorrect) setCorrectCount(c => c + 1)

    setAnswered(true)
    setFeedback({
      showing: true,
      correct: isCorrect,
      explanation: current.explanation,
    })
  }

  function handleContinue() {
    setFeedback({ showing: false, correct: false, explanation: '' })
    setAnswered(false)
    setSelectedAnswer(null)
    setShowHint(false)

    if (currentIndex + 1 >= questions.length) {
      setStage('complete')
    } else {
      setCurrentIndex(i => i + 1)
    }
  }

  // A. Stage 1: Brief, Warm Lesson Introduction
  if (stage === 'intro') {
    const coverKey = subLesson.coverIllustrationKey || 'banyanTree'
    const objective =
      subLesson.learningObjective ||
      'Explore hands-on challenges and uncover the scientific and cultural wisdom of ancient India.'

    return (
      <div className={styles.lessonContainer}>
        <div className={styles.introModal}>
          <div className={styles.introCard}>
            <div className={styles.introEnvironmentPill}>{environmentName}</div>

            {/* Sub-lesson cover illustration */}
            <div className={styles.introIllustrationWrap}>
              <Illustration name={coverKey} size={110} animated />
            </div>

            <h1 className={styles.introTitle}>{subLesson.title}</h1>

            <div className={styles.introObjectiveBox}>
              <span className={styles.objectiveTag}>Learning Objective</span>
              <p className={styles.objectiveText}>{objective}</p>
            </div>

            <div className={styles.introStatsRow}>
              <span>✦ {questions.length} Interactive Questions</span>
              <span>• Visual exploration</span>
            </div>

            <div className={styles.introActions}>
              <button className={styles.introBackBtn} onClick={onExit}>
                ← Back
              </button>
              <button className={styles.introStartBtn} onClick={() => setStage('active')}>
                Begin Lesson →
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // B. Stage 3: Celebratory Completion Screen
  if (stage === 'complete') {
    const finalScore = Math.round((correctCount / questions.length) * 100)
    return (
      <div className={styles.lessonContainer}>
        <div className={styles.completionScreen}>
          <div className={styles.completionTrophyWrap}>
            <div className={styles.completionSparkles}>✦ ✦ ✦</div>
            <div className={styles.completionTrophy}>
              <svg width="68" height="68" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" fill="#FFFDF8" stroke="#CDA84D" strokeWidth="3" />
                <circle cx="32" cy="32" r="22" fill="#F5EFE6" />
                <polygon points="32,16 36,26 47,27 39,34 41,45 32,39 23,45 25,34 17,27 28,26" fill="#CDA84D" />
              </svg>
            </div>
          </div>

          <h2 className={styles.completionTitle}>Lesson Mastered!</h2>
          <p className={styles.completionSubtitle}>{subLesson.title} · {environmentName}</p>

          <div className={styles.completionStats}>
            <div className={styles.statBox}>
              <span className={styles.statValue}>{correctCount} / {questions.length}</span>
              <span className={styles.statLabel}>Correct Answers</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>{finalScore}%</span>
              <span className={styles.statLabel}>Mastery Score</span>
            </div>
          </div>

          <p className={styles.completionEncouragement}>
            {finalScore >= 80
              ? '✦ Splendid insight! You have unlocked fresh knowledge of ancient Indian sciences.'
              : 'Well practiced! Every riddle sharpens the mind for the journey ahead.'}
          </p>

          <button className={styles.completionBtn} onClick={() => onComplete(finalScore)}>
            Continue Journey →
          </button>
        </div>
      </div>
    )
  }

  if (!current) return null

  // C. Stage 2: Main Question Interface
  return (
    <div className={styles.lessonContainer}>
      {/* TOP: Compact Header with Breadcrumb & Progress */}
      <header className={styles.questionTopBar}>
        <button className={styles.exitLessonBtn} onClick={onExit} title="Exit lesson">
          ← Exit
        </button>

        <div className={styles.topBarCenter}>
          <div className={styles.lessonBreadcrumb}>
            <span className={styles.breadcrumbRealm}>{environmentName}</span>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbLesson}>{subLesson.title}</span>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <span className={styles.progressCounter}>
          {currentIndex + 1} / {questions.length}
        </span>
      </header>

      {/* CENTRE: Question Stage */}
      <main className={styles.questionMainStage}>
        {/* Main Central Illustration (when present) */}
        {current.illustration && (
          <div className={styles.mainIllustrationFrame}>
            <svg
              viewBox={current.illustration.viewBox}
              className={styles.mainIllustrationSvg}
              aria-hidden="true"
              dangerouslySetInnerHTML={{
                __html:
                  `<rect width="100%" height="100%" fill="${current.illustration.bgColor || '#FAF4E6'}" rx="14" />` +
                  current.illustration.elements,
              }}
            />
          </div>
        )}

        {/* Short Question Heading */}
        <h2 className={styles.questionHeading}>{current.text}</h2>

        {/* Optional Hint Toggle */}
        {current.hint && (
          <div className={styles.hintContainer}>
            {!showHint ? (
              <button
                type="button"
                className={styles.hintToggleBtn}
                onClick={() => setShowHint(true)}
              >
                <span className={styles.hintPillIcon}>✦</span>
                <span>Hint available</span>
              </button>
            ) : (
              <div className={styles.hintBox}>
                <span className={styles.hintIcon}>✦</span>
                <span className={styles.hintContent}>{current.hint}</span>
              </div>
            )}
          </div>
        )}

        {/* Interactive Answer Area */}
        <div className={styles.answersStage}>
          <QuestionRenderer
            question={current}
            selectedAnswer={selectedAnswer}
            answered={answered}
            onSelect={handleSelect}
          />
        </div>
      </main>

      {/* BOTTOM: Action Bar & Non-Intrusive Feedback */}
      {!feedback.showing ? (
        <footer className={styles.bottomBar}>
          <div className={styles.bottomBarInner}>
            <div className={styles.bottomPromptTip}>
              {selectedAnswer ? 'Choice selected! Tap Check below.' : 'Select the best option above to continue.'}
            </div>
            <button
              className={styles.checkBtn}
              disabled={!selectedAnswer}
              onClick={checkAnswer}
            >
              Check Answer
            </button>
          </div>
        </footer>
      ) : (
        <footer className={`${styles.feedbackBanner} ${feedback.correct ? styles.feedbackBannerCorrect : styles.feedbackBannerWrong}`}>
          <div className={styles.feedbackBannerInner}>
            <div className={styles.feedbackSeal}>
              {feedback.correct ? '✓' : '✗'}
            </div>
            <div className={styles.feedbackTextWrap}>
              <div className={styles.feedbackTitle}>
                {feedback.correct ? 'Splendid observation!' : 'Not quite right — keep exploring!'}
              </div>
              <p className={styles.feedbackExplanation}>{feedback.explanation}</p>
            </div>
            <button className={styles.continueBtn} onClick={handleContinue}>
              Continue →
            </button>
          </div>
        </footer>
      )}
    </div>
  )
}
