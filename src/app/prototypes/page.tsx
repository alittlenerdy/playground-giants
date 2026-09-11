import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Prototypes | Playground Giants',
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

// Added 2026-09-11. Midas picked #3 Signal by text ("im leaning towards #3
// 'signal' for the layout of the site") and asked for pay-what-you-want
// instant downloads. These are Signal's layout explored in type, color and
// layout, each carrying a working PWYW checkout mock and built for NO
// photography, since none exists yet. Only S04 and S08 drift from Signal, and
// their banners say so.
const SIGNAL: Proto[] = [
  { slug: 'midas-signal-01-storefront', n: 'S01', name: 'Storefront', note: 'The faithful one. Signal’s palette and type, turned into his store.', swatch: ['#070B14', '#5EEAD4', '#FB7185'] },
  { slug: 'midas-signal-02-gold', n: 'S02', name: 'Gold', note: 'Same layout, warm black and restrained gold.', swatch: ['#0B0A08', '#D4A640', '#EDE6D6'] },
  { slug: 'midas-signal-03-paper', n: 'S03', name: 'Paper', note: 'Signal in daylight. The checkout follows you down the page.', swatch: ['#F3F0E8', '#0F766E', '#14161A'] },
  { slug: 'midas-signal-04-terminal', n: 'S04', name: 'Terminal', note: 'Signal as a command line. Drifts furthest in voice.', swatch: ['#050805', '#7CFFB2', '#FFB547'] },
  { slug: 'midas-signal-05-rail', n: 'S05', name: 'Rail', note: 'An app shell with a left rail and a sortable catalog.', swatch: ['#0F1012', '#4F7CFF', '#FF7AB6'] },
  { slug: 'midas-signal-06-radar', n: 'S06', name: 'Radar', note: 'Map first. Every download puts a pin on it.', swatch: ['#060A12', '#3DFFA8', '#FFC24B'] },
  { slug: 'midas-signal-07-tracklist', n: 'S07', name: 'Tracklist', note: 'The catalog as a DAW tracklist, checkout in a drawer.', swatch: ['#121214', '#FF6A3D', '#F2F0EC'] },
  { slug: 'midas-signal-08-editorial', n: 'S08', name: 'Editorial', note: 'A magazine voice on Signal’s grid. Drifts toward a new direction.', swatch: ['#0D0C10', '#B4474F', '#ECE7DF'] },
  { slug: 'midas-signal-09-bento', n: 'S09', name: 'Bento', note: 'Signal’s tile row, taken to the whole page.', swatch: ['#0C0A14', '#8B5CF6', '#C6F432'] },
  { slug: 'midas-signal-10-broadcast', n: 'S10', name: 'Broadcast', note: 'A control room: ticker, rundown, condensed type.', swatch: ['#0B0B0D', '#FF3B30', '#F5F5F7'] },
  { slug: 'midas-signal-11-pocket', n: 'S11', name: 'Pocket', note: 'Phone first, for buyers arriving from a YouTube link.', swatch: ['#0A0F1C', '#22D3EE', '#F472B6'] },
  { slug: 'midas-signal-12-split', n: 'S12', name: 'Split', note: 'The checkout never scrolls away.', swatch: ['#06110F', '#6EE7B7', '#E9D8A6'] }
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
  { slug: 'lovepark-merch-philadelphia', n: 'M2', name: 'Merch · Philadelphia', note: 'City-led merch treatment.', swatch: ['#0B0B0C', '#EF5A24', '#ECE6DA'] }
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
