import type { EnvironmentCurriculum } from '../engine/types'

export const WORKSHOP_CURRICULUM: EnvironmentCurriculum = {
  environmentId: 'workshop',
  environmentName: 'The Workshop: Geometry, Craft & Structures',
  phases: [
    {
      id: 'workshop-p1',
      title: 'Phase 1: Mortarless Stone Joinery & Arches',
      type: 'learning',
      subLessons: [
        {
          id: 'w-p1-s1',
          title: 'The Principles of Kadalika-Karana (Corbelling)',
          learningObjective: 'Discover how ancient Indian master architects built towering temples and arches without a single drop of mortar.',
          coverIllustrationKey: 'corbelArch',
          questions: [
            {
              id: 'w1-q1',
              type: 'multiple-choice',
              text: 'How were ancient Indian stone temple gateways and corridors constructed without using cement or mortar?',
              hint: 'Each layer of stone steps slightly inward to counterbalance the weight above.',
              explanation: 'Kadalika-karana (corbelling) cantilevered horizontal stone blocks inward layer by layer until they met at the central locking capstone, held entirely by gravity and compressive balance.',
              options: [
                { id: 'corbel', text: 'Corbelling: stepping stones inward under compressive balance', subtitle: 'Kadalika-karana stone joinery', illustrationKey: 'corbelArch' },
                { id: 'brick', text: 'Harappan 1:2:4 baked bricks with lime mortar seams', subtitle: 'Brick masonry technique', illustrationKey: 'harappanBrick' },
                { id: 'cramp', text: 'Butterfly iron cramps alone without stone balance', subtitle: 'Metal joinery clamp', illustrationKey: 'butterflyCramp' },
              ],
              correctId: 'corbel',
            },
            {
              id: 'w1-q2',
              type: 'fill-blanks',
              text: 'Complete the sentence about ancient Harappan brick proportions (2500 BCE):',
              hint: 'Thickness : Width : Length followed the golden mathematical ratio 1:2:4.',
              explanation: 'Standard Harappan kiln-baked bricks adhered strictly to the 1 : 2 : 4 dimensional ratio (e.g., 7 cm × 14 cm × 28 cm), enabling durable interlocking header-and-stretcher bonding.',
              sentence: 'Harappan kiln-baked bricks across all cities followed a strict standard dimensional ratio of 1 : 2 : __BLANK__.',
              wordTiles: ['4', '3', '6', '8'],
              correctWord: '4',
            },
            {
              id: 'w1-q3',
              type: 'matching',
              text: 'Match each Indian architectural wonder with its engineering hallmark:',
              hint: 'Think about 80-ton granite apex stones, rock-cut monoliths, and iron metallurgy.',
              explanation: 'Indian temple architecture achieved astonishing feats of balance, monolithic excavation, and rust-resistant metallurgy.',
              pairs: [
                { left: 'Brihadisvara Temple, Thanjavur', right: '80-ton monolithic granite capstone placed without mortar' },
                { left: 'Kailasa Temple, Ellora', right: 'Single multi-storey mountain carved top-down from living basalt' },
                { left: 'Iron Pillar of Delhi', right: 'Forge-welded wrought iron resisting rust for 1,600 years' },
                { left: 'Sun Temple, Konark', right: 'Magnetically aligned iron beams in a colossal chariot structure' },
              ],
            },
            {
              id: 'w1-q4',
              type: 'ordering',
              text: 'Arrange the sequence of assembling a classical mortarless corbelled temple archway:',
              hint: 'Base piers first → stepped cantilevers → central locking keystone.',
              explanation: 'A corbel arch requires stable vertical piers, stepped bracket courses, and finally the central capstone to lock the inward thrust.',
              correctOrder: [
                'Erect solid vertical granite piers on bedrock foundation',
                'Place first stepped cantilever stones projecting slightly inward',
                'Add second inward bracket layer counterbalanced by rear weight',
                'Drop the heavy central capstone (Shikhara stone) into place to lock compression',
              ],
              shuffledItems: [
                'Drop the heavy central capstone (Shikhara stone) into place to lock compression',
                'Erect solid vertical granite piers on bedrock foundation',
                'Add second inward bracket layer counterbalanced by rear weight',
                'Place first stepped cantilever stones projecting slightly inward',
              ],
            },
            {
              id: 'w1-q5',
              type: 'image-id',
              text: 'Which stone joinery technique used butterfly-shaped iron or wooden cramps to connect granite blocks without mortar?',
              hint: 'Look for the double-dovetail bowtie notch holding two adjacent stones.',
              explanation: 'Butterfly clamps (Dovetail cramps) interlocked adjacent stone blocks, allowing structures to absorb seismic vibrations without cracking brittle mortar.',
              illustration: {
                viewBox: '0 0 340 140',
                elements: `
                  <rect x="50" y="30" width="115" height="70" fill="#FAF4E6" stroke="#9A8A78" strokeWidth="2" />
                  <rect x="175" y="30" width="115" height="70" fill="#FAF4E6" stroke="#9A8A78" strokeWidth="2" />
                  <!-- Butterfly clamp -->
                  <polygon points="140,50 160,65 140,80 200,80 180,65 200,50" fill="#B96F4B" stroke="#9A5A38" strokeWidth="1.5" />
                  <text x="170" y="125" fill="#40382F" fontSize="11" fontWeight="bold" textAnchor="middle">Butterfly / Dovetail Stone Cramp</text>
                `,
                bgColor: '#F5EFE6',
              },
              options: [
                { id: 'dovetail', text: 'Butterfly / Dovetail Interlocking Cramp' },
                { id: 'mortar', text: 'Liquid Plastic Glue' },
              ],
              correctId: 'dovetail',
            },
            {
              id: 'w1-q6',
              type: 'multiple-choice',
              text: 'How did Chola engineers transport the monumental 80-ton granite Kumbam stone to the 66-meter apex of the Brihadisvara Temple?',
              hint: 'They constructed an earthen incline stretching several kilometers.',
              explanation: 'According to tradition, builders constructed a 4 to 6 km long gently sloping earthen ramp (at Sarapallam) so elephants and rollers could haul the 80-ton apex stone to the top.',
              options: [
                { id: 'ramp', text: 'A long, gently sloping earthen ramp using rollers and elephant power', icon: '🐘' },
                { id: 'crane', text: 'Modern steam-powered steel cranes', icon: '🏗️' },
                { id: 'balloon', text: 'Hot air transport balloons', icon: '🎈' },
              ],
              correctId: 'ramp',
            },
            {
              id: 'w1-q7',
              type: 'scenario',
              text: 'In the workshop yard, an apprentice is placing cantilevered stones for a doorway arch. The left stone tips and falls inward. What was the mistake?',
              explanation: 'In corbelling, the rear anchor portion of the stone extending backward must weigh significantly more than the overhanging forward projection.',
              scenarioText: 'A cantilever stone tilted and slipped forward during test assembly without a counterweight.',
              decisions: [
                {
                  id: 'counterweight',
                  text: 'Ensure the rear embedded section has greater length and mass than the projecting lip.',
                  consequence: 'The stone balances solidly in equilibrium, supporting the next layer above effortlessly!',
                },
                {
                  id: 'push',
                  text: 'Push it further outward and lean a stick against it.',
                  consequence: 'The unbalanced weight causes a collapse under the slightest load.',
                },
              ],
              bestId: 'counterweight',
            },
            {
              id: 'w1-q8',
              type: 'pattern-completion',
              text: 'Complete the traditional Indian units of anatomical architecture measurement: (Angula → Vitasti → ?)',
              hint: 'Finger breadth (Angula) → Span of hand (Vitasti) → Forearm cubit (Hasta).',
              explanation: 'Silpa Sastras standardized proportional measures based on the human body: 1 Angula (finger width) → 12 Angulas = 1 Vitasti (handspan) → 2 Vitastis = 1 Hasta (cubit, ~18 inches).',
              pattern: ['1. Angula (Finger)', '2. Vitasti (Handspan)', '3. Hasta (Cubit)', '4. Danda (Staff)'],
              missingIndex: 2,
              options: ['3. Hasta (Cubit)', '3. Footstep', '3. Kilometer', '3. Millimeter'],
              correctOption: '3. Hasta (Cubit)',
            },
            {
              id: 'w1-q9',
              type: 'interactive-challenge',
              text: 'Test the corbelled arch overhang proportion: What is the maximum safe inward projection ratio for each stone layer (typically 1/3 or ~33% overhang)?',
              hint: 'Keeping the overhang around 30% to 35% ensures the center of mass remains firmly on the rear support.',
              explanation: 'Overhanging by approximately 33% ensures two-thirds of the stone’s weight counterbalances downward onto the pier below.',
              challengeKind: 'slider',
              config: {
                min: 10,
                max: 70,
                step: 5,
                unit: '% Overhang',
                label: 'Cantilever Ratio',
                initial: 20,
              },
              correctValue: '35',
            },
            {
              id: 'w1-q10',
              type: 'fill-blanks',
              text: 'What ancient Sanskrit canon of architecture and proportion guided town planning and temple design?',
              hint: 'Vastu means dwelling or habitat, Shastra means scientific treatise.',
              explanation: 'The Vastu Shastra and Manasara detailed proportional modules, directional orientation, foundation acoustics, and stone selection.',
              sentence: 'The classical Indian treatise on design, sacred geometry, and building layout is called __BLANK__.',
              wordTiles: ['Vastu Shastra', 'Chhandas', 'Natya Shastra', 'Ayurveda'],
              correctWord: 'Vastu Shastra',
            },
            {
              id: 'w1-q11',
              type: 'multiple-choice',
              text: 'Why did Harappan city builders (2500 BCE) lay streets in a strict cardinal North-South and East-West grid pattern?',
              hint: 'Grid alignment harnesses prevailing seasonal winds to naturally ventilate homes and flush covered brick drains.',
              explanation: 'Harappan grid planning allowed prevailing winds to naturally ventilate town corridors and ensured uniform gravity slope for underground brick sewers.',
              options: [
                { id: 'grid', text: 'To maximize natural wind ventilation and maintain gravity drainage in sewers', icon: '🌬️' },
                { id: 'random', text: 'They had no plan and built haphazardly', icon: '❓' },
              ],
              correctId: 'grid',
            },
            {
              id: 'w1-q12',
              type: 'multiple-choice',
              text: 'How was the Kailasa Temple at Ellora (Cave 16) uniquely excavated from the Charanandri hills?',
              hint: 'Unlike normal buildings built from the ground up, sculptors carved this temple from the top mountain down!',
              explanation: 'Sculptors carved 200,000 tons of solid volcanic basalt top-to-bottom over a century, meaning zero architectural mistakes could ever be patched with new stone!',
              options: [
                { id: 'topdown', text: 'Top-down monolithic rock excavation removing 200,000 tons of basalt rock', icon: '⛏️' },
                { id: 'bricks', text: 'Assembled out of mud bricks transported by boat', icon: '🧱' },
              ],
              correctId: 'topdown',
            },
          ],
        },
      ],
    },
    {
      id: 'workshop-p2',
      title: 'Phase 2: The Harappan Standard (1:2:4)',
      type: 'learning',
      subLessons: [
        {
          id: 'w-p2-s1',
          title: 'Modular Bricks & Covered Sanitation',
          questions: [
            {
              id: 'w2-q1',
              type: 'multiple-choice',
              text: 'What made Harappan municipal drainage systems the most advanced in the ancient world?',
              explanation: 'Every house connected via terracotta pipes to covered street sewers fitted with inspection manholes and silt traps.',
              options: [
                { id: 'covered', text: 'Covered brick drains with inspection sumps and terracotta house connections', icon: '💧' },
                { id: 'open', text: 'Open ditches dumping waste into central markets', icon: '🕳️' },
              ],
              correctId: 'covered',
            },
          ],
        },
      ],
    },
    {
      id: 'workshop-p3',
      title: 'Phase 3: Granite Mastery at Thanjavur',
      type: 'learning',
      subLessons: [
        {
          id: 'w-p3-s1',
          title: 'Rajaraja Chola’s Monumental Tower',
          questions: [
            {
              id: 'w3-q1',
              type: 'multiple-choice',
              text: 'Why did the Brihadisvara Temple use hard volcanic granite when no granite quarries existed within 50 km?',
              explanation: 'Granite resists weathering, erosion, and seismic tremors, ensuring the monument stands as an eternal symbol of endurance.',
              options: [
                { id: 'endurance', text: 'Granite’s exceptional compressive strength ensures timeless durability for millennia', icon: '🪨' },
                { id: 'soft', text: 'Granite is as soft as chalk and cuts easily with fingernails', icon: '✏️' },
              ],
              correctId: 'endurance',
            },
          ],
        },
      ],
    },
    {
      id: 'workshop-p4',
      title: 'Phase 4: Review: Engineering & Joinery',
      type: 'review',
      subLessons: [
        {
          id: 'w-p4-s1',
          title: 'Builder’s Midterm Assessment',
          questions: [
            {
              id: 'w4-q1',
              type: 'fill-blanks',
              text: 'Fill in the traditional Sanskrit term for the corbelled stepped arch:',
              sentence: 'The Indian corbelled arching method without mortar is called __BLANK__.',
              wordTiles: ['Kadalika-karana', 'Shikhara', 'Vimana', 'Mandapa'],
              correctWord: 'Kadalika-karana',
              explanation: 'Kadalika-karana allowed architects to span huge temple halls and gateways safely.',
            },
          ],
        },
      ],
    },
    {
      id: 'workshop-p5',
      title: 'Phase 5: Monolithic Sculpting at Ellora & Mahabalipuram',
      type: 'learning',
      subLessons: [
        {
          id: 'w-p5-s1',
          title: 'Carving Entire Temples from Living Rock',
          questions: [
            {
              id: 'w5-q1',
              type: 'multiple-choice',
              text: 'What are the five monolithic chariot temples at Mahabalipuram carved from sea boulders called?',
              explanation: 'The Pancha Rathas (c. 7th century Pallava dynasty) are rock-cut monolithic sanctuaries carved from single coastal whaleback rocks.',
              options: [
                { id: 'rathas', text: 'The Pancha Rathas (Five Rock Chariots)', icon: '🏛️' },
                { id: 'castles', text: 'The Castles of Wood', icon: '🪵' },
              ],
              correctId: 'rathas',
            },
          ],
        },
      ],
    },
    {
      id: 'workshop-p6',
      title: 'Phase 6: Metallurgy of Ancient India',
      type: 'learning',
      subLessons: [
        {
          id: 'w-p6-s1',
          title: 'Wootz Steel & The Rustless Iron Pillar',
          questions: [
            {
              id: 'w6-q1',
              type: 'multiple-choice',
              text: 'What ancient crucible steel developed in Southern India was famed worldwide for Damascus swords?',
              explanation: 'Wootz steel (Ukku) was renowned for its high carbon content, microscopic carbon nanotubes, and distinctive rippling water patterns.',
              options: [
                { id: 'wootz', text: 'Wootz Steel (Ukku)', icon: '🗡️' },
                { id: 'tin', text: 'Soft Pewter Tin', icon: '🥫' },
              ],
              correctId: 'wootz',
            },
          ],
        },
      ],
    },
    {
      id: 'workshop-p7',
      title: 'Phase 7: Lost-Wax Bronze Casting (Chola Bronzes)',
      type: 'learning',
      subLessons: [
        {
          id: 'w-p7-s1',
          title: 'The Cire Perdue Technique (Madhuchishtavidhana)',
          questions: [
            {
              id: 'w7-q1',
              type: 'multiple-choice',
              text: 'How does the ancient "Lost-Wax" process create hollow or solid bronze masterworks like the Nataraja?',
              explanation: 'A beeswax model is sculpted, coated in clay, fired so wax drains out, and molten bronze is poured into the hollow cavity.',
              options: [
                { id: 'lostwax', text: 'A beeswax sculpture is melted out of a baked clay mold, replaced with molten bronze', icon: '🔥' },
                { id: 'hammer', text: 'Cold bronze sheets are simply hammered flat with stones', icon: '🔨' },
              ],
              correctId: 'lostwax',
            },
          ],
        },
      ],
    },
    {
      id: 'workshop-p8',
      title: 'Phase 8: Review: Metallurgy & Sculpture',
      type: 'review',
      subLessons: [
        {
          id: 'w-p8-s1',
          title: 'Synthesis of Craft & Physics',
          questions: [
            {
              id: 'w8-q1',
              type: 'matching',
              text: 'Match the ancient craft tradition with its signature material:',
              hint: 'Think about high carbon steel, beeswax molds, and granite clamps.',
              explanation: 'Ancient Indian artisans combined material chemistry with exquisite artistic aesthetics.',
              pairs: [
                { left: 'Wootz', right: 'High-carbon crucible steel with nanostructured carbide bands' },
                { left: 'Cire Perdue', right: 'Lost-wax bronze casting for sacred temple sculptures' },
                { left: 'Kadalika', right: 'Corbelled stone joinery without mortar' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'workshop-p9',
      title: 'Phase 9: Acoustic Pillars & Musical Architecture',
      type: 'learning',
      subLessons: [
        {
          id: 'w-p9-s1',
          title: 'Resonant Pillars of Hampi & Madurai',
          questions: [
            {
              id: 'w9-q1',
              type: 'multiple-choice',
              text: 'What is unique about the monolithic granite pillars at the Vijayanagara Vittala Temple in Hampi?',
              explanation: 'When tapped gently, the 56 monolithic clusters of slender granite pillars resonate with the distinct musical notes of classical Indian instruments (Saptaswara).',
              options: [
                { id: 'musical', text: 'They resonate with musical notes (Saptaswara) when tapped', icon: '🎵' },
                { id: 'clock', text: 'They rotate like mechanical clock hands', icon: '⏰' },
              ],
              correctId: 'musical',
            },
          ],
        },
      ],
    },
    {
      id: 'workshop-p10',
      title: 'Phase 10: Master Review: Master Builder’s Seal',
      type: 'review',
      subLessons: [
        {
          id: 'w10-q1',
          title: 'Master Architect’s Capstone',
          questions: [
            {
              id: 'w10-q1',
              type: 'scenario',
              text: 'You are supervising the construction of a ceremonial stone gateway for the kingdom. How do you ensure the structure withstands seasonal earthquakes?',
              explanation: 'Interlocking butterfly cramps and dry corbelling allow dynamic flexible damping under seismic waves without structural crumbling.',
              scenarioText: 'The region experiences occasional earth tremors. Your stonemasons propose two foundation methods.',
              decisions: [
                {
                  id: 'interlock',
                  text: 'Use interlocking dovetail stone joinery and corbelled dry stone courses with gravity counterweights.',
                  consequence: 'The flexible joints absorb earthquake vibrations gracefully, enduring for centuries!',
                },
                {
                  id: 'brittle',
                  text: 'Smear thin brittle lime paste between un-keyed stones without interlocking notches.',
                  consequence: 'The first tremor cracks the brittle seams, causing the archway to collapse.',
                },
              ],
              bestId: 'interlock',
            },
          ],
        },
      ],
    },
  ],
}

