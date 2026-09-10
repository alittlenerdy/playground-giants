import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CAL_LINKS } from '@/lib/constants'
import Faq, { type FaqItem } from '@/components/Faq'

// Case study: ReplySequence, my own product. Written 2026-09-10.
//
// Held to the same three rules as the client case studies, plus one more that
// only applies because this one is mine:
//
// 1. NO GROWTH NUMBERS. The organic figures that circulated internally
//    ("+267% clicks, position 19.0") describe a window that ENDED 2026-07-28.
//    Measured current: clicks 13 to 7, position 18.6 to 22.6. The old numbers
//    are dead and are not printed here in either direction, because a case
//    study is not the place to relitigate a metric.
// 2. NO USER OR REVENUE NUMBERS. Five users and a 0.34% cold-email reply rate
//    are real and are in the record, but they measure a distribution failure
//    that was later diagnosed as an instrument fault, so quoting them as a
//    demand result would repeat the exact error this page is about.
// 3. WHAT IS CLAIMED IS WHAT HAPPENED, with dates, from the engagement record.
// 4. 🔴 THE PRODUCT FAILED. That is the subject of the page, not a footnote in
//    it. A case study about my own shelved product that reads as a success
//    story would be worth less than no case study, and anyone who has shipped
//    anything would smell it immediately.
//
// Keyword posture, deliberately modest: this page is not chasing a head term.
// playgroundgiants.com ranks for 3 organic keywords and has 0 organic traffic
// (Semrush, us database, read 2026-09-10), so a competitive target here would
// be a wish. It supports /workflow-audit, which is the thing being sold.
export const metadata: Metadata = {
  title: 'Case study: killing my own product on the evidence',
  description:
    'ReplySequence went to cold storage on a dated decision, not a feeling. What it took to tell a product failure apart from a measurement failure, and why the difference cost a month.'
}

const FAQS: FaqItem[] = [
  {
    q: 'Is ReplySequence dead?',
    a: 'The product is in cold storage, decided 2026-06-17 and confirmed at a formal go/no-go on 2026-08-14. That means no new features, no marketing, no roadmap. The domain, the content pipeline and the billing infrastructure are deliberately still running, because those are a different asset from the product and killing them was never the decision.'
  },
  {
    q: 'Why publish a case study about something that did not work?',
    a: 'Because the transferable part of this project is the decision, and the decision was the hard bit. Building the thing was ordinary. Working out whether the silence coming back meant nobody wanted it, or that nobody had received it, took a month and one correction that reversed the answer entirely. That is the same problem every client has when a channel underperforms, and most of them are one bad inference away from cutting the wrong thing.'
  },
  {
    q: 'What was the measurement failure?',
    a: 'The first demand test sent 15 messages and got zero replies. Read at face value that is a clear market answer. It was not one. The sending mailbox was new and unwarmed, and the whole batch went out over transactional infrastructure that was never built for cold outbound, so the messages were very likely not being seen at all. The test measured deliverability and was reported as demand. Nothing about that failure looked like a failure: the send succeeded, the tool reported success, and the number that came back was a real number.'
  },
  {
    q: 'How do you know the second read was any better?',
    a: 'Because the second attempt changed the channel rather than the copy. Moving to manual outreach on a platform with no deliverability layer removed the variable that had been contaminating the first result. That does not make the answer flattering. It makes it interpretable, which is the only thing a test owes you.'
  },
  {
    q: 'What would you do differently?',
    a: 'Run the cheapest possible control before trusting any zero. One message to an address I own, checked on arrival, would have caught the deliverability problem on day one for no cost. I now treat an unexplained zero as a broken instrument until something proves otherwise, and that habit came directly out of this.'
  },
  {
    q: 'Does this mean you will tell me to kill my project?',
    a: 'Sometimes, and you should want an outsider who is willing to. More often the useful answer is narrower: the thing being measured is not the thing you think you are measuring. That is worth finding out before you spend another quarter on it, and it is most of what a workflow audit actually produces.'
  }
]

