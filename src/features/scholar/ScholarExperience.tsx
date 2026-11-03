import { useState } from 'react'
import { SCHOLAR_CURRICULUM } from '../../data/scholarCurriculum'
import { PhaseSelector } from '../../engine/PhaseSelector'
import { LessonRunner } from '../../engine/LessonRunner'
import styles from './ScholarExperience.module.css'

interface Props {
  onComplete: () => void
  onReturn: () => void
  completedPhases?: string[]
  onPhaseComplete?: (phaseId: string, points: number) => void
}

type ViewMode = 'curriculum' | 'lesson' | 'puzzle'

export function ScholarExperience({
  onComplete,
  onReturn,
  completedPhases = [],
  onPhaseComplete,
}: Props) {
  const [mode, setMode] = useState<ViewMode>('curriculum')
  const [activePhaseId, setActivePhaseId] = useState<string>('scholar-p1')
  const [localCompletedPhases, setLocalCompletedPhases] = useState<string[]>(completedPhases)

  // Puzzle state for featured simulation
  const [seqAnswer, setSeqAnswer] = useState<number | null>(null)
  const [seqSubmitted, setSeqSubmitted] = useState(false)
  const [gridAnswer, setGridAnswer] = useState<number | null>(null)
  const [gridSubmitted, setGridSubmitted] = useState(false)
  const [stage, setStage] = useState<'intro' | 'puzzle1' | 'puzzle2' | 'history' | 'complete'>('intro')

  const isSeqCorrect = seqAnswer === 13
  const isGridCorrect = gridAnswer === 11

  const activePhase = SCHOLAR_CURRICULUM.phases.find(p => p.id === activePhaseId) || SCHOLAR_CURRICULUM.phases[0]
  const activeSubLesson = activePhase.subLessons[0]

  function handleSelectPhase(phaseId: string) {
    setActivePhaseId(phaseId)
    setMode('lesson')
  }

  function handleLessonComplete(_score: number) {
    if (!localCompletedPhases.includes(activePhaseId)) {
      setLocalCompletedPhases(prev => [...prev, activePhaseId])
      onPhaseComplete?.(activePhaseId, 45)
    }
    onComplete()
    setMode('curriculum')
  }

  function handlePuzzleFinish() {
    onComplete()
    setMode('curriculum')
  }

  // 1. Interactive Lesson Mode
  if (mode === 'lesson' && activeSubLesson) {
    return (
      <LessonRunner
        subLesson={activeSubLesson}
        environmentName="Scholar's Courtyard"
        onComplete={handleLessonComplete}
        onExit={() => setMode('curriculum')}
      />
    )
  }

  // 2. Featured Simulation: Magic Square & Rhythm Puzzle
  if (mode === 'puzzle') {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <button onClick={() => setMode('curriculum')} className={styles.backBtn} title="Back to Scholar Curriculum">
              ← Return to Phases
            </button>
            <span className={styles.divider}>/</span>
            <span className={styles.realmName}>Featured Puzzles: Virahanka & Khajuraho 34</span>
          </div>
          <div className={styles.stagePill}>
            {stage === 'intro' ? 'Overview' : stage === 'puzzle1' ? 'Challenge 1/2' : stage === 'puzzle2' ? 'Challenge 2/2' : stage === 'history' ? 'History' : 'Mastered'}
          </div>
        </header>

        <main className={styles.main}>
          {stage === 'intro' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Mathematical Thinking</div>
              <h1 className={styles.title}>The Rhythm of Numbers</h1>
              <p className={styles.lead}>
                Welcome to the Scholar's Courtyard, shaded by an ancient banyan tree. In ancient India, mathematics was not
                just rote formulas — it was discovered through poetry rhythms, architecture, and symmetries in nature.
              </p>

              <div className={styles.banyanGraphic}>
                <svg viewBox="0 0 600 140" fill="none" className={styles.graphicSvg} aria-hidden="true">
                  <rect width="600" height="140" fill="#EFE8D6" rx="8" />
                  <rect x="280" y="40" width="40" height="70" fill="#5E6B52" />
                  <ellipse cx="300" cy="35" rx="140" ry="30" fill="#788568" />
                  <rect x="120" y="70" width="80" height="50" rx="4" fill="#40382F" />
                  <text x="160" y="100" fill="#FFFDF8" fontSize="16" fontFamily="serif" textAnchor="middle">1, 2, 3, 5, 8...</text>
                  <rect x="400" y="70" width="80" height="50" rx="4" fill="#40382F" />
                  <text x="440" y="100" fill="#D6B775" fontSize="16" fontFamily="serif" textAnchor="middle">∑ = 34</text>
                </svg>
              </div>

              <p className={styles.bodyText}>
                You will solve two classic reasoning challenges: discovering the poetic number sequence described by Virahanka
                and Hemachandra centuries before Europe, and deciphering a harmonious magic square.
              </p>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStage('puzzle1')}>
                  Begin First Pattern Challenge →
                </button>
              </div>
            </div>
          )}

          {stage === 'puzzle1' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Challenge 1 of 2: Prosody & Sequences</div>
              <h2 className={styles.title}>The Beats of Long and Short Syllables</h2>
              <p className={styles.lead}>
                Indian grammarian Pingala and mathematician Virahanka studied musical beats: a short beat (Laghu, 1 unit)
                and a long beat (Guru, 2 units). How many combinations exist for rhythms of length 1, 2, 3, 4, 5, and 6?
              </p>

              <div className={styles.sequenceBox}>
                <div className={styles.sequenceRow}>
                  <div className={styles.numTile}>1</div>
                  <div className={styles.arrow}>→</div>
                  <div className={styles.numTile}>2</div>
                  <div className={styles.arrow}>→</div>
                  <div className={styles.numTile}>3</div>
                  <div className={styles.arrow}>→</div>
                  <div className={styles.numTile}>5</div>
                  <div className={styles.arrow}>→</div>
                  <div className={styles.numTile}>8</div>
                  <div className={styles.arrow}>→</div>
                  <div className={`${styles.numTile} ${styles.targetTile}`}>
                    {seqAnswer !== null ? seqAnswer : '?'}
                  </div>
                </div>
              </div>

              <p className={styles.hintText}>
                <em>Hint: Look at how each number relates to the two numbers that came immediately before it! (e.g. 1+2=3, 2+3=5, 3+5=8...)</em>
              </p>

              <div className={styles.choiceGrid}>
                {[10, 11, 13, 16].map(num => (
                  <button
                    key={num}
                    className={`${styles.choiceBtn} ${seqAnswer === num ? styles.choiceSelected : ''}`}
                    onClick={() => {
                      setSeqAnswer(num)
                      setSeqSubmitted(true)
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>

              {seqSubmitted && (
                <div className={isSeqCorrect ? styles.correctBox : styles.tryAgainBox}>
                  {isSeqCorrect ? (
                    <div>
                      <strong>✦ Brilliant observation!</strong> 5 + 8 = 13.
                      This sequence was documented by Indian scholars Virahanka (c. 700 CE) and Hemachandra (1150 CE),
                      long before it was named after Fibonacci in Europe!
                    </div>
                  ) : (
                    <div>
                      Check the pattern: each term is the sum of the two previous terms (3+5=8). What is 5 + 8?
                    </div>
                  )}
                </div>
              )}

              <div className={styles.actionRow}>
                <button className={styles.secondaryBtn} onClick={() => setStage('intro')}>
                  ← Back
                </button>
                <button
                  className={styles.primaryBtn}
                  disabled={!isSeqCorrect}
                  onClick={() => setStage('puzzle2')}
                >
                  Proceed to Magic Square →
                </button>
              </div>
            </div>
          )}

          {stage === 'puzzle2' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Challenge 2 of 2: Harmony of Sums</div>
              <h2 className={styles.title}>The Chautisa Yantra (Khajuraho Magic Square)</h2>
              <p className={styles.lead}>
                In this 4×4 magic square from 10th-century Khajuraho, every horizontal row, vertical column, and diagonal
                adds up to exactly <strong>34</strong>!
              </p>

              <div className={styles.gridDisplay}>
                <div className={styles.magicGrid}>
                  <div className={styles.gridCell}>7</div>
                  <div className={styles.gridCell}>12</div>
                  <div className={styles.gridCell}>1</div>
                  <div className={styles.gridCell}>14</div>

                  <div className={styles.gridCell}>2</div>
                  <div className={styles.gridCell}>13</div>
                  <div className={styles.gridCell}>8</div>
                  <div className={`${styles.gridCell} ${styles.targetCell}`}>
                    {gridAnswer !== null ? gridAnswer : '?'}
                  </div>

                  <div className={styles.gridCell}>16</div>
                  <div className={styles.gridCell}>3</div>
                  <div className={styles.gridCell}>10</div>
                  <div className={styles.gridCell}>5</div>

                  <div className={styles.gridCell}>9</div>
                  <div className={styles.gridCell}>6</div>
                  <div className={styles.gridCell}>15</div>
                  <div className={styles.gridCell}>4</div>
                </div>
              </div>

              <p className={styles.hintText}>
                In the second row: 2 + 13 + 8 = 23. What number is needed to make the sum exactly <strong>34</strong>?
              </p>

              <div className={styles.choiceGrid}>
                {[9, 11, 12, 14].map(num => (
                  <button
                    key={num}
                    className={`${styles.choiceBtn} ${gridAnswer === num ? styles.choiceSelected : ''}`}
                    onClick={() => {
                      setGridAnswer(num)
                      setGridSubmitted(true)
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>

              {gridSubmitted && (
                <div className={isGridCorrect ? styles.correctBox : styles.tryAgainBox}>
                  {isGridCorrect ? (
                    <div>
                      <strong>✦ Perfectly solved!</strong> 23 + 11 = 34.
                      Remarkably, in the Chautisa Yantra, every 2×2 sub-quadrant and the four corners (7+14+9+4) also equal 34!
                    </div>
                  ) : (
                    <div>
                      2 + 13 + 8 = 23. To reach 34, calculate: 34 − 23 = ?
                    </div>
                  )}
                </div>
              )}

              <div className={styles.actionRow}>
                <button className={styles.secondaryBtn} onClick={() => setStage('puzzle1')}>
                  ← Back
                </button>
                <button
                  className={styles.primaryBtn}
                  disabled={!isGridCorrect}
                  onClick={() => setStage('history')}
                >
                  Discover Historical Connection →
                </button>
              </div>
            </div>
          )}

          {stage === 'history' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Indian Mathematical Heritage</div>
              <h2 className={styles.title}>The Heritage of Indian Logic & Algebra</h2>
              <p className={styles.lead}>
                From Pingala's binary representations of meter (c. 300 BCE) to Aryabhata and Brahmagupta's formalisation of zero
                (Shunya) and negative numbers, Indian mathematicians viewed pattern-making as an art form.
              </p>

              <div className={styles.historyList}>
                <div className={styles.historyCard}>
                  <span className={styles.historyIcon}>✦</span>
                  <div>
                    <h4 className={styles.historyCardTitle}>Pingala's Meru Prastara</h4>
                    <p className={styles.historyCardText}>
                      Pingala's <em>Chhandas Shastra</em> described what is now called Pascal's Triangle more than a millennium
                      before Blaise Pascal, using it to compute poetic syllable combinations.
                    </p>
                  </div>
                </div>

                <div className={styles.historyCard}>
                  <span className={styles.historyIcon}>✦</span>
                  <div>
                    <h4 className={styles.historyCardTitle}>Brahmagupta's Rules of Zero</h4>
                    <p className={styles.historyCardText}>
                      In 628 CE, Brahmagupta was the first in recorded history to treat Zero (0) as an algebraic number with its
                      own operational arithmetic rules, rather than just an empty placeholder.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStage('complete')}>
                  Claim Scholar's Mastery ✓
                </button>
              </div>
            </div>
          )}

          {stage === 'complete' && (
            <div className={`${styles.card} ${styles.completedCard}`}>
              <div className={styles.completedTrophy}>
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" fill="#FFFDF8" stroke="#CDA84D" strokeWidth="3" />
                  <polygon points="32,16 36,26 47,27 39,34 41,45 32,39 23,45 25,34 17,27 28,26" fill="#CDA84D" />
                </svg>
              </div>
              <h2 className={styles.completedTitle}>Scholar's Challenge Complete!</h2>
              <p className={styles.completedText}>
                You deciphered rhythmic number sequences and the mathematical symmetry of historical magic squares.
              </p>
              <div className={styles.rewardBox}>
                <span>+45 Gyan Knowledge Points</span>
                <span>Badge Unlocked: <strong>Pattern Seeker</strong></span>
              </div>
              <button className={styles.primaryBtn} onClick={handlePuzzleFinish}>
                Return to Curriculum →
              </button>
            </div>
          )}
        </main>
      </div>
    )
  }

  // 3. Default: Curriculum / Phase Selector
  return (
    <PhaseSelector
      environmentName={SCHOLAR_CURRICULUM.environmentName}
      environmentLore="Sit under the banyan tree of mathematics. Decipher the rhythmic sequences of Virahanka, Pingala's binary meter, and harmonious magic squares."
      heroIllustrationKey="magicSquareTile"
      phases={SCHOLAR_CURRICULUM.phases}
      completedPhaseIds={localCompletedPhases}
      onSelectPhase={handleSelectPhase}
      onReturn={onReturn}
      featuredAction={{
        label: 'The Rhythm of Numbers & Khajuraho 34',
        subtitle: 'Solve Virahanka poetic sequences & the 34 magic square',
        illustrationKey: 'magicSquareTile',
        onClick: () => {
          setStage('intro')
          setMode('puzzle')
        },
      }}
    />
  )
}
