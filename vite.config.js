import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base:"/insuranceProject/",
  // base: process.env.NODE_ENV === 'production' ? '/insuranceProject/' : '/',
  plugins: [react()],
})

  
  
