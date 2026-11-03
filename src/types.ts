/* Application-level types for Itihasa */

export type Screen =
  | 'home'
  | 'journey'
  | 'world'
  | 'village'
  | 'riverlands'
  | 'scholar'
  | 'gathering'
  | 'observatory'
  | 'workshop'
  | 'progress'

export type LocationId =
  | 'village'
  | 'scholar'
  | 'gathering'
  | 'riverlands'
  | 'observatory'
  | 'workshop'

export interface ExplorationProgress {
  // Activity completion flags
  villageStoryDone: boolean
  riverlandsChallengeDone: boolean
  scholarPuzzleDone: boolean
  gatheringGameDone: boolean
  observatoryDone: boolean
  workshopDone: boolean

  // Journey node completions (step IDs)
  completedNodes: string[]

  // Completed phases per environment: e.g. { village: ['village-p1'] }
  completedPhases?: Record<string, string[]>

  // Points & Badges
  knowledgePoints: number
  unlockedBadges: string[]
  currentStreak: number
}

export const EMPTY_PROGRESS: ExplorationProgress = {
  villageStoryDone: false,
  riverlandsChallengeDone: false,
  scholarPuzzleDone: false,
  gatheringGameDone: false,
  observatoryDone: false,
  workshopDone: false,
  completedNodes: [],
  knowledgePoints: 0,
  unlockedBadges: [],
  currentStreak: 1,
}

export interface JourneyNode {
  id: string
  title: string
  subtitle: string
  environment: LocationId
  screen: Screen
  nodeType: 'story' | 'challenge' | 'puzzle' | 'strategy' | 'observation' | 'craft' | 'milestone'
  requiredPoints: number
  pointsReward: number
  badgeReward?: string
}
