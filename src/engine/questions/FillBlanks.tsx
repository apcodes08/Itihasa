import type { FillBlanksQuestion } from '../types'
import styles from '../LessonEngine.module.css'

interface Props {
  question: FillBlanksQuestion
  selectedAnswer: string | null
  answered: boolean
  onSelect: (answer: string) => void
}

export function FillBlanksRenderer({ question, selectedAnswer, answered, onSelect }: Props) {
  const parts = question.sentence.split('__BLANK__')

  return (
    <>
      <div className={styles.sentenceWrap}>
        {parts[0]}
        <span className={`${styles.blankSlot} ${selectedAnswer ? styles.blankFilled : ''}`}>
          {selectedAnswer || '___'}
        </span>
        {parts[1] || ''}
      </div>

      <div className={styles.wordTilesRow}>
        {question.wordTiles.map(word => {
          const isSelected = selectedAnswer === word
          let cls = styles.wordTile
          if (isSelected) cls += ` ${styles.wordTileSelected}`
          if (answered) cls += ` ${styles.wordTileDisabled}`

          return (
            <button
              key={word}
              className={cls}
              onClick={() => onSelect(word)}
              disabled={answered}
            >
              {word}
            </button>
          )
        })}
      </div>
    </>
  )
}

