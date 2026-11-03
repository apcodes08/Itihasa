import type { EnvironmentCurriculum } from '../engine/types'

export const VILLAGE_CURRICULUM: EnvironmentCurriculum = {
  environmentId: 'village',
  environmentName: 'The Village: Community Stories & Dilemmas',
  phases: [
    {
      id: 'village-p1',
      title: 'Phase 1: Life in the Ancient Village',
      type: 'learning',
      subLessons: [
        {
          id: 'v-p1-s1',
          title: 'Daily Rhythms & Community Trades',
          learningObjective: 'Discover how ancient Indian villages made democratic decisions and shared community crafts.',
          coverIllustrationKey: 'banyanTree',
          questions: [
            {
              id: 'v1-q1',
              type: 'multiple-choice',
              text: 'Where did villagers traditionally gather to discuss community issues and resolve disagreements?',
              hint: 'Look for a large, leafy tree with hanging roots that provides broad shade.',
              explanation: 'Ancient Indian villages met under the broad shade of the sacred Peepal or Banyan tree (Gram Sabha) for consensus-based decisions.',
              options: [
                { id: 'banyan', text: 'Under the ancient Banyan or Peepal tree', subtitle: 'The traditional Gram Sabha meeting place', illustrationKey: 'banyanTree' },
                { id: 'palace', text: 'Inside the distant king’s private throne room', subtitle: 'Royal court far away from the village', illustrationKey: 'kudavolai' },
                { id: 'market', text: 'In the private storeroom of a wealthy trader', subtitle: 'Private trade warehouse', illustrationKey: 'shramadaan' },
              ],
              correctId: 'banyan',
            },
            {
              id: 'v1-q2',
              type: 'fill-blanks',
              text: 'Complete the sentence about traditional community mutual aid:',
              hint: 'This word means voluntary shared labor for the public good.',
              explanation: 'Shramadaan (voluntary shared labor) is an ancient Indian ethos where neighbors unite their physical effort to build roads, desilt ponds, or repair roofs.',
              sentence: 'The practice of voluntary community labor to repair village paths is called __BLANK__.',
              wordTiles: ['Shramadaan', 'Vyapaar', 'Danda', 'Kar'],
              correctWord: 'Shramadaan',
            },
            {
              id: 'v1-q3',
              type: 'matching',
              text: 'Match each village artisan with their traditional essential craft:',
              hint: 'Think about what raw materials (clay, iron, cotton, wood) each artisan transforms.',
              explanation: 'Traditional Indian self-sufficient villages (Grama) functioned through specialized artisans cooperating in harmony.',
              pairs: [
                { left: 'Kumbhakara (Potter)', right: 'Earthen vessels & clay grain bins' },
                { left: 'Karmakara (Blacksmith)', right: 'Iron plowshares & sickles' },
                { left: 'Tantuvaya (Weaver)', right: 'Breathable handspun cotton cloth' },
                { left: 'Takshaka (Carpenter)', right: 'Bullock carts & wooden door frames' },
              ],
            },
            {
              id: 'v1-q4',
              type: 'scenario',
              text: 'A heavy monsoon storm snapped a tree branch across the village well lane. How should the village resolve it?',
              explanation: 'A collaborative shared effort fosters community unity and clears the path quickly without overburdening single families.',
              scenarioText: 'The main lane to the fresh drinking well is blocked by a fallen tree branch. Carts and school children cannot pass.',
              decisions: [
                {
                  id: 'collective',
                  text: 'Organize a 45-minute collective cleanup where each household sends one volunteer.',
                  consequence: 'The path is rapidly cleared before noon, and community solidarity remains high.',
                },
                {
                  id: 'wait',
                  text: 'Wait for the distant royal guards to arrive and clear it.',
                  consequence: 'Days pass, children miss classes, and water access remains disrupted.',
                },
                {
                  id: 'blame',
                  text: 'Argue over which neighbor’s tree the branch fell from.',
                  consequence: 'Arguments flare up while the lane remains blocked for all residents.',
                },
              ],
              bestId: 'collective',
            },
            {
              id: 'v1-q5',
              type: 'image-id',
              text: 'Which vessel shown here was traditionally used to preserve drinking water cool naturally in hot summers?',
              hint: 'Porous baked clay allows microscopic evaporation that naturally cools water inside.',
              explanation: 'The Matka or earthen clay pitcher allows evaporative cooling through microporous terracotta walls without requiring electricity.',
              illustration: {
                viewBox: '0 0 360 140',
                elements: `
                  <!-- Matka (clay pot) -->
                  <ellipse cx="90" cy="80" rx="35" ry="30" fill="#B96F4B" />
                  <rect x="80" y="42" width="20" height="12" fill="#9A5A38" rx="2" />
                  <text x="90" y="125" textAnchor="middle" fill="#40382F" fontSize="11" fontWeight="bold">Item A: Terracotta Matka</text>
                  <!-- Iron cauldron -->
                  <ellipse cx="270" cy="80" rx="35" ry="25" fill="#5A524A" />
                  <rect x="260" y="50" width="20" height="8" fill="#40382F" />
                  <text x="270" y="125" textAnchor="middle" fill="#40382F" fontSize="11" fontWeight="bold">Item B: Heavy Iron Cauldron</text>
                `,
                bgColor: '#FAF4E6',
              },
              options: [
                { id: 'itemA', text: 'Item A: The Terracotta Matka (Clay Pitcher)' },
                { id: 'itemB', text: 'Item B: The Heavy Iron Cauldron' },
              ],
              correctId: 'itemA',
            },
            {
              id: 'v1-q6',
              type: 'ordering',
              text: 'Arrange the steps of the traditional Kudavolai democratic election in correct chronological order:',
              hint: 'Think about palm leaves, pot, child picking, and reading aloud.',
              explanation: 'The 10th-century Uttiramerur inscriptions document candidates’ names written on palm leaves (olai), mixed in an earthen pot (kuda), and drawn out by a child in full public view.',
              correctOrder: [
                'Write candidate names on palm-leaf tickets',
                'Place all tickets inside an earthen pot',
                'A young child draws one ticket in front of the public',
                'The head priest reads the chosen name aloud to the assembly',
              ],
              shuffledItems: [
                'A young child draws one ticket in front of the public',
                'Write candidate names on palm-leaf tickets',
                'The head priest reads the chosen name aloud to the assembly',
                'Place all tickets inside an earthen pot',
              ],
            },
            {
              id: 'v1-q7',
              type: 'pattern-completion',
              text: 'Identify the missing term in the traditional four-stage agricultural rhythm:',
              hint: 'What do farmers do right after tilling the soil and before watering?',
              explanation: 'Agricultural cycles followed: Ploughing the soil → Sowing the heirloom seeds → Irrigating canals → Harvesting golden grain.',
              pattern: ['Ploughing (Jotna)', 'Sowing (Bona)', 'Irrigation (Sinchai)', 'Harvest (Katai)'],
              missingIndex: 1,
              options: ['Sowing (Bona)', 'Weaving', 'Storage', 'Trading'],
              correctOption: 'Sowing (Bona)',
            },
            {
              id: 'v1-q8',
              type: 'scenario',
              text: 'The harvest was exceptionally bountiful this autumn. What is the wisest use of the grain surplus?',
              explanation: 'Traditional Grama Bhandaras (community granaries) stored a buffer stock of grain in earthen bins (Kuthir) to safeguard against future drought or floods.',
              scenarioText: 'After every family takes their yearly ration, 30 large sacks of finger millet (Ragi) remain in the village courtyard.',
              decisions: [
                {
                  id: 'granary',
                  text: 'Deposit the surplus in the community granary (Dharmashala bhandara) as emergency reserve.',
                  consequence: 'The village is protected against future poor rainfall, ensuring food security for all.',
                },
                {
                  id: 'waste',
                  text: 'Hold a single lavish three-day feast and consume all thirty sacks at once.',
                  consequence: 'Villagers celebrate briefly, but next year’s dry spell causes severe hunger.',
                },
                {
                  id: 'discard',
                  text: 'Leave the sacks uncovered in the courtyard open to rats and rain.',
                  consequence: 'Dampness spoils the grain within two weeks, wasting valuable months of farm labor.',
                },
              ],
              bestId: 'granary',
            },
            {
              id: 'v1-q9',
              type: 'multiple-choice',
              text: 'Why did ancient Indian village homes feature wide front verandas called "Thinnai" or "Otla"?',
              hint: 'They faced the street and welcomed neighbors and travelers.',
              explanation: 'The Thinnai (or Otla) was a shaded street-facing platform where travelers could rest, elders chatted, and children listened to stories, creating open social warmth.',
              options: [
                { id: 'social', text: 'To welcome passing travelers & rest in shade', subtitle: 'Open street platform for community life', illustrationKey: 'thinnaiVeranda' },
                { id: 'cattle', text: 'To store iron farming tools away from rain', subtitle: 'Tool storage area', illustrationKey: 'plough' },
                { id: 'defense', text: 'To serve as an armed guard outpost', subtitle: 'Military watchtower', illustrationKey: 'ironCauldron' },
              ],
              correctId: 'social',
            },
            {
              id: 'v1-q10',
              type: 'interactive-challenge',
              text: 'Adjust the slider to balance the village emergency grain reserve percentage (recommended: 20% to 30% for drought safety):',
              hint: 'Experts recommend keeping around 25% of the total grain harvest in reserve.',
              explanation: 'Centuries of monsoon observation taught village elders to retain approximately 25% of the harvest to guarantee seed grain and emergency rations.',
              challengeKind: 'slider',
              config: {
                min: 0,
                max: 100,
                step: 5,
                unit: '%',
                label: 'Emergency Granary Reserve',
                initial: 10,
              },
              correctValue: '25',
            },
            {
              id: 'v1-q11',
              type: 'fill-blanks',
              text: 'Fill in the historical term for the South Indian village water committee:',
              hint: 'The committee that maintained lakes, sluices, and canals.',
              explanation: 'In the Chola democratic inscriptions, the Eri-variyam was the elected tank and water committee responsible for desilting lakes and managing sluices.',
              sentence: 'The historical Tamil committee responsible for village lake and tank maintenance was the __BLANK__.',
              wordTiles: ['Eri-variyam', 'Thotta-variyam', 'Pancha-variyam', 'Samiti'],
              correctWord: 'Eri-variyam',
            },
            {
              id: 'v1-q12',
              type: 'multiple-choice',
              text: 'In the ancient Indian moral concept of "Lokasangraha", what does the leader strive for?',
              hint: 'Loka means world or people, sangraha means upholding or welfare.',
              explanation: 'Lokasangraha, celebrated in the Bhagavad Gita and epics, signifies working selflessly for the protection, welfare, and harmony of the entire society.',
              options: [
                { id: 'welfare', text: 'The welfare, harmony, and holding together of all people', icon: '🌿' },
                { id: 'wealth', text: 'Accumulating maximum gold coins in a personal treasury', icon: '💰' },
                { id: 'fame', text: 'Carving statues of oneself in every town', icon: '🗿' },
              ],
              correctId: 'welfare',
            },
          ],
        },
      ],
    },
    {
      id: 'village-p2',
      title: 'Phase 2: The Village Council & Kudavolai',
      type: 'learning',
      subLessons: [
        {
          id: 'v-p2-s1',
          title: 'Democratic Assemblies & Rules of Integrity',
          questions: [
            {
              id: 'v2-q1',
              type: 'multiple-choice',
              text: 'What was a strict requirement for someone nominated to the Uttiramerur village council?',
              hint: 'Candidates had to own land, have clean finances, and know moral codes.',
              explanation: 'The 10th-century inscriptions state council members had to own a tax-paying house, be between 35 and 70 years old, and have audited, transparent accounts.',
              options: [
                { id: 'clean', text: 'A clean financial record with transparent public accounts', icon: '📜' },
                { id: 'royal', text: 'Being born into the king’s personal royal dynasty', icon: '👑' },
                { id: 'sword', text: 'Winning a sword duel in front of the village crowd', icon: '⚔️' },
              ],
              correctId: 'clean',
            },
            {
              id: 'v2-q2',
              type: 'matching',
              text: 'Match the ancient village committee (Variyam) with its responsibility:',
              hint: 'Think about gardens, gold quality, and water tanks.',
              explanation: 'Uttiramerur created specialized committees to distribute governance responsibilities efficiently.',
              pairs: [
                { left: 'Thotta-variyam', right: 'Orchards, public gardens & medicinal herbs' },
                { left: 'Pon-variyam', right: 'Testing purity and weights of village gold' },
                { left: 'Samvatsara-variyam', right: 'Annual central advisory and ethics council' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'village-p3',
      title: 'Phase 3: The Artisan Guilds (Shrenis)',
      type: 'learning',
      subLessons: [
        {
          id: 'v-p3-s1',
          title: 'Guild Apprenticeship & Quality Standards',
          questions: [
            {
              id: 'v3-q1',
              type: 'multiple-choice',
              text: 'What was an ancient Indian artisan guild known as?',
              hint: 'These powerful associations set wages, quality seals, and trained apprentices.',
              explanation: 'Shrenis were autonomous merchant and craft guilds in ancient India that even minted coins, funded universities, and held banking trusts.',
              options: [
                { id: 'shreni', text: 'Shreni', icon: '⚒️' },
                { id: 'rajya', text: 'Rajya', icon: '🏰' },
                { id: 'ashrama', text: 'Ashrama', icon: '🧘' },
              ],
              correctId: 'shreni',
            },
          ],
        },
      ],
    },
    {
      id: 'village-p4',
      title: 'Phase 4: Review: Community & Governance',
      type: 'review',
      subLessons: [
        {
          id: 'v-p4-s1',
          title: 'Mastery Check: Traditions of Cooperation',
          questions: [
            {
              id: 'v4-q1',
              type: 'multiple-choice',
              text: 'What made the Kudavolai pot-ticket election fair and trusted by all citizens?',
              explanation: 'A young innocent child drew the inscribed palm leaves in open daylight before the whole gathered assembly, preventing tampering.',
              options: [
                { id: 'child', text: 'An innocent child drew lots publicly in daylight before all citizens', icon: '☀️' },
                { id: 'secret', text: 'The village chief selected the winners in private at midnight', icon: '🌙' },
              ],
              correctId: 'child',
            },
          ],
        },
      ],
    },
    {
      id: 'village-p5',
      title: 'Phase 5: Granaries, Markets & Barter',
      type: 'learning',
      subLessons: [
        {
          id: 'v-p5-s1',
          title: 'Fair Exchange in Village Haats',
          questions: [
            {
              id: 'v5-q1',
              type: 'multiple-choice',
              text: 'What was a weekly rotating open-air village market called across rural India?',
              explanation: 'A Haat or Santhe is a centuries-old rotating weekly market where local producers trade fresh produce and crafts directly.',
              options: [
                { id: 'haat', text: 'Haat or Santhe', icon: '🧺' },
                { id: 'kosh', text: 'Kosh', icon: '🏛️' },
              ],
              correctId: 'haat',
            },
          ],
        },
      ],
    },
    {
      id: 'village-p6',
      title: 'Phase 6: Ecological Commons & Sacred Groves',
      type: 'learning',
      subLessons: [
        {
          id: 'v-p6-s1',
          title: 'The Sacred Forest Patch (Devarakadu)',
          questions: [
            {
              id: 'v6-q1',
              type: 'multiple-choice',
              text: 'Why did traditional communities set aside "Sacred Groves" (Orans/Devarakadu) where tree-cutting was strictly forbidden?',
              explanation: 'Sacred Groves preserved biodiversity, medicinal herbs, and natural aquifers by treating these forest patches as inviolable ecosystems.',
              options: [
                { id: 'conserve', text: 'To conserve biodiversity, rare medicinal plants, and water springs', icon: '🌱' },
                { id: 'lumber', text: 'To cut all timber secretly for personal profit', icon: '🪓' },
              ],
              correctId: 'conserve',
            },
          ],
        },
      ],
    },
    {
      id: 'village-p7',
      title: 'Phase 7: Dispute Resolution & Nyaya',
      type: 'learning',
      subLessons: [
        {
          id: 'v-p7-s1',
          title: 'The Panch Parmeshwar Ethos',
          questions: [
            {
              id: 'v7-q1',
              type: 'multiple-choice',
              text: 'What was the moral guiding principle of the five village elders sitting in council (Panchayat)?',
              explanation: 'The principle "Panch Parmeshwar" implied that in rendering justice, elders must transcend family bias and speak only the objective truth.',
              options: [
                { id: 'impartial', text: 'To set aside personal bias and act with absolute fairness for truth', icon: '⚖️' },
                { id: 'favor', text: 'To favor whoever offered the largest gift to the council', icon: '🎁' },
              ],
              correctId: 'impartial',
            },
          ],
        },
      ],
    },
    {
      id: 'village-p8',
      title: 'Phase 8: Review: Ecology & Trade',
      type: 'review',
      subLessons: [
        {
          id: 'v-p8-s1',
          title: 'Synthesis of Village Economy',
          questions: [
            {
              id: 'v8-q1',
              type: 'fill-blanks',
              text: 'Fill in the word describing autonomous artisan associations in ancient India:',
              sentence: 'Artisans organized their crafts, quality marks, and apprenticeship inside a __BLANK__.',
              wordTiles: ['Shreni', 'Panchayat', 'Samiti', 'Gram'],
              correctWord: 'Shreni',
              explanation: 'Shrenis protected craftsman welfare, standardized prices, and sustained high artistic standards.',
            },
          ],
        },
      ],
    },
    {
      id: 'village-p9',
      title: 'Phase 9: Community Celebrations & Storytelling',
      type: 'learning',
      subLessons: [
        {
          id: 'v-p9-s1',
          title: 'Folk Lore, Kathas & Puppetry',
          questions: [
            {
              id: 'v9-q1',
              type: 'multiple-choice',
              text: 'How were ancient moral epics and agricultural tips passed down to children before widespread printed textbooks?',
              explanation: 'Puppetry (Kathputli/Tolpava Koothu), traveling bards (Kathakaras), and community folk songs transmitted history and ecological wisdom orally.',
              options: [
                { id: 'oral', text: 'Through oral storytelling, shadow puppetry, and seasonal folk songs', icon: '🎭' },
                { id: 'radio', text: 'Through wireless radio broadcasts and digital tablets', icon: '📻' },
              ],
              correctId: 'oral',
            },
          ],
        },
      ],
    },
    {
      id: 'village-p10',
      title: 'Phase 10: Master Review: The Harmonious Village',
      type: 'review',
      subLessons: [
        {
          id: 'v-p10-s1',
          title: 'Grand Mastery of Village Civic Heritage',
          questions: [
            {
              id: 'v10-q1',
              type: 'scenario',
              text: 'As the newly chosen youth representative of the Gram Sabha, how do you lead the season’s planning?',
              explanation: 'True democratic leadership balances listening to all voices with prioritizing essential community survival resources.',
              scenarioText: 'The village assembly gathers for the post-monsoon session to decide the winter priorities.',
              decisions: [
                {
                  id: 'desilt',
                  text: 'Inspect the water tank sluices with the Eri-variyam and organize collective path repairs.',
                  consequence: 'Water is conserved for the dry spring, and trade carts travel smoothly.',
                },
                {
                  id: 'ignore',
                  text: 'Cancel meetings and let every family fend entirely for themselves.',
                  consequence: 'The community loses coordination and canal blockages cause localized floods.',
                },
              ],
              bestId: 'desilt',
            },
          ],
        },
      ],
    },
  ],
}

