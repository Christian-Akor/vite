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
      // Note: This is an experimental feature that helps StyleX resolve imports correctly
      // in a CommonJS module context. Monitor StyleX documentation for when this becomes stable.
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: process.cwd(),
      },
    }),
  ],
})
