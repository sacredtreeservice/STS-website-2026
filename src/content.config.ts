import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
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
      // Optional social-share image: absolute path to a 1200x630 JPG in /public
      // (e.g. "/og/foo.jpg"). Used for og:image / twitter:image only — it does
      // NOT render on-page or as a homepage thumbnail (that's coverImage).
      ogImage: z.string().optional(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
