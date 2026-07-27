import type { Lesson } from '../../types'

/** Math lessons for the Learning Center. Exemplar file — brief, clear, hack-packed. */
export const mathLessons: Lesson[] = [
  {
    id: 'math-order-of-operations',
    subject: 'math',
    grade: 10,
    title: 'Order of Operations',
    emoji: '🧮',
    summary:
      'Why 2 + 3 × 4 is 14 and not 20 — and how to never lose marks to a calculation order slip again.',
    sections: [
      {
        heading: 'The rule',
        body:
          'Math has a fixed order for which operation happens first, so every person (and calculator) gets the same answer.\n\n• Brackets first — always work from the innermost brackets outward.\n• Exponents next — powers and roots.\n• Division and Multiplication — together, left to right.\n• Addition and Subtraction — together, left to right.',
        tip: 'Division does NOT come before multiplication — they are the same rank, done left to right. Same for addition and subtraction.',
      },
      {
        heading: 'Worked example',
        body:
          'Evaluate: 20 − 12 ÷ (2 + 2)²\n\n• Brackets: (2 + 2) = 4, so we have 20 − 12 ÷ 4²\n• Exponents: 4² = 16, so 20 − 12 ÷ 16\n• Division: 12 ÷ 16 = 0.75\n• Subtraction: 20 − 0.75 = 19.25',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Forgetting that a negative sign in front of a power waits: −3² = −9, but (−3)² = 9.\n• Doing addition before a division that sits to its right.\n• Dropping brackets when substituting negative numbers into formulas — always substitute with brackets.',
        tip: 'When substituting x = −2 into x², write (−2)² — the brackets protect the sign.',
      },
    ],
    tricks: [
      {
        name: 'BEDMAS',
        trick:
          'Brackets, Exponents, Division & Multiplication (left to right), Addition & Subtraction (left to right). Say it before every multi-step calculation.',
      },
      {
        name: 'Two-speed highway',
        trick:
          'Think of ÷× as the fast lane and +− as the slow lane. Everything in the fast lane finishes before anything in the slow lane starts — but within a lane, cars go in order (left to right).',
      },
    ],
    formulas: ['−a² ≠ (−a)²  (the bracket changes the answer)'],
  },
  {
    id: 'math-exponent-laws',
    subject: 'math',
    grade: 10,
    title: 'Exponent Laws',
    emoji: '⚡',
    summary:
      'Collapse scary towers of powers into one clean term — and handle zero and negative exponents without blinking.',
    sections: [
      {
        heading: 'The five laws',
        body:
          'An exponent counts how many times a base is multiplied by itself. Every law below is just a shortcut for writing out that multiplication.\n\n• Product law: same base multiplied → ADD exponents. a³ × a² = a⁵ (three a\u2019s times two a\u2019s is five a\u2019s).\n• Quotient law: same base divided → SUBTRACT exponents. a⁵ ÷ a² = a³.\n• Power of a power → MULTIPLY exponents. (a³)² = a⁶.\n• Power of a product distributes: (ab)² = a²b².\n• Power of a quotient distributes: (a/b)² = a²/b².',
        tip: 'The laws only work with the SAME base. You cannot combine 2³ × 5² into anything shorter — the bases are different.',
      },
      {
        heading: 'Zero and negative exponents',
        body:
          'These fall straight out of the quotient law.\n\n• a⁰ = 1 for any a ≠ 0. Why: a³ ÷ a³ = a⁰, and anything divided by itself is 1.\n• a⁻ⁿ = 1/aⁿ. A negative exponent means "flip to the other side of the fraction bar", NOT "make the answer negative".\n• Example: 2⁻³ = 1/2³ = 1/8, a positive number.',
        tip: 'A negative exponent never makes a result negative. 2⁻³ = 1/8, not −8 and not −1/8.',
      },
      {
        heading: 'Worked example',
        body:
          'Simplify: (2a³)² × a⁻⁴\n\n• Power of a product: (2a³)² = 2² × (a³)² = 4a⁶\n• Now we have 4a⁶ × a⁻⁴\n• Product law: a⁶ × a⁻⁴ = a⁶⁺⁽⁻⁴⁾ = a²\n• Answer: 4a²\n\nQuick numeric check with a = 1: left side is (2)² × 1 = 4, and 4a² = 4. ✓',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Forgetting to raise the coefficient too: (2a³)² is 4a⁶, not 2a⁶.\n• Adding exponents when you should multiply: (a³)² = a⁶, not a⁵.\n• Writing 5⁰ = 0 instead of 1.\n• Treating a⁻² as −a² — the negative exponent flips, it does not negate.',
      },
    ],
    tricks: [
      {
        name: 'MA · DS · PM',
        trick:
          'Multiply → Add, Divide → Subtract, Power → Multiply. The operation on the bases tells you what to do with the exponents — always one step "weaker".',
      },
      {
        name: 'Flip it to fix it',
        trick:
          'A negative exponent is unhappy where it is. Move that factor across the fraction bar (top ↔ bottom) and the exponent turns positive: x⁻³ = 1/x³, and 1/x⁻³ = x³.',
      },
      {
        name: 'The lonely 1',
        trick:
          'Anything (except 0) to the power 0 is 1. Picture the exponent shrinking the multiplication until nothing is left but the starting value of every product: 1.',
      },
    ],
    formulas: [
      'aᵐ × aⁿ = aᵐ⁺ⁿ',
      'aᵐ ÷ aⁿ = aᵐ⁻ⁿ',
      '(aᵐ)ⁿ = aᵐⁿ',
      '(ab)ⁿ = aⁿbⁿ,  (a/b)ⁿ = aⁿ/bⁿ',
      'a⁰ = 1  (a ≠ 0)',
      'a⁻ⁿ = 1/aⁿ',
    ],
  },
  {
    id: 'math-radicals',
    subject: 'math',
    grade: 10,
    title: 'Radicals & Mixed Radicals',
    emoji: '🌱',
    summary:
      'Turn √72 into the tidy 6√2, switch between entire and mixed radicals, and add roots like they were like terms.',
    sections: [
      {
        heading: 'Entire vs mixed radicals',
        body:
          'A radical is a root: √9 = 3 because 3² = 9.\n\n• An entire radical has everything under the root: √72.\n• A mixed radical has a number out front: 6√2 (meaning 6 × √2).\n\nThey can name the same value — √72 and 6√2 are equal. Teachers want the mixed (simplified) form because it is easier to compare and combine.',
      },
      {
        heading: 'Simplifying: pull out the biggest perfect square',
        body:
          'The key property: √(ab) = √a × √b. To simplify, find the LARGEST perfect square hiding inside the radicand.\n\nWorked example — simplify √72:\n\n• Biggest perfect square factor of 72 is 36 (since 72 = 36 × 2)\n• √72 = √36 × √2 = 6√2\n\nGoing the other way (mixed → entire): 3√5 = √(3²) × √5 = √(9 × 5) = √45.',
        tip: 'If you pick a smaller square like 4, you get √72 = 2√18 — not fully simplified, because 18 still contains the square 9. Always finish the job: 2√18 = 2 × 3√2 = 6√2.',
      },
      {
        heading: 'Adding and subtracting radicals',
        body:
          'Radicals add like variables: only LIKE radicals (same number under the root) combine.\n\n• 2√3 + 5√3 = 7√3 — just like 2x + 5x = 7x.\n• 6√2 + √50 looks unlike, but simplify first: √50 = √25 × √2 = 5√2, so 6√2 + 5√2 = 11√2.\n• 2√3 + 5√2 cannot be combined — different radicands.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Splitting sums: √(9 + 16) is √25 = 5, NOT √9 + √16 = 7. The root splits over × and ÷ only.\n• Forgetting to square the front number when converting to an entire radical: 3√5 = √45, not √15.\n• Leaving √18 in an answer — markers expect fully simplified form 3√2.',
        tip: '√(a + b) ≠ √a + √b. Test it: √(9 + 16) = 5 but 3 + 4 = 7. Roots only split over multiplication and division.',
      },
    ],
    tricks: [
      {
        name: 'Perfect square posse',
        trick:
          'Memorize 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144. When simplifying, scan the posse from BIGGEST down and take the first one that divides your number evenly.',
      },
      {
        name: 'Radicals are like terms',
        trick:
          'Treat √2, √3, √5 like different variables x, y, z. You can add 2x + 5x, but never 2x + 5y — same rule, so simplify every radical first to reveal hidden matches.',
      },
      {
        name: 'Square it to smuggle it',
        trick:
          'To move a coefficient under the root, square it first: 4√3 = √(16 × 3) = √48. The number pays a "squaring toll" at the radical door — in either direction.',
      },
    ],
    formulas: [
      '√(ab) = √a × √b',
      '√(a/b) = √a / √b',
      'a√b = √(a²b)',
      '√(a + b) ≠ √a + √b',
    ],
  },
  {
    id: 'math-factoring',
    subject: 'math',
    grade: 10,
    title: 'Factoring Toolbox',
    emoji: '🧰',
    summary:
      'Un-multiply any polynomial with three reliable tools — GCF, trinomial patterns, and difference of squares — in the right order.',
    sections: [
      {
        heading: 'Tool 1: GCF — always first',
        body:
          'Factoring means rewriting a sum as a product (the reverse of expanding). The Greatest Common Factor comes out first, every single time.\n\n• 6x² + 9x: both terms share 3x, so 6x² + 9x = 3x(2x + 3).\n• Check by expanding: 3x × 2x = 6x² and 3x × 3 = 9x. ✓\n\nPulling the GCF first makes every later step smaller and easier.',
        tip: 'Skipping the GCF is the #1 factoring error. 2x² + 10x + 12 looks unfactorable as a trinomial until you pull out the 2 first.',
      },
      {
        heading: 'Tool 2: trinomials x² + bx + c',
        body:
          'Find two numbers that MULTIPLY to c and ADD to b — they become the bracket numbers.\n\n• x² + 5x + 6: need product 6, sum 5 → the pair is 2 and 3, so (x + 2)(x + 3).\n\nFor a leading coefficient (ax² + bx + c), find two numbers with product a×c and sum b, then split the middle term and factor by grouping:\n\n• 3x² + 7x + 2: product 3 × 2 = 6, sum 7 → 6 and 1\n• Split: 3x² + 6x + x + 2 = 3x(x + 2) + 1(x + 2) = (3x + 1)(x + 2)',
      },
      {
        heading: 'Tool 3: difference of squares',
        body:
          'Two perfect squares separated by a MINUS sign factor instantly:\n\na² − b² = (a + b)(a − b)\n\n• 9x² − 25 = (3x)² − 5² = (3x + 5)(3x − 5)\n• Works only for a difference — a SUM of squares like x² + 25 does not factor (over the reals).',
      },
      {
        heading: 'Worked example — full toolbox',
        body:
          'Factor completely: 2x² + 10x + 12\n\n• GCF first: both 2 and the terms share 2 → 2(x² + 5x + 6)\n• Trinomial: product 6, sum 5 → 2 and 3 → 2(x + 2)(x + 3)\n• Check by expanding: (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6, times 2 gives 2x² + 10x + 12. ✓',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Stopping too early — "factor completely" means keep going until nothing factors further.\n• Sign slips: x² − 5x + 6 needs two negatives, (x − 2)(x − 3), because the product is +6 but the sum is −5.\n• "Factoring" x² + 25 as (x + 5)² — expanding that gives x² + 10x + 25, not x² + 25.',
        tip: 'Always expand your answer in the margin. Ten seconds of FOIL catches nearly every factoring mistake before the marker does.',
      },
    ],
    tricks: [
      {
        name: 'GCF first, always',
        trick:
          'Make it a reflex: before trying anything clever, ask "what do ALL terms share?" Pull it out. Factoring without the GCF is like cutting a cake with the box still on.',
      },
      {
        name: 'FOIL in reverse',
        trick:
          'FOIL (First, Outer, Inner, Last) is how brackets expand — factoring is running the movie backwards. Use FOIL to CHECK every factored answer.',
      },
      {
        name: 'DOTS',
        trick:
          'Difference Of Two Squares: spot square − square, write (sum)(difference) instantly. If you see a plus between the squares, DOTS does not apply — walk away.',
      },
      {
        name: 'Sum & product hunt',
        trick:
          'For x² + bx + c, hunt for the pair with product c and sum b. Signs tell you where to look: c positive → same signs (matching b); c negative → opposite signs (bigger number takes the sign of b).',
      },
    ],
    formulas: [
      'a² − b² = (a + b)(a − b)',
      'x² + bx + c = (x + p)(x + q)  where p + q = b, pq = c',
      'a² + 2ab + b² = (a + b)²',
      'a² − 2ab + b² = (a − b)²',
    ],
  },
  {
    id: 'math-trig-ratios',
    subject: 'math',
    grade: 10,
    title: 'Right-Triangle Trigonometry',
    emoji: '📐',
    summary:
      'Use SOH CAH TOA to find any missing side or angle in a right triangle — the skill behind ladders, ramps, and flagpole problems.',
    sections: [
      {
        heading: 'Label the triangle first',
        body:
          'Every trig problem starts with labelling three sides relative to the angle you care about (call it θ):\n\n• Hypotenuse — the longest side, always across from the 90° angle.\n• Opposite — the side across from θ (it does not touch θ).\n• Adjacent — the side next to θ that is not the hypotenuse.\n\nThen the three ratios are:\n\n• sin θ = opposite / hypotenuse\n• cos θ = adjacent / hypotenuse\n• tan θ = opposite / adjacent',
        tip: 'Opposite and adjacent SWAP if you switch to the other acute angle. Always re-label when the angle changes.',
      },
      {
        heading: 'Finding a side — worked example',
        body:
          'A 5 m ladder leans against a wall, making a 70° angle with the ground. How high up the wall does it reach?\n\n• The height is OPPOSITE the 70° angle; the ladder (5 m) is the HYPOTENUSE.\n• Opposite and hypotenuse → use sine: sin 70° = h / 5\n• h = 5 × sin 70° = 5 × 0.9397 ≈ 4.70\n\nThe ladder reaches about 4.7 m up the wall. Sanity check: 4.7 is less than 5 — the height can never beat the hypotenuse. ✓',
      },
      {
        heading: 'Finding an angle — worked example',
        body:
          'A ramp rises 7 m over a horizontal run of 10 m. What angle does it make with the ground?\n\n• Rise is opposite, run is adjacent → use tangent: tan θ = 7/10 = 0.7\n• Undo the tangent with the inverse: θ = tan⁻¹(0.7) ≈ 35.0°\n\nUse the inverse buttons (sin⁻¹, cos⁻¹, tan⁻¹) whenever the unknown is the ANGLE.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Calculator in radian mode — sin 70° should be about 0.94; if you get 0.77, you are in radians.\n• Picking the wrong ratio because the sides were never labelled — label before you compute.\n• Using sin instead of sin⁻¹ when solving for an angle.\n• Rounding mid-calculation — keep digits until the final answer, then round.',
        tip: 'First keystroke check: sin 30° must give 0.5. If it does not, switch your calculator to degree mode before anything else.',
      },
    ],
    tricks: [
      {
        name: 'SOH CAH TOA',
        trick:
          'Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent. Write it at the top of every trig test page the second the test starts.',
      },
      {
        name: 'Some Old Horses Can Always Hear Their Owners Approaching',
        trick:
          'A sentence version of SOH CAH TOA if letter-blocks slip your mind — first letters spell out the three ratios in order.',
      },
      {
        name: 'Cover-up triangle',
        trick:
          'Draw sin θ = O/H as a triangle with O on top, H below. Cover the unknown: covering O leaves H × sin θ; covering H leaves O ÷ sin θ. No algebra rearranging needed.',
      },
    ],
    formulas: [
      'sin θ = opp / hyp',
      'cos θ = adj / hyp',
      'tan θ = opp / adj',
      'θ = sin⁻¹, cos⁻¹ or tan⁻¹ of the ratio (to find angles)',
      'a² + b² = c²  (Pythagoras, right triangles only)',
    ],
  },
  {
    id: 'math-slope-linear',
    subject: 'math',
    grade: 10,
    title: 'Slope & Linear Equations',
    emoji: '📈',
    summary:
      'Read any line like a story: how steep it is, where it starts, and how to write its equation from just two points.',
    sections: [
      {
        heading: 'Slope is a rate',
        body:
          'Slope (m) measures steepness: how much the line RISES for every step it RUNS to the right.\n\nm = rise / run = (y₂ − y₁) / (x₂ − x₁)\n\n• Positive slope: uphill left to right.\n• Negative slope: downhill.\n• Zero slope: flat horizontal line.\n• Undefined slope: vertical line (run is 0 — you cannot divide by 0).',
        tip: 'Keep the subtraction order consistent: if you start with y₂ on top, start with x₂ on the bottom. Mixing orders silently flips the sign of the slope.',
      },
      {
        heading: 'y = mx + b',
        body:
          'Slope-intercept form tells you everything at a glance:\n\n• m is the slope — how you MOVE.\n• b is the y-intercept — where the line crosses the y-axis, your starting point.\n\nExample: y = −2x + 3 starts at (0, 3) and drops 2 for every 1 step right.\n\nParallel lines share the same m. Perpendicular lines have slopes that multiply to −1 (negative reciprocals): a line with m = 2/3 is perpendicular to one with m = −3/2.',
      },
      {
        heading: 'Worked example — equation from two points',
        body:
          'Find the equation of the line through (1, 3) and (4, 9).\n\n• Slope: m = (9 − 3) / (4 − 1) = 6 / 3 = 2\n• Start y = 2x + b and substitute (1, 3): 3 = 2(1) + b, so b = 1\n• Equation: y = 2x + 1\n• Check with the OTHER point: 2(4) + 1 = 9. ✓',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Computing run/rise instead of rise/run — the x differences go on the BOTTOM.\n• Sign errors with negative coordinates: from (−2, 5) to (1, −1), m = (−1 − 5)/(1 − (−2)) = −6/3 = −2. Brackets around negatives save lives.\n• Forgetting perpendicular means flip AND switch sign: the perpendicular slope to 4 is −1/4, not −4.\n• Calling a vertical line "slope 0" — vertical is UNDEFINED; horizontal is 0.',
        tip: 'Always verify your final equation with the second point. If it fails, the slope or the intercept is wrong — 15 seconds finds it.',
      },
    ],
    tricks: [
      {
        name: 'Rise over run',
        trick:
          'You must RISE before you can RUN (alphabetical too: rise then run, y then x). Vertical change on top, horizontal change on the bottom.',
      },
      {
        name: 'Begin & Move',
        trick:
          'In y = mx + b: b is where you Begin (y-intercept), m is how you Move (slope). Plot b, then step out the slope to draw the line.',
      },
      {
        name: 'Flip and switch',
        trick:
          'Perpendicular slope = flip the fraction AND switch the sign. m = 2/3 → m⊥ = −3/2. Quick check: the two slopes must multiply to −1.',
      },
      {
        name: 'HOY VUX',
        trick:
          'Horizontal: 0 slope, equation Y = number. Vertical: Undefined slope, equation X = number. Six letters that settle every horizontal/vertical question.',
      },
    ],
    formulas: [
      'm = (y₂ − y₁) / (x₂ − x₁)',
      'y = mx + b  (slope-intercept)',
      'y − y₁ = m(x − x₁)  (point-slope)',
      'parallel: m₁ = m₂;  perpendicular: m₁ × m₂ = −1',
    ],
  },
  {
    id: 'math-linear-systems',
    subject: 'math',
    grade: 10,
    title: 'Solving Linear Systems',
    emoji: '⚖️',
    summary:
      'Find the one point where two lines agree — by substitution or elimination — and recognize instantly when there is no solution or infinitely many.',
    sections: [
      {
        heading: 'What a "solution" means',
        body:
          'A linear system is two (or more) line equations considered together. The solution is the (x, y) point that satisfies BOTH — graphically, where the lines cross.\n\nThree possible outcomes:\n\n• Lines cross once → exactly one solution (the usual case).\n• Lines are parallel (same slope, different intercepts) → no solution.\n• Same line twice → infinitely many solutions.',
      },
      {
        heading: 'Substitution',
        body:
          'Best when one variable is already isolated (or has coefficient 1).\n\n• Solve one equation for a variable: from x − y = 1, get x = y + 1.\n• Substitute that expression into the OTHER equation.\n• Solve, then back-substitute to get the second variable.\n\nSubstitution turns two equations with two unknowns into one equation with one unknown — that is the whole game.',
        tip: 'Substitute into the OTHER equation, not the one you rearranged — plugging back into the same one gives the useless 0 = 0.',
      },
      {
        heading: 'Elimination — worked example',
        body:
          'Solve: 2x + 3y = 12 and x − y = 1\n\n• Goal: make one variable cancel when we add. Multiply the second equation by 3: 3x − 3y = 3\n• Add the equations: (2x + 3x) + (3y − 3y) = 12 + 3 → 5x = 15 → x = 3\n• Back-substitute into x − y = 1: 3 − y = 1 → y = 2\n• Solution: (3, 2). Check in the FIRST equation: 2(3) + 3(2) = 6 + 6 = 12. ✓',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Multiplying only some terms of an equation — if you scale one side, scale EVERY term on both sides.\n• Sign errors when subtracting equations — adding after multiplying by a negative is safer than subtracting.\n• Stopping after finding x — a system solution needs BOTH coordinates.\n• Misreading the weird endings: reaching 0 = 5 means NO solution (parallel lines); reaching 0 = 0 means INFINITELY many (same line).',
        tip: 'Always check your (x, y) in the equation you did NOT use for back-substitution — that is the only real proof it satisfies both.',
      },
    ],
    tricks: [
      {
        name: 'Sub when a variable is lonely',
        trick:
          'See a variable with coefficient 1 (like x − y = 1)? Substitution will be quick. Everything wearing big coefficients? Elimination wins. Choose the method the problem is begging for.',
      },
      {
        name: 'Match, smash, back-sub',
        trick:
          'Elimination in three beats: MATCH one pair of coefficients (multiply as needed), SMASH the equations together so a variable cancels, BACK-SUB to recover the other variable.',
      },
      {
        name: '0 = weird decoder',
        trick:
          'Variables all vanish? Read the leftovers: a FALSE statement (0 = 5) means no solution; a TRUE statement (0 = 0) means infinitely many. False = zero, true = infinity.',
      },
    ],
    formulas: [
      'one solution: lines cross once (different slopes)',
      'no solution: same slope, different intercepts (parallel)',
      'infinite solutions: identical lines',
      'check: the solution must satisfy BOTH original equations',
    ],
  },
  {
    id: 'math-quadratic-vertex',
    subject: 'math',
    grade: 11,
    title: 'Quadratic Functions & the Vertex',
    emoji: '🎢',
    summary:
      'Read a parabola like a map: find its turning point, axis of symmetry, and max or min value from either vertex form or standard form.',
    sections: [
      {
        heading: 'The parabola and its vertex',
        body:
          'A quadratic function y = ax² + bx + c graphs as a parabola — a symmetric U shape.\n\n• If a > 0 the parabola opens UP and the vertex is the MINIMUM point.\n• If a < 0 it opens DOWN and the vertex is the MAXIMUM point.\n• The vertical line through the vertex is the axis of symmetry — the graph mirrors across it.\n\nThe vertex is the star of the show: max height of a thrown ball, minimum cost, best price — word problems almost always ask about it.',
      },
      {
        heading: 'Vertex form: y = a(x − h)² + k',
        body:
          'Vertex form hands you the vertex for free: it is (h, k).\n\n• y = 2(x − 3)² − 8 has vertex (3, −8), opens up (a = 2 > 0), so the minimum value is −8, on the axis x = 3.\n• Watch the sign of h: the form has (x − h), so (x − 3) means h = +3, and (x + 5) means h = −5.\n• a also controls width: |a| > 1 is narrower (stretched), |a| < 1 is wider (compressed).',
        tip: 'Inside the bracket lies, outside tells the truth: (x − 3) shifts RIGHT 3 (opposite of the sign), while + k outside shifts up by exactly k.',
      },
      {
        heading: 'Worked example — vertex from standard form',
        body:
          'Find the vertex of y = x² − 6x + 5.\n\n• The axis of symmetry is always x = −b/(2a) = −(−6)/(2 × 1) = 6/2 = 3\n• Substitute x = 3 to get the y-coordinate: y = 3² − 6(3) + 5 = 9 − 18 + 5 = −4\n• Vertex: (3, −4). Since a = 1 > 0, it opens up, so −4 is the minimum value.\n\nSymmetry check: the x-intercepts of this quadratic are x = 1 and x = 5 (it factors as (x − 1)(x − 5)), and their midpoint is (1 + 5)/2 = 3 — exactly the axis. ✓',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Reading the vertex of y = (x − 3)² + 2 as (−3, 2) — the h sign flips, the k sign does not.\n• Dropping the negative in x = −b/(2a) when b is already negative.\n• Answering a max/min question with the x-value: "the minimum VALUE" is k (the y-coordinate); "WHERE it occurs" is x = h.\n• Saying a parabola with a < 0 has a minimum — flip the cup, flip the extreme.',
        tip: 'Underline what the question asks: minimum VALUE → give k; WHERE the minimum occurs → give x = h. Mixing these up is a classic half-mark loss.',
      },
    ],
    tricks: [
      {
        name: 'Smile or frown',
        trick:
          'a > 0 → smile (opens up, has a minimum). a < 0 → frown (opens down, has a maximum). Sketch the tiny face before answering any max/min question.',
      },
      {
        name: 'h lies, k is honest',
        trick:
          'In y = a(x − h)² + k, the horizontal shift h "lies" (the sign inside is opposite: (x − 3) moves right), while k is honest (+k really moves up). Inside lies, outside tells the truth.',
      },
      {
        name: 'Negative b over 2a',
        trick:
          'Chant "x equals negative b over 2a" — it locates the axis of symmetry from standard form instantly. Then one substitution gives the whole vertex.',
      },
    ],
    formulas: [
      'y = a(x − h)² + k  → vertex (h, k)',
      'axis of symmetry: x = −b / (2a)',
      'a > 0: opens up (min at vertex);  a < 0: opens down (max at vertex)',
      'axis = midpoint of the x-intercepts (when they exist)',
    ],
  },
  {
    id: 'math-solving-quadratics',
    subject: 'math',
    grade: 11,
    title: 'Solving Quadratics',
    emoji: '🎯',
    summary:
      'Three ways to crack ax² + bx + c = 0 — factoring, completing the square, and the quadratic formula — plus the discriminant that predicts your answers before you solve.',
    sections: [
      {
        heading: 'Method 1: factoring + zero product',
        body:
          'If a product equals zero, at least one factor must be zero. So factor, then set each bracket to 0.\n\nSolve x² − 5x + 6 = 0:\n\n• Factor: need product +6, sum −5 → (x − 2)(x − 3) = 0\n• Zero product: x − 2 = 0 or x − 3 = 0\n• Solutions: x = 2 or x = 3\n\nFastest method when it factors — always try it first.',
        tip: 'The equation MUST equal zero before factoring. For x² − 5x = −6, move everything to one side first — you cannot use the zero product property on "= −6".',
      },
      {
        heading: 'Method 2: completing the square',
        body:
          'Turn the quadratic into a perfect square, then square-root both sides.\n\nSolve x² + 6x + 2 = 0:\n\n• Move the constant: x² + 6x = −2\n• Take half of 6 (which is 3), square it (9), add to BOTH sides: x² + 6x + 9 = 7\n• The left side is now a perfect square: (x + 3)² = 7\n• Square root both sides (both signs!): x + 3 = ±√7\n• Solutions: x = −3 ± √7\n\nThis method gives exact radical answers and is also how vertex form is derived.',
      },
      {
        heading: 'Method 3: the quadratic formula',
        body:
          'Works on EVERY quadratic, factorable or not:\n\nx = (−b ± √(b² − 4ac)) / (2a)\n\nSolve 2x² + 3x − 2 = 0 (a = 2, b = 3, c = −2):\n\n• Discriminant: b² − 4ac = 3² − 4(2)(−2) = 9 + 16 = 25\n• x = (−3 ± √25) / (2 × 2) = (−3 ± 5) / 4\n• x = (−3 + 5)/4 = 2/4 = 1/2, or x = (−3 − 5)/4 = −8/4 = −2\n• Check x = 1/2: 2(1/4) + 3(1/2) − 2 = 0.5 + 1.5 − 2 = 0. ✓',
      },
      {
        heading: 'The discriminant: answers before you solve',
        body:
          'The part under the root, D = b² − 4ac, tells you how many real solutions exist:\n\n• D > 0 → two different real roots (the parabola crosses the x-axis twice).\n• D = 0 → exactly one real root (the vertex sits ON the x-axis).\n• D < 0 → no real roots (the parabola never touches the x-axis).\n\n"How many solutions/x-intercepts?" questions need only D — do not solve the whole thing.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Forgetting the ± — a quadratic usually has TWO answers; losing one costs half the marks.\n• Substituting a negative c without brackets: −4ac with c = −2 is +16, not −16.\n• Dividing only −b by 2a instead of the whole numerator — the fraction bar covers everything.\n• In completing the square, adding the number to one side only.',
        tip: 'Write the formula with brackets already in place: x = (−(b) ± √((b)² − 4(a)(c))) / (2(a)), then drop values into the slots. Sign errors nearly vanish.',
      },
    ],
    tricks: [
      {
        name: 'Zero product principle',
        trick:
          'If A × B = 0, then A = 0 or B = 0 — the only way a product dies is if a factor dies. This is WHY factoring solves equations, and why the equation must equal 0 first.',
      },
      {
        name: 'Halve, square, add to both',
        trick:
          'Completing the square in five words: take half of b, square it, add it to both sides. (x² + 6x → half of 6 is 3 → add 9 → (x + 3)².)',
      },
      {
        name: 'Pop Goes the Weasel',
        trick:
          'Sing the formula to the tune: "x equals negative b, plus or minus the square root, of b squared minus four a c, all over two a." It sticks for life.',
      },
      {
        name: 'D for Detector',
        trick:
          'The Discriminant b² − 4ac detects roots without solving: positive → 2, zero → 1, negative → 0. Memorize the trio "2, 1, 0" for "+, 0, −".',
      },
    ],
    formulas: [
      'x = (−b ± √(b² − 4ac)) / (2a)',
      'D = b² − 4ac:  D > 0 two real roots, D = 0 one, D < 0 none',
      'zero product: AB = 0 → A = 0 or B = 0',
      'complete the square: x² + bx + (b/2)² = (x + b/2)²',
    ],
  },
  {
    id: 'math-sine-cosine-law',
    subject: 'math',
    grade: 11,
    title: 'Sine Law & Cosine Law',
    emoji: '🔺',
    summary:
      'Solve ANY triangle — not just right triangles — and know at a glance which law the given information calls for.',
    sections: [
      {
        heading: 'Two laws for non-right triangles',
        body:
          'Label a triangle with capital letters for angles (A, B, C) and lowercase for the sides OPPOSITE them (a is across from A).\n\n• Sine Law: a/sin A = b/sin B = c/sin C — matched side-angle pairs all share the same ratio.\n• Cosine Law: c² = a² + b² − 2ab·cos C — relates all three sides and ONE angle.\n\nSOH CAH TOA still exists, but it only works with a 90° angle. These two laws work on every triangle.',
      },
      {
        heading: 'Which law? Read the givens',
        body:
          '• You know a MATCHED PAIR (an angle and the side across from it) → Sine Law.\n• You know two sides and the angle BETWEEN them (SAS) → Cosine Law.\n• You know all three sides (SSS) → Cosine Law, rearranged to find an angle.\n\nQuick test: no complete opposite pair anywhere? Sine Law is useless — go cosine.',
        tip: 'The angle in the Cosine Law must be the one BETWEEN the two known sides (the "included" angle), and it sits opposite the side you are solving for.',
      },
      {
        heading: 'Worked example — Sine Law',
        body:
          'In triangle ABC: A = 40°, B = 60°, a = 10. Find b.\n\n• We have the pair (A, a) — Sine Law applies.\n• b / sin 60° = 10 / sin 40°\n• b = 10 × sin 60° / sin 40° = 10 × 0.8660 / 0.6428 ≈ 13.5\n\nSanity check: B (60°) is bigger than A (40°), so b must be longer than a = 10 — and 13.5 is. ✓',
      },
      {
        heading: 'Worked example — Cosine Law',
        body:
          'Two sides of 5 and 7 meet at a 60° angle. Find the third side c.\n\n• SAS setup → Cosine Law: c² = 5² + 7² − 2(5)(7)·cos 60°\n• c² = 25 + 49 − 70 × 0.5 = 74 − 35 = 39\n• c = √39 ≈ 6.2\n\nSanity check: with a 90° angle we would get c² = 74 (pure Pythagoras); a smaller angle (60°) pulls the sides closer, so c² = 39 < 74 makes sense. ✓',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Mismatching pairs in the Sine Law — a must sit over sin A, not over some other angle.\n• Forgetting to square-root at the end of the Cosine Law: c² = 39 is not the answer; c ≈ 6.2 is.\n• Order of operations slip: compute 2ab·cos C as one product BEFORE subtracting it from a² + b².\n• The ambiguous case: given two sides and a NON-included angle (SSA), the Sine Law can hide a second valid obtuse angle (180° minus the one your calculator gives). Check whether both work.',
        tip: 'Biggest angle faces longest side, smallest faces shortest. If your solved triangle breaks this rule, something went wrong — recheck before moving on.',
      },
    ],
    tricks: [
      {
        name: 'Pair to compare',
        trick:
          'Sine Law only works if you own a complete matched pair — an angle AND its opposite side. No pair, no Sine Law. Scan for the pair before choosing.',
      },
      {
        name: 'SAS & SSS say Cosine',
        trick:
          'Both triggers for the Cosine Law are all-consonant clumps: two Sides with the Angle Squeezed between them, or three Sides. Anything with a matched pair goes to Sine Law instead.',
      },
      {
        name: 'Pythagoras with a correction',
        trick:
          'Cosine Law is c² = a² + b² (Pythagoras) minus the correction 2ab·cos C. At C = 90°, cos C = 0 and the correction vanishes — it literally CONTAINS Pythagoras.',
      },
    ],
    formulas: [
      'a / sin A = b / sin B = c / sin C',
      'c² = a² + b² − 2ab·cos C',
      'cos C = (a² + b² − c²) / (2ab)  (finding an angle from 3 sides)',
      'matched pair → Sine Law;  SAS or SSS → Cosine Law',
    ],
  },
  {
    id: 'math-exp-logs',
    subject: 'math',
    grade: 12,
    title: 'Exponentials & Logarithms',
    emoji: '🪵',
    summary:
      'Meet the logarithm — the "what power?" button — master its three laws, and solve for exponents that used to be unreachable.',
    sections: [
      {
        heading: 'A log IS an exponent',
        body:
          'log_b(x) asks one question: "what power do I raise b to, to get x?"\n\n• log₂ 32 = 5, because 2⁵ = 32.\n• log₁₀ 1000 = 3, because 10³ = 1000.\n\nThe two forms are the same statement in different costumes:\n\nlog_b(x) = y  ⇔  bʸ = x\n\nInstant values worth knowing: log_b(b) = 1 (b¹ = b) and log_b(1) = 0 (b⁰ = 1).',
        tip: 'You can only take the log of a POSITIVE number. log(0) and log(−5) are undefined — no real power of a positive base lands on zero or below.',
      },
      {
        heading: 'The three log laws',
        body:
          'Each log law is an exponent law wearing a disguise (because logs ARE exponents):\n\n• Product law: log_b(xy) = log_b(x) + log_b(y) — multiplication inside becomes addition outside.\n• Quotient law: log_b(x/y) = log_b(x) − log_b(y).\n• Power law: log_b(xⁿ) = n·log_b(x) — the exponent hops down front. This one solves equations.\n\nExample: log₂ 8 + log₂ 4 = 3 + 2 = 5, and indeed log₂(8 × 4) = log₂ 32 = 5. ✓',
      },
      {
        heading: 'Worked example — solving an exponential equation',
        body:
          'Solve 3ˣ = 20 (20 is not a nice power of 3, so we need logs).\n\n• Take log of both sides: log(3ˣ) = log 20\n• Power law pulls x down: x·log 3 = log 20\n• Divide: x = log 20 / log 3 ≈ 1.3010 / 0.4771 ≈ 2.73\n\nSanity check: 3² = 9 and 3³ = 27, and 20 sits between them — so x between 2 and 3 is right. ✓',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Inventing a fake law: log(x + y) is NOT log x + log y. The product law converts MULTIPLICATION to addition, nothing converts addition.\n• Splitting log(x)/log(y) as log(x/y) — the quotient law is about a quotient INSIDE one log, not a quotient of two logs.\n• Forgetting to reject invalid answers: after solving a log equation, any x that makes an original log argument ≤ 0 must be thrown out.\n• Writing log 20 / log 3 as log(20/3) — check: log(20/3) ≈ 0.82, but the answer is 2.73.',
        tip: 'After solving any log equation, substitute back into the ORIGINAL equation. If any log ends up with a zero or negative inside, that "solution" is extraneous — reject it.',
      },
    ],
    tricks: [
      {
        name: 'The "what power?" button',
        trick:
          'Read log₂ 32 out loud as "2 to WHAT POWER gives 32?" Every log expression becomes a fill-in-the-blank exponent question — the log is the answer to it.',
      },
      {
        name: 'Loop the log',
        trick:
          'To convert log_b(x) = y, loop counterclockwise: start at the base b, sweep up to y, land on x → bʸ = x. The base of the log is the base of the power.',
      },
      {
        name: 'Logs knock exponents down',
        trick:
          'The power law is a ladder: an exponent trapped up on xⁿ climbs down to the front as a multiplier, n·log(x). Unknown stuck in an exponent? Take a log to bring it to ground level.',
      },
    ],
    formulas: [
      'log_b(x) = y  ⇔  bʸ = x',
      'log_b(xy) = log_b x + log_b y',
      'log_b(x/y) = log_b x − log_b y',
      'log_b(xⁿ) = n·log_b x',
      'log_b b = 1,  log_b 1 = 0',
      'change of base: log_b x = log x / log b',
    ],
  },
  {
    id: 'math-unit-circle',
    subject: 'math',
    grade: 12,
    title: 'The Unit Circle & Radians',
    emoji: '⭕',
    summary:
      'Trade degrees for radians, read sine and cosine straight off a circle, and evaluate trig at any special angle without a calculator.',
    sections: [
      {
        heading: 'Radians: the natural angle unit',
        body:
          'One radian is the angle whose arc length equals the radius. The master fact:\n\nπ radians = 180°\n\nEverything converts through it:\n\n• degrees → radians: multiply by π/180\n• radians → degrees: multiply by 180/π\n\nExample: 150° × π/180 = 150π/180 = 5π/6. Landmarks worth memorizing: 90° = π/2, 60° = π/3, 45° = π/4, 30° = π/6, 360° = 2π.',
        tip: 'A radian answer with no π in it is still fine — 2 rad ≈ 114.6° is a real angle. But if the question uses radians, your calculator must be in radian mode.',
      },
      {
        heading: 'The unit circle: cos is x, sin is y',
        body:
          'The unit circle has radius 1, centred at the origin. Rotate an angle θ counterclockwise from the positive x-axis; the point where you land is:\n\n(cos θ, sin θ)\n\n• cos θ is the x-coordinate, sin θ is the y-coordinate. That is the whole definition.\n• tan θ = sin θ / cos θ = y/x.\n• Reading coordinates: at θ = 0 the point is (1, 0), so cos 0 = 1, sin 0 = 0. At θ = π/2 the point is (0, 1), so cos(π/2) = 0, sin(π/2) = 1.\n\nSigns follow the quadrant of the landing point — that is exactly what the CAST rule summarizes.',
      },
      {
        heading: 'Special angles and the CAST rule',
        body:
          'First-quadrant values to memorize (then symmetry gives everything else):\n\n• sin: sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2\n• cos runs the same list backwards: cos 30° = √3/2, cos 45° = √2/2, cos 60° = 1/2\n\nCAST tells you which ratios are POSITIVE in each quadrant, going counterclockwise from quadrant IV: C (Cos positive, QIV), A (All positive, QI), S (Sin positive, QII), T (Tan positive, QIII).\n\nWorked example — evaluate sin 150° and cos 150° exactly:\n\n• 150° lands in quadrant II; its reference angle (distance to the x-axis) is 180° − 150° = 30°\n• Quadrant II is the S quadrant: sine positive, cosine negative\n• sin 150° = +sin 30° = 1/2;  cos 150° = −cos 30° = −√3/2\n• In radians: sin(5π/6) = 1/2, cos(5π/6) = −√3/2',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Calculator mode mismatch — sin 30 in radian mode gives −0.988, not 0.5. Match the mode to the question.\n• Forgetting the quadrant sign after finding the reference angle: the reference angle gives the SIZE of the value; CAST gives its SIGN.\n• Mixing up the pair: sin 60° = √3/2 but sin 30° = 1/2 — bigger acute angle, bigger sine.\n• Measuring angles clockwise — positive angles rotate COUNTERclockwise; clockwise rotations are negative angles.',
        tip: 'Two-step routine for any special angle: (1) reference angle → the numeric value, (2) CAST quadrant → the sign. Doing the steps in that order prevents nearly every error.',
      },
    ],
    tricks: [
      {
        name: 'All Students Take Calculus',
        trick:
          'CAST rule quadrant by quadrant, counterclockwise from QI: All positive (QI), Sin positive (QII), Tan positive (QIII), Cos positive (QIV). The sentence orders them QI → QIV.',
      },
      {
        name: 'π is 180',
        trick:
          'One equation rules every conversion: π rad = 180°. Halve both sides, third them, quarter them — π/2 = 90°, π/3 = 60°, π/4 = 45°, π/6 = 30°. Never memorize conversions, derive them.',
      },
      {
        name: '√1, √2, √3 over 2',
        trick:
          'The sine ladder: sin 30°, 45°, 60° = √1/2, √2/2, √3/2 — the number under the root just counts up. Cosine is the same ladder read backwards.',
      },
      {
        name: 'x before y, C before S',
        trick:
          'Alphabetical order matches coordinate order: Cos comes before Sin just as x comes before y. The unit-circle point is (cos θ, sin θ) — never the other way around.',
      },
    ],
    formulas: [
      'π rad = 180°;  deg × π/180 = rad;  rad × 180/π = deg',
      'point on unit circle: (cos θ, sin θ)',
      'tan θ = sin θ / cos θ',
      'sin²θ + cos²θ = 1',
      'arc length: s = rθ  (θ in radians)',
    ],
  },
  {
    id: 'math-perms-combs',
    subject: 'math',
    grade: 12,
    title: 'Permutations vs Combinations',
    emoji: '🎲',
    summary:
      'Count arrangements and selections without listing them — and never again confuse "how many orders?" with "how many groups?".',
    sections: [
      {
        heading: 'The fundamental counting principle',
        body:
          'If a task happens in stages, MULTIPLY the number of options at each stage.\n\n• 3 shirts and 4 pants → 3 × 4 = 12 outfits.\n• Arranging 5 books on a shelf: 5 choices for the first spot, 4 for the next, then 3, 2, 1 → 5 × 4 × 3 × 2 × 1 = 120.\n\nThat countdown product has a name: factorial. n! = n × (n−1) × ... × 2 × 1, so 5! = 120. By definition, 0! = 1.',
      },
      {
        heading: 'Permutations: order matters',
        body:
          'A permutation is an ARRANGEMENT — swapping two items creates a different outcome. Gold vs silver, president vs vice-president, passwords.\n\nChoosing and arranging r items from n:\n\nnPr = n! / (n − r)!\n\nIn practice it is just a countdown with r factors: 10P2 = 10 × 9 = 90 (ten choices for the first spot, nine left for the second).',
      },
      {
        heading: 'Combinations: order does not matter',
        body:
          'A combination is a SELECTION — only who is in the group counts, not their order. Committees, pizza toppings, lottery numbers, poker hands.\n\nnCr = n! / (r!(n − r)!)\n\nIt is the permutation count divided by r! — because every group of r people was counted r! times in the permutation count (once per internal ordering):\n\nnCr = nPr / r!',
        tip: 'Ask the litmus question: "if I swap two of the chosen items, is the outcome DIFFERENT?" Yes → permutation. No → combination. This one question sorts every problem.',
      },
      {
        heading: 'Worked example — same club, two questions',
        body:
          'A club has 10 members.\n\nQuestion 1: How many ways to choose a president and a vice-president?\n\n• Different roles → order matters → permutation\n• 10P2 = 10 × 9 = 90\n\nQuestion 2: How many ways to choose a 2-person committee?\n\n• Identical roles → order does not matter → combination\n• 10C2 = 10P2 / 2! = 90 / 2 = 45\n\nThe division by 2 removes the double-counting: the committee {Ava, Ben} was counted twice in the 90 (Ava-then-Ben and Ben-then-Ava), but it is one committee.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Using nCr for ranked outcomes (medals, officer positions) or nPr for unranked groups (committees) — always run the swap test first.\n• Forgetting 0! = 1, which breaks edge cases like nCn = 1 (one way to choose everyone).\n• Expanding giant factorials by hand: 50!/48! is just 50 × 49 = 2450 after cancelling — cancel BEFORE you multiply.\n• Missing the symmetry shortcut: 10C8 = 10C2 = 45 (choosing 8 to include is the same as choosing 2 to leave out).',
        tip: 'nPr is always ≥ nCr for the same n and r. If your "committee" count came out bigger than your "arrangement" count, you used the formulas backwards.',
      },
    ],
    tricks: [
      {
        name: 'P for Podium, C for Crew',
        trick:
          'Permutation = Podium: 1st, 2nd, 3rd are different outcomes, order matters. Combination = Crew: you are in the crew or not, order is irrelevant.',
      },
      {
        name: 'The combination lock lie',
        trick:
          'A "combination" lock is misnamed — 3-5-7 and 7-5-3 do NOT both open it, so order matters and it is really a PERMUTATION lock. Remember the lie, remember the difference.',
      },
      {
        name: 'Divide out the shuffles',
        trick:
          'nCr = nPr ÷ r!. Count arrangements first, then divide by r! to erase the internal shuffles of each group. If you ever forget the C formula, rebuild it this way.',
      },
      {
        name: 'Countdown with r factors',
        trick:
          'Skip factorial fractions: nPr is just a countdown from n with exactly r factors. 8P3 = 8 × 7 × 6 = 336. For nCr, do the same countdown, then divide by r!.',
      },
    ],
    formulas: [
      'n! = n × (n−1) × ... × 2 × 1;  0! = 1',
      'nPr = n! / (n − r)!  (order matters)',
      'nCr = n! / (r!(n − r)!)  (order does not matter)',
      'nCr = nPr / r!',
      'nCr = nC(n−r)  (symmetry)',
    ],
  },
]
