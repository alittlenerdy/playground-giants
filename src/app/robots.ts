import type { MetadataRoute } from 'next'

// playgroundgiants.com was serving 404 for robots.txt, llms.txt AND sitemap.xml
// until 2026-07-24 — found by a live audit that compared it against the two
// client-facing properties. Both of those (enkily.ai, binderlawpc.com) had a
// better technical surface than the agency's own domain, which is the wrong way
// round for a shop that sells search and answer-engine visibility.
//
// Posture: allow everything, disallow /api/ and /prototypes/.
//
// /prototypes/ added 2026-08-19. It hosts CLIENT design directions (Love Park,
// Midas800) as a shareable portfolio. They are real client work, not marketing
// pages, so they are crawlable-by-link-only: robots disallows the path AND every
// page carries meta noindex. Belt and braces on purpose — robots stops the
// crawl, the meta tag stops indexing if the URL is reached another way.
//
// Keep BASE in sync with sitemap.ts and the metadataBase in layout.tsx — note
// all three use the www host, which is the canonical one.
const BASE = 'https://www.playgroundgiants.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/prototypes/']
      }
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE
  }
}
