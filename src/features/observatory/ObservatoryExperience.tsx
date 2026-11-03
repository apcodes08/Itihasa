import { useState } from 'react'
import { OBSERVATORY_CURRICULUM } from '../../data/observatoryCurriculum'
import { PhaseSelector } from '../../engine/PhaseSelector'
import { LessonRunner } from '../../engine/LessonRunner'
import styles from './ObservatoryExperience.module.css'

interface Props {
  onComplete: () => void
  onReturn: () => void
  completedPhases?: string[]
  onPhaseComplete?: (phaseId: string, points: number) => void
}

type ViewMode = 'curriculum' | 'lesson' | 'sundial'

export function ObservatoryExperience({
  onComplete,
  onReturn,
  completedPhases = [],
  onPhaseComplete,
}: Props) {
  const [mode, setMode] = useState<ViewMode>('curriculum')
  const [activePhaseId, setActivePhaseId] = useState<string>('observatory-p1')
  const [localCompletedPhases, setLocalCompletedPhases] = useState<string[]>(completedPhases)

  // Sundial simulation state
  const [stage, setStage] = useState<'intro' | 'gnomon' | 'history' | 'complete'>('intro')
  const [sunPosition, setSunPosition] = useState<number>(20)
  const [checkedMidday, setCheckedMidday] = useState(false)

  const distanceFromMidday = Math.abs(sunPosition - 50)
  const shadowLength = 20 + distanceFromMidday * 1.6
  const shadowAngle = (sunPosition - 50) * 1.2
  const isMiddayFound = distanceFromMidday <= 5

  const activePhase = OBSERVATORY_CURRICULUM.phases.find(p => p.id === activePhaseId) || OBSERVATORY_CURRICULUM.phases[0]
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

  function handleSundialFinish() {
    onComplete()
    setMode('curriculum')
  }

  // 1. Interactive Lesson Mode
  if (mode === 'lesson' && activeSubLesson) {
    return (
      <LessonRunner
        subLesson={activeSubLesson}
        environmentName="The Observatory"
        onComplete={handleLessonComplete}
        onExit={() => setMode('curriculum')}
      />
    )
  }

  // 2. Featured Simulation: Shanku Sundial & True Noon
  if (mode === 'sundial') {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <button onClick={() => setMode('curriculum')} className={styles.backBtn} title="Back to Observatory Curriculum">
              ← Return to Phases
            </button>
            <span className={styles.divider}>/</span>
            <span className={styles.realmName}>Featured Instrument: Shanku Sundial Simulator</span>
          </div>
          <div className={styles.stagePill}>
            {stage === 'intro' ? 'Overview' : stage === 'gnomon' ? 'Gnomon Trial' : stage === 'history' ? 'History' : 'Mastered'}
          </div>
        </header>

        <main className={styles.main}>
          {stage === 'intro' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Observation & Sky Cycles</div>
              <h1 className={styles.title}>The Measure of the Sun</h1>
              <p className={styles.lead}>
                Perched high upon the rocky ridge, the Observatory tracks the movements of the sun, moon, and constellations.
                Long before mechanical clocks, scholars measured precise time down to minutes using a simple calibrated pillar (Shanku).
              </p>

              <div className={styles.skyGraphic}>
                <svg viewBox="0 0 600 150" fill="none" className={styles.graphicSvg} aria-hidden="true">
                  <rect width="600" height="150" fill="#EFE8D6" rx="8" />
                  <polygon points="100,150 500,150 450,90 150,90" fill="#C9B99A" />
                  <rect x="296" y="55" width="8" height="40" fill="#40382F" />
                  <path d="M 120 80 Q 300 20 480 80" stroke="#D6B775" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="210" cy="40" r="14" fill="#B96F4B" />
                  <ellipse cx="320" cy="94" rx="28" ry="4" fill="#6B5C4C" opacity="0.6" />
                  <text x="300" y="130" textAnchor="middle" fill="#40382F" fontSize="12" fontWeight="bold">
                    The calibrated stone base reveals solar hours and the cardinal directions
                  </text>
                </svg>
              </div>

              <p className={styles.bodyText}>
                In this challenge, you will manipulate the sun's passage to discover true solar noon (Madhyahna) and observe
                how shadow length and orientation determine cardinal north and the length of a Ghatika (24 minutes).
              </p>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStage('gnomon')}>
                  Align the Gnomon Dial →
                </button>
              </div>
            </div>
          )}

          {stage === 'gnomon' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Interactive Sundial (Shanku Yantra)</div>
              <h2 className={styles.title}>Find True Solar Noon</h2>
              <p className={styles.lead}>
                Drag the solar slider across the sky. Notice how the shadow shifts in length and direction.
                Find the exact position where the shadow reaches its <strong>shortest length</strong> and aligns with true North!
              </p>

              <div className={styles.dialCanvas}>
                <svg viewBox="0 0 500 220" className={styles.dialSvg} aria-hidden="true">
                  <rect width="500" height="220" fill="#FAF4E6" rx="8" />
                  <ellipse cx="250" cy="150" rx="140" ry="45" fill="#E8DFCD" stroke="#C4B892" strokeWidth="2" />
                  <line x1="250" y1="105" x2="250" y2="195" stroke="#9A8A78" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="250" y="100" fill="#788568" fontSize="11" fontWeight="bold" textAnchor="middle">NORTH (Uttara)</text>
                  <text x="250" y="210" fill="#788568" fontSize="11" fontWeight="bold" textAnchor="middle">SOUTH (Dakshina)</text>

                  <g transform="translate(250, 150)">
                    <line
                      x1="0"
                      y1="0"
                      x2={shadowAngle * 1.5}
                      y2={-shadowLength * 0.8}
                      stroke="#40382F"
                      strokeWidth="6"
                      strokeLinecap="round"
                      opacity="0.75"
                    />
                  </g>

                  <polygon points="248,150 252,150 251,80 249,80" fill="#40382F" />
                  <circle cx="250" cy="78" r="3" fill="#D6B775" />

                  <g transform={`translate(${80 + sunPosition * 3.4}, ${100 - Math.sin((sunPosition / 100) * Math.PI) * 70})`}>
                    <circle cx="0" cy="0" r="16" fill="#D6B775" />
                    <circle cx="0" cy="0" r="10" fill="#B96F4B" />
                  </g>
                </svg>
              </div>

              <div className={styles.sliderControl}>
                <div className={styles.sliderLabels}>
                  <span>Morning (Pratah)</span>
                  <span>Midday (Madhyahna)</span>
                  <span>Evening (Sayam)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sunPosition}
                  onChange={e => {
                    setSunPosition(Number(e.target.value))
                    setCheckedMidday(false)
                  }}
                  className={styles.rangeInput}
                />
                <div className={styles.telemetryBox}>
                  <span>Current Shadow Length: <strong>{Math.round(shadowLength)} units</strong></span>
                  <span>Shadow Angle: <strong>{Math.round(shadowAngle)}°</strong></span>
                </div>
              </div>

              <div className={styles.checkRow}>
                <button
                  className={styles.verifyBtn}
                  onClick={() => setCheckedMidday(true)}
                >
                  Test if this is True Solar Noon ☀️
                </button>
              </div>

              {checkedMidday && (
                <div className={isMiddayFound ? styles.correctBox : styles.tryAgainBox}>
                  {isMiddayFound ? (
                    <div>
                      <strong>✦ Solar Noon Confirmed!</strong> At this exact moment, the sun reaches its zenith.
                      The shadow is at its absolute minimum and points directly along the North-South meridian line!
                    </div>
                  ) : (
                    <div>
                      {sunPosition < 50
                        ? 'The shadow is still pointing toward the West and shortening. Advance the sun closer to the center!'
                        : 'The sun has passed the meridian and the shadow is lengthening toward the East. Adjust back toward the middle!'}
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
                  disabled={!isMiddayFound}
                  onClick={() => setStage('history')}
                >
                  Discover Ancient Observatories →
                </button>
              </div>
            </div>
          )}

          {stage === 'history' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Indian Astronomy Heritage</div>
              <h2 className={styles.title}>Astronomical Instruments & Aryabhata's Insights</h2>
              <p className={styles.lead}>
                Indian astronomers treated the sky as an open laboratory of mathematics and spherical geometry.
              </p>

              <div className={styles.historyList}>
                <div className={styles.historyCard}>
                  <span className={styles.historyIcon}>✦</span>
                  <div>
                    <h4 className={styles.historyCardTitle}>Aryabhata (499 CE) & Earth's Rotation</h4>
                    <p className={styles.historyCardText}>
                      In the <em>Aryabhatiya</em>, Aryabhata recognized that the daily motion of the stars and sun is an optical illusion
                      caused by the Earth rotating eastward on its own axis, comparing it to a passenger in a boat watching the riverbank drift backward.
                    </p>
                  </div>
                </div>

                <div className={styles.historyCard}>
                  <span className={styles.historyIcon}>✦</span>
                  <div>
                    <h4 className={styles.historyCardTitle}>The Samrat Yantra (Supreme Instrument)</h4>
                    <p className={styles.historyCardText}>
                      Centuries later, Sawai Jai Singh built monumental stone observatories (Jantar Mantar) in Jaipur and Delhi,
                      featuring gigantic triangular gnomon sundials accurate to within two seconds!
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStage('complete')}>
                  Claim Sky Watcher's Badge ✓
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
              <h2 className={styles.completedTitle}>Observatory Challenge Complete!</h2>
              <p className={styles.completedText}>
                You calibrated the Shanku sundial, isolated true solar noon, and explored classical Indian astronomy.
              </p>
              <div className={styles.rewardBox}>
                <span>+50 Gyan Knowledge Points</span>
                <span>Badge Unlocked: <strong>Sky Watcher</strong></span>
              </div>
              <button className={styles.primaryBtn} onClick={handleSundialFinish}>
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
      environmentName={OBSERVATORY_CURRICULUM.environmentName}
      environmentLore="Perch high upon the rocky ridge. Track solar noon with the Shanku sundial and explore Aryabhata's rotating celestial models."
      heroIllustrationKey="shankuSundial"
      phases={OBSERVATORY_CURRICULUM.phases}
      completedPhaseIds={localCompletedPhases}
      onSelectPhase={handleSelectPhase}
      onReturn={onReturn}
      featuredAction={{
        label: 'The Shanku Sundial Simulator',
        subtitle: 'Move the solar slider to track shadow length and isolate true solar noon',
        illustrationKey: 'shankuSundial',
        onClick: () => {
          setStage('intro')
          setMode('sundial')
        },
      }}
    />
  )
}
