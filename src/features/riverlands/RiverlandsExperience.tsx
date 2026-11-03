import { useState } from 'react'
import { RIVERLANDS_CURRICULUM } from '../../data/riverlandsCurriculum'
import { PhaseSelector } from '../../engine/PhaseSelector'
import { LessonRunner } from '../../engine/LessonRunner'
import {
  HOUSEHOLDS,
  TOTAL_WATER_SUPPLY,
  evaluateAllocation,
  REFLECTION_QUESTIONS,
  HISTORICAL_CONTEXT,
} from '../../data/riverlandsChallenge'
import type { AllocationState, OutcomeResult } from '../../data/riverlandsChallenge'
import { Button } from '../../components/Button'
import { Illustration } from '../../assets/illustrations'
import styles from './RiverlandsExperience.module.css'

interface Props {
  onComplete: () => void
  onReturn: () => void
  completedPhases?: string[]
  onPhaseComplete?: (phaseId: string, points: number) => void
}

type ViewMode = 'curriculum' | 'lesson' | 'simulation'
type SimStage = 'intro' | 'allocate' | 'outcome' | 'reflect' | 'history' | 'complete'

export function RiverlandsExperience({
  onComplete,
  onReturn,
  completedPhases = [],
  onPhaseComplete,
}: Props) {
  const [mode, setMode] = useState<ViewMode>('curriculum')
  const [activePhaseId, setActivePhaseId] = useState<string>('riverlands-p1')
  const [localCompletedPhases, setLocalCompletedPhases] = useState<string[]>(completedPhases)

  // Simulation state
  const [simStage, setSimStage] = useState<SimStage>('intro')
  const [allocation, setAllocation] = useState<AllocationState>({ potter: 0, farmer: 0, herder: 0 })
  const [outcome, setOutcome] = useState<OutcomeResult | null>(null)
  const [activeReflectIndex, setActiveReflectIndex] = useState(0)
  const [chosenAnswers, setChosenAnswers] = useState<Record<string, number>>({})

  const totalAllocated = Object.values(allocation).reduce((a, b) => a + b, 0)
  const remainingWater = TOTAL_WATER_SUPPLY - totalAllocated

  const activePhase = RIVERLANDS_CURRICULUM.phases.find(p => p.id === activePhaseId) || RIVERLANDS_CURRICULUM.phases[0]
  const activeSubLesson = activePhase.subLessons[0]

  function handleSelectPhase(phaseId: string) {
    setActivePhaseId(phaseId)
    setMode('lesson')
  }

  function handleLessonComplete(_score: number) {
    if (!localCompletedPhases.includes(activePhaseId)) {
      setLocalCompletedPhases(prev => [...prev, activePhaseId])
      onPhaseComplete?.(activePhaseId, 50)
    }
    onComplete()
    setMode('curriculum')
  }

  function handleSimFinish() {
    onComplete()
    setMode('curriculum')
  }

  function handleAdd(id: string) {
    if (remainingWater <= 0) return
    setAllocation(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  function handleRemove(id: string) {
    if ((allocation[id] || 0) <= 0) return
    setAllocation(prev => ({ ...prev, [id]: (prev[id] || 0) - 1 }))
  }

  function handleReset() {
    setAllocation({ potter: 0, farmer: 0, herder: 0 })
  }

  function handleSubmitAllocation() {
    const result = evaluateAllocation(allocation)
    setOutcome(result)
    setSimStage('outcome')
  }

  function handleSelectAnswer(questionId: string, optionIndex: number) {
    setChosenAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }

  // 1. Interactive Lesson Mode
  if (mode === 'lesson' && activeSubLesson) {
    return (
      <LessonRunner
        subLesson={activeSubLesson}
        environmentName="The Riverlands"
        onComplete={handleLessonComplete}
        onExit={() => setMode('curriculum')}
      />
    )
  }

  // 2. Featured Simulation: Water Allocation Challenge
  if (mode === 'simulation') {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <button onClick={() => setMode('curriculum')} className={styles.backBtn} title="Back to Riverlands Curriculum">
              ← Return to Phases
            </button>
            <span className={styles.divider}>/</span>
            <span className={styles.realmName}>Featured Challenge: The Water of Life</span>
          </div>

          <div className={styles.stageIndicator}>
            {simStage === 'intro' && 'Overview'}
            {simStage === 'allocate' && 'Stage 1 of 4: Allocate'}
            {simStage === 'outcome' && 'Stage 2 of 4: Results'}
            {simStage === 'reflect' && 'Stage 3 of 4: Reflection'}
            {simStage === 'history' && 'Stage 4 of 4: History'}
            {simStage === 'complete' && 'Mastered'}
          </div>
        </header>

        <main className={styles.main}>
          {simStage === 'intro' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Community Responsibility Challenge</div>
              <h1 className={styles.title}>The Water of Life</h1>
              <p className={styles.lead}>
                A hot summer afternoon in the settlement. The village well has yielded exactly{' '}
                <strong>{TOTAL_WATER_SUPPLY} large clay pots of water</strong> today.
              </p>
              <div className={styles.waterMeter}>
                <div className={styles.waterPotIcon} aria-hidden="true">
                  <Illustration name="matkaPot" size={44} />
                </div>
                <div className={styles.waterSupplyCount}>{TOTAL_WATER_SUPPLY}</div>
                <div className={styles.waterSupplyLabel}>Units available in the village tank today</div>
              </div>
              <p className={styles.bodyText}>
                Three different households depend on this single water source. As the village water steward,
                how will you distribute it fairly?
              </p>
              <div className={styles.actionRow}>
                <Button variant="primary" onClick={() => setSimStage('allocate')}>
                  Begin Water Allocation →
                </Button>
              </div>
            </div>
          )}

          {simStage === 'allocate' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Step 1: Distribution</div>
              <h2 className={styles.title}>Distribute Today's Water</h2>
              <div className={styles.supplyStatus}>
                <div className={styles.supplyMetric}>
                  <span className={styles.metricNumber}>{remainingWater}</span>
                  <span className={styles.metricLabel}>Pots Remaining</span>
                </div>
                <div className={styles.supplyMetric}>
                  <span className={styles.metricNumber}>{totalAllocated}</span>
                  <span className={styles.metricLabel}>Allocated</span>
                </div>
              </div>

              <div className={styles.householdGrid}>
                {HOUSEHOLDS.map(h => {
                  const current = allocation[h.id] || 0
                  return (
                    <div key={h.id} className={styles.householdCard}>
                      <h3 className={styles.hhTitle}>{h.title}</h3>
                      <p className={styles.hhOccupant}>{h.occupant} · {h.role}</p>
                      <p className={styles.hhDesc}>{h.description}</p>
                      <div className={styles.allocControl}>
                        <button
                          type="button"
                          className={styles.counterBtn}
                          onClick={() => handleRemove(h.id)}
                          disabled={current <= 0}
                        >
                          −
                        </button>
                        <span className={styles.currentAmount}>{current}</span>
                        <button
                          type="button"
                          className={styles.counterBtn}
                          onClick={() => handleAdd(h.id)}
                          disabled={remainingWater <= 0}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className={styles.actionRow}>
                <Button variant="secondary" onClick={handleReset}>↺ Reset Pots</Button>
                <Button variant="primary" onClick={handleSubmitAllocation} disabled={totalAllocated === 0}>
                  Confirm Allocation →
                </Button>
              </div>
            </div>
          )}

          {simStage === 'outcome' && outcome && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Step 2: Consequences</div>
              <h2 className={styles.title}>{outcome.headline}</h2>
              <p className={styles.lead}>{outcome.summary}</p>
              <div className={styles.householdNotesList}>
                {outcome.householdNotes.map(n => (
                  <div key={n.id} className={`${styles.householdNote} ${styles['status_' + n.status]}`}>
                    <p className={styles.noteText}>{n.note}</p>
                  </div>
                ))}
              </div>
              <div className={styles.actionRow}>
                <Button variant="secondary" onClick={() => setSimStage('allocate')}>← Adjust Amounts</Button>
                <Button variant="primary" onClick={() => setSimStage('reflect')}>Reflect on Decisions →</Button>
              </div>
            </div>
          )}

          {simStage === 'reflect' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Step 3: Reflection</div>
              <h2 className={styles.title}>Considering the Lessons</h2>
              {(() => {
                const q = REFLECTION_QUESTIONS[activeReflectIndex]
                const chosen = chosenAnswers[q.id]
                return (
                  <div className={styles.questionBlock}>
                    <p className={styles.questionPrompt}>{q.prompt}</p>
                    <div className={styles.optionsList}>
                      {q.options.map((opt, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`${styles.optionBtn} ${chosen === i ? styles.optionChosen : ''}`}
                          onClick={() => handleSelectAnswer(q.id, i)}
                        >
                          <span className={styles.optionRadio}>{chosen === i ? '●' : '○'}</span>
                          <span className={styles.optionLabel}>{opt.label}</span>
                        </button>
                      ))}
                    </div>
                    {chosen !== undefined && (
                      <div className={styles.insightBox}>
                        <p className={styles.insightText}>{q.options[chosen].insight}</p>
                      </div>
                    )}
                  </div>
                )
              })()}
              <div className={styles.actionRow}>
                {activeReflectIndex > 0 ? (
                  <Button variant="secondary" onClick={() => setActiveReflectIndex(prev => prev - 1)}>
                    ← Previous
                  </Button>
                ) : (
                  <Button variant="secondary" onClick={() => setSimStage('outcome')}>
                    ← Back to Results
                  </Button>
                )}
                {activeReflectIndex < REFLECTION_QUESTIONS.length - 1 ? (
                  <Button
                    variant="primary"
                    disabled={chosenAnswers[REFLECTION_QUESTIONS[activeReflectIndex].id] === undefined}
                    onClick={() => setActiveReflectIndex(prev => prev + 1)}
                  >
                    Next Question →
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    disabled={chosenAnswers[REFLECTION_QUESTIONS[activeReflectIndex].id] === undefined}
                    onClick={() => setSimStage('history')}
                  >
                    Explore Stepwells & Heritage →
                  </Button>
                )}
              </div>
            </div>
          )}

          {simStage === 'history' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Historical Indian Water Heritage</div>
              <h2 className={styles.title}>Water Architecture of Ancient India</h2>
              <div className={styles.historyCardsGrid}>
                {HISTORICAL_CONTEXT.map((h, i) => (
                  <div key={i} className={styles.historyCard}>
                    <h3 className={styles.historyTitle}>{h.title}</h3>
                    <p className={styles.historySubtitle}>{h.subtitle}</p>
                    <p className={styles.historyFact}>{h.fact}</p>
                  </div>
                ))}
              </div>
              <div className={styles.actionRow}>
                <Button variant="primary" onClick={() => setSimStage('complete')}>
                  Complete Water Challenge ✓
                </Button>
              </div>
            </div>
          )}

          {simStage === 'complete' && (
            <div className={`${styles.card} ${styles.completedCard}`}>
              <div className={styles.completedTrophy}>
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" fill="#FFFDF8" stroke="#CDA84D" strokeWidth="3" />
                  <polygon points="32,16 36,26 47,27 39,34 41,45 32,39 23,45 25,34 17,27 28,26" fill="#CDA84D" />
                </svg>
              </div>
              <h2 className={styles.completedTitle}>Water Challenge Complete!</h2>
              <p className={styles.completedText}>
                You explored traditional principles of equitable water distribution and historical stepwell architecture.
              </p>
              <div className={styles.rewardBox}>
                <span>+50 Gyan Knowledge Points</span>
                <span>Badge Unlocked: <strong>Water Guardian</strong></span>
              </div>
              <Button variant="primary" onClick={handleSimFinish}>
                Return to Curriculum →
              </Button>
            </div>
          )}
        </main>
      </div>
    )
  }

  // 3. Default: Curriculum / Phase Selector
  return (
    <PhaseSelector
      environmentName={RIVERLANDS_CURRICULUM.environmentName}
      environmentLore="Walk along the living monsoon rivers and stepwells. Discover subterranean architecture and traditional Neerkatti water-sharing customs."
      heroIllustrationKey="stepwell"
      phases={RIVERLANDS_CURRICULUM.phases}
      completedPhaseIds={localCompletedPhases}
      onSelectPhase={handleSelectPhase}
      onReturn={onReturn}
      featuredAction={{
        label: 'The Water of Life (Allocation Challenge)',
        subtitle: 'Distribute daily reservoir supply among households, herds & crops',
        illustrationKey: 'stepwell',
        onClick: () => {
          setSimStage('intro')
          setMode('simulation')
        },
      }}
    />
  )
}
