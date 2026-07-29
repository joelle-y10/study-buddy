/**
 * Runs student Python code in the browser via Pyodide (CPython compiled to
 * WebAssembly), loaded lazily from the CDN the first time the Code Lab runs
 * something. No server involved.
 */

const PYODIDE_VERSION = '0.26.4'
const CDN = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`

interface PyodideLike {
  runPython: (code: string, options?: { globals?: unknown }) => unknown
  toPy: (obj: unknown) => unknown
}

declare global {
  interface Window {
    loadPyodide?: (opts: { indexURL: string }) => Promise<PyodideLike>
  }
}

let pyodidePromise: Promise<PyodideLike> | null = null

export function loadPython(): Promise<PyodideLike> {
  if (!pyodidePromise) {
    pyodidePromise = new Promise<void>((resolve, reject) => {
      const s = document.createElement('script')
      s.src = `${CDN}pyodide.js`
      s.onload = () => resolve()
      s.onerror = () => reject(new Error('Could not download the Python runtime. Check your internet connection.'))
      document.head.appendChild(s)
    }).then(() => {
      if (!window.loadPyodide) throw new Error('Python runtime failed to initialize.')
      return window.loadPyodide({ indexURL: CDN })
    })
    pyodidePromise.catch(() => {
      // allow a retry on the next Run click instead of caching the failure
      pyodidePromise = null
    })
  }
  return pyodidePromise
}

export interface RunResult {
  output: string
  /** short Python error description, or null on clean run */
  error: string | null
}

/** Extract the useful tail of a Python traceback (error type + message). */
function shortError(raw: string): string {
  const lines = raw.split('\n').filter((l) => l.trim() !== '')
  const last = lines[lines.length - 1] ?? 'Error'
  const lineRef = lines.filter((l) => l.includes('line ')).pop()
  const m = lineRef?.match(/line (\d+)/)
  return m ? `${last} (around line ${m[1]})` : last
}

/**
 * Plain-English explanations of the errors beginners hit most,
 * with the usual cause and the usual fix.
 */
const ERROR_DECODER: [string, string][] = [
  ['IndentationError', 'Python cares about spacing. Lines inside an if, loop, or function must be indented (4 spaces), and lines that should line up must match exactly. Check the spaces at the start of the flagged line.'],
  ['SyntaxError', 'Python couldn\u2019t understand a line. The usual suspects: a missing colon : at the end of an if/elif/else/for/while/def line, an unclosed bracket ( [ { or quote, or using = where you meant == in a condition.'],
  ['NameError', 'You used a name Python has never seen. It\u2019s almost always a typo (Print vs print, nmae vs name) or using a variable before the line that creates it.'],
  ['TypeError', 'Two things that don\u2019t mix were combined — like "5" + 5 (text + number) or calling something that isn\u2019t a function. Convert types first: int("5"), str(5).'],
  ['ValueError', 'The type was right but the value made no sense — like int("hello"). Check what value actually reached that line.'],
  ['IndexError', 'You asked a list for a position it doesn\u2019t have. Remember indexing starts at 0, so a 3-item list has positions 0, 1, 2 — there is no position 3.'],
  ['KeyError', 'You asked a dictionary for a key that isn\u2019t in it. Check the spelling, or use .get(key) which returns None instead of crashing.'],
  ['AttributeError', 'That object doesn\u2019t have the method or property you called — like "abc".append(). Check the type you\u2019re working with and its methods.'],
  ['ZeroDivisionError', 'Somewhere you divided by zero. Check the value of the bottom of your division right before that line.'],
  ['RecursionError', 'A function kept calling itself and never stopped. Every recursive function needs a base case that returns WITHOUT calling itself — and each call must move toward it.'],
  ['UnboundLocalError', 'You used a variable inside a function before assigning it there. If you meant a variable from outside, pass it in as a parameter instead.'],
]

/** Friendly one-liner explaining a Python error message, or null if unknown. */
export function explainError(errorMsg: string): string | null {
  const hit = ERROR_DECODER.find(([name]) => errorMsg.includes(name))
  return hit ? hit[1] : null
}

/** Run code in a fresh namespace, capturing stdout/stderr. */
export async function runPython(code: string): Promise<RunResult> {
  const py = await loadPython()
  py.runPython('import sys, io\nsys.stdout = io.StringIO()\nsys.stderr = sys.stdout')
  let error: string | null = null
  try {
    py.runPython(code, { globals: py.toPy({}) })
  } catch (e) {
    error = shortError(e instanceof Error ? e.message : String(e))
  }
  const output = String(
    py.runPython('_v = sys.stdout.getvalue()\nsys.stdout = sys.__stdout__\nsys.stderr = sys.__stderr__\n_v'),
  )
  return { output, error }
}

/** Line-by-line comparison ignoring trailing whitespace and trailing blank lines. */
export function outputMatches(actual: string, expected: string): boolean {
  const norm = (s: string) =>
    s.split('\n').map((l) => l.replace(/\s+$/, '')).join('\n').replace(/\n+$/, '')
  return norm(actual) === norm(expected)
}
