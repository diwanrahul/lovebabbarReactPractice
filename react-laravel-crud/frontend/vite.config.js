import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/users': {
        target: 'http://localhost:8000',  // Backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/users/, '/users')
      },
    },
  },
})