export default function ReplySequenceCaseStudy() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <section className="pt-36 pb-14 md:pt-44 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-6">
            Case study · My own product · Shelved on purpose
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-ink mb-6">
            I killed my own product. The hard part was proving I was reading the right number.
          </h1>
          <p className="font-display text-lg text-ink-2 leading-relaxed">
            ReplySequence turned sales meeting transcripts into sent follow-ups. It works, it is
            built, and it is on a shelf. This is the story of the month between deciding it had
            failed and finding out that the first test had measured the wrong thing entirely.
          </p>
        </div>
      </section>

      {/* ── Honesty note ─────────────────────────────────────────────────── */}
      <section className="py-10 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-line bg-card px-6 py-5">
            <h2 className="font-display text-lg font-semibold text-ink mb-2">
              What this case study does not contain
            </h2>
            <p className="text-sm text-ink-3 leading-relaxed">
              No growth numbers, no user counts, no revenue. Not because they are embarrassing,
              though some of them are, but because every one of them measures a distribution
              channel that turned out to be faulty, and quoting a contaminated number as a result
              would repeat the exact mistake this page is about. What is here is the sequence of
              decisions, with dates, and the one correction that reversed the conclusion.
            </p>
          </div>
        </div>
      </section>

      {/* ── What it was ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            What it was
          </h2>
          <p className="text-ink-2 mb-5 leading-relaxed">
            Sales calls get recorded and transcribed by tools people already pay for. The
            follow-up email that should come out of that call gets written from memory, hours
            later, badly, or not at all. ReplySequence sat between the two: it read the
            transcript, drafted the follow-up in the rep&apos;s own voice, and sent it from the
            rep&apos;s own mailbox in about a minute.
          </p>
          <p className="text-ink-2 mb-7 leading-relaxed">
            Bring your own transcript, bring your own mailbox. It plugged into the meeting
            recorders teams already ran rather than asking anyone to switch, and it never held
            the sending relationship, which mattered for deliverability and for trust.
          </p>
          <p className="text-ink-2 leading-relaxed">
            The build was not the problem. It shipped, it worked, and the thing it automated was
            a real chore. Every failure below happened downstream of a product that functioned.
          </p>
        </div>
      </section>

      {/* ── The core lesson ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-4">
            The correction the whole project turns on
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            Fifteen sent, zero replies. That was not a market answer.
          </h2>
          <p className="text-ink-2 mb-6 leading-relaxed">
            The first real demand test went out to fifteen matched prospects and came back
            completely silent. Read at face value, that is about as clear a signal as a founder
            ever gets, and I read it that way for a while.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-7">
            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="text-xs font-semibold tracking-[0.1em] uppercase text-blue-deep mb-2">
                What the number looked like
              </p>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">
                Nobody wants this.
              </h3>
              <p className="text-sm text-ink-3 leading-relaxed">
                Fifteen well-targeted messages, zero replies. The send reported success. Nothing
                errored. The number was real and it was correctly calculated.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="text-xs font-semibold tracking-[0.1em] uppercase text-blue-deep mb-2">
                What it actually measured
              </p>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">
                Nobody received this.
              </h3>
              <p className="text-sm text-ink-3 leading-relaxed">
                A brand new sending domain with no warming history, pushed through infrastructure
                built for transactional receipts rather than cold outbound. The messages very
                likely never reached an inbox anyone looked at.
              </p>
            </div>
          </div>

          <p className="text-ink-2 mb-5 leading-relaxed">
            Those two conclusions produce identical output. Zero replies looks exactly the same
            whether the market rejected you or the mail never arrived, and only one of them is
            about your product. A month went into the wrong one.
          </p>
          <p className="text-ink-2 leading-relaxed">
            The fix was not better copy. It was changing the channel to one with no deliverability
            layer in the way, so that whatever came back would at least be interpretable. That is
            the whole discipline: before you accept a disappointing number, establish that the
            instrument producing it works.
          </p>
        </div>
      </section>

      {/* ── What was actually built ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            What got built along the way
          </h2>
          <p className="text-ink-2 mb-7 leading-relaxed">
            Everything below is running today, on a product nobody is selling. It is here because
            it is the part that transfers.
          </p>

          <div className="space-y-4">
            {[
              {
                h: 'A content pipeline that did not stop when the product did',
                p: 'Automated drafting, publishing and refresh, running on a schedule since before cold storage and still running now. Turning off a product and turning off its domain are two different decisions, and conflating them throws away an asset that costs almost nothing to keep.'
              },
              {
                h: 'A page-weight fix found by measuring, not by guessing',
                p: 'Blog pages were shipping over two megabytes of images each because the body content bypassed the framework’s image handling entirely. The first diagnosis blamed the hero image, which turned out to be six kilobytes. Measuring properly moved a page from roughly 2,343 KB to 23 KB, verified live rather than assumed from the build.'
              },
              {
                h: 'A sitemap guard that was proven to fail first',
                p: 'A drift check that keeps the sitemap honest, written so that it was verified to fail without the fix before being trusted with the fix in place. A test that has never failed is not evidence of anything.'
              },
              {
                h: 'An orphaned section reconnected',
                p: 'A whole product section had zero inbound internal links, so roughly 168 pages sat outside the site’s own link graph. Deleting it was floated and declined. An orphan is a linking problem, not a content problem.'
              }
            ].map((p) => (
              <div key={p.h} className="rounded-xl border border-line bg-card px-6 py-5">
                <h3 className="font-display text-base font-semibold text-ink mb-1.5">{p.h}</h3>
                <p className="text-sm text-ink-3 leading-relaxed">{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The decision ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            The decision, and why it has a date on it
          </h2>
          <p className="text-ink-2 mb-5 leading-relaxed">
            The product went to cold storage on 2026-06-17. A formal go/no-go on 2026-08-14
            confirmed it and recorded both halves in one line: cold storage on the product, keep
            the domain. A separate decision on 2026-07-31 cancelled the plan to shut the
            workspace down.
          </p>
          <p className="text-ink-2 mb-5 leading-relaxed">
            Dates matter here for an unglamorous reason. Between the decision and the go/no-go,
            the tracking task for it was closed without the decision being made, and for about
            five weeks the question looked settled to anyone glancing at the board while actually
            being open. Closing the card that tracks a decision is not the same as making it.
          </p>
          <p className="text-ink-2 leading-relaxed">
            Since then the recorded decision has done real work. Twice, automated tooling of mine
            has tried to decline legitimate infrastructure work on this project by citing cold
            storage, because the note it read said the product was shelved without saying that the
            infrastructure was not. A decision that is written down imprecisely gets applied
            imprecisely, forever.
          </p>
        </div>
      </section>

      {/* ── What transfers ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-7">
            What I take into client work because of this
          </h2>
          <div className="space-y-7">
            {[
              {
                h: 'An unexplained zero is a broken instrument until proven otherwise',
                p: 'A collector that fails returns nothing. A channel with no demand returns nothing. They are the same output and opposite facts. Before accepting any disappointing number, I run the cheapest available control: send one message to an address I own and check it arrived. It costs minutes and it would have saved a month here.'
              },
              {
                h: 'Write the decision down with its boundaries, not just its verdict',
                p: 'Cold storage on the product was correct. Cold storage as an unqualified sentence was wrong, and it kept being read as covering everything. Every standing decision I record now names what it does not cover.'
              },
              {
                h: 'Killing the product is not the same as killing the asset',
                p: 'The domain, the content and the search presence were built for a product that no longer ships, and keeping them costs almost nothing. Shutting everything down in one gesture is tidy and it destroys the half that was still working.'
              },
              {
                h: 'Being willing to shelve your own work is the whole qualification',
                p: 'I am asking clients to let me tell them that something they have paid for is not working. It would be strange to sell that and never have done it to myself.'
              }
            ].map((l) => (
              <div key={l.h}>
                <h3 className="font-display text-lg font-semibold text-ink mb-1.5">{l.h}</h3>
                <p className="text-ink-3 leading-relaxed">{l.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-5">
            Most bad numbers are measurement problems.
          </h2>
          <p className="text-ink-2 mb-9 leading-relaxed">
            An audit maps what you are actually measuring before anyone argues about what to do
            with it. That distinction is usually where the money is.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/workflow-audit"
              className="px-7 py-3.5 rounded-xl bg-ink text-paper font-semibold hover:bg-ink-2 transition-colors"
            >
              Start with a Workflow Audit
            </Link>
            <a
              href={CAL_LINKS.QUICK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 text-ink-2 font-semibold hover:text-blue-deep transition-colors"
            >
              Book a 15 minute call
            </a>
          </div>
        </div>
      </section>

      <Faq items={FAQS} />

      <Footer />
    </div>
  )
}
