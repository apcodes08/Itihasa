import { useState } from 'react'
import type { Screen, ExplorationProgress } from '../types'
import styles from './Navigation.module.css'

interface Props {
  current: Screen
  progress: ExplorationProgress
  onNavigate: (s: Screen) => void
}

export function Navigation({ current, progress, onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems: { label: string; screen: Screen; iconPath: string }[] = [
    {
      label: 'Home',
      screen: 'home',
      iconPath: 'M3 10.5L12 3l9 7.5v9a1.5 1.5 0 01-1.5 1.5h-5.25v-6h-4.5v6H4.5A1.5 1.5 0 013 19.5v-9z',
    },
    {
      label: 'Journey Path',
      screen: 'journey',
      iconPath: 'M9 4.5a3 3 0 100 6 3 3 0 000-6zm6 7.5a3 3 0 100 6 3 3 0 000-6zm-6 7.5a3 3 0 100 6 3 3 0 000-6z',
    },
    {
      label: 'World Map',
      screen: 'world',
      iconPath: 'M3 6.75l6-2.25 6 2.25 6-2.25v14.25l-6 2.25-6-2.25-6 2.25V6.75z',
    },
    {
      label: 'Progress & Badges',
      screen: 'progress',
      iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Brand */}
        <button
          className={styles.brand}
          onClick={() => {
            onNavigate('home')
            setMenuOpen(false)
          }}
          title="Return to Itihasa Home"
        >
          <div className={styles.brandIcon}>
            <svg viewBox="0 0 32 32" fill="none" className={styles.brandSvg}>
              <circle cx="16" cy="16" r="14" fill="#B96F4B" />
              <path d="M16 6 L20 16 L16 26 L12 16 Z" fill="#FAF4E6" />
              <circle cx="16" cy="16" r="3.5" fill="#D6B775" />
            </svg>
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandMain}>Itihasa</span>
            <span className={styles.brandSub}>इतिहास</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className={styles.navLinks} aria-label="Main Navigation">
          {navItems.map(item => {
            const isActive = current === item.screen
            return (
              <button
                key={item.screen}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                onClick={() => onNavigate(item.screen)}
                aria-current={isActive ? 'page' : undefined}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.linkIcon}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={item.iconPath} />
                </svg>
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* User Stats Pill */}
        <div className={styles.statsGroup}>
          <button
            className={styles.pointsPill}
            onClick={() => onNavigate('progress')}
            title="Your Knowledge Points & Badges"
          >
            <span className={styles.pointsIcon}>✦</span>
            <span className={styles.pointsValue}>{progress.knowledgePoints}</span>
            <span className={styles.pointsUnit}>Gyan</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.menuBar} ${menuOpen ? styles.barOneOpen : ''}`} />
            <span className={`${styles.menuBar} ${menuOpen ? styles.barTwoOpen : ''}`} />
            <span className={`${styles.menuBar} ${menuOpen ? styles.barThreeOpen : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileNavLinks}>
            {navItems.map(item => (
              <button
                key={item.screen}
                className={`${styles.mobileLink} ${current === item.screen ? styles.mobileLinkActive : ''}`}
                onClick={() => {
                  onNavigate(item.screen)
                  setMenuOpen(false)
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.linkIcon}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={item.iconPath} />
                </svg>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
