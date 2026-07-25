import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/writing'

export const metadata = {
  title: 'Writing — Playground Giants',
  description: 'Building in public — what we ship, what breaks, what we learn.',
  // `canonical` is repeated here on purpose. Next.js REPLACES the whole
  // `alternates` object during metadata merging rather than deep-merging it, so
  // declaring `types` for the RSS feed silently dropped the `canonical: './'`
  // inherited from the root layout — and /writing was the only page on the site
  // without one. Any future page that sets `alternates` for any reason has to
  // restate canonical too.
  alternates: {
    canonical: '/writing',
    types: { 'application/rss+xml': '/writing/rss.xml' }
  }
}

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jimmy Hackett',
  url: 'https://www.playgroundgiants.com',
  jobTitle: 'Founder',
  worksFor: { '@type': 'Organization', name: 'Playground Giants', url: 'https://www.playgroundgiants.com' },
  sameAs: ['https://x.com/j1mmyhackett']
}

export default function WritingIndex() {
  const posts = getAllPosts()
  return (
    <div className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-4xl font-bold text-ink mb-2">writing</h1>
        <p className="text-ink-3 mb-12">building in public — what we ship, what breaks, what we learn.</p>
        <div className="space-y-10">
          {posts.map((p) => (
            <Link key={p.slug} href={`/writing/${p.slug}`} className="block group">
              <time className="text-sm text-neon-blue">
                {new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <h2 className="text-2xl font-semibold text-ink group-hover:text-neon-purple transition">{p.title}</h2>
              <p className="text-ink-3 mt-1">{p.summary}</p>
            </Link>
          ))}
          {posts.length === 0 && <p className="text-ink-3">first post coming soon.</p>}
        </div>
      </main>
      <Footer />
    </div>
  )
}
