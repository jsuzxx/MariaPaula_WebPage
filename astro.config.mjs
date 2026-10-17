// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // URL canónica del sitio en producción (usada por sitemap, canonical y OG)
  site: 'https://www.mariapaularamirez-web.workers.dev',
  integrations: [sitemap()],
  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  adapter: cloudflare(),
});
