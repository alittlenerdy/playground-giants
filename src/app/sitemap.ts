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
//
// Reordered 2026-07-24 for the repositioning. /workflow-audit is the entry
// offer and the legal case study is the flagship proof, so both rank high.
// 2026-07-26: /medspa-guide and /calculator-home-services are GONE. Both sold
// the home-services and medspa offer this site stopped selling on 2026-07-24,
// so 2 of 14 pages contradicted the positioning. Both now 308 in next.config.ts:
// the calculator to its rebuilt successor at /calculator, the medspa guide to
// /workflow-audit since it has no equivalent. /tools-brilliant-nerd is GONE too: Brilliantnerd has been
// dormant since 2026-04-30, and a live page for a shelved brand is exactly the
// kind of stale surface that should not be advertised to crawlers.
const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/workflow-audit', priority: 0.95 },
  { path: '/packages', priority: 0.9 },
  { path: '/case-studies/personal-injury-intake', priority: 0.9 },
  { path: '/case-studies/medical-practice-audit', priority: 0.9 },
  { path: '/contact', priority: 0.9 },
  { path: '/about', priority: 0.7 },
  { path: '/writing', priority: 0.7 },
  { path: '/agency-partner', priority: 0.6 },
  { path: '/case-studies/fenced-up', priority: 0.5 },
  { path: '/calculator', priority: 0.6 }
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
