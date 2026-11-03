import React from 'react'
import type { ExplorationProgress, Screen, LocationId } from '../../types'
import { Illustration } from '../../assets/illustrations'
import styles from './Home.module.css'

interface Props {
  progress: ExplorationProgress
  onNavigate: (s: Screen) => void
}

interface EnvCardData {
  id: LocationId
  screen: Screen
  label: string
  sanskrit: string
  sub: string
  desc: string
  themeColor: string
}

const ENVIRONMENTS: EnvCardData[] = [
  {
    id: 'village',
    screen: 'village',
    label: 'The Village',
    sanskrit: 'ग्राम (Grama)',
    sub: 'Stories & Decisions',
    desc: 'Navigate community dilemmas, shared resources, and democratic village traditions.',
    themeColor: '#B96F4B',
  },
  {
    id: 'riverlands',
    screen: 'riverlands',
    label: 'The Riverlands',
    sanskrit: 'नदी-तट (Nadi-tata)',
    sub: 'Resource Management',
    desc: 'Allocate scarce reservoir water among households and investigate ancient stepwells.',
    themeColor: '#788568',
  },
  {
    id: 'scholar',
    screen: 'scholar',
    label: "Scholar's Courtyard",
    sanskrit: 'विद्वत्-प्राङ्गण',
    sub: 'Mathematics & Logic',
    desc: 'Solve rhythmic number sequences and decipher symmetrical magic squares.',
    themeColor: '#D6B775',
  },
  {
    id: 'gathering',
    screen: 'gathering',
    label: 'The Gathering Place',
    sanskrit: 'सभा-स्थान',
    sub: 'Traditional Games & Tactics',
    desc: 'Master Chaupar board strategy, foresight, risk calculation, and dice combinations.',
    themeColor: '#9A5A38',
  },
  {
    id: 'observatory',
    screen: 'observatory',
    label: 'The Observatory',
    sanskrit: 'वेधशाला (Vedhashala)',
    sub: 'Astronomy & Solar Time',
    desc: 'Track the Shanku gnomon shadow to locate solar midday and the cardinal meridian.',
    themeColor: '#6B5C4C',
  },
  {
    id: 'workshop',
    screen: 'workshop',
    label: 'The Workshop',
    sanskrit: 'कर्मशाला (Karmashala)',
    sub: 'Geometry & Construction',
    desc: 'Assemble mortarless corbelled arches using stone cantilever balance and gravity.',
    themeColor: '#5E6B52',
  },
]

