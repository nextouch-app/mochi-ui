import { cpSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const from = join(root, 'packages', 'icons', 'src', 'svg')
const to = join(root, 'packages', 'icons', 'dist', 'svg')

if (!existsSync(from)) {
  console.error('[copy-icon-svgs] missing', from)
  process.exit(1)
}

mkdirSync(to, { recursive: true })
cpSync(from, to, { recursive: true })
console.log('[copy-icon-svgs] copied svg → dist/svg')
