import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'copy-404',
      writeBundle() {
        copyFileSync(
          resolve(__dirname, 'public/404.html'),
          resolve(__dirname, 'dist/404.html')
        );
      },
    },
  ],
  server: {
    port: 5173,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['tests/setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}'],
  },
});

