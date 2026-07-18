import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

const root = resolve(__dirname, '../..')

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  resolve: {
    // Dev: point at source so Button CSS changes are visible immediately
    alias: {
      '@mochi-ui/react': resolve(root, 'packages/react/src'),
      '@mochi-ui/mobile': resolve(root, 'packages/mobile/src'),
      '@mochi-ui/core': resolve(root, 'packages/core/src'),
      '@mochi-ui/icons': resolve(root, 'packages/icons/src/index.ts'),
      '@mochi-ui/tokens/tokens.css': resolve(root, 'packages/tokens/src/tokens.css'),
      '@mochi-ui/tokens': resolve(root, 'packages/tokens/src'),
    },
  },
})
