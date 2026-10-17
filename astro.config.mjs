// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // URL canónica del sitio en producción (usada por sitemap, canonical y OG)
  site: 'https://www.mariapaularamirez-web.workers.dev',
  integrations: [sitemap()],
  compressHTML: true,

  // Tipografías auto-alojadas (se descargan en el build y se sirven desde el
  // propio sitio): elimina peticiones externas a Google Fonts → más rápido y
  // más privado. Se usan en el diseño vía var(--fd) y var(--fb).
  fonts: [
    {
      name: 'Playfair Display',
      cssVariable: '--fd',
      provider: fontProviders.google(),
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Playfair Display',
      cssVariable: '--fd',
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ['italic'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Outfit',
      cssVariable: '--fb',
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  // CSP nativa de Astro: genera hashes para los scripts/CSS inline y emite la
  // política como <meta http-equiv> en cada página (por eso ya no se define en
  // public/_headers). Mantiene script-src estricto (sin 'unsafe-inline').
  security: {
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "form-action 'self'",
        "manifest-src 'self'",
        "upgrade-insecure-requests",
      ],
      scriptDirective: {
        resources: ["'self'"],
      },
      styleDirective: {
        // 'unsafe-inline' es necesario para los atributos style="" puntuales
        // del diseño; el riesgo de inyección CSS es bajo y no hay datos de usuario.
        resources: ["'self'", "'unsafe-inline'"],
      },
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },

  adapter: cloudflare(),
});
