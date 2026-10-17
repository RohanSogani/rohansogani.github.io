# rohansogani.github.io

Personal website and blog of Rohan Sogani, built with [Astro](https://astro.build) and deployed to GitHub Pages
by GitHub Actions on every push to `master`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321, live reload
npm run build      # production build into dist/
npm run preview    # serve the production build
npm run check:pii  # fail if a phone number appears in src/, public/ or dist/
```

## Where things live

| What | File |
| --- | --- |
| Name, email, social links, nav tabs | `src/data/site.ts` |
| Work / research / teaching | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Skills, highlights, education, awards, photo gallery | `src/data/profile.ts` |
| Blog posts | `src/content/blog/*.md` |
| Colors & styles | `src/styles/global.css` (tokens at the top) |
| Resume PDF | `public/docs/RohanSogani_Resume.pdf` |
| Images | `public/images/` |

## Writing a blog post

Create `src/content/blog/my-post-slug.md`. It's published at `/blog/my-post-slug/`:

```md
---
title: 'My post title'
description: 'One-sentence summary used on cards, RSS and search results.'
date: 2026-10-20
tags: ['kubernetes', 'genai']
draft: true   # visible in `npm run dev`, hidden in production. Remove to publish.
---

Write Markdown here. Images go in public/images/blog/ and are referenced as /images/blog/foo.png
```

Tags pages (`/blog/tags/<tag>/`) and the RSS feed (`/rss.xml`) update automatically.

## Adding a new tab

Create `src/pages/<name>.astro` (copy `education.astro` as a starting point) and add one line to `nav` in `src/data/site.ts`.

## Analytics

[Umami](https://umami.is): cookieless, so there's no consent banner. Set `analytics.umamiWebsiteId` in
`src/data/site.ts` (empty disables it). Only `rohansogani.github.io` is tracked, so local dev never sends data, and
visitors with Do Not Track on are skipped. Custom events (see `src/components/Analytics.astro`):

| Event | When | Data |
| --- | --- | --- |
| `resume-download` | any link to the resume PDF | `from` page |
| `email-click` | mailto links | `from` page |
| `outbound-link` | links to other sites (LinkedIn, GitHub, projects…) | `url`, `from` page |

## Privacy

Never add a phone number. `npm run check:pii` runs in CI and blocks the deploy if one appears,
including inside the resume PDF.
