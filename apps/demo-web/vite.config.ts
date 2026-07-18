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
      '@nextouch-app/mochi-react': resolve(root, 'packages/react/src'),
      '@nextouch-app/mochi-mobile': resolve(root, 'packages/mobile/src'),
      '@nextouch-app/mochi-core': resolve(root, 'packages/core/src'),
      '@nextouch-app/mochi-icons': resolve(root, 'packages/icons/src/index.ts'),
      '@nextouch-app/mochi-tokens/tokens.css': resolve(root, 'packages/tokens/src/tokens.css'),
      '@nextouch-app/mochi-tokens': resolve(root, 'packages/tokens/src'),
    },
  },
})
