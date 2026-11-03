import { useState } from 'react'
import { VILLAGE_CURRICULUM } from '../../data/villageCurriculum'
import { PhaseSelector } from '../../engine/PhaseSelector'
import { LessonRunner } from '../../engine/LessonRunner'
import styles from './VillageExperience.module.css'

interface Props {
  onComplete: () => void
  onReturn: () => void
  completedPhases?: string[]
  onPhaseComplete?: (phaseId: string, points: number) => void
}

type ViewMode = 'curriculum' | 'lesson' | 'story'
type StoryStep = 'intro' | 'choice1' | 'outcome1' | 'choice2' | 'outcome2' | 'historical' | 'completed'

export function VillageExperience({
  onComplete,
  onReturn,
  completedPhases = [],
  onPhaseComplete,
}: Props) {
  const [mode, setMode] = useState<ViewMode>('curriculum')
  const [activePhaseId, setActivePhaseId] = useState<string>('village-p1')
  const [localCompletedPhases, setLocalCompletedPhases] = useState<string[]>(completedPhases)

  // Story state for featured simulation
  const [storyStep, setStoryStep] = useState<StoryStep>('intro')
  const [choice1, setChoice1] = useState<string | null>(null)
  const [choice2, setChoice2] = useState<string | null>(null)

  const activePhase = VILLAGE_CURRICULUM.phases.find(p => p.id === activePhaseId) || VILLAGE_CURRICULUM.phases[0]
  const activeSubLesson = activePhase.subLessons[0]

  function handleSelectPhase(phaseId: string) {
    setActivePhaseId(phaseId)
    setMode('lesson')
  }

  function handleLessonComplete(_score: number) {
    if (!localCompletedPhases.includes(activePhaseId)) {
      setLocalCompletedPhases(prev => [...prev, activePhaseId])
      onPhaseComplete?.(activePhaseId, 40)
    }
    // Also trigger completion for the realm
    onComplete()
    setMode('curriculum')
  }

  function handleStoryFinish() {
    onComplete()
    setMode('curriculum')
  }

  // 1. Lesson Mode
  if (mode === 'lesson' && activeSubLesson) {
    return (
      <LessonRunner
        subLesson={activeSubLesson}
        environmentName="The Village"
        onComplete={handleLessonComplete}
        onExit={() => setMode('curriculum')}
      />
    )
  }

  // 2. Featured Story Mode (The Blocked Harvest Path)
  if (mode === 'story') {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <button onClick={() => setMode('curriculum')} className={styles.backBtn} title="Back to Village Curriculum">
              ← Return to Phases
            </button>
            <span className={styles.divider}>/</span>
            <span className={styles.realmName}>Featured Story: The Blocked Harvest Path</span>
          </div>

          <div className={styles.stepProgress}>
            <span className={styles.stepIndicator}>
              Step: {storyStep === 'intro' ? '1/5' : storyStep.startsWith('choice1') || storyStep.startsWith('outcome1') ? '2/5' : storyStep.startsWith('choice2') || storyStep.startsWith('outcome2') ? '3/5' : storyStep === 'historical' ? '4/5' : '5/5'}
            </span>
          </div>
        </header>

        <main className={styles.main}>
          {storyStep === 'intro' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Community Decision Scenario</div>
              <h1 className={styles.title}>The Blocked Harvest Path</h1>
              <p className={styles.lead}>
                Early morning in the village. A sudden summer dust storm has snapped a massive branch from the ancient neem
                tree, completely blocking the main earthen cart track that leads to the village water well and grain storerooms.
              </p>

              <div className={styles.vignette}>
                <svg viewBox="0 0 600 160" fill="none" className={styles.vignetteSvg} aria-hidden="true">
                  <rect width="600" height="160" fill="#EFE8D6" rx="8" />
                  <path d="M0 120 Q300 80 600 120" stroke="#C4B892" strokeWidth="24" fill="none" />
                  <rect x="260" y="40" width="16" height="50" fill="#5E6B52" />
                  <ellipse cx="268" cy="35" rx="35" ry="25" fill="#788568" />
                  <path d="M276 60 L380 115" stroke="#40382F" strokeWidth="12" strokeLinecap="round" />
                  <circle cx="340" cy="100" r="15" fill="#788568" opacity="0.8" />
                  <circle cx="160" cy="110" r="8" fill="#B96F4B" />
                  <circle cx="190" cy="105" r="8" fill="#788568" />
                  <circle cx="430" cy="115" r="8" fill="#40382F" />
                  <text x="300" y="145" textAnchor="middle" fill="#40382F" fontSize="12" fontWeight="bold">
                    The blocked lane affects weavers, farmers, and children fetching drinking water
                  </text>
                </svg>
              </div>

              <p className={styles.bodyText}>
                The potter needs to transport fresh clay pots before they crack in the noon heat. The school teacher cannot
                bring students past the thorn tangle. Three different neighbors have proposed three different plans.
              </p>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStoryStep('choice1')}>
                  Examine Proposed Solutions →
                </button>
              </div>
            </div>
          )}

          {storyStep === 'choice1' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Decision 1 of 2</div>
              <h2 className={styles.title}>How should the community clear the path?</h2>
              <p className={styles.lead}>
                Consider fairness, time, and shared responsibility before making your choice:
              </p>

              <div className={styles.optionsList}>
                <button
                  className={`${styles.optionCard} ${choice1 === 'collective' ? styles.optionSelected : ''}`}
                  onClick={() => setChoice1('collective')}
                >
                  <div className={styles.optionHeader}>
                    <span className={styles.optionTag}>Option A: Shramadaan (Shared Labor)</span>
                    <span className={styles.optionRadio}>{choice1 === 'collective' ? '●' : '○'}</span>
                  </div>
                  <h3 className={styles.optionTitle}>Every family contributes one member for 90 minutes</h3>
                  <p className={styles.optionDesc}>
                    Work is shared equally regardless of wealth. The path clears swiftly, but some artisans lose morning crafting time.
                  </p>
                </button>

                <button
                  className={`${styles.optionCard} ${choice1 === 'fund' ? styles.optionSelected : ''}`}
                  onClick={() => setChoice1('fund')}
                >
                  <div className={styles.optionHeader}>
                    <span className={styles.optionTag}>Option B: Common Granary Fund</span>
                    <span className={styles.optionRadio}>{choice1 === 'fund' ? '●' : '○'}</span>
                  </div>
                  <h3 className={styles.optionTitle}>Pay local laborers using grain from the village grain bank</h3>
                  <p className={styles.optionDesc}>
                    Artisans continue their work uninterrupted, but the village grain reserve for drought emergencies decreases slightly.
                  </p>
                </button>

                <button
                  className={`${styles.optionCard} ${choice1 === 'users' ? styles.optionSelected : ''}`}
                  onClick={() => setChoice1('users')}
                >
                  <div className={styles.optionHeader}>
                    <span className={styles.optionTag}>Option C: Direct Beneficiaries First</span>
                    <span className={styles.optionRadio}>{choice1 === 'users' ? '●' : '○'}</span>
                  </div>
                  <h3 className={styles.optionTitle}>Only families with carts and cattle clear the lane</h3>
                  <p className={styles.optionDesc}>
                    Those who profit most from carts do the heavy lifting, but pedestrians and students remain delayed waiting for them.
                  </p>
                </button>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.secondaryBtn} onClick={() => setStoryStep('intro')}>
                  ← Back
                </button>
                <button
                  className={styles.primaryBtn}
                  disabled={!choice1}
                  onClick={() => setStoryStep('outcome1')}
                >
                  Witness Consequences →
                </button>
              </div>
            </div>
          )}

          {storyStep === 'outcome1' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Consequences Observed</div>
              <h2 className={styles.title}>The Outcome of Your Choice</h2>

              {choice1 === 'collective' && (
                <div className={styles.feedbackBox}>
                  <h3 className={styles.feedbackTitle}>✦ Strong Solidarity, High Engagement</h3>
                  <p className={styles.feedbackText}>
                    Villagers worked side by side. Grandparents watched the children while youths dragged the heavy boughs.
                    Because so many hands pitched in, the path was fully swept clean in just 50 minutes. The potter arrived at market on time!
                  </p>
                </div>
              )}

              {choice1 === 'fund' && (
                <div className={styles.feedbackBox}>
                  <h3 className={styles.feedbackTitle}>✦ Swift Execution, Grain Debate</h3>
                  <p className={styles.feedbackText}>
                    Specialist woodcutters efficiently trimmed and salvaged the branch for firewood. However, during evening tea,
                    some elders worried whether using emergency grain for everyday maintenance set an unsustainable precedent.
                  </p>
                </div>
              )}

              {choice1 === 'users' && (
                <div className={styles.feedbackBox}>
                  <h3 className={styles.feedbackTitle}>⚠️ Friction & Delay</h3>
                  <p className={styles.feedbackText}>
                    Cart owners argued that everyone drinks from the well at the end of the road, so burdening only cart drivers
                    felt unfair. The branch sat partially cleared until noon, causing frustration among school children.
                  </p>
                </div>
              )}

              <p className={styles.bodyText}>
                Now, a secondary dilemma emerges: with the large branch cut down, there are <strong>six bundles of valuable neem wood</strong>.
                Neem wood resists termites and makes excellent pillars. Who should receive them?
              </p>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStoryStep('choice2')}>
                  Resolve Second Dilemma →
                </button>
              </div>
            </div>
          )}

          {storyStep === 'choice2' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Decision 2 of 2</div>
              <h2 className={styles.title}>Allocating the Salvaged Timber</h2>
              <p className={styles.lead}>
                How should the village allocate the six bundles of durable neem wood?
              </p>

              <div className={styles.optionsList}>
                <button
                  className={`${styles.optionCard} ${choice2 === 'school' ? styles.optionSelected : ''}`}
                  onClick={() => setChoice2('school')}
                >
                  <div className={styles.optionHeader}>
                    <span className={styles.optionTag}>Option 1: Village School Repair</span>
                    <span className={styles.optionRadio}>{choice2 === 'school' ? '●' : '○'}</span>
                  </div>
                  <h3 className={styles.optionTitle}>Repair the leaking veranda roof of the village school</h3>
                  <p className={styles.optionDesc}>
                    Benefits all future children and protects study slates during the upcoming monsoon.
                  </p>
                </button>

                <button
                  className={`${styles.optionCard} ${choice2 === 'auction' ? styles.optionSelected : ''}`}
                  onClick={() => setChoice2('auction')}
                >
                  <div className={styles.optionHeader}>
                    <span className={styles.optionTag}>Option 2: Open Community Auction</span>
                    <span className={styles.optionRadio}>{choice2 === 'auction' ? '●' : '○'}</span>
                  </div>
                  <h3 className={styles.optionTitle}>Auction the wood and deposit coins into the well maintenance fund</h3>
                  <p className={styles.optionDesc}>
                    Creates liquid savings that can buy rope, iron pulleys, and stone mortar for the public well.
                  </p>
                </button>

                <button
                  className={`${styles.optionCard} ${choice2 === 'need' ? styles.optionSelected : ''}`}
                  onClick={() => setChoice2('need')}
                >
                  <div className={styles.optionHeader}>
                    <span className={styles.optionTag}>Option 3: Support the Most Vulnerable</span>
                    <span className={styles.optionRadio}>{choice2 === 'need' ? '●' : '○'}</span>
                  </div>
                  <h3 className={styles.optionTitle}>Give the timber to rebuild the roof of an elderly weaver widow</h3>
                  <p className={styles.optionDesc}>
                    Direct compassion for a neighbor who cannot afford building materials on her own.
                  </p>
                </button>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.secondaryBtn} onClick={() => setStoryStep('outcome1')}>
                  ← Back
                </button>
                <button
                  className={styles.primaryBtn}
                  disabled={!choice2}
                  onClick={() => setStoryStep('outcome2')}
                >
                  Confirm Allocation →
                </button>
              </div>
            </div>
          )}

          {storyStep === 'outcome2' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Synthesis</div>
              <h2 className={styles.title}>Reflecting on Community Harmony</h2>

              <div className={styles.insightBox}>
                <span className={styles.insightIcon}>✦</span>
                <div>
                  <h3 className={styles.insightTitle}>The Principle of Lokasangraha (Universal Welfare)</h3>
                  <p className={styles.insightText}>
                    Your decisions balanced immediate necessity with long-term trust. In traditional Indian community life,
                    agreements were preserved not through police or court orders, but through mutual accountability, transparent assemblies,
                    and shared cultural duties (Dharma).
                  </p>
                </div>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStoryStep('historical')}>
                  Discover Historical Connection →
                </button>
              </div>
            </div>
          )}

          {storyStep === 'historical' && (
            <div className={styles.card}>
              <div className={styles.badgePill}>Historical Indian Knowledge</div>
              <h2 className={styles.title}>Democratic Village Assemblies of Tamil Nadu (Uttiramerur)</h2>
              <p className={styles.lead}>
                1,100 years ago, villages in India developed remarkably sophisticated, transparent democratic committees.
              </p>

              <div className={styles.historyHighlight}>
                <div className={styles.historyItem}>
                  <span className={styles.historyNum}>01</span>
                  <div>
                    <h4 className={styles.historyHeading}>The Kudavolai (Pot-Ticket) Voting System</h4>
                    <p className={styles.historyBody}>
                      Inscriptions at the Vaikunta Perumal temple in Uttiramerur describe how committee members were chosen:
                      names written on palm leaves, placed into an earthen pot (kuda), and drawn out by a young child in public view.
                    </p>
                  </div>
                </div>

                <div className={styles.historyItem}>
                  <span className={styles.historyNum}>02</span>
                  <div>
                    <h4 className={styles.historyHeading}>Specialised Committees (Variyams)</h4>
                    <p className={styles.historyBody}>
                      Villages had designated working groups: <em>Eri-variyam</em> (Tank & Water Committee), <em>Thotta-variyam</em> (Garden & Orchard Committee),
                      and <em>Pancha-variyam</em> (General Administration).
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.primaryBtn} onClick={() => setStoryStep('completed')}>
                  Complete Story Challenge ✓
                </button>
              </div>
            </div>
          )}

          {storyStep === 'completed' && (
            <div className={`${styles.card} ${styles.completedCard}`}>
              <div className={styles.completedTrophy}>
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" fill="#FFFDF8" stroke="#CDA84D" strokeWidth="3" />
                  <polygon points="32,16 36,26 47,27 39,34 41,45 32,39 23,45 25,34 17,27 28,26" fill="#CDA84D" />
                </svg>
              </div>
              <h2 className={styles.completedTitle}>Village Story Complete!</h2>
              <p className={styles.completedText}>
                You navigated real-world community dilemmas and connected them to traditional self-governance.
              </p>
              <div className={styles.rewardBox}>
                <span>+40 Gyan Knowledge Points</span>
                <span>Badge Unlocked: <strong>Civic Harmony</strong></span>
              </div>
              <button className={styles.primaryBtn} onClick={handleStoryFinish}>
                Return to Curriculum →
              </button>
            </div>
          )}
        </main>
      </div>
    )
  }

  // 3. Default: Curriculum / Phase Selector
  return (
    <PhaseSelector
      environmentName={VILLAGE_CURRICULUM.environmentName}
      environmentLore="Step into the shaded village commons. Learn about collective self-governance (Kudavolai), artisan guilds, and community mutual aid."
      heroIllustrationKey="banyanTree"
      phases={VILLAGE_CURRICULUM.phases}
      completedPhaseIds={localCompletedPhases}
      onSelectPhase={handleSelectPhase}
      onReturn={onReturn}
      featuredAction={{
        label: 'The Blocked Harvest Path',
        subtitle: 'Interactive story scenario: resolve village dilemmas & discover Uttiramerur',
        illustrationKey: 'banyanTree',
        onClick: () => {
          setStoryStep('intro')
          setMode('story')
        },
      }}
    />
  )
}
