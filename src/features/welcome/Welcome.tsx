import { Button } from '../../components/Button'
import styles from './Welcome.module.css'

interface Props {
  onEnter: () => void
}

export function Welcome({ onEnter }: Props) {
  return (
    <main className={styles.page}>
      {/* ── Top wordmark strip ── */}
      <header className={styles.header}>
        <div className={styles.wordmark}>
          <span className={styles.wordmarkMain}>Itihasa</span>
          <span className={styles.wordmarkSub}>इतिहास</span>
        </div>
      </header>

      {/* ── Hero illustration ── */}
      <section className={styles.hero} aria-hidden="true">
        <img
          src="/world-hero.jpg"
          alt="An illustrated Indian village world with paths, courtyards, trees, and a hilltop observatory"
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
      </section>

      {/* ── Introduction panel ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <h1 className={styles.heading}>
            A world of Indian knowledge — waiting to be explored.
          </h1>
          <p className={styles.body}>
            Step into an illustrated world and discover stories, puzzles, and
            ideas from Indian traditions. Investigate a village, manage
            resources, follow branching stories, and find the knowledge hidden
            in everyday decisions.
          </p>
          <p className={styles.pace}>
            You can explore at your own pace. There are no timers or streaks.
          </p>
          <Button size="lg" onClick={onEnter} className={styles.cta}>
            Enter the world
          </Button>
        </div>
      </section>
    </main>
  )
}
