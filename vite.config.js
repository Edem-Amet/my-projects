/// <reference types="node" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const basePath = process.env.VITE_BASE_PATH || '/my-projects';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  base: basePath,
});
