import { useState } from 'react'
import { WORKSHOP_CURRICULUM } from '../../data/workshopCurriculum'
import { PhaseSelector } from '../../engine/PhaseSelector'
import { LessonRunner } from '../../engine/LessonRunner'
import styles from './WorkshopExperience.module.css'

interface Props {
  onComplete: () => void
  onReturn: () => void
  completedPhases?: string[]
  onPhaseComplete?: (phaseId: string, points: number) => void
}

type ViewMode = 'curriculum' | 'lesson' | 'arch'

export function WorkshopExperience({
  onComplete,
  onReturn,
  completedPhases = [],
  onPhaseComplete,
}: Props) {
  const [mode, setMode] = useState<ViewMode>('curriculum')
  const [activePhaseId, setActivePhaseId] = useState<string>('workshop-p1')
  const [localCompletedPhases, setLocalCompletedPhases] = useState<string[]>(completedPhases)

  // Arch simulation state
  const [stage, setStage] = useState<'intro' | 'build' | 'history' | 'complete'>('intro')
  const [placedStones, setPlacedStones] = useState<number[]>([])
  const [keystonePlaced, setKeystonePlaced] = useState(false)

  const activePhase = WORKSHOP_CURRICULUM.phases.find(p => p.id === activePhaseId) || WORKSHOP_CURRICULUM.phases[0]
  const activeSubLesson = activePhase.subLessons[0]

  function handleSelectPhase(phaseId: string) {
    setActivePhaseId(phaseId)
    setMode('lesson')
  }

  function handleLessonComplete(_score: number) {
    if (!localCompletedPhases.includes(activePhaseId)) {
      setLocalCompletedPhases(prev => [...prev, activePhaseId])
      onPhaseComplete?.(activePhaseId, 55)
    }
    onComplete()
    setMode('curriculum')
  }

  function handlePlaceStone(stoneId: number) {
    if (!placedStones.includes(stoneId)) {
      const next = [...placedStones, stoneId]
      setPlacedStones(next)
      if (next.length === 3) {
        setKeystonePlaced(true)
      }
    }
  }

  function handleResetArch() {
    setPlacedStones([])
    setKeystonePlaced(false)
  }

  function handleArchFinish() {
    onComplete()
    setMode('curriculum')
  }

  // 1. Interactive Lesson Mode
  if (mode === 'lesson' && activeSubLesson) {
    return (
      <LessonRunner
        subLesson={activeSubLesson}
        environmentName="The Workshop"
        onComplete={handleLessonComplete}
        onExit={() => setMode('curriculum')}
      />
    )
  }

  // 2. Featured Simulation: Mortarless Corbelled Arch Assembly
  if (mode === 'arch') {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <button onClick={() => setMode('curriculum')} className={styles.backBtn} title="Back to Workshop Curriculum">
              ← Return to Phases
            </button>
            <span className={styles.divider}>/</span>
            <span className={styles.realmName}>Featured Craft: Mortarless Corbelled Arch Assembly</span>
          </div>
          <div className={styles.stagePill}>
            {stage === 'intro' ? 'Overview' : stage === 'build' ? 'Arch Construction' : stage === 'history' ? 'History' : 'Mastered'}
          </div>
        </header>

        <main className={styles.main}>
          {stage === 'intro' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Traditional Architecture & Physics</div>
              <h1 className={styles.title}>The Mortarless Corbelled Arch</h1>
              <p className={styles.lead}>
                Welcome to the Master Builder's Workshop. Did you know that thousands of ancient Indian stone temples,
                stepped corridors, and city gateways were constructed <strong>entirely without mortar or cement</strong>?
              </p>

              <div className={styles.archGraphic}>
                <svg viewBox="0 0 600 160" fill="none" className={styles.graphicSvg} aria-hidden="true">
                  <rect width="600" height="160" fill="#EFE8D6" rx="8" />
                  <g transform="translate(300, 140)">
                    <rect x="-120" y="-80" width="40" height="80" fill="#9A8A78" />
                    <rect x="-110" y="-100" width="45" height="20" fill="#A89B88" />
                    <rect x="-95" y="-120" width="45" height="20" fill="#B5A896" />
                    <rect x="80" y="-80" width="40" height="80" fill="#9A8A78" />
                    <rect x="65" y="-100" width="45" height="20" fill="#A89B88" />
                    <rect x="50" y="-120" width="45" height="20" fill="#B5A896" />
                    <rect x="-35" y="-135" width="70" height="15" fill="#B96F4B" />
                  </g>
                  <text x="300" y="145" textAnchor="middle" fill="#40382F" fontSize="12" fontWeight="bold">
                    Kadalika-karana (Corbelled Arch): Weight transforms downward thrust into locking stability
                  </text>
                </svg>
              </div>

              <p className={styles.bodyText}>
                By stepping horizontal stone blocks gradually inward (cantilevering), each layer counterbalances the load of the stone below.
                In this challenge, you will place the cantilevered stones and seat the capstone to test its equilibrium.
              </p>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStage('build')}>
                  Construct the Corbelled Gateway →
                </button>
              </div>
            </div>
          )}

          {stage === 'build' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Hands-on Assembly</div>
              <h2 className={styles.title}>Assemble the Stepped Arch</h2>
              <p className={styles.lead}>
                Click each stone block from the builder's quarry below to lift and set it into position.
              </p>

              <div className={styles.assemblyArena}>
                <svg viewBox="0 0 500 240" className={styles.arenaSvg} aria-hidden="true">
                  <rect width="500" height="240" fill="#FAF4E6" rx="8" />
                  <rect x="50" y="210" width="400" height="20" fill="#C9B99A" />
                  <rect x="100" y="120" width="55" height="90" fill="#9A8A78" stroke="#786B5A" strokeWidth="1.5" />
                  <rect x="345" y="120" width="55" height="90" fill="#9A8A78" stroke="#786B5A" strokeWidth="1.5" />

                  {placedStones.includes(1) && (
                    <g>
                      <rect x="120" y="90" width="60" height="30" fill="#A89B88" stroke="#786B5A" strokeWidth="1.5" />
                      <rect x="320" y="90" width="60" height="30" fill="#A89B88" stroke="#786B5A" strokeWidth="1.5" />
                    </g>
                  )}

                  {placedStones.includes(2) && (
                    <g>
                      <rect x="145" y="60" width="65" height="30" fill="#B5A896" stroke="#786B5A" strokeWidth="1.5" />
                      <rect x="290" y="60" width="65" height="30" fill="#B5A896" stroke="#786B5A" strokeWidth="1.5" />
                    </g>
                  )}

                  {placedStones.includes(3) && (
                    <g>
                      <polygon points="200,60 300,60 270,30 230,30" fill="#B96F4B" stroke="#9A5A38" strokeWidth="2" />
                      <circle cx="250" cy="45" r="4" fill="#D6B775" />
                    </g>
                  )}
                </svg>
              </div>

              <div className={styles.quarryPalette}>
                <button
                  className={`${styles.stoneBtn} ${placedStones.includes(1) ? styles.stonePlaced : ''}`}
                  onClick={() => handlePlaceStone(1)}
                  disabled={placedStones.includes(1)}
                >
                  <span>Layer 1: Lower Stepped Brackets {placedStones.includes(1) ? '✓' : ''}</span>
                </button>

                <button
                  className={`${styles.stoneBtn} ${placedStones.includes(2) ? styles.stonePlaced : ''}`}
                  onClick={() => handlePlaceStone(2)}
                  disabled={!placedStones.includes(1) || placedStones.includes(2)}
                >
                  <span>Layer 2: Inward Cantilevers {placedStones.includes(2) ? '✓' : ''}</span>
                </button>

                <button
                  className={`${styles.stoneBtn} ${placedStones.includes(3) ? styles.stonePlaced : ''}`}
                  onClick={() => handlePlaceStone(3)}
                  disabled={!placedStones.includes(2) || placedStones.includes(3)}
                >
                  <span>Capstone: Locking Keystone {placedStones.includes(3) ? '✓' : ''}</span>
                </button>
              </div>

              {keystonePlaced && (
                <div className={styles.successArchBox}>
                  <strong>✦ Arch Locked in Equilibrium!</strong> Downward gravity now locks the stones together
                  under compression. Without a single nail or dollop of mortar, this structure can endure centuries!
                </div>
              )}

              <div className={styles.actionRow}>
                <button className={styles.secondaryBtn} onClick={handleResetArch}>
                  ↺ Disassemble & Try Again
                </button>
                <button
                  className={styles.primaryBtn}
                  disabled={!keystonePlaced}
                  onClick={() => setStage('history')}
                >
                  Discover Architecture History →
                </button>
              </div>
            </div>
          )}

          {stage === 'history' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Indian Architectural Engineering</div>
              <h2 className={styles.title}>The Genius of Indian Stone Joinery</h2>
              <p className={styles.lead}>
                From Harappan brick drainage systems (2500 BCE) to the grand granite temples of Tamil Nadu and Odisha:
              </p>

              <div className={styles.historyList}>
                <div className={styles.historyCard}>
                  <span className={styles.historyIcon}>✦</span>
                  <div>
                    <h4 className={styles.historyCardTitle}>Brihadisvara Temple, Thanjavur</h4>
                    <p className={styles.historyCardText}>
                      Completed in 1010 CE by Rajaraja Chola I, its 16-storey towering Vimana stands without mortar.
                      Its apex stone (Kumbam) weighs 80 tons, held purely by interlocking balance and gravity!
                    </p>
                  </div>
                </div>

                <div className={styles.historyCard}>
                  <span className={styles.historyIcon}>✦</span>
                  <div>
                    <h4 className={styles.historyCardTitle}>Interlocking Butterfly & Dowel Joints</h4>
                    <p className={styles.historyCardText}>
                      Builders used stone tongue-and-groove joints and iron cramps. In seismic zones, this flexibility allowed
                      buildings to absorb earthquake tremors without fracturing brittle mortar.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStage('complete')}>
                  Claim Master Builder's Plumb ✓
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
              <h2 className={styles.completedTitle}>Workshop Challenge Mastered!</h2>
              <p className={styles.completedText}>
                You balanced cantilevered stones and constructed a mortarless corbelled arch using principles of gravity and proportion.
              </p>
              <div className={styles.rewardBox}>
                <span>+55 Gyan Knowledge Points</span>
                <span>Badge Unlocked: <strong>Master Builder</strong></span>
              </div>
              <button className={styles.primaryBtn} onClick={handleArchFinish}>
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
      environmentName={WORKSHOP_CURRICULUM.environmentName}
      environmentLore="Enter the master builder's yard. Balance cantilevered granite stones and construct earthquake-resilient mortarless arches."
      heroIllustrationKey="corbelArch"
      phases={WORKSHOP_CURRICULUM.phases}
      completedPhaseIds={localCompletedPhases}
      onSelectPhase={handleSelectPhase}
      onReturn={onReturn}
      featuredAction={{
        label: 'Mortarless Corbelled Arch Assembly',
        subtitle: 'Place cantilevered stones and seat the capstone in compressive balance',
        illustrationKey: 'corbelArch',
        onClick: () => {
          setStage('intro')
          setMode('arch')
        },
      }}
    />
  )
}
