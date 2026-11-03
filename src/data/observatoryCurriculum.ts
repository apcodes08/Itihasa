import type { EnvironmentCurriculum } from '../engine/types'

export const OBSERVATORY_CURRICULUM: EnvironmentCurriculum = {
  environmentId: 'observatory',
  environmentName: 'The Observatory: Sun, Shadows & Time',
  phases: [
    {
      id: 'observatory-p1',
      title: 'Phase 1: Shadow Clocks & Celestial Cycles',
      type: 'learning',
      subLessons: [
        {
          id: 'o-p1-s1',
          title: 'The Calibrated Gnomon (Shanku Yantra)',
          learningObjective: 'Observe shadow shifts, calibrate the Shanku sundial, and discover Aryabhata’s model of Earth’s rotation.',
          coverIllustrationKey: 'shankuSundial',
          questions: [
            {
              id: 'o1-q1',
              type: 'multiple-choice',
              text: 'What happens to the shadow cast by a vertical stone pillar (Shanku) at exact Solar Noon (Madhyahna)?',
              hint: 'When the sun reaches its highest point in the sky directly above.',
              explanation: 'At true solar noon, the sun reaches its zenith; the shadow reaches its minimum length of the day and aligns with the North-South meridian line.',
              options: [
                { id: 'shortest', text: 'Shadow reaches shortest length pointing North', subtitle: 'Sun reaches its highest sky zenith', illustrationKey: 'shankuSundial' },
                { id: 'longest', text: 'Shadow stretches to its maximum evening length', subtitle: 'Sun setting low along the horizon', illustrationKey: 'samratYantra' },
                { id: 'vanishes', text: 'Shadow turns into a circle around the pillar', subtitle: 'Diffused light under overcast clouds', illustrationKey: 'rotatingEarth' },
              ],
              correctId: 'shortest',
            },
            {
              id: 'o1-q2',
              type: 'fill-blanks',
              text: 'Complete the sentence about ancient Indian time units:',
              hint: 'A Ghatika equals 24 modern minutes (one-sixtieth of a day).',
              explanation: 'In classical Indian timekeeping, a day (Ahoratra) was divided into 60 Ghatikas (each equivalent to 24 minutes), measured using water bowl clocks (Ghatika Yantra).',
              sentence: 'In classical Indian astronomy, a traditional time unit equal to 24 minutes is called a __BLANK__.',
              wordTiles: ['Ghatika', 'Yojana', 'Hasta', 'Ratti'],
              correctWord: 'Ghatika',
            },
            {
              id: 'o1-q3',
              type: 'matching',
              text: 'Match each Indian astronomical instrument (Yantra) with its function:',
              hint: 'Think about shadow triangles, water bowls, rings, and astrolabes.',
              explanation: 'Sawai Jai Singh and ancient astronomers built stone yantras of immense precision without metal gears.',
              pairs: [
                { left: 'Samrat Yantra', right: 'Giant triangular sundial measuring time to 2 seconds' },
                { left: 'Ghatika Yantra', right: 'Sinking water bowl measuring 24-minute intervals' },
                { left: 'Chakra Yantra', right: 'Graduated circular ring measuring planet declination' },
                { left: 'Shanku Yantra', right: 'Vertical calibrated gnomon tracking solar altitude' },
              ],
            },
            {
              id: 'o1-q4',
              type: 'interactive-challenge',
              text: 'Move the solar slider to identify true Solar Noon (Zenith position at 50% across the sky):',
              hint: 'Slide the marker to 50% where the sun is at the exact center of its daily arc.',
              explanation: 'At 50% (midpoint of the solar arc), the sun crosses the local meridian, giving local apparent noon.',
              challengeKind: 'slider',
              config: {
                min: 0,
                max: 100,
                step: 5,
                unit: '% Arc',
                label: 'Sun Altitude',
                initial: 20,
              },
              correctValue: '50',
            },
            {
              id: 'o1-q5',
              type: 'multiple-choice',
              text: 'What groundbreaking realization did Aryabhata announce in 499 CE regarding the daily rising and setting of stars?',
              hint: 'He compared it to a person sitting in a moving boat looking at trees on the riverbank.',
              explanation: 'Aryabhata explained that just as trees seem to move backwards to a person in a forward-moving boat, the stars seem to rotate west because Earth rotates eastward on its axis!',
              options: [
                { id: 'rotation', text: 'The Earth rotates eastward on its own axis, creating the illusion of moving stars', icon: '🌍' },
                { id: 'flat', text: 'The Earth rests stationary on the backs of four giant elephants', icon: '🐘' },
                { id: 'dome', text: 'The sky is a solid glass bowl pulled by celestial horses', icon: '🔮' },
              ],
              correctId: 'rotation',
            },
            {
              id: 'o1-q6',
              type: 'image-id',
              text: 'Which astronomical monument built in Jaipur in the 18th century holds the world’s largest stone sundial?',
              hint: 'Jantar Mantar features the 27-meter-tall Samrat Yantra.',
              explanation: 'The UNESCO-listed Jantar Mantar at Jaipur was built by astronomer king Sawai Jai Singh II and remains an architectural masterpiece of naked-eye astronomy.',
              illustration: {
                viewBox: '0 0 340 140',
                elements: `
                  <!-- Samrat yantra ramp -->
                  <polygon points="60,110 240,110 240,30" fill="#B96F4B" stroke="#9A5A38" strokeWidth="2" />
                  <!-- Quadrant arc -->
                  <path d="M 120 110 A 70 70 0 0 0 240 70" stroke="#7A8450" strokeWidth="6" fill="none" />
                  <text x="170" y="130" fill="#40382F" fontSize="11" fontWeight="bold" textAnchor="middle">Samrat Yantra (Jantar Mantar, Jaipur)</text>
                `,
                bgColor: '#F5EFE6',
              },
              options: [
                { id: 'jantar', text: 'Jantar Mantar (Jaipur / Delhi)' },
                { id: 'taj', text: 'Taj Mahal' },
                { id: 'qutub', text: 'Iron Pillar of Delhi' },
              ],
              correctId: 'jantar',
            },
            {
              id: 'o1-q7',
              type: 'ordering',
              text: 'Arrange the progression of the sun’s daily shadow from dawn to dusk:',
              hint: 'Morning shadow points West → shortens at Noon → points East in Evening.',
              explanation: 'Because the sun rises in the East and sets in the West, shadows point in the exact opposite direction: Long West → Short North → Long East.',
              correctOrder: [
                'Early morning: Long shadow pointing toward the West',
                'Mid-morning: Shadow shortens and turns North-West',
                'Solar Noon: Shortest shadow pointing directly North',
                'Late afternoon: Long shadow stretching toward the East',
              ],
              shuffledItems: [
                'Solar Noon: Shortest shadow pointing directly North',
                'Early morning: Long shadow pointing toward the West',
                'Late afternoon: Long shadow stretching toward the East',
                'Mid-morning: Shadow shortens and turns North-West',
              ],
            },
            {
              id: 'o1-q8',
              type: 'scenario',
              text: 'A merchant caravan lost in the scrubland at midday needs to find True North without a magnetic compass. How can they use a stick?',
              explanation: 'The Indian Circle method: mark the tip of the gnomon’s shadow before noon and afternoon along a drawn circle; the bisector yields true cardinal North.',
              scenarioText: 'The sun is blazing overhead. The caravan has a straight walking staff and some chalk.',
              decisions: [
                {
                  id: 'gnomon',
                  text: 'Plant the stick upright and find the shortest shadow line; it aligns with the North-South meridian.',
                  consequence: 'The shortest shadow points directly toward true North, guiding the caravan safely home!',
                },
                {
                  id: 'wind',
                  text: 'Walk in whichever direction the wind is blowing at noon.',
                  consequence: 'Erratic desert breezes lead the travelers in circles.',
                },
              ],
              bestId: 'gnomon',
            },
            {
              id: 'o1-q9',
              type: 'pattern-completion',
              text: 'Complete the sequence of the 27 lunar mansions (Nakshatras) traversed by the Moon every month:',
              hint: 'Ashwini (1) → Bharani (2) → Krittika (3) → ?',
              explanation: 'The Indian zodiac divides the ecliptic into 27 Nakshatras: Ashwini → Bharani → Krittika → Rohini (the Red Giant star Aldebaran).',
              pattern: ['1. Ashwini', '2. Bharani', '3. Krittika', '4. Rohini'],
              missingIndex: 3,
              options: ['4. Rohini', '4. Magha', '4. Swati', '4. Chitra'],
              correctOption: '4. Rohini',
            },
            {
              id: 'o1-q10',
              type: 'fill-blanks',
              text: 'What ancient astronomical treatise authored by Varahamihira synthesized five earlier schools of Indian astronomy?',
              hint: 'Pancha means five, Siddhanta means astronomical principles.',
              explanation: 'The Panchasiddhantika (c. 505 CE) by Varahamihira compiled the Surya, Romaka, Paulisa, Vasishtha, and Paitamaha astronomical traditions.',
              sentence: 'The famous astronomical encyclopedia compiled by Varahamihira is the __BLANK__.',
              wordTiles: ['Panchasiddhantika', 'Aryabhatiya', 'Lilavati', 'Charaka'],
              correctWord: 'Panchasiddhantika',
            },
            {
              id: 'o1-q11',
              type: 'multiple-choice',
              text: 'How did ancient Indian astronomers correctly explain solar and lunar eclipses (Grahan)?',
              hint: 'Aryabhata rejected mythological demons and gave the geometric shadow explanation in 499 CE.',
              explanation: 'Aryabhata proved that a lunar eclipse occurs when the Moon enters Earth’s shadow, and a solar eclipse occurs when the Moon obscures the Sun.',
              options: [
                { id: 'shadow', text: 'Geometric shadows cast by the Earth and Moon blocking sunlight', icon: '🌑' },
                { id: 'demon', text: 'Invisible dragons swallowing the sun permanently', icon: '🐉' },
                { id: 'clouds', text: 'Thunder clouds freezing in space', icon: '❄️' },
              ],
              correctId: 'shadow',
            },
            {
              id: 'o1-q12',
              type: 'multiple-choice',
              text: 'What is the Sanskrit term for the celestial equator and the prime meridian passing through Ujjain?',
              hint: 'Ujjain was the Greenwich of ancient Indian astronomy.',
              explanation: 'The city of Ujjain was the historical prime meridian (0° longitude) for Indian astronomical calculations and observatory charts.',
              options: [
                { id: 'ujjain', text: 'The Prime Meridian of Ujjain (Avanti)', icon: '🧭' },
                { id: 'patna', text: 'The Bay of Bengal Baseline', icon: '🌊' },
                { id: 'kerala', text: 'The Cape Comorin Coast', icon: '🏖️' },
              ],
              correctId: 'ujjain',
            },
          ],
        },
      ],
    },
    {
      id: 'observatory-p2',
      title: 'Phase 2: Aryabhata & The Rotating Earth',
      type: 'learning',
      subLessons: [
        {
          id: 'o-p2-s1',
          title: 'The Boat Analogy of Relative Motion',
          questions: [
            {
              id: 'o2-q1',
              type: 'multiple-choice',
              text: 'How long did Aryabhata calculate Earth’s single axial rotation to be?',
              explanation: 'Aryabhata calculated the sidereal rotation as 23 hours, 56 minutes, and 4.1 seconds—virtually identical to modern atomic clocks!',
              options: [
                { id: 'exact', text: '23 hours, 56 minutes, 4.1 seconds', icon: '⏱️' },
                { id: 'hours30', text: 'Exactly 30 hours and 15 minutes', icon: '⏳' },
              ],
              correctId: 'exact',
            },
          ],
        },
      ],
    },
    {
      id: 'observatory-p3',
      title: 'Phase 3: The 27 Nakshatras & Lunar Mansions',
      type: 'learning',
      subLessons: [
        {
          id: 'o-p3-s1',
          title: 'Mapping the Moon’s Nightly Path',
          questions: [
            {
              id: 'o3-q1',
              type: 'multiple-choice',
              text: 'How many degrees of the celestial arc does each Nakshatra encompass?',
              explanation: '360° divided equally by 27 Nakshatras equals exactly 13° 20’ per asterism.',
              options: [
                { id: 'deg13', text: '13 degrees and 20 minutes (13° 20’)', icon: '📐' },
                { id: 'deg45', text: '45 degrees', icon: '📏' },
              ],
              correctId: 'deg13',
            },
          ],
        },
      ],
    },
    {
      id: 'observatory-p4',
      title: 'Phase 4: Review: Celestial Cycles & Clocks',
      type: 'review',
      subLessons: [
        {
          id: 'o-p4-s1',
          title: 'Sky Watcher’s Midterm Assessment',
          questions: [
            {
              id: 'o4-q1',
              type: 'fill-blanks',
              text: 'Fill in the historical Indian meridian city:',
              sentence: 'The prime zero meridian of ancient Indian astronomy ran through the holy city of __BLANK__.',
              wordTiles: ['Ujjain', 'Varanasi', 'Kanchi', 'Hampi'],
              correctWord: 'Ujjain',
              explanation: 'Ujjain housed major observatories and marked the central reference longitude for calculating planetary positions.',
            },
          ],
        },
      ],
    },
    {
      id: 'observatory-p5',
      title: 'Phase 5: Equinoxes & Solstices (Ayanas)',
      type: 'learning',
      subLessons: [
        {
          id: 'o-p5-s1',
          title: 'Uttarayan & Dakshinayan',
          questions: [
            {
              id: 'o5-q1',
              type: 'multiple-choice',
              text: 'What does "Uttarayan" mark in the annual solar cycle?',
              explanation: 'Uttarayan marks the sun’s northward apparent journey from the winter solstice, celebrated across India during Makar Sankranti/Pongal.',
              options: [
                { id: 'north', text: 'The sun’s northward seasonal transition bringing longer spring days', icon: '☀️' },
                { id: 'eclipse', text: 'A total lunar eclipse lasting seven days', icon: '🌑' },
              ],
              correctId: 'north',
            },
          ],
        },
      ],
    },
    {
      id: 'observatory-p6',
      title: 'Phase 6: The Giant Instruments of Jantar Mantar',
      type: 'learning',
      subLessons: [
        {
          id: 'o-p6-s1',
          title: 'Stone Calculators of the Cosmos',
          questions: [
            {
              id: 'o6-q1',
              type: 'multiple-choice',
              text: 'Why did Sawai Jai Singh build observatories out of massive stone and marble instead of small brass telescopes?',
              explanation: 'Large masonry instruments did not bend, warp, or suffer thermal expansion like brass, achieving unprecedented naked-eye accuracy.',
              options: [
                { id: 'stone', text: 'Massive stone scales eliminated mechanical wobble and thermal bending', icon: '🏛️' },
                { id: 'paint', text: 'Solely to paint decorative murals on the walls', icon: '🎨' },
              ],
              correctId: 'stone',
            },
          ],
        },
      ],
    },
    {
      id: 'observatory-p7',
      title: 'Phase 7: Eclipse Geometry & Shadow Cones',
      type: 'learning',
      subLessons: [
        {
          id: 'o-p7-s1',
          title: 'Calculating the Earth’s Shadow Diameter',
          questions: [
            {
              id: 'o7-q1',
              type: 'multiple-choice',
              text: 'What optical shape does Earth’s shadow cast into space during a lunar eclipse?',
              explanation: 'The Earth casts a tapering cone-shaped shadow (Umbra) into space through which the Moon travels.',
              options: [
                { id: 'cone', text: 'A tapering conical shadow (Umbra)', icon: '🔺' },
                { id: 'cube', text: 'A hollow square cube', icon: '🧊' },
              ],
              correctId: 'cone',
            },
          ],
        },
      ],
    },
    {
      id: 'observatory-p8',
      title: 'Phase 8: Review: Precision Astronomy',
      type: 'review',
      subLessons: [
        {
          id: 'o-p8-s1',
          title: 'Synthesis of Space & Time',
          questions: [
            {
              id: 'o8-q1',
              type: 'matching',
              text: 'Match the ancient astronomical milestone with its discoverer:',
              hint: 'Think about Earth rotation, zero meridian, and five Siddhantas.',
              explanation: 'Indian astronomy flourished as an empirical science based on rigorous trigonometry and observation.',
              pairs: [
                { left: 'Aryabhata (499 CE)', right: 'Earth’s axial rotation & eclipse shadow theory' },
                { left: 'Varahamihira (505 CE)', right: 'Compendium of Five Astronomical Treatises' },
                { left: 'Sawai Jai Singh (1724 CE)', right: 'Monumental Samrat Yantra stone observatories' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'observatory-p9',
      title: 'Phase 9: Maritime Navigation by the Stars',
      type: 'learning',
      subLessons: [
        {
          id: 'o-p9-s1',
          title: 'Chola Sailors & The Pole Star (Dhruva)',
          questions: [
            {
              id: 'o9-q1',
              type: 'multiple-choice',
              text: 'How did ancient Indian maritime navigators (Nava-adhyakshas) determine latitude across the Indian Ocean?',
              explanation: 'By measuring the altitude of Dhruva (the Pole Star / Polaris) above the horizon using wooden sighting boards (Kamal).',
              options: [
                { id: 'pole', text: 'Measuring the elevation angle of the Pole Star (Dhruva) above the ocean horizon', icon: '⭐' },
                { id: 'current', text: 'Listening to underwater fish sounds', icon: '🐟' },
              ],
              correctId: 'pole',
            },
          ],
        },
      ],
    },
    {
      id: 'observatory-p10',
      title: 'Phase 10: Master Review: Astronomer Royal’s Seal',
      type: 'review',
      subLessons: [
        {
          id: 'o-p10-s1',
          title: 'Sky Watcher’s Supreme Mastery',
          questions: [
            {
              id: 'o10-q1',
              type: 'scenario',
              text: 'You are calibrating the Shanku sundial on the autumn equinox at the ridge observatory. How do you verify the true North line?',
              explanation: 'Marking the shadow points where morning and evening shadows intersect a drawn circle yields the exact cardinal axes.',
              scenarioText: 'The equinox sun rises due East and sets due West. You prepare the circular calibrated dial.',
              decisions: [
                {
                  id: 'circle',
                  text: 'Inscribe a circle around the Shanku, mark shadow entry and exit, and bisect the arc.',
                  consequence: 'The meridian is verified with flawless mathematical precision to true North!',
                },
                {
                  id: 'guess',
                  text: 'Eye-ball the stick position and hope for the best.',
                  consequence: 'Errors skew solar hour calculations throughout the winter.',
                },
              ],
              bestId: 'circle',
            },
          ],
        },
      ],
    },
  ],
}

