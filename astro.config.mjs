// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sacredtreeservice.com',
  server: { port: 1234, host: true },
});
