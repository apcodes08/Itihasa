import type { ScenarioQuestion } from '../types'
import styles from '../LessonEngine.module.css'

interface Props {
  question: ScenarioQuestion
  selectedAnswer: string | null
  answered: boolean
  onSelect: (answer: string) => void
}

export function ScenarioRenderer({ question, selectedAnswer, answered, onSelect }: Props) {
  return (
    <>
      <div className={styles.scenarioText}>{question.scenarioText}</div>

      {question.decisions.map(d => {
        const isSelected = selectedAnswer === d.id
        let cls = styles.scenarioOption
        if (isSelected) cls += ` ${styles.scenarioOptionSelected}`

        return (
          <button
            key={d.id}
            className={cls}
            onClick={() => onSelect(d.id)}
            disabled={answered}
          >
            <span className={styles.scenarioOptionText}>{d.text}</span>
            {answered && isSelected && (
              <span style={{ fontSize: '0.88rem', color: '#6F5F5A', marginTop: 4 }}>
                {d.consequence}
              </span>
            )}
          </button>
        )
      })}
    </>
  )
}

