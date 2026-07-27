import type { Lesson } from '../../types'

/** Physics lessons for the Learning Center — Grades 10-12, brief, clear, hack-packed. */
export const physicsLessons: Lesson[] = [
  {
    id: 'phys-motion-basics',
    subject: 'physics',
    grade: 10,
    title: 'Motion Basics',
    emoji: '🏃',
    summary:
      'Distance vs displacement, speed vs velocity — and how to read a distance-time graph like a story about someone walking.',
    sections: [
      {
        heading: 'Distance vs displacement, speed vs velocity',
        body:
          'Distance is the total path travelled — it only ever grows. Displacement is the straight-line change in position, with a direction attached.\n\n• Distance: "how far did your shoes travel?" (scalar, no direction)\n• Displacement: "how far are you from where you started, and which way?" (vector)\n• Speed = distance ÷ time (scalar)\n• Velocity = displacement ÷ time (vector — needs a direction like east or [E])\n\nIf you walk around a full track and stop where you started, your distance is 400 m but your displacement is 0 m — so your average velocity is 0 too.',
        tip: 'If the answer needs a direction (east, up, [N]) it is a vector quantity: displacement or velocity. No direction means distance or speed.',
      },
      {
        heading: 'Worked example',
        body:
          'A student walks 40 m east, then turns around and walks 10 m west. The whole trip takes 25 s.\n\n• Distance = 40 m + 10 m = 50 m\n• Displacement = 40 m east − 10 m west = 30 m east\n• Average speed = 50 m ÷ 25 s = 2.0 m/s\n• Average velocity = 30 m east ÷ 25 s = 1.2 m/s east\n\nNotice speed and velocity give different numbers whenever you double back.',
      },
      {
        heading: 'Reading distance-time (d-t) graphs',
        body:
          'A d-t graph puts position on the vertical axis and time on the horizontal axis. The slope IS the velocity.\n\n• Flat line → not moving (slope 0)\n• Straight tilted line → constant velocity\n• Steeper line → faster\n• Line sloping downward → moving back toward the start\n• Curved line → speeding up or slowing down (velocity is changing)\n\nTo get velocity from the graph: pick two points and compute slope = rise ÷ run = Δd ÷ Δt.',
        tip: 'Never read the height of a d-t graph as speed. Height = where you are. Slope = how fast you are moving.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Writing a velocity without a direction — "2.0 m/s" is a speed; "2.0 m/s east" is a velocity.\n• Using total distance when the question asks for displacement (or vice versa).\n• Mixing units: converting km/h to m/s means dividing by 3.6, not 3.6-ing randomly. 90 km/h = 25 m/s.\n• Calling a flat section of a d-t graph "constant speed" — flat means stopped.',
      },
    ],
    tricks: [
      {
        name: 'Speedometer vs GPS',
        trick:
          'Your car speedometer shows speed (just a number). A GPS arrow shows velocity (number + direction). If the question mentions direction, think GPS.',
      },
      {
        name: 'The d-s-t triangle',
        trick:
          'Draw a triangle with d on top, s and t on the bottom. Cover the one you want: d = s × t, s = d ÷ t, t = d ÷ s. Cover-up gives the rearrangement instantly.',
      },
      {
        name: 'Slope tells the story',
        trick:
          'On a d-t graph, narrate the slope: flat = "standing still", gentle = "strolling", steep = "sprinting", downhill = "walking back". If you can tell the story, you can answer any graph question.',
      },
    ],
    formulas: [
      'average speed = distance ÷ time',
      'average velocity = displacement ÷ time',
      'slope of d-t graph = velocity',
      'km/h ÷ 3.6 = m/s',
    ],
  },
  {
    id: 'phys-energy-forms',
    subject: 'physics',
    grade: 10,
    title: 'Energy Forms & Conservation',
    emoji: '⚡',
    summary:
      'Energy never disappears — it just changes costume. Learn the main forms and use conservation to solve problems without timing anything.',
    sections: [
      {
        heading: 'The forms of energy',
        body:
          'Energy is the ability to do work, measured in joules (J). The forms you must recognize:\n\n• Kinetic energy (Ek) — energy of motion: Ek = ½mv²\n• Gravitational potential energy (Ep) — stored by height: Ep = mgh\n• Elastic potential — stored in stretched or squashed springs\n• Thermal — the jiggling of particles (what "friction losses" become)\n• Chemical, electrical, sound, light — other costumes energy wears\n\nOne joule is small: lifting an apple (about 100 g) up 1 m stores roughly 1 J.',
      },
      {
        heading: 'Conservation of energy',
        body:
          'The law: energy cannot be created or destroyed, only transformed. In a closed system the total stays constant.\n\nFor a falling or rolling object with no friction:\n\nEp (top) = Ek (bottom), or in general Ep + Ek = constant.\n\nThis is powerful because it skips time completely — you can find speeds from heights without knowing how long the fall took.',
        tip: 'If friction matters, energy is not gone — it became thermal energy. Write: Ep = Ek + heat. "Lost" energy always has a destination.',
      },
      {
        heading: 'Worked example',
        body:
          'A 2.0 kg ball is dropped from a height of 5.0 m. How fast is it moving just before it lands? (g = 9.81 m/s², ignore air resistance)\n\n• Energy at the top: Ep = mgh = 2.0 × 9.81 × 5.0 = 98.1 J\n• At the bottom all of it is kinetic: Ek = 98.1 J\n• Solve ½mv² = 98.1 → v² = 2 × 98.1 ÷ 2.0 = 98.1\n• v = √98.1 ≈ 9.90 m/s\n\nBonus insight: the mass cancels — a 4.0 kg ball hits at the same 9.90 m/s.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Forgetting to square the velocity in Ek = ½mv² (or forgetting the ½).\n• Using height above the ground when the question means height above the lowest point of the motion — pick a reference level and say so.\n• Claiming energy is "used up". It is transformed — say where it went (usually thermal/sound).\n• Mixing grams and kilograms: mass must be in kg for joules to come out.',
      },
    ],
    tricks: [
      {
        name: 'Energy changes costume',
        trick:
          'Energy is an actor that never leaves the stage — it just changes costume (forms). Every "loss" is a costume change into thermal or sound. Track the costume changes and totals always balance.',
      },
      {
        name: 'Top = Ep, bottom = Ek',
        trick:
          'For drops, swings, and ramps: at the highest point think "all potential", at the lowest point think "all kinetic", and halfway it is a mix. Sketch the path and label the extremes first.',
      },
      {
        name: 'Mass cancels in free fall',
        trick:
          'In mgh = ½mv² the m cancels: v = √(2gh). Heavy and light objects dropped from the same height land at the same speed — a great sanity check for your algebra.',
      },
    ],
    formulas: ['Ek = ½mv²', 'Ep = mgh', 'Ep + Ek = constant (no friction)', 'v = √(2gh) for a drop from rest'],
  },
  {
    id: 'phys-kinematics-equations',
    subject: 'physics',
    grade: 11,
    title: 'Kinematics Equations',
    emoji: '🚗',
    summary:
      'The "big five" equations solve every uniform-acceleration problem — the whole skill is picking the right one, and there is a trick for that.',
    sections: [
      {
        heading: 'The big five',
        body:
          'For motion with constant (uniform) acceleration there are five variables: displacement (Δd), initial velocity (v₁), final velocity (v₂), acceleration (a), and time (t).\n\nThe big five equations each connect four of them — which means each one is MISSING exactly one variable:\n\n• v₂ = v₁ + at  (missing Δd)\n• Δd = v₁t + ½at²  (missing v₂)\n• Δd = v₂t − ½at²  (missing v₁)\n• v₂² = v₁² + 2aΔd  (missing t)\n• Δd = ½(v₁ + v₂)t  (missing a)',
        tip: 'These only work when acceleration is constant. If a changes partway, split the motion into stages and solve each stage separately.',
      },
      {
        heading: 'How to choose the right one',
        body:
          'List what you know and what you want. That covers four variables. The fifth one — the one you neither know nor want — tells you which equation to use: pick the equation missing that variable.\n\nExample: you know v₁, a, t and want Δd. The variable not involved is v₂, so use the equation missing v₂: Δd = v₁t + ½at².\n\nWatch for hidden values in the wording:\n\n• "starts from rest" → v₁ = 0\n• "comes to a stop" → v₂ = 0\n• "dropped" → v₁ = 0 and a = 9.81 m/s² downward',
      },
      {
        heading: 'Worked example',
        body:
          'A car travelling at 5.0 m/s accelerates at 2.0 m/s² for 4.0 s. Find its final velocity and how far it travels.\n\nGiven: v₁ = 5.0 m/s, a = 2.0 m/s², t = 4.0 s.\n\n• Final velocity (equation missing Δd): v₂ = v₁ + at = 5.0 + (2.0)(4.0) = 13 m/s\n• Displacement (equation missing v₂): Δd = v₁t + ½at² = (5.0)(4.0) + ½(2.0)(4.0)²\n• Δd = 20 + ½(2.0)(16) = 20 + 16 = 36 m\n\nCheck with the average-velocity equation: Δd = ½(5.0 + 13)(4.0) = ½(18)(4.0) = 36 m ✓',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Sign errors: pick a positive direction and stick to it. A ball thrown up with v₁ = +15 m/s has a = −9.81 m/s².\n• Forgetting to square the time in ½at² — the single most common slip.\n• Using a big-five equation when acceleration is not constant.\n• Taking the square root in v₂² = v₁² + 2aΔd and ignoring that the answer could be negative (moving the other way).',
        tip: 'Before computing, write "up is positive" (or whatever you chose) at the top of your solution. Half of kinematics errors are just sign slips.',
      },
    ],
    tricks: [
      {
        name: 'GUESS method',
        trick:
          'Given, Unknown, Equation, Substitute, Solve. Write the G and U lists first — they instantly reveal the missing fifth variable, which picks your Equation. Then substitute with units and solve.',
      },
      {
        name: 'The missing-variable rule',
        trick:
          'Each big-five equation is missing exactly one of Δd, v₁, v₂, a, t. Find the variable your problem does not mention and does not ask for — use the equation missing it. No memorizing "which equation is for what".',
      },
      {
        name: 'Hidden zeros',
        trick:
          '"From rest" = v₁ is 0. "Comes to rest / stops" = v₂ is 0. "Dropped" = v₁ is 0 AND a = g. Circle these phrases — they are free given values the question is hiding in plain sight.',
      },
    ],
    formulas: [
      'v₂ = v₁ + at',
      'Δd = v₁t + ½at²',
      'Δd = v₂t − ½at²',
      'v₂² = v₁² + 2aΔd',
      'Δd = ½(v₁ + v₂)t',
      'g = 9.81 m/s² (downward)',
    ],
  },
  {
    id: 'phys-newtons-laws',
    subject: 'physics',
    grade: 11,
    title: "Newton's Laws & Free-Body Diagrams",
    emoji: '🍎',
    summary:
      'Three laws explain every push and pull in the universe — and a good free-body diagram turns any force problem into simple arithmetic.',
    sections: [
      {
        heading: 'The three laws in plain language',
        body:
          '• First law (inertia): an object keeps doing what it is doing — resting or moving at constant velocity — unless a net force acts on it. Objects do not need a force to keep moving; they need a force to CHANGE their motion.\n\n• Second law: net force causes acceleration: Fnet = ma. Double the net force, double the acceleration. Double the mass, half the acceleration.\n\n• Third law: forces come in pairs. If A pushes on B, then B pushes back on A with equal force in the opposite direction — acting on DIFFERENT objects.',
        tip: 'Third-law pairs never cancel each other, because they act on different objects. The normal force and gravity on a resting book are NOT a third-law pair — they just happen to balance.',
      },
      {
        heading: 'Free-body diagrams (FBDs)',
        body:
          'An FBD is a dot (the object) with arrows for every force acting ON it. Nothing else.\n\nHow to draw one:\n\n• Draw a dot for the object.\n• Add gravity (Fg = mg) pointing straight down — always there near Earth.\n• Touching a surface? Add a normal force (FN) perpendicular to the surface.\n• Rope or string? Add tension (FT) along the rope, pulling away from the object.\n• Sliding or trying to slide? Add friction (Ff) along the surface, opposing the motion.\n• Add any applied force (Fa) from the problem.\n\nForces the object exerts on OTHER things do not belong on its FBD.',
      },
      {
        heading: 'Worked example',
        body:
          'A 10 kg box is pushed to the right with an applied force of 50 N. Friction is 20 N. Find the acceleration.\n\n• FBD: Fg down, FN up (these balance — no vertical motion), Fa = 50 N right, Ff = 20 N left.\n• Net horizontal force: Fnet = 50 − 20 = 30 N right\n• Second law: a = Fnet ÷ m = 30 ÷ 10 = 3.0 m/s² right\n\nSanity check with the vertical: Fg = mg = 10 × 9.81 = 98.1 N down, so FN = 98.1 N up. Balanced ✓',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Using the applied force instead of the NET force in F = ma — always subtract friction first.\n• Drawing "the force of motion" on an FBD. Motion is not a force; moving objects need no forward force to keep moving (first law).\n• Confusing mass (kg, same everywhere) with weight (N, a force: Fg = mg).\n• On ramps: drawing the normal force straight up instead of perpendicular to the slope.',
        tip: 'Every arrow on your FBD must answer "what object exerts this force?" If you cannot name the pusher or puller, the arrow does not belong.',
      },
    ],
    tricks: [
      {
        name: 'Lazy universe',
        trick:
          'First law = the universe is lazy: things keep doing whatever they were doing. Passengers lurching forward when a bus brakes are not "thrown" — they simply keep moving while the bus stops.',
      },
      {
        name: 'FBD roll call: "Gravity, Normal, Tension, Friction, Applied"',
        trick:
          'Run the same five-force roll call for every FBD: Gravity (always), Normal (touching a surface?), Tension (rope?), Friction (sliding?), Applied (pushed or pulled?). Ask each one; draw only the ones present.',
      },
      {
        name: 'Fnet triangle',
        trick:
          'Fnet = ma works like the d-s-t triangle: cover the unknown. a = Fnet ÷ m and m = Fnet ÷ a. Just make sure the F you cover is the NET force, not one individual force.',
      },
    ],
    formulas: ['Fnet = ma', 'Fg = mg  (g = 9.81 m/s²)', 'Fnet = sum of all forces (with signs)', '1 N = 1 kg·m/s²'],
  },
  {
    id: 'phys-work-power-energy',
    subject: 'physics',
    grade: 11,
    title: 'Work, Power & Energy',
    emoji: '🏋️',
    summary:
      'Physics "work" is not effort — it is force through a distance. Power is how fast you do it. Master both plus the work-energy connection.',
    sections: [
      {
        heading: 'What counts as work',
        body:
          'Work is done when a force moves an object through a distance in the direction of the force:\n\nW = FΔd (force and displacement in the same direction), measured in joules.\n\nThree situations where the work is ZERO, no matter how tired you feel:\n\n• No movement: pushing a wall does no work on the wall.\n• Force perpendicular to motion: carrying a bag horizontally — your upward force does no work on it.\n• No force needed: an object coasting in space does work on nothing.',
        tip: 'Work can be negative! Friction acting opposite to motion does negative work — it removes kinetic energy from the object.',
      },
      {
        heading: 'Power: the rate of doing work',
        body:
          'Power is how quickly work is done (or energy is transferred):\n\nP = W ÷ t, measured in watts (W). 1 W = 1 J/s.\n\nTwo students carry identical boxes up the same stairs. They do the same work — but the one who runs does it in less time, so their power output is higher.\n\nA kilowatt (kW) is 1000 W. Your electricity bill charges for kilowatt-hours — energy, not power.',
      },
      {
        heading: 'Worked example',
        body:
          'A 15 kg box is lifted straight up 2.0 m at constant speed in 3.0 s. Find the work done and the power. (g = 9.81 m/s²)\n\n• Lifting force needed (constant speed → balanced): F = mg = 15 × 9.81 = 147.15 N\n• Work: W = FΔd = 147.15 × 2.0 = 294.3 J ≈ 294 J\n• Power: P = W ÷ t = 294.3 ÷ 3.0 = 98.1 W\n\nShortcut for lifting: W = mgh gives the same 294 J in one step, because lifting stores gravitational potential energy.',
      },
      {
        heading: 'The work-energy connection',
        body:
          'Work is the bridge between force problems and energy problems:\n\n• Net work done on an object changes its kinetic energy: Wnet = ΔEk\n• Work done lifting becomes potential energy: W = mgh\n• Work done against friction becomes thermal energy\n\nSo if a question gives forces and distances but asks about speed, do not panic — compute the work, convert it to ΔEk, and solve ½mv² for v.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Counting "holding something heavy" as work — no distance, no work.\n• Using the total path length instead of displacement in the direction of the force.\n• Mixing up W the symbol for work with W the unit watt. Work is in joules; watts measure power.\n• Forgetting that time matters for power but NOT for work.',
      },
    ],
    tricks: [
      {
        name: 'No move, no work',
        trick:
          'Chant it: "no move, no work." Then check direction: only the part of the force along the motion counts. Straining, sweating, and holding still are worth 0 J in physics.',
      },
      {
        name: 'Power is a pace',
        trick:
          'Work is the size of the job; power is the pace you do it at. Same stairs, same work — sprinting up just raises the power. If a question mentions time, it is a power question.',
      },
      {
        name: 'Follow the joules',
        trick:
          'Work, kinetic energy, potential energy, and heat are all in joules — one currency. Any force-and-distance question can be converted to energy bookkeeping: joules in = joules out.',
      },
    ],
    formulas: ['W = FΔd', 'P = W ÷ t = ΔE ÷ t', 'Wnet = ΔEk', 'W = mgh (lifting)', '1 W = 1 J/s, 1 kW = 1000 W'],
  },
  {
    id: 'phys-waves-sound',
    subject: 'physics',
    grade: 11,
    title: 'Waves & Sound',
    emoji: '🔊',
    summary:
      'Every wave — sound, light, water — obeys one tiny equation: v = fλ. Learn the anatomy of a wave and never mix up frequency and wavelength again.',
    sections: [
      {
        heading: 'Wave anatomy',
        body:
          'A wave is a travelling disturbance that carries energy without carrying matter.\n\n• Wavelength (λ): the distance of one complete cycle, in metres — crest to crest.\n• Frequency (f): how many cycles pass per second, in hertz (Hz). 1 Hz = 1 cycle/s.\n• Period (T): the time for one cycle, in seconds. T = 1 ÷ f.\n• Amplitude: the maximum distance from rest — bigger amplitude means more energy (louder sound, brighter light).\n\nSound is a longitudinal wave (particles vibrate along the travel direction); a wave on a rope is transverse (vibration is perpendicular).',
      },
      {
        heading: 'The universal wave equation',
        body:
          'Speed = frequency × wavelength:\n\nv = fλ\n\nIt is called universal because it works for ALL waves. The key insight: the wave speed is set by the MEDIUM (air, water, string tension), not by the source.\n\nSo for sound in the same air, a higher frequency does not travel faster — it just has a shorter wavelength. Frequency and wavelength trade off like a seesaw while v stays fixed.',
        tip: 'Speed of sound in air is about 340 m/s at room temperature (you may see 343 m/s at 20 °C). Sound is faster in water and fastest in solids.',
      },
      {
        heading: 'Worked example',
        body:
          'A tuning fork vibrates at 512 Hz. The speed of sound in air is 340 m/s. Find the wavelength.\n\n• Rearrange v = fλ for wavelength: λ = v ÷ f\n• λ = 340 ÷ 512 = 0.664 m\n\nAnd the period of the vibration: T = 1 ÷ f = 1 ÷ 512 ≈ 0.00195 s — each cycle takes about 2 thousandths of a second.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Mixing up frequency (cycles per second) with period (seconds per cycle) — they are reciprocals.\n• Thinking high-frequency sound travels faster. In the same medium, all frequencies travel at the same speed.\n• Measuring wavelength from a crest to the NEXT trough — that is only half a wavelength.\n• Confusing pitch with loudness: pitch is frequency, loudness is amplitude.',
        tip: 'Echo problems: sound travels to the wall AND back, so use half the total time when computing the distance to the wall.',
      },
    ],
    tricks: [
      {
        name: 'The seesaw: f up, λ down',
        trick:
          'Since v = fλ is fixed by the medium, frequency and wavelength sit on a seesaw: when one goes up the other must come down. High pitch = short waves, low bass = long waves.',
      },
      {
        name: 'Hertz = "per second"',
        trick:
          'Read Hz as "per second". 512 Hz literally means 512 cycles every second. This makes T = 1/f obvious: 512 per second means each one takes 1/512 of a second.',
      },
      {
        name: 'Pitch-frequency, loud-amplitude',
        trick:
          'Two sliders on a synth: FREQUENCY slider changes the pitch (squeaky vs deep), AMPLITUDE slider changes the volume. They are independent — you can have a quiet squeak or a loud bass.',
      },
    ],
    formulas: ['v = fλ', 'T = 1 ÷ f,  f = 1 ÷ T', 'v(sound in air) ≈ 340 m/s', 'echo distance = v × (t ÷ 2)'],
  },
  {
    id: 'phys-momentum-impulse',
    subject: 'physics',
    grade: 12,
    title: 'Momentum & Impulse',
    emoji: '🎱',
    summary:
      'Momentum is "mass in motion" and it is conserved in every collision — plus impulse explains why airbags and crumple zones save lives.',
    sections: [
      {
        heading: 'Momentum: mass in motion',
        body:
          'Momentum measures how hard it is to stop something:\n\np = mv, in kg·m/s. It is a vector — direction matters, so pick a positive direction and use signs.\n\nA slow truck and a fast baseball can have similar momentum: 2000 kg × 0.5 m/s = 1000 kg·m/s for the truck; a 0.145 kg ball would need an impossible 6900 m/s to match. Mass matters a lot.',
      },
      {
        heading: 'Impulse: changing momentum',
        body:
          'To change momentum you apply a force for some time. That product is impulse:\n\nimpulse = FΔt = Δp = mΔv\n\nThe same momentum change can come from a big force over a short time or a small force over a long time. That trade-off is the whole safety industry:\n\n• Airbags, crumple zones, bending your knees when landing — all EXTEND the stopping time, which shrinks the force.\n• Following through in golf or baseball extends contact time, increasing the impulse delivered to the ball.',
        tip: 'Same Δp, longer Δt → smaller F. When a question asks "why does the airbag help?", answer in exactly those symbols and words.',
      },
      {
        heading: 'Conservation of momentum in collisions',
        body:
          'In any collision or explosion with no outside forces, total momentum before = total momentum after:\n\nm₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′\n\n• Elastic collision: objects bounce apart; kinetic energy is also conserved.\n• Inelastic collision: some kinetic energy becomes heat/sound.\n• Perfectly inelastic: objects stick together and share one final velocity — use (m₁ + m₂)v′ after.\n\nMomentum is conserved in ALL of these. Kinetic energy is only conserved in elastic ones.',
      },
      {
        heading: 'Worked examples',
        body:
          'Collision: a 2.0 kg cart moving at 3.0 m/s [right] hits a stationary 1.0 kg cart and they stick together.\n\n• Before: p = (2.0)(3.0) + (1.0)(0) = 6.0 kg·m/s [right]\n• After: (2.0 + 1.0)v′ = 6.0 → v′ = 6.0 ÷ 3.0 = 2.0 m/s [right]\n\nImpulse: a 0.17 kg hockey puck goes from rest to 30 m/s during a 0.010 s slapshot.\n\n• Δp = mΔv = 0.17 × 30 = 5.1 kg·m/s\n• F = Δp ÷ Δt = 5.1 ÷ 0.010 = 510 N — about the weight of a 52 kg person, applied by a stick!',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Dropping the signs: an object moving left must carry a negative velocity in the momentum sum.\n• Claiming kinetic energy is conserved in a sticking (perfectly inelastic) collision — it never is.\n• Forgetting to combine the masses after objects stick together.\n• Using impulse units of N·s and momentum units of kg·m/s as if they were different — they are identical.',
      },
    ],
    tricks: [
      {
        name: 'Before = after',
        trick:
          'Draw two pictures for every collision — BEFORE and AFTER — and write the momentum of each object under each picture. Set the totals equal. This layout alone prevents most collision errors.',
      },
      {
        name: 'Egg toss physics',
        trick:
          'To catch a raw egg, you pull your hands back as you catch — extending Δt so the force stays below cracking point. That is impulse: FΔt = Δp. Airbags are giant egg-catchers for humans.',
      },
      {
        name: 'Sticky means shared',
        trick:
          'The word "stick together", "couple", or "grab" signals a perfectly inelastic collision: one shared final velocity, masses added, and kinetic energy NOT conserved.',
      },
    ],
    formulas: ['p = mv', 'impulse = FΔt = Δp = mΔv', 'm₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′', 'sticking: m₁v₁ + m₂v₂ = (m₁ + m₂)v′', '1 N·s = 1 kg·m/s'],
  },
  {
    id: 'phys-projectile-motion',
    subject: 'physics',
    grade: 12,
    title: 'Projectile Motion',
    emoji: '🏀',
    summary:
      'Split any flying object into two independent problems — constant speed sideways, free fall vertically — and projectile questions become routine.',
    sections: [
      {
        heading: 'The golden idea: independence',
        body:
          'Once launched (ignoring air resistance), a projectile has:\n\n• Horizontal: NO acceleration. vx stays constant the whole flight. Δx = vx·t\n• Vertical: free fall. ay = 9.81 m/s² downward, always — on the way up, at the top, and on the way down.\n\nThe two directions do not affect each other. The ONLY thing they share is time.\n\nClassic proof: a bullet fired horizontally and a bullet dropped from the same height hit the ground at the same instant — the horizontal motion does not delay the fall.',
        tip: 'At the very top of the arc, vy = 0 but ay is still 9.81 m/s² downward. Acceleration never pauses.',
      },
      {
        heading: 'The strategy',
        body:
          'Make a two-column table: horizontal | vertical.\n\n• Split any launch velocity into components: vx = v·cos θ, vy = v·sin θ.\n• Fill each column with its own givens.\n• Solve the vertical column with the big-five kinematics equations (a = −9.81 m/s² with up positive).\n• Solve the horizontal column with Δx = vx·t.\n• Time is the bridge: find t in one column, carry it to the other.',
      },
      {
        heading: 'Worked example',
        body:
          'A ball rolls off a 20 m cliff moving horizontally at 12 m/s. Find the flight time and how far from the base it lands. (g = 9.81 m/s²)\n\nVertical column (down positive): v₁y = 0, a = 9.81, Δy = 20 m.\n\n• Δy = ½at² → 20 = ½(9.81)t²\n• t² = 40 ÷ 9.81 = 4.08\n• t = √4.08 ≈ 2.02 s\n\nHorizontal column: Δx = vx·t = 12 × 2.02 ≈ 24.2 m from the base.\n\nNote the horizontal speed never entered the time calculation — the fall time depends only on the height.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Putting horizontal velocity into the vertical equations (or g into the horizontal ones). Keep the columns separate.\n• For horizontal launches, using the launch speed as v₁y. Horizontal launch means v₁y = 0.\n• Sign chaos: choose up (or down) as positive per column and commit.\n• Assuming the landing speed equals the launch speed when the landing height is different.\n• Forgetting that at 45° (level ground, no air resistance) range is maximized — a favourite conceptual question.',
      },
    ],
    tricks: [
      {
        name: 'Two problems in a trench coat',
        trick:
          'A projectile is two easy problems disguised as one hard one: constant-velocity (horizontal) and free-fall (vertical). Unbutton the coat: make two columns and never let the numbers cross except through time.',
      },
      {
        name: 'Time is the bridge',
        trick:
          'The only quantity shared by both columns is t. Stuck? Whatever column you CAN solve, solve it for time first, then walk t across the bridge to the other column.',
      },
      {
        name: 'Drop-time rule',
        trick:
          'Fall time from rest: t = √(2h ÷ g). It does not care about horizontal speed — a coin nudged off a table and one dropped beside it land together.',
      },
    ],
    formulas: [
      'vx = v cos θ,  vy = v sin θ',
      'horizontal: Δx = vx·t (a = 0)',
      'vertical: Δy = v₁y·t + ½at²  (a = 9.81 m/s² down)',
      'fall from rest: t = √(2h ÷ g)',
    ],
  },
  {
    id: 'phys-electric-magnetic-fields',
    subject: 'physics',
    grade: 12,
    title: 'Electric & Magnetic Fields',
    emoji: '🧲',
    summary:
      'Fields are how charges and magnets push without touching — and your right hand is the only tool you need to find every direction.',
    sections: [
      {
        heading: 'Electric fields',
        body:
          'An electric field is the region where a charge feels a force. Field strength:\n\nE = F ÷ q, in newtons per coulomb (N/C).\n\n• Field lines point AWAY from positive charges and TOWARD negative charges.\n• A positive test charge is pushed along the field lines; a negative charge is pushed against them.\n• Between parallel plates the field is uniform — same strength and direction everywhere between them.\n\nForce on a charge in a field: F = qE.',
      },
      {
        heading: 'Magnetic fields and moving charges',
        body:
          'Magnetic fields (symbol B, unit tesla T) are made by moving charges — currents — and act on OTHER moving charges.\n\nForce on a moving charge: F = qvB (v perpendicular to B; only the perpendicular part of v counts).\n\nForce on a current-carrying wire: F = BIL.\n\nTwo facts worth tattooing on your brain:\n\n• A charge at rest feels NO magnetic force.\n• A charge moving parallel to B feels NO magnetic force.\n\nThe magnetic force is always perpendicular to the velocity, so it bends paths into circles — it never speeds the charge up or slows it down.',
        tip: 'Magnetic field lines outside a magnet run from N pole to S pole and always form closed loops — they never start or stop like electric field lines do.',
      },
      {
        heading: 'Right-hand rules',
        body:
          'Two right-hand rules cover everything (use the LEFT hand instead for negative charges):\n\n• Straight wire (grip rule): grab the wire with your right hand, thumb pointing along the conventional current (+ flow). Your curled fingers show the circular magnetic field around the wire. Same grip works for a coil: fingers follow the current, thumb points to the coil\'s N pole.\n\n• Force on a moving charge or wire (flat-hand / FBI rule): flat right hand — thumb points along the current or velocity (I), straight fingers point along the field (B), and the push out of your palm is the force (F).',
      },
      {
        heading: 'Worked example',
        body:
          'A proton (q = 1.6 × 10⁻¹⁹ C) moves east at 2.0 × 10⁶ m/s through a 0.50 T magnetic field pointing up, perpendicular to its motion. Find the force.\n\n• F = qvB = (1.6 × 10⁻¹⁹)(2.0 × 10⁶)(0.50)\n• F = 1.6 × 10⁻¹³ N\n\nDirection by the flat right hand: thumb east (v), fingers up (B), palm pushes... north? Check for yourself — the answer is horizontal, perpendicular to both. Tiny force, but on a proton (m ≈ 1.67 × 10⁻²⁷ kg) it bends the path hard into a circle.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Using the right hand for an electron. Negative charges: use your left hand, or find the right-hand answer and flip it.\n• Forgetting that conventional current is the direction POSITIVE charge flows — opposite to electron flow.\n• Applying F = qvB when the charge moves parallel to the field (force is zero) or is stationary (also zero).\n• Mixing up the two rules: GRIP for the field around a wire, FLAT HAND for the force on a mover.',
        tip: 'Physically rotate your hand during the test. Everyone does it. A silent hand-twist is worth full marks; pride is worth zero.',
      },
    ],
    tricks: [
      {
        name: 'FBI (flat right hand)',
        trick:
          'F-B-I with one flat right hand: Force pushes out of the palm, B field goes through the straight fingers, I (current or velocity of + charge) points along the thumb. Set any two, read the third.',
      },
      {
        name: 'Grip the wire',
        trick:
          'For the field AROUND a current: grip the wire with your right hand, thumb along the current — your fingers curl the way the field circles. For a coil, curled fingers follow the current and your thumb points to the N pole.',
      },
      {
        name: 'Lefties for electrons',
        trick:
          'Every hand rule here assumes positive charge. For electrons (or electron flow), either switch to your left hand or take the right-hand answer and reverse it. Say "negative — flip it" out loud.',
      },
    ],
    formulas: ['E = F ÷ q,  F = qE', 'F = qvB (v ⊥ B)', 'F = BIL (wire)', 'units: E in N/C, B in tesla (T)'],
  },
  {
    id: 'phys-nuclear-quantum',
    subject: 'physics',
    grade: 12,
    title: 'Nuclear & Quantum Basics',
    emoji: '☢️',
    summary:
      'Why nuclei crumble in three characteristic ways, why a speck of mass is worth a city of energy, and why light comes in packets called photons.',
    sections: [
      {
        heading: 'Three types of radioactive decay',
        body:
          'Unstable nuclei decay to become more stable, emitting radiation:\n\n• Alpha (α): ejects a helium nucleus (2 protons + 2 neutrons). Mass number drops by 4, atomic number by 2. Heavy and slow — stopped by paper or skin.\n\n• Beta-minus (β⁻): a neutron turns into a proton and shoots out an electron. Mass number unchanged, atomic number UP by 1. Stopped by a few mm of aluminum.\n\n• Gamma (γ): pure electromagnetic energy released as an excited nucleus relaxes. No change to mass or atomic number. Needs thick lead or concrete to stop.\n\nIn every decay equation, the top numbers (mass) and bottom numbers (charge) must balance on both sides.',
        tip: 'Balancing check: superscripts (mass numbers) sum equal on both sides; subscripts (atomic numbers) sum equal too. If they don\'t, you dropped a particle.',
      },
      {
        heading: 'Half-life',
        body:
          'The half-life is the time for half of a radioactive sample to decay. It is fixed for each isotope and cannot be sped up or slowed down.\n\nAmount remaining = original × (½)ⁿ, where n = number of half-lives elapsed.\n\nExample: a sample starts at 80 g and the half-life is 5.0 years. After 15 years:\n\n• n = 15 ÷ 5.0 = 3 half-lives\n• 80 → 40 → 20 → 10 g remain',
      },
      {
        heading: 'E = mc²: mass is frozen energy',
        body:
          'Einstein\'s equation says mass and energy are interchangeable:\n\nE = mc², with c = 3.0 × 10⁸ m/s.\n\nBecause c² is huge (9.0 × 10¹⁶), a tiny mass is worth enormous energy. Convert just 1.0 g (0.0010 kg) entirely to energy:\n\n• E = (0.0010)(3.0 × 10⁸)² = (0.0010)(9.0 × 10¹⁶) = 9.0 × 10¹³ J\n\nThat is roughly the output of a large power station running for a day — from one gram. This "mass defect" is where nuclear reactors and the Sun get their energy: the products weigh slightly less than the ingredients, and the missing mass left as energy.',
      },
      {
        heading: 'Photons: light in packets',
        body:
          'Light energy comes in discrete packets called photons. Each photon\'s energy depends only on its frequency:\n\nE = hf, where h = 6.63 × 10⁻³⁴ J·s (Planck\'s constant), and f = c ÷ λ.\n\nWorked example: energy of one photon of green light, λ = 500 nm = 5.0 × 10⁻⁷ m.\n\n• f = c ÷ λ = (3.0 × 10⁸) ÷ (5.0 × 10⁻⁷) = 6.0 × 10¹⁴ Hz\n• E = hf = (6.63 × 10⁻³⁴)(6.0 × 10¹⁴) ≈ 3.98 × 10⁻¹⁹ J\n\nTiny — which is why we do not notice light arriving in lumps. But it explains the photoelectric effect: below a threshold frequency, no electrons are ejected from a metal no matter how bright the light, because each individual photon lacks the energy.',
        tip: 'Brightness = number of photons; frequency = energy per photon. A dim UV beam can eject electrons that a blinding red spotlight cannot.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Using grams in E = mc² — mass must be in kilograms.\n• Forgetting to square c (or squaring the whole product).\n• Saying beta decay decreases atomic number — β⁻ INCREASES it by 1 (a neutron became a proton).\n• Computing half-life problems by dividing the amount by the number of years instead of halving per half-life.\n• Confusing a photon\'s energy (set by frequency) with a beam\'s brightness (set by photon count).',
      },
    ],
    tricks: [
      {
        name: 'Alpha-beta-gamma: paper, foil, lead',
        trick:
          'Penetration ladder in order of the Greek alphabet: Alpha stopped by paper, Beta by aluminum foil, Gamma needs lead. The bigger and heavier the particle, the easier it is to stop.',
      },
      {
        name: 'Half-life hops',
        trick:
          'Count hops, halving each time: 80 → 40 → 20 → 10. Number of hops = total time ÷ half-life. Never divide the mass by the years — decay is halving, not steady draining.',
      },
      {
        name: 'c² is the exchange rate',
        trick:
          'Think of E = mc² as currency conversion where the exchange rate is c² = 9 × 10¹⁶ J per kg. Any speck of mass converts to a fortune in energy — that is why the Sun can burn for billions of years.',
      },
      {
        name: 'Beta bump',
        trick:
          'β⁻ decay: neutron → proton + electron. The nucleus BUMPS UP one spot on the periodic table while the mass number stays put. "Beta bumps up."',
      },
    ],
    formulas: [
      'N = N₀ × (½)ⁿ,  n = t ÷ half-life',
      'E = mc²  (c = 3.0 × 10⁸ m/s)',
      'E = hf  (h = 6.63 × 10⁻³⁴ J·s)',
      'c = fλ',
      'α: −4 mass, −2 atomic;  β⁻: +1 atomic;  γ: no change',
    ],
  },
]
