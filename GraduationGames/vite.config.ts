import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/GraduationGames/', // Adjust for exact GitHub Pages path context if needed
});