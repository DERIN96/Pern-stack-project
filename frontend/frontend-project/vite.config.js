import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure Vite outputs the build to the dist directory
  },
  base: '/', // This ensures relative paths work properly
})
