import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Prototypes — Playground Giants',
  description:
    'Design directions built for client engagements. Clickable, unbuilt, and made to be reacted to.',
  robots: { index: false, follow: false }
}

type Proto = {
  slug: string
  n: string
  name: string
  note: string
  swatch: string[]
}

const MIDAS: Proto[] = [
  {
    slug: 'midas-01-the-vault',
    n: '01',
    name: 'The Vault',
    note: 'Credits first. The catalog is the product, and the page shows its own registration gaps.',
    swatch: ['#0B0D11', '#C79A3C', '#E9E4D7']
  },
  {
    slug: 'midas-02-beat-engine',
    n: '02',
    name: 'Beat Engine',
    note: 'A working storefront. Kits and loops lead, licence tiers underneath, player docked.',
    swatch: ['#161719', '#3BC9DB', '#EDEDF0']
  },
  {
    slug: 'midas-03-signal',
    n: '03',
    name: 'Signal',
    note: 'The listener map, built. Opt-in capture, global view, direct messaging.',
    swatch: ['#070B14', '#5EEAD4', '#FB7185']
  },
  {
    slug: 'midas-04-daylight',
    n: '04',
    name: 'Daylight',
    note: 'Beat Engine in daylight. Clean, retail, reads as a real shop rather than a producer page.',
    swatch: ['#EFF1F4', '#0B5FFF', '#14171C']
  },
  {
    slug: 'midas-05-oxblood',
    n: '05',
    name: 'Oxblood',
    note: 'Beat Engine, warmer and heavier. Closer to the records than to software.',
    swatch: ['#14090B', '#E0475F', '#F2E7E5']
  },
  {
    slug: 'midas-06-chrome',
    n: '06',
    name: 'Chrome',
    note: 'No accent colour at all. Typography does the whole job.',
    swatch: ['#0D0D0F', '#E8E8ED', '#6B6B76']
  }
]

const LOVEPARK: Proto[] = [
  { slug: 'lovepark-07-orange-x-green', n: '07', name: 'Orange × Green', note: 'The direction the room chose, 17 July 2026.', swatch: ['#0B0B0C', '#EF5A24', '#5FB44A'] },
  { slug: 'lovepark-01-philadelphia-sound', n: '01', name: 'Philadelphia Sound', note: '', swatch: ['#0B0B0C', '#EF5A24', '#ECE6DA'] },
  { slug: 'lovepark-02-liberty-cream', n: '02', name: 'Liberty Cream', note: '', swatch: ['#ECE6DA', '#EF5A24', '#26241F'] },
  { slug: 'lovepark-03-broad-street-mono', n: '03', name: 'Broad Street Mono', note: '', swatch: ['#0B0B0C', '#ECE6DA', '#8C877D'] },
  { slug: 'lovepark-04-midnight-green', n: '04', name: 'Midnight Green', note: '', swatch: ['#0B0B0C', '#5FB44A', '#ECE6DA'] },
  { slug: 'lovepark-05-concrete-and-blood', n: '05', name: 'Concrete & Blood', note: '', swatch: ['#141311', '#8C2A1E', '#B9B3A6'] },
  { slug: 'lovepark-06-steel-and-amber', n: '06', name: 'Steel & Amber', note: '', swatch: ['#141311', '#D89A2B', '#B9B3A6'] },
  { slug: 'lovepark-08-sepia-vinyl', n: '08', name: 'Sepia Vinyl', note: '', swatch: ['#1A1611', '#C08B4A', '#ECE6DA'] },
  { slug: 'lovepark-09-cream-and-green', n: '09', name: 'Cream & Green', note: '', swatch: ['#ECE6DA', '#5FB44A', '#26241F'] },
  { slug: 'lovepark-10-chrome', n: '10', name: 'Chrome', note: '', swatch: ['#0B0B0C', '#C9CDD4', '#8C877D'] },
  { slug: 'lovepark-merch-directions', n: 'M1', name: 'Merch Directions', note: 'Garment and print directions.', swatch: ['#0B0B0C', '#EF5A24', '#5FB44A'] },
  { slug: 'lovepark-merch-philadelphia', n: 'M2', name: 'Merch — Philadelphia', note: 'City-led merch treatment.', swatch: ['#0B0B0C', '#EF5A24', '#ECE6DA'] }
]

function Card({ p }: { p: Proto }) {
  return (
    <a
      href={`/prototypes/${p.slug}.html`}
      className="group flex flex-col rounded-xl border border-line bg-card p-6 transition-all duration-200 hover:border-canary/50 hover:shadow-[0_14px_36px_rgba(26,19,8,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-canary"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.18em] text-ink-3">{p.n}</span>
        <span className="flex gap-1.5" aria-hidden="true">
          {p.swatch.map((c) => (
            <span
              key={c}
              className="h-3.5 w-3.5 rounded-full ring-1 ring-black/10"
              style={{ backgroundColor: c }}
            />
          ))}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold text-ink group-hover:text-blue-deep">
        {p.name}
      </h3>
      {p.note ? <p className="mt-2 text-sm leading-relaxed text-ink-3">{p.note}</p> : null}
      <span className="mt-auto pt-5 font-mono text-xs tracking-wide text-ink-3 group-hover:text-canary">
        Open →
      </span>
    </a>
  )
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
            <h2 className="font-display text-2xl font-semibold text-ink">Midas800</h2>
            <p className="font-mono text-xs tracking-wide text-ink-3">
              Producer · catalog, storefront, audience — August 2026
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
              Label, film and merch umbrella — July 2026
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
