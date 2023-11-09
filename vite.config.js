import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
const __dirname = ''
// https://vitejs.dev/config/
export default defineConfig({
  // to support absolute paths
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
})
