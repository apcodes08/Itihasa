import type { ReactElement } from 'react'

/**
 * Handcrafted SVG illustration library for Itihasa.
 * Adheres strictly to the warm storybook palette:
 * - Terracotta: #B96F4B, #9A5A38
 * - Parchment & Cream: #FAF4E6, #F5EFE6, #EFE8D6
 * - Forest Green: #4A6B45, #385534
 * - Olive Green: #7A8450, #5E6738
 * - Muted Gold & Ochre: #CDA84D, #D6B775
 * - Earthy Browns: #40382F, #2A231C
 */

export interface IllustrationProps {
  size?: number
  className?: string
  animated?: boolean
}

const ILLUSTRATIONS: Record<string, (props?: IllustrationProps) => ReactElement> = {
  // 1. Ancient Banyan Tree with Hanging Roots
  banyanTree: ({ size = 72, className = '', animated = true }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Banyan Tree">
      {/* Soil base */}
      <ellipse cx="50" cy="88" rx="38" ry="7" fill="#E0D3BC" />
      {/* Trunk and branching */}
      <path d="M42 88 L44 56 Q40 48 34 40 L40 40 Q46 50 48 54 L52 54 Q54 50 60 40 L66 40 Q60 48 56 56 L58 88 Z" fill="#6B5945" />
      {/* Aerial roots */}
      <path d="M36 50 Q38 68 38 88 M64 50 Q62 68 62 88" stroke="#8A755D" strokeWidth="2.5" strokeLinecap="round" />
      {/* Foliage Canopy */}
      <g style={animated ? { transformOrigin: '50px 40px', animation: 'swayFoliage 4s ease-in-out infinite alternate' } : undefined}>
        <ellipse cx="50" cy="36" rx="36" ry="24" fill="#4A6B45" />
        <ellipse cx="32" cy="42" rx="20" ry="16" fill="#3D5A38" />
        <ellipse cx="68" cy="42" rx="20" ry="16" fill="#587A53" />
        <ellipse cx="50" cy="28" rx="24" ry="16" fill="#7A8450" opacity="0.8" />
        <circle cx="45" cy="24" r="3" fill="#D6B775" opacity="0.9" />
        <circle cx="58" cy="26" r="2.5" fill="#D6B775" opacity="0.9" />
      </g>
    </svg>
  ),

  // 2. Terracotta Matka (Clay Water Pitcher)
  matkaPot: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Clay Pot">
      <ellipse cx="50" cy="86" rx="26" ry="6" fill="#E0D3BC" />
      {/* Pot body */}
      <ellipse cx="50" cy="56" rx="32" ry="28" fill="#B96F4B" />
      {/* Highlight curve */}
      <path d="M30 46 Q24 56 30 68" stroke="#D98A66" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Rim & neck */}
      <path d="M38 32 L40 40 L60 40 L62 32 Z" fill="#9A5A38" />
      <ellipse cx="50" cy="32" rx="14" ry="4" fill="#CDA84D" />
      <ellipse cx="50" cy="32" rx="11" ry="3" fill="#6B3A22" />
      {/* Traditional painted pattern */}
      <path d="M26 56 Q50 62 74 56" stroke="#FAF4E6" strokeWidth="2" strokeDasharray="3 3" fill="none" />
    </svg>
  ),

  // 3. Heavy Iron Cauldron
  ironCauldron: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Iron Cauldron">
      <ellipse cx="50" cy="85" rx="28" ry="6" fill="#E0D3BC" />
      {/* Feet */}
      <rect x="30" y="72" width="6" height="14" rx="2" fill="#2A231C" />
      <rect x="64" y="72" width="6" height="14" rx="2" fill="#2A231C" />
      {/* Body */}
      <ellipse cx="50" cy="56" rx="34" ry="24" fill="#40382F" />
      {/* Rim */}
      <ellipse cx="50" cy="38" rx="34" ry="6" fill="#5A5044" />
      <ellipse cx="50" cy="38" rx="30" ry="4" fill="#2A231C" />
      {/* Handles */}
      <path d="M16 42 Q10 48 16 54" stroke="#5A5044" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M84 42 Q90 48 84 54" stroke="#5A5044" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    </svg>
  ),

  // 4. Kudavolai Palm Leaf Tickets & Earthen Pot
  kudavolai: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Kudavolai Election Pot">
      <ellipse cx="50" cy="86" rx="26" ry="6" fill="#E0D3BC" />
      {/* Earthen pot */}
      <ellipse cx="50" cy="62" rx="28" ry="24" fill="#B96F4B" />
      <ellipse cx="50" cy="42" rx="18" ry="5" fill="#9A5A38" />
      <ellipse cx="50" cy="42" rx="14" ry="3.5" fill="#40382F" />
      {/* Inscribed palm leaves emerging */}
      <g transform="rotate(-15 45 32)">
        <rect x="42" y="16" width="10" height="28" rx="2" fill="#D6B775" stroke="#9A7B48" strokeWidth="1" />
        <line x1="44" y1="22" x2="50" y2="22" stroke="#5A4325" strokeWidth="1" />
        <line x1="44" y1="26" x2="49" y2="26" stroke="#5A4325" strokeWidth="1" />
        <line x1="44" y1="30" x2="51" y2="30" stroke="#5A4325" strokeWidth="1" />
      </g>
      <g transform="rotate(18 55 32)">
        <rect x="52" y="14" width="10" height="28" rx="2" fill="#FAF4E6" stroke="#C4B892" strokeWidth="1" />
        <line x1="54" y1="20" x2="60" y2="20" stroke="#6F5F5A" strokeWidth="1" />
        <line x1="54" y1="24" x2="59" y2="24" stroke="#6F5F5A" strokeWidth="1" />
      </g>
    </svg>
  ),

  // 5. Wooden Agricultural Plough (Hala)
  plough: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Wooden Plough">
      <ellipse cx="50" cy="85" rx="34" ry="6" fill="#E0D3BC" />
      {/* Wooden handle beam */}
      <path d="M26 24 L38 24 L52 74 L46 76 Z" fill="#786B5A" />
      {/* Draft pole extending forward */}
      <path d="M46 54 L84 40 L84 44 L48 58 Z" fill="#9A8A78" />
      {/* Iron plowshare wedge */}
      <polygon points="34,74 54,74 46,84" fill="#40382F" />
      <polygon points="38,75 52,75 46,81" fill="#6B5E50" />
      {/* Yoke tie */}
      <rect x="78" y="38" width="6" height="12" rx="1.5" fill="#B96F4B" />
    </svg>
  ),

  // 6. Community Hands Joined in Mutual Aid (Shramadaan)
  shramadaan: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Shramadaan Community Labor">
      <circle cx="50" cy="50" r="42" fill="#F5EFE6" stroke="#D6B775" strokeWidth="2" />
      {/* Hand 1 (terracotta) */}
      <path d="M28 54 Q38 42 50 48 Q44 58 34 62 Z" fill="#B96F4B" />
      <rect x="22" y="52" width="12" height="10" rx="2" fill="#9A5A38" transform="rotate(-20 28 57)" />
      {/* Hand 2 (ochre) clasping */}
      <path d="M72 54 Q62 42 50 48 Q56 58 66 62 Z" fill="#CDA84D" />
      <rect x="66" y="52" width="12" height="10" rx="2" fill="#A88534" transform="rotate(20 72 57)" />
      {/* Sprout above hands */}
      <path d="M50 44 Q44 32 40 30 Q44 38 48 40" fill="#4A6B45" />
      <path d="M50 44 Q56 32 60 30 Q56 38 52 40" fill="#7A8450" />
    </svg>
  ),

  // 7. Village Veranda (Thinnai / Otla)
  thinnaiVeranda: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Village Veranda">
      {/* Tile roof */}
      <polygon points="12,38 50,18 88,38" fill="#B96F4B" />
      <line x1="20" y1="36" x2="50" y2="22" stroke="#9A5A38" strokeWidth="2" />
      <line x1="80" y1="36" x2="50" y2="22" stroke="#9A5A38" strokeWidth="2" />
      {/* Wooden Pillars */}
      <rect x="24" y="38" width="6" height="34" rx="1" fill="#6B5945" />
      <rect x="70" y="38" width="6" height="34" rx="1" fill="#6B5945" />
      <rect x="47" y="38" width="6" height="34" rx="1" fill="#786B5A" />
      {/* Raised stone plinth */}
      <rect x="16" y="70" width="68" height="16" rx="2" fill="#E8DFCD" stroke="#9A8A78" strokeWidth="1.5" />
      {/* Water pot on veranda corner */}
      <ellipse cx="28" cy="66" rx="4" ry="4.5" fill="#B96F4B" />
    </svg>
  ),

  // 8. Virahanka-Fibonacci Poetic Beats Meter
  virahankaBeat: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Rhythmic Meter">
      <rect x="10" y="15" width="80" height="70" rx="8" fill="#FAF4E6" stroke="#C4B892" strokeWidth="2" />
      {/* Laghu (1 unit beat) */}
      <rect x="22" y="32" width="12" height="36" rx="2" fill="#7A8450" />
      <text x="28" y="76" fill="#40382F" fontSize="9" fontWeight="bold" textAnchor="middle">1</text>
      {/* Guru (2 unit beat) */}
      <rect x="42" y="32" width="24" height="36" rx="2" fill="#B96F4B" />
      <text x="54" y="76" fill="#40382F" fontSize="9" fontWeight="bold" textAnchor="middle">2</text>
      {/* Target sum beat */}
      <rect x="72" y="32" width="10" height="36" rx="2" fill="#CDA84D" />
      <text x="77" y="76" fill="#40382F" fontSize="9" fontWeight="bold" textAnchor="middle">3</text>
    </svg>
  ),

  // 9. Khajuraho 34 Magic Square Tile
  magicSquareTile: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Magic Square">
      <rect x="12" y="12" width="76" height="76" rx="6" fill="#F5EFE6" stroke="#9A8A78" strokeWidth="2.5" />
      <line x1="50" y1="12" x2="50" y2="88" stroke="#C4B892" strokeWidth="2" />
      <line x1="12" y1="50" x2="88" y2="50" stroke="#C4B892" strokeWidth="2" />
      <text x="31" y="37" fill="#40382F" fontSize="14" fontWeight="bold" textAnchor="middle">7</text>
      <text x="69" y="37" fill="#40382F" fontSize="14" fontWeight="bold" textAnchor="middle">12</text>
      <text x="31" y="75" fill="#40382F" fontSize="14" fontWeight="bold" textAnchor="middle">2</text>
      <text x="69" y="75" fill="#B96F4B" fontSize="15" fontWeight="800" textAnchor="middle">11</text>
      {/* Sum banner */}
      <rect x="30" y="4" width="40" height="15" rx="3" fill="#CDA84D" />
      <text x="50" y="15" fill="#FAF4E6" fontSize="9" fontWeight="bold" textAnchor="middle">∑ = 34</text>
    </svg>
  ),

  // 10. Shunya / Zero Bindu Dot
  shunyaZero: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Shunya Zero">
      <circle cx="50" cy="50" r="38" fill="#FAF4E6" stroke="#D6B775" strokeWidth="3" />
      {/* Concentric ring */}
      <circle cx="50" cy="50" r="26" fill="none" stroke="#CDA84D" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Central sacred dot (bindu) */}
      <circle cx="50" cy="50" r="12" fill="#B96F4B" />
      <circle cx="47" cy="47" r="3" fill="#FAF4E6" opacity="0.8" />
    </svg>
  ),

  // 11. Meru Prastara (Pingala's Triangle)
  meruPrastara: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Meru Prastara">
      <polygon points="50,14 88,82 12,82" fill="#FAF4E6" stroke="#9A8A78" strokeWidth="2" />
      {/* Stepped levels */}
      <circle cx="50" cy="28" r="5" fill="#B96F4B" />
      <circle cx="42" cy="46" r="5" fill="#7A8450" />
      <circle cx="58" cy="46" r="5" fill="#7A8450" />
      <circle cx="34" cy="66" r="5" fill="#CDA84D" />
      <circle cx="50" cy="66" r="5" fill="#CDA84D" />
      <circle cx="66" cy="66" r="5" fill="#CDA84D" />
    </svg>
  ),

  // 12. Traditional Chaupar Board
  chauparBoard: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Chaupar Board">
      {/* Central square */}
      <rect x="36" y="36" width="28" height="28" fill="#B96F4B" />
      {/* 4 Arms */}
      <rect x="36" y="10" width="28" height="26" fill="#D6B775" stroke="#9A7B48" strokeWidth="1" />
      <rect x="36" y="64" width="28" height="26" fill="#D6B775" stroke="#9A7B48" strokeWidth="1" />
      <rect x="10" y="36" width="26" height="28" fill="#D6B775" stroke="#9A7B48" strokeWidth="1" />
      <rect x="64" y="36" width="26" height="28" fill="#D6B775" stroke="#9A7B48" strokeWidth="1" />
      {/* Cross sanctuary markers (Charkoni) */}
      <line x1="40" y1="14" x2="60" y2="32" stroke="#40382F" strokeWidth="1.5" />
      <line x1="60" y1="14" x2="40" y2="32" stroke="#40382F" strokeWidth="1.5" />
      {/* Pawns */}
      <circle cx="50" cy="50" r="5" fill="#FAF4E6" stroke="#40382F" strokeWidth="1.5" />
      <circle cx="24" cy="50" r="4.5" fill="#4A6B45" />
      <circle cx="76" cy="50" r="4.5" fill="#40382F" />
    </svg>
  ),

  // 13. Cowrie Shells
  cowrieShells: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Cowrie Shells">
      <circle cx="50" cy="50" r="40" fill="#F5EFE6" stroke="#C4B892" strokeWidth="1.5" />
      {/* Shell 1: Face Up (with tooth slit) */}
      <g transform="translate(32, 28) rotate(-15)">
        <ellipse cx="14" cy="20" rx="12" ry="16" fill="#FAF4E6" stroke="#9A8A78" strokeWidth="1.5" />
        <path d="M14 8 L14 32" stroke="#40382F" strokeWidth="2.5" />
        <path d="M10 12 L18 12 M10 16 L18 16 M10 20 L18 20 M10 24 L18 24 M10 28 L18 28" stroke="#40382F" strokeWidth="1" />
      </g>
      {/* Shell 2: Face Down (Smooth back) */}
      <g transform="translate(54, 46) rotate(30)">
        <ellipse cx="14" cy="20" rx="11" ry="15" fill="#CDA84D" stroke="#9A7B48" strokeWidth="1.5" />
        <ellipse cx="13" cy="18" rx="8" ry="11" fill="#E8D297" />
        <ellipse cx="11" cy="16" rx="4" ry="6" fill="#FAF4E6" opacity="0.6" />
      </g>
    </svg>
  ),

  // 14. Chaturanga (Army Divisions)
  chaturanga: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Chaturanga">
      <rect x="12" y="12" width="76" height="76" rx="6" fill="#FAF4E6" stroke="#9A8A78" strokeWidth="2" />
      {/* 2x2 board pattern */}
      <rect x="12" y="12" width="38" height="38" fill="#D6B775" />
      <rect x="50" y="50" width="38" height="38" fill="#D6B775" />
      {/* Elephant piece */}
      <ellipse cx="31" cy="31" rx="12" ry="9" fill="#40382F" />
      <circle cx="23" cy="26" r="6" fill="#40382F" />
      <path d="M20 28 Q16 34 22 36" stroke="#40382F" strokeWidth="2" fill="none" />
      {/* Horse piece */}
      <path d="M64 42 L64 26 Q72 24 74 30 L72 38 Z" fill="#B96F4B" />
      <circle cx="70" cy="28" r="1.5" fill="#FAF4E6" />
    </svg>
  ),

  // 15. Moksha Patam (Snakes & Ladders of Virtue)
  mokshaPatam: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Moksha Patam">
      <rect x="14" y="14" width="72" height="72" rx="4" fill="#FAF4E6" stroke="#9A8A78" strokeWidth="2" />
      {/* Grid lines */}
      <line x1="38" y1="14" x2="38" y2="86" stroke="#E0D6C2" strokeWidth="1" />
      <line x1="62" y1="14" x2="62" y2="86" stroke="#E0D6C2" strokeWidth="1" />
      <line x1="14" y1="38" x2="86" y2="38" stroke="#E0D6C2" strokeWidth="1" />
      <line x1="14" y1="62" x2="86" y2="62" stroke="#E0D6C2" strokeWidth="1" />
      {/* Ladder (Virtue / Golden) */}
      <line x1="28" y1="78" x2="48" y2="24" stroke="#CDA84D" strokeWidth="2.5" />
      <line x1="34" y1="80" x2="54" y2="26" stroke="#CDA84D" strokeWidth="2.5" />
      <line x1="30" y1="70" x2="36" y2="72" stroke="#CDA84D" strokeWidth="2" />
      <line x1="36" y1="54" x2="42" y2="56" stroke="#CDA84D" strokeWidth="2" />
      <line x1="42" y1="38" x2="48" y2="40" stroke="#CDA84D" strokeWidth="2" />
      {/* Serpent (Vice / Terracotta) */}
      <path d="M74 24 Q60 34 70 48 Q78 62 62 76" stroke="#B96F4B" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  ),

  // 16. Subterranean Stepwell (Baoli / Vav)
  stepwell: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Stepwell Baoli">
      <rect x="14" y="16" width="72" height="68" rx="4" fill="#E8DFCD" stroke="#9A8A78" strokeWidth="2" />
      {/* Tiered descending steps */}
      <polygon points="18,22 82,22 76,34 24,34" fill="#C9B99A" />
      <polygon points="24,34 76,34 70,48 30,48" fill="#B5A896" />
      <polygon points="30,48 70,48 64,64 36,64" fill="#9A8A78" />
      {/* Subterranean deep pool */}
      <rect x="36" y="64" width="28" height="14" fill="#4A6B45" />
      <path d="M38 71 Q50 69 62 71" stroke="#6F996A" strokeWidth="1.5" fill="none" />
    </svg>
  ),

  // 17. Araghatta (Water-Lifting Wheel)
  waterWheel: ({ size = 72, className = '', animated = true }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Araghatta Water Wheel">
      <g style={animated ? { transformOrigin: '50px 48px', animation: 'spinGentle 18s linear infinite' } : undefined}>
        <circle cx="50" cy="48" r="28" stroke="#786B5A" strokeWidth="3.5" fill="none" />
        <circle cx="50" cy="48" r="6" fill="#40382F" />
        {/* Spokes */}
        <line x1="50" y1="20" x2="50" y2="76" stroke="#9A8A78" strokeWidth="2" />
        <line x1="22" y1="48" x2="78" y2="48" stroke="#9A8A78" strokeWidth="2" />
        {/* Pots attached to wheel */}
        <rect x="46" y="14" width="8" height="8" rx="1.5" fill="#B96F4B" />
        <rect x="46" y="74" width="8" height="8" rx="1.5" fill="#B96F4B" />
        <rect x="16" y="44" width="8" height="8" rx="1.5" fill="#B96F4B" />
        <rect x="76" y="44" width="8" height="8" rx="1.5" fill="#B96F4B" />
      </g>
      {/* Flowing canal water */}
      <path d="M10 82 Q30 78 50 82 Q70 86 90 82" stroke="#4A6B45" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  ),

  // 18. Johad Crescent Earth Dam
  johadBund: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Johad Earth Check Dam">
      {/* Reservoir pool */}
      <ellipse cx="50" cy="46" rx="34" ry="22" fill="#7A8450" opacity="0.6" />
      <path d="M26 44 Q50 38 74 44" stroke="#FAF4E6" strokeWidth="1.5" fill="none" opacity="0.8" />
      {/* Crescent earthen check-dam bund */}
      <path d="M14 56 Q50 86 86 56 L86 64 Q50 94 14 64 Z" fill="#9A8A78" />
      <path d="M18 58 Q50 84 82 58" stroke="#B5A896" strokeWidth="2" fill="none" />
      {/* Shrubbery on bund */}
      <circle cx="36" cy="68" r="4" fill="#4A6B45" />
      <circle cx="64" cy="68" r="4" fill="#4A6B45" />
    </svg>
  ),

  // 19. Shanku Sundial (Solar Gnomon Pillar)
  shankuSundial: ({ size = 72, className = '', animated = true }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Shanku Sundial">
      {/* Calibrated stone dial base */}
      <ellipse cx="50" cy="72" rx="38" ry="15" fill="#E8DFCD" stroke="#9A8A78" strokeWidth="2" />
      <line x1="50" y1="57" x2="50" y2="87" stroke="#7A8450" strokeWidth="1.5" strokeDasharray="2 2" />
      {/* Shadow */}
      <ellipse cx="50" cy="72" rx="12" ry="3" fill="#40382F" opacity="0.65" />
      {/* Gnomon pillar */}
      <polygon points="48,72 52,72 51,36 49,36" fill="#40382F" />
      <circle cx="50" cy="35" r="2.5" fill="#CDA84D" />
      {/* Sun in sky */}
      <g style={animated ? { transformOrigin: '50px 22px', animation: 'floatSun 3s ease-in-out infinite alternate' } : undefined}>
        <circle cx="50" cy="22" r="9" fill="#CDA84D" />
        <circle cx="50" cy="22" r="6" fill="#B96F4B" />
      </g>
    </svg>
  ),

  // 20. Samrat Yantra (Giant Astronomical Triangle)
  samratYantra: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Samrat Yantra">
      <ellipse cx="50" cy="85" rx="38" ry="7" fill="#E0D3BC" />
      {/* Triangular ramp */}
      <polygon points="16,80 78,80 78,28" fill="#B96F4B" stroke="#9A5A38" strokeWidth="2" />
      {/* Stair steps on ramp hypotenuse */}
      <path d="M16 80 L32 67 L48 54 L64 41 L78 28" stroke="#FAF4E6" strokeWidth="1.5" />
      {/* Curved quadrant arc */}
      <path d="M38 80 A 42 42 0 0 0 78 52" stroke="#7A8450" strokeWidth="4.5" fill="none" />
    </svg>
  ),

  // 21. Aryabhata's Rotating Earth
  rotatingEarth: ({ size = 72, className = '', animated = true }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Rotating Earth">
      <circle cx="50" cy="50" r="36" fill="#4A6B45" stroke="#7A8450" strokeWidth="2" />
      {/* Continents / Landmasses */}
      <g style={animated ? { transformOrigin: '50px 50px', animation: 'spinGentle 24s linear infinite' } : undefined}>
        <path d="M32 30 Q44 24 54 36 Q48 48 36 44 Z" fill="#CDA84D" opacity="0.9" />
        <path d="M50 56 Q66 50 72 66 Q56 74 46 64 Z" fill="#D6B775" opacity="0.9" />
        <circle cx="68" cy="36" r="6" fill="#D6B775" />
      </g>
      {/* Rotation arrow arc */}
      <path d="M20 72 Q50 90 80 72" stroke="#FAF4E6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <polygon points="80,72 74,68 77,77" fill="#FAF4E6" />
    </svg>
  ),

  // 22. Nakshatra Moon & Stars
  nakshatraMoon: ({ size = 72, className = '', animated = true }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Nakshatras">
      <circle cx="50" cy="50" r="40" fill="#2A231C" />
      {/* Crescent Moon */}
      <path d="M48 24 A 26 26 0 1 0 74 64 A 22 22 0 1 1 48 24 Z" fill="#D6B775" />
      {/* Stars */}
      <g style={animated ? { animation: 'twinkleStars 3s ease-in-out infinite alternate' } : undefined}>
        <polygon points="26,30 28,34 32,34 29,37 30,41 26,38 22,41 23,37 20,34 24,34" fill="#FAF4E6" />
        <polygon points="72,26 73,29 76,29 74,31 75,34 72,32 69,34 70,31 68,29 71,29" fill="#CDA84D" />
        <circle cx="28" cy="68" r="2" fill="#FAF4E6" />
        <circle cx="78" cy="56" r="2" fill="#FAF4E6" />
      </g>
    </svg>
  ),

  // 23. Kadalika-Karana (Mortarless Corbelled Arch)
  corbelArch: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Corbelled Arch">
      <ellipse cx="50" cy="88" rx="36" ry="6" fill="#E0D3BC" />
      {/* Vertical piers */}
      <rect x="20" y="52" width="16" height="34" fill="#786B5A" stroke="#40382F" strokeWidth="1" />
      <rect x="64" y="52" width="16" height="34" fill="#786B5A" stroke="#40382F" strokeWidth="1" />
      {/* Stepped cantilevers */}
      <rect x="24" y="42" width="18" height="10" fill="#9A8A78" stroke="#40382F" strokeWidth="1" />
      <rect x="58" y="42" width="18" height="10" fill="#9A8A78" stroke="#40382F" strokeWidth="1" />
      <rect x="30" y="32" width="18" height="10" fill="#B5A896" stroke="#40382F" strokeWidth="1" />
      <rect x="52" y="32" width="18" height="10" fill="#B5A896" stroke="#40382F" strokeWidth="1" />
      {/* Keystone Capstone */}
      <polygon points="40,32 60,32 55,20 45,20" fill="#B96F4B" stroke="#9A5A38" strokeWidth="1.5" />
    </svg>
  ),

  // 24. Harappan 1:2:4 Proportion Brick
  harappanBrick: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Harappan Brick">
      <ellipse cx="50" cy="80" rx="32" ry="6" fill="#E0D3BC" />
      {/* 3D Isometric Brick */}
      {/* Top face */}
      <polygon points="50,30 84,44 50,58 16,44" fill="#D98A66" stroke="#9A5A38" strokeWidth="1.5" />
      {/* Left face */}
      <polygon points="16,44 50,58 50,72 16,58" fill="#B96F4B" stroke="#9A5A38" strokeWidth="1.5" />
      {/* Right face */}
      <polygon points="50,58 84,44 84,58 50,72" fill="#9A5A38" stroke="#6B3A22" strokeWidth="1.5" />
      {/* Ratio banner */}
      <text x="50" y="46" fill="#FAF4E6" fontSize="11" fontWeight="800" textAnchor="middle">1 : 2 : 4</text>
    </svg>
  ),

  // 25. Butterfly Dovetail Stone Cramp
  butterflyCramp: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Butterfly Cramp">
      <rect x="14" y="24" width="72" height="52" rx="4" fill="#FAF4E6" stroke="#9A8A78" strokeWidth="2" />
      <line x1="50" y1="24" x2="50" y2="76" stroke="#C4B892" strokeWidth="2" />
      {/* Butterfly bowtie cramp */}
      <polygon points="34,38 46,50 34,62 66,62 54,50 66,38" fill="#B96F4B" stroke="#9A5A38" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="2.5" fill="#FAF4E6" />
    </svg>
  ),

  // 26. Brihadisvara Vimana Tower Apex
  brihadisvaraApex: ({ size = 72, className = '' }: IllustrationProps = {}) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Brihadisvara Temple Apex">
      <ellipse cx="50" cy="86" rx="34" ry="6" fill="#E0D3BC" />
      {/* Pyramidal vimana upper tiers */}
      <polygon points="26,80 74,80 68,54 32,54" fill="#9A8A78" stroke="#40382F" strokeWidth="1.5" />
      <polygon points="34,54 66,54 62,38 38,38" fill="#B5A896" stroke="#40382F" strokeWidth="1.5" />
      {/* 80-ton Monolithic Granite Kumbam Dome */}
      <ellipse cx="50" cy="32" rx="16" ry="10" fill="#B96F4B" stroke="#9A5A38" strokeWidth="1.5" />
      {/* Kalasam finial */}
      <polygon points="48,22 52,22 50,14" fill="#CDA84D" />
      <circle cx="50" cy="14" r="2.5" fill="#CDA84D" />
    </svg>
  ),
}

export function Illustration({
  name,
  size = 72,
  className = '',
  animated = true,
}: {
  name: string
  size?: number
  className?: string
  animated?: boolean
}) {
  const Component = ILLUSTRATIONS[name]
  if (!Component) {
    // Elegant fallback: circular seal with Itihasa emblem
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
        <circle cx="50" cy="50" r="42" fill="#FAF4E6" stroke="#CDA84D" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="34" fill="#F5EFE6" />
        <circle cx="50" cy="50" r="8" fill="#B96F4B" />
      </svg>
    )
  }
  return <Component size={size} className={className} animated={animated} />
}
