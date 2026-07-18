/**
 * Smoke-check that published entrypoints export expected symbols.
 * Run after `pnpm build`.
 */
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const REQUIRED = [
  'Button',
  'Input',
  'Form',
  'Modal',
  'Table',
  'ConfigProvider',
  'Typography',
  'Layout',
  'QRCode',
  'Tour',
  'Spin',
  'Phone',
  'Wallet',
  'Time',
  'Cursor',
  'Image',
  'Progress',
  'Drawer',
]

async function checkPkg(name, relativeDir) {
  const entry = join(root, relativeDir, 'dist', 'index.js')
  const css = join(root, relativeDir, 'dist', 'index.css')
  if (!existsSync(entry)) {
    throw new Error(`[check-exports] missing ${entry} — run pnpm build first`)
  }
  if (!existsSync(css)) {
    throw new Error(`[check-exports] missing ${css}`)
  }
  const mod = await import(pathToFileURL(entry).href)
  const missing = REQUIRED.filter((key) => typeof mod[key] === 'undefined')
  if (missing.length) {
    throw new Error(`[check-exports] ${name} missing exports: ${missing.join(', ')}`)
  }
  console.log(`[check-exports] OK — ${name} (${REQUIRED.length} symbols)`)
}

await checkPkg('@mochi-ui/react', 'packages/react')
await checkPkg('@mochi-ui/mobile', 'packages/mobile')

const tokensCss = join(root, 'packages/tokens/src/tokens.css')
if (!existsSync(tokensCss)) {
  throw new Error('[check-exports] missing tokens.css')
}
console.log('[check-exports] OK — @mochi-ui/tokens/tokens.css')
