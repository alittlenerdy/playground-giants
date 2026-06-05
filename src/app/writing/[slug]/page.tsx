import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllPosts, getPost } from '@/lib/writing'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const { meta } = getPost(slug)
    return { title: `${meta.title} — Playground Giants`, description: meta.summary }
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
  return (
    <div className="min-h-screen bg-space-deep">
      <Header />
      <article className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <time className="text-sm text-neon-blue">
          {new Date(post.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-8">{post.meta.title}</h1>
        <div className="text-white/75 leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-5 [&_a]:text-neon-blue [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_li]:mb-2 [&_strong]:text-white [&_code]:text-neon-green [&_code]:font-mono">
          {content}
        </div>
      </article>
      <Footer />
    </div>
  )
}
