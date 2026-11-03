import type { EnvironmentCurriculum } from '../engine/types'

export const GATHERING_CURRICULUM: EnvironmentCurriculum = {
  environmentId: 'gathering',
  environmentName: 'The Gathering Place: Traditional Strategy Games',
  phases: [
    {
      id: 'gathering-p1',
      title: 'Phase 1: Games of Strategy & Probability',
      type: 'learning',
      subLessons: [
        {
          id: 'g-p1-s1',
          title: 'The Chaupar Cross & Cowrie Probability',
          learningObjective: 'Master tactical board movements, cowrie shell probability, and the heritage of ancient strategy games.',
          coverIllustrationKey: 'chauparBoard',
          questions: [
            {
              id: 'g1-q1',
              type: 'multiple-choice',
              text: 'What ancient Indian board game, played on an 8×8 grid (Ashtapada), is the direct ancestor of modern Chess?',
              hint: 'It translates to "four limbs of the army" (infantry, cavalry, elephants, and chariots).',
              explanation: 'Chaturanga was developed in Gupta-era India (~6th century CE) representing four military wings and evolved through Persia into modern international chess.',
              options: [
                { id: 'chaturanga', text: 'Chaturanga (Four Divisions)', subtitle: 'Ancestral game on 8x8 Ashtapada board', illustrationKey: 'chaturanga' },
                { id: 'chaupar', text: 'Chaupar Cross Game', subtitle: 'Race game played on cross-shaped cloth', illustrationKey: 'chauparBoard' },
                { id: 'moksha', text: 'Moksha Patam Moral Path', subtitle: 'Philosophical game of karma & virtues', illustrationKey: 'mokshaPatam' },
              ],
              correctId: 'chaturanga',
            },
            {
              id: 'g1-q2',
              type: 'fill-blanks',
              text: 'Complete the sentence about the natural dice used in traditional Indian board games:',
              hint: 'Small marine snail shells with open slit mouths.',
              explanation: 'Cowrie shells (Kodi) cast onto a cloth mat determine the moves based on how many land face-up vs face-down.',
              sentence: 'In traditional Chaupar, players cast smooth polished __BLANK__ shells instead of cubed dice.',
              wordTiles: ['Cowrie', 'Coconut', 'Acorn', 'Peacock'],
              correctWord: 'Cowrie',
            },
            {
              id: 'g1-q3',
              type: 'matching',
              text: 'Match each traditional Indian game with its philosophical or tactical theme:',
              hint: 'Consider the moral meaning of snakes, the four army wings, and card suits.',
              explanation: 'Traditional games were educational tools teaching moral philosophies, resource allocation, and strategy.',
              pairs: [
                { left: 'Moksha Patam', right: 'Karma, virtues (ladders) & vices (snakes)' },
                { left: 'Chaturanga', right: 'Military coordination & royal foresight' },
                { left: 'Chaupar / Pachisi', right: 'Probabilistic risk & safe sanctuaries' },
                { left: 'Ganjifa Cards', right: 'Memory & ten avatar iconography' },
              ],
            },
            {
              id: 'g1-q4',
              type: 'scenario',
              text: 'You rolled a 4 in Chaupar. Your scout pawn is 3 steps ahead of an opponent, and your closer pawn is near the winning home. What is your best tactical move?',
              explanation: 'Forming a pair (Jodi) or seeking a marked sanctuary (Charkoni) locks pawns in total safety, protecting earlier hard-earned distance.',
              scenarioText: 'Pawn 1 is vulnerable to capture on an open pathway. Pawn 2 can advance toward home. You have exactly 4 movement points.',
              decisions: [
                {
                  id: 'safety',
                  text: 'Move Pawn 1 into the marked safe castle (Charkoni) to eliminate capture risk.',
                  consequence: 'Pawn 1 is completely safe from capture, securing your board control.',
                },
                {
                  id: 'reckless',
                  text: 'Sprint Pawn 2 ahead, leaving Pawn 1 open to being sent back to start.',
                  consequence: 'Opponent strikes Pawn 1 on their next turn, forcing a restart from zero!',
                },
              ],
              bestId: 'safety',
            },
            {
              id: 'g1-q5',
              type: 'image-id',
              text: 'Which square on the traditional Chaupar board guarantees sanctuary where no opponent can capture your pawn?',
              hint: 'Look for squares marked with an "X" or cross symbol.',
              explanation: 'Squares inscribed with an "X" (Charkoni or Castle) are neutral sanctuaries where pawns of any color rest in safety together.',
              illustration: {
                viewBox: '0 0 340 140',
                elements: `
                  <rect x="60" y="30" width="80" height="80" fill="#FAF4E6" stroke="#9A8A78" strokeWidth="2" />
                  <text x="100" y="75" fill="#40382F" fontSize="16" fontWeight="bold" textAnchor="middle">Tile A</text>
                  <rect x="200" y="30" width="80" height="80" fill="#FAF4E6" stroke="#9A8A78" strokeWidth="2" />
                  <line x1="200" y1="30" x2="280" y2="110" stroke="#B96F4B" strokeWidth="3" />
                  <line x1="280" y1="30" x2="200" y2="110" stroke="#B96F4B" strokeWidth="3" />
                  <text x="240" y="125" fill="#B96F4B" fontSize="11" fontWeight="bold" textAnchor="middle">Tile B (Cross-marked)</text>
                `,
                bgColor: '#F5EFE6',
              },
              options: [
                { id: 'tileB', text: 'Tile B: The Cross-Marked Sanctuary (Charkoni)' },
                { id: 'tileA', text: 'Tile A: The Blank Pathway Square' },
              ],
              correctId: 'tileB',
            },
            {
              id: 'g1-q6',
              type: 'ordering',
              text: 'Arrange the four historical wings of an ancient Indian army in Chaturanga from front vanguard to rear reserve:',
              hint: 'Foot soldiers stood in front, followed by horses, elephants, and royal chariots.',
              explanation: 'Chaturanga represented: Padati (Foot Infantry) → Ashva (Cavalry Horses) → Gaja (War Elephants) → Ratha (Chariots).',
              correctOrder: [
                'Padati (Foot Soldiers / Pawns)',
                'Ashva (Cavalry / Knights)',
                'Gaja (War Elephants / Bishops)',
                'Ratha (War Chariots / Rooks)',
              ],
              shuffledItems: [
                'Ratha (War Chariots / Rooks)',
                'Padati (Foot Soldiers / Pawns)',
                'Gaja (War Elephants / Bishops)',
                'Ashva (Cavalry / Knights)',
              ],
            },
            {
              id: 'g1-q7',
              type: 'multiple-choice',
              text: 'In the original 13th-century game of Moksha Patam (Snakes & Ladders), what did the ladders represent?',
              hint: 'Virtues like compassion, humility, truthfulness, and study elevated the soul.',
              explanation: 'Saint Gyandev created Moksha Patam as a moral philosophy guide: noble virtues (Dharma, Daya, Satya) were ladders, while egotism and anger were snakes.',
              options: [
                { id: 'virtues', text: 'Moral virtues (truth, humility & generosity)', subtitle: 'Ladders that elevate character', illustrationKey: 'mokshaPatam' },
                { id: 'gold', text: 'Piles of gold coins won in conquest', subtitle: 'Material treasures', illustrationKey: 'cowrieShells' },
                { id: 'weapons', text: 'Iron war weapons and armor', subtitle: 'Military gear', illustrationKey: 'chaturanga' },
              ],
              correctId: 'virtues',
            },
            {
              id: 'g1-q8',
              type: 'pattern-completion',
              text: 'Complete the sequence of circular Ganjifa card suits based on the Dashavatara (Ten Incarnations):',
              hint: 'Matsya (Fish) → Kurma (Turtle) → Varaha (Boar) → ?',
              explanation: 'The classic Ganjifa deck painted the Dashavatara cycle: Fish → Turtle → Boar → Narasimha (Man-Lion).',
              pattern: ['1. Matsya', '2. Kurma', '3. Varaha', '4. Narasimha'],
              missingIndex: 3,
              options: ['4. Narasimha', '4. Vamana', '4. Rama', '4. Krishna'],
              correctOption: '4. Narasimha',
            },
            {
              id: 'g1-q9',
              type: 'interactive-challenge',
              text: 'Calculate the probability: When casting 6 cowrie shells, how many mouths facing up represent the highest single move in Chaupar?',
              hint: 'Rolling all 6 mouths up (or all 6 down) gives the maximum score of 25 (Pachis)!',
              explanation: 'In Pachisi (named after "Pachis" meaning 25), casting all 6 cowries open produces the game’s pinnacle bonus throw.',
              challengeKind: 'slider',
              config: {
                min: 1,
                max: 6,
                step: 1,
                unit: ' shells',
                label: 'Cowrie Shells Upright',
                initial: 3,
              },
              correctValue: '6',
            },
            {
              id: 'g1-q10',
              type: 'fill-blanks',
              text: 'What ancient cave temple in Maharashtra features a rock carving of Shiva and Parvati playing Chaupar?',
              hint: 'Famous UNESCO cave complex near Aurangabad / Chhatrapati Sambhajinagar.',
              explanation: 'Cave 21 (Rameshwar Cave) at Ellora famously portrays Shiva and Parvati absorbed in an intense game of Chaupar.',
              sentence: 'The famous rock sculpture of Shiva and Parvati playing Chaupar is found in Cave 21 of the __BLANK__ Caves.',
              wordTiles: ['Ellora', 'Ajanta', 'Elephanta', 'Badami'],
              correctWord: 'Ellora',
            },
            {
              id: 'g1-q11',
              type: 'multiple-choice',
              text: 'What was the defensive advantage of moving two friendly pawns together on the same square in Chaupar (called "Jodi")?',
              hint: 'A single enemy pawn cannot capture or pass a pair!',
              explanation: 'The Jodi (coupled pair) acts as an impenetrable road block: a single enemy pawn cannot capture it or leap past it.',
              options: [
                { id: 'jodi', text: 'It creates a barricade that single opponent pawns cannot bypass or capture', icon: '🛡️' },
                { id: 'flight', text: 'It allows pawns to fly directly into the final goal immediately', icon: '🦅' },
                { id: 'double', text: 'It doubles the movement speed of all other pawns by ten', icon: '⚡' },
              ],
              correctId: 'jodi',
            },
            {
              id: 'g1-q12',
              type: 'scenario',
              text: 'During a game under the stone pavilion, a younger player is upset after landing on a "snake" tile in Moksha Patam. How do you explain the game’s lesson?',
              explanation: 'Moksha Patam teaches equanimity (Samatva): setbacks are natural cycles, and persistence allows one to climb again.',
              scenarioText: 'A young player slides down from square 84 to square 16 and feels discouraged.',
              decisions: [
                {
                  id: 'patience',
                  text: 'Explain that the board reflects life: setbacks teach resilience and every turn brings fresh ladders.',
                  consequence: 'The child smiles, understands patience, and enthusiastically rolls the cowries again.',
                },
                {
                  id: 'quit',
                  text: 'Throw the board away and declare the game unfair.',
                  consequence: 'Frustration builds, missing the entire philosophical lesson of perseverance.',
                },
              ],
              bestId: 'patience',
            },
          ],
        },
      ],
    },
    {
      id: 'gathering-p2',
      title: 'Phase 2: The Four Wings of Chaturanga',
      type: 'learning',
      subLessons: [
        {
          id: 'g-p2-s1',
          title: 'Battle Formations & Strategic Synergy',
          questions: [
            {
              id: 'g2-q1',
              type: 'multiple-choice',
              text: 'In Chaturanga, why was the elephant piece (Gaja) so respected on the battlefield?',
              explanation: 'War elephants could smash barricades and terrify horse cavalry with their physical mass.',
              options: [
                { id: 'power', text: 'Its immense strength could break enemy lines and defensive walls', icon: '🐘' },
                { id: 'speed', text: 'It was the fastest runner across muddy rivers', icon: '🐎' },
              ],
              correctId: 'power',
            },
          ],
        },
      ],
    },
    {
      id: 'gathering-p3',
      title: 'Phase 3: Moksha Patam & Moral Philosophies',
      type: 'learning',
      subLessons: [
        {
          id: 'g-p3-s1',
          title: 'The Ladders of Virtue',
          questions: [
            {
              id: 'g3-q1',
              type: 'multiple-choice',
              text: 'Which square in traditional Moksha Patam represented the supreme liberation (Moksha)?',
              explanation: 'Square 100 or 108 represented ultimate liberation, attained by cultivating selfless virtue.',
              options: [
                { id: 'm100', text: 'Square 100 (The Summit of Peace)', icon: '🕊️' },
                { id: 'm50', text: 'Square 50 (The Midpoint)', icon: '⛺' },
              ],
              correctId: 'm100',
            },
          ],
        },
      ],
    },
    {
      id: 'gathering-p4',
      title: 'Phase 4: Review: Board Games & Tactical Foresight',
      type: 'review',
      subLessons: [
        {
          id: 'g-p4-s1',
          title: 'Mastery of Strategy and Probabilities',
          questions: [
            {
              id: 'g4-q1',
              type: 'fill-blanks',
              text: 'Fill in the ancient Sanskrit name of chess:',
              sentence: 'The ancestor of modern chess played on an 8x8 grid was __BLANK__.',
              wordTiles: ['Chaturanga', 'Chaupar', 'Pachisi', 'Ganjifa'],
              correctWord: 'Chaturanga',
              explanation: 'Chaturanga spread eastward and westward, inspiring Shogi, Xiangqi, and modern chess.',
            },
          ],
        },
      ],
    },
    {
      id: 'gathering-p5',
      title: 'Phase 5: Ganjifa & Miniature Card Art',
      type: 'learning',
      subLessons: [
        {
          id: 'g-p5-s1',
          title: 'Hand-Painted Lacquered Discs',
          questions: [
            {
              id: 'g5-q1',
              type: 'multiple-choice',
              text: 'What material were traditional royal Ganjifa cards crafted from?',
              explanation: 'Artisans crafted Ganjifa discs from stiffened cloth layers, palm leaf, or ivory, lacquered with vibrant natural minerals.',
              options: [
                { id: 'lacquer', text: 'Layers of stiffened cotton cloth or palm leaf coated in lacquer', icon: '🎨' },
                { id: 'plastic', text: 'Synthetic molded petroleum plastic', icon: '📦' },
              ],
              correctId: 'lacquer',
            },
          ],
        },
      ],
    },
    {
      id: 'gathering-p6',
      title: 'Phase 6: Pallanguzhi & Mancala Math',
      type: 'learning',
      subLessons: [
        {
          id: 'g-p6-s1',
          title: 'Seed Sowing & Arithmetic Dexterity',
          questions: [
            {
              id: 'g6-q1',
              type: 'multiple-choice',
              text: 'What counters were traditionally used to play Pallanguzhi (traditional Tamil 14-pit game)?',
              explanation: 'Smooth tamarind seeds (puliya-muthu) or small cowrie shells were dropped one by one to cultivate lightning-fast mental arithmetic.',
              options: [
                { id: 'tamarind', text: 'Glossy brown tamarind seeds or small cowries', icon: '🌰' },
                { id: 'lead', text: 'Heavy lead metal pellets', icon: '⚙️' },
              ],
              correctId: 'tamarind',
            },
          ],
        },
      ],
    },
    {
      id: 'gathering-p7',
      title: 'Phase 7: Outdoor Traditional Sports',
      type: 'learning',
      subLessons: [
        {
          id: 'g-p7-s1',
          title: 'Kabaddi, Kho-Kho & Team Coordination',
          questions: [
            {
              id: 'g7-q1',
              type: 'multiple-choice',
              text: 'What breath-control skill (Cant) is fundamental to the ancient Indian sport of Kabaddi?',
              explanation: 'The raider must chant "Kabaddi" in a single continuous breath without inhaling, testing lung power and tactical timing.',
              options: [
                { id: 'breath', text: 'Chanting in a single continuous breath without taking another inhalation', icon: '🫁' },
                { id: 'bat', text: 'Carrying a heavy wooden cricket bat across lines', icon: '🏏' },
              ],
              correctId: 'breath',
            },
          ],
        },
      ],
    },
    {
      id: 'gathering-p8',
      title: 'Phase 8: Review: Memory, Math & Agility',
      type: 'review',
      subLessons: [
        {
          id: 'g-p8-s1',
          title: 'Games of Mind and Movement',
          questions: [
            {
              id: 'g8-q1',
              type: 'matching',
              text: 'Match the regional traditional game to its apparatus:',
              hint: 'Think about pits in wood, round painted cards, and cross cloths.',
              explanation: 'India’s rich gaming repertoire engaged both physical agility and contemplative mental calculation.',
              pairs: [
                { left: 'Pallanguzhi', right: 'Two rows of wooden pits & tamarind seeds' },
                { left: 'Ganjifa', right: 'Circular hand-painted lacquered discs' },
                { left: 'Chaupar', right: 'Cross-shaped embroidered cloth with cowries' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gathering-p9',
      title: 'Phase 9: Fair Play & The Spirit of Khelo',
      type: 'learning',
      subLessons: [
        {
          id: 'g-p9-s1',
          title: 'Sportsmanship in Ancient Epics',
          questions: [
            {
              id: 'g9-q1',
              type: 'multiple-choice',
              text: 'What cautionary moral is taught by the tragic game of dice in the Mahabharata?',
              explanation: 'The epic warns that obsessive gambling, deceit, and losing one’s moral compass destroys kingdoms and community bonds.',
              options: [
                { id: 'gamble', text: 'That gambling and arrogance cloud wisdom and bring ruin to families', icon: '⚠️' },
                { id: 'skill', text: 'That winning with loaded dice is an honorable triumph', icon: '🎲' },
              ],
              correctId: 'gamble',
            },
          ],
        },
      ],
    },
    {
      id: 'gathering-p10',
      title: 'Phase 10: Master Review: The Grand Tournament',
      type: 'review',
      subLessons: [
        {
          id: 'g-p10-s1',
          title: 'Master of Tactics & Equanimity',
          questions: [
            {
              id: 'g10-q1',
              type: 'scenario',
              text: 'As the arbiter of the annual village game festival, how do you reward the players?',
              explanation: 'True champions are celebrated not just for winning points, but for grace, honesty, and lifting up their companions.',
              scenarioText: 'A final match between two teams ends with one team making a costly mistake while honestly admitting a foot-fault.',
              decisions: [
                {
                  id: 'honor',
                  text: 'Award the Sportsmanship Shield to the team that showed absolute honesty and dignity.',
                  consequence: 'Both teams cheer, and honesty becomes the highest virtue celebrated by all youth.',
                },
                {
                  id: 'mock',
                  text: 'Scold the honest player for admitting their mistake.',
                  consequence: 'Trust is eroded, encouraging future cheating and dishonesty.',
                },
              ],
              bestId: 'honor',
            },
          ],
        },
      ],
    },
  ],
}

