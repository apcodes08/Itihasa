import { useState, useEffect } from 'react'
import type { InteractiveChallengeQuestion } from '../types'
import styles from '../LessonEngine.module.css'

interface Props {
  question: InteractiveChallengeQuestion
  selectedAnswer: string | null
  answered: boolean
  onSelect: (answer: string) => void
}

export function InteractiveChallengeRenderer({ question, answered, onSelect }: Props) {
  const config = question.config as Record<string, unknown>

  if (question.challengeKind === 'slider') {
    return (
      <SliderChallenge
        config={config}
        correctValue={question.correctValue}
        answered={answered}
        onSelect={onSelect}
      />
    )
  }

  if (question.challengeKind === 'toggle') {
    return (
      <ToggleChallenge
        config={config}
        correctValue={question.correctValue}
        answered={answered}
        onSelect={onSelect}
      />
    )
  }

  // Fallback for arrange / allocate: use a simple multiple-choice style
  const options = (config.options as string[]) || []
  return (
    <div className={styles.answerArea}>
      {options.map(opt => (
        <button
          key={opt}
          className={styles.optionTile}
          onClick={() => onSelect(opt)}
          disabled={answered}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

/* ---- Slider sub-challenge ---- */
function SliderChallenge({
  config,
  correctValue,
  answered,
  onSelect,
}: {
  config: Record<string, unknown>
  correctValue: string
  answered: boolean
  onSelect: (answer: string) => void
}) {
  const min = (config.min as number) || 0
  const max = (config.max as number) || 100
  const step = (config.step as number) || 1
  const unit = (config.unit as string) || ''
  const label = (config.label as string) || 'Value'
  const initial = (config.initial as number) || Math.round((min + max) / 2)

  const [value, setValue] = useState(initial)
  const [prevInitial, setPrevInitial] = useState(initial)

  if (prevInitial !== initial) {
    setPrevInitial(initial)
    setValue(initial)
  }

  useEffect(() => {
    onSelect(String(initial))
  }, [initial, onSelect])

  function handleChange(newValue: number) {
    setValue(newValue)
    onSelect(String(newValue))
  }

  return (
    <div className={styles.challengeWrap}>
      <div className={styles.challengeValue}>
        {label}: {value}{unit}
      </div>
      <div className={styles.challengeSlider}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => handleChange(Number(e.target.value))}
          disabled={answered}
        />
      </div>
      {answered && (
        <div style={{ fontSize: '0.88rem', color: '#6F5F5A', textAlign: 'center' }}>
          Correct answer: {correctValue}{unit}
        </div>
      )}
    </div>
  )
}

/* ---- Toggle sub-challenge ---- */
function ToggleChallenge({
  config,
  answered,
  onSelect,
}: {
  config: Record<string, unknown>
  correctValue: string
  answered: boolean
  onSelect: (answer: string) => void
}) {
  const options = (config.options as string[]) || ['A', 'B']
  const [selected, setSelected] = useState<string | null>(null)

  function handleClick(opt: string) {
    if (answered) return
    setSelected(opt)
    onSelect(opt)
  }

  return (
    <div className={styles.challengeWrap}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        {options.map(opt => (
          <button
            key={opt}
            className={`${styles.optionTile} ${selected === opt ? styles.optionSelected : ''}`}
            onClick={() => handleClick(opt)}
            disabled={answered}
            style={{ flex: '0 0 auto', minWidth: 120 }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
