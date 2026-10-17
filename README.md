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
- **Seguridad**: cabeceras HTTP (`_headers`: HSTS, X-Frame-Options, nosniff…) y **CSP estricta generada por Astro** con hashes de los scripts inline.
- **Legal (Colombia)**: aviso legal y política de privacidad conforme a la Ley 1581 de 2012.
- **Imágenes optimizadas**: la foto se convierte a WebP en el build (73 KB → 24 KB).
- **Tipografías auto-alojadas**: Playfair Display y Outfit se descargan en el build y se sirven desde el propio sitio (sin Google Fonts) + `preload`.
- **Rendimiento verificado**: Lighthouse 96 rendimiento · 100 accesibilidad · 100 buenas prácticas · 100 SEO.
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

- Cabeceras HTTP en `public/_headers` (HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy…).
- **CSP estricta** generada por Astro (`security.csp` en `astro.config.mjs`) con hashes de los scripts inline; `script-src 'self'` sin `'unsafe-inline'`.
- Fuentes auto-alojadas (sin peticiones a Google Fonts): más privacidad y menos dependencias externas.
- Sin cookies, sin trackers, sin formularios: attack surface mínimo.
- Dependencias auditadas (`npm audit` → 0 vulnerabilidades).
- HTTPS automático en Cloudflare.

## 🔍 Cómo aparecer en Google (paso a paso)

> El sitio ya está listo para indexarse (sitemap, `robots.txt`, datos estructurados y SEO
> técnico). Falta **registrarlo** en las herramientas de Google/Bing, que requieren tu cuenta.

### 1. Google Search Console (obligatorio)

1. Entra en <https://search.google.com/search-console> con tu cuenta de Google.
2. **Añadir propiedad** → elige **"Prefijo de la URL"** (NO "Dominio": `workers.dev` no permite
   verificación por DNS) → escribe exactamente:
   `https://www.mariapaularamirez-web.workers.dev/`
3. Método de verificación → **"Etiqueta HTML"**. Google te da algo como:
   `<meta name="google-site-verification" content="AbC123..." />`
4. Copia **solo el valor** de `content="..."` y pégalo en `src/data/site.ts`, en el campo
   `googleSiteVerification`.
5. Publica: `npm run deploy` (o pídeselo al asistente). La etiqueta ya se inserta sola en el
   `<head>` de todas las páginas.
6. Vuelve a Search Console y pulsa **"Verificar"**.
7. En **"Sitemaps"**, envía: `sitemap-index.xml`
   (URL completa: `https://www.mariapaularamirez-web.workers.dev/sitemap-index.xml`).
8. Pide indexación: usa **"Inspección de URL"** con la URL de inicio → **"Solicitar indexación"**.

### 2. Google Business Profile (clave para búsquedas locales)

Crea la ficha del despacho en <https://business.google.com> (categoría: "Abogada" /
"Servicios jurídicos"). Es lo que hace aparecer el negocio en Google Maps y en «abogada cerca de
mí». Verificación por teléfono o vídeo; puede tardar unos días.

### 3. Bing Webmaster Tools (incluye Copilot)

Entra en <https://www.bing.com/webmasters> → añade el sitio. Puedes importarlo directamente
desde Search Console o verificar con la etiqueta `msvalidate.01` (pégala en
`bingSiteVerification` de `src/data/site.ts` y vuelve a desplegar). Envía el mismo sitemap.

### 4. Contenido (la palanca más fuerte a medio plazo)

Publicar **1-2 artículos al mes** en el blog. Con responder dudas reales de clientes
(«¿cuánto tarda una tutela?», «¿qué necesito para divorciarme?») se gana posiciones.

### 5. ⚠️ Importante: `workers.dev` y el dominio propio

El subdominio `*.workers.dev` es gratuito y funciona, pero **no es ideal para SEO**: es un
dominio compartido y Google suele darle menos autoridad que a un dominio propio. Cuando puedas,
**compra un dominio** (p. ej. `mariapaularamirez.com`, ~10 €/año). Al hacerlo:

1. Cloudflare Dashboard → **Workers & Pages** → Worker `www` → **Settings → Domains & Routes** →
   **Add custom domain**.
2. Actualiza `site` en `astro.config.mjs`, `url` en `src/data/site.ts` y el Sitemap en
   `public/robots.txt`.
3. `npm run deploy`.
4. Repite la verificación en Search Console con el nuevo dominio (y añade una redirección 301 del
   `workers.dev` al dominio nuevo si quieres).

## ⚖️ Nota legal

Los textos de `aviso-legal` y `politica-de-privacidad` son una base sólida y correcta, pero
deben ser **revisados por un colega de la profesión** antes de publicarse, y completados con los
datos fiscales/domiciliarios que correspondan.
