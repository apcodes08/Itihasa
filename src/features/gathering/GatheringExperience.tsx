import { useState } from 'react'
import { GATHERING_CURRICULUM } from '../../data/gatheringCurriculum'
import { PhaseSelector } from '../../engine/PhaseSelector'
import { LessonRunner } from '../../engine/LessonRunner'
import styles from './GatheringExperience.module.css'

interface Props {
  onComplete: () => void
  onReturn: () => void
  completedPhases?: string[]
  onPhaseComplete?: (phaseId: string, points: number) => void
}

type ViewMode = 'curriculum' | 'lesson' | 'game'

export function GatheringExperience({
  onComplete,
  onReturn,
  completedPhases = [],
  onPhaseComplete,
}: Props) {
  const [mode, setMode] = useState<ViewMode>('curriculum')
  const [activePhaseId, setActivePhaseId] = useState<string>('gathering-p1')
  const [localCompletedPhases, setLocalCompletedPhases] = useState<string[]>(completedPhases)

  // Game state for featured simulation
  const [stage, setStage] = useState<'intro' | 'play' | 'outcome' | 'history' | 'complete'>('intro')
  const [chosenMove, setChosenMove] = useState<'safety' | 'sprint' | 'block' | null>(null)

  const activePhase = GATHERING_CURRICULUM.phases.find(p => p.id === activePhaseId) || GATHERING_CURRICULUM.phases[0]
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

  function handleGameFinish() {
    onComplete()
    setMode('curriculum')
  }

  // 1. Interactive Lesson Mode
  if (mode === 'lesson' && activeSubLesson) {
    return (
      <LessonRunner
        subLesson={activeSubLesson}
        environmentName="The Gathering Place"
        onComplete={handleLessonComplete}
        onExit={() => setMode('curriculum')}
      />
    )
  }

  // 2. Featured Simulation: Chaupar Tactical Match
  if (mode === 'game') {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <button onClick={() => setMode('curriculum')} className={styles.backBtn} title="Back to Gathering Curriculum">
              ← Return to Phases
            </button>
            <span className={styles.divider}>/</span>
            <span className={styles.realmName}>Featured Game: Tactical Chaupar Match</span>
          </div>
          <div className={styles.stagePill}>
            {stage === 'intro' ? 'Overview' : stage === 'play' ? 'Strategic Choice' : stage === 'outcome' ? 'Outcome' : stage === 'history' ? 'History' : 'Mastered'}
          </div>
        </header>

        <main className={styles.main}>
          {stage === 'intro' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Strategy, Probability & Tactics</div>
              <h1 className={styles.title}>The Art of Ancient Board Games</h1>
              <p className={styles.lead}>
                Welcome to the open stone pavilion under the peepal trees. For thousands of years, Indian communities gathered
                to play games of strategy like Chaupar, Ganjifa, and Moksha Patam.
              </p>

              <div className={styles.boardGraphic}>
                <svg viewBox="0 0 600 160" fill="none" className={styles.graphicSvg} aria-hidden="true">
                  <rect width="600" height="160" fill="#EFE8D6" rx="8" />
                  <g transform="translate(300, 80)">
                    <rect x="-70" y="-20" width="140" height="40" fill="#D6B775" rx="2" stroke="#9A7B48" strokeWidth="1.5" />
                    <rect x="-20" y="-70" width="40" height="140" fill="#D6B775" rx="2" stroke="#9A7B48" strokeWidth="1.5" />
                    <rect x="-20" y="-20" width="40" height="40" fill="#B96F4B" />
                    <circle cx="-40" cy="0" r="7" fill="#40382F" />
                    <circle cx="40" cy="0" r="7" fill="#B96F4B" />
                    <circle cx="0" cy="-40" r="7" fill="#788568" />
                    <circle cx="0" cy="40" r="7" fill="#FFFDF8" />
                  </g>
                  <text x="100" y="85" fill="#40382F" fontSize="13" fontWeight="bold">Risk vs Reward</text>
                  <text x="500" y="85" fill="#40382F" fontSize="13" fontWeight="bold">Probability & Foresight</text>
                </svg>
              </div>

              <p className={styles.bodyText}>
                These were not merely games of chance: they taught patience, probability calculation, and tactical sacrifice.
                You will step into an active match of Chaupar at a crucial turning point.
              </p>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStage('play')}>
                  Enter the Chaupar Match →
                </button>
              </div>
            </div>
          )}

          {stage === 'play' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Tactical Scenario</div>
              <h2 className={styles.title}>The Cowrie Roll: 4 Points</h2>
              <p className={styles.lead}>
                Six cowrie shells have been cast on the cloth, landing with 4 mouths upright. You have 4 moves to distribute.
                Inspect the board situation:
              </p>

              <div className={styles.scenarioBox}>
                <div className={styles.boardVisual}>
                  <div className={styles.pawnStatusCard}>
                    <div className={styles.pawnDot} style={{ background: '#B96F4B' }} />
                    <div>
                      <strong>Pawn 1 (The Scout):</strong> 4 steps away from the safe fortress (Charkoni).
                      If unmoved, an opponent pawn 3 steps behind could capture it next turn!
                    </div>
                  </div>

                  <div className={styles.pawnStatusCard}>
                    <div className={styles.pawnDot} style={{ background: '#788568' }} />
                    <div>
                      <strong>Pawn 2 (The Closer):</strong> On the final approach to the central Home (Charon).
                      Moving 4 steps puts it directly on the brink of scoring victory.
                    </div>
                  </div>
                </div>
              </div>

              <h3 className={styles.choiceHeader}>Which tactical command do you give?</h3>

              <div className={styles.choicesList}>
                <button
                  className={`${styles.moveOption} ${chosenMove === 'safety' ? styles.moveSelected : ''}`}
                  onClick={() => setChosenMove('safety')}
                >
                  <div className={styles.moveHead}>
                    <span className={styles.moveTag}>Defensive Maneuver</span>
                    <span>{chosenMove === 'safety' ? '●' : '○'}</span>
                  </div>
                  <h4 className={styles.moveTitle}>Move Pawn 1 into the Safe Castle (Charkoni)</h4>
                  <p className={styles.moveDesc}>
                    Eliminates all risk of capture. Once in the safe castle, no opponent can take your pawn.
                  </p>
                </button>

                <button
                  className={`${styles.moveOption} ${chosenMove === 'sprint' ? styles.moveSelected : ''}`}
                  onClick={() => setChosenMove('sprint')}
                >
                  <div className={styles.moveHead}>
                    <span className={styles.moveTag}>Aggressive Sprint</span>
                    <span>{chosenMove === 'sprint' ? '●' : '○'}</span>
                  </div>
                  <h4 className={styles.moveTitle}>Rush Pawn 2 towards the Victory Goal</h4>
                  <p className={styles.moveDesc}>
                    Pushes for an immediate win, but gambles that the opponent will fail their dice roll to capture Pawn 1.
                  </p>
                </button>

                <button
                  className={`${styles.moveOption} ${chosenMove === 'block' ? styles.moveSelected : ''}`}
                  onClick={() => setChosenMove('block')}
                >
                  <div className={styles.moveHead}>
                    <span className={styles.moveTag}>The Pair Strategy (Jodi)</span>
                    <span>{chosenMove === 'block' ? '●' : '○'}</span>
                  </div>
                  <h4 className={styles.moveTitle}>Form a Double Pair (Jodi) to block the narrow pathway</h4>
                  <p className={styles.moveDesc}>
                    In Chaupar, a pair cannot be bypassed or captured by a single opponent pawn, creating a strategic roadblock.
                  </p>
                </button>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.secondaryBtn} onClick={() => setStage('intro')}>
                  ← Back
                </button>
                <button
                  className={styles.primaryBtn}
                  disabled={!chosenMove}
                  onClick={() => setStage('outcome')}
                >
                  Execute Move & Reveal Result →
                </button>
              </div>
            </div>
          )}

          {stage === 'outcome' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Tactical Analysis</div>
              <h2 className={styles.title}>The Master Strategist's Evaluation</h2>

              {chosenMove === 'safety' && (
                <div className={styles.evalBox}>
                  <h3 className={styles.evalTitle}>✦ Wise Conservation of Assets</h3>
                  <p className={styles.evalText}>
                    Your Scout reaches the cross-marked castle safely! When the opponent rolled a 3, their strike landed
                    on empty ground. Because you protected your piece, you maintained your lead without losing turns restarting from the start!
                  </p>
                </div>
              )}

              {chosenMove === 'sprint' && (
                <div className={styles.evalBox}>
                  <h3 className={styles.evalTitle}>✦ High Stakes Gambler</h3>
                  <p className={styles.evalText}>
                    Pawn 2 is within 1 step of home! However, your opponent rolled a 3 and captured Pawn 1, sending it all the
                    way back to the central courtyard. A high-risk gamble that taught the cost of reckless haste!
                  </p>
                </div>
              )}

              {chosenMove === 'block' && (
                <div className={styles.evalBox}>
                  <h3 className={styles.evalTitle}>✦ Masterful Traditional Formation (Jodi)</h3>
                  <p className={styles.evalText}>
                    Classical Chaupar masters revere the Jodi! By locking the two pawns together, you created an impenetrable barrier.
                    Your opponent was forced to take a detour, giving you total control of the tempo!
                  </p>
                </div>
              )}

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStage('history')}>
                  Explore Ancient Game Heritage →
                </button>
              </div>
            </div>
          )}

          {stage === 'history' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Archaeological & Cultural Legacy</div>
              <h2 className={styles.title}>Carved in Stone: India's Board Game Legacy</h2>
              <p className={styles.lead}>
                Across India, ancient board game tracks are permanently incised into temple floors, fort ramparts, and cave shelters.
              </p>

              <div className={styles.historyGrid}>
                <div className={styles.historyCard}>
                  <span className={styles.historyIcon}>✦</span>
                  <div>
                    <h4 className={styles.historyCardHeading}>Ellora Caves (Cave 21)</h4>
                    <p className={styles.historyCardDesc}>
                      A celebrated 6th-century rock sculpture depicts Shiva and Parvati engaged in a serious game of Chaupar,
                      symbolizing cosmic cycles of balance and chance.
                    </p>
                  </div>
                </div>

                <div className={styles.historyCard}>
                  <span className={styles.historyIcon}>✦</span>
                  <div>
                    <h4 className={styles.historyCardHeading}>Moksha Patam (Snakes & Ladders)</h4>
                    <p className={styles.historyCardDesc}>
                      Invented by 13th-century philosopher-saint Gyandev, the game taught morality: virtues (like humility and generosity)
                      acted as ladders, while vices (greed, anger) caused falls back downward.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStage('complete')}>
                  Claim Strategist's Seal ✓
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
              <h2 className={styles.completedTitle}>Strategic Trial Mastered!</h2>
              <p className={styles.completedText}>
                You evaluated board positioning, probabilities, and tactical foresight in classical Indian gaming traditions.
              </p>
              <div className={styles.rewardBox}>
                <span>+45 Gyan Knowledge Points</span>
                <span>Badge Unlocked: <strong>Master of Tactics</strong></span>
              </div>
              <button className={styles.primaryBtn} onClick={handleGameFinish}>
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
      environmentName={GATHERING_CURRICULUM.environmentName}
      environmentLore="Enter the open stone pavilion where ancient strategists gather. Master the probabilities of cowrie throws and the four wings of Chaturanga."
      heroIllustrationKey="chauparBoard"
      phases={GATHERING_CURRICULUM.phases}
      completedPhaseIds={localCompletedPhases}
      onSelectPhase={handleSelectPhase}
      onReturn={onReturn}
      featuredAction={{
        label: 'The Chaupar Tactical Match',
        subtitle: 'Cast cowrie shells, command pawns, and test risk vs sanctuary defense',
        illustrationKey: 'chauparBoard',
        onClick: () => {
          setStage('intro')
          setMode('game')
        },
      }}
    />
  )
}
