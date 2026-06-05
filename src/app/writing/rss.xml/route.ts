import { getAllPosts } from '@/lib/writing'

export const dynamic = 'force-static'

const SITE = 'https://www.playgroundgiants.com'

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function GET() {
  const posts = getAllPosts()
  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/writing/${p.slug}</link>
      <guid>${SITE}/writing/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${esc(p.summary)}</description>
    </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Playground Giants — Writing</title>
    <link>${SITE}/writing</link>
    <description>Building in public — what we ship, what breaks, what we learn.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
