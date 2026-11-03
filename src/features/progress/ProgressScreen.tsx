import type { Screen, ExplorationProgress } from '../../types'
import { Illustration } from '../../assets/illustrations'
import styles from './ProgressScreen.module.css'

interface Props {
  progress: ExplorationProgress
  onNavigate: (s: Screen) => void
}

interface BadgeDef {
  id: string
  name: string
  realm: string
  description: string
  illustrationKey: string
  earned: (p: ExplorationProgress) => boolean
}

const BADGES: BadgeDef[] = [
  {
    id: 'civic-harmony',
    name: 'Civic Harmony',
    realm: 'The Village',
    description: 'Guided village neighbors through collective decision-making and fair resource repair.',
    illustrationKey: 'kudavolai',
    earned: p => p.villageStoryDone || (p.completedPhases?.['village']?.length ?? 0) > 0,
  },
  {
    id: 'water-guardian',
    name: 'Water Guardian',
    realm: 'The Riverlands',
    description: 'Balanced scarce reservoir water among households and explored historic stepwells.',
    illustrationKey: 'waterWheel',
    earned: p => p.riverlandsChallengeDone || (p.completedPhases?.['riverlands']?.length ?? 0) > 0,
  },
  {
    id: 'pattern-seeker',
    name: 'Pattern Seeker',
    realm: "Scholar's Courtyard",
    description: 'Deciphered rhythmic poetic sequences (Virahanka) and magic square sums (Khajuraho).',
    illustrationKey: 'magicSquareTile',
    earned: p => p.scholarPuzzleDone || (p.completedPhases?.['scholar']?.length ?? 0) > 0,
  },
  {
    id: 'master-tactics',
    name: 'Master of Tactics',
    realm: 'The Gathering Place',
    description: 'Evaluated risk, defensive castles, and pair strategies in traditional Chaupar.',
    illustrationKey: 'chauparBoard',
    earned: p => p.gatheringGameDone || (p.completedPhases?.['gathering']?.length ?? 0) > 0,
  },
  {
    id: 'sky-watcher',
    name: 'Sky Watcher',
    realm: 'The Observatory',
    description: 'Calibrated the Shanku gnomon dial to locate solar midday and the meridian axis.',
    illustrationKey: 'samratYantra',
    earned: p => p.observatoryDone || (p.completedPhases?.['observatory']?.length ?? 0) > 0,
  },
  {
    id: 'master-builder',
    name: 'Master Builder',
    realm: 'The Workshop',
    description: 'Constructed an earthquake-resilient mortarless corbelled arch using stone gravity locks.',
    illustrationKey: 'corbelArch',
    earned: p => p.workshopDone || (p.completedPhases?.['workshop']?.length ?? 0) > 0,
  },
]

