import type { Lesson } from '../../types'

/** English Language Arts lessons (grades 10–12) for the Learning Center. */
export const elaLessons: Lesson[] = [
  {
    id: 'ela-literary-devices',
    subject: 'ela',
    grade: 10,
    title: 'Literary Devices You Must Know',
    emoji: '🎭',
    summary:
      'Spot metaphor, irony, foreshadowing and friends on sight — and, more importantly, explain what each one is DOING in the text, which is where the marks live.',
    sections: [
      {
        heading: 'The comparison family',
        body:
          'Writers compare things to make the unfamiliar vivid.\n\n• Simile — a comparison using "like" or "as": "Her voice was like gravel." We instantly hear roughness.\n• Metaphor — a direct comparison, no "like" or "as": "Her voice was gravel." Stronger, because the two things are fused rather than compared.\n• Personification — giving human qualities to something non-human: "The wind whispered through the trees." The forest becomes alive, maybe secretive.\n• Hyperbole — deliberate exaggeration for effect: "I\u2019ve told you a million times." Nobody counts; the point is frustration.\n\nAnalysis example: in "the classroom was a pressure cooker before the exam", the metaphor does two jobs — it conveys trapped, rising tension AND hints that someone may soon blow up.',
        tip: 'Never just name the device. The mark formula is: device + quote + EFFECT. "The metaphor \u2018pressure cooker\u2019 conveys the students\u2019 mounting, contained stress" earns; "this is a metaphor" does not.',
      },
      {
        heading: 'The three types of irony',
        body:
          'Irony is a gap between expectation and reality — and there are three distinct kinds. Mixing them up is a classic error.\n\n• Verbal irony — a speaker says the opposite of what they mean: looking at a downpour and saying "Lovely weather." (Sarcasm is verbal irony with a mocking edge.)\n• Situational irony — the outcome is the opposite of what everyone expected: a fire station burns down; a lifeguard drowns.\n• Dramatic irony — the AUDIENCE knows something a character does not: in Romeo and Juliet, we know Juliet is only drugged, but Romeo believes she is dead — and acts on it. The gap between our knowledge and his creates the tragedy.\n\nNote: an unfortunate coincidence is not automatically irony. Rain on your wedding day is just bad luck — unless you specifically moved the wedding to the desert to avoid rain.',
      },
      {
        heading: 'Foreshadowing and symbolism',
        body:
          '• Foreshadowing — an early hint of what is coming: a storm gathering as characters plan a trip, a casual mention of a gun in act one. It builds tension and makes endings feel earned rather than random.\n• Symbolism — an object, colour, or image that carries meaning beyond itself: a caged bird suggesting trapped freedom, winter suggesting death or emotional coldness, a road suggesting a life choice.\n\nAnalysis example: "She locked the door, checked it twice, and slid the chain across." Literally, caution. Symbolically, the locks may represent how sealed-off the character has become — and if a writer shows us a lock, expect someone to try the door later (foreshadowing).',
        tip: 'A symbol usually repeats or gets special attention. If the writer keeps returning to the same object or image, it is almost certainly doing symbolic work — track it.',
      },
      {
        heading: 'How to use this on a test',
        body:
          'When a question asks you to identify or analyze a device:\n\n• Quote the exact words the device lives in — short and precise beats long and vague.\n• Name the device correctly (simile vs metaphor is a freebie mark; don\u2019t donate it).\n• Explain the effect on meaning or mood in one or two sentences: what does the reader see, feel, or expect because of it?\n\nWhere people lose marks:\n\n• Calling every comparison a metaphor — if "like" or "as" is doing the comparing, it is a simile.\n• Labelling any surprise "irony" without saying which type and what expectation was reversed.\n• Device-spotting without effect: naming five devices with zero analysis scores less than naming two devices with strong analysis.',
      },
    ],
    tricks: [
      {
        name: 'Simile sounds like "similar"',
        trick:
          'A SIMILE keeps things SIMILAR but separate, using "like" or "as". A metaphor goes further and says one thing IS the other. Spot "like/as" → simile, every time.',
      },
      {
        name: 'The irony sorter',
        trick:
          'Ask WHO holds the gap. Speaker means the opposite → verbal. Universe delivers the opposite → situational. Audience knows, character doesn\u2019t → dramatic.',
      },
      {
        name: 'Chekhov\u2019s gun',
        trick:
          'The playwright Chekhov said: if a gun is shown in act one, it must fire by act three. Any oddly specific early detail is probably foreshadowing — file it and wait.',
      },
      {
        name: 'Name it, quote it, work it',
        trick:
          'Three-beat answer for any device question: NAME the device, QUOTE the words, explain the WORK it does (effect on mood, meaning, or expectation). All three beats or no full marks.',
      },
    ],
  },
  {
    id: 'ela-paragraph',
    subject: 'ela',
    grade: 10,
    title: 'Building a Paragraph: Topic, Evidence, Analysis',
    emoji: '🧱',
    summary:
      'Master the one structure behind almost every mark you\u2019ll ever earn in English: make a point, prove it, and explain why the proof matters.',
    sections: [
      {
        heading: 'The topic sentence: your paragraph\u2019s promise',
        body:
          'A topic sentence is the first sentence of a body paragraph, and it makes a PROMISE: here is the one idea this paragraph will prove.\n\n• Weak: "Curfews are an issue for many teens." (A vague topic, no position.)\n• Strong: "School-night curfews improve teens\u2019 performance because they protect sleep." (One arguable idea the paragraph can now prove.)\n\nEverything after the topic sentence must serve that promise. If a sentence doesn\u2019t help prove the point, it belongs in a different paragraph — or in the recycling bin.',
        tip: 'Test any topic sentence by asking: "Could someone disagree with this?" If no one could possibly object, it is a fact or a summary, not a point worth a paragraph.',
      },
      {
        heading: 'Evidence: prove it or lose it',
        body:
          'Evidence is the specific support for your point: a quotation from the text, a fact, a statistic, or a concrete example.\n\nIntroduce quotations with context — never let them free-fall into the paragraph:\n\n• Dropped (weak): The narrator is lonely. "I walked home the long way again."\n• Integrated (strong): The narrator\u2019s isolation shows in her habits: she admits, "I walked home the long way again," avoiding the streets where she might meet anyone.\n\nKeep quotations short. Quote the sharpest five words, not the whole paragraph — you are the lawyer, and the quote is the exhibit, not the argument.',
      },
      {
        heading: 'Analysis: the part that earns the marks',
        body:
          'Analysis explains HOW the evidence proves the point. It is the step students skip most — and the step worth the most.\n\nAfter every piece of evidence, answer the silent question "So what?":\n\n• Evidence: she admits, "I walked home the long way again."\n• Analysis: The word "again" reveals this avoidance is routine, not accidental — her loneliness is something she actively maintains, which suggests fear rather than mere circumstance.\n\nNotice the analysis zooms in on a single word ("again") and connects it back to the paragraph\u2019s point. Good analysis is usually LONGER than the evidence it discusses. If your quote is two lines and your explanation is one, the ratio is upside down.',
        tip: 'Rule of thumb: at least two sentences of analysis for every quotation. If you cannot say two sentences about it, you picked the wrong quotation.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Retelling the plot instead of analyzing it. Summary says WHAT happened; analysis says WHY it matters. Markers can read the book themselves.\n• Dropped quotes with no introduction and no follow-up.\n• Paragraph drift: starting on curfews and sleep, ending on part-time jobs. One paragraph, one idea.\n• Missing link sentence: end by connecting the paragraph back to your overall argument, so the reader always knows why they just read it.\n• Evidence with no analysis — a quotation never speaks for itself, no matter how perfect it feels.',
      },
    ],
    tricks: [
      {
        name: 'PEEL',
        trick:
          'Point, Evidence, Explain, Link. State the Point (topic sentence), give Evidence (quote/fact), Explain how it proves the point, Link back to the thesis. Every body paragraph, same four layers.',
      },
      {
        name: 'The quote sandwich',
        trick:
          'Never serve a naked quotation. Top bread: introduce who is speaking and when. Filling: the short quote. Bottom bread: your analysis of it. Quote dropped without bread = marks dropped.',
      },
      {
        name: 'So what? twice',
        trick:
          'After writing any piece of evidence, ask "So what?" — write the answer. Then ask "So what?" AGAIN about your answer. The second "so what" is where real analysis usually begins.',
      },
    ],
  },
  {
    id: 'ela-five-paragraph-essay',
    subject: 'ela',
    grade: 10,
    title: 'The Five-Paragraph Essay & Thesis Statements',
    emoji: '📝',
    summary:
      'Learn the reliable skeleton — intro, three body paragraphs, conclusion — and how to write the single sentence the whole essay hangs on: the thesis.',
    sections: [
      {
        heading: 'The thesis: one arguable sentence',
        body:
          'A thesis statement is the claim your entire essay exists to prove. It has two requirements: it must be ARGUABLE (someone could disagree) and SPECIFIC (it tells the reader exactly what you\u2019ll prove).\n\n• Not a thesis: "Romeo and Juliet is a play about love." (A fact — nothing to argue.)\n• Weak thesis: "Romeo and Juliet is a great play." (An opinion, but vague — great how? why?)\n• Strong thesis: "In Romeo and Juliet, Shakespeare shows that secrecy, not fate, destroys the lovers — every disaster in the play grows from information someone chose to hide."\n\nThe strong version takes a position, is specific, and even hints at the evidence to come. It usually sits at the END of the introduction.',
        tip: 'A useful thesis template while learning: "In [text], [author] uses [X and Y] to show [arguable idea]." Outgrow the template later; never outgrow its logic.',
      },
      {
        heading: 'The introduction: funnel down to the thesis',
        body:
          'An introduction moves from broad to narrow in three steps:\n\n• Hook — one or two sentences that earn attention: a sharp question, a striking image, a surprising claim. Not "Since the dawn of time…"\n• Bridge — connect the hook to your specific text and topic; name the title and author here.\n• Thesis — the final sentence: your arguable claim.\n\nThink of it as a funnel: wide idea at the top, your exact argument at the bottom. Three to five sentences is plenty — long introductions usually mean the writer is stalling.',
      },
      {
        heading: 'Body paragraphs and the conclusion',
        body:
          'Each of the three body paragraphs proves ONE reason your thesis is true, using the PEEL structure (Point, Evidence, Explain, Link). Order them deliberately — many writers put their strongest argument LAST, where it echoes longest.\n\nThe conclusion is the introduction\u2019s mirror: narrow to broad.\n\n• Restate the thesis in fresh words (do not copy-paste it).\n• Briefly gather the three threads of your argument.\n• End with a "so what" — why this argument matters beyond the essay: a wider implication, a lasting image, a final thought.\n\nNever introduce brand-new evidence in the conclusion. The trial is over; this is the closing statement.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• A thesis that is a fact, a question, or an announcement ("In this essay I will discuss…"). Announcements are not arguments.\n• Body paragraphs that don\u2019t match the thesis — if you promise secrecy, fate, and family honour, deliver exactly those, in that order.\n• Plot summary disguised as body paragraphs. Assume the marker knows the story.\n• A conclusion that just repeats the intro word for word — restate, don\u2019t photocopy.\n• Skipping the plan. Five minutes of outlining (thesis + three points + best quote for each) prevents the mid-essay collapse where paragraph three drifts off-topic.',
        tip: 'Before writing, complete this line: "I believe ___ because ___, ___, and ___." That single sentence IS your essay outline — thesis plus three body paragraphs.',
      },
    ],
    tricks: [
      {
        name: 'The disagree test',
        trick:
          'Read your thesis and imagine a classmate saying "No, I disagree, because…" If they couldn\u2019t possibly, it\u2019s a fact, not a thesis. A thesis picks a fight it can win.',
      },
      {
        name: 'Funnel in, fountain out',
        trick:
          'Introduction = funnel (broad hook narrowing to a precise thesis). Conclusion = fountain (restated thesis spreading out to wider meaning). Sketch the two shapes on your planning page.',
      },
      {
        name: 'Because ×3',
        trick:
          'Force your outline into one sentence: "THESIS, because A, because B, because C." A, B and C are your three body paragraphs, pre-ordered. No plan survives contact with the clock — except this one.',
      },
    ],
    formulas: [
      'Intro: hook → bridge → thesis (last sentence)',
      'Body ×3: Point → Evidence → Explain → Link (PEEL)',
      'Conclusion: restate thesis → gather threads → wider "so what"',
      'thesis = arguable + specific, never an announcement',
    ],
  },
  {
    id: 'ela-rhetorical-appeals',
    subject: 'ela',
    grade: 11,
    title: 'Rhetorical Appeals: Ethos, Pathos, Logos',
    emoji: '🗣️',
    summary:
      'Decode the three levers of persuasion that Aristotle identified over 2,300 years ago — and that every ad, speech, and opinion piece still pulls today.',
    sections: [
      {
        heading: 'The three appeals',
        body:
          'Aristotle argued that persuasion works through three channels:\n\n• Ethos — appeal to credibility and character: "Trust ME." The speaker establishes authority, experience, or shared values. "As a nurse with twenty years in emergency rooms…"\n• Pathos — appeal to emotion: "FEEL this." Vivid stories, loaded words, and images that trigger fear, pity, pride, or hope. "Imagine your child waiting alone in that hallway."\n• Logos — appeal to logic and evidence: "The FACTS say." Statistics, studies, cause-and-effect reasoning. "Emergency wait times have tripled since 2019."\n\nStrong persuasion almost always blends all three — a credible speaker, moving the audience, with evidence to back it up.',
      },
      {
        heading: 'Spotting appeals in the wild',
        body:
          'Take one charity advertisement, three sentences:\n\n"Dr. Sarah Chen has spent fifteen years fighting child hunger. Tonight, one in five children in this city will go to bed hungry. A donation of just $10 provides twenty school breakfasts."\n\n• Sentence 1 is ethos: the doctor\u2019s name, title, and fifteen years build credibility before any request is made.\n• Sentence 2 is pathos: "go to bed hungry" paints a picture designed to produce guilt and compassion; "one in five" makes it feel close to home.\n• Sentence 3 is logos: concrete numbers ($10 → 20 breakfasts) make donating look measurable and rational.\n\nThe order is deliberate too: earn trust, stir feeling, then hand the reader a logical action while the feeling is still warm.',
        tip: 'A statistic can serve pathos, not just logos. "One in five children" is technically a number, but its JOB here is emotional. Classify by what the words are DOING, not what they look like.',
      },
      {
        heading: 'When appeals go wrong',
        body:
          'Each appeal has a corrupt twin — and analyzing manipulation is a higher-level skill markers reward:\n\n• Fake ethos: celebrity endorsements where the celebrity has no relevant expertise; "9 out of 10 dentists" with no source.\n• Pathos overload: fear-mongering and guilt-tripping that substitute for evidence — if a text ONLY makes you feel and never shows proof, be suspicious.\n• False logos: statistics with no source, cherry-picked data, or false cause reasoning ("crime rose after the policy, so the policy caused it").\n\nA balanced argument survives the removal of any one appeal. Propaganda usually collapses if you take away the pathos.',
      },
      {
        heading: 'How to use this on a test',
        body:
          'Rhetorical analysis questions want three moves, in order:\n\n• Identify the appeal by name (ethos, pathos, or logos).\n• Quote the exact words creating it.\n• Explain the intended effect on the TARGET AUDIENCE — who is this aimed at, and what is it supposed to make them think, feel, or do?\n\nWhere people lose marks:\n\n• Labelling every emotional word "pathos" without explaining WHICH emotion and WHY the author wants it.\n• Ignoring audience — persuasion is always aimed at someone specific.\n• Ethos/logos mix-ups: citing an expert is ethos (credibility); citing the expert\u2019s DATA is logos.\n• Analyzing appeals one by one but never stepping back to judge whether the overall argument is fair or manipulative.',
        tip: 'End every rhetorical analysis with one evaluative sentence: is the persuasion legitimate (evidence-backed) or manipulative (feeling substituted for proof)? That judgment is often the top-band differentiator.',
      },
    ],
    tricks: [
      {
        name: 'Ethics, empathy, logic',
        trick:
          'Ethos = ETHICS and credibility (trust the speaker). Pathos = emPATHy and feeling (sym-PATH-y and PATH-etic share the root). Logos = LOGIC (think "logical"). The English cousins of each Greek word carry the meaning.',
      },
      {
        name: 'Who? Feel? Prove?',
        trick:
          'Three questions sort any persuasive line: WHO is talking and why should I trust them (ethos)? What am I made to FEEL (pathos)? What is the PROOF (logos)? Ask all three of every paragraph.',
      },
      {
        name: 'Remove-one stress test',
        trick:
          'Mentally delete all the emotion from a text. If a solid argument remains, the pathos was seasoning. If nothing remains, the pathos was the whole meal — and that\u2019s your thesis about manipulation.',
      },
    ],
  },
  {
    id: 'ela-poetry-toolkit',
    subject: 'ela',
    grade: 11,
    title: 'Poetry Analysis Toolkit',
    emoji: '🪶',
    summary:
      'Walk into any poem with a plan: TPCASTT for the reading, plus meter, rhyme, and imagery for the close-up work — no more staring at the page hoping.',
    sections: [
      {
        heading: 'TPCASTT: a route through any poem',
        body:
          'TPCASTT gives you seven ordered steps so you never freeze:\n\n• Title — before reading, predict: what might a poem with this title be about?\n• Paraphrase — translate the poem line by line into plain prose. What literally happens?\n• Connotation — go past literal meaning: figurative language, imagery, sound devices, word choices and their associations.\n• Attitude — the speaker\u2019s tone: bitter? wistful? celebratory? Find the words that prove it.\n• Shifts — hunt for turning points: a change in tone, tense, speaker, or structure. Words like "but" and "yet", stanza breaks, and punctuation shifts are signposts. The shift is often where the meaning lives.\n• Title (again) — reread the title now. Has its meaning changed?\n• Theme — state what the poem says about life in a full sentence, not a single word.\n\nParaphrase before you interpret. Most bad poetry analysis comes from skipping straight to symbol-hunting without knowing what the poem literally says.',
        tip: 'Theme is a sentence, not a word. "Loss" is a topic. "The poem suggests that grief fades not by forgetting but by transforming into memory" is a theme.',
      },
      {
        heading: 'Meter: the poem\u2019s heartbeat',
        body:
          'Meter is the pattern of stressed and unstressed syllables. The most common unit is the iamb: unstressed-STRESSED, "da-DUM" — the rhythm of a heartbeat and of natural English speech ("toDAY", "aLONE").\n\nIambic pentameter = five iambs per line, ten syllables:\n\n"Shall I | comPARE | thee TO | a SUM | mer\u2019s DAY?" (Shakespeare, Sonnet 18)\n\nda-DUM da-DUM da-DUM da-DUM da-DUM.\n\nWhy it matters for analysis: poets BREAK meter on purpose. When a line suddenly starts with a stressed syllable or gains an extra beat, the poet is elbowing you — something important is happening in that line. Regular meter soothes; broken meter jolts.',
      },
      {
        heading: 'Rhyme scheme and imagery',
        body:
          'Rhyme scheme is labelled with letters: give the first end-sound "A", the next new sound "B", and so on.\n\n"Roses are red (A) / Violets are blue (B) / Sugar is sweet (C) / And so are you (B)" → ABCB.\n\nCommon patterns: ABAB (alternating), AABB (couplets), and the Shakespearean sonnet\u2019s ABAB CDCD EFEF GG — where the final rhyming couplet (GG) delivers the punchline or twist.\n\nImagery is language appealing to the five senses — not just sight. "The kettle\u2019s hiss", "the sting of salt air", "sweet smoke" are sound, touch, and smell/taste imagery. When you find imagery, name the sense AND the feeling it builds: "cold, metallic imagery reinforces the speaker\u2019s emotional numbness."',
        tip: 'Free verse (no regular meter or rhyme) is not "no technique". Analyze line breaks instead: what word ends each line? What gets a line of its own? Those are the free-verse poet\u2019s tools of emphasis.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Symbol-hunting before paraphrasing — you cannot interpret a poem you cannot literally retell.\n• Feature-spotting without effect: "the poem is ABAB with iambic pentameter" earns nothing by itself. Every device must connect to meaning or mood.\n• Missing the shift. Examiners choose poems WITH turning points; find the "but", the dash, the stanza break where the poem changes its mind.\n• Treating the speaker as the poet. The "I" of a poem is a constructed voice — write "the speaker", not the poet\u2019s name, unless you can prove it is autobiographical.\n• One-word themes. Always a full sentence about life, supported by the text.',
      },
    ],
    tricks: [
      {
        name: 'TPCASTT',
        trick:
          'Title, Paraphrase, Connotation, Attitude, Shifts, Title again, Theme. Seven steps, in order, for any poem — write the letters down the margin of your exam booklet and fill them in.',
      },
      {
        name: 'da-DUM heartbeat',
        trick:
          'The iamb is a heartbeat: da-DUM. Iambic pentameter is five heartbeats per line. Tap the rhythm on your desk while reading — where your tapping breaks, the poet broke the meter on purpose.',
      },
      {
        name: 'Letters for rhymes',
        trick:
          'Assign A to the first end-sound and a new letter to each new sound. Same sound, same letter. The finished letter string (ABAB, AABB…) is the rhyme scheme — mechanical, unmissable marks.',
      },
      {
        name: 'Find the "but"',
        trick:
          'Almost every exam poem pivots. Hunt for "but", "yet", "still", a dash, or a white-space break — the shift is usually the key to theme, and mentioning it almost always earns marks.',
      },
    ],
  },
  {
    id: 'ela-grammar-pitfalls',
    subject: 'ela',
    grade: 11,
    title: 'Grammar Pitfalls: Comma Splices, Apostrophes & Homophones',
    emoji: '✂️',
    summary:
      'Eliminate the three error families that cost the most easy marks — run-together sentences, wandering apostrophes, and sound-alike word mix-ups.',
    sections: [
      {
        heading: 'Comma splices and how to fix them',
        body:
          'A comma splice welds two complete sentences together with only a comma:\n\n• Wrong: "The experiment failed, we started over."\n\nBoth halves could stand alone as sentences, so a comma is too weak to join them. Four legal fixes:\n\n• Period: "The experiment failed. We started over."\n• Semicolon (for closely related ideas): "The experiment failed; we started over."\n• Comma + coordinating conjunction: "The experiment failed, so we started over."\n• Subordinate one half: "Because the experiment failed, we started over."\n\nThe coordinating conjunctions are the FANBOYS: for, and, nor, but, or, yet, so. A comma plus one of these seven can legally join two sentences; a comma alone never can.',
        tip: 'Test for a splice: read each half aloud on its own. If BOTH halves sound like complete sentences and only a comma sits between them, it\u2019s a splice — upgrade the punctuation.',
      },
      {
        heading: 'Apostrophes: possession and contraction only',
        body:
          'Apostrophes do exactly two jobs:\n\n• Possession: "the student\u2019s essay" (one student), "the students\u2019 essays" (many students — apostrophe after the s).\n• Contraction — marking missing letters: "don\u2019t" (do not), "it\u2019s" (it is / it has), "they\u2019re" (they are).\n\nApostrophes NEVER make plurals. "Apple\u2019s for sale" is wrong; "apples for sale" is right.\n\nThe its/it\u2019s trap, which decides real marks: "it\u2019s" ALWAYS means "it is" or "it has". The possessive is "its", no apostrophe — like "his" and "hers", which also take none. "The dog wagged its tail" — because "the dog wagged it is tail" is nonsense.',
        tip: 'Every time you write "it\u2019s", read it back as "it is". If the sentence breaks, delete the apostrophe. This one habit fixes the single most common error in student writing.',
      },
      {
        heading: 'Homophones: the sound-alike minefield',
        body:
          'Homophones sound identical but mean different things — spellcheck cannot save you, because every option is a real word.\n\n• their / there / they\u2019re — possession ("their books"), place ("over there"), contraction of they are ("they\u2019re late").\n• your / you\u2019re — possession ("your essay") vs you are ("you\u2019re finished").\n• to / too / two — direction or infinitive ("to school", "to run"), "also/excessively" ("too loud, me too"), the number 2.\n• affect / effect — usually: affect is the Action (verb: "stress affects sleep"), effect is the End result (noun: "the effect was dramatic").\n• then / than — then is time ("then we left"); than is comparison ("taller than me").\n\nOne sentence, all correct: "They\u2019re bringing their projects over there, and you\u2019re going to love your group\u2019s results — better than last time, and then we celebrate."',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Splices under time pressure — conclusions written in the last five minutes are splice factories. Save one minute to reread ONLY your punctuation between sentences.\n• "Could of / should of / would of" — the contraction "could\u2019ve" sounds like "could of", but it is could HAVE. Writing "of" here is a red flag to every marker.\n• Apostrophes tossed at any word ending in s, including plain plurals.\n• Its/it\u2019s and your/you\u2019re swaps in the first paragraph — errors in the opening lines set the marker\u2019s expectations for everything after.\n• Trusting spellcheck for homophones — it checks spelling, not meaning.',
        tip: 'Budget a two-minute proofread with a target list: it\u2019s/its, they\u2019re/their/there, you\u2019re/your, comma splices, "could of". Hunting for five specific errors beats vaguely rereading.',
      },
    ],
    tricks: [
      {
        name: 'FANBOYS',
        trick:
          'For, And, Nor, But, Or, Yet, So — the seven coordinating conjunctions. Comma + FANBOYS legally joins two sentences. A comma without a FANBOYS between two sentences is a splice.',
      },
      {
        name: 'It\u2019s = it is, always',
        trick:
          'The apostrophe in "it\u2019s" is a tiny flag saying "letters missing here!" Expand it to "it is" as a test. Possessive its goes bare, matching his and hers — none of them take apostrophes.',
      },
      {
        name: 'Affect the Action, Effect the End',
        trick:
          'Affect starts with A like Action — it\u2019s the verb. Effect starts with E like End result — it\u2019s the noun. "The rain AFFECTED the game; the EFFECT was a cancellation."',
      },
      {
        name: 'There has "here" inside',
        trick:
          'THERE contains HERE — both are places. THEIR contains HEIR — heirs possess things. THEY\u2019RE has an apostrophe — letters are missing from "they are". Let the spelling itself carry the meaning.',
      },
    ],
  },
  {
    id: 'ela-critical-essay',
    subject: 'ela',
    grade: 12,
    title: 'The Critical/Analytical Essay',
    emoji: '🏛️',
    summary:
      'The diploma-style essay: respond to a big-idea prompt through a text you know deeply — with an insightful thesis, integrated evidence, and a voice that sounds like you actually mean it.',
    sections: [
      {
        heading: 'Decode the prompt before anything else',
        body:
          'Diploma-style prompts ask you to discuss an idea, not retell a book — for example: "Discuss the idea(s) developed by the text creator about the ways in which individuals respond to adversity."\n\nUnpack it into working parts:\n\n• The concept: adversity — hardship, loss, injustice, failure.\n• The real question: what does your chosen text argue about HOW people respond to it?\n• Your job: state that argument as a thesis and prove it with the text.\n\nCircle the key nouns and verbs in the prompt and use those exact words in your thesis and topic sentences. Markers are explicitly checking whether you answered THE prompt or the essay you wished you\u2019d been asked.',
        tip: 'Rephrase the prompt as a direct question in your planning space ("How do individuals respond to adversity, according to this text?"). Your thesis is simply your best answer to that question.',
      },
      {
        heading: 'Choose the text and build the thesis',
        body:
          'Choose the text you know in DETAIL — quotes, scenes, character arcs — not the most impressive-sounding one. A well-known short story beats a half-remembered classic every time.\n\nThe thesis must make a claim about theme, framed through the prompt:\n\n• Weak: "Macbeth responds badly to adversity." (Character summary, no idea.)\n• Strong: "In Macbeth, Shakespeare suggests that when individuals respond to adversity by abandoning their conscience, each compromise makes the next one easier — until the self they were protecting no longer exists."\n\nThe strong version names the author\u2019s idea about life (transferable beyond the plot), takes a position, and sets up an essay structure: early compromise, escalation, final emptiness.',
      },
      {
        heading: 'Evidence and integration at the senior level',
        body:
          'At grade 12, evidence standards rise:\n\n• Range: draw from the beginning, middle, AND end of the text — three quotes from one scene suggests you only know one scene.\n• Integration: weave quotations into your own sentences. Not: "Macbeth says a quote. \u2018Full of scorpions is my mind.\u2019" But: "Macbeth\u2019s confession that his mind is \u2018full of scorpions\u2019 shows torment breeding in the very place his ambition was born."\n• Precision: if you cannot recall exact words, a tight paraphrase of a specific moment ("when Macbeth hallucinates the dagger before the murder…") is far better than a misquote.\n• Analysis depth: connect each piece of evidence to the THEME, not just the plot. The question is never "what happened?" but "what does this show about the author\u2019s idea?"',
        tip: 'Prepare before exam day: memorize five or six short, flexible quotations per text — ones about choice, fear, identity, or consequence bend to fit almost any prompt.',
      },
      {
        heading: 'Where people lose marks',
        body:
          'Diploma-style rubrics reward ideas and support most heavily. The classic failures:\n\n• Plot summary in place of argument — the single most common cause of mediocre scores.\n• Ignoring the prompt after the introduction. Echo its key words in every topic sentence to prove sustained focus.\n• A "matter-of-fact" thesis that states the obvious instead of an insight worth defending.\n• Unbalanced essays: one developed body paragraph and two skeletons. Three medium-strength paragraphs beat one great and two ghosts.\n• Neglecting the closing: the conclusion should extend the idea (what does the text\u2019s view of adversity mean for how we live?) — not just restate it.\n• Sloppy correctness: recurring comma splices and its/it\u2019s errors drag the writing-skills score down even when ideas are strong.',
      },
    ],
    tricks: [
      {
        name: 'Prompt words are your compass',
        trick:
          'Underline the prompt\u2019s key words and plant them in your thesis and every topic sentence. If a paragraph cannot naturally include them, that paragraph has wandered off the map.',
      },
      {
        name: 'Theme travels, plot stays home',
        trick:
          'Test your thesis: does it say something about LIFE that would still be true outside the book? "Macbeth kills the king" stays home. "Ambition without conscience devours the self" travels — that\u2019s theme.',
      },
      {
        name: 'Beginning–middle–end rule',
        trick:
          'One piece of evidence from each third of the text, minimum. It quietly proves you know the whole work and hands your essay a built-in sense of progression.',
      },
    ],
  },
  {
    id: 'ela-shakespeare',
    subject: 'ela',
    grade: 12,
    title: 'Reading Shakespeare Without Fear',
    emoji: '🎬',
    summary:
      'Shakespeare\u2019s language is a code with about five rules. Learn them and 400-year-old plays start reading like scripts — because that\u2019s what they are.',
    sections: [
      {
        heading: 'The old words are fewer than you think',
        body:
          'Most of Shakespeare\u2019s vocabulary is ordinary English. A short list of repeat offenders unlocks the rest:\n\n• thou / thee / thy / thine = you / you / your / yours (the informal "you", used for intimates and inferiors).\n• wherefore = WHY (not where). "Wherefore art thou Romeo?" means "WHY are you Romeo?" — Juliet is lamenting his name, not searching for him.\n• anon = soon, right away. hence = away from here. hither = to here.\n• art = are; hath = has; doth = does; \u2019tis = it is; o\u2019er = over; e\u2019en = even.\n• soft! = wait / hush. marry! = an oath, roughly "indeed!"\n\nVerb endings decode themselves: -est goes with thou ("thou knowest" = you know) and -eth is plain third person ("she loveth" = she loves).',
        tip: 'Whether a character says "thou" or "you" is characterization: "thou" signals intimacy or contempt, "you" signals respect or distance. A switch mid-scene means the relationship just shifted.',
      },
      {
        heading: 'Untangling the syntax',
        body:
          'Shakespeare frequently inverts word order to fit the meter or to spotlight a word:\n\n• "Never was seen so black a day as this" → untangled: "So black a day as this was never seen."\n\nDecoding routine:\n\n• Find the VERB, then ask who is doing it — that\u2019s your subject.\n• Rebuild the sentence in modern order: subject → verb → object.\n• Read to the PUNCTUATION, not the line ends. Lines of verse often break mid-sentence; pausing at every line end shreds the meaning. Follow the sentence like prose until you hit a period, colon, or question mark.\n\nAlso trust the meter: the plays are mostly iambic pentameter (da-DUM ×5), and the stressed positions usually carry the load-bearing words.',
        tip: 'When a passage resists you, paraphrase it OUT LOUD in your own slang. Forcing a translation ("basically, he\u2019s saying he can\u2019t sleep because he feels guilty") is the fastest comprehension check that exists.',
      },
      {
        heading: 'Verse, prose, and why it matters',
        body:
          'Shakespeare writes in two modes, and the choice is meaningful:\n\n• Verse (poetry, usually iambic pentameter): the default for nobles, lovers, and high-stakes moments. On the page, each line starts with a capital letter and stops short of the margin.\n• Prose (ordinary sentences): used for servants and comic characters, for jokes and letters — and, tellingly, for madness. When King Lear\u2019s mind fractures, his language slides from verse toward prose.\n\nSo watch for switches: a noble character dropping into prose, or a low-status character suddenly granted verse, is Shakespeare signalling a change in dignity, sanity, or sincerity. Mentioning a verse/prose shift in an essay is a high-value observation most students never make.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Translating "wherefore" as "where" — and misreading the balcony scene entirely.\n• Quoting a line that means the opposite of what you claim, because irony or sarcasm was missed. Check who is speaking, to whom, and whether they mean it.\n• Stopping at every line end and losing the sentence — read to the punctuation.\n• Treating the play as a novel. It\u2019s a SCRIPT: characters lie, perform for onstage audiences, and say things they don\u2019t mean. Ask what a character WANTS in the scene, not just what they say.\n• Retelling famous scenes instead of analyzing language. Everyone knows the balcony scene happens; marks come from what the words are doing in it.',
      },
    ],
    tricks: [
      {
        name: 'Wherefore = why, forever',
        trick:
          '"Wherefore art thou Romeo?" = "WHY are you (named) Romeo?" Lock it in with the reply Juliet wants: a reason, not a location. Therefore answers wherefore — both are about WHY.',
      },
      {
        name: 'Verb first, then untangle',
        trick:
          'In a twisted line, find the verb, ask "who\u2019s doing this?", and rebuild in subject-verb-object order. Ninety percent of "hard" Shakespeare is just scrambled word order.',
      },
      {
        name: 'Punctuation, not line ends',
        trick:
          'Verse lines are containers for rhythm, not for meaning. Read straight through line breaks and pause only at punctuation — the sentences instantly start making sense.',
      },
      {
        name: 'Thou = close, you = distant',
        trick:
          '"Thou" is for lovers, family, servants, and enemies you disrespect; "you" is for formality and respect. Track the pronouns and you can watch relationships warm up or curdle in real time.',
      },
    ],
  },
  {
    id: 'ela-nonfiction-media',
    subject: 'ela',
    grade: 12,
    title: 'Analyzing Non-fiction & Media',
    emoji: '📰',
    summary:
      'Every text is built by someone, for someone, for a reason. Learn to expose the purpose, audience, and bias of any article, speech, ad, or post — including the slick ones.',
    sections: [
      {
        heading: 'SOAPSTone: the x-ray for any text',
        body:
          'Before judging a non-fiction text, map it with SOAPSTone:\n\n• Speaker — who created this? What do they stand to gain?\n• Occasion — what event or situation prompted it?\n• Audience — who is it aimed at? (Vocabulary, references, and platform are the clues.)\n• Purpose — to inform, persuade, entertain, or sell? (Often a public purpose hides a second, commercial one.)\n• Subject — what is it literally about?\n• Tone — the speaker\u2019s attitude: urgent, mocking, reassuring, alarmed?\n\nExample: a glossy pamphlet titled "Understanding Your Energy Choices", published by an oil company (speaker), during a pipeline debate (occasion), mailed to voters (audience). The stated purpose is to inform; the actual purpose is to persuade. That gap between stated and actual purpose IS the analysis.',
        tip: 'Always ask who benefits. Following the money or the motive turns a vague feeling that something is "biased" into a specific, provable claim about purpose.',
      },
      {
        heading: 'Bias: usually a filter, not a lie',
        body:
          'Bias rarely means fabrication. It usually works through selection and framing:\n\n• Selection — which facts are included, and which are left out? A story on a protest that quotes only police, or only protesters, is biased before a single false word is written.\n• Framing/word choice — compare: "Protesters SWARMED the legislature" vs "Citizens GATHERED at the legislature." Same event; "swarmed" makes them insects, "gathered" makes them neighbours.\n• Emphasis — what makes the headline vs paragraph nine? Most readers never reach paragraph nine.\n• Sources — are claims attributed to named experts, anonymous "critics", or no one at all?\n\nLoaded language is the easiest bias to catch: "regime" vs "government", "cronies" vs "colleagues", "scheme" vs "plan" — each pair describes the same thing with opposite spin.',
      },
      {
        heading: 'Persuasive techniques in media and ads',
        body:
          'A field guide to the most common moves:\n\n• Bandwagon — "everyone\u2019s switching" (join the crowd or be left behind).\n• Testimonial — a celebrity or influencer endorses a product they have no expertise in (borrowed ethos).\n• Glittering generalities — feel-good words with no measurable content: "natural", "premium", "revolutionary".\n• Fear appeal — the problem is dramatized so the product can be the rescue: home-alarm ads that open with a break-in.\n• Statistics without sources — "9 out of 10 experts agree" (which experts? asked what?).\n• Plain folks — a millionaire politician in a diner, rolling up their sleeves: "I\u2019m just like you."\n\nAnd remember the design layer: in media, the camera angle, the music, the thumbnail, and what sits just out of frame are all authored choices, exactly like word choices in print.',
        tip: 'For online sources, read LATERALLY: open new tabs and check what OTHER sites say about your source before trusting it. Fact-checkers verify sideways, not by reading the About page.',
      },
      {
        heading: 'Where people lose marks',
        body:
          '• Saying a text "is biased" with no evidence. Name the technique and quote the loaded words — bias claims need proof like any other claim.\n• Analyzing only WHAT the text says and ignoring HOW: structure, images, headline choices, and what was omitted are all fair game and usually richer.\n• Treating "persuasive" as an insult. Persuasion is legitimate; the analytical question is whether it is honest (evidence-based) or manipulative (evidence-free).\n• Forgetting the audience: every technique is chosen FOR a target group, and naming that group sharpens every point you make.\n• Ignoring the source\u2019s identity — the same sentence means different things from a scientist, a lobbyist, and a satirist.',
      },
    ],
    tricks: [
      {
        name: 'SOAPSTone',
        trick:
          'Speaker, Occasion, Audience, Purpose, Subject, Tone. Six questions that x-ray any non-fiction text. Jot the letters in the margin and fill them in before you write a word of analysis.',
      },
      {
        name: 'Swarmed vs gathered',
        trick:
          'To expose framing, swap the loaded verb or noun for a neutral one and feel the temperature drop. If swapping one word changes the whole story, that word was carrying the bias.',
      },
      {
        name: 'Who benefits?',
        trick:
          'The fastest route to purpose: ask who gains if the audience believes this. Money, votes, clicks, reputation — find the payoff and you\u2019ve usually found the real purpose behind the stated one.',
      },
      {
        name: 'Check what\u2019s missing',
        trick:
          'The loudest bias is often silence. Ask: whose voice is absent? Which obvious question was never asked? Omission is a choice, and pointing it out is top-band analysis.',
      },
    ],
  },
]
