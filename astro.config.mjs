// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://sacredtreeservice.com',
  server: { port: 1234, host: true },
  integrations: [
    sitemap(),
    sanity({
      projectId,
      dataset,
      useCdn: false,
      studioBasePath: '/studio',
      studioRouterHistory: 'hash',
      logClientRequests: 'dev',
    }),
    react(),
  ],
});
