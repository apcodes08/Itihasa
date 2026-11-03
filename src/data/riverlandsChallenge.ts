export interface Household {
  id:          string
  title:       string
  occupant:    string
  role:        string
  description: string
  minNeeded:   number
  idealNeeded: number
  icon:        string
  purpose:     string
}

export const TOTAL_WATER_SUPPLY = 12

export const HOUSEHOLDS: Household[] = [
  {
    id:          'potter',
    title:       "The Potter's Home",
    occupant:    'Devaki & her family',
    role:        'Clay artisans & village potters',
    description: 'Devaki shapes cooking pots and roof tiles for the village. Her family of four needs clean water for daily drinking and cooking, plus a small amount to keep working clay moist.',
    minNeeded:   3,
    idealNeeded: 4,
    icon:        'pot',
    purpose:     'Drinking, cooking, and wetting molding clay',
  },
  {
    id:          'farmer',
    title:       "The Farmer's Plot",
    occupant:    'Ramu & his family',
    role:        'Cultivators of community crops',
    description: 'Ramu tends the communal vegetable garden with spinach, gourd, and pulses. The dry wind is wilting the young seedlings. They need water for the household and the garden beds.',
    minNeeded:   5,
    idealNeeded: 6,
    icon:        'plant',
    purpose:     'Household drinking plus saving the young vegetable crops',
  },
  {
    id:          'herder',
    title:       "The Herder's Yard",
    occupant:    'Kamala & the village cattle',
    role:        'Livestock caretaker',
    description: 'Kamala cares for six cows and two young calves that supply milk to all the children in the settlement. Cattle consume significant water daily in the afternoon heat.',
    minNeeded:   4,
    idealNeeded: 5,
    icon:        'cattle',
    purpose:     'Drinking water for the family and six thirsty cows',
  },
]

export type AllocationState = Record<string, number>

export interface OutcomeResult {
  type:            'balanced' | 'equal_split' | 'shortfall' | 'surplus_left'
  headline:        string
  summary:         string
  householdNotes:  { id: string; status: 'satisfied' | 'essential' | 'deficit'; note: string }[]
  lessonInsight:   string
}

export function evaluateAllocation(allocation: AllocationState): OutcomeResult {
  const potter = allocation.potter || 0
  const farmer = allocation.farmer || 0
  const herder = allocation.herder || 0
  const totalUsed = potter + farmer + herder

  const householdNotes: OutcomeResult['householdNotes'] = []

  // Potter analysis
  if (potter >= 4) {
    householdNotes.push({
      id: 'potter',
      status: 'satisfied',
      note: 'The potters have plenty of water to drink, cook, and keep their clay moist for crafting fresh vessels.',
    })
  } else if (potter === 3) {
    householdNotes.push({
      id: 'potter',
      status: 'essential',
      note: 'Essential drinking and cooking needs are met. Clay work is slower today, but the family is comfortable.',
    })
  } else {
    householdNotes.push({
      id: 'potter',
      status: 'deficit',
      note: 'With less than 3 units, the family must ration drinking water and pause their pottery work completely.',
    })
  }

  // Farmer analysis
  if (farmer >= 6) {
    householdNotes.push({
      id: 'farmer',
      status: 'satisfied',
      note: 'The family drinks well and all vegetable beds are soaked, promising a healthy harvest for the village.',
    })
  } else if (farmer === 5) {
    householdNotes.push({
      id: 'farmer',
      status: 'essential',
      note: 'The family has enough to drink and the most vulnerable seedlings are saved from wilting in the sun.',
    })
  } else {
    householdNotes.push({
      id: 'farmer',
      status: 'deficit',
      note: `With ${farmer} units, there is only enough for drinking; without 5 units, several vegetable plots will dry up.`,
    })
  }

  // Herder analysis
  if (herder >= 5) {
    householdNotes.push({
      id: 'herder',
      status: 'satisfied',
      note: 'Kamala’s family and all the cows and calves have ample water to drink throughout the hot afternoon.',
    })
  } else if (herder === 4) {
    householdNotes.push({
      id: 'herder',
      status: 'essential',
      note: 'All essential thirst needs are met. The cattle stay healthy and continue producing morning milk.',
    })
  } else {
    householdNotes.push({
      id: 'herder',
      status: 'deficit',
      note: `With ${herder} units, the cattle must go thirsty in the midday heat, weakening the calves.`,
    })
  }

  // Unused water case
  if (totalUsed < TOTAL_WATER_SUPPLY) {
    const remaining = TOTAL_WATER_SUPPLY - totalUsed
    return {
      type: 'surplus_left',
      headline: `${remaining} Units Left in the Reservoir`,
      summary: `You reserved ${remaining} units in the village tank. Let's see how the households manage with what was distributed.`,
      householdNotes,
      lessonInsight: 'Saving a reserve for tomorrow can be prudent during a drought, though it may leave some immediate needs unfulfilled today.',
    }
  }

  // Balanced ideal solution: 3, 5, 4 (or 4, 5, 3 is not quite enough for herder)
  if (potter >= 3 && farmer >= 5 && herder >= 4) {
    return {
      type: 'balanced',
      headline: 'A Thoughtful and Balanced Distribution',
      summary: 'Every household received enough water to fulfill their essential responsibilities without waste. No family or herd was left in distress.',
      householdNotes,
      lessonInsight: 'By examining the specific needs of each family instead of guessing, you ensured the whole community thrived.',
    }
  }

  // Equal split case: 4, 4, 4
  if (potter === 4 && farmer === 4 && herder === 4) {
    return {
      type: 'equal_split',
      headline: 'Equal Portions — But Are Needs Equal?',
      summary: 'Giving exactly 4 units to each home feels instinctively fair at first glance, but different responsibilities demand different amounts.',
      householdNotes,
      lessonInsight: 'Fairness does not always mean giving everyone the exact same amount. True equity considers what each person or task genuinely requires.',
    }
  }

  // General shortfall case
  const deficitCount = householdNotes.filter(n => n.status === 'deficit').length
  return {
    type: 'shortfall',
    headline: 'An Uneven Outcome',
    summary: `Your decision provided abundantly for some, but left ${deficitCount} ${deficitCount === 1 ? 'household' : 'households'} short of their basic needs.`,
    householdNotes,
    lessonInsight: 'When water is scarce, giving extra to one household directly limits what another needs to survive.',
  }
}

