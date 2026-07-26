import { notFound } from 'next/navigation'
import { pageTitle } from '@/lib/seo-title'
import { compileMDX } from 'next-mdx-remote/rsc'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllPosts, getPost } from '@/lib/writing'

const SITE = 'https://www.playgroundgiants.com'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const { meta } = getPost(slug)
    return { title: pageTitle(meta.title), description: meta.summary }
  } catch {
    return {}
  }
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post
  try {
    post = getPost(slug)
  } catch {
    notFound()
  }
  const { content } = await compileMDX({ source: post.content })
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.meta.title,
    description: post.meta.summary,
    datePublished: post.meta.date,
    url: `${SITE}/writing/${post.meta.slug}`,
    mainEntityOfPage: `${SITE}/writing/${post.meta.slug}`,
    author: { '@type': 'Person', name: 'Jimmy Hackett', url: SITE },
    publisher: { '@type': 'Organization', name: 'Playground Giants', url: SITE }
  }
  return (
    <div className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Header />
      <article className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <time className="text-sm text-neon-blue">
          {new Date(post.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
        <h1 className="text-3xl md:text-4xl font-bold text-ink mt-2 mb-8">{post.meta.title}</h1>
        <div className="text-ink-2 leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-5 [&_a]:text-neon-blue [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_li]:mb-2 [&_strong]:text-ink [&_code]:text-neon-green [&_code]:font-mono">
          {content}
        </div>
      </article>
      <Footer />
    </div>
  )
}
