import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',        
    cssCodeSplit: true,      
    chunkSizeWarningLimit: 600,
    minify: 'esbuild',      
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer':       ['framer-motion'],
          'mui-core': [
            '@mui/material',
            '@emotion/react',
            '@emotion/styled'
          ],
          'mui-icons': ['@mui/icons-material'],
        }
      }
    }
  }
})