import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ClaudiaGraduationGames/GraduationGames/', // Update with your correct path
});