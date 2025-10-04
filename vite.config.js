
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Si vas a GitHub Pages en https://USUARIO.github.io/REPO,
// cambia base a '/REPO/'
export default defineConfig({ plugins: [react()] })
