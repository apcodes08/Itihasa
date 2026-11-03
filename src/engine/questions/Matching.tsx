import { useState } from 'react'
import type { MatchingQuestion } from '../types'
import styles from '../LessonEngine.module.css'

interface Props {
  question: MatchingQuestion
  selectedAnswer: string | null
  answered: boolean
  onSelect: (answer: string) => void
}

function getShuffledRights(pairs: { left: string; right: string }[]) {
  return [...pairs.map(p => p.right)].sort(() => Math.random() - 0.5)
}

export function MatchingRenderer({ question, answered, onSelect }: Props) {
  const [matchedPairs, setMatchedPairs] = useState<Map<string, string>>(() => new Map())
  const [activeLeft, setActiveLeft] = useState<string | null>(null)
  const [shuffledRight, setShuffledRight] = useState<string[]>(() => getShuffledRights(question.pairs))
  const [lastQuestionId, setLastQuestionId] = useState(question.id)

  if (lastQuestionId !== question.id) {
    setLastQuestionId(question.id)
    setMatchedPairs(new Map())
    setActiveLeft(null)
    setShuffledRight(getShuffledRights(question.pairs))
  }

  function handleLeftClick(left: string) {
    if (answered || matchedPairs.has(left)) return
    setActiveLeft(left)
  }

  function handleRightClick(right: string) {
    if (answered || !activeLeft) return
    const usedRights = new Set(matchedPairs.values())
    if (usedRights.has(right)) return

    const next = new Map(matchedPairs)
    next.set(activeLeft, right)
    setMatchedPairs(next)
    setActiveLeft(null)

    // Check if this completes all pairs
    if (next.size === question.pairs.length) {
      let allCorrect = true
      for (const pair of question.pairs) {
        if (next.get(pair.left) !== pair.right) {
          allCorrect = false
          break
        }
      }
      onSelect(allCorrect ? 'correct' : 'incorrect')
    }
  }

  return (
    <div className={styles.matchingGrid}>
      {question.pairs.map((pair, i) => {
        const isLeftActive = activeLeft === pair.left
        const isMatched = matchedPairs.has(pair.left)
        const matchedRight = matchedPairs.get(pair.left)
        const isCorrectPair = answered && matchedRight === pair.right
        const isWrongPair = answered && isMatched && matchedRight !== pair.right

        let leftCls = styles.matchLeft
        if (isLeftActive) leftCls += ` ${styles.matchHighlight}`
        if (isCorrectPair) leftCls += ` ${styles.matchCorrect}`
        if (isWrongPair) leftCls += ` ${styles.matchWrong}`

        const rightItem = shuffledRight[i] || pair.right
        const isRightUsed = Array.from(matchedPairs.values()).includes(rightItem)
        let rightCls = styles.matchRight
        if (isRightUsed && answered) {
          const leftForRight = Array.from(matchedPairs.entries()).find(([, v]) => v === rightItem)
          if (leftForRight) {
            const correctRight = question.pairs.find(p => p.left === leftForRight[0])?.right
            if (correctRight === rightItem) rightCls += ` ${styles.matchCorrect}`
            else rightCls += ` ${styles.matchWrong}`
          }
        }

        return (
          <div key={pair.left} style={{ display: 'contents' }}>
            <button
              className={leftCls}
              onClick={() => handleLeftClick(pair.left)}
              disabled={answered || isMatched}
            >
              {pair.left}
              {isMatched && <span style={{ marginLeft: 6, fontSize: '0.8rem' }}>→ {matchedRight}</span>}
            </button>
            <span className={`${styles.matchArrow} ${isMatched ? styles.matchConnected : ''}`}>
              {isMatched ? '━' : '·'}
            </span>
            <button
              className={rightCls}
              onClick={() => handleRightClick(rightItem)}
              disabled={answered || isRightUsed}
            >
              {rightItem}
            </button>
          </div>
        )
      })}
    </div>
  )
}
