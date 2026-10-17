// Single source of truth for identity, links and navigation.
// NOTE: never add a phone number here — `npm run check:pii` fails the build if one appears.

export const site = {
  name: 'Rohan Sogani',
  title: 'Rohan Sogani — Senior Software Engineer',
  description:
    'Rohan Sogani is a senior software engineer with around 10 years of experience at Oracle, Amazon and SAP, interested in distributed systems and generative AI.',
  headline: 'Senior Software Engineer',
  intro:
    'I’m a senior software engineer with an interest in distributed systems and generative AI. Over roughly 10 years I’ve built cloud and enterprise software at Oracle, Amazon and SAP, and studied distributed systems at UC Davis.',
  role: 'Senior Software Engineer',
  company: 'Oracle',
  location: 'Seattle, WA',
  motto: 'Life is a series of lessons, learn from it and enjoy!',
  email: 'rohan.sogani.dev@gmail.com',
  resume: '/docs/RohanSogani_Resume.pdf',
  avatar: '/images/profile.jpg',
  // Background palette: 'white' | 'paper' (warm off-white) | 'slate' (cool gray) | 'sage' (soft green) | 'navy' (dark)
  palette: 'sage',
};

// Umami analytics (https://umami.is). Cookieless, so no consent banner is needed.
// Leave websiteId empty to disable tracking. Only the domains listed are tracked (not localhost).
export const analytics = {
  umamiWebsiteId: 'cad0a242-eb7d-4f9d-a496-f0689dbe24b7',
  umamiSrc: 'https://cloud.umami.is/script.js',
  domains: 'rohansogani.github.io',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/RohanSogani', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rohansogani/', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
  { label: 'RSS', href: '/rss.xml', icon: 'rss' },
] as const;

// Add a page to the top nav by adding one line here.
export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Education', href: '/education/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Beyond Work', href: '/misc/' },
];
