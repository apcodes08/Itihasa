import type { ImageIdQuestion } from '../types'
import styles from '../LessonEngine.module.css'

interface Props {
  question: ImageIdQuestion
  selectedAnswer: string | null
  answered: boolean
  onSelect: (answer: string) => void
}

export function ImageIdRenderer({ question, selectedAnswer, answered, onSelect }: Props) {
  return (
    <div className={styles.imageIdGrid}>
      {question.options.map((opt, idx) => {
        const isSelected = selectedAnswer === opt.id
        const isCorrect = answered && opt.id === question.correctId
        const isWrong = answered && isSelected && opt.id !== question.correctId

        let cls = styles.imageIdCard
        if (isSelected && !answered) cls += ` ${styles.cardSelected}`
        if (isCorrect) cls += ` ${styles.cardCorrect}`
        if (isWrong) cls += ` ${styles.cardWrong}`
        if (answered) cls += ` ${styles.cardDisabled}`

        const letterTag = String.fromCharCode(65 + idx) // A, B, C...

        return (
          <button
            key={opt.id}
            type="button"
            className={cls}
            onClick={() => onSelect(opt.id)}
            disabled={answered}
          >
            <div className={styles.imageIdBadge}>{letterTag}</div>
            <div className={styles.imageIdLabel}>{opt.text}</div>
            <div className={styles.cardRadioIndicator}>
              {isCorrect ? '✓' : isWrong ? '✗' : isSelected ? '●' : '○'}
            </div>
          </button>
        )
      })}
    </div>
  )
}