export function Home({ progress, onNavigate }: Props) {
  const completedCount =
    (progress.villageStoryDone ? 1 : 0) +
    (progress.riverlandsChallengeDone ? 1 : 0) +
    (progress.scholarPuzzleDone ? 1 : 0) +
    (progress.gatheringGameDone ? 1 : 0) +
    (progress.observatoryDone ? 1 : 0) +
    (progress.workshopDone ? 1 : 0)

  // Determine the next recommended realm to explore
  const nextRealm: Screen = !progress.villageStoryDone
    ? 'village'
    : !progress.riverlandsChallengeDone
    ? 'riverlands'
    : !progress.scholarPuzzleDone
    ? 'scholar'
    : !progress.gatheringGameDone
    ? 'gathering'
    : !progress.observatoryDone
    ? 'observatory'
    : !progress.workshopDone
    ? 'workshop'
    : 'journey'

  const nextTitle =
    nextRealm === 'village'
      ? 'The Village'
      : nextRealm === 'riverlands'
      ? 'The Riverlands'
      : nextRealm === 'scholar'
      ? "Scholar's Courtyard"
      : nextRealm === 'gathering'
      ? 'The Gathering Place'
      : nextRealm === 'observatory'
      ? 'The Observatory'
      : nextRealm === 'workshop'
      ? 'The Workshop'
      : 'Mastery Review'

  return (
    <main className={styles.page}>
      {/* ── Welcoming Illustrated Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>Interactive Learning World for Ages 8–12</div>
          <h1 className={styles.heroTitle}>
            Step Into the Living Traditions of India
          </h1>
          <p className={styles.heroLead}>
            Explore an illustrated world of ancient villages, astronomers, stone carvers, and mathematicians.
            Make real choices, solve tactile puzzles, and uncover the wisdom behind everyday discoveries.
          </p>

          <div className={styles.heroActionGroup}>
            <button
              className={styles.primaryCta}
              onClick={() => onNavigate(nextRealm)}
            >
              Continue Learning: {nextTitle} →
            </button>
            <button
              className={styles.secondaryCta}
              onClick={() => onNavigate('journey')}
            >
              View Learning Journey →
            </button>
          </div>
        </div>

        <div className={styles.heroIllustrationContainer}>
          <WorldLandscapeGraphic />
        </div>
      </section>

      {/* ── Progress Strip ── */}
      <section className={styles.progressBanner}>
        <div className={styles.progressInner}>
          <div className={styles.progressInfo}>
            <span className={styles.progressLabel}>Your Exploration Progress</span>
            <span className={styles.progressScore}>
              <strong>{completedCount} of 6</strong> Realms Explored
            </span>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${Math.max(8, (completedCount / 6) * 100)}%` }}
            />
          </div>

          <div className={styles.pointsBadge} onClick={() => onNavigate('progress')}>
            <span>✦ <strong>{progress.knowledgePoints}</strong> Gyan Points</span>
          </div>
        </div>
      </section>

      {/* ── The Six Environments ── */}
      <section className={styles.environmentsSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>The Six Learning Realms</h2>
            <p className={styles.sectionSub}>
              Each place offers hands-on challenges and connects to historical Indian scientific breakthroughs.
            </p>
          </div>
          <button className={styles.worldMapBtn} onClick={() => onNavigate('world')}>
            Illustrated World Map ✦
          </button>
        </div>

        <div className={styles.realmGrid}>
          {ENVIRONMENTS.map(env => {
            const isDone =
              (env.id === 'village' && progress.villageStoryDone) ||
              (env.id === 'riverlands' && progress.riverlandsChallengeDone) ||
              (env.id === 'scholar' && progress.scholarPuzzleDone) ||
              (env.id === 'gathering' && progress.gatheringGameDone) ||
              (env.id === 'observatory' && progress.observatoryDone) ||
              (env.id === 'workshop' && progress.workshopDone)

            return (
              <div
                key={env.id}
                className={`${styles.realmCard} ${isDone ? styles.realmCardDone : ''}`}
                onClick={() => onNavigate(env.screen)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') onNavigate(env.screen)
                }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconBox}>
                    <RealmIcon id={env.id} />
                  </div>
                  {isDone ? (
                    <span className={styles.completedBadge}>✓ Explored</span>
                  ) : (
                    <span className={styles.readyBadge}>Ready to Explore</span>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.sanskritTag}>{env.sanskrit}</div>
                  <h3 className={styles.cardTitle}>{env.label}</h3>
                  <span className={styles.cardTheme}>{env.sub}</span>
                  <p className={styles.cardDesc}>{env.desc}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.enterLink}>
                    {isDone ? 'Revisit Realm ↺' : 'Enter Realm →'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

function RealmIcon({ id }: { id: LocationId }): React.ReactElement {
  switch (id) {
    case 'village':
      return <Illustration name="banyanTree" size={44} />
    case 'riverlands':
      return <Illustration name="waterWheel" size={44} />
    case 'scholar':
      return <Illustration name="magicSquareTile" size={44} />
    case 'gathering':
      return <Illustration name="chauparBoard" size={44} />
    case 'observatory':
      return <Illustration name="samratYantra" size={44} />
    case 'workshop':
      return <Illustration name="corbelArch" size={44} />
  }
}

function WorldLandscapeGraphic(): React.ReactElement {
  return (
    <img
      src="/world-map.jpg"
      alt="Illustrated World Map of Itihasa"
      className={styles.landscapeSvg}
    />
  )
}
