import type { Question } from './types'
import { MultipleChoiceRenderer } from './questions/MultipleChoice'
import { FillBlanksRenderer } from './questions/FillBlanks'
import { MatchingRenderer } from './questions/Matching'
import { OrderingRenderer } from './questions/Ordering'
import { ImageIdRenderer } from './questions/ImageId'
import { PatternCompletionRenderer } from './questions/PatternCompletion'
import { ScenarioRenderer } from './questions/Scenario'
import { InteractiveChallengeRenderer } from './questions/InteractiveChallenge'

interface Props {
  question: Question
  selectedAnswer: string | null
  answered: boolean
  onSelect: (answer: string) => void
}

export function QuestionRenderer({ question, selectedAnswer, answered, onSelect }: Props) {
  switch (question.type) {
    case 'multiple-choice':
      return (
        <MultipleChoiceRenderer
          question={question}
          selectedAnswer={selectedAnswer}
          answered={answered}
          onSelect={onSelect}
        />
      )
    case 'fill-blanks':
      return (
        <FillBlanksRenderer
          question={question}
          selectedAnswer={selectedAnswer}
          answered={answered}
          onSelect={onSelect}
        />
      )
    case 'matching':
      return (
        <MatchingRenderer
          question={question}
          selectedAnswer={selectedAnswer}
          answered={answered}
          onSelect={onSelect}
        />
      )
    case 'ordering':
      return (
        <OrderingRenderer
          question={question}
          selectedAnswer={selectedAnswer}
          answered={answered}
          onSelect={onSelect}
        />
      )
    case 'image-id':
      return (
        <ImageIdRenderer
          question={question}
          selectedAnswer={selectedAnswer}
          answered={answered}
          onSelect={onSelect}
        />
      )
    case 'pattern-completion':
      return (
        <PatternCompletionRenderer
          question={question}
          selectedAnswer={selectedAnswer}
          answered={answered}
          onSelect={onSelect}
        />
      )
    case 'scenario':
      return (
        <ScenarioRenderer
          question={question}
          selectedAnswer={selectedAnswer}
          answered={answered}
          onSelect={onSelect}
        />
      )
    case 'interactive-challenge':
      return (
        <InteractiveChallengeRenderer
          question={question}
          selectedAnswer={selectedAnswer}
          answered={answered}
          onSelect={onSelect}
        />
      )
    default:
      return <p>Unknown question type</p>
  }
}

