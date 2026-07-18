#!/usr/bin/env node
/**
 * Scan @nextouch-app/mochi-mobile CSS build output for forbidden selectors.
 * Forbidden: sibling combinator ~, :hover, :checked~ and similar.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const mobileDist = join(root, 'packages', 'mobile', 'dist')

const FORBIDDEN = [
  { name: 'sibling combinator ~', re: /(?<!:)(?<!\\)~(?!=)/ },
  { name: ':hover', re: /:hover\b/ },
  { name: ':checked~', re: /:checked\s*~/ },
  { name: ':focus-within~', re: /:focus-within\s*~/ },
]

function collectCss(dir, files = []) {
  if (!existsSync(dir)) return files
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) collectCss(p, files)
    else if (name.endsWith('.css')) files.push(p)
  }
  return files
}

const cssFiles = collectCss(mobileDist)

if (cssFiles.length === 0) {
  console.warn('[check-mobile-styles] No CSS in packages/mobile/dist — build mobile first or empty OK for scaffold.')
  process.exit(0)
}

let failed = false
for (const file of cssFiles) {
  // Strip comments so documentation text cannot false-positive
  const content = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '')
  for (const rule of FORBIDDEN) {
    if (rule.re.test(content)) {
      failed = true
      console.error(`[FAIL] ${relative(root, file)} contains forbidden selector: ${rule.name}`)
    }
  }
}

if (failed) {
  console.error('\nMobile styles must use class-driven states (.is-pressed, .is-checked), not :hover / ~.')
  process.exit(1)
}

console.log(`[check-mobile-styles] OK — scanned ${cssFiles.length} CSS file(s).`)