export function ProgressScreen({ progress, onNavigate }: Props) {
  const isRealmDone = (key: keyof ExplorationProgress, realmId: string) =>
    Boolean(progress[key]) || (progress.completedPhases?.[realmId]?.length ?? 0) > 0

  const realmsCompletedCount =
    (isRealmDone('villageStoryDone', 'village') ? 1 : 0) +
    (isRealmDone('riverlandsChallengeDone', 'riverlands') ? 1 : 0) +
    (isRealmDone('scholarPuzzleDone', 'scholar') ? 1 : 0) +
    (isRealmDone('gatheringGameDone', 'gathering') ? 1 : 0) +
    (isRealmDone('observatoryDone', 'observatory') ? 1 : 0) +
    (isRealmDone('workshopDone', 'workshop') ? 1 : 0)

  const earnedBadgesCount = BADGES.filter(b => b.earned(progress)).length
  const totalPhasesCompleted = Object.values(progress.completedPhases || {}).reduce(
    (sum, list) => sum + list.length,
    0
  )

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.avatarPill}>
            <div className={styles.avatarEmblem}>
              <Illustration name="banyanTree" size={44} />
            </div>
            <div>
              <h1 className={styles.learnerTitle}>Explorer of Itihasa</h1>
              <span className={styles.learnerSubtitle}>Student of Ancient Sciences & Traditions</span>
            </div>
          </div>

          <div className={styles.quickStatsRow}>
            <div className={styles.statPill}>
              <span className={styles.statIcon}>✦</span>
              <div>
                <strong>{progress.knowledgePoints}</strong>
                <span>Gyan Points</span>
              </div>
            </div>
            <div className={styles.statPill}>
              <span className={styles.statIcon}>★</span>
              <div>
                <strong>{earnedBadgesCount} / 6</strong>
                <span>Badges</span>
              </div>
            </div>
            <div className={styles.statPill}>
              <span className={styles.statIcon}>⚑</span>
              <div>
                <strong>{realmsCompletedCount} / 6</strong>
                <span>Realms</span>
              </div>
            </div>
            {totalPhasesCompleted > 0 && (
              <div className={styles.statPill}>
                <span className={styles.statIcon}>✦</span>
                <div>
                  <strong>{totalPhasesCompleted}</strong>
                  <span>Phases Mastered</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {/* Progress Overview Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Realm Mastery & Curriculums</h2>
            <button className={styles.journeyLink} onClick={() => onNavigate('journey')}>
              View Journey Path →
            </button>
          </div>

          <div className={styles.realmsGrid}>
            <RealmProgressCard
              title="The Village"
              subtitle={`Community Stories & Assemblies · ${progress.completedPhases?.['village']?.length || (progress.villageStoryDone ? 1 : 0)}/10 Phases`}
              completed={isRealmDone('villageStoryDone', 'village')}
              onPlay={() => onNavigate('village')}
            />
            <RealmProgressCard
              title="The Riverlands"
              subtitle={`Water Systems & Stepwells · ${progress.completedPhases?.['riverlands']?.length || (progress.riverlandsChallengeDone ? 1 : 0)}/10 Phases`}
              completed={isRealmDone('riverlandsChallengeDone', 'riverlands')}
              onPlay={() => onNavigate('riverlands')}
            />
            <RealmProgressCard
              title="Scholar's Courtyard"
              subtitle={`Mathematics & Poetic Logic · ${progress.completedPhases?.['scholar']?.length || (progress.scholarPuzzleDone ? 1 : 0)}/10 Phases`}
              completed={isRealmDone('scholarPuzzleDone', 'scholar')}
              onPlay={() => onNavigate('scholar')}
            />
            <RealmProgressCard
              title="The Gathering Place"
              subtitle={`Board Games & Probability · ${progress.completedPhases?.['gathering']?.length || (progress.gatheringGameDone ? 1 : 0)}/10 Phases`}
              completed={isRealmDone('gatheringGameDone', 'gathering')}
              onPlay={() => onNavigate('gathering')}
            />
            <RealmProgressCard
              title="The Observatory"
              subtitle={`Sun Shadows & Aryabhata · ${progress.completedPhases?.['observatory']?.length || (progress.observatoryDone ? 1 : 0)}/10 Phases`}
              completed={isRealmDone('observatoryDone', 'observatory')}
              onPlay={() => onNavigate('observatory')}
            />
            <RealmProgressCard
              title="The Workshop"
              subtitle={`Geometry & Mortarless Arches · ${progress.completedPhases?.['workshop']?.length || (progress.workshopDone ? 1 : 0)}/10 Phases`}
              completed={isRealmDone('workshopDone', 'workshop')}
              onPlay={() => onNavigate('workshop')}
            />
          </div>
        </section>

        {/* Achievement Badges Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Achievement Badges</h2>
            <span className={styles.badgeProgressTag}>
              {earnedBadgesCount} of {BADGES.length} Unlocked
            </span>
          </div>

          <div className={styles.badgesGrid}>
            {BADGES.map(badge => {
              const isEarned = badge.earned(progress)
              return (
                <div
                  key={badge.id}
                  className={`${styles.badgeCard} ${isEarned ? styles.badgeEarned : styles.badgeLocked}`}
                >
                  <div className={styles.badgeIconWrapper}>
                    <Illustration name={badge.illustrationKey} size={48} />
                    {isEarned && <span className={styles.checkBadge}>✓</span>}
                  </div>
                  <div className={styles.badgeContent}>
                    <div className={styles.badgeRealm}>{badge.realm}</div>
                    <h3 className={styles.badgeName}>{badge.name}</h3>
                    <p className={styles.badgeDesc}>{badge.description}</p>
                    <span className={styles.badgeStatus}>
                      {isEarned ? 'Unlocked' : 'Incomplete'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}

function RealmProgressCard({
  title,
  subtitle,
  completed,
  onPlay,
}: {
  title: string
  subtitle: string
  completed: boolean
  onPlay: () => void
}) {
  return (
    <div className={`${styles.realmCard} ${completed ? styles.realmCardDone : ''}`}>
      <div className={styles.realmCardTop}>
        <span className={styles.realmCheck}>{completed ? '✓ Explored' : '○ Pending'}</span>
        <h3 className={styles.realmCardTitle}>{title}</h3>
        <p className={styles.realmCardSub}>{subtitle}</p>
      </div>
      <button className={styles.realmCardBtn} onClick={onPlay}>
        {completed ? 'Revisit Experience ↺' : 'Enter Realm →'}
      </button>
    </div>
  )
}

