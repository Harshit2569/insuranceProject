import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/insuranceProject",
  build: {
    outDir: 'dist',
    sourcemap: false, // Set to true if you want source maps in production
    minify: 'esbuild', // Or 'terser' for more control
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
})

  
  
