import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Make sure the build outputs to the dist directory
    assetsDir: 'assets', // Static files like images, CSS, etc.
  },
})