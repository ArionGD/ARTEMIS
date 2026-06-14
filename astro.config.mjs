// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcv4 from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcv4()],
  }
});
