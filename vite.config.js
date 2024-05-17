import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PortfolioWebsite/', // This should match the repository name
  plugins: [react()],
});
