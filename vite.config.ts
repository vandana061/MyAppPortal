import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MyAppPortal/',
  plugins: [react()],
  server: {
    port: 4173,
  },
});
