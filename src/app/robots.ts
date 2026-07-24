import type { MetadataRoute } from 'next'

// playgroundgiants.com was serving 404 for robots.txt, llms.txt AND sitemap.xml
// until 2026-07-24 — found by a live audit that compared it against the two
// client-facing properties. Both of those (enkily.ai, binderlawpc.com) had a
// better technical surface than the agency's own domain, which is the wrong way
// round for a shop that sells search and answer-engine visibility.
//
// Posture: allow everything, disallow only /api/ (no public content there).
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
        disallow: ['/api/']
      }
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE
  }
}
