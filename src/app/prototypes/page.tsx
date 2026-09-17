import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MIDAS, SIGNAL, LOVEPARK, Card } from './data'

export const metadata: Metadata = {
  title: 'Prototypes | Playground Giants',
  description:
    'Design directions built for client engagements. Clickable, unbuilt, and made to be reacted to.',
  robots: { index: false, follow: false }
}


export default function PrototypesPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.22em] text-ink-3">PROTOTYPES</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Directions, built to be argued with.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-2">
          Every engagement starts the same way: several real, clickable directions instead of one
          deck. The client picks, and the build starts from something they have already seen
          working. Nothing here is a live site.
        </p>

        <section className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
            <h2 className="font-display text-2xl font-semibold text-ink">Midas800 · Signal, explored</h2>
            <p className="font-mono text-xs tracking-wide text-ink-3">
              12 variations of the chosen direction · September 2026
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
            <h2 className="font-display text-2xl font-semibold text-ink">Midas800</h2>
            <p className="font-mono text-xs tracking-wide text-ink-3">
              Producer · catalog, storefront, audience · August 2026
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MIDAS.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
            <h2 className="font-display text-2xl font-semibold text-ink">Love Park</h2>
            <p className="font-mono text-xs tracking-wide text-ink-3">
              Label, film and merch umbrella · July 2026
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOVEPARK.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
