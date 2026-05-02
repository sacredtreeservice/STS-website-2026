import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityClient } from 'sanity:client';

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);

export const sanityIsConfigured = () => {
  const cfg = sanityClient.config();
  return cfg.projectId && cfg.projectId !== 'placeholder';
};

/**
 * Safe fetch wrapper — returns fallback if Sanity isn't configured or query fails.
 */
export async function safeFetch<T>(query: string, params: Record<string, any> = {}, fallback: T): Promise<T> {
  if (!sanityIsConfigured()) return fallback;
  try {
    return (await sanityClient.fetch<T>(query, params)) ?? fallback;
  } catch (err) {
    console.warn('[sanity] fetch failed:', (err as Error).message);
    return fallback;
  }
}
