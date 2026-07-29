// Verifies every Code Lab challenge by running its solution (+harness)
// through real Python and comparing stdout to expectedOutput.
// Usage: node scripts/verify-challenges.mjs  (after esbuild transpile, see below)
import { execFileSync } from 'node:child_process'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const files = ['cs10', 'cs20', 'cs30']

const norm = (s) => s.split('\n').map((l) => l.replace(/\s+$/, '')).join('\n').replace(/\n+$/, '')

let pass = 0
let fail = 0
for (const f of files) {
  const mod = require(`/tmp/chal/${f}.cjs`)
  const byUnit = mod[`${f}Challenges`]
  for (const [unit, challenges] of Object.entries(byUnit)) {
    for (const ch of challenges) {
      const code = ch.harness ? `${ch.solution}\n\n${ch.harness}` : ch.solution
      let out = ''
      let err = null
      try {
        out = execFileSync('python3', ['-c', code], { encoding: 'utf8', timeout: 10000 })
      } catch (e) {
        err = e.stderr?.toString().split('\n').filter(Boolean).pop() ?? String(e)
      }
      if (err) {
        fail++
        console.log(`FAIL(error) ${f}/${unit}/${ch.id}: ${err}`)
      } else if (norm(out) !== norm(ch.expectedOutput)) {
        fail++
        console.log(`FAIL(mismatch) ${f}/${unit}/${ch.id}\n  got:      ${JSON.stringify(out)}\n  expected: ${JSON.stringify(ch.expectedOutput)}`)
      } else {
        pass++
      }
    }
  }
}
console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail > 0 ? 1 : 0)
