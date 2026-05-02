// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://sacredtreeservice.com',
  server: { port: 1234, host: true },
  integrations: [sitemap(), icon({ include: { lucide: ['*'] } })],
  // Prefetch on hover only — `prefetchAll: true` was firing requests for every
  // link in viewport (incl. dead ones), hammering the dev server and adding
  // perceived nav lag on real navigation.
  prefetch: { defaultStrategy: 'hover' },
});
