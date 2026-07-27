export interface NoteMethod {
  id: string
  name: string
  emoji: string
  tagline: string
  bestFor: string[]
  steps: string[]
  tips: string
  /** simple ascii-ish template rendered in a <pre> */
  template: string
}

export const NOTE_METHODS: NoteMethod[] = [
  {
    id: 'cornell',
    name: 'Cornell Method',
    emoji: '📋',
    tagline: 'The classic three-zone page that forces you to review.',
    bestFor: ['Lectures and classes', 'Textbook chapters', 'Test review — the cue column doubles as a quiz'],
    steps: [
      'Divide your page: a narrow cue column on the left (~6 cm), a wide notes area on the right, and a summary strip at the bottom.',
      'During class, take notes ONLY in the right-hand notes area. Use short phrases, not full sentences.',
      'Within 24 hours, write questions and keywords in the left cue column that match your notes.',
      'Cover the notes side and quiz yourself using only the cues.',
      'Write a 2-3 sentence summary at the bottom in your own words.',
    ],
    tips: 'The magic is in step 3 and 4 — writing cues and self-quizzing is active recall, which beats re-reading every time.',
    template: `┌──────────┬────────────────────────────┐
│  CUES    │  NOTES                     │
│          │                            │
│ Questions│  • main ideas              │
│ Keywords │  • details & examples      │
│ Formulas │  • diagrams                │
│          │                            │
├──────────┴────────────────────────────┤
│  SUMMARY (2-3 sentences, your words)  │
└───────────────────────────────────────┘`,
  },
  {
    id: 'mindmap',
    name: 'Mind Map',
    emoji: '🕸️',
    tagline: 'One big idea in the middle, everything else radiating out.',
    bestFor: ['Brainstorming essays', 'Seeing how unit concepts connect', 'Visual learners', 'Biology systems, history themes'],
    steps: [
      'Write the main topic in the centre of the page and circle it.',
      'Draw thick branches out for each major sub-topic (one word or short phrase each).',
      'Add thinner twigs off each branch for details, examples and formulas.',
      'Use colours, arrows and little doodles — connections between branches are gold.',
      'Redraw the map from memory later; compare with the original to find gaps.',
    ],
    tips: 'Keep each branch to 1-3 words. If you write sentences, it becomes an outline wearing a costume.',
    template: `            ┌─ sub-idea ── detail
   branch ──┤
            └─ sub-idea
      \\
  ( MAIN TOPIC )
      /
   branch ──┬─ example
            └─ formula`,
  },
  {
    id: 'outline',
    name: 'Outline Method',
    emoji: '🗂️',
    tagline: 'Indented headings and bullets — fast, ordered, dependable.',
    bestFor: ['Well-structured lectures', 'Textbook chapters with clear headings', 'History and ELA content'],
    steps: [
      'Write main topics at the left margin (Roman numerals or big bullets).',
      'Indent one level for sub-topics, another for details and examples.',
      'Leave white space so you can add points later.',
      'After class, bold or highlight the 20% of lines that matter most.',
    ],
    tips: 'Great for speed, weak for connections. Pair it with a mind map when you revise a whole unit.',
    template: `I. Main topic
   A. Sub-topic
      1. detail
      2. example
   B. Sub-topic
II. Next topic`,
  },
  {
    id: 'charting',
    name: 'Charting Method',
    emoji: '📊',
    tagline: 'Rows and columns for anything you need to compare.',
    bestFor: ['Comparing (mitosis vs meiosis, WWI vs WWII)', 'Vocabulary with examples', 'Formula sheets'],
    steps: [
      'Decide your columns before class or reading: e.g. Concept | Definition | Formula | Example.',
      'Fill one row per item as you go.',
      'Cover a column and recall it from the others to self-test.',
    ],
    tips: 'If you can name the categories in advance, charting turns messy content into a study table automatically.',
    template: `┌─────────┬────────────┬──────────┐
│ Concept │ Definition │ Example  │
├─────────┼────────────┼──────────┤
│ sin θ   │ opp / hyp  │ ...      │
│ cos θ   │ adj / hyp  │ ...      │
└─────────┴────────────┴──────────┘`,
  },
  {
    id: 'boxing',
    name: 'Boxing Method',
    emoji: '📦',
    tagline: 'Group related notes into labelled boxes on one page.',
    bestFor: ['Digital note apps and tablets', 'Topics with distinct chunks', 'Making one-page unit summaries'],
    steps: [
      'Split the page into boxes — one per sub-topic.',
      'Give each box a bold title, then fill it with only the notes that belong there.',
      'When revising, shrink each box mentally: could you rewrite it smaller?',
      'Turn your best boxes into flashcards.',
    ],
    tips: 'Boxing shines for a pre-test "everything on one page" sheet. If a box overflows, that sub-topic needs its own page — or more study.',
    template: `┌─ Trig ratios ──┐  ┌─ Solving angles ─┐
│ SOH CAH TOA    │  │ use inverse trig │
│ tan = opp/adj  │  │ θ = tan⁻¹(o/a)   │
└────────────────┘  └──────────────────┘
┌─ Word problems ────────────────────────┐
│ elevation = looking up from horizontal │
└────────────────────────────────────────┘`,
  },
  {
    id: 'flow',
    name: 'Flow Notes',
    emoji: '🌊',
    tagline: 'Write ideas as they come and connect them with arrows — learn while you write.',
    bestFor: ['Fast-moving classes', 'Subjects where everything links (physics!)', 'People who find linear notes boring'],
    steps: [
      'Write the topic anywhere with room around it.',
      'Jot ideas in your own words as you hear them — don\u2019t transcribe.',
      'Draw arrows between related ideas the moment you notice a link.',
      'Circle anything you didn\u2019t understand and follow up the same day.',
    ],
    tips: 'Flow notes are for learning, not archiving. Rewrite the messy page into Cornell or boxing format when you revise.',
    template: ` force ──causes──▶ acceleration
   │                   ▲
 mass ──"more m, less a"┘
   │
 F = ma  ⭘ (circle = ask teacher!)`,
  },
]
