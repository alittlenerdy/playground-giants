import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const DIR = path.join(process.cwd(), 'src/content/writing')

export type PostMeta = { slug: string; title: string; date: string; summary: string }

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(DIR)) return []
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '')
      const { data } = matter(fs.readFileSync(path.join(DIR, f), 'utf8'))
      return { slug, title: data.title, date: data.date, summary: data.summary } as PostMeta
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string) {
  const raw = fs.readFileSync(path.join(DIR, `${slug}.mdx`), 'utf8')
  const { data, content } = matter(raw)
  return { meta: { slug, title: data.title, date: data.date, summary: data.summary } as PostMeta, content }
}
