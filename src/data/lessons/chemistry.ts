import type { Lesson } from '../../types'

/** Chemistry lessons for the Learning Center — Grades 10-12, brief, clear, hack-packed. */
export const chemistryLessons: Lesson[] = [
  {
    id: 'chem-atoms-ions-periodic-table',
    subject: 'chemistry',
    grade: 10,
    title: 'Atoms, Ions & the Periodic Table',
    emoji: '⚛️',
    summary:
      'Count protons, neutrons and electrons for any atom or ion in seconds — and read the periodic table like the cheat sheet it secretly is.',
    sections: [
      {
        heading: 'The three particles',
        body:
          'Every atom is made of three particles:\n\n• Protons: positive, in the nucleus. The proton count (atomic number) IS the element\'s identity — change it and you have a different element.\n• Neutrons: neutral, in the nucleus. They add mass. Same element with different neutron counts = isotopes.\n• Electrons: negative, orbiting in shells. They are what gets gained or lost in bonding.\n\nMass number = protons + neutrons. In a NEUTRAL atom, electrons = protons.',
      },
      {
        heading: 'Ions: atoms with attitude',
        body:
          'Atoms gain or lose ELECTRONS (never protons) to get a full outer shell, becoming ions:\n\n• Lose electrons → positive ion (cation). Metals do this. Na loses 1 → Na⁺.\n• Gain electrons → negative ion (anion). Non-metals do this. Cl gains 1 → Cl⁻.\n\nThe charge tells you the electron change: Ca²⁺ lost 2 electrons; O²⁻ gained 2.\n\nWorked example: chlorine-35, as the ion Cl⁻.\n\n• Atomic number of Cl = 17 → 17 protons\n• Neutrons = mass − atomic number = 35 − 17 = 18\n• Electrons = 17 + 1 (the 1− charge means one EXTRA electron) = 18',
        tip: 'A 2+ charge means two electrons LOST, not gained. The sign tells you what happened to the negatives: fewer electrons → net positive.',
      },
      {
        heading: 'Reading the periodic table',
        body:
          'The table is organized so position predicts behaviour:\n\n• Columns (groups) have the same number of outer electrons → similar chemistry. Group 1 metals all form 1+ ions; group 17 halogens all form 1− ions; group 18 noble gases are already full and unreactive.\n• Rows (periods) count the electron shells.\n• Metals sit on the left, non-metals on the upper right, with a staircase of metalloids between.\n\nCommon ion charges by group: 1 → 1+, 2 → 2+, 13 → 3+, 15 → 3−, 16 → 2−, 17 → 1−.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Subtracting the wrong way for neutrons — it is always mass number minus atomic number.\n• Adding electrons for a positive ion (it should be fewer) or subtracting for a negative one.\n• Confusing atomic number with mass number on isotope notation: the small bottom number is protons, the big top number is protons + neutrons.\n• Saying isotopes differ in protons — isotopes differ in NEUTRONS only.',
      },
    ],
    tricks: [
      {
        name: 'APE MAN',
        trick:
          'Atomic number = Protons = Electrons (in a neutral atom): A-P-E. Mass − Atomic number = Neutrons: M-A-N. Two words, all three particle counts.',
      },
      {
        name: 'Cats are PAWsitive',
        trick:
          'CATion = positive ion (cats have paws → pawsitive). So the other one, ANion, is negative — or remember "A Negative ION" is literally hiding in the word ANION.',
      },
      {
        name: 'Group = glove size',
        trick:
          'Elements in the same column wear the same "glove" — the same number of outer electrons — so they bond the same way. Know one member of a group and you roughly know them all.',
      },
    ],
    formulas: [
      'mass number = protons + neutrons',
      'neutrons = mass number − atomic number',
      'ion charge = protons − electrons',
      'group predicts ion: 1→1+, 2→2+, 16→2−, 17→1−',
    ],
  },
  {
    id: 'chem-naming-balancing',
    subject: 'chemistry',
    grade: 10,
    title: 'Naming Compounds & Balancing Equations',
    emoji: '⚖️',
    summary:
      'Name any compound correctly and balance any equation without guessing — two skills that show up on every chemistry test for the next three years.',
    sections: [
      {
        heading: 'Naming ionic compounds (metal + non-metal)',
        body:
          'Name the metal first, then the non-metal with an -ide ending: NaCl = sodium chloride, MgO = magnesium oxide.\n\n• Multi-charge metals (like iron or copper) need a Roman numeral for the charge: Fe₂O₃ = iron(III) oxide, because it takes two Fe³⁺ to balance three O²⁻.\n• Polyatomic ions keep their names: Na₂SO₄ = sodium sulfate, NH₄Cl = ammonium chloride. Memorize the common ones: sulfate SO₄²⁻, nitrate NO₃⁻, carbonate CO₃²⁻, hydroxide OH⁻, ammonium NH₄⁺.\n\nTo build a formula, criss-cross the charges: Al³⁺ + O²⁻ → the 3 and 2 swap down → Al₂O₃.',
      },
      {
        heading: 'Naming molecular compounds (two non-metals)',
        body:
          'Two non-metals use Greek prefixes to count atoms: mono-, di-, tri-, tetra-, penta-, hexa-.\n\n• CO₂ = carbon dioxide\n• N₂O₄ = dinitrogen tetroxide\n• CO = carbon monoxide (mono- is only used on the SECOND element)\n\nIf you see prefixes, it is molecular. If you see a metal or a Roman numeral, it is ionic — no prefixes allowed there.',
        tip: 'Never mix systems: "diiron trioxide" and "iron(III) dioxide" are both wrong. Metal present → ionic naming. Two non-metals → prefixes.',
      },
      {
        heading: 'Balancing equations',
        body:
          'Atoms are never created or destroyed in a reaction, so each element needs equal counts on both sides. You may only change the big coefficients in front of formulas — NEVER the little subscripts.\n\nA reliable order:\n\n• Balance metals first.\n• Then non-metals other than H and O.\n• Then hydrogen.\n• Oxygen last (it often fixes itself).\n• Treat polyatomic ions that appear on both sides as single units.',
      },
      {
        heading: 'Worked example',
        body:
          'Balance: C₃H₈ + O₂ → CO₂ + H₂O\n\n• Carbon: 3 on the left → put 3 in front of CO₂.\n• Hydrogen: 8 on the left → put 4 in front of H₂O (4 × 2 = 8).\n• Oxygen: right side now has 3(2) + 4(1) = 10 → put 5 in front of O₂ (5 × 2 = 10).\n\nBalanced: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O\n\nFinal count check — C: 3 = 3 ✓, H: 8 = 8 ✓, O: 10 = 10 ✓',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Changing subscripts to balance (H₂O → H₂O₂ turns water into peroxide — a different substance!).\n• Forgetting the Roman numeral for iron, copper, tin, and lead compounds.\n• Using prefixes on ionic compounds ("dichloride" for MgCl₂ — wrong; it is just magnesium chloride).\n• Not reducing coefficients to lowest terms: 2H₂ + O₂ → 2H₂O, not 4H₂ + 2O₂ → 4H₂O.\n• Skipping the final atom-count check. It takes 15 seconds and catches nearly everything.',
        tip: 'If everything balances except oxygen and you need an odd number, double ALL coefficients and try again — a classic move for combustion equations.',
      },
    ],
    tricks: [
      {
        name: 'Criss-cross method',
        trick:
          'Write each ion with its charge, then swap the charge NUMBERS down to become the other ion\'s subscript: Al³⁺ and O²⁻ criss-cross to Al₂O₃. Reduce if possible: Ca²⁺ + O²⁻ → CaO, not Ca₂O₂.',
      },
      {
        name: 'MINOH order',
        trick:
          'Balance in this order — Metals, then other non-metals (I for "in-between"), then... easiest to recall as: Metals first, H second-last, O last. Oxygen last saves the most re-work in combustion problems.',
      },
      {
        name: 'Prefix ladder',
        trick:
          'mono-1, di-2, tri-3, tetra-4, penta-5, hexa-6. Spot-check with words you know: TRIangle, TETRis blocks (4 squares), PENTAgon, HEXAgon.',
      },
    ],
    formulas: [
      'ionic: metal name + non-metal-ide (Roman numeral if multi-charge)',
      'molecular: prefixes (mono, di, tri, tetra, penta, hexa)',
      'balance coefficients, never subscripts',
      'criss-cross charges → subscripts, then reduce',
    ],
  },
  {
    id: 'chem-mole-molar-mass',
    subject: 'chemistry',
    grade: 11,
    title: 'The Mole & Molar Mass',
    emoji: '🐹',
    summary:
      "The mole is chemistry's counting unit — a bridge between the mass you can weigh and the particles you can't see.",
    sections: [
      {
        heading: 'What a mole is',
        body:
          'Atoms are too small to count, so chemists count in moles, the way bakers count in dozens:\n\n1 mole = 6.02 × 10²³ particles (Avogadro\'s number).\n\nThe magic of the mole: one mole of any element has a mass in grams equal to the atomic mass on the periodic table. One mole of carbon (atomic mass 12.01) weighs 12.01 g and contains 6.02 × 10²³ atoms.',
      },
      {
        heading: 'Molar mass',
        body:
          'Molar mass (M, in g/mol) is the mass of one mole of a substance. For compounds, add up the atomic masses of every atom in the formula:\n\nH₂O: 2(1.01) + 16.00 = 18.02 g/mol\n\nCO₂: 12.01 + 2(16.00) = 44.01 g/mol\n\nCa(OH)₂: 40.08 + 2(16.00 + 1.01) = 40.08 + 34.02 = 74.10 g/mol\n\nWatch the brackets: the subscript outside applies to EVERYTHING inside.',
        tip: 'In Ca(NO₃)₂ there are 2 nitrogens and 6 oxygens — the outer 2 multiplies the whole nitrate group.',
      },
      {
        heading: 'Converting with the mole',
        body:
          'The central equation:\n\nn = m ÷ M  (moles = mass ÷ molar mass)\n\nAnd for particle counts:\n\nN = n × 6.02 × 10²³\n\nWorked example: how many molecules are in 36.04 g of water?\n\n• M(H₂O) = 18.02 g/mol\n• n = m ÷ M = 36.04 ÷ 18.02 = 2.000 mol\n• N = 2.000 × 6.02 × 10²³ = 1.204 × 10²⁴ molecules\n\nNotice the path: grams → moles → particles. You can never jump from grams to particles directly — moles are always the middle step.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Dividing by atomic number instead of atomic mass when computing molar mass.\n• Ignoring the subscript-bracket rule: Mg(OH)₂ has 2 O and 2 H, not 1 of each.\n• Flipping the formula: moles = mass ÷ molar mass, not molar mass ÷ mass. If 36 g of water gives you 0.5 mol, you flipped it.\n• Reporting a particle count like "2 mol" when the question asked for molecules — always finish with × 6.02 × 10²³.',
      },
    ],
    tricks: [
      {
        name: "A chemist's dozen",
        trick:
          'A dozen = 12 of anything; a mole = 6.02 × 10²³ of anything. Same idea, bigger number. "A mole of donuts" makes perfect sense — it is just a (planet-crushing) count.',
      },
      {
        name: 'The n-m-M triangle',
        trick:
          'Triangle with m on top, n and M on the bottom. Cover what you want: n = m ÷ M, m = n × M, M = m ÷ n. Sister of the physics d-s-t triangle.',
      },
      {
        name: 'Mole Day sanity check',
        trick:
          "Avogadro's number is 6.02 × 10²³ — chemists celebrate Mole Day on 10/23 (October 23) from 6:02 am to 6:02 pm. If you write 10²² or 10²⁴ on a test, Mole Day is your error alarm.",
      },
    ],
    formulas: ['n = m ÷ M', 'N = n × NA,  NA = 6.02 × 10²³ /mol', 'M(compound) = sum of atomic masses', 'grams → moles → particles (never skip moles)'],
  },
  {
    id: 'chem-stoichiometry',
    subject: 'chemistry',
    grade: 11,
    title: 'Stoichiometry Step-by-Step',
    emoji: '🌉',
    summary:
      'Predict exactly how much product a reaction makes from what you put in — one repeatable four-step recipe handles every stoichiometry problem.',
    sections: [
      {
        heading: 'The big idea: the mole ratio bridge',
        body:
          'A balanced equation\'s coefficients tell you the RATIO of moles that react. In 2H₂ + O₂ → 2H₂O, every 2 mol of H₂ makes 2 mol of H₂O — a 1:1 ratio — while consuming 1 mol of O₂.\n\nThe catch: coefficients speak in MOLES, never grams. 2 g of hydrogen does NOT make 2 g of water. To use the ratio, you must first convert your mass into moles, cross the ratio "bridge", and convert back.',
      },
      {
        heading: 'The four-step recipe',
        body:
          '• Step 1 — Balance the equation (or check it is balanced).\n• Step 2 — Convert the given mass to moles: n = m ÷ M.\n• Step 3 — Cross the bridge: multiply by the mole ratio (coefficient of wanted ÷ coefficient of given).\n• Step 4 — Convert moles of the wanted substance back to mass: m = n × M.\n\nGrams → moles → moles → grams. Every stoichiometry problem is this same walk.',
        tip: 'Write the ratio as a labelled fraction, e.g. (2 mol H₂O ÷ 2 mol H₂), so the units you are leaving cancel visibly. If units don\'t cancel, the fraction is upside down.',
      },
      {
        heading: 'Worked example',
        body:
          'How many grams of water are produced when 4.0 g of hydrogen burns completely in excess oxygen? 2H₂ + O₂ → 2H₂O\n\n• Step 1: already balanced ✓\n• Step 2: M(H₂) = 2.02 g/mol → n(H₂) = 4.0 ÷ 2.02 = 1.98 mol\n• Step 3: ratio H₂O : H₂ = 2 : 2 = 1 : 1 → n(H₂O) = 1.98 mol\n• Step 4: M(H₂O) = 18.02 g/mol → m = 1.98 × 18.02 ≈ 35.7 g\n\nSense check: water is about 9 times heavier per mole than H₂, so 4.0 g of hydrogen giving roughly 36 g of water is reasonable.',
      },
      {
        heading: 'Limiting reagent (when both amounts are given)',
        body:
          'If the question gives amounts of TWO reactants, one will run out first — the limiting reagent — and it controls how much product forms.\n\nHow to find it: convert both reactants to moles, divide each by its own coefficient, and the SMALLER result is the limiting reagent. Do all further calculations from the limiting one; the other is "in excess".\n\nThink hot dogs: 10 wieners and 8 buns make only 8 hot dogs. Buns are limiting; 2 wieners sit in excess.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Using the mole ratio on grams directly — the single biggest stoichiometry error. Coefficients only apply to moles.\n• Forgetting to balance the equation first: wrong coefficients poison every later step.\n• Flipping the ratio (dividing by the wanted coefficient instead of multiplying).\n• In limiting-reagent problems, assuming the smaller MASS is limiting — it is the smaller moles-per-coefficient that decides.\n• Using the excess reagent for the final calculation.',
      },
    ],
    tricks: [
      {
        name: 'Mole bridge',
        trick:
          'Picture grams on two river banks and moles as the only bridge between them. Grams → moles → (ratio bridge) → moles → grams. There is no ferry: you cannot cross from grams to grams directly.',
      },
      {
        name: 'Want over have',
        trick:
          'The mole ratio is always (coefficient of what you WANT) over (coefficient of what you HAVE). Want-over-have, multiply, done. If the units of "have" don\'t cancel, flip it.',
      },
      {
        name: 'Hot dog rule',
        trick:
          'Limiting reagent = the hot dog problem: 10 wieners + 8 buns = 8 hot dogs. Divide moles by coefficient for each reactant; smallest number wins (runs out first) and sets the product amount.',
      },
    ],
    formulas: [
      'n = m ÷ M, then apply mole ratio, then m = n × M',
      'mole ratio = coeff(wanted) ÷ coeff(given)',
      'limiting reagent: smallest (moles ÷ coefficient)',
      '% yield = actual ÷ theoretical × 100%',
    ],
  },
  {
    id: 'chem-gas-laws',
    subject: 'chemistry',
    grade: 11,
    title: 'Gas Laws',
    emoji: '🎈',
    summary:
      'Squeeze it, heat it, or add more gas — a handful of laws predicts exactly how pressure, volume and temperature respond. Kelvin required!',
    sections: [
      {
        heading: 'The variables and the golden rule',
        body:
          'Gases are described by four variables:\n\n• P — pressure (kPa or atm; 101.325 kPa = 1 atm)\n• V — volume (L)\n• T — temperature, ALWAYS in kelvin: K = °C + 273\n• n — moles of gas\n\nThe golden rule: every gas law calculation uses kelvin. Celsius has an arbitrary zero, so doubling °C does not double the real temperature — kelvin starts at absolute zero, where particle motion (almost) stops.',
        tip: 'Convert to kelvin BEFORE anything else, right on the givens line. 25 °C = 298 K. This is the #1 gas-law mark killer.',
      },
      {
        heading: 'The simple laws and the combined law',
        body:
          '• Boyle\'s law: P and V are inverse (squeeze → pressure up): P₁V₁ = P₂V₂ (constant T)\n• Charles\'s law: V and T are direct (heat → expand): V₁÷T₁ = V₂÷T₂ (constant P)\n• Gay-Lussac\'s law: P and T are direct (heat a sealed can → pressure up): P₁÷T₁ = P₂÷T₂ (constant V)\n\nAll three live inside the combined gas law:\n\nP₁V₁ ÷ T₁ = P₂V₂ ÷ T₂\n\nJust cover whatever is constant and the simple law appears. If the amount of gas doesn\'t change, the combined law is all you need.',
      },
      {
        heading: 'The ideal gas law',
        body:
          'When moles enter the picture (a single snapshot, not a before/after), use:\n\nPV = nRT, with R = 8.314 L·kPa/(mol·K)\n\nWorked example: what volume does 1.0 mol of gas occupy at SATP (25 °C and 100 kPa)?\n\n• T = 25 + 273 = 298 K\n• V = nRT ÷ P = (1.0)(8.314)(298) ÷ 100\n• V = 2477.6 ÷ 100 ≈ 24.8 L\n\nThat 24.8 L/mol is the molar volume at SATP — worth remembering as a benchmark.',
      },
      {
        heading: 'Worked example: combined gas law',
        body:
          'A gas occupies 2.0 L at 100 kPa and 300 K. It is compressed to 1.0 L while the temperature rises to 600 K. Find the new pressure.\n\n• P₁V₁ ÷ T₁ = P₂V₂ ÷ T₂\n• P₂ = P₁V₁T₂ ÷ (T₁V₂) = (100)(2.0)(600) ÷ ((300)(1.0))\n• P₂ = 120 000 ÷ 300 = 400 kPa\n\nSense check: halving the volume doubles P (×2), doubling the kelvin temperature doubles P again (×2) — 100 × 4 = 400 kPa ✓',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Celsius in a gas law. Convert to kelvin, always, no exceptions.\n• Using the wrong R for your pressure units: R = 8.314 for kPa, but 0.08206 L·atm/(mol·K) for atm.\n• Mixing before/after problems (combined law) with snapshot problems (ideal gas law).\n• Unit mismatches from metric slips — mL vs L, kPa vs Pa. Convert everything before substituting.',
      },
    ],
    tricks: [
      {
        name: 'Pivnert',
        trick:
          'Say PV = nRT as one word: "PIV-nert". Once it is a sound, you cannot write PV = nrT wrong or forget a letter under exam stress.',
      },
      {
        name: 'King Henry Died By Drinking Chocolate Milk',
        trick:
          'Metric prefix ladder: Kilo, Hecto, Deka, Base, Deci, Centi, Milli. Each step is ×10. Moving mL → L is three steps left, so the decimal moves three places left: 250 mL = 0.250 L.',
      },
      {
        name: 'Kelvin or bust',
        trick:
          'Tattoo it on the margin: K = °C + 273. Every gas law temperature goes in kelvin. If your answer looks absurd, check the temperature first — it is Celsius 90% of the time.',
      },
      {
        name: 'Squeeze and heat',
        trick:
          'Two physical intuitions cover the signs: SQUEEZE a gas and pressure rises (Boyle, inverse). HEAT a gas and it either expands (Charles) or, if sealed, pressure rises (Gay-Lussac) — both direct.',
      },
    ],
    formulas: [
      'K = °C + 273',
      'P₁V₁ = P₂V₂ (Boyle)',
      'V₁÷T₁ = V₂÷T₂ (Charles)',
      'P₁V₁÷T₁ = P₂V₂÷T₂ (combined)',
      'PV = nRT,  R = 8.314 L·kPa/(mol·K)',
      'molar volume ≈ 24.8 L/mol at SATP',
    ],
  },
  {
    id: 'chem-solutions-concentration',
    subject: 'chemistry',
    grade: 11,
    title: 'Solutions & Concentration',
    emoji: '🧪',
    summary:
      'Molar concentration, and the dilution equation C₁V₁ = C₂V₂ — the two tools behind every solution-mixing question and every real lab you\'ll ever do.',
    sections: [
      {
        heading: 'Solutions and molar concentration',
        body:
          'A solution is a solute dissolved in a solvent (salt in water: salt = solute, water = solvent).\n\nMolar concentration (molarity) measures how crowded the solute is:\n\nC = n ÷ V\n\nwhere C is in mol/L (also written M), n is moles of solute, and V is litres of SOLUTION.\n\nA 0.5 mol/L solution has half a mole of solute in every litre — concentration is a density of particles, so taking a bigger scoop of the same solution does not change C.',
      },
      {
        heading: 'Worked example: making a solution',
        body:
          'You dissolve 5.85 g of NaCl in water to make 250 mL of solution. Find the concentration.\n\n• M(NaCl) = 22.99 + 35.45 = 58.44 g/mol\n• n = m ÷ M = 5.85 ÷ 58.44 = 0.100 mol\n• V = 250 mL = 0.250 L\n• C = n ÷ V = 0.100 ÷ 0.250 = 0.400 mol/L',
        tip: 'Volume must be in litres. The three-places decimal shift (250 mL = 0.250 L) is where most wrong answers are born.',
      },
      {
        heading: 'Dilution: C₁V₁ = C₂V₂',
        body:
          'Diluting means adding solvent: the moles of solute stay the same while the volume grows. Since n = CV before and after:\n\nC₁V₁ = C₂V₂\n\nWorked example: how much 12 mol/L concentrated HCl do you need to make 500 mL of 0.10 mol/L solution?\n\n• C₁ = 12 mol/L, C₂ = 0.10 mol/L, V₂ = 500 mL\n• V₁ = C₂V₂ ÷ C₁ = (0.10 × 500) ÷ 12 = 50 ÷ 12 ≈ 4.2 mL\n\nYou measure 4.2 mL of the concentrated acid and add water UP TO the 500 mL mark. (Volumes can stay in mL here as long as both sides use the same unit.)',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Using mL in C = n ÷ V (needs litres) — but note C₁V₁ = C₂V₂ tolerates any volume unit if consistent.\n• In dilution, adding 500 mL of water instead of diluting TO 500 mL total — the equation is about final volume.\n• Mismatching the pairs in C₁V₁ = C₂V₂: 1 = concentrated stock, 2 = diluted result. Keep partners together.\n• Forgetting that dilution never changes the MOLES of solute, only their crowding.\n• Safety note that is also a test answer: always add acid TO water, never water to concentrated acid.',
      },
    ],
    tricks: [
      {
        name: 'The n-C-V triangle',
        trick:
          'Triangle with n on top, C and V below: n = CV, C = n ÷ V, V = n ÷ C. Third member of the triangle family (after m-n-M and d-s-t).',
      },
      {
        name: 'Same moles, more water',
        trick:
          'Dilution in four words: "same moles, more water." That is literally why C₁V₁ = C₂V₂ works — both sides equal the unchanging moles of solute.',
      },
      {
        name: 'Do as you oughta, add acid to water',
        trick:
          'Lab safety rhyme that examiners love: "Do as you oughta, add acid to water." Adding water to concentrated acid can flash-boil and spit acid at you.',
      },
    ],
    formulas: ['C = n ÷ V  (mol/L)', 'n = CV', 'C₁V₁ = C₂V₂ (dilution)', '250 mL = 0.250 L'],
  },
  {
    id: 'chem-acids-bases-ph',
    subject: 'chemistry',
    grade: 12,
    title: 'Acids, Bases & pH',
    emoji: '🍋',
    summary:
      'The pH scale compresses a trillion-fold range of acidity into the numbers 0-14 — learn to move between pH, pOH and ion concentrations effortlessly.',
    sections: [
      {
        heading: 'What makes an acid or a base',
        body:
          'In water:\n\n• Acids release hydrogen ions, H⁺ (protons). Taste sour, turn blue litmus red, pH below 7. Strong acids (HCl, HNO₃, H₂SO₄) ionize completely; weak acids (like acetic acid in vinegar) only partly.\n• Bases release hydroxide ions, OH⁻ (or accept H⁺). Feel slippery, turn red litmus blue, pH above 7. NaOH is a strong base.\n\nWater itself splits slightly: H₂O ⇌ H⁺ + OH⁻, and in any aqueous solution at 25 °C:\n\n[H⁺][OH⁻] = Kw = 1.0 × 10⁻¹⁴\n\nMore H⁺ automatically means less OH⁻ — they are on a seesaw.',
      },
      {
        heading: 'The pH scale',
        body:
          'Concentrations of H⁺ span an enormous range, so we use a logarithmic scale:\n\npH = −log[H⁺]  and  pOH = −log[OH⁻]\n\nAt 25 °C they always satisfy: pH + pOH = 14.\n\n• pH 7 = neutral (pure water)\n• pH < 7 = acidic, pH > 7 = basic\n• EACH pH step is a ×10 change in [H⁺]: pH 3 is 10 times more acidic than pH 4, and 100 times more than pH 5.\n\nGoing backwards: [H⁺] = 10^(−pH).',
        tip: 'Quick exponent read: if [H⁺] = 1.0 × 10⁻⁵ mol/L, the pH is just 5.00. The negative exponent IS the pH when the coefficient is exactly 1.',
      },
      {
        heading: 'Worked example',
        body:
          'A solution has [H⁺] = 0.0010 mol/L (that is 1.0 × 10⁻³). Find pH, pOH, and [OH⁻].\n\n• pH = −log(1.0 × 10⁻³) = 3.00 → acidic ✓\n• pOH = 14.00 − 3.00 = 11.00\n• [OH⁻] = 10⁻¹¹ = 1.0 × 10⁻¹¹ mol/L\n\nCross-check: [H⁺][OH⁻] = (10⁻³)(10⁻¹¹) = 10⁻¹⁴ = Kw ✓',
      },
      {
        heading: 'Neutralization',
        body:
          'Acid + base → water + salt. The H⁺ and OH⁻ combine into water:\n\nHCl + NaOH → H₂O + NaCl\n\nTitration uses this: add measured base to an acid until the indicator changes at the equivalence point, then use n = CV and the mole ratio to find the unknown concentration. It is stoichiometry with solutions.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Thinking pH 2 → pH 4 is "twice as basic" — it is a 100× drop in [H⁺], because each step is ×10.\n• Mixing up pH and pOH directions: HIGH pH = basic, but HIGH pOH = acidic.\n• Forgetting the minus sign in −log, producing negative pH values for ordinary solutions.\n• Confusing strong with concentrated: "strong" = ionizes completely; "concentrated" = lots per litre. Vinegar can be concentrated but weak; a dilute HCl solution is still strong.',
      },
    ],
    tricks: [
      {
        name: 'BRA: Blue to Red = Acid',
        trick:
          'Litmus memory: if BLUE litmus turns RED, it is an Acid — B-R-A. The reverse (red to blue) is a base, which you get free by elimination.',
      },
      {
        name: 'The 14 seesaw',
        trick:
          'pH + pOH = 14 is a seesaw: one goes up, the other comes down, always totalling 14. Know either one and subtract from 14 for the other. Same for the ion concentrations: exponents of [H⁺] and [OH⁻] sum to −14.',
      },
      {
        name: 'Each step is ×10',
        trick:
          'pH is logarithmic — like earthquake scales. One pH unit = 10× the acidity, two units = 100×. Never say "pH 3 is a bit more acidic than pH 5"; say "100 times more".',
      },
    ],
    formulas: [
      'pH = −log[H⁺],  [H⁺] = 10^(−pH)',
      'pOH = −log[OH⁻]',
      'pH + pOH = 14 (at 25 °C)',
      '[H⁺][OH⁻] = 1.0 × 10⁻¹⁴',
      'acid + base → water + salt',
    ],
  },
  {
    id: 'chem-thermochemistry',
    subject: 'chemistry',
    grade: 12,
    title: 'Thermochemistry',
    emoji: '🔥',
    summary:
      'Track heat like money — q = mcΔT measures it, ΔH labels reactions as heat-releasing or heat-absorbing, and calorimetry catches it in the act.',
    sections: [
      {
        heading: 'Exothermic vs endothermic',
        body:
          'Every reaction either releases heat or absorbs it:\n\n• Exothermic: heat EXITS the system into the surroundings. The surroundings warm up. ΔH is NEGATIVE. Examples: combustion, hand warmers.\n• Endothermic: heat is absorbed by the system from the surroundings. The surroundings cool down. ΔH is POSITIVE. Examples: photosynthesis, instant cold packs.\n\nΔH (enthalpy change) is the heat of reaction, usually in kJ or kJ/mol. The sign is from the SYSTEM\'s point of view: losing heat = negative.',
        tip: 'A beaker that gets HOT means the reaction is exothermic and ΔH is negative — the sign feels backwards until you remember it is the system\'s bank account, and it just spent heat.',
      },
      {
        heading: 'q = mcΔT: the heat equation',
        body:
          'The heat absorbed or released by a substance changing temperature:\n\nq = mcΔT\n\n• q — heat (J)\n• m — mass of the substance being heated or cooled (g)\n• c — specific heat capacity; for water c = 4.18 J/(g·°C)\n• ΔT — temperature change = Tfinal − Tinitial (°C)\n\nWater\'s high c is why it is used in calorimeters, radiators, and why coastal cities have mild weather — it soaks up a lot of heat per degree.',
      },
      {
        heading: 'Worked example',
        body:
          'How much heat is needed to warm 250 g of water from 20.0 °C to 80.0 °C?\n\n• ΔT = 80.0 − 20.0 = 60.0 °C\n• q = mcΔT = (250)(4.18)(60.0)\n• q = 250 × 4.18 = 1045; 1045 × 60.0 = 62 700 J\n• q = 62 700 J = 62.7 kJ\n\nPositive q: the water ABSORBED heat, as expected for warming up.',
      },
      {
        heading: 'Calorimetry: catching heat in the act',
        body:
          'A calorimeter measures reaction heat indirectly: run the reaction in (or under) a known mass of water and watch the water\'s temperature change.\n\nThe logic chain:\n\n• heat released by reaction = heat absorbed by water\n• q(reaction) = −q(water) = −mcΔT of the water\n• divide by moles reacted to get ΔH in kJ/mol\n\nKey assumption: no heat escapes to the room — which is why foam cups and lids appear in every calorimetry lab (and why "heat loss to surroundings" is the go-to error source in lab write-ups).',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Computing ΔT backwards: it is ALWAYS final minus initial. Cooling gives a negative ΔT and a negative q — that is meaningful, keep it.\n• Using the mass of the reactant instead of the mass of the WATER in q = mcΔT for calorimetry.\n• Dropping the sign flip: the water warming (+q) means the reaction released heat (−ΔH).\n• Mixing J and kJ: q = mcΔT gives joules; ΔH tables are usually kilojoules. Divide by 1000 before comparing.\n• Saying an exothermic reaction "gains heat because it gets hot" — the SURROUNDINGS get hot because the system lost heat.',
      },
    ],
    tricks: [
      {
        name: 'EXo = EXit',
        trick:
          'EXothermic = heat EXits the system (ΔH negative, beaker feels hot). ENdothermic = heat ENters (ΔH positive, beaker feels cold). The prefixes are the whole story.',
      },
      {
        name: 'm-CAT',
        trick:
          'Read q = mcΔT as "q equals m-CAT": mass, C (specific heat), And Temperature-change. Meow your way to full marks — you will never omit the ΔT again.',
      },
      {
        name: "System's bank account",
        trick:
          'ΔH is the system\'s heat bank account. Spending heat (exothermic) = negative balance change. Receiving heat (endothermic) = positive. Always ask "who is the accountant?" — it is the system, never the room.',
      },
    ],
    formulas: [
      'q = mcΔT',
      'c(water) = 4.18 J/(g·°C)',
      'ΔT = Tfinal − Tinitial',
      'q(reaction) = −q(water)',
      'ΔH < 0 exothermic, ΔH > 0 endothermic',
      'ΔH per mole = q ÷ n',
    ],
  },
  {
    id: 'chem-redox-electrochemistry',
    subject: 'chemistry',
    grade: 12,
    title: 'Redox & Electrochemistry',
    emoji: '🔋',
    summary:
      'Every battery is just electrons being forced to commute — learn who loses electrons, who gains them, and how to keep the vocabulary straight with two famous mnemonics.',
    sections: [
      {
        heading: 'Oxidation and reduction',
        body:
          'Redox reactions transfer electrons:\n\n• Oxidation = LOSING electrons. The oxidation number goes UP.\n• Reduction = GAINING electrons. The oxidation number goes DOWN (it is "reduced").\n\nThey always happen together — an electron lost must be gained by something. The species that GETS oxidized gives away electrons, so it CAUSES reduction elsewhere: it is called the reducing agent. Likewise the species that gets reduced is the oxidizing agent. (Agents are named for what they do to the OTHER guy.)',
      },
      {
        heading: 'Worked example: spotting the transfer',
        body:
          'Zinc metal in copper(II) sulfate solution: Zn + Cu²⁺ → Zn²⁺ + Cu\n\n• Zn goes from 0 to +2: it LOST 2 electrons → Zn is oxidized → Zn is the reducing agent.\n• Cu²⁺ goes from +2 to 0: it GAINED 2 electrons → Cu²⁺ is reduced → Cu²⁺ is the oxidizing agent.\n\nAs half-reactions:\n\n• Oxidation: Zn → Zn²⁺ + 2e⁻\n• Reduction: Cu²⁺ + 2e⁻ → Cu\n\nYou can watch this one in the lab: the zinc strip dissolves while fuzzy brown copper plates onto it and the blue Cu²⁺ colour fades.',
        tip: 'Electrons appear on the RIGHT of an oxidation half-reaction (being lost) and on the LEFT of a reduction (being gained). If both your half-reactions have electrons on the same side, one is flipped.',
      },
      {
        heading: 'Electrochemical (galvanic) cells',
        body:
          'A battery separates the two half-reactions so the electrons must travel through a wire — that current is the useful output.\n\n• Anode: where OXIDATION happens. Electrons depart from here.\n• Cathode: where REDUCTION happens. Electrons arrive here.\n• Electrons flow through the wire from anode to cathode.\n• A salt bridge completes the circuit by letting ions migrate, keeping both half-cells electrically neutral.\n\nIn a galvanic cell the anode is the negative terminal and the cathode is positive. Cell voltage comes from how strongly the two half-reactions differ in their pull on electrons (standard reduction potentials).',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Saying reduction increases the oxidation number — reduction REDUCES it. The name is the hint.\n• Mixing up the agents: the reducing agent is itself OXIDIZED. Agents are named for their effect on the other species.\n• Putting oxidation at the cathode. Vowels with vowels: AnOde-Oxidation; consonants together: Cathode-Reduction.\n• Forgetting to balance electrons between half-reactions before adding them — multiply so electrons lost = electrons gained.\n• Having the salt bridge carry electrons. It carries IONS; electrons only travel through the wire.',
      },
    ],
    tricks: [
      {
        name: 'OIL RIG',
        trick:
          'Oxidation Is Loss, Reduction Is Gain — of ELECTRONS. The single most quoted mnemonic in chemistry, and it settles every "who lost what" question instantly.',
      },
      {
        name: 'LEO says GER',
        trick:
          'Lose Electrons = Oxidation, Gain Electrons = Reduction. The lion (LEO) roars "GER!" Use whichever of OIL RIG / LEO-GER sticks — they encode the same fact.',
      },
      {
        name: 'AN OX and a RED CAT',
        trick:
          'ANode = OXidation; REDuction at the CAThode. Picture an ox and a red cat sitting on opposite electrodes of every battery you draw.',
      },
      {
        name: 'FAT CAT',
        trick:
          'Electrons Flow from the Anode To the CAThode — F-A-T-C-A-T. Label the wire arrow in every cell diagram with this before answering anything else.',
      },
    ],
    formulas: [
      'oxidation: lose e⁻ (number up); reduction: gain e⁻ (number down)',
      'oxidation half: X → X²⁺ + 2e⁻;  reduction half: Y²⁺ + 2e⁻ → Y',
      'anode = oxidation, cathode = reduction',
      'e⁻ flow: anode → cathode (through wire)',
      'electrons lost = electrons gained (balance before adding)',
    ],
  },
  {
    id: 'chem-organic-basics',
    subject: 'chemistry',
    grade: 12,
    title: 'Organic Chemistry Basics',
    emoji: '🧬',
    summary:
      'Carbon builds millions of compounds from a few simple rules — learn to name alkanes and alkenes and to spot the functional groups that give molecules their personality.',
    sections: [
      {
        heading: 'Why carbon, and the alkane family',
        body:
          'Carbon forms exactly 4 bonds and chains with itself endlessly — the backbone of organic chemistry.\n\nAlkanes are the simplest family: all single bonds, formula CnH₂n₊₂. The first eight, by chain length:\n\n• 1 C: methane (CH₄)\n• 2 C: ethane (C₂H₆)\n• 3 C: propane (C₃H₈)\n• 4 C: butane (C₄H₁₀)\n• 5-8 C: pentane, hexane, heptane, octane\n\nThe prefix counts the carbons; from 5 upward the prefixes are the familiar Greek ones (pent-, hex-, ...). These stems are reused across ALL of organic naming, so this list is the alphabet of the subject.',
      },
      {
        heading: 'Alkenes, alkynes and the suffix system',
        body:
          'The ending of the name announces the bonding:\n\n• -ane: all single bonds (ethane, C₂H₆)\n• -ene: contains a C=C double bond (ethene, C₂H₄) — general formula CnH₂n\n• -yne: contains a C≡C triple bond (ethyne, C₂H₂)\n\nFor chains of 4+ carbons, a number says where the double bond starts, counting from the end that gives the LOWEST number: but-1-ene (CH₂=CH–CH₂–CH₃) vs but-2-ene (CH₃–CH=CH–CH₃).\n\nWorked example: name CH₂=CH–CH₃.\n\n• Longest chain: 3 carbons → "prop"\n• One double bond → "-ene"\n• Name: propene (no number needed — in a 3-carbon chain the double bond can only start at carbon 1)',
        tip: 'Always number the chain from the end closest to the double bond or branch. If you get but-3-ene, you numbered from the wrong end — it is but-1-ene.',
      },
      {
        heading: 'Functional groups: the personality patch',
        body:
          'A functional group is a specific cluster of atoms that gives a molecule predictable behaviour, no matter how long the carbon chain is:\n\n• Alcohol: –OH, suffix -ol (ethanol, CH₃CH₂OH — drinkable... only ever in beverages, never from the lab)\n• Carboxylic acid: –COOH, suffix -oic acid (ethanoic acid = vinegar\'s acid)\n• Aldehyde: –CHO at a chain END, suffix -al\n• Ketone: C=O INSIDE the chain, suffix -one (propanone = acetone, nail-polish remover)\n• Ester: –COO– between two chains, made from acid + alcohol; fruity smells\n• Amine: contains N, like –NH₂\n\nSpot the group → predict the properties: –OH and –COOH make molecules more water-soluble; –COOH makes them acidic.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Not choosing the LONGEST continuous carbon chain as the base name — chains bend around corners in structural diagrams; follow the carbons, not the drawing\'s shape.\n• Numbering from the wrong end, giving the double bond or branch a higher number than needed.\n• Confusing ethane (C₂H₆, single bond) with ethene (C₂H₄, double bond) — one letter, different family.\n• Placing an aldehyde in the middle of a chain: –CHO only exists at the END; a mid-chain C=O is a ketone.\n• Forgetting carbon\'s 4-bond rule when drawing structures — count every carbon\'s bonds; a 5-bond carbon is an automatic error.',
      },
    ],
    tricks: [
      {
        name: 'Monkeys Eat Peeled Bananas',
        trick:
          'The first four alkane stems in order: Meth, Eth, Prop, But — Monkeys Eat Peeled Bananas. From 5 carbons on, it is the familiar Greek: pent, hex, hept, oct.',
      },
      {
        name: 'ane-ene-yne = 1-2-3',
        trick:
          'The suffix vowel counts the bond: -Ane = single bond (A comes 1st), -Ene = double bond (E is 2nd... think "ene = deux-ble"), -Yne = triple. Alphabetical order a-e-y matches bond order 1-2-3.',
      },
      {
        name: 'Longest chain wins',
        trick:
          'Before naming anything, trace the longest continuous carbon path with a pencil — even around corners of the drawing. That chain is the base name; everything else hanging off it is a branch.',
      },
      {
        name: 'OH-ol, COOH-oic',
        trick:
          'Sound-match the suffixes: see –OH, say "-ol" (alcohOL). See –COOH, say "-oic acid". The group\'s letters echo inside the suffix, so the name writes itself.',
      },
    ],
    formulas: [
      'alkane: CnH₂n₊₂ (all single bonds)',
      'alkene: CnH₂n (one C=C)',
      'alkyne: CnH₂n₋₂ (one C≡C)',
      'stems: meth-1, eth-2, prop-3, but-4, pent-5, hex-6, hept-7, oct-8',
      '–OH → -ol,  –COOH → -oic acid,  mid-chain C=O → -one',
    ],
  },
]
