import { getCollection } from 'astro:content';

// Published posts, newest first. Drafts show in `npm run dev` but never in production builds.
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export const readingTime = (body = '') => `${Math.max(1, Math.round(body.split(/\s+/).length / 220))} min read`;

export const tagSlug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-');
