import type { LocationId } from '../types'

export interface LocationData {
  id:                 LocationId
  label:              string
  sanskritLabel:      string
  tagline:            string
  theme:              string
  preview:            string
  curiosityPrompt:    string
  discoveries:        string[]
  available:          boolean
  mapX:               number
  mapY:               number
}

export const LOCATIONS: LocationData[] = [
  {
    id:              'village',
    label:           'The Village',
    sanskritLabel:   'ग्राम (Grama)',
    tagline:         'Stories and community decisions',
    theme:           'Community & Storytelling',
    preview:         'A bustling settlement with mud-plastered homes, terracotta tile roofs, and shady neem trees. The residents face daily real-world choices about keeping paths clear, sharing work, and planning gatherings.',
    curiosityPrompt: 'When a challenge affects an entire community, which solution is truly fairest?',
    discoveries: [
      'Navigate real-world community dilemmas through branching choices',
      'Examine how small individual choices shape collective well-being',
      'Experience how traditional villages solved problems together without top-down orders',
    ],
    available:       true,
    mapX:            250,
    mapY:            415,
  },
  {
    id:              'riverlands',
    label:           'The Riverlands',
    sanskritLabel:   'नदी-तट (Nadi-tata)',
    tagline:         'Water sharing and resource balance',
    theme:           'Resource Management',
    preview:         'Terraced fields and earthen channels run alongside a winding river. When the dry season arrives, three households must share a limited quantity of stored water without leaving anyone stranded.',
    curiosityPrompt: 'Does dividing a scarce resource equally always mean dividing it fairly?',
    discoveries: [
      'Investigate the distinct water needs of crops, cattle, and households',
      'Allocate finite units interactively and witness direct outcomes',
      'Connect simulated decisions to historical Indian stepwells, tanks, and community water systems',
    ],
    available:       true,
    mapX:            830,
    mapY:            440,
  },
  {
    id:              'scholar',
    label:           "Scholar's Courtyard",
    sanskritLabel:   'विद्वत्-प्राङ्गण (Vidvat-Prangana)',
    tagline:         'Numbers, patterns, and logic',
    theme:           'Mathematical Thinking',
    preview:         'Under the quiet canopy of an ancient banyan tree, a stone courtyard holds slates inscribed with rhythmic patterns, bead abacuses, and geometric number arrangements inspired by classical Indian mathematics.',
    curiosityPrompt: 'How can simple geometric patterns reveal hidden rules of numbers?',
    discoveries: [
      'Discover rhythmic number sequences and the elegance of Indian place-value thinking',
      'Solve tactile puzzles using visual representations rather than memorised formulas',
      'Learn how scholars observed mathematical symmetry in poetry, architecture, and music',
    ],
    available:       true,
    mapX:            535,
    mapY:            170,
  },
  {
    id:              'gathering',
    label:           'The Gathering Place',
    sanskritLabel:   'सभा-स्थान (Sabha-sthana)',
    tagline:         'Turn-based strategy and foresight',
    theme:           'Traditional Strategy Games',
    preview:         'An open earthen pavilion shaded by peepal trees where villagers gather to play ancient board games like Chaupar, Moksha Patam, and Pallanguzhi, carving boards directly into flat stones.',
    curiosityPrompt: 'How do traditional games teach patience, probability, and long-term planning?',
    discoveries: [
      'Explore strategy, risk assessment, and decision trees through historic games',
      'Understand how games mirrored philosophical ideas of consequence and choice',
      'Play through scenarios that test tactical planning against shifting chances',
    ],
    available:       true,
    mapX:            200,
    mapY:            195,
  },
  {
    id:              'observatory',
    label:           'The Observatory',
    sanskritLabel:   'वेधशाला (Vedhashala)',
    tagline:         'Sun shadows, skies, and timekeeping',
    theme:           'Observation & Cycles',
    preview:         'Perched on an elevated rocky ridge with an open view of the sky. Stone pillars, calibrated sundial ramps (gnomons), and hemisphere bowls track the sun’s shadow and seasonal shifts.',
    curiosityPrompt: 'How did people measure time down to minutes using only sunlight and a stone pillar?',
    discoveries: [
      'Trace how solar shadows lengthen and rotate through changing hours and seasons',
      'Discover the methods behind ancient Indian time measurement (Muhurtas and Ghatikas)',
      'Distinguish between simple observational instruments and actual planetary orbits',
    ],
    available:       true,
    mapX:            855,
    mapY:            170,
  },
  {
    id:              'workshop',
    label:           'The Workshop',
    sanskritLabel:   'कर्मशाला (Karmashala)',
    tagline:         'Proportion, balance, and craft',
    theme:           'Geometry & Structures',
    preview:         'A master builder and artisan workshop filled with bamboo compasses, clay brick templates, plumb lines, and interlocking timber joints used in enduring Indian architecture.',
    curiosityPrompt: 'Why did ancient stone arches and stepped wells survive for centuries without mortar?',
    discoveries: [
      'Test interlocking shapes, corbelled arches, and load-bearing stability',
      'Experiment with proportions like geometric symmetry in traditional crafts',
      'Construct virtual structures using principles of balance and friction',
    ],
    available:       true,
    mapX:            635,
    mapY:            310,
  },
]
