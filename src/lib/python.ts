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
