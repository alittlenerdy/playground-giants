import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { NADIA, Card } from '../data'

// Her page, and only hers. The /prototypes index carries every engagement, so a
// link sent to a client goes here instead: her directions, no other client's
// work, and no link back to the index. Same pattern as /prototypes/midas800
// (64cceb1, 2026-09-17).
//
// robots.ts disallows /prototypes/ and this page carries noindex as well —
// belt and braces, the same as every other page under this path. Deliberately
// NOT added to sitemap.ts.
export const metadata: Metadata = {
  title: 'ACE Physician Services · Homepage directions | Playground Giants',
  description: 'Five directions for the ACE Physician Services homepage.',
  robots: { index: false, follow: false }
}

export default function NadiaPrototypesPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.22em] text-ink-3">ACE PHYSICIAN SERVICES</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Five directions for the homepage.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-2">
          Five genuinely different shapes for the same site, not one idea in five colors. They are
          all real pages, so open them and scroll. Pick one, or mix them — the layout from one and
          the palette from another is a normal answer. Nothing here is live, and nothing is final.
        </p>

        <section className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
            <h2 className="font-display text-2xl font-semibold text-ink">The directions</h2>
            <p className="font-mono text-xs tracking-wide text-ink-3">
              5 homepage directions · September 2026
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {NADIA.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Two things worth knowing before you choose
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                The square brackets are on purpose
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">
                You will see <span className="font-mono text-xs">[YEAR FOUNDED]</span>,{' '}
                <span className="font-mono text-xs">[STREET ADDRESS]</span> and{' '}
                <span className="font-mono text-xs">[COUNT]</span> in the comps. Those are facts we
                do not have yet, and we would rather show a gap than invent one — on a site whose
                job is to show a real, verifiable company, a made-up founding date is the worst
                possible detail to get wrong. Send them over and they go straight in.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                What we found on the current site
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">
                Read live on 18 September 2026. None of it is urgent, and all of it is fixable
                alongside whichever direction you pick.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink-2">
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-ink-3">01</span>
                  <span>
                    Two pages linked from the site return &ldquo;not found&rdquo;: the medical
                    funding page and the blog page.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-ink-3">02</span>
                  <span>
                    The <strong>Contact Us</strong> link in the header returns an error rather than
                    the contact page.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-ink-3">03</span>
                  <span>
                    Nine stylesheet files the homepage asks for are missing from the server. That is
                    why the headline on the current homepage does not appear at all — most visitors
                    are seeing a photograph with no words on it.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-ink-3">04</span>
                  <span>
                    The first service card on the homepage is illustrated with a gavel and the
                    scales of justice. Since the site&rsquo;s job is to present ACE as an
                    independent medical company, that image works against it. None of the five
                    directions uses legal imagery.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
