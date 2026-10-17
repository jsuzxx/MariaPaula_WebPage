// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // URL canónica del sitio en producción (usada por sitemap, canonical y OG)
  site: 'https://mariapaularamirez.pages.dev',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
