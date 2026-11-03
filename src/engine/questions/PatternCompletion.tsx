import type { PatternCompletionQuestion } from '../types'
import styles from '../LessonEngine.module.css'

interface Props {
  question: PatternCompletionQuestion
  selectedAnswer: string | null
  answered: boolean
  onSelect: (answer: string) => void
}

export function PatternCompletionRenderer({ question, selectedAnswer, answered, onSelect }: Props) {
  return (
    <>
      <div className={styles.patternRow}>
        {question.pattern.map((cell, i) => {
          if (i === question.missingIndex) {
            const filled = selectedAnswer != null
            return (
              <div
                key={i}
                className={`${styles.patternCell} ${filled ? styles.patternFilled : styles.patternMissing}`}
              >
                {filled ? selectedAnswer : '?'}
              </div>
            )
          }
          return (
            <div key={i} className={styles.patternCell}>{cell}</div>
          )
        })}
      </div>

      <div className={styles.patternOptionsRow}>
        {question.options.map(opt => {
          const isSelected = selectedAnswer === opt
          let cls = styles.patternOption
          if (isSelected) cls += ` ${styles.patternOptionSelected}`

          return (
            <button
              key={opt}
              className={cls}
              onClick={() => onSelect(opt)}
              disabled={answered}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </>
  )
}

