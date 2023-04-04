import { svgsprites } from './vite_plugins/svgsprites';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig(({command})=> ({
  define: {
    isDev: command === 'serve'
  },
  server: {
    open: true,
    port: 3005,
    host: '0.0.0.0',
  },
  plugins: [
    Unocss(),
    react(),
    viteMockServe(),
    svgsprites({ noOptimizeList: ['logo', 'chart', 'category', 'export', 'noty'] })
  ],
}))
