import type { Lesson } from '../../types'

/** CS lessons for the Learning Center — the typing etiquette and technique of code. */
export const csLessons: Lesson[] = [
  {
    id: 'cs-syntax-etiquette',
    subject: 'cs',
    grade: 10,
    title: 'Syntax Etiquette: ; : == and Friends',
    emoji: '🔣',
    summary:
      'Learn what every squiggle on the keyboard means to a computer — and type code that runs on the first try instead of exploding over one missing colon.',
    sections: [
      {
        heading: 'Why computers need exact grammar',
        body:
          'Text a friend "meet u at teh mall" and they understand instantly — humans autocorrect. Computers never do. A program is read by a machine that follows rules with zero imagination, so ONE wrong character can break the whole thing.\n\n• A missing colon: the program refuses to start.\n• A stray quote: everything after it becomes "text" and chaos follows.\n• = where you meant ==: the code runs but does the wrong thing entirely.\n\nThis isn\u2019t the computer being mean — it\u2019s the computer being honest. It can\u2019t guess your intent, so the language gives you symbols to state your intent exactly. Learn what each symbol says, and you and the computer stop miscommunicating.',
        tip: 'Precision is a superpower, not a chore. The same exactness that makes syntax strict is what makes programs reliable — the computer does EXACTLY what you wrote, every single time.',
      },
      {
        heading: 'The symbol dictionary',
        body:
          'Every symbol is a word in the computer\u2019s language. Here\u2019s the pocket dictionary:\n\n• : (colon, Python) — "an indented block comes next". Ends every if, elif, else, for, while and def line.\n• ; (semicolon, Java/C++/JavaScript) — the full stop that ends a statement.\n• = — ASSIGNMENT: x = 5 stores 5 in x. It gives.\n• == — COMPARISON: x == 5 asks "is x equal to 5?" and answers True or False. It asks.\n• ( ) — calls a function: print("hi"), len(word). Also groups math: (a + b) / 2.\n• [ ] — indexes into a collection: scores[0] is the first item (counting starts at 0!).\n• { } — wraps code blocks in Java/C++/JavaScript; builds dictionaries in Python.\n• " " — quotes make TEXT. "5" is a string you can\u2019t do math with; 5 is a number you can. "5" + "5" is "55", but 5 + 5 is 10.\n• # (Python) and // (Java/C++/JavaScript) — comments. The computer ignores everything after them; they\u2019re notes for humans.',
        tip: 'Symbols come in pairs: every ( needs a ), every [ needs a ], every { needs a }, every opening quote needs a closer. Half the SyntaxErrors you\u2019ll ever see are a lonely, unclosed half of a pair.',
      },
      {
        heading: 'Indentation IS syntax in Python',
        body:
          'In most languages, spacing is just style. In Python, the spaces at the start of a line are GRAMMAR — they mark which block a line belongs to.\n\n• After a line ending in a colon, the next line MUST be indented (4 spaces is standard).\n• Every line indented the same amount belongs to the same block.\n• Un-indenting back to the left margin means "the block is over".\n\nSo in Python, moving a line left or right literally changes what the program does: an indented print runs only inside the if; the same print un-indented runs every time. Java and C++ would shrug — they read { } and ignore spacing. Python reads the spacing itself.',
        tip: 'Never mix tabs and spaces in Python — they can look identical on screen but count differently, causing baffling IndentationErrors. Pick spaces and let your editor handle it.',
      },
      {
        heading: 'One if statement, two languages',
        body:
          'Here\u2019s the SAME decision written in both dialects. In Python:\n\n• if score >= 50:\n•     print("Pass")\n\nAnd in Java:\n\n• if (score >= 50) {\n•     System.out.println("Pass");\n• }\n\nSpot the differences:\n\n• Python ends the if line with a colon; Java wraps the condition in ( ).\n• Python marks the block with indentation; Java wraps it in { }.\n• Python\u2019s statement just ends; Java\u2019s ends with a semicolon.\n\nThe LOGIC is identical — only the punctuation etiquette changes. Once you can read the symbols, switching languages is like switching accents, not learning to speak all over again.',
        tip: 'When you learn a new language, hunt for three things first: how statements end, how blocks are marked, and how comments are written. Those three answers unlock most of the syntax.',
      },
    ],
    tricks: [
      {
        name: '= gives, == asks',
        trick:
          'A single equals GIVES a value (x = 5: "x, take this 5"). A double equals ASKS a question (x == 5: "x, are you 5?"). Assignment gives, comparison asks — say it every time you type an equals sign.',
      },
      {
        name: 'Colon means "here comes a block"',
        trick:
          'In Python, the colon is a drumroll: it announces that an indented block is about to follow. if, for, while, def — they all end with : and the next line steps right.',
      },
      {
        name: 'Semicolon = full stop',
        trick:
          'Java, C++ and JavaScript sentences end with ; the way English sentences end with a period. Python sentences end with the line itself — no semicolon needed. Know which "punctuation dialect" you\u2019re writing in.',
      },
      {
        name: 'Brackets travel in pairs',
        trick:
          'Every ( [ { and opening quote is half of a couple — type the closing half IMMEDIATELY, then fill in the middle. You\u2019ll never hunt for a missing bracket again.',
      },
    ],
  },
  {
    id: 'cs-reading-errors',
    subject: 'cs',
    grade: 10,
    title: 'How to Read an Error Message',
    emoji: '🐞',
    summary:
      'Turn scary red text into a treasure map: name the error, find the line, and fix the bug with a calm five-step routine instead of random panic edits.',
    sections: [
      {
        heading: 'Errors are instructions, not insults',
        body:
          'When your program crashes, the computer isn\u2019t judging you — it\u2019s filing a report. Every error message contains exactly what you need:\n\n• WHAT went wrong: the error type (NameError, TypeError, ...).\n• WHERE it went wrong: the file and line number.\n• Often a detail: the exact name it didn\u2019t recognize, or the value it couldn\u2019t handle.\n\nProfessional programmers see errors all day, every day — the difference is they READ them instead of sighing and rewriting randomly. An error message is the fastest debugging tool you own, and it\u2019s free. The students who improve fastest are the ones who stop fearing red text and start mining it.',
        tip: 'Getting an error means the computer is TALKING to you. The truly hard bugs are the silent ones — code that runs fine and gives wrong answers. Be grateful for loud failures.',
      },
      {
        heading: 'The big seven error types',
        body:
          'Seven errors cause most beginner crashes. Learn their names and their classic causes:\n\n• SyntaxError — broke a grammar rule; the code can\u2019t even start. Classic cause: missing colon, unclosed bracket or quote.\n• IndentationError — Python-specific spacing problem. Classic cause: forgot to indent after a colon, or mixed tabs and spaces.\n• NameError — used a name Python has never seen. Classic cause: a typo (pritn), or using a variable before assigning it.\n• TypeError — wrong TYPE of thing. Classic cause: "3" + 5, mixing text and numbers.\n• ValueError — right type, unusable VALUE. Classic cause: int("hello") — a string is allowed, but that one can\u2019t become a number.\n• IndexError — asked for a position that doesn\u2019t exist. Classic cause: nums[3] on a 3-item list (positions are 0, 1, 2).\n• ZeroDivisionError — divided by zero. Classic cause: a total or count that ended up 0 before the division.',
        tip: 'The error NAME narrows the search instantly: NameError → check your spelling. TypeError → check what types you\u2019re mixing. IndexError → check your counting. Half the diagnosis is in the name.',
      },
      {
        heading: 'Anatomy of a traceback',
        body:
          'Python\u2019s crash report is called a traceback, and it reads best BOTTOM-UP:\n\n• The LAST line names the error type and describes it: NameError: name \u2019pritn\u2019 is not defined. Read this first — always.\n• Just above it: the file and line number where execution stopped, with the guilty line printed out.\n• Everything higher up is the trail of calls that led there — useful later, ignorable now.\n\nOne caution about line numbers: they mark where Python NOTICED the problem, not always where you made it. An unclosed bracket on line 3 often gets reported on line 4, because that\u2019s where Python finally got confused. If the reported line looks innocent, look one or two lines above it.',
        tip: 'A traceback is like a "you are here" map arrow, drawn from the bottom. Bottom line = what happened. Line number = where. Everything else = how the program got there.',
      },
      {
        heading: 'The five-step debugging loop',
        body:
          'When reading the message isn\u2019t enough, run this loop:\n\n• 1. REPRODUCE — run it again and make the bug happen on demand. A bug you can\u2019t trigger reliably can\u2019t be fixed reliably.\n• 2. READ — bottom line of the traceback: error type, line number, detail.\n• 3. ISOLATE — sprinkle print() statements to see what your variables ACTUALLY hold. print(x) before the crash line often reveals the surprise (x is "5" not 5, or the list is empty).\n• 4. CHANGE ONE THING — make a single fix based on evidence, not three hopeful edits at once.\n• 5. RERUN — did the error change? Disappear? Move? Each rerun is new evidence. Loop back to step 2.\n\nAnd when you\u2019re truly stuck: explain your code out loud, line by line, to a rubber duck (or a patient friend). Saying "so this line takes the input... wait, it never converts it to a number" finds the bug mid-sentence surprisingly often.',
        tip: 'Debugging is a science experiment, not a guessing game: form a hypothesis ("x must be a string here"), test it with a print(), and let the evidence pick your next move.',
      },
    ],
    tricks: [
      {
        name: 'Bottom line first',
        trick:
          'Tracebacks read bottom-up: the LAST line names the error and describes the problem. Start there, grab the line number just above it, and ignore the rest until you need it.',
      },
      {
        name: 'The error is BELOW the crime scene',
        trick:
          'The reported line is where Python NOTICED the problem — the actual mistake is often a line or two ABOVE it (an unclosed bracket, a missing colon). Innocent-looking line? Look up.',
      },
      {
        name: 'One change per run',
        trick:
          'Fix one thing, rerun, observe. Change three things at once and you\u2019ll never know which one worked — or which one quietly broke something new. One variable per experiment.',
      },
      {
        name: 'Rubber-duck it',
        trick:
          'Explain your code line by line, out loud, to a rubber duck. Forcing your brain to say what each line REALLY does (not what you meant it to do) exposes the gap where the bug lives.',
      },
    ],
  },
]
