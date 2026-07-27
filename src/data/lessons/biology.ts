import type { Lesson } from '../../types'

/** Biology lessons for the Learning Center — brief, clear, and hack-packed. */
export const biologyLessons: Lesson[] = [
  {
    id: 'bio-cells-organelles',
    subject: 'biology',
    grade: 10,
    title: 'Cells & Organelles',
    emoji: '🔬',
    summary:
      'Meet the tiny factory that runs every living thing — and learn which organelle does which job so you never mix up the mitochondria and the ribosome again.',
    sections: [
      {
        heading: 'The cell is a factory',
        body:
          'Every living thing is built from cells, and each cell works like a self-contained factory. The parts inside are called organelles, and each has one main job.\n\n• Nucleus — the manager’s office; holds the DNA (the instructions).\n• Mitochondria — the power plant; releases energy (ATP) from food.\n• Ribosomes — the assembly line; build proteins.\n• Endoplasmic reticulum (ER) — the hallways; rough ER (with ribosomes) makes proteins, smooth ER makes lipids.\n• Golgi apparatus — the shipping department; packages and sends proteins.\n• Cell membrane — the security gate; controls what enters and leaves.',
        tip: 'When a question asks "where" something happens, it usually wants an organelle. Match the job to the organelle and you’re done.',
      },
      {
        heading: 'Plant vs animal cells',
        body:
          'Both share the organelles above, but plant cells have three extras that animal cells lack.\n\n• Cell wall — a rigid outer layer for support (outside the membrane).\n• Chloroplasts — capture sunlight for photosynthesis (they contain green chlorophyll).\n• Large central vacuole — a water-storage tank that keeps the plant firm.',
        tip: 'Animal cells can have small vacuoles too, but the giant single vacuole and chloroplasts are plant-only giveaways.',
      },
      {
        heading: 'Prokaryotes vs eukaryotes',
        body:
          'Cells come in two grades. Prokaryotes (bacteria) are simple: no nucleus, no membrane-bound organelles — the DNA just floats free. Eukaryotes (plants, animals, fungi) are complex: a true nucleus plus membrane-bound organelles.\n\nRemember: "pro" = before a nucleus, "eu" = true nucleus.',
      },
    ],
    tricks: [
      {
        name: 'Mighty Mitochondria',
        trick:
          'Mitochondria = "the powerhouse of the cell." If a question mentions energy, ATP, or respiration, the answer is almost always mitochondria.',
      },
      {
        name: 'PCV = Plant Cells eXtra',
        trick:
          'Plant-only parts: Wall, Chloroplast, big Vacuole. Picture a plant standing tall — it needs a Wall for support, a Chloroplast to eat sunlight, and a Vacuole full of water to stay upright.',
      },
    ],
  },
  {
    id: 'bio-photosynthesis-respiration',
    subject: 'biology',
    grade: 10,
    title: 'Photosynthesis vs Cellular Respiration',
    emoji: '🌿',
    summary:
      'Two reactions that are almost mirror images — learn how plants store the sun’s energy and how every cell cashes it back out.',
    sections: [
      {
        heading: 'Two opposite reactions',
        body:
          'Photosynthesis builds sugar and stores energy; cellular respiration breaks sugar down and releases energy. They are nearly the reverse of each other.\n\n• Photosynthesis (in chloroplasts): carbon dioxide + water + light → glucose + oxygen.\n• Cellular respiration (mainly in mitochondria): glucose + oxygen → carbon dioxide + water + ATP (usable energy).',
        tip: 'Photosynthesis stores energy in sugar; respiration releases it as ATP. One saves, one spends.',
      },
      {
        heading: 'Who does which?',
        body:
          'A common trap: students think only animals do respiration. Not true.\n\n• Plants photosynthesize AND respire — they make sugar in the light, then respire it around the clock to get energy.\n• Animals only respire — we eat the sugar plants (or other animals) made.',
      },
      {
        heading: 'They feed each other',
        body:
          'The outputs of one reaction are the inputs of the other. Respiration’s waste (CO₂ and water) is exactly what photosynthesis needs, and photosynthesis’s waste (oxygen) is what respiration needs. That loop keeps the atmosphere balanced.',
        tip: 'The oxygen you’re breathing right now is "waste" from photosynthesis — and the CO₂ you exhale is food for plants.',
      },
    ],
    tricks: [
      {
        name: 'Store vs Spend',
        trick:
          'PhotoSynthesis = Synthesize/Store sugar (needs light in). Respiration = Release energy (gives ATP out). Both start with S/R to match Store/Release.',
      },
      {
        name: 'Mirror equation',
        trick:
          'Learn ONE equation and flip it. 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂ is photosynthesis; read it right-to-left and it’s respiration.',
      },
    ],
    formulas: [
      'Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂',
      'Cellular respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',
    ],
  },
  {
    id: 'bio-digestive-system',
    subject: 'biology',
    grade: 11,
    title: 'The Digestive System',
    emoji: '🍽️',
    summary:
      'Follow a sandwich from mouth to exit and learn where each nutrient is broken down and absorbed — plus the difference between mechanical and chemical digestion.',
    sections: [
      {
        heading: 'The journey of food',
        body:
          'Food travels through one long tube (the alimentary canal). Each stop has a job.\n\n• Mouth — teeth grind (mechanical); saliva’s amylase starts breaking down starch (chemical).\n• Esophagus — muscular waves called peristalsis push food down.\n• Stomach — acid and the enzyme pepsin begin protein digestion; churning mixes it into "chyme."\n• Small intestine — the main event: enzymes finish digestion and nutrients are absorbed into the blood.\n• Large intestine — absorbs water and forms waste.',
        tip: 'Most absorption happens in the small intestine, not the stomach. The stomach mainly breaks food down; the small intestine takes the nutrients in.',
      },
      {
        heading: 'Mechanical vs chemical digestion',
        body:
          'Two kinds of digestion happen at once.\n\n• Mechanical — physically breaking food into smaller pieces (chewing, stomach churning). No new molecules, just smaller chunks.\n• Chemical — enzymes break the chemical bonds to release small nutrients (starch → sugars, protein → amino acids, fat → fatty acids).',
      },
      {
        heading: 'The helper organs',
        body:
          'Some organs never touch the food but are essential.\n\n• Liver — makes bile, which breaks large fat droplets into small ones (emulsification).\n• Gallbladder — stores and releases that bile.\n• Pancreas — releases enzymes and neutralizes stomach acid entering the small intestine.\n\nThe small intestine wall is lined with tiny finger-like villi that massively increase surface area for fast absorption.',
        tip: 'Bile is NOT an enzyme — it doesn’t break chemical bonds. It just breaks big fat blobs into small ones so enzymes can reach them faster.',
      },
    ],
    tricks: [
      {
        name: 'MESLL path',
        trick:
          'Mouth → Esophagus → Stomach → smaLL intestine → Large intestine. Say "M-E-S-L-L" to keep the order straight.',
      },
      {
        name: 'Villi = Village of straws',
        trick:
          'Picture the small intestine lined with millions of tiny straws (villi) sipping nutrients into the blood. More straws = more surface area = faster absorption.',
      },
    ],
  },
  {
    id: 'bio-circulatory-respiratory',
    subject: 'biology',
    grade: 11,
    title: 'Circulatory & Respiratory Systems',
    emoji: '❤️',
    summary:
      'Learn how your heart pumps blood in two loops and how your lungs swap oxygen for carbon dioxide — two systems that only work as a team.',
    sections: [
      {
        heading: 'The heart’s two loops',
        body:
          'The heart is a double pump with four chambers (two atria on top, two ventricles on bottom). It runs two loops at once.\n\n• Pulmonary loop — right side sends oxygen-poor blood to the lungs to pick up oxygen.\n• Systemic loop — left side sends oxygen-rich blood out to the whole body.\n\nBlood path: body → right atrium → right ventricle → lungs → left atrium → left ventricle → body.',
        tip: 'The LEFT ventricle has the thickest wall because it pumps blood to the entire body — the hardest push in the heart.',
      },
      {
        heading: 'The blood vessels',
        body:
          'Three vessel types, each shaped for its job.\n\n• Arteries — carry blood AWAY from the heart; thick, muscular walls to handle high pressure.\n• Veins — carry blood back TO the heart; thinner walls with one-way valves to stop backflow.\n• Capillaries — tiny, one-cell-thick vessels where the actual exchange of gases and nutrients happens.',
        tip: 'Arteries carry blood Away — both start with "A." This is true even when the artery carries oxygen-poor blood (like the pulmonary artery to the lungs).',
      },
      {
        heading: 'Gas exchange in the lungs',
        body:
          'Air travels: nose/mouth → trachea → bronchi → bronchioles → alveoli. The alveoli are microscopic air sacs wrapped in capillaries.\n\nGases move by diffusion — from high concentration to low. Oxygen diffuses from the alveoli into the blood; carbon dioxide diffuses out of the blood into the alveoli to be exhaled. The alveoli’s huge combined surface area makes this fast.',
        tip: 'No energy is needed for gas exchange — it’s passive diffusion, driven purely by concentration differences.',
      },
    ],
    tricks: [
      {
        name: 'A = Away, A = Artery',
        trick:
          'Arteries carry blood Away from the heart. Veins carry it back (think "V" for the return trip). This never changes, no matter the oxygen level.',
      },
      {
        name: 'LOUD lungs, LEFT is strongest',
        trick:
          'Left ventricle = whole body, so it’s the strongest chamber. Right side = lungs (a short trip), so it’s weaker. Left is a long-haul truck; right is a delivery scooter.',
      },
    ],
  },
  {
    id: 'bio-ecosystems-food-webs',
    subject: 'biology',
    grade: 11,
    title: 'Ecosystems, Food Webs & Cycles',
    emoji: '🌍',
    summary:
      'See how energy flows one way through a food web while matter (carbon, nitrogen, water) cycles around forever — and why only ~10% of energy passes up each level.',
    sections: [
      {
        heading: 'Who eats whom',
        body:
          'An ecosystem is all the living things plus their non-living environment. Energy enters as sunlight and flows through feeding levels (trophic levels).\n\n• Producers — plants; make their own food via photosynthesis.\n• Primary consumers — herbivores that eat producers.\n• Secondary/tertiary consumers — carnivores that eat other consumers.\n• Decomposers — bacteria and fungi that break down dead matter and return nutrients to the soil.\n\nA food chain is one path; a food web is many chains linked together (more realistic).',
        tip: 'An arrow in a food web points in the direction the energy flows — from the food TO the eater, not the other way.',
      },
      {
        heading: 'The 10% rule',
        body:
          'Energy is lost at every step (as heat, movement, and undigested waste), so only about 10% of the energy at one trophic level reaches the next.\n\nThat’s why food chains are short (usually 4–5 links) and why there are far fewer top predators than plants — there simply isn’t enough energy left to support many of them.',
        tip: 'Energy flows ONE way and is lost as heat. Matter (atoms) is different — it gets recycled, never lost.',
      },
      {
        heading: 'Biogeochemical cycles',
        body:
          'Unlike energy, matter is recycled through the ecosystem in cycles.\n\n• Carbon cycle — photosynthesis pulls CO₂ from air into living things; respiration, decomposition, and burning fossil fuels release it back.\n• Nitrogen cycle — bacteria convert atmospheric nitrogen into forms plants can use (nitrogen fixation), then it returns to the air via decomposers.\n• Water cycle — evaporation, condensation, precipitation, and runoff move water endlessly.',
        tip: 'Plants can’t use nitrogen straight from the air — they depend on nitrogen-fixing bacteria to convert it first.',
      },
    ],
    tricks: [
      {
        name: 'Energy flows, matter cycles',
        trick:
          'The one-line summary of ecology: ENERGY FLOWS (one way, in as sunlight, out as heat) but MATTER CYCLES (round and round, forever). If you remember nothing else, remember this.',
      },
      {
        name: 'Tenth at each step',
        trick:
          '10% passes up, 90% is lost. Picture $10 shrinking to $1 each level — the top predator is running on pocket change, which is why there are so few of them.',
      },
    ],
  },
  {
    id: 'bio-evolution-natural-selection',
    subject: 'biology',
    grade: 11,
    title: 'Evolution & Natural Selection',
    emoji: '🦎',
    summary:
      'Understand Darwin’s big idea — how random variation plus a tough environment slowly reshapes a whole species, and why "survival of the fittest" doesn’t mean the strongest.',
    sections: [
      {
        heading: 'Darwin’s four ingredients',
        body:
          'Natural selection needs four things to be true, and in nature they always are.\n\n• Variation — individuals in a population differ (some faster, some darker, etc.).\n• Inheritance — those traits can be passed to offspring.\n• Overproduction — more offspring are born than can survive, so there’s competition.\n• Selection — individuals with helpful traits survive and reproduce more, passing those traits on.\n\nOver many generations, helpful traits become more common. That’s evolution.',
        tip: '"Fittest" means best-suited to the environment, NOT strongest or fastest. A well-camouflaged rabbit can be "fitter" than a muscular one.',
      },
      {
        heading: 'A worked example',
        body:
          'Imagine a beetle population that’s green and brown. Birds spot green beetles easily on brown bark and eat them.\n\n• Brown beetles survive more often → they reproduce more → more brown offspring.\n• Over generations, the population becomes mostly brown.\n\nThe individual beetle didn’t change colour — the population’s makeup shifted because survivors passed on their genes.',
        tip: 'Individuals don’t evolve; populations do. Evolution is a change in the frequency of traits across generations.',
      },
      {
        heading: 'Evidence for evolution',
        body:
          'Multiple independent lines of evidence point to the same conclusion.\n\n• Fossils — show gradual change over time.\n• Homologous structures — same bone layout in a human arm, whale flipper, and bat wing (shared ancestor).\n• DNA — the more similar two species’ DNA, the more recently they shared an ancestor.\n\nMutations are the ultimate source of new variation — random changes in DNA that natural selection then filters.',
        tip: 'Mutations are random; natural selection is NOT. Selection is the non-random filter that keeps whatever happens to work.',
      },
    ],
    tricks: [
      {
        name: 'VISO',
        trick:
          'The four requirements for natural selection: Variation, Inheritance, Selection, Overproduction. Say "VISO" to make sure you list all four on the test.',
      },
      {
        name: 'Fit ≠ fittest muscle',
        trick:
          'Cross out "strong" whenever you see "fit." Fitness = how many offspring you leave behind. A tiny camouflaged insect can out-fit a lion in its own environment.',
      },
    ],
  },
  {
    id: 'bio-dna-protein-synthesis',
    subject: 'biology',
    grade: 12,
    title: 'DNA, Genes & Protein Synthesis',
    emoji: '🧬',
    summary:
      'Crack the code of life: how the DNA in your cells is copied into RNA and read out to build proteins — transcription and translation, made simple.',
    sections: [
      {
        heading: 'The molecule and its rules',
        body:
          'DNA is a twisted ladder (double helix). The rungs are pairs of bases, and they only pair one way.\n\n• A always pairs with T.\n• C always pairs with G.\n\nA gene is a section of DNA that codes for one protein. The order of bases is the instruction — change the order and you change the protein.\n\nIn RNA, the base T is replaced by U (uracil), and RNA is single-stranded.',
        tip: 'Complementary base pairing (A-T, C-G) is the key to everything: copying DNA, making RNA, and reading the code all rely on it.',
      },
      {
        heading: 'Step 1: Transcription (DNA → mRNA)',
        body:
          'Proteins are built outside the nucleus, but DNA can’t leave. So the cell makes a portable copy.\n\n• In the nucleus, the enzyme RNA polymerase unzips the gene.\n• It builds a messenger RNA (mRNA) strand complementary to the DNA (remember T becomes U).\n• The mRNA leaves the nucleus and travels to a ribosome.\n\nExample: DNA "TAC" is transcribed into mRNA "AUG."',
      },
      {
        heading: 'Step 2: Translation (mRNA → protein)',
        body:
          'At the ribosome, the mRNA is read three bases at a time. Each triplet is a codon.\n\n• Each codon codes for one amino acid.\n• Transfer RNA (tRNA) brings the matching amino acid, using its anticodon to pair with the codon.\n• Amino acids link into a chain — that chain folds into a protein.\n\n"AUG" is the start codon (it also codes for methionine). Special "stop" codons end the chain.',
        tip: 'DNA → RNA → protein is called the Central Dogma. Information flows in that one direction to build you.',
      },
    ],
    tricks: [
      {
        name: 'Central Dogma flow',
        trick:
          'DNA → RNA → Protein. Transcription writes the message (DNA to RNA), Translation reads it into a new "language" (RNA to protein). Transcribe = same language (nucleotides); Translate = new language (amino acids).',
      },
      {
        name: 'U replaces T in RNA',
        trick:
          'RNA has no T — it uses U instead. Memory hook: "RNA is yoU-nique." Whenever you copy DNA into RNA, swap every T for a U.',
      },
    ],
    formulas: [
      'Base pairing (DNA): A–T, C–G',
      'Base pairing (DNA→RNA): A→U, T→A, C→G, G→C',
      'Codon = 3 bases on mRNA = 1 amino acid',
    ],
  },
  {
    id: 'bio-mitosis-meiosis',
    subject: 'biology',
    grade: 12,
    title: 'Mitosis vs Meiosis',
    emoji: '🧫',
    summary:
      'Two kinds of cell division that students constantly mix up — learn which one grows your body and which one makes sex cells, and why the count of divisions matters.',
    sections: [
      {
        heading: 'Same goal, different jobs',
        body:
          'Both processes split one cell, but for opposite purposes.\n\n• Mitosis — makes 2 identical body cells (diploid, 2n). Used for growth, repair, and replacing worn-out cells.\n• Meiosis — makes 4 non-identical sex cells (haploid, n): sperm or egg. Used only for reproduction.\n\nDiploid (2n) means a full set of chromosome pairs (humans: 46). Haploid (n) means half (humans: 23), so that fertilization restores the full set.',
        tip: 'Mitosis = "Making Identical Twins" (2 clones). Meiosis = "Making Eggs/sperm" (4 unique). Match the extra letters.',
      },
      {
        heading: 'The numbers',
        body:
          'The clearest way to tell them apart on a test.\n\n• Mitosis — 1 division → 2 cells, each with the SAME number of chromosomes as the parent (diploid). Genetically identical.\n• Meiosis — 2 divisions → 4 cells, each with HALF the chromosomes (haploid). Genetically unique.',
        tip: 'Count the products: 2 identical = mitosis; 4 different = meiosis. This alone answers most questions.',
      },
      {
        heading: 'Why meiosis makes variety',
        body:
          'Meiosis deliberately shuffles genes, which is why siblings aren’t identical.\n\n• Crossing over — matching chromosomes swap chunks of DNA in prophase I.\n• Independent assortment — the chromosome pairs line up and separate randomly.\n\nTogether these create billions of possible gene combinations — the raw material for evolution.',
        tip: 'Mitosis copies; meiosis remixes. If a question mentions variation, crossing over, or gametes, it’s meiosis.',
      },
    ],
    tricks: [
      {
        name: 'Mitosis = Maintenance',
        trick:
          'Both start with "M," so tie meaning to the next letter. mItosis → Identical body cells. meiOsis → Offspring/eggs (and it halves the count). ',
      },
      {
        name: '2 vs 4, same vs half',
        trick:
          'Mitosis: 1 split, 2 cells, Same DNA. Meiosis: 2 splits, 4 cells, Half DNA. Chant "two-same, four-half" and you’ll never flip them.',
      },
    ],
  },
  {
    id: 'bio-mendelian-genetics',
    subject: 'biology',
    grade: 12,
    title: 'Mendelian Genetics & Punnett Squares',
    emoji: '🟩',
    summary:
      'Predict the odds of inheriting a trait using Punnett squares — and nail the vocabulary (allele, genotype, phenotype, dominant, recessive) that trips everyone up.',
    sections: [
      {
        heading: 'The vocabulary',
        body:
          'Genetics has a lot of terms, but they’re simple once paired up.\n\n• Gene — instruction for a trait (e.g. eye colour). Allele — a version of that gene (e.g. brown vs blue).\n• Dominant (capital, B) — shows up even with one copy. Recessive (lowercase, b) — only shows with two copies (bb).\n• Genotype — the actual alleles (BB, Bb, or bb). Phenotype — the visible trait (brown or blue eyes).\n• Homozygous — two same alleles (BB or bb). Heterozygous — two different (Bb).',
        tip: 'A recessive trait only appears when BOTH alleles are recessive (bb). One dominant allele is enough to mask it.',
      },
      {
        heading: 'Building a Punnett square',
        body:
          'A Punnett square predicts offspring ratios from two parents.\n\n• Write one parent’s alleles across the top, the other’s down the side.\n• Fill each box by combining the row and column allele.\n\nExample: Bb × Bb gives BB, Bb, Bb, bb.\n\n• Genotype ratio: 1 BB : 2 Bb : 1 bb.\n• Phenotype ratio: 3 dominant : 1 recessive (the classic 3:1).',
        tip: 'Ratios are probabilities, not guarantees. A 3:1 ratio means each child has a 75% chance of the dominant trait — not that 3 of every 4 kids will have it.',
      },
      {
        heading: 'Beyond simple dominance',
        body:
          'Not every trait is neatly dominant or recessive.\n\n• Incomplete dominance — the heterozygote is a blend (red × white flower → pink).\n• Codominance — both alleles show fully at once (roan cattle with both red and white hairs; human AB blood type).\n• Sex-linked traits — genes on the X chromosome (like colour-blindness) affect males more, since they have only one X.',
        tip: 'Blended offspring = incomplete dominance. Both traits showing side-by-side = codominance. Blend vs both-at-once is the key difference.',
      },
    ],
    tricks: [
      {
        name: 'HOMO = same, HETERO = different',
        trick:
          '"Homo" means same (homozygous BB or bb); "hetero" means different (heterozygous Bb). Same everyday meaning as in "homogenized" milk = all the same.',
      },
      {
        name: '3:1 monohybrid',
        trick:
          'Any cross of two heterozygotes (Bb × Bb) gives a 3:1 phenotype ratio. See "Bb × Bb," write "3 dominant : 1 recessive" before even drawing the box.',
      },
    ],
    formulas: [
      'Genotype ratio (Bb × Bb): 1 BB : 2 Bb : 1 bb',
      'Phenotype ratio (Bb × Bb): 3 dominant : 1 recessive',
      'Punnett boxes = (parent 1 alleles) × (parent 2 alleles)',
    ],
  },
  {
    id: 'bio-homeostasis-nervous',
    subject: 'biology',
    grade: 12,
    title: 'Homeostasis & the Nervous System',
    emoji: '🧠',
    summary:
      'Learn how your body holds itself steady using feedback loops, and how nerve signals fire fast enough to yank your hand off a hot stove before you even think.',
    sections: [
      {
        heading: 'Homeostasis = staying steady',
        body:
          'Homeostasis is keeping your internal conditions (temperature, blood sugar, water, pH) within a narrow safe range despite what’s happening outside.\n\nMost homeostasis uses negative feedback: when something drifts from the set point, the body pushes it back.\n\n• Too hot → you sweat and blood vessels widen → you cool down.\n• Too cold → you shiver and vessels narrow → you warm up.\n\nExample: high blood sugar triggers insulin (stores sugar); low blood sugar triggers glucagon (releases sugar).',
        tip: 'Negative feedback REVERSES a change (like a thermostat). It’s the most common type and keeps you stable.',
      },
      {
        heading: 'The neuron and its signal',
        body:
          'The nervous system’s cell is the neuron. Signals travel in one direction through it.\n\n• Dendrites — receive the signal.\n• Cell body — processes it.\n• Axon — carries the electrical impulse away.\n• Myelin sheath — fatty insulation that speeds the impulse up.\n\nBetween two neurons is a tiny gap called a synapse. The electrical signal can’t jump it, so the neuron releases chemicals (neurotransmitters) to carry the message across.',
        tip: 'Inside a neuron the signal is electrical; between neurons it’s chemical (neurotransmitters crossing the synapse).',
      },
      {
        heading: 'The reflex arc',
        body:
          'Some responses skip the brain to save time. Touch a hot stove and your hand pulls back before you consciously feel pain.\n\nPath: receptor (skin) → sensory neuron → spinal cord → motor neuron → muscle.\n\nThe spinal cord orders the muscle to act; the message reaches your brain a moment later. That shortcut is why reflexes are so fast.',
        tip: 'A reflex is routed through the spinal cord, not the brain — that’s the whole point of the shortcut: speed.',
      },
    ],
    tricks: [
      {
        name: 'Negative = Nullify',
        trick:
          'Negative feedback Nullifies the change (both start with N). Hot → cool down; cold → warm up. It always pushes back toward the set point.',
      },
      {
        name: 'DCAM neuron order',
        trick:
          'Signal flow through a neuron: Dendrite → Cell body → Axon → Myelin-wrapped for speed. "DCAM" keeps the parts in order from receiving to sending.',
      },
    ],
  },
]
