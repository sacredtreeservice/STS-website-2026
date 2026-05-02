import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(120),
      excerpt: z.string().max(220),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      author: z.string().default('Sacred Tree Service'),
      authorRole: z.string().optional(),
      isaCertified: z.boolean().default(false),
      categories: z.array(z.string()).default([]),
      coverImage: image().optional(),
      coverAlt: z.string().optional(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
