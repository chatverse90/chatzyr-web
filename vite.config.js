import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactLoading from 'react-loading';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-loading'],
    },
  },
})
