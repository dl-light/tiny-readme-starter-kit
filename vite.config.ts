
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: './',
    plugins: [react(), viteTsconfigPaths()],
    server: {
      port: 8080,
    },
    preview: {
      port: 8080,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/testing/setup-tests.ts',
      exclude: ['**/node_modules/**', '**/e2e/**'],
      coverage: {
        include: ['src/**'],
      },
    },
    optimizeDeps: { 
      exclude: ['fsevents'],
      include: ['js-cookie']
    },
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
      minify: mode !== 'development',
      rollupOptions: {
        external: [
          'fs/promises', 
          'react-query-auth', 
          'axios', 
          'zustand', 
          'dayjs', 
          'dompurify', 
          'marked', 
          'js-cookie',
          '@mswjs/data'
        ],
        output: {
          experimentalMinChunkSize: 3500,
        },
      },
    },
  };
});
