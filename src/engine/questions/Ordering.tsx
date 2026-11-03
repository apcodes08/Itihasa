import { useState } from 'react'
import type { OrderingQuestion } from '../types'
import styles from '../LessonEngine.module.css'

interface Props {
  question: OrderingQuestion
  selectedAnswer: string | null
  answered: boolean
  onSelect: (answer: string) => void
}

export function OrderingRenderer({ question, answered, onSelect }: Props) {
  const [items, setItems] = useState<string[]>(() => [...question.shuffledItems])
  const [lastQuestionId, setLastQuestionId] = useState(question.id)

  if (lastQuestionId !== question.id) {
    setLastQuestionId(question.id)
    setItems([...question.shuffledItems])
  }

  function updateAndNotify(newItems: string[]) {
    setItems(newItems)
    const isCorrect = newItems.every((item, i) => item === question.correctOrder[i])
    onSelect(isCorrect ? 'correct' : 'incorrect')
  }

  function moveUp(index: number) {
    if (index === 0 || answered) return
    const newItems = [...items]
    const temp = newItems[index - 1]
    newItems[index - 1] = newItems[index]
    newItems[index] = temp
    updateAndNotify(newItems)
  }

  function moveDown(index: number) {
    if (index === items.length - 1 || answered) return
    const newItems = [...items]
    const temp = newItems[index + 1]
    newItems[index + 1] = newItems[index]
    newItems[index] = temp
    updateAndNotify(newItems)
  }

  return (
    <div className={styles.orderList}>
      {items.map((item, i) => (
        <div key={item} className={styles.orderItem}>
          <span className={styles.orderNum}>{i + 1}</span>
          <span>{item}</span>
          {!answered && (
            <div className={styles.orderBtns}>
              <button
                className={styles.orderArrowBtn}
                onClick={() => moveUp(i)}
                disabled={i === 0}
                title="Move up"
              >
                ▲
              </button>
              <button
                className={styles.orderArrowBtn}
                onClick={() => moveDown(i)}
                disabled={i === items.length - 1}
                title="Move down"
              >
                ▼
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
