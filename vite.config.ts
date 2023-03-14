import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 3005,
    host: '0.0.0.0',
  },
  plugins: [
    Unocss(),
    react(),
  ],
})
