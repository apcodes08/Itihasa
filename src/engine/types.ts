/* =====================================================
   Itihasa — Lesson Engine Type Definitions
   ===================================================== */

/** The eight supported interactive question types */
export type QuestionType =
  | 'multiple-choice'
  | 'fill-blanks'
  | 'matching'
  | 'ordering'
  | 'image-id'
  | 'pattern-completion'
  | 'scenario'
  | 'interactive-challenge'

/* ---- Base question with discriminated union ---- */

interface QuestionBase {
  id: string
  type: QuestionType
  text: string
  hint?: string
  explanation: string
  /** SVG illustration data or descriptive key for inline visuals */
  illustration?: IllustrationData
}

export interface IllustrationData {
  /** Simple inline SVG elements described as viewBox + paths */
  viewBox: string
  elements: string // raw SVG inner content
  bgColor?: string
}

/* ---- Concrete question shapes ---- */

export interface MultipleChoiceOption {
  id: string
  text: string
  subtitle?: string
  icon?: string
  illustrationKey?: string
}

export interface MultipleChoiceQuestion extends QuestionBase {
  type: 'multiple-choice'
  options: MultipleChoiceOption[]
  correctId: string
  /** Layout mode: 'grid' (2x2 illustrated cards) or 'list' (default: 'grid' when illustrations are present) */
  layout?: 'grid' | 'list'
}

export interface FillBlanksQuestion extends QuestionBase {
  type: 'fill-blanks'
  /** Sentence with a single __BLANK__ placeholder */
  sentence: string
  /** Word tiles the child chooses from */
  wordTiles: string[]
  correctWord: string
}

export interface MatchingQuestion extends QuestionBase {
  type: 'matching'
  pairs: { left: string; right: string }[]
}

export interface OrderingQuestion extends QuestionBase {
  type: 'ordering'
  /** Items in the correct sequence */
  correctOrder: string[]
  /** Shuffled items presented to the child */
  shuffledItems: string[]
}

export interface ImageIdQuestion extends QuestionBase {
  type: 'image-id'
  /** Options shown under the illustration */
  options: { id: string; text: string }[]
  correctId: string
}

export interface PatternCompletionQuestion extends QuestionBase {
  type: 'pattern-completion'
  /** Visible pattern elements */
  pattern: string[]
  /** The missing slot index */
  missingIndex: number
  options: string[]
  correctOption: string
}

export interface ScenarioQuestion extends QuestionBase {
  type: 'scenario'
  scenarioText: string
  decisions: { id: string; text: string; consequence: string }[]
  bestId: string
}

export interface InteractiveChallengeQuestion extends QuestionBase {
  type: 'interactive-challenge'
  /** Specific challenge sub-type for rendering */
  challengeKind: 'slider' | 'arrange' | 'allocate' | 'toggle'
  /** Arbitrary config data for the challenge */
  config: Record<string, unknown>
  /** Validation function key or simple correct answer */
  correctValue: string
}

export type Question =
  | MultipleChoiceQuestion
  | FillBlanksQuestion
  | MatchingQuestion
  | OrderingQuestion
  | ImageIdQuestion
  | PatternCompletionQuestion
  | ScenarioQuestion
  | InteractiveChallengeQuestion

/* ---- Lesson / Phase structure ---- */

export interface SubLesson {
  id: string
  title: string
  learningObjective?: string
  coverIllustrationKey?: string
  questions: Question[]
}

export interface Phase {
  id: string
  title: string
  type: 'learning' | 'review'
  subLessons: SubLesson[]
}

export interface EnvironmentCurriculum {
  environmentId: string
  environmentName: string
  phases: Phase[]
}

/* ---- Progress tracking ---- */

export interface QuestionResult {
  questionId: string
  correct: boolean
  attempts: number
}

export interface SubLessonProgress {
  subLessonId: string
  completed: boolean
  score: number // 0-100
  questionResults: QuestionResult[]
}

export interface PhaseProgress {
  phaseId: string
  completed: boolean
  subLessons: Record<string, SubLessonProgress>
}

export interface EnvironmentLessonProgress {
  environmentId: string
  phases: Record<string, PhaseProgress>
  currentPhaseId: string
  currentSubLessonId: string
}

