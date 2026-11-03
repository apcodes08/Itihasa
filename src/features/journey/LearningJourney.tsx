import type { Screen, ExplorationProgress, LocationId } from '../../types'
import styles from './LearningJourney.module.css'

interface JourneyStep {
  id: string
  unit: number
  unitTitle: string
  unitSubtitle: string
  title: string
  subtitle: string
  environment: LocationId
  screen: Screen
  points: number
  badge?: string
  isMilestone?: boolean
  completed: (p: ExplorationProgress) => boolean
  unlocked: (p: ExplorationProgress) => boolean
}

interface Props {
  progress: ExplorationProgress
  onNavigate: (s: Screen) => void
}

export function LearningJourney({ progress, onNavigate }: Props) {
  const steps: JourneyStep[] = [
    // Unit 1: The Village
    {
      id: 'village-1',
      unit: 1,
      unitTitle: 'Unit 1: Harmony in the Village',
      unitSubtitle: 'Understanding shared choices, dilemmas, and community care',
      title: 'The Clear Path Dilemma',
      subtitle: 'Stories & Decisions',
      environment: 'village',
      screen: 'village',
      points: 40,
      completed: p => p.villageStoryDone || (p.completedPhases?.['village']?.length ?? 0) > 0,
      unlocked: () => true,
    },
    {
      id: 'village-milestone',
      unit: 1,
      unitTitle: 'Unit 1: Harmony in the Village',
      unitSubtitle: 'Understanding shared choices, dilemmas, and community care',
      title: "Village Elder's Token",
      subtitle: 'Community Milestone',
      environment: 'village',
      screen: 'village',
      points: 20,
      badge: 'Civic Harmony',
      isMilestone: true,
      completed: p => p.villageStoryDone || (p.completedPhases?.['village']?.length ?? 0) > 0,
      unlocked: () => true,
    },

    // Unit 2: The Riverlands
    {
      id: 'river-1',
      unit: 2,
      unitTitle: 'Unit 2: Waters of the Earth',
      unitSubtitle: 'Resource allocation, fairness vs equality, and ancient stepwells',
      title: 'The Shared Reservoir',
      subtitle: 'Water Management',
      environment: 'riverlands',
      screen: 'riverlands',
      points: 50,
      completed: p => p.riverlandsChallengeDone || (p.completedPhases?.['riverlands']?.length ?? 0) > 0,
      unlocked: p => p.villageStoryDone || (p.completedPhases?.['village']?.length ?? 0) > 0 || p.riverlandsChallengeDone,
    },
    {
      id: 'river-milestone',
      unit: 2,
      unitTitle: 'Unit 2: Waters of the Earth',
      unitSubtitle: 'Resource allocation, fairness vs equality, and ancient stepwells',
      title: 'Stepwell Architect Seal',
      subtitle: 'Conservation Milestone',
      environment: 'riverlands',
      screen: 'riverlands',
      points: 25,
      badge: 'Water Guardian',
      isMilestone: true,
      completed: p => p.riverlandsChallengeDone || (p.completedPhases?.['riverlands']?.length ?? 0) > 0,
      unlocked: p => p.villageStoryDone || (p.completedPhases?.['village']?.length ?? 0) > 0 || p.riverlandsChallengeDone,
    },

    // Unit 3: Scholar's Courtyard
    {
      id: 'scholar-1',
      unit: 3,
      unitTitle: "Unit 3: Scholar's Patterns",
      unitSubtitle: 'Rhythms of numbers, binary meters, and geometric logic',
      title: 'The Rhythmic Sequences',
      subtitle: 'Mathematics & Logic',
      environment: 'scholar',
      screen: 'scholar',
      points: 45,
      completed: p => p.scholarPuzzleDone || (p.completedPhases?.['scholar']?.length ?? 0) > 0,
      unlocked: p => p.riverlandsChallengeDone || (p.completedPhases?.['riverlands']?.length ?? 0) > 0 || p.scholarPuzzleDone,
    },
    {
      id: 'scholar-milestone',
      unit: 3,
      unitTitle: "Unit 3: Scholar's Patterns",
      unitSubtitle: 'Rhythms of numbers, binary meters, and geometric logic',
      title: "Mathematician's Abacus",
      subtitle: 'Logic Milestone',
      environment: 'scholar',
      screen: 'scholar',
      points: 25,
      badge: 'Pattern Seeker',
      isMilestone: true,
      completed: p => p.scholarPuzzleDone || (p.completedPhases?.['scholar']?.length ?? 0) > 0,
      unlocked: p => p.riverlandsChallengeDone || (p.completedPhases?.['riverlands']?.length ?? 0) > 0 || p.scholarPuzzleDone,
    },

    // Unit 4: The Gathering Place
    {
      id: 'gathering-1',
      unit: 4,
      unitTitle: 'Unit 4: Strategy & Play',
      unitSubtitle: 'Ancient board games, risk evaluation, and patience',
      title: 'The Chaupar Gambit',
      subtitle: 'Traditional Strategy Games',
      environment: 'gathering',
      screen: 'gathering',
      points: 45,
      completed: p => p.gatheringGameDone || (p.completedPhases?.['gathering']?.length ?? 0) > 0,
      unlocked: p => p.scholarPuzzleDone || (p.completedPhases?.['scholar']?.length ?? 0) > 0 || p.gatheringGameDone,
    },
    {
      id: 'gathering-milestone',
      unit: 4,
      unitTitle: 'Unit 4: Strategy & Play',
      unitSubtitle: 'Ancient board games, risk evaluation, and patience',
      title: "Strategist's Cowrie",
      subtitle: 'Game Master Milestone',
      environment: 'gathering',
      screen: 'gathering',
      points: 25,
      badge: 'Master of Tactics',
      isMilestone: true,
      completed: p => p.gatheringGameDone || (p.completedPhases?.['gathering']?.length ?? 0) > 0,
      unlocked: p => p.scholarPuzzleDone || (p.completedPhases?.['scholar']?.length ?? 0) > 0 || p.gatheringGameDone,
    },

    // Unit 5: The Observatory
    {
      id: 'observatory-1',
      unit: 5,
      unitTitle: 'Unit 5: Sky & Gnomon',
      unitSubtitle: 'Tracking solar time, shadows, and celestial rhythms',
      title: 'The Sun Pillar Shadow',
      subtitle: 'Observation & Timekeeping',
      environment: 'observatory',
      screen: 'observatory',
      points: 50,
      completed: p => p.observatoryDone || (p.completedPhases?.['observatory']?.length ?? 0) > 0,
      unlocked: p => p.gatheringGameDone || (p.completedPhases?.['gathering']?.length ?? 0) > 0 || p.observatoryDone,
    },
    {
      id: 'observatory-milestone',
      unit: 5,
      unitTitle: 'Unit 5: Sky & Gnomon',
      unitSubtitle: 'Tracking solar time, shadows, and celestial rhythms',
      title: 'Celestial Dial Badge',
      subtitle: 'Astronomy Milestone',
      environment: 'observatory',
      screen: 'observatory',
      points: 25,
      badge: 'Sky Watcher',
      isMilestone: true,
      completed: p => p.observatoryDone || (p.completedPhases?.['observatory']?.length ?? 0) > 0,
      unlocked: p => p.gatheringGameDone || (p.completedPhases?.['gathering']?.length ?? 0) > 0 || p.observatoryDone,
    },

    // Unit 6: The Workshop
    {
      id: 'workshop-1',
      unit: 6,
      unitTitle: 'Unit 6: Craft & Construction',
      unitSubtitle: 'Mortarless corbelled arches, joinery, and structural balance',
      title: 'The Keystone Balance',
      subtitle: 'Geometry & Craft',
      environment: 'workshop',
      screen: 'workshop',
      points: 55,
      completed: p => p.workshopDone || (p.completedPhases?.['workshop']?.length ?? 0) > 0,
      unlocked: p => p.observatoryDone || (p.completedPhases?.['observatory']?.length ?? 0) > 0 || p.workshopDone,
    },
    {
      id: 'workshop-milestone',
      unit: 6,
      unitTitle: 'Unit 6: Craft & Construction',
      unitSubtitle: 'Mortarless corbelled arches, joinery, and structural balance',
      title: 'Master Architect Plumb',
      subtitle: 'Grand Architecture Milestone',
      environment: 'workshop',
      screen: 'workshop',
      points: 50,
      badge: 'Master Builder',
      isMilestone: true,
      completed: p => p.workshopDone || (p.completedPhases?.['workshop']?.length ?? 0) > 0,
      unlocked: p => p.observatoryDone || (p.completedPhases?.['observatory']?.length ?? 0) > 0 || p.workshopDone,
    },
  ]

  // Group steps by unit
  const units = Array.from(new Set(steps.map(s => s.unit))).map(unitNum => {
    const unitSteps = steps.filter(s => s.unit === unitNum)
    return {
      unitNum,
      title: unitSteps[0].unitTitle,
      subtitle: unitSteps[0].unitSubtitle,
      steps: unitSteps,
    }
  })

  const totalCompleted = steps.filter(s => s.completed(progress)).length
  const totalSteps = steps.length
  const percent = Math.round((totalCompleted / totalSteps) * 100)

  return (
    <div className={styles.journeyPage}>
      {/* Top Banner */}
      <section className={styles.journeyHeader}>
        <div className={styles.headerInner}>
          <div className={styles.headerText}>
            <span className={styles.headerTag}>The Path of Wisdom (ज्ञान मार्ग)</span>
            <h1 className={styles.headerTitle}>Your Learning Journey</h1>
            <p className={styles.headerDesc}>
              Follow the winding trail through the six realms. Each stepping stone unlocks new stories,
              historical dilemmas, and ancient insights.
            </p>
          </div>

          <div className={styles.journeyStats}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>{totalCompleted}/{totalSteps}</span>
              <span className={styles.statLabel}>Lessons & Milestones</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>{percent}%</span>
              <span className={styles.statLabel}>Journey Complete</span>
            </div>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progressBarTrack}>
                <div className={styles.progressBarFill} style={{ width: `${percent}%` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connected Path Container */}
      <main className={styles.pathContainer}>
        {units.map((unit) => (
          <section key={unit.unitNum} className={styles.unitSection}>
            <header className={styles.unitHeader}>
              <div className={styles.unitTag}>Chapter {unit.unitNum}</div>
              <h2 className={styles.unitTitle}>{unit.title}</h2>
              <p className={styles.unitDesc}>{unit.subtitle}</p>
            </header>

            <div className={styles.unitStepsFlow}>
              {unit.steps.map((step, idx) => {
                const isCompleted = step.completed(progress)
                const isUnlocked = step.unlocked(progress)
                // Zig-zag offset for an organic winding river / path feel
                const offsetClass = idx % 2 === 0 ? styles.nodeOffsetLeft : styles.nodeOffsetRight

                return (
                  <div key={step.id} className={`${styles.nodeWrapper} ${offsetClass}`}>
                    {/* Visual Connector Line */}
                    {idx < unit.steps.length - 1 && (
                      <div className={styles.connectorLine} />
                    )}

                    <div className={styles.nodeItem}>
                      <button
                        className={`${styles.nodeCircle} ${
                          isCompleted
                            ? styles.nodeCompleted
                            : isUnlocked
                            ? styles.nodeUnlocked
                            : styles.nodeLocked
                        } ${step.isMilestone ? styles.milestoneCircle : ''}`}
                        onClick={() => {
                          if (isUnlocked || isCompleted) {
                            onNavigate(step.screen)
                          }
                        }}
                        disabled={!isUnlocked && !isCompleted}
                        title={
                          isCompleted
                            ? `Revisit: ${step.title}`
                            : isUnlocked
                            ? `Start: ${step.title}`
                            : `Locked: Complete previous lessons to unlock`
                        }
                      >
                        {isCompleted ? (
                          <span className={styles.iconCompleted}>✓</span>
                        ) : isUnlocked ? (
                          <span className={styles.iconUnlocked}>
                            {step.isMilestone ? '★' : '✦'}
                          </span>
                        ) : (
                          <span className={styles.iconLocked}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                          </span>
                        )}

                        {/* Pulse animation for next available lesson */}
                        {isUnlocked && !isCompleted && (
                          <div className={styles.pulseRing} />
                        )}
                      </button>

                      <div className={styles.nodeCard}>
                        <div className={styles.nodeCardHeader}>
                          <span className={styles.nodeTypePill}>{step.subtitle}</span>
                          <span className={styles.nodePoints}>+{step.points} pts</span>
                        </div>
                        <h3 className={styles.nodeTitle}>{step.title}</h3>
                        {step.badge && (
                          <div className={styles.badgeReward}>
                            <span className={styles.badgeRewardIcon}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="#CDA84D">
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="12,6 13.8,9.8 18,10.4 15,13.3 15.7,17.5 12,15.5 8.3,17.5 9,13.3 6,10.4 10.2,9.8" fill="#FFFDF8" />
                              </svg>
                            </span>
                            <span>Unlocks Badge: <strong>{step.badge}</strong></span>
                          </div>
                        )}
                        <div className={styles.nodeActions}>
                          <button
                            className={`${styles.nodeActionBtn} ${
                              isCompleted
                                ? styles.actionReview
                                : isUnlocked
                                ? styles.actionStart
                                : styles.actionLocked
                            }`}
                            onClick={() => (isUnlocked || isCompleted) && onNavigate(step.screen)}
                            disabled={!isUnlocked && !isCompleted}
                          >
                            {isCompleted ? 'Review Lesson ↺' : isUnlocked ? 'Enter Activity →' : 'Locked'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ))}

        {/* Trail End Celebration */}
        <div className={styles.trailEnd}>
          <div className={styles.trailEndCard}>
            <div className={styles.trailEndIcon}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="16" fill="#F5EFE6" stroke="#CDA84D" strokeWidth="2" />
                <polygon points="18,5 21,14 31,14 23,20 26,29 18,23 10,29 13,20 5,14 15,14" fill="#CDA84D" />
              </svg>
            </div>
            <h3 className={styles.trailEndTitle}>The Horizon of Knowledge</h3>
            <p className={styles.trailEndText}>
              Every lesson you complete builds your understanding of Indian scientific and philosophical
              heritage. Return often to reflect and master each realm!
            </p>
            <button className={styles.worldMapBtn} onClick={() => onNavigate('world')}>
              Explore Illustrated World Map →
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

