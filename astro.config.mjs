// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://sacredtreeservice.com',
  server: { port: 1234, host: true },
  integrations: [sitemap(), icon({ include: { lucide: ['*'] } })],
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
