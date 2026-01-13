import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleX from '@stylexjs/rollup-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleX({
      // Set dev mode based on NODE_ENV
      dev: process.env.NODE_ENV === 'development',
      // Configure unstable_moduleResolution
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: process.cwd(),
      },
    }),
  ],
})
