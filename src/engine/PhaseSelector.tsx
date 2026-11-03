import type { Phase } from './types'
import { Illustration } from '../assets/illustrations'
import styles from './LessonEngine.module.css'

interface Props {
  environmentName: string
  environmentLore?: string
  heroIllustrationKey?: string
  phases: Phase[]
  completedPhaseIds: string[]
  onSelectPhase: (phaseId: string) => void
  onReturn: () => void
  featuredAction?: {
    label: string
    subtitle: string
    icon?: string
    illustrationKey?: string
    onClick: () => void
  }
}

export function PhaseSelector({
  environmentName,
  environmentLore,
  heroIllustrationKey,
  phases,
  completedPhaseIds,
  onSelectPhase,
  onReturn,
  featuredAction,
}: Props) {
  // Find index of the first uncompleted phase to designate as "current"
  const currentPhaseIndex = phases.findIndex(p => !completedPhaseIds.includes(p.id))
  const activeIndex = currentPhaseIndex === -1 ? phases.length - 1 : currentPhaseIndex

  // Alternating offsets for Duolingo-style winding stepping-stone path:
  // 0 -> center, 1 -> right, 2 -> left, 3 -> center, 4 -> right...
  const getOffsetClass = (index: number) => {
    const cycle = index % 4
    if (cycle === 0) return styles.nodeCenter
    if (cycle === 1) return styles.nodeRight
    if (cycle === 2) return styles.nodeCenter
    return styles.nodeLeft
  }

  return (
    <div className={styles.locationContainer}>
      {/* 1. Location Header & Illustrated Introduction */}
      <header className={styles.locationHero}>
        <div className={styles.locationHeroInner}>
          <button onClick={onReturn} className={styles.backToMapBtn} title="Back to World Map">
            ← Return to Journey
          </button>

          <div className={styles.locationHeroContent}>
            <div className={styles.locationHeroBadge}>Educational Realm</div>
            <h1 className={styles.locationHeroTitle}>{environmentName}</h1>
            <p className={styles.locationHeroLead}>
              {environmentLore ||
                'Explore the living traditions, sciences, and mathematical wonders preserved across ancient India.'}
            </p>
          </div>

          {/* Hero Illustration Emblem */}
          {heroIllustrationKey && (
            <div className={styles.locationHeroIllustration}>
              <Illustration name={heroIllustrationKey} size={110} animated />
            </div>
          )}
        </div>
      </header>

      {/* 2. Featured Hands-on Activity (if available) */}
      {featuredAction && (
        <section className={styles.featuredSection}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredIllWrap}>
              {featuredAction.illustrationKey ? (
                <Illustration name={featuredAction.illustrationKey} size={58} />
              ) : (
                <span className={styles.featuredIconEmoji}>{featuredAction.icon}</span>
              )}
            </div>
            <div className={styles.featuredInfo}>
              <span className={styles.featuredPill}>Featured Simulation</span>
              <h3 className={styles.featuredTitle}>{featuredAction.label}</h3>
              <p className={styles.featuredDesc}>{featuredAction.subtitle}</p>
            </div>
            <button className={styles.featuredPlayBtn} onClick={featuredAction.onClick}>
              Play Activity →
            </button>
          </div>
        </section>
      )}

      {/* 3. Illustrated Progression Path (Winding Stepping Stones) */}
      <main className={styles.pathSection}>
        <div className={styles.pathHeader}>
          <h2 className={styles.pathTitle}>Learning Progression Path</h2>
          <span className={styles.pathStats}>
            {completedPhaseIds.length} of {phases.length} Phases Mastered
          </span>
        </div>

        <div className={styles.steppingStoneTrail}>
          {/* Decorative curved SVG trail connecting the nodes */}
          <svg className={styles.trailSvgBackground} viewBox="0 0 400 900" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M 200 40 Q 280 120 200 200 T 120 360 T 200 520 T 280 680 T 200 840"
              stroke="#D6B775"
              strokeWidth="5"
              strokeDasharray="8 8"
              fill="none"
              opacity="0.55"
            />
          </svg>

          {phases.map((phase, i) => {
            const isCompleted = completedPhaseIds.includes(phase.id)
            const isLocked = i > 0 && !completedPhaseIds.includes(phases[i - 1].id)
            const isCurrent = i === activeIndex && !isLocked
            const isReview = phase.type === 'review'

            let nodeStateClass = styles.nodeLocked
            if (isCompleted) nodeStateClass = styles.nodeCompleted
            else if (isCurrent) nodeStateClass = styles.nodeCurrent

            return (
              <div key={phase.id} className={`${styles.pathRow} ${getOffsetClass(i)}`}>
                <div className={styles.nodeWrapper}>
                  {/* Stepping stone button */}
                  <button
                    type="button"
                    className={`${styles.steppingStone} ${nodeStateClass} ${isReview ? styles.reviewStone : ''}`}
                    onClick={() => onSelectPhase(phase.id)}
                    disabled={isLocked}
                    aria-label={`${phase.title} - ${isCompleted ? 'Completed' : isLocked ? 'Locked' : 'Available'}`}
                  >
                    {/* Stepping stone pedestal shadow & highlight */}
                    <div className={styles.stonePedestal} />

                    <div className={styles.stoneFace}>
                      {isCompleted ? (
                        <span className={styles.stoneIconCompleted}>✓</span>
                      ) : isLocked ? (
                        <span className={styles.stoneIconLocked}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                        </span>
                      ) : isReview ? (
                        <span className={styles.stoneIconReview}>★</span>
                      ) : (
                        <span className={styles.stoneNumber}>{i + 1}</span>
                      )}
                    </div>

                    {/* Active pulse aura */}
                    {isCurrent && <div className={styles.activeHalo} />}
                  </button>

                  {/* Node Information Card (attached beside or below the stone) */}
                  <div className={`${styles.nodeCallout} ${isLocked ? styles.calloutLocked : ''} ${isReview ? styles.calloutReview : ''}`}>
                    <div className={styles.calloutTag}>
                      {isReview ? 'Mastery Review' : `Phase ${i + 1}`}
                      {isCompleted && ' · Done'}
                    </div>
                    <div className={styles.calloutTitle}>{phase.title.replace(/^Phase \d+:\s*/, '')}</div>
                    <div className={styles.calloutSub}>
                      {phase.subLessons.length} {phase.subLessons.length === 1 ? 'lesson' : 'lessons'} · {isCompleted ? 'Review again' : isLocked ? 'Locked' : 'Start now →'}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
