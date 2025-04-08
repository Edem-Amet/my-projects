import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Exposes it to the network
    port: 5173, // Use your desired port
  },

  base: import.meta.env.VITE_BASE_PATH || "/my-projects",
});