export interface ReflectionQuestion {
  id:      string
  prompt:  string
  options: { label: string; insight: string }[]
}

export const REFLECTION_QUESTIONS: ReflectionQuestion[] = [
  {
    id:     'fairness',
    prompt: 'When deciding how much water to give each household, what was most important?',
    options: [
      {
        label:   'Giving everyone the exact same number of pots (4 each).',
        insight: 'Equal amounts treat everyone alike on paper, but since the farmer must keep crops alive for the whole village, equal numbers left crops withering.',
      },
      {
        label:   'Matching the water to what each household actually does.',
        insight: 'Exactly right! Different tasks—like feeding calves or keeping vegetables alive—require different quantities of water to protect the whole community.',
      },
      {
        label:   'Giving the most water to whoever asked first.',
        insight: 'First-come systems can leave quiet or late-arriving families without essentials, which harms long-term community cooperation.',
      },
    ],
  },
  {
    id:     'scarcity',
    prompt: 'What would happen if the dry spell continued and only 9 units were left tomorrow?',
    options: [
      {
        label:   'The village would have to choose which activities to pause temporarily.',
        insight: 'Thoughtful insight! In historic Indian villages, communities met under the banyan tree to agree on temporary limits, like resting crafts to protect drinking water.',
      },
      {
        label:   'Each family should hide water for themselves.',
        insight: 'Hiding water breaks community trust. Historical evidence shows Indian settlements survived droughts through shared, transparent water agreements.',
      },
      {
        label:   'Use all the water at once and hope for rain.',
        insight: 'Depleting everything at once risks extreme hardship if rains are delayed. Managed rationing keeps communities resilient.',
      },
    ],
  },
]

export interface HistoryCard {
  title:    string
  subtitle: string
  fact:     string
  takeaway: string
}

export const HISTORICAL_CONTEXT: HistoryCard[] = [
  {
    title:    'Stepwells (Baolis & Vavs)',
    subtitle: 'Living architecture for subterranean water',
    fact:     'Across dry regions of Gujarat and Rajasthan, communities carved multi-storeyed stepped wells deep into the ground. As groundwater levels dropped across the seasons, people walked down cool stone steps to reach the water.',
    takeaway: 'Stepwells were not just wells—they were cool community gathering halls where travelers and villagers shared shade and conversation.',
  },
  {
    title:    'Community Tanks & Johads',
    subtitle: 'Catching every drop of monsoon rainfall',
    fact:     'Traditional earthen dams called Johads and large community tanks (Eri in South India) caught torrential monsoon rain runoff across natural slopes, recharging underground water tables throughout the dry winter.',
    takeaway: 'These systems were maintained collectively by villagers rather than distant rulers, showing that local responsibility preserves shared resources.',
  },
  {
    title:    'The Principle of Shared Water',
    subtitle: 'Cooperation over conflict',
    fact:     'Documented inscriptions on South Indian temple walls and village charters detail strict rotational water turns (Neerkatti systems), ensuring farmers upstream could not divert all the canal water before downstream fields received their share.',
    takeaway: 'Mathematical rules of sharing helped communities navigate erratic monsoons peacefully for centuries.',
  },
]
