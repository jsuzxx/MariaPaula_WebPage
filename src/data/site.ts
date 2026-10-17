// Datos globales del sitio — un solo lugar para todo lo que se repite.
// Si algo cambia (teléfono, correo, URL), se cambia aquí y se propaga a todo el sitio.

export const SITE = {
  name: 'Maria Paula Ramírez',
  fullName: 'Abogada Maria Paula Ramírez',
  profession: 'Abogada',
  tagline: 'Servicios jurídicos · Colombia',
  title: 'Abogada Maria Paula Ramírez — Servicios Jurídicos en Colombia',
  description:
    'Abogada Maria Paula Ramírez: asesorías jurídicas, acompañamiento legal, presentación de demandas y acciones de tutela en Colombia. Atención personalizada y cercana. Escríbame por WhatsApp.',
  url: 'https://mariapaularamirez.pages.dev',
  phoneDisplay: '+57 301 525 3871',
  phoneIntl: '573015253871',
  email: 'mariaramirez.juridico@gmail.com',
  locale: 'es_CO',
  country: 'Colombia',
  country_code: 'CO',
  year: new Date().getFullYear(),
} as const;

/** Construye un enlace de WhatsApp con mensaje predefinido. */
export function waLink(text: string): string {
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;
}

/** Enlaces de contacto por defecto. */
export const WA_DEFAULT = waLink(
  'Hola, me gustaría recibir asesoría jurídica.'
);
