import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Any request starting with /api gets forwarded to the Express backend.
      // This means you write fetch('/api/days') in React — no localhost:3001 needed.
      '/api': {
        target:       'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})