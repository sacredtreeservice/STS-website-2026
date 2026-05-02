// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sacredtreeservice.com',
  server: { port: 1234, host: true },
  integrations: [sitemap()],
});
