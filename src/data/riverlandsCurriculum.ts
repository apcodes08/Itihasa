import type { EnvironmentCurriculum } from '../engine/types'

export const RIVERLANDS_CURRICULUM: EnvironmentCurriculum = {
  environmentId: 'riverlands',
  environmentName: 'The Riverlands: Water, Ecology & Balance',
  phases: [
    {
      id: 'riverlands-p1',
      title: 'Phase 1: Water Harvesting & Equitable Sharing',
      type: 'learning',
      subLessons: [
        {
          id: 'r-p1-s1',
          title: 'The Living Architecture of Water',
          learningObjective: 'Explore traditional water harvesting, stepwells (Vavs), and equitable Neerkatti canal distribution.',
          coverIllustrationKey: 'stepwell',
          questions: [
            {
              id: 'r1-q1',
              type: 'multiple-choice',
              text: 'What are the magnificent multi-storey subterranean stepped wells of Gujarat and Rajasthan called?',
              hint: 'They feature cool stone steps descending deep into the water table.',
              explanation: 'Stepwells (known as Baolis in the north and Vavs in Gujarat, like Rani ki Vav) provided cool drinking water and community shade across scorching seasons.',
              options: [
                { id: 'baoli', text: 'Baolis or Vavs (Stepwells)', subtitle: 'Subterranean stepped pools honoring water', illustrationKey: 'stepwell' },
                { id: 'araghatta', text: 'Araghatta Water Wheel', subtitle: 'Wooden pot-wheel lifting river water', illustrationKey: 'waterWheel' },
                { id: 'johad', text: 'Johad Earth Dam', subtitle: 'Crescent bund catching hill runoff', illustrationKey: 'johadBund' },
              ],
              correctId: 'baoli',
            },
            {
              id: 'r1-q2',
              type: 'fill-blanks',
              text: 'Complete the sentence about traditional earthen check-dams in Rajasthan:',
              hint: 'Small semicircular earthen bunds that catch rain runoff.',
              explanation: 'Johads are traditional crescent-shaped earthen check-dams built across natural slopes to retain monsoon water and recharge dry groundwater tables.',
              sentence: 'In Rajasthan, crescent-shaped earthen water-harvesting check dams are called __BLANK__.',
              wordTiles: ['Johads', 'Haveli', 'Chhatri', 'Jharokha'],
              correctWord: 'Johads',
            },
            {
              id: 'r1-q3',
              type: 'scenario',
              text: 'During a dry spell with limited reservoir water, how should water be distributed between a potter, a farmer’s crops, and a dairy herd?',
              explanation: 'True fairness is proportional equity: matching water to the vital needs of crops (5 units), cows (4 units), and household drinking (3 units) ensures zero distress.',
              scenarioText: 'The village reservoir has 12 units of water remaining until the monsoon. Ramu needs to keep vegetable crops alive, Kamala has 6 thirsty milk cows, and Devaki shapes earthen vessels.',
              decisions: [
                {
                  id: 'equity',
                  text: 'Allocate according to essential survival: 5 units for crops, 4 units for cattle, and 3 for the potter.',
                  consequence: 'No crops wither, the milk cows thrive, and the potter’s family drinks comfortably without waste!',
                },
                {
                  id: 'equal',
                  text: 'Give exactly 4 units to each household regardless of cattle count or field size.',
                  consequence: 'The farmer’s seedlings dry up in the heat, harming the entire village food supply.',
                },
                {
                  id: 'first',
                  text: 'Whoever reaches the well first fills all their containers.',
                  consequence: 'Late arrivals and cattle go completely thirsty, breaking community trust.',
                },
              ],
              bestId: 'equity',
            },
            {
              id: 'r1-q4',
              type: 'matching',
              text: 'Match each Indian regional water-harvesting system with its terrain:',
              hint: 'Think about mountain bamboo, desert stepwells, South Indian tanks, and trans-Himalayan glacial channels.',
              explanation: 'Every ecological zone of India developed ingenious indigenous water engineering tailored to local topography.',
              pairs: [
                { left: 'Kuhl', right: 'Glacial meltwater channels in Himachal Pradesh' },
                { left: 'Bamboo Drip', right: 'Hillside stream diversion in Meghalaya' },
                { left: 'Eri Tank Cascades', right: 'Interconnected wetland lakes in Tamil Nadu' },
                { left: 'Khadin', right: 'Runoff agricultural embankments in the Thar Desert' },
              ],
            },
            {
              id: 'r1-q5',
              type: 'image-id',
              text: 'Identify the wooden water-lifting wheel used along riverbanks to irrigate higher crop terraces:',
              hint: 'A wheel fitted with buckets, turned by water currents or bullock power.',
              explanation: 'The Persian wheel or Araghatta (water-wheel with pots) used rotary gear power to lift water from rivers up into elevated fields.',
              illustration: {
                viewBox: '0 0 340 140',
                elements: `
                  <circle cx="170" cy="70" r="45" stroke="#9A8A78" strokeWidth="4" fill="none" />
                  <circle cx="170" cy="70" r="10" fill="#786B5A" />
                  <!-- Buckets -->
                  <rect x="160" y="15" width="20" height="15" fill="#B96F4B" rx="2" />
                  <rect x="160" y="110" width="20" height="15" fill="#B96F4B" rx="2" />
                  <rect x="115" y="60" width="15" height="20" fill="#B96F4B" rx="2" />
                  <rect x="210" y="60" width="15" height="20" fill="#B96F4B" rx="2" />
                  <path d="M40 120 Q170 110 300 120" stroke="#4A6B45" strokeWidth="8" fill="none" />
                  <text x="170" y="135" fill="#40382F" fontSize="11" fontWeight="bold" textAnchor="middle">Araghatta (Water Lifting Wheel)</text>
                `,
                bgColor: '#F5EFE6',
              },
              options: [
                { id: 'araghatta', text: 'Araghatta (Pot-Wheel / Water Wheel)' },
                { id: 'windmill', text: 'Electric Wind Turbine' },
              ],
              correctId: 'araghatta',
            },
            {
              id: 'r1-q6',
              type: 'ordering',
              text: 'Arrange the sequence of the Indian Monsoon hydrological cycle in correct natural order:',
              hint: 'Sun heats the ocean → clouds travel inland → rain falls on Ghats → rivers replenish aquifers.',
              explanation: 'Indian seasons revolve around the Southwest Monsoon: Ocean evaporation → Cloud march across peninsular India → Torrential rainfall → Groundwater recharge.',
              correctOrder: [
                'Summer sun heats the Indian Ocean, forming dense rain clouds',
                'Southwest monsoon winds carry moisture inland over mountains',
                'Torrential rains fill hillside streams, stepwells, and tanks',
                'Water recharges underground aquifers for winter dry farming',
              ],
              shuffledItems: [
                'Water recharges underground aquifers for winter dry farming',
                'Southwest monsoon winds carry moisture inland over mountains',
                'Summer sun heats the Indian Ocean, forming dense rain clouds',
                'Torrential rains fill hillside streams, stepwells, and tanks',
              ],
            },
            {
              id: 'r1-q7',
              type: 'multiple-choice',
              text: 'Who was the "Neerkatti" in traditional South Indian canal irrigation?',
              hint: 'Neer means water in Tamil/Kannada, katti means one who measures or regulates.',
              explanation: 'The Neerkatti was an appointed water distributor who opened sluice gates according to strict customary turns, ensuring downstream tail-end farmers received fair water.',
              options: [
                { id: 'distributor', text: 'The trusted community water master who regulates canal sluice turns', icon: '🌊' },
                { id: 'boat', text: 'A royal warship captain on sea voyages', icon: '⛵' },
                { id: 'diver', text: 'A pearl diver in the ocean depths', icon: '🦪' },
              ],
              correctId: 'distributor',
            },
            {
              id: 'r1-q8',
              type: 'pattern-completion',
              text: 'Complete the cascade order of South Indian interconnected Eri (tank) systems:',
              hint: 'Upper catchment lake → Mid-valley tank → Lower village reservoir.',
              explanation: 'Eri systems were built in chains: overflow from an upper lake flowed by gravity through stone canals into the next lower lake, catching every drop.',
              pattern: ['1. Hillside Catchment Eri', '2. Mid-Valley Storage Eri', '3. Lowland Field Eri'],
              missingIndex: 1,
              options: ['2. Mid-Valley Storage Eri', '2. Ocean Harbour', '2. Salt Pan', '2. River Delta'],
              correctOption: '2. Mid-Valley Storage Eri',
            },
            {
              id: 'r1-q9',
              type: 'interactive-challenge',
              text: 'Balance the water allocation for the communal vegetable plot (Minimum 5 pots needed to save seedlings from wilting):',
              hint: 'Set the slider to at least 5 units to satisfy crop requirements.',
              explanation: 'Allocating 5 units keeps soil moisture sufficient during the midday heat without depleting other households.',
              challengeKind: 'slider',
              config: {
                min: 0,
                max: 10,
                step: 1,
                unit: ' pots',
                label: 'Farmer Water Portion',
                initial: 2,
              },
              correctValue: '5',
            },
            {
              id: 'r1-q10',
              type: 'fill-blanks',
              text: 'What ancient dam built across the Kaveri River by King Karikala Chola (c. 150 CE) is still in use today?',
              hint: 'Known as the Grand Anicut or Kallanai.',
              explanation: 'Kallanai (Grand Anicut), built over 1,900 years ago using massive unhewn stones across the Kaveri, diverted water into fertile delta canals.',
              sentence: 'The ancient stone dam built across the Kaveri in Tamil Nadu is called the __BLANK__ (Grand Anicut).',
              wordTiles: ['Kallanai', 'Bhakra', 'Tehri', 'Hirakud'],
              correctWord: 'Kallanai',
            },
            {
              id: 'r1-q11',
              type: 'multiple-choice',
              text: 'Why did ancient water builders line the bottom of earthen ponds with thick layers of sticky alluvial clay?',
              hint: 'Fine clay particles swell when wet and form an impermeable seal.',
              explanation: 'Clay puddling creates a natural waterproof membrane that stops water from rapidly draining away into sandy subsoil.',
              options: [
                { id: 'waterproof', text: 'To create a natural waterproof seal that prevents water seepage', icon: '💧' },
                { id: 'fish', text: 'Purely to give fish a darker color to hide in', icon: '🐟' },
                { id: 'boats', text: 'To make boats slide down faster into the lake', icon: '🛶' },
              ],
              correctId: 'waterproof',
            },
            {
              id: 'r1-q12',
              type: 'scenario',
              text: 'A farmer upstream wants to block the canal so only his paddy field receives water first. How should the community respond?',
              explanation: 'Traditional Neerkatti rules prioritized downstream fields equally. Mutual water pacts prevent downstream droughts and sustain peace.',
              scenarioText: 'An upstream farmer places sandbags in the communal canal during water release day.',
              decisions: [
                {
                  id: 'charter',
                  text: 'Enforce the village water charter: water must flow by turns to tail-end farms first.',
                  consequence: 'All fields receive their proportional share, protecting food crops across the entire valley.',
                },
                {
                  id: 'fight',
                  text: 'Encourage downstream farmers to destroy upstream irrigation channels at night.',
                  consequence: 'Violent conflict erupts, damaging the masonry canals for future generations.',
                },
              ],
              bestId: 'charter',
            },
          ],
        },
      ],
    },
    {
      id: 'riverlands-p2',
      title: 'Phase 2: The Stepwells of Gujarat & Rajasthan',
      type: 'learning',
      subLessons: [
        {
          id: 'r-p2-s1',
          title: 'Subterranean Sanctuaries (Vavs)',
          questions: [
            {
              id: 'r2-q1',
              type: 'multiple-choice',
              text: 'Why is Rani ki Vav in Patan, Gujarat recognized as a UNESCO World Heritage site?',
              explanation: 'Constructed in the 11th century, it is an inverted temple honoring water with seven tiers of over 500 sculpted masterpieces.',
              options: [
                { id: 'inverted', text: 'It is an inverted subterranean architectural wonder honoring water', icon: '🏛️' },
                { id: 'gold', text: 'It was built entirely out of solid gold bars', icon: '🪙' },
              ],
              correctId: 'inverted',
            },
          ],
        },
      ],
    },
    {
      id: 'riverlands-p3',
      title: 'Phase 3: The Grand Anicut (Kallanai)',
      type: 'learning',
      subLessons: [
        {
          id: 'r-p3-s1',
          title: 'Hydraulic Engineering of the Chola Delta',
          questions: [
            {
              id: 'r3-q1',
              type: 'multiple-choice',
              text: 'How did Karikala Chola’s engineers stabilize the foundation of Kallanai in moving sand riverbeds?',
              explanation: 'They sank massive rough-hewn granite boulders into the Kaveri sand and let natural silt cement them over time.',
              options: [
                { id: 'boulders', text: 'Rolling huge rough stones that sank into sand and bonded with silt', icon: '🪨' },
                { id: 'steel', text: 'Using imported industrial steel girders', icon: '🔩' },
              ],
              correctId: 'boulders',
            },
          ],
        },
      ],
    },
    {
      id: 'riverlands-p4',
      title: 'Phase 4: Review: Water Engineering & Heritage',
      type: 'review',
      subLessons: [
        {
          id: 'r-p4-s1',
          title: 'Mastery of Hydraulic Balance',
          questions: [
            {
              id: 'r4-q1',
              type: 'fill-blanks',
              text: 'Fill in the traditional water distributor title:',
              sentence: 'The village canal regulator in South India was known as the __BLANK__.',
              wordTiles: ['Neerkatti', 'Karmakara', 'Vav', 'Kuhl'],
              correctWord: 'Neerkatti',
              explanation: 'Neerkattis safeguarded fair water turns across thousands of South Indian villages.',
            },
          ],
        },
      ],
    },
    {
      id: 'riverlands-p5',
      title: 'Phase 5: Interconnected Tank Cascades (Eris)',
      type: 'learning',
      subLessons: [
        {
          id: 'r-p5-s1',
          title: 'Flood Control & Wetland Ecology',
          questions: [
            {
              id: 'r5-q1',
              type: 'multiple-choice',
              text: 'How did cascading tank systems prevent catastrophic flash flooding during cyclone rains?',
              explanation: 'Each tank absorbed excess floodwaters, slowing down the surge and filtering sediment before passing surplus onward.',
              options: [
                { id: 'buffer', text: 'Each lake buffered the peak surge, stepping down flood velocity', icon: '🛡️' },
                { id: 'dry', text: 'By evaporating all water instantly with bonfires', icon: '🔥' },
              ],
              correctId: 'buffer',
            },
          ],
        },
      ],
    },
    {
      id: 'riverlands-p6',
      title: 'Phase 6: Mountain Irrigation & Khuls',
      type: 'learning',
      subLessons: [
        {
          id: 'r-p6-s1',
          title: 'Channels of the Himalayas & Meghalaya',
          questions: [
            {
              id: 'r6-q1',
              type: 'multiple-choice',
              text: 'How does the traditional Khasi bamboo drip system in Meghalaya irrigate betel-leaf crops on steep cliffs?',
              explanation: 'Graduated hollow bamboo pipes transport 18–20 liters per minute across hundreds of meters, reducing flow to drops at plant roots.',
              options: [
                { id: 'bamboo', text: 'Using split bamboo channels that deliver water drop by drop without electricity', icon: '🎋' },
                { id: 'pump', text: 'Using diesel pumps imported on helicopters', icon: '🚁' },
              ],
              correctId: 'bamboo',
            },
          ],
        },
      ],
    },
    {
      id: 'riverlands-p7',
      title: 'Phase 7: River Basin Reverence & Sacred Rivers',
      type: 'learning',
      subLessons: [
        {
          id: 'r-p7-s1',
          title: 'Rivers as Living Ecological Mothers',
          questions: [
            {
              id: 'r7-q1',
              type: 'multiple-choice',
              text: 'Why were rivers referred to as "Loka-Mata" (Mothers of Humanity) across Indian culture?',
              explanation: 'Rivers provided freshwater, silt fertilization, transport, and drinking water that gave birth to civilization.',
              options: [
                { id: 'mother', text: 'Because rivers sustain all agriculture, drinking water, and living biodiversity', icon: '🌊' },
                { id: 'barrier', text: 'Because they stopped people from exploring new valleys', icon: '🛑' },
              ],
              correctId: 'mother',
            },
          ],
        },
      ],
    },
    {
      id: 'riverlands-p8',
      title: 'Phase 8: Review: Ecology & Conservation',
      type: 'review',
      subLessons: [
        {
          id: 'r-p8-s1',
          title: 'Synthesis of River Wisdom',
          questions: [
            {
              id: 'r8-q1',
              type: 'matching',
              text: 'Match the water structure with its primary benefit:',
              hint: 'Think about silt check, cool shade, and canal diversion.',
              explanation: 'Indigenous water structures served dual purposes: resource storage and ecological preservation.',
              pairs: [
                { left: 'Johad', right: 'Recharges underground dry wells' },
                { left: 'Baoli', right: 'Cool drinking sanctuary in arid heat' },
                { left: 'Anicut', right: 'Directs river water into delta canals' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'riverlands-p9',
      title: 'Phase 9: Modern Revival & Community Desilting',
      type: 'learning',
      subLessons: [
        {
          id: 'r-p9-s1',
          title: 'Reviving Dry Rivers in Alwar',
          questions: [
            {
              id: 'r9-q1',
              type: 'multiple-choice',
              text: 'How did communities in modern Rajasthan revive dead rivers like the Arvari?',
              explanation: 'By collectively building thousands of traditional earthen Johads, groundwater tables rose and the river flowed year-round again.',
              options: [
                { id: 'johads', text: 'By rebuilding thousands of traditional Johads through community voluntary labor', icon: '🌱' },
                { id: 'pipes', text: 'By laying plastic water bottles along the riverbed', icon: '🧪' },
              ],
              correctId: 'johads',
            },
          ],
        },
      ],
    },
    {
      id: 'riverlands-p10',
      title: 'Phase 10: Master Review: Water Guardian’s Pledge',
      type: 'review',
      subLessons: [
        {
          id: 'r-p10-s1',
          title: 'The Water Guardian’s Capstone',
          questions: [
            {
              id: 'r10-q1',
              type: 'scenario',
              text: 'As the elected Water Guardian of the Riverlands, what is your long-term monsoon preparation plan?',
              explanation: 'Proactive community desilting and tree planting protects water retention and prevents soil erosion.',
              scenarioText: 'Two months remain before the Southwest Monsoon arrives over the Riverlands.',
              decisions: [
                {
                  id: 'prep',
                  text: 'Organize Shramadaan to desilt the Eri channels, repair bunds, and plant vetiver grass along the banks.',
                  consequence: 'Rainwater fills crystal-clear tanks, soil erosion is halted, and water lasts all year!',
                },
                {
                  id: 'delay',
                  text: 'Wait until the torrential rains start before inspecting broken stone sluices.',
                  consequence: 'Canals burst under sudden flood pressure, washing away topsoil and wasting runoff.',
                },
              ],
              bestId: 'prep',
            },
          ],
        },
      ],
    },
  ],
}

