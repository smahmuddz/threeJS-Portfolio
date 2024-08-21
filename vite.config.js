import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    build: {
      outDir: 'dist', // Ensure this matches the directory expected by Vercel
      rollupOptions: {
        input: path.resolve(__dirname, 'index.html'),
      },},
  server: {
    port: 3000, // Specify a port if needed
    strictPort: true, // Ensure the server does not use another port if the specified one is taken
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Optional: Add alias for easier imports
    },
  },
});
