import type { EnvironmentCurriculum } from '../engine/types'

export const SCHOLAR_CURRICULUM: EnvironmentCurriculum = {
  environmentId: 'scholar',
  environmentName: "Scholar's Courtyard: Mathematics & Logic",
  phases: [
    {
      id: 'scholar-p1',
      title: 'Phase 1: The Rhythm of Numbers & Sequences',
      type: 'learning',
      subLessons: [
        {
          id: 's-p1-s1',
          title: 'Prosody, Patterns & Magic Squares',
          learningObjective: 'Decipher the mathematics of poetic rhythm, Pingala’s binary meter, and harmonious magic squares.',
          coverIllustrationKey: 'magicSquareTile',
          questions: [
            {
              id: 's1-q1',
              type: 'pattern-completion',
              text: 'Complete the poetic rhythm sequence documented by Indian grammarian Virahanka (c. 700 CE):',
              hint: 'Each number is the sum of the two numbers immediately before it: 1+2=3, 2+3=5, 3+5=8... What is 5 + 8?',
              explanation: 'Virahanka and Hemachandra discovered this sequence centuries before Europe named it the Fibonacci sequence. 5 + 8 = 13!',
              pattern: ['1', '2', '3', '5', '8', '13', '21'],
              missingIndex: 5,
              options: ['11', '12', '13', '15'],
              correctOption: '13',
            },
            {
              id: 's1-q2',
              type: 'multiple-choice',
              text: 'In ancient Indian musical prosody (Chhandas), what beat value was assigned to a long syllable (Guru)?',
              hint: 'A short syllable (Laghu) equals 1 unit. A long syllable (Guru) has double the duration.',
              explanation: 'Laghu (short) counts as 1 Matra (beat), while Guru (long) counts as 2 Matras. Combinations of these formed Pingala’s binary tables.',
              options: [
                { id: 'two', text: '2 Matras (Long Guru beat)', subtitle: 'Double duration of a short syllable', illustrationKey: 'virahankaBeat' },
                { id: 'one', text: '1 Matra (Short Laghu beat)', subtitle: 'Single unit quick beat', illustrationKey: 'shunyaZero' },
                { id: 'four', text: '4 Matras (Quadruple beat)', subtitle: 'Extended poetic measure', illustrationKey: 'magicSquareTile' },
              ],
              correctId: 'two',
            },
            {
              id: 's1-q3',
              type: 'fill-blanks',
              text: 'Complete the sentence about the Indian mathematician who established mathematical rules for Zero:',
              hint: 'He authored the Brahmasphutasiddhanta in 628 CE.',
              explanation: 'Brahmagupta (628 CE) was the first scholar in world history to formulate arithmetic operations for Zero (Shunya) as a number rather than merely an empty gap.',
              sentence: 'In 628 CE, the scholar __BLANK__ authored the first mathematical rules treating Zero as a number.',
              wordTiles: ['Brahmagupta', 'Aryabhata', 'Varahamihira', 'Bhaskara'],
              correctWord: 'Brahmagupta',
            },
            {
              id: 's1-q4',
              type: 'matching',
              text: 'Match each Indian mathematician with their groundbreaking contribution:',
              hint: 'Think about algebra, planetary rotations, permutations of meter, and zero.',
              explanation: 'Indian mathematics advanced trigonometry, combinatorics, place-value notation, and algebra across millennia.',
              pairs: [
                { left: 'Aryabhata (499 CE)', right: 'Calculated Pi to 3.1416 & Earth rotation' },
                { left: 'Pingala (300 BCE)', right: 'Binary numbers & Meru Prastara (Pascal Triangle)' },
                { left: 'Brahmagupta (628 CE)', right: 'Zero arithmetic rules & negative numbers' },
                { left: 'Bhaskara II (1150 CE)', right: 'Lilavati & Bijaganita (Algebra)' },
              ],
            },
            {
              id: 's1-q5',
              type: 'image-id',
              text: 'Inspect the 4×4 magic square from 10th-century Khajuraho (Chautisa Yantra). What is the constant sum of every row, column, and diagonal?',
              hint: 'Sum the first row: 7 + 12 + 1 + 14 = ?',
              explanation: 'The Chautisa Yantra magic square sums to exactly 34 in all rows, columns, diagonals, 2×2 sub-quadrants, and even the four corner stones!',
              illustration: {
                viewBox: '0 0 340 180',
                elements: `
                  <rect x="70" y="20" width="200" height="130" fill="#FAF4E6" stroke="#9A8A78" strokeWidth="2" rx="4" />
                  <line x1="120" y1="20" x2="120" y2="150" stroke="#C4B892" strokeWidth="1.5" />
                  <line x1="170" y1="20" x2="170" y2="150" stroke="#C4B892" strokeWidth="1.5" />
                  <line x1="220" y1="20" x2="220" y2="150" stroke="#C4B892" strokeWidth="1.5" />
                  <line x1="70" y1="52" x2="270" y2="52" stroke="#C4B892" strokeWidth="1.5" />
                  <line x1="70" y1="85" x2="270" y2="85" stroke="#C4B892" strokeWidth="1.5" />
                  <line x1="70" y1="118" x2="270" y2="118" stroke="#C4B892" strokeWidth="1.5" />
                  <!-- Row 1 -->
                  <text x="95" y="42" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">7</text>
                  <text x="145" y="42" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">12</text>
                  <text x="195" y="42" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                  <text x="245" y="42" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">14</text>
                  <!-- Row 2 -->
                  <text x="95" y="75" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                  <text x="145" y="75" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">13</text>
                  <text x="195" y="75" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">8</text>
                  <text x="245" y="75" fill="#B96F4B" fontSize="12" fontWeight="bold" textAnchor="middle">11</text>
                  <!-- Row 3 -->
                  <text x="95" y="108" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">16</text>
                  <text x="145" y="108" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                  <text x="195" y="108" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">10</text>
                  <text x="245" y="108" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">5</text>
                  <!-- Row 4 -->
                  <text x="95" y="141" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">9</text>
                  <text x="145" y="141" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">6</text>
                  <text x="195" y="141" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">15</text>
                  <text x="245" y="141" fill="#40382F" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                  <text x="170" y="170" fill="#7A8450" fontSize="11" fontWeight="bold" textAnchor="middle">Chautisa Yantra (Khajuraho)</text>
                `,
                bgColor: '#F5EFE6',
              },
              options: [
                { id: 'sum34', text: 'Sum = 34' },
                { id: 'sum28', text: 'Sum = 28' },
                { id: 'sum40', text: 'Sum = 40' },
              ],
              correctId: 'sum34',
            },
            {
              id: 's1-q6',
              type: 'ordering',
              text: 'Arrange these ancient Indian mathematical texts in chronological sequence (earliest to latest):',
              hint: 'Start with Pingala’s prosody, followed by Aryabhata, Brahmagupta, and Bhaskara’s Lilavati.',
              explanation: 'Pingala (c. 300 BCE) → Aryabhata (499 CE) → Brahmagupta (628 CE) → Bhaskara II (1150 CE).',
              correctOrder: [
                'Chhandas Shastra (Pingala, ~300 BCE)',
                'Aryabhatiya (Aryabhata, 499 CE)',
                'Brahmasphutasiddhanta (Brahmagupta, 628 CE)',
                'Lilavati (Bhaskara II, 1150 CE)',
              ],
              shuffledItems: [
                'Brahmasphutasiddhanta (Brahmagupta, 628 CE)',
                'Chhandas Shastra (Pingala, ~300 BCE)',
                'Lilavati (Bhaskara II, 1150 CE)',
                'Aryabhatiya (Aryabhata, 499 CE)',
              ],
            },
            {
              id: 's1-q7',
              type: 'scenario',
              text: 'In a math riddle from Bhaskara’s "Lilavati", how would a scholar solve a problem disguised as a poetic nature story?',
              explanation: 'Lilavati taught deep algebra through enchanting verses about bees hovering over lotus blossoms, demonstrating that math is deeply intertwined with natural wonders.',
              scenarioText: 'A riddle asks: "A swarm of bees is flying. One-fifth land on a Kadamba flower, one-third on a Silindhra, three times the difference fly to a Kutaja, and one bee remains. How many bees were in the swarm?"',
              decisions: [
                {
                  id: 'algebra',
                  text: 'Represent the unknown total as a variable (Yavattavat) and balance the algebraic equation.',
                  consequence: 'Step by step, the fractions combine to reveal the exact swarm count: 15 bees!',
                },
                {
                  id: 'guess',
                  text: 'Guess a random large number without verifying fractions.',
                  consequence: 'The fractions do not total a whole number of bees, leading to contradiction.',
                },
              ],
              bestId: 'algebra',
            },
            {
              id: 's1-q8',
              type: 'multiple-choice',
              text: 'What is the ancient geometric triangle of numbers called in Pingala’s mathematics, later known in Europe as Pascal’s Triangle?',
              hint: 'Meru means holy mountain or peak, Prastara means unfolding arrangement.',
              explanation: 'Meru Prastara ("Staircase/Mountain of Mount Meru") was formulated by Pingala around 300 BCE to calculate combinations of short and long poetic syllables.',
              options: [
                { id: 'meru', text: 'Meru Prastara (Staircase of Mount Meru)', subtitle: 'Binomial expansion triangle for poetic meter', illustrationKey: 'meruPrastara' },
                { id: 'yantra', text: 'Sri Yantra Sacred Geometry', subtitle: 'Nine interlocking triangles diagram', illustrationKey: 'magicSquareTile' },
                { id: 'sulba', text: 'Sulba Sutra Rope Geometry', subtitle: 'Sacrificial altar dimensions manual', illustrationKey: 'virahankaBeat' },
              ],
              correctId: 'meru',
            },
            {
              id: 's1-q9',
              type: 'interactive-challenge',
              text: 'Complete the magic square calculation: In the row [2, 13, 8, ?], what number is needed to make the total 34?',
              hint: '2 + 13 + 8 = 23. Calculate 34 - 23 = ?',
              explanation: '23 + 11 = 34! The number 11 perfectly completes the second row of the Chautisa Yantra.',
              challengeKind: 'slider',
              config: {
                min: 1,
                max: 20,
                step: 1,
                unit: '',
                label: 'Missing Tile Value',
                initial: 5,
              },
              correctValue: '11',
            },
            {
              id: 's1-q10',
              type: 'fill-blanks',
              text: 'Complete the Sanskrit mathematical term for the concept of Zero:',
              hint: 'Literally meaning the void or dot that contains infinite potential.',
              explanation: 'Shunya (meaning void, emptiness, or zero) was denoted as a sacred circle or dot (bindu) in early Indian manuscripts such as the Bakshali manuscript.',
              sentence: 'In Indian mathematics, Zero was named __BLANK__, symbolised by a small dot (bindu).',
              wordTiles: ['Shunya', 'Ananta', 'Bindu', 'Rupa'],
              correctWord: 'Shunya',
            },
            {
              id: 's1-q11',
              type: 'multiple-choice',
              text: 'What geometry manual did Harappan and Vedic architects use to construct sacrificial altars with exact square and circular areas?',
              hint: 'Sulba means rope or cord used for precision geometric measurement.',
              explanation: 'The Sulba Sutras (Baudhayana, Apastamba) contain ancient rope geometry, including early statements of what is known as the Pythagorean theorem!',
              options: [
                { id: 'sulba', text: 'Sulba Sutras (Rope Geometry Sutras)', icon: '📐' },
                { id: 'natya', text: 'Natya Shastra (Theater Manual)', icon: '🎭' },
                { id: 'artha', text: 'Artha Shastra (Statecraft Manual)', icon: '📜' },
              ],
              correctId: 'sulba',
            },
            {
              id: 's1-q12',
              type: 'pattern-completion',
              text: 'Complete Pingala’s binary counting rhythm for combinations of 2 syllables: (00, 01, 10, ?)',
              hint: 'In binary, after 10 comes 11 (Guru-Guru).',
              explanation: 'Pingala used Laghu (0) and Guru (1) to systematically generate 2^n poetic meters, inventing binary combinatorics!',
              pattern: ['00 (LL)', '01 (LG)', '10 (GL)', '11 (GG)'],
              missingIndex: 3,
              options: ['11 (GG)', '02 (LX)', '12 (GX)', '00 (LL)'],
              correctOption: '11 (GG)',
            },
          ],
        },
      ],
    },
    {
      id: 'scholar-p2',
      title: 'Phase 2: Sulba Sutras & Altar Geometry',
      type: 'learning',
      subLessons: [
        {
          id: 's-p2-s1',
          title: 'Transforming Shapes with Equal Areas',
          questions: [
            {
              id: 's2-q1',
              type: 'multiple-choice',
              text: 'What was the famous geometric problem solved in Baudhayana’s Sulba Sutra?',
              explanation: 'Squaring the circle and circling the square: creating a square with an area equal to a given circle using only a pegged rope.',
              options: [
                { id: 'squaring', text: 'Constructing a square of area equal to a circle with a rope', icon: '⭕' },
                { id: 'triangles', text: 'Counting the stars with water drops', icon: '✨' },
              ],
              correctId: 'squaring',
            },
          ],
        },
      ],
    },
    {
      id: 'scholar-p3',
      title: 'Phase 3: Pingala & Binary Combinatorics',
      type: 'learning',
      subLessons: [
        {
          id: 's-p3-s1',
          title: 'The Meru Prastara Diagram',
          questions: [
            {
              id: 's3-q1',
              type: 'multiple-choice',
              text: 'How did Pingala arrange number layers in the Meru Prastara?',
              explanation: 'Each row begins and ends with 1, and each internal number is the sum of the two above it, identical to the binomial triangle.',
              options: [
                { id: 'sum', text: 'Each number is the sum of the two directly above it', icon: '🔺' },
                { id: 'mult', text: 'Each number multiplies the row index by 10', icon: '✖️' },
              ],
              correctId: 'sum',
            },
          ],
        },
      ],
    },
    {
      id: 'scholar-p4',
      title: 'Phase 4: Review: Foundations of Indian Algebra',
      type: 'review',
      subLessons: [
        {
          id: 's-p4-s1',
          title: 'Mastery of Sequences and Symmetries',
          questions: [
            {
              id: 's4-q1',
              type: 'pattern-completion',
              text: 'Find the next number in the Virahanka-Fibonacci sequence: 1, 2, 3, 5, 8, 13, 21, ?',
              pattern: ['5', '8', '13', '21', '34'],
              missingIndex: 4,
              options: ['34', '29', '31', '40'],
              correctOption: '34',
              explanation: '13 + 21 = 34! The golden sequence continues infinitely.',
            },
          ],
        },
      ],
    },
    {
      id: 'scholar-p5',
      title: 'Phase 5: Aryabhata’s Trigonometry & Pi',
      type: 'learning',
      subLessons: [
        {
          id: 's-p5-s1',
          title: 'The Jya Function (Origins of Sine)',
          questions: [
            {
              id: 's5-q1',
              type: 'multiple-choice',
              text: 'What did the word "Sine" in modern trigonometry originate from?',
              explanation: 'Aryabhata coined "Jya-ardha" (half-chord) or "Jya", which Arabic scholars transliterated as "Jiba", translated into Latin as "Sinus" (bay/curve).',
              options: [
                { id: 'jya', text: 'From Aryabhata’s Sanskrit half-chord term "Jya"', icon: '🏹' },
                { id: 'greek', text: 'From a Latin word for straight line', icon: '📏' },
              ],
              correctId: 'jya',
            },
          ],
        },
      ],
    },
    {
      id: 'scholar-p6',
      title: 'Phase 6: Brahmagupta & The Arithmetic of Zero',
      type: 'learning',
      subLessons: [
        {
          id: 's-p6-s1',
          title: 'Positive, Negative & Shunya',
          questions: [
            {
              id: 's6-q1',
              type: 'multiple-choice',
              text: 'How did Brahmagupta poetically describe positive and negative numbers?',
              explanation: 'Brahmagupta referred to positive numbers as Fortune (Dhana) and negative numbers as Debt (Rina). A debt minus zero is debt!',
              options: [
                { id: 'fortune', text: 'Fortune (Dhana) and Debt (Rina)', icon: '⚖️' },
                { id: 'day', text: 'Daylight and Night darkness', icon: '🌗' },
              ],
              correctId: 'fortune',
            },
          ],
        },
      ],
    },
    {
      id: 'scholar-p7',
      title: 'Phase 7: Bhaskara II & The Lilavati Riddles',
      type: 'learning',
      subLessons: [
        {
          id: 's-p7-s1',
          title: 'Lilavati’s Poetic Problems',
          questions: [
            {
              id: 's7-q1',
              type: 'multiple-choice',
              text: 'Who was the math classic "Lilavati" written for?',
              explanation: 'Bhaskara II wrote the book for his daughter Lilavati, making complex math playful and full of warm affection.',
              options: [
                { id: 'daughter', text: 'His daughter Lilavati, to teach her playful mathematics', icon: '🌸' },
                { id: 'general', text: 'The army general to count spear formations', icon: '🛡️' },
              ],
              correctId: 'daughter',
            },
          ],
        },
      ],
    },
    {
      id: 'scholar-p8',
      title: 'Phase 8: Review: Geometric Harmony & Zero',
      type: 'review',
      subLessons: [
        {
          id: 's-p8-s1',
          title: 'Scholastic Mastery Check',
          questions: [
            {
              id: 's8-q1',
              type: 'fill-blanks',
              text: 'Fill in the name of the Khajuraho magic square where all directions equal 34:',
              sentence: 'The famous 4x4 Khajuraho magic square is called the __BLANK__ Yantra.',
              wordTiles: ['Chautisa', 'Sri', 'Shunya', 'Meru'],
              correctWord: 'Chautisa',
              explanation: 'Chautis means 34 in Hindi/Sanskrit dialects, giving the yantra its timeless name.',
            },
          ],
        },
      ],
    },
    {
      id: 'scholar-p9',
      title: 'Phase 9: The Madhava-Kerala School of Calculus',
      type: 'learning',
      subLessons: [
        {
          id: 's-p9-s1',
          title: 'Infinite Series for Pi and Trigonometry',
          questions: [
            {
              id: 's9-q1',
              type: 'multiple-choice',
              text: 'What did Madhava of Sangamagrama (c. 1350 CE) discover 250 years before Newton and Leibniz?',
              explanation: 'Madhava developed infinite series approximations for Pi and sine/cosine functions, founding mathematical analysis.',
              options: [
                { id: 'infinite', text: 'Infinite series expansions for Pi, Sine, and Cosine', icon: '♾️' },
                { id: 'solar', text: 'The modern electric telegraph', icon: '⚡' },
              ],
              correctId: 'infinite',
            },
          ],
        },
      ],
    },
    {
      id: 'scholar-p10',
      title: 'Phase 10: Master Review: The Scholar’s Capstone',
      type: 'review',
      subLessons: [
        {
          id: 's-p10-s1',
          title: 'Master Mathematician of Ancient India',
          questions: [
            {
              id: 's10-q1',
              type: 'multiple-choice',
              text: 'Why is the Indian decimal numeral system with Zero considered one of humanity’s greatest inventions?',
              explanation: 'Place value with Zero allows every number, from 1 to trillions, to be expressed using only ten symbols with effortless arithmetic.',
              options: [
                { id: 'universal', text: 'It enables expressing any magnitude with just 10 digits and place value', icon: '🌟' },
                { id: 'letters', text: 'It required memorizing thousands of separate hieroglyph symbols', icon: '🪨' },
              ],
              correctId: 'universal',
            },
          ],
        },
      ],
    },
  ],
}

