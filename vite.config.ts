import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  // O GitHub Pages publica o projeto dentro de /Portfolio/; no desenvolvimento local, mantemos a raiz /.
  base: mode === 'production' ? '/Portfolio/' : '/',
  plugins: [react()],
}));
