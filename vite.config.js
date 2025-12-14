import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SCT_WD_1/',
  server: {
    port: 3000,
    open: true
  }
})
