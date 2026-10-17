# 👩‍⚖️ Abogada Maria Paula Ramírez — Landing Page

Sitio web profesional de la **Abogada Maria Paula Ramírez** (servicios jurídicos en Colombia).
Construido con **Astro 7** para generar HTML estático: máximo rendimiento y SEO, cero
dependencias de servidor.

> 🌐 Producción: **https://www.mariapaularamirez-web.workers.dev** (Cloudflare Workers)

---

## ✨ Características

- **HTML estático puro en producción** — carga instantánea, ideal para posicionar en Google.
- **SEO completo**: metadatos canónicos, Open Graph (vista previa al compartir en WhatsApp),
  Twitter Cards, `sitemap.xml` automático, `robots.txt`, datos estructurados
  (`LegalService` + `BlogPosting`) y URLs limpias.
- **Blog jurídico en Markdown** — publicar un artículo es crear un archivo `.md`.
- **Seguridad**: cabeceras HTTP (`_headers`): CSP, HSTS, X-Frame-Options, nosniff, etc.
- **Legal (Colombia)**: aviso legal y política de privacidad conforme a la Ley 1581 de 2012.
- **Imágenes optimizadas**: la foto se convierte a WebP en el build (73 KB → 24 KB).
- **Accesibilidad**: `lang="es"`, skip-link, landmarks ARIA, `prefers-reduced-motion`.
- **Responsive** con menú móvil y cursor personalizado (solo en dispositivos con ratón).

## 🛠️ Tecnologías

| Componente | Tecnología |
|---|---|
| Framework | [Astro 7](https://astro.build) (estático, zero JS por defecto) |
| Contenido | Content Collections (Markdown + Zod) |
| SEO | `@astrojs/sitemap` + JSON-LD manual |
| Imágenes | `astro:assets` + `sharp` (WebP automático) |
| Hosting | Cloudflare Workers (Pages + Workers unificados; `_headers` soportado) |

## 📁 Estructura

```
├── public/                  # Archivos estáticos tal cual se sirven
│   ├── _headers             # 🔒 Cabeceras de seguridad (Cloudflare)
│   ├── robots.txt           # Permisos de indexación + sitemap
│   ├── favicon.svg          # Favicon monograma MP
│   ├── site.webmanifest     # Datos PWA
│   └── img/                 # OG image e iconos PNG
├── scripts/
│   └── generate-assets.mjs  # Regenera OG image e iconos (node scripts/generate-assets.mjs)
├── src/
│   ├── assets/              # Foto original (el build la optimiza a WebP)
│   ├── components/          # Nav, Hero, About, Services, WhyMe, BlogPreview,
│   │                        # Contact, SiteFooter, WhatsAppFloat, CustomCursor
│   ├── content/blog/        # 📝 Artículos del blog (un archivo .md = un artículo)
│   ├── data/site.ts         # 📞 Teléfono, correo, URL... todo en un solo lugar
│   ├── layouts/BaseLayout.astro  # Head SEO + JSON-LD + tipografías
│   ├── pages/               # index, blog/, aviso-legal, politica-de-privacidad, 404
│   └── styles/global.css    # Tokens de diseño + estilos compartidos
├── astro.config.mjs         # Configuración (site URL, sitemap)
└── package.json
```

## 🚀 Comandos

```bash
npm install          # instalar dependencias
npm run dev          # servidor de desarrollo (localhost:4321)
npm run build         # generar sitio estático en dist/
npm run preview       # previsualizar localmente con wrangler dev
npm run deploy        # build + publicar en Cloudflare (wrangler deploy)
node scripts/generate-assets.mjs   # regenerar OG image e iconos
```

## ✍️ Cómo publicar un artículo en el blog

1. Crear un archivo nuevo en `src/content/blog/mi-articulo.md`.
2. Escribir el encabezado (frontmatter) y el contenido en Markdown:

```markdown
---
title: "Título del artículo (buscable, con palabras clave)"
description: "Resumen de máximo 160 caracteres (aparece en Google)."
pubDate: 2026-10-20
category: "Familia"        # Familia | Contratos | Laboral | Sucesiones | Derechos fundamentales
minutesRead: 4
---

Contenido del artículo en Markdown...

*Nota: el pie con disclaimer se agrega automáticamente al final.*
```

3. Publicar: `npm run deploy` (o pedir el despliegue al asistente).

## 🚀 Despliegue (Cloudflare Workers)

Cloudflare unificó Pages dentro de **Workers** (2026), así que el sitio se despliega con
Wrangler desde tu máquina:

```bash
npx wrangler login    # solo la primera vez (abre el navegador)
npm run deploy        # build + publica en Cloudflare
```

- Worker: `www`
- URL pública: **https://www.mariapaularamirez-web.workers.dev**
- El archivo `wrangler.jsonc` define el proyecto y la carpeta de assets (`./dist`).
- Las cabeceras de `public/_headers` se aplican al desplegar (verificado en producción).

### Cambiar a dominio propio (cuando lo haya)

1. Comprar el dominio (Cloudflare Registrar, Namecheap, etc.).
2. Cloudflare Dashboard → **Workers & Pages** → el Worker → **Settings** → **Domains & Routes** →
   **Add custom domain**.
3. Actualizar el `site:` en `astro.config.mjs`, la URL del sitemap en `public/robots.txt` y volver a
   `npm run deploy`. HTTPS se genera solo.

## 🔒 Seguridad

- Cabeceras HTTP en `public/_headers` (CSP estricta, HSTS, X-Frame-Options DENY, nosniff…).
- Sin cookies, sin trackers, sin formularios: attack surface mínimo.
- Dependencias auditadas (`npm audit` → 0 vulnerabilidades).
- HTTPS automático en Cloudflare.

## 🔍 Próximos pasos para posicionar en Google

1. **Google Search Console**: verificar `www.mariapaularamirez-web.workers.dev` y
   enviar el sitemap
   `https://www.mariapaularamirez-web.workers.dev/sitemap-index.xml`.
2. **Google Business Profile**: crear la ficha del despacho (crítico para búsquedas locales
   como «abogada cerca de mí»).
3. **Bing Webmaster Tools** (incluye Copilot): enviar el sitemap.
4. Publicar **1-2 artículos nuevos al mes** en el blog (el contenido fresco es la mejor palanca SEO).
5. Si más adelante se compra dominio propio: repetir verificación en Search Console con el
   nuevo dominio.

## ⚖️ Nota legal

Los textos de `aviso-legal` y `politica-de-privacidad` son una base sólida y correcta, pero
deben ser **revisados por un colega de la profesión** antes de publicarse, y completados con los
datos fiscales/domiciliarios que correspondan.
