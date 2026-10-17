import rss from '@astrojs/rss';
import { site } from '../data/site';
import { getPosts } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: `${site.name} — Blog`,
    description: site.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags,
      link: `/blog/${post.id}/`,
    })),
  });
}
