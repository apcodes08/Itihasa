import type { MultipleChoiceQuestion } from '../types'
import { Illustration } from '../../assets/illustrations'
import styles from '../LessonEngine.module.css'

interface Props {
  question: MultipleChoiceQuestion
  selectedAnswer: string | null
  answered: boolean
  onSelect: (answer: string) => void
}

export function MultipleChoiceRenderer({ question, selectedAnswer, answered, onSelect }: Props) {
  const hasIllustratedOptions = question.options.some(o => Boolean(o.illustrationKey))
  const isGrid = question.layout === 'grid' || hasIllustratedOptions || question.options.length <= 4

  return (
    <div className={isGrid ? styles.illustratedGrid : styles.optionsList}>
      {question.options.map(opt => {
        const isSelected = selectedAnswer === opt.id
        const isCorrect = answered && opt.id === question.correctId
        const isWrong = answered && isSelected && opt.id !== question.correctId

        let cardClass = styles.illustratedCard
        if (isSelected && !answered) cardClass += ` ${styles.cardSelected}`
        if (isCorrect) cardClass += ` ${styles.cardCorrect}`
        if (isWrong) cardClass += ` ${styles.cardWrong}`
        if (answered) cardClass += ` ${styles.cardDisabled}`

        // Derive illustration key if not explicitly set
        const illustrationName = opt.illustrationKey || deriveIllustrationKey(opt.id, opt.text)

        return (
          <button
            key={opt.id}
            type="button"
            className={cardClass}
            onClick={() => onSelect(opt.id)}
            disabled={answered}
          >
            {/* Upper illustration stage with soft parchment background */}
            <div className={styles.cardIllustrationStage}>
              {illustrationName ? (
                <Illustration
                  name={illustrationName}
                  size={64}
                  className={styles.cardSvg}
                  animated={isSelected || !answered}
                />
              ) : (
                <svg width="54" height="54" viewBox="0 0 60 60" fill="none" className={styles.cardSvg}>
                  <circle cx="30" cy="30" r="26" fill="#F5EFE6" stroke="#D6B775" strokeWidth="2" />
                  <circle cx="30" cy="30" r="18" fill="#FAF4E6" stroke="#CDA84D" strokeWidth="1" strokeDasharray="3 2" />
                  <circle cx="30" cy="30" r="5" fill="#B96F4B" />
                </svg>
              )}

              {/* Status Badge in corner */}
              <div className={`${styles.cardBadge} ${isSelected ? styles.cardBadgeSelected : ''} ${isCorrect ? styles.cardBadgeCorrect : ''} ${isWrong ? styles.cardBadgeWrong : ''}`}>
                {isCorrect ? '✓' : isWrong ? '✗' : isSelected ? '●' : '○'}
              </div>
            </div>

            {/* Bottom text label area */}
            <div className={styles.cardLabelArea}>
              <span className={styles.cardTitle}>{opt.text}</span>
              {opt.subtitle && <span className={styles.cardSubtitle}>{opt.subtitle}</span>}
            </div>
          </button>
        )
      })}
    </div>
  )
}

function deriveIllustrationKey(id: string, text: string): string | null {
  const str = (id + ' ' + text).toLowerCase()
  if (str.includes('banyan') || str.includes('peepal') || str.includes('tree')) return 'banyanTree'
  if (str.includes('matka') || str.includes('clay') || str.includes('potter') || str.includes('pitcher')) return 'matkaPot'
  if (str.includes('iron') || str.includes('cauldron') || str.includes('metal')) return 'ironCauldron'
  if (str.includes('kudavolai') || str.includes('ticket') || str.includes('palm') || str.includes('clean')) return 'kudavolai'
  if (str.includes('plough') || str.includes('farmer') || str.includes('plow')) return 'plough'
  if (str.includes('shramadaan') || str.includes('shared labor') || str.includes('volunteer') || str.includes('welfare')) return 'shramadaan'
  if (str.includes('veranda') || str.includes('thinnai') || str.includes('otla') || str.includes('social')) return 'thinnaiVeranda'
  if (str.includes('virahanka') || str.includes('beat') || str.includes('prosody') || str.includes('meter')) return 'virahankaBeat'
  if (str.includes('magic square') || str.includes('chautisa') || str.includes('34')) return 'magicSquareTile'
  if (str.includes('zero') || str.includes('shunya') || str.includes('bindu')) return 'shunyaZero'
  if (str.includes('meru') || str.includes('pascal') || str.includes('triangle')) return 'meruPrastara'
  if (str.includes('chaupar') || str.includes('cross') || str.includes('pachisi')) return 'chauparBoard'
  if (str.includes('cowrie') || str.includes('shell')) return 'cowrieShells'
  if (str.includes('chaturanga') || str.includes('chess') || str.includes('army')) return 'chaturanga'
  if (str.includes('moksha') || str.includes('virtue') || str.includes('ladder') || str.includes('snake')) return 'mokshaPatam'
  if (str.includes('baoli') || str.includes('vav') || str.includes('stepwell') || str.includes('inverted')) return 'stepwell'
  if (str.includes('water wheel') || str.includes('araghatta') || str.includes('wheel')) return 'waterWheel'
  if (str.includes('johad') || str.includes('dam') || str.includes('check') || str.includes('bund')) return 'johadBund'
  if (str.includes('shanku') || str.includes('sundial') || str.includes('noon') || str.includes('gnomon')) return 'shankuSundial'
  if (str.includes('samrat') || str.includes('jantar') || str.includes('stone scales') || str.includes('triangle')) return 'samratYantra'
  if (str.includes('earth') || str.includes('rotation') || str.includes('rotate') || str.includes('axis')) return 'rotatingEarth'
  if (str.includes('nakshatra') || str.includes('moon') || str.includes('star') || str.includes('constellation')) return 'nakshatraMoon'
  if (str.includes('corbel') || str.includes('arch') || str.includes('kadalika') || str.includes('equilibrium')) return 'corbelArch'
  if (str.includes('brick') || str.includes('ratio') || str.includes('harappan') || str.includes('1 : 2')) return 'harappanBrick'
  if (str.includes('butterfly') || str.includes('dovetail') || str.includes('cramp') || str.includes('joinery')) return 'butterflyCramp'
  if (str.includes('brihadisvara') || str.includes('kumbam') || str.includes('thanjavur') || str.includes('apex')) return 'brihadisvaraApex'
  return null
}
