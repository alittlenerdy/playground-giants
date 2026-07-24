import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/writing'

// playgroundgiants.com had no sitemap.xml at all until 2026-07-24. Blog posts
// under /writing were reachable only by crawling from the index, and the RSS
// feed (added in 57adf7f) was the only machine-readable route list.
//
// Post dates come from the MDX frontmatter via getAllPosts(), so new posts are
// picked up automatically — no list to keep in sync. Static routes ARE a manual
// list; add new top-level pages here when they ship.
//
// Keep BASE in sync with robots.ts and the metadataBase in layout.tsx.
const BASE = 'https://www.playgroundgiants.com'

// Ordered roughly by commercial importance — priority reflects that, not depth.
const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/packages', priority: 0.9 },
  { path: '/contact', priority: 0.9 },
  { path: '/case-studies/fenced-up', priority: 0.8 },
  { path: '/about', priority: 0.7 },
  { path: '/agency-partner', priority: 0.7 },
  { path: '/writing', priority: 0.7 },
  { path: '/medspa-guide', priority: 0.6 },
  { path: '/calculator-home-services', priority: 0.6 },
  { path: '/tools-brilliant-nerd', priority: 0.4 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `${BASE}/writing/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6
  }))

  return [
    ...STATIC_ROUTES.map((r) => ({
      url: `${BASE}${r.path}`,
      changeFrequency: 'monthly' as const,
      priority: r.priority
    })),
    ...posts
  ]
}
