import type { Lesson } from '../../types'

/** General science lessons (grade 10) for the Learning Center. */
export const scienceLessons: Lesson[] = [
  {
    id: 'sci-scientific-method',
    subject: 'science',
    grade: 10,
    title: 'The Scientific Method & Experimental Design',
    emoji: '🔬',
    summary:
      'Design a fair test, name your variables with confidence, and never again mix up which one you change and which one you measure.',
    sections: [
      {
        heading: 'The method in five moves',
        body:
          'Science is not a list of facts — it is a procedure for finding out which ideas survive testing.\n\n• Observe something and ask a question about it.\n• Form a hypothesis — a testable prediction, not a guess. The classic frame: "If [I change this], then [this will happen], because [reason]."\n• Design and run an experiment that tests ONLY that prediction.\n• Analyze the data — does it support the hypothesis or not?\n• Conclude and communicate, so others can repeat and check your work.\n\nA hypothesis that fails is not a failed experiment. Ruling ideas out is exactly how science moves forward.',
        tip: 'A hypothesis must be testable AND falsifiable — there has to be a possible result that would prove it wrong. "Plants like music" is not testable; "plants watered daily grow taller than plants watered weekly" is.',
      },
      {
        heading: 'The three kinds of variables',
        body:
          'Every experiment has three jobs for its variables:\n\n• Manipulated (independent) variable — the ONE thing you deliberately change. Example: the amount of fertilizer.\n• Responding (dependent) variable — the thing you measure to see the effect. Example: plant height after 3 weeks.\n• Controlled variables — everything you keep the SAME so the test is fair: same seeds, same pot size, same sunlight, same water.\n\nOnly one manipulated variable per experiment. If you change fertilizer AND sunlight at the same time and the plants grow taller, you cannot say which one caused it.',
        tip: 'The responding variable DEPENDS on what you did — that is why it is also called the dependent variable. You change the independent one; the dependent one answers back.',
      },
      {
        heading: 'Controls, repetition, and sample size',
        body:
          'A well-designed experiment also needs:\n\n• A control group — a group that gets NO treatment, used as the baseline. Testing a fertilizer? One set of plants gets none. Without it, you cannot tell whether the fertilizer did anything at all.\n• Repeated trials — one plant might just be a weird plant. Averaging many trials smooths out flukes.\n• A decent sample size — 3 plants per group is weak evidence; 30 is much stronger.\n\nWorked example: "Does salt make water boil faster?" Manipulated: grams of salt added. Responding: time to reach boiling. Controlled: same pot, same volume of water, same stove setting, same starting temperature. Control group: a pot with zero salt.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Swapping the manipulated and responding variables on a written answer — read the question twice.\n• Forgetting the control group when asked to design an experiment. Markers look for it specifically.\n• Writing a hypothesis with no "because" — the reasoning is usually worth a mark.\n• Saying results "prove" a hypothesis. Data SUPPORTS a hypothesis; a single experiment never proves anything forever.\n• Listing only one controlled variable when the question asks for variables to control — give at least three.',
        tip: 'On design questions, use the checklist: one manipulated variable, one responding variable, at least three controlled variables, a control group, repeated trials. Hitting all five is usually full marks.',
      },
    ],
    tricks: [
      {
        name: 'I change, D-ata depends',
        trick:
          'Independent = I change it. Dependent = the Data that depends on what I did. Say "I change the Independent" and the other one sorts itself out.',
      },
      {
        name: 'If–then–because',
        trick:
          'Every hypothesis fits the frame "IF I change X, THEN Y will happen, BECAUSE reason." If your sentence cannot fit the frame, it is not a testable hypothesis yet.',
      },
      {
        name: 'One-knob rule',
        trick:
          'Picture the experiment as a machine covered in knobs. A fair test turns exactly ONE knob and tapes down all the others. Two knobs turned = zero conclusions allowed.',
      },
    ],
  },
  {
    id: 'sci-chemical-reactions',
    subject: 'science',
    grade: 10,
    title: 'Chemical Reactions in Everyday Life',
    emoji: '🧪',
    summary:
      'Spot the five signs that a new substance has formed, tell chemical change from physical change, and see why mass never disappears in a reaction.',
    sections: [
      {
        heading: 'Physical vs chemical change',
        body:
          'A physical change alters the look or state of a substance but it is still the SAME substance: ice melting, sugar dissolving, paper being torn. Usually easy to reverse.\n\nA chemical change produces a NEW substance with new properties: wood burning, iron rusting, milk souring. Usually hard or impossible to reverse — you cannot un-burn toast.\n\nThe question to ask is always: "Is there a new substance at the end?" Dissolved sugar is still sugar (evaporate the water and it comes back). Burned wood is now ash, carbon dioxide, and water vapour — new substances.',
        tip: 'Dissolving fools almost everyone. Salt disappearing into water LOOKS dramatic, but no new substance forms — it is a physical change.',
      },
      {
        heading: 'Five signs of a chemical change',
        body:
          'You cannot see molecules, so chemists watch for clues that a reaction happened:\n\n• A new colour appears (a shiny nail turns orange-brown with rust).\n• A gas is produced — bubbles or fizzing (baking soda + vinegar releases carbon dioxide).\n• A precipitate forms — a solid appears when two clear liquids are mixed.\n• Energy changes — the mixture gets hot or cold on its own, or gives off light (a glow stick).\n• A new odour appears (rotten eggs, sour milk).\n\nOne clue suggests a reaction; two or more make it very likely.',
      },
      {
        heading: 'Reactants → products, and mass is conserved',
        body:
          'A reaction rearranges atoms. What you start with are reactants; what you end with are products:\n\nreactants → products\n\nExample — rusting: iron + oxygen → iron oxide, or 4Fe + 3O₂ → 2Fe₂O₃.\n\nThe Law of Conservation of Mass (Antoine Lavoisier, 1789): in a closed system, total mass before = total mass after. Atoms are never created or destroyed — only regrouped.\n\nSo where does a burned log\u2019s mass "go"? Nowhere. It leaves as carbon dioxide and water vapour gas. Trap the gases in a sealed container and the scale reads the same before and after.',
        tip: 'If an exam question says mass "decreased" during a reaction in an OPEN container, the answer is almost always "a gas escaped". In a closed container, mass cannot change.',
      },
      {
        heading: 'Reactions you already know',
        body:
          '• Combustion — fuel + oxygen → carbon dioxide + water + energy. Every campfire, candle, and gas stove.\n• Corrosion — a metal reacts slowly with oxygen; rusting iron is the classic case.\n• Cooking — browning bread, caramelizing sugar, and frying an egg (the clear egg white turning solid and white is a chemical change in its proteins).\n• Cellular respiration — glucose + oxygen → carbon dioxide + water + energy. Combustion\u2019s slow, controlled cousin, running in your cells right now.\n• Photosynthesis — the reverse direction: carbon dioxide + water + light energy → glucose + oxygen.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Calling dissolving or melting a chemical change — no new substance, so physical.\n• Writing products → reactants: the arrow always points FROM what you start with TO what you get.\n• Saying mass is "lost" in a reaction instead of explaining that a gas escaped the open system.\n• Listing "bubbles" as proof of a chemical change when a liquid is simply boiling — boiling bubbles are a physical change of state, not a new gas being produced.',
        tip: 'Boiling water bubbles are water vapour (same substance, physical). Vinegar-and-baking-soda bubbles are carbon dioxide (new substance, chemical). Ask WHAT the bubble is made of.',
      },
    ],
    tricks: [
      {
        name: 'New stuff or no marks',
        trick:
          'Chemical change has ONE test: did a NEW substance form? If you can get the original back easily (freeze it, evaporate it, un-mix it), it was physical.',
      },
      {
        name: 'COPEG',
        trick:
          'The five signs of a chemical change: Colour change, Odour, Precipitate, Energy change (heat/light), Gas produced. Scan the list whenever asked "how do you know a reaction occurred?"',
      },
      {
        name: 'Atoms are LEGO',
        trick:
          'A reaction never melts the bricks — it just rebuilds the model. Same bricks in, same bricks out: that is conservation of mass in one image.',
      },
    ],
  },
  {
    id: 'sci-heat-kmt',
    subject: 'science',
    grade: 10,
    title: 'Heat, Temperature & Kinetic Molecular Theory',
    emoji: '🌡️',
    summary:
      'See matter as trillions of jiggling particles — and finally understand why heat and temperature are NOT the same thing.',
    sections: [
      {
        heading: 'Kinetic molecular theory in three lines',
        body:
          'The kinetic molecular theory (KMT) explains solids, liquids, and gases with one idea:\n\n• All matter is made of tiny particles.\n• Those particles are ALWAYS moving — vibrating, sliding, or flying.\n• The hotter the substance, the faster its particles move.\n\nStates of matter are just different amounts of particle freedom: in a solid, particles vibrate in fixed positions; in a liquid, they slide past each other while staying in contact; in a gas, they fly freely with huge spaces between them. Melting and boiling are what it looks like when particles gain enough energy to break out of the next level of confinement.',
      },
      {
        heading: 'Temperature vs heat — the crucial difference',
        body:
          'Temperature is the AVERAGE kinetic energy of the particles in a substance. It tells you how fast a typical particle is moving, and it is measured in degrees Celsius (or kelvins).\n\nHeat is energy IN TRANSFER from a hotter object to a colder one, measured in joules. You cannot "contain" heat — the energy a substance stores is called thermal energy; heat is that energy on the move.\n\nWhy the difference matters: a cup of boiling water (100 °C) has a higher temperature than a swimming pool at 25 °C, but the pool holds far more thermal energy — it has vastly more particles. Average speed vs total energy are different questions.',
        tip: 'Cold is not a thing that flows. There is no "cold energy" — a cold object is just one whose particles move slowly. When you feel cold, heat is flowing OUT of you.',
      },
      {
        heading: 'Three ways heat travels',
        body:
          '• Conduction — transfer by direct contact: fast particles bump slower neighbours and pass energy along. A metal spoon in hot soup heats up handle-last. Metals are great conductors; air and foam are poor ones (good insulators).\n• Convection — transfer by moving fluid: warm liquid or gas expands, becomes less dense, and rises; cooler fluid sinks to replace it, forming a convection current. This is how a room heater warms the whole room and how wind is born.\n• Radiation — transfer by electromagnetic waves, no particles needed. The Sun heats Earth across empty space this way; a campfire warms your face by radiation before it warms the air.\n\nMost real situations mix all three: a pot on a stove conducts through the metal, convects through the water, and radiates from its glowing element.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Saying an object "contains heat" — it contains thermal energy; heat is the transfer.\n• Writing that cold flows into your hand from ice. Energy only flows hot → cold; your hand loses heat TO the ice.\n• Mixing up the transfer types: conduction needs CONTACT, convection needs a FLUID that can move, radiation needs NOTHING.\n• Saying particles stop moving at 0 °C. Particles only approach a stop at absolute zero, −273 °C (0 K) — at 0 °C they are still very much jiggling.\n• Claiming particles themselves get bigger when heated. The particles stay the same size; the SPACES between them grow, which is why materials expand.',
        tip: 'Expansion trap: when a substance is heated, its particles do NOT expand — they spread out. "Particles move faster and farther apart" is the phrase markers want.',
      },
    ],
    tricks: [
      {
        name: 'Contact, Currents, Rays',
        trick:
          'Conduction = Contact. Convection = Currents. Radiation = Rays. Match the first letters and you can classify any heat-transfer scenario in seconds.',
      },
      {
        name: 'Temperature is the average, heat is the delivery',
        trick:
          'Temperature = average particle speed (a class\u2019s average grade). Heat = energy being delivered (marks being transferred). A big slow class can hold more total marks than one keen student.',
      },
      {
        name: 'Hot rises because it\u2019s puffy',
        trick:
          'Warm fluid expands → less dense → floats up, exactly like a beach ball under water. Chant "hot and puffy floats" to remember why convection currents circulate.',
      },
    ],
    formulas: [
      'heat always flows: hot → cold',
      'temperature = AVERAGE kinetic energy of particles',
      'absolute zero = −273 °C = 0 K (particle motion at minimum)',
    ],
  },
  {
    id: 'sci-climate-greenhouse',
    subject: 'science',
    grade: 10,
    title: 'Climate Systems & the Greenhouse Effect',
    emoji: '🌍',
    summary:
      'Understand the natural blanket that keeps Earth livable, what humans have done to thicken it, and the feedback loops that speed the whole thing up.',
    sections: [
      {
        heading: 'Weather vs climate',
        body:
          'Weather is the condition of the atmosphere right now or this week: today\u2019s temperature, wind, and precipitation.\n\nClimate is the AVERAGE pattern of weather over a long period — usually 30 years or more — for a region.\n\nSo one cold snap says nothing about climate change, and one heat wave proves nothing either. Climate claims are about long-term trends in the averages, which is why scientists talk in decades, not days.',
        tip: 'Classic exam line: "Climate is what you expect; weather is what you get." Snow in May is weather. Winters warming steadily for 40 years is climate.',
      },
      {
        heading: 'The natural greenhouse effect',
        body:
          'Sunlight passes through the atmosphere and warms Earth\u2019s surface. The surface then re-emits that energy as infrared radiation (heat) heading back toward space.\n\nGreenhouse gases — carbon dioxide (CO₂), methane (CH₄), water vapour, and nitrous oxide (N₂O) — absorb some of that outgoing infrared and re-radiate it in all directions, including back down. Result: the lower atmosphere stays warm.\n\nThis is natural and essential. Without any greenhouse effect, Earth\u2019s average surface temperature would be about −18 °C instead of the actual +15 °C — a frozen planet. The greenhouse effect is not the villain; the ENHANCED greenhouse effect is the problem.',
      },
      {
        heading: 'The enhanced greenhouse effect',
        body:
          'Since the Industrial Revolution (late 1700s onward), burning fossil fuels — coal, oil, and natural gas — plus large-scale deforestation has raised atmospheric CO₂ from about 280 parts per million to over 420 ppm today, higher than at any time in at least 800,000 years (we know from air bubbles trapped in ice cores).\n\nMore greenhouse gas → more outgoing heat intercepted → a thicker blanket → rising global average temperature. Consequences include melting glaciers and sea ice, rising sea level, more extreme weather, and shifting ecosystems.\n\nMethane deserves a mention: there is far less of it than CO₂, but molecule-for-molecule it traps heat much more effectively. Major sources include livestock, landfills, and natural gas leaks.',
      },
      {
        heading: 'Feedback loops and albedo',
        body:
          'Albedo is the fraction of sunlight a surface reflects. Fresh snow and ice reflect most light (high albedo); dark ocean and forest absorb most of it (low albedo).\n\nThe ice-albedo feedback is the famous vicious circle:\n\n• Warming melts sea ice.\n• Bright ice is replaced by dark ocean, which absorbs more sunlight.\n• Extra absorbed energy causes more warming.\n• More warming melts more ice — and the loop repeats.\n\nThis is a POSITIVE feedback loop: the response amplifies the original change. ("Positive" means self-reinforcing, not good.) It is a key reason the Arctic is warming much faster than the global average — which matters enormously for Canada\u2019s North.',
        tip: 'A positive feedback amplifies change; a negative feedback resists it. The words describe direction, not whether the outcome is desirable — a runaway warming loop is "positive".',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Confusing the greenhouse effect (natural, keeps us alive) with the enhanced greenhouse effect (human-caused strengthening). Name the right one.\n• Blaming climate change on the ozone hole. Ozone depletion is a separate issue about UV radiation, not the main driver of warming.\n• Using one weather event as evidence for or against climate change — always argue with long-term trends.\n• Saying greenhouse gases "trap sunlight". They absorb outgoing INFRARED radiation from Earth\u2019s surface; visible sunlight passes through on the way in.\n• Forgetting water vapour is a greenhouse gas — it is actually the most abundant one.',
      },
    ],
    tricks: [
      {
        name: 'Mood vs personality',
        trick:
          'Weather is the atmosphere\u2019s MOOD (changes daily); climate is its PERSONALITY (the long-term pattern). One grumpy day does not change a personality.',
      },
      {
        name: 'The blanket, not the oven',
        trick:
          'Greenhouse gases do not create heat — they slow its escape, like a blanket on a sleeper. Adding CO₂ is adding blanket layers: same body heat, warmer sleeper.',
      },
      {
        name: 'White reflects, dark collects',
        trick:
          'High albedo = light surface = reflects sunlight. Low albedo = dark surface = collects it. Same reason a black car interior roasts in summer while a white one survives.',
      },
    ],
  },
  {
    id: 'sci-electricity',
    subject: 'science',
    grade: 10,
    title: 'Electricity Basics: Static & Current',
    emoji: '⚡',
    summary:
      'From balloon-on-hair static to full circuits with Ohm\u2019s law — learn what charge actually is, and why series and parallel circuits behave so differently.',
    sections: [
      {
        heading: 'Static electricity: charge that sits still',
        body:
          'All matter contains positive protons (locked in the nucleus) and negative electrons (able to move). Objects become charged when ELECTRONS transfer — protons never move between objects.\n\n• Rub a balloon on your hair: electrons transfer from hair to balloon. The balloon becomes negative; your hair becomes positive.\n• Like charges repel; opposite charges attract. That is why your (now positive) hair strands push away from each other and reach for the (negative) balloon.\n• A charged object can also attract NEUTRAL objects by shifting their electrons slightly — how a balloon sticks to a wall.\n\nLightning is static discharge on a giant scale: charge separation builds up in a storm cloud until the built-up charge leaps across the gap.',
        tip: 'Only electrons move. If an object is positive, it did not gain protons — it LOST electrons. Writing "gained protons" is an instant lost mark.',
      },
      {
        heading: 'Current electricity: charge that flows',
        body:
          'Current electricity is a continuous flow of electrons through a conductor. A working circuit needs four parts:\n\n• A source of energy (battery or generator).\n• A conductor (wires) forming a complete, unbroken loop.\n• A load that uses the energy (bulb, motor, speaker).\n• Usually a switch to open or close the loop.\n\nThree quantities describe any circuit:\n\n• Voltage (V, in volts) — the energy push the source gives each unit of charge.\n• Current (I, in amperes/amps) — how much charge flows per second.\n• Resistance (R, in ohms, Ω) — how much the material opposes the flow.',
      },
      {
        heading: 'Ohm\u2019s law — worked example',
        body:
          'Voltage, current, and resistance are locked together by Ohm\u2019s law:\n\nV = I × R\n\nWorked example: a 12 V battery is connected to a lamp with a resistance of 4 Ω. What current flows?\n\n• Rearrange: I = V ÷ R\n• I = 12 ÷ 4 = 3 A\n\nSanity check with the original form: V = I × R = 3 × 4 = 12 V. ✓\n\nThe water analogy makes the trio intuitive: voltage is the water pressure, current is the flow rate, resistance is how narrow the pipe is. More pressure → more flow; narrower pipe → less flow.',
      },
      {
        heading: 'Series vs parallel circuits',
        body:
          '• Series circuit — one single path. The same current passes through every component. One bulb burns out → the loop is broken → EVERYTHING goes dark. Adding more bulbs makes all of them dimmer (more total resistance, less current).\n• Parallel circuit — multiple branches, each its own loop back to the source. Each branch gets the full source voltage. One bulb burns out → only its branch dies; the rest keep shining.\n\nYour home is wired in parallel — that is why the toaster dying does not kill the fridge. Old-style Christmas lights were wired in series — one dead bulb and the whole string went out.',
        tip: 'Quick recall test: "one out, all out" = series. "One out, rest fine" = parallel. Examiners love asking which wiring a house uses (parallel) and why.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Saying a charged object gained or lost protons — charge moves via ELECTRONS only.\n• Forgetting a circuit must be a CLOSED loop — an open switch means zero current everywhere, not "less current".\n• Mixing units: volts for voltage, amps for current, ohms for resistance. Wrong unit = lost mark even with the right number.\n• Using V = I × R without rearranging: cover the unknown in the triangle first, then compute.\n• Claiming bulbs in parallel are dimmer than a single bulb — each parallel branch gets full voltage, so they shine at full brightness.',
      },
    ],
    tricks: [
      {
        name: 'Ohm\u2019s triangle',
        trick:
          'Draw a triangle: V on top, I and R side by side on the bottom. Cover the quantity you want — what remains is the formula. Cover V → I×R. Cover I → V/R. Cover R → V/I.',
      },
      {
        name: 'Water in pipes',
        trick:
          'Voltage = pressure, current = flow, resistance = pipe narrowness. Every circuit question can be translated into plumbing: more pressure pushes more flow; a kinked hose (resistance) chokes it.',
      },
      {
        name: 'Series = one lane road',
        trick:
          'A series circuit is a one-lane road: one stalled car (dead bulb) blocks all traffic. Parallel is a multi-lane highway: one blocked lane, traffic still flows in the others.',
      },
    ],
    formulas: [
      'V = I × R  (Ohm\u2019s law)',
      'I = V / R,  R = V / I  (rearranged)',
      'units: volts (V), amperes (A), ohms (Ω)',
      'series: same current everywhere;  parallel: same voltage on every branch',
    ],
  },
  {
    id: 'sci-space',
    subject: 'science',
    grade: 10,
    title: 'Space & the Universe: Big Bang and the Life of Stars',
    emoji: '🌌',
    summary:
      'Follow the universe from a hot dense beginning 13.8 billion years ago to today, and trace how a star is born, lives, and dies — with its fate decided entirely by its mass.',
    sections: [
      {
        heading: 'The Big Bang: what it says (and what it doesn\u2019t)',
        body:
          'The Big Bang theory says the universe began about 13.8 billion years ago as an extremely hot, dense state, and has been EXPANDING and cooling ever since. As it cooled, matter formed — first hydrogen and helium, later stars and galaxies.\n\nWhat it does NOT say: it was not an explosion of stuff INTO empty space. Space itself has been stretching, carrying galaxies apart with it — like dots on the surface of an inflating balloon. Every dot sees every other dot moving away; no dot is the centre.',
      },
      {
        heading: 'Two big pieces of evidence',
        body:
          '• Redshift: in 1929, Edwin Hubble showed that light from distant galaxies is stretched toward the red end of the spectrum, and the farther the galaxy, the greater the stretch. That is exactly what an expanding universe predicts: nearly all galaxies are receding from us, and faster with distance. Run the movie backwards and everything converges to a single starting point.\n• Cosmic microwave background (CMB): in 1965, Arno Penzias and Robert Wilson accidentally detected a faint microwave glow coming from every direction in the sky — the leftover heat of the early universe, cooled and stretched by billions of years of expansion. The Big Bang model had predicted precisely such an afterglow.\n\nTwo independent lines of evidence pointing at the same conclusion is what makes the theory strong.',
        tip: 'Redshift logic in one line: farther galaxy → faster recession → bigger redshift. If an exam shows two galaxy spectra, the one shifted more toward red is the more distant, faster-moving one.',
      },
      {
        heading: 'How a star is born and lives',
        body:
          'A star begins as a nebula — a vast cloud of gas (mostly hydrogen) and dust. Gravity slowly pulls the cloud together into a shrinking, heating ball called a protostar. When the core gets hot enough, nuclear fusion ignites: hydrogen nuclei fuse into helium, releasing enormous energy.\n\nThe star then spends most of its life as a main sequence star, in a long tug-of-war balance: gravity pulling inward vs fusion energy pushing outward. Our Sun is a main sequence star, about 4.6 billion years old — roughly halfway through its life.\n\nA star\u2019s colour reveals its surface temperature: blue-white stars are the hottest, yellow (like the Sun) in the middle, red the coolest.',
      },
      {
        heading: 'How a star dies: mass decides everything',
        body:
          'When the hydrogen fuel runs low, the outcome depends on the star\u2019s mass.\n\nAverage-mass star (like the Sun):\n\n• Swells into a red giant.\n• Sheds its outer layers as a glowing shell called a planetary nebula (nothing to do with planets).\n• The leftover core becomes a white dwarf — Earth-sized, incredibly dense, slowly cooling forever.\n\nMassive star (many times the Sun\u2019s mass):\n\n• Swells into a red supergiant.\n• Dies in a supernova — an explosion that briefly outshines an entire galaxy and forges elements heavier than iron.\n• The collapsed core becomes either a neutron star (a city-sized ball of neutrons) or, for the most massive stars, a black hole — gravity so strong that not even light escapes.\n\nSupernovas scatter heavy elements into space, where they become part of new nebulas, new stars, and new planets. The calcium in your bones and the iron in your blood were made inside dying stars.',
        tip: 'Star death sorting rule: Sun-like mass → red giant → planetary nebula → white dwarf. Massive → red supergiant → supernova → neutron star or black hole. Two tracks, decided by mass alone.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Calling the Big Bang an explosion in space — it is an expansion OF space, with no centre and no edge.\n• Saying the universe is millions of years old. It is about 13.8 BILLION years old (and Earth is about 4.5 billion).\n• Putting the Sun on the supernova track — the Sun is far too small to go supernova; it will end as a white dwarf.\n• Confusing a nebula (star nursery) with a planetary nebula (shell shed by a dying Sun-like star).\n• Saying red stars are the hottest. It is the reverse of the tap-water convention: BLUE stars are hottest, red are coolest.',
      },
    ],
    tricks: [
      {
        name: 'The balloon universe',
        trick:
          'Draw dots on a balloon and inflate it: every dot recedes from every other, and no dot is the centre. That is expansion of space — the picture to sketch whenever redshift comes up.',
      },
      {
        name: 'Red means receding',
        trick:
          'Redshift → the galaxy is Racing away. Both start with R. The bigger the shift toward red, the faster (and farther) the galaxy.',
      },
      {
        name: 'Mass is destiny',
        trick:
          'One question decides a star\u2019s ending: how massive is it? Modest mass = gentle ending (white dwarf). Massive = violent ending (supernova, then neutron star or black hole).',
      },
      {
        name: 'Oh Be A Fine Girl/Guy, Kiss Me',
        trick:
          'The star classes from hottest to coolest are O B A F G K M. Our Sun is a G star — remember "Fine Girl/Guy" sits right beside it in the sentence.',
      },
    ],
  },
]
