/**
 * Dev-only: renders every registered diagram to a standalone .svg file in
 * /tmp/sb-diagrams so they can be eyeballed for label overlap and accuracy.
 */
import { renderToStaticMarkup } from 'react-dom/server'
import { writeFileSync, mkdirSync } from 'node:fs'
import { DIAGRAMS } from '../src/data/diagrams'

const OUT = '/tmp/sb-diagrams'
mkdirSync(OUT, { recursive: true })

for (const [id, entry] of Object.entries(DIAGRAMS)) {
  let svg = renderToStaticMarkup(entry.node as React.ReactElement)
  svg = svg.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" style="background:#ffffff" ')
  writeFileSync(`${OUT}/${id}.svg`, svg)
  console.log(`wrote ${id}.svg`)
}
