import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de contenido del blog jurídico.
// Para publicar un artículo nuevo: crear un .md en src/content/blog/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    category: z.string(),
    minutesRead: z.number(),
  }),
});

export const collections = { blog };
