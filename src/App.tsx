import { useState, useEffect } from 'react'
import type { Screen, ExplorationProgress } from './types'
import { EMPTY_PROGRESS } from './types'
import { Navigation } from './components/Navigation'
import { Home } from './features/home/Home'
import { LearningJourney } from './features/journey/LearningJourney'
import { World } from './features/world/World'
import { VillageExperience } from './features/village/VillageExperience'
import { RiverlandsExperience } from './features/riverlands/RiverlandsExperience'
import { ScholarExperience } from './features/scholar/ScholarExperience'
import { GatheringExperience } from './features/gathering/GatheringExperience'
import { ObservatoryExperience } from './features/observatory/ObservatoryExperience'
import { WorkshopExperience } from './features/workshop/WorkshopExperience'
import { ProgressScreen } from './features/progress/ProgressScreen'

const STORAGE_KEY = 'itihasa-progress-v2'

function loadProgress(): ExplorationProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return { ...EMPTY_PROGRESS, ...parsed }
    }
  } catch {
    // fallback
  }
  return { ...EMPTY_PROGRESS }
}

function saveProgress(p: ExplorationProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
  } catch {
    // ignore
  }
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [progress, setProgress] = useState<ExplorationProgress>(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  function markComplete(
    key: keyof ExplorationProgress,
    pointsAwarded: number,
    badgeName?: string
  ) {
    setProgress(prev => {
      const alreadyDone = Boolean(prev[key])
      const points = alreadyDone ? prev.knowledgePoints : prev.knowledgePoints + pointsAwarded
      const badges =
        badgeName && !prev.unlockedBadges.includes(badgeName)
          ? [...prev.unlockedBadges, badgeName]
          : prev.unlockedBadges

      return {
        ...prev,
        [key]: true,
        knowledgePoints: points,
        unlockedBadges: badges,
      }
    })
  }

  function markPhaseComplete(env: string, phaseId: string, pointsAwarded: number) {
    setProgress(prev => {
      const existing = prev.completedPhases?.[env] || []
      if (existing.includes(phaseId)) {
        return prev
      }
      return {
        ...prev,
        knowledgePoints: prev.knowledgePoints + pointsAwarded,
        completedPhases: {
          ...(prev.completedPhases || {}),
          [env]: [...existing, phaseId],
        },
      }
    })
  }

  return (
    <>
      {/* Top persistent navigation across the educational world */}
      <Navigation
        current={screen}
        progress={progress}
        onNavigate={setScreen}
      />

      {screen === 'home' && (
        <Home
          progress={progress}
          onNavigate={setScreen}
        />
      )}

      {screen === 'journey' && (
        <LearningJourney
          progress={progress}
          onNavigate={setScreen}
        />
      )}

      {screen === 'world' && (
        <World
          progress={progress}
          onNavigate={setScreen}
        />
      )}

      {screen === 'village' && (
        <VillageExperience
          completedPhases={progress.completedPhases?.['village'] || []}
          onPhaseComplete={(pid, pts) => markPhaseComplete('village', pid, pts)}
          onComplete={() => markComplete('villageStoryDone', 40, 'Civic Harmony')}
          onReturn={() => setScreen('journey')}
        />
      )}

      {screen === 'riverlands' && (
        <RiverlandsExperience
          completedPhases={progress.completedPhases?.['riverlands'] || []}
          onPhaseComplete={(pid, pts) => markPhaseComplete('riverlands', pid, pts)}
          onComplete={() => markComplete('riverlandsChallengeDone', 50, 'Water Guardian')}
          onReturn={() => setScreen('journey')}
        />
      )}

      {screen === 'scholar' && (
        <ScholarExperience
          completedPhases={progress.completedPhases?.['scholar'] || []}
          onPhaseComplete={(pid, pts) => markPhaseComplete('scholar', pid, pts)}
          onComplete={() => markComplete('scholarPuzzleDone', 45, 'Pattern Seeker')}
          onReturn={() => setScreen('journey')}
        />
      )}

      {screen === 'gathering' && (
        <GatheringExperience
          completedPhases={progress.completedPhases?.['gathering'] || []}
          onPhaseComplete={(pid, pts) => markPhaseComplete('gathering', pid, pts)}
          onComplete={() => markComplete('gatheringGameDone', 45, 'Master of Tactics')}
          onReturn={() => setScreen('journey')}
        />
      )}

      {screen === 'observatory' && (
        <ObservatoryExperience
          completedPhases={progress.completedPhases?.['observatory'] || []}
          onPhaseComplete={(pid, pts) => markPhaseComplete('observatory', pid, pts)}
          onComplete={() => markComplete('observatoryDone', 50, 'Sky Watcher')}
          onReturn={() => setScreen('journey')}
        />
      )}

      {screen === 'workshop' && (
        <WorkshopExperience
          completedPhases={progress.completedPhases?.['workshop'] || []}
          onPhaseComplete={(pid, pts) => markPhaseComplete('workshop', pid, pts)}
          onComplete={() => markComplete('workshopDone', 55, 'Master Builder')}
          onReturn={() => setScreen('journey')}
        />
      )}

      {screen === 'progress' && (
        <ProgressScreen
          progress={progress}
          onNavigate={setScreen}
        />
      )}
    </>
  )
}
