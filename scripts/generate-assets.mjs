// Genera los assets gráficos del sitio a partir de SVG:
//   public/img/og-default.jpg         → imagen para compartir (Open Graph / WhatsApp) 1200x630
//   public/img/apple-touch-icon.png   → icono Apple 180x180
//   public/img/icon-192.png           → icono PWA 192x192
//   public/img/icon-512.png           → icono PWA 512x512
// Ejecutar: node scripts/generate-assets.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const OUT = new URL('../public/img/', import.meta.url);
const out = (name) => fileURLToPath(new URL(name, OUT));
await mkdir(OUT, { recursive: true });

const NAVY = '#08172E';
const GOLD = '#C9A96E';
const WHITE = '#FFFFFF';

// ── Icono cuadrado con monograma MP ──────────────────────────────
function iconSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${NAVY}"/>
  <rect x="4" y="4" width="56" height="56" rx="11" fill="none" stroke="${GOLD}" stroke-opacity=".45" stroke-width="1.5"/>
  <text x="32" y="41" font-family="Georgia, 'Times New Roman', serif" font-size="26" font-weight="700" fill="${GOLD}" text-anchor="middle" letter-spacing="1">MP</text>
  <rect x="22" y="46" width="20" height="1.5" fill="${GOLD}" opacity=".6"/>
</svg>`;
}

// ── Imagen Open Graph (tarjeta de compartir) ─────────────────────
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="85%" cy="15%" r="70%">
      <stop offset="0%" stop-color="#3D6FD4" stop-opacity=".28"/>
      <stop offset="100%" stop-color="#3D6FD4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="10%" cy="95%" r="60%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity=".14"/>
      <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#FFFFFF" fill-opacity=".05"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="${NAVY}"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <text x="985" y="430" font-family="Georgia, 'Times New Roman', serif" font-size="330" font-weight="700" fill="${GOLD}" fill-opacity=".08" text-anchor="middle">MP</text>
  <rect x="90" y="168" width="64" height="2" fill="${GOLD}"/>
  <text x="90" y="146" font-family="Georgia, serif" font-size="26" font-weight="600" fill="${GOLD}" letter-spacing="10">ABOGADA</text>
  <text x="90" y="270" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="700" fill="${WHITE}">María Paula</text>
  <text x="90" y="352" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-style="italic" fill="${WHITE}">Ramírez</text>
  <text x="90" y="420" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#9AA3BC" letter-spacing="2">Servicios jurídicos en Colombia</text>
  <rect x="90" y="470" width="330" height="60" rx="30" fill="${GOLD}"/>
  <text x="255" y="508" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" fill="${NAVY}" text-anchor="middle">+57 301 525 3871</text>
</svg>`;

await sharp(Buffer.from(iconSvg(512))).png().toFile(out('icon-512.png'));
await sharp(Buffer.from(iconSvg(192))).png().toFile(out('icon-192.png'));
await sharp(Buffer.from(iconSvg(180))).png().toFile(out('apple-touch-icon.png'));
await sharp(Buffer.from(ogSvg)).jpeg({ quality: 86, mozjpeg: true }).toFile(out('og-default.jpg'));

console.log('✓ Assets generados en public/img/: icon-192.png, icon-512.png, apple-touch-icon.png, og-default.jpg');
