/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    // setupFiles: './testsetup.ts',
    browser: {
      provider: 'playwright', // or 'webdriverio'
      enabled: true,
      name: 'chromium' // browser name is required
    },
    coverage: {
      provider: 'istanbul', // or 'v8'
      reporter: ['text', 'text-summary'], // Avoid unnecessary outputs
      include: ['**/**/*.tsx']
    }
  },
  resolve: {
    alias: [
      { find: '@src', replacement: path.resolve(__dirname, './src') },
      {
        find: '@gql',
        replacement: path.resolve(__dirname, './src/__generated__')
      }
    ]
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
})
