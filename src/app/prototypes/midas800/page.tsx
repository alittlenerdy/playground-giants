import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MIDAS, SIGNAL, Card } from '../data'

// His page, and only his. The /prototypes index carries every engagement, so a
// link sent to a client goes here instead: same cards, no other client's work.
export const metadata: Metadata = {
  title: 'Midas800 · Directions | Playground Giants',
  description: 'Twelve takes on the direction you picked, plus the six we started from.',
  robots: { index: false, follow: false }
}

export default function Midas800PrototypesPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.22em] text-ink-3">MIDAS800</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Signal, twelve ways.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-2">
          You picked Signal. These are twelve takes on it, all clickable and all real pages. Pick
          one, or mix them: the layout from one and the color from another is a normal answer.
          Nothing here is live, and nothing is final.
        </p>

        <section className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
            <h2 className="font-display text-2xl font-semibold text-ink">Signal, explored</h2>
            <p className="font-mono text-xs tracking-wide text-ink-3">
              12 variations of the direction you chose · September 2026
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SIGNAL.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
            <h2 className="font-display text-2xl font-semibold text-ink">Where it started</h2>
            <p className="font-mono text-xs tracking-wide text-ink-3">
              The original six directions · August 2026
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MIDAS.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
