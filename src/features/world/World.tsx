import { useState, useEffect } from 'react'
import type { Screen, ExplorationProgress, LocationId } from '../../types'
import { LOCATIONS, type LocationData } from '../../data/locations'
import styles from './World.module.css'

interface Props {
  progress:   ExplorationProgress
  onNavigate: (s: Screen) => void
}

export function World({ progress, onNavigate }: Props) {
  const [selectedId, setSelectedId] = useState<LocationId | null>('village')

  // Listen to escape key to close panel
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSelectedId(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const selectedLoc: LocationData | undefined = LOCATIONS.find(l => l.id === selectedId)

  const completedCount =
    (progress.villageStoryDone ? 1 : 0) +
    (progress.riverlandsChallengeDone ? 1 : 0) +
    (progress.scholarPuzzleDone ? 1 : 0) +
    (progress.gatheringGameDone ? 1 : 0) +
    (progress.observatoryDone ? 1 : 0) +
    (progress.workshopDone ? 1 : 0)

  function handleSelect(id: string) {
    setSelectedId(prev => (prev === id ? null : (id as LocationId)))
  }

  function handleEnter(id?: LocationId) {
    const targetId = id || selectedLoc?.id
    if (!targetId) return
    onNavigate(targetId as Screen)
  }

  function isLocationCompleted(id: LocationId): boolean {
    switch (id) {
      case 'village': return progress.villageStoryDone
      case 'riverlands': return progress.riverlandsChallengeDone
      case 'scholar': return progress.scholarPuzzleDone
      case 'gathering': return progress.gatheringGameDone
      case 'observatory': return progress.observatoryDone
      case 'workshop': return progress.workshopDone
      default: return false
    }
  }

  return (
    <div className={styles.worldContainer}>
      {/* ── Top Bar ── */}
      <header className={styles.topBar}>
        <div className={styles.breadcrumb}>
          <button className={styles.breadcrumbRoot} onClick={() => onNavigate('home')}>
            Itihasa
          </button>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>The Discovery World</span>
        </div>

        <div className={styles.topRightGroup}>
          <button className={styles.journeyBtn} onClick={() => onNavigate('journey')}>
            Learning Journey Path →
          </button>
          <div className={styles.progressPill}>
            <span className={styles.progressDot} />
            <span><strong>{completedCount} of 6</strong> Realms Explored</span>
          </div>
        </div>
      </header>

      {/* ── Map + Inspector Viewport ── */}
      <main className={styles.viewport} id="world-map-area">
        <div className={styles.mapFrame}>
          <WorldIllustratedMap
            selectedId={selectedId}
            progress={progress}
            onSelect={handleSelect}
            onEnter={handleEnter}
          />
        </div>

        {/* ── Location Inspector Drawer ── */}
        {selectedLoc && (
          <aside
            className={styles.inspector}
            key={selectedLoc.id}
            role="dialog"
            aria-labelledby="loc-title"
          >
            <div className={styles.inspectorHeader}>
              <div className={styles.themePill}>{selectedLoc.theme}</div>
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedId(null)}
                aria-label="Close location inspector"
              >
                ✕
              </button>
            </div>

            <div className={styles.inspectorBody}>
              <div className={styles.titleRow}>
                <h2 id="loc-title" className={styles.locTitle}>
                  {selectedLoc.label}
                </h2>
                <span className={styles.sanskritName}>{selectedLoc.sanskritLabel}</span>
              </div>

              <p className={styles.tagline}>{selectedLoc.tagline}</p>
              <p className={styles.description}>{selectedLoc.preview}</p>

              {/* Curiosity reflection box */}
              <div className={styles.curiosityBox}>
                <span className={styles.curiosityLabel}>Question to Ponder</span>
                <p className={styles.curiosityText}>“{selectedLoc.curiosityPrompt}”</p>
              </div>

              {/* Learning discoveries */}
              <div className={styles.discoveriesSection}>
                <h3 className={styles.discoveriesHeader}>In this place, you discover:</h3>
                <ul className={styles.discoveriesList}>
                  {selectedLoc.discoveries.map((item, idx) => (
                    <li key={idx} className={styles.discoveryItem}>
                      <span className={styles.discoveryBullet}>✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action / Availability */}
            <div className={styles.inspectorFooter}>
              <div className={styles.actionRow}>
                <button
                  className={styles.enterBtn}
                  onClick={() => handleEnter()}
                >
                  {isLocationCompleted(selectedLoc.id)
                    ? `Revisit ${selectedLoc.label} ↺`
                    : `Enter ${selectedLoc.label} →`}
                </button>
                {isLocationCompleted(selectedLoc.id) && (
                  <span className={styles.completedTag}>✓ Explored & Completed</span>
                )}
              </div>
            </div>
          </aside>
        )}
      </main>

      {/* ── Exploration Helper Footer ── */}
      <footer className={styles.bottomBar}>
        <span className={styles.helperText}>
          Tip: Tap any landmark across the illustrated world to inspect its lore and launch its learning activity.
        </span>
      </footer>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   New Illustrated World Map with Integrated Interactive Hotspots
   ───────────────────────────────────────────────────────────── */

interface MapProps {
  selectedId: LocationId | null
  progress:   ExplorationProgress
  onSelect:   (id: string) => void
  onEnter:    (id: LocationId) => void
}

function WorldIllustratedMap({ selectedId, progress, onSelect, onEnter }: MapProps) {
  function isCompleted(id: LocationId): boolean {
    switch (id) {
      case 'village': return progress.villageStoryDone
      case 'riverlands': return progress.riverlandsChallengeDone
      case 'scholar': return progress.scholarPuzzleDone
      case 'gathering': return progress.gatheringGameDone
      case 'observatory': return progress.observatoryDone
      case 'workshop': return progress.workshopDone
      default: return false
    }
  }

  return (
    <div className={styles.mapCanvasWrapper}>
      <svg
        viewBox="0 0 1024 571"
        className={styles.mapSvg}
        role="img"
        aria-label="Illustrated historical map of Itihasa showing six interconnected knowledge realms"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="markerShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor="#40382F" floodOpacity="0.32" />
          </filter>
          <filter id="subtleGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#D6B775" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* ── The New High-Resolution Illustrated World Map ── */}
        <image
          href="/world-map.jpg"
          x="0"
          y="0"
          width="1024"
          height="571"
          preserveAspectRatio="xMidYMid meet"
          className={styles.mapRasterImage}
        />

        {/* ── Interactive Landmarks & Clickable Hotspots ── */}
        {LOCATIONS.map(loc => {
          const completed = isCompleted(loc.id)
          const selected = selectedId === loc.id

          return (
            <LocationHotspot
              key={loc.id}
              id={loc.id}
              x={loc.mapX}
              y={loc.mapY}
              label={loc.label}
              tagline={loc.tagline}
              selected={selected}
              completed={completed}
              onSelect={onSelect}
              onDoubleClick={() => onEnter(loc.id)}
            />
          )
        })}
      </svg>
    </div>
  )
}

interface HotspotProps {
  id:            LocationId
  x:             number
  y:             number
  label:         string
  tagline:       string
  selected:      boolean
  completed:     boolean
  onSelect:      (id: string) => void
  onDoubleClick: () => void
}

function LocationHotspot({
  id,
  x,
  y,
  label,
  selected,
  completed,
  onSelect,
  onDoubleClick,
}: HotspotProps) {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      className={`${styles.hotspotGroup} ${selected ? styles.selectedHotspot : ''}`}
      onClick={() => onSelect(id)}
      onDoubleClick={onDoubleClick}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={`${label} — ${completed ? 'Completed' : 'Available'}`}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(id)
        }
      }}
    >
      {/* Generous Hitbox capturing touches and clicks across the landmark */}
      <circle cx="0" cy="0" r="54" fill="#000" opacity="0.001" className={styles.hitbox} />

      {/* Selected Indicator Halo */}
      {selected ? (
        <g pointerEvents="none" className={styles.selectionRings}>
          <circle cx="0" cy="0" r="38" fill="none" stroke="#D6B775" strokeWidth="3" filter="url(#subtleGlow)" />
          <circle cx="0" cy="0" r="44" fill="none" stroke="#B96F4B" strokeWidth="1.5" strokeDasharray="5 3" />
        </g>
      ) : (
        /* Subtle beacon pulse on unselected landmarks to invite exploration */
        <circle cx="0" cy="0" r="28" fill="none" stroke="#FFFDF8" strokeWidth="1.5" opacity="0.6" className={styles.beaconRing} />
      )}

      {/* Center Pin Disc */}
      <g filter="url(#markerShadow)" className={styles.pinDisc}>
        <circle
          cx="0"
          cy="0"
          r="19"
          fill={completed ? '#788568' : selected ? '#B96F4B' : '#FAF4E6'}
          stroke={completed ? '#5E6B52' : selected ? '#D6B775' : '#B96F4B'}
          strokeWidth="2.5"
        />

        {/* Pin Icon / Symbol */}
        {completed ? (
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fill="#FFFDF8"
            fontSize="16"
            fontWeight="900"
            fontFamily="'Nunito Sans', sans-serif"
          >
            ✓
          </text>
        ) : (
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fill={selected ? '#FFFDF8' : '#B96F4B'}
            fontSize="15"
            fontWeight="bold"
            fontFamily="'Nunito Sans', sans-serif"
          >
            ✦
          </text>
        )}
      </g>

      {/* ── Name & Status Label Pill ── */}
      <g transform="translate(0, 36)" filter="url(#markerShadow)" className={styles.labelPill}>
        <rect
          x="-68"
          y="-13"
          width="136"
          height="28"
          rx="14"
          fill={selected ? '#40382F' : '#FFFDF8'}
          stroke={selected ? '#D6B775' : completed ? '#788568' : '#D4C6AB'}
          strokeWidth={selected ? '2' : '1.5'}
        />

        {/* Location Name */}
        <text
          x="0"
          y="0"
          textAnchor="middle"
          fill={selected ? '#FFFDF8' : '#40382F'}
          fontSize="11.5"
          fontFamily="'Nunito Sans', system-ui, sans-serif"
          fontWeight="700"
        >
          {label}
        </text>

        {/* Status Tag */}
        <text
          x="0"
          y="9"
          textAnchor="middle"
          fill={selected ? '#EDD9A3' : completed ? '#5E6B52' : '#B96F4B'}
          fontSize="8.5"
          fontFamily="'Nunito Sans', system-ui, sans-serif"
          fontWeight="700"
          letterSpacing="0.04em"
        >
          {completed ? '✓ EXPLORED' : '✦ ENTER'}
        </text>
      </g>
    </g>
  )
}
