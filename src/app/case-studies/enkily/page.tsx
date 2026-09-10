import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CAL_LINKS } from '@/lib/constants'
import Faq, { type FaqItem } from '@/components/Faq'

// Case study: Enkily, my own iOS app. Written 2026-09-10.
//
// Rules applied, and two of them are hard constraints from the engagement
// record rather than editorial preference:
//
// 1. 🔴 NO VERSION NUMBER, ANYWHERE. Apple is the only authority on what is
//    live, READY_FOR_SALE does not mean downloadable, and a version constant in
//    published copy goes stale silently. Nine of them were found hardcoded
//    across this codebase's own tooling on 2026-09-10 and deleted rather than
//    updated. Do not reintroduce one here.
// 2. 🔴 NO DOWNLOAD, USER, OR REVENUE NUMBERS. App Store acquisition data has
//    never once been read: the analytics key returns 403 and no vendor number
//    has been obtained. Every "acquisition" figure in the record describes the
//    marketing WEBSITE, not the store, and substituting one for the other is a
//    documented error on this project. Silence is the honest option.
// 3. WHAT IS CLAIMED IS WHAT SHIPPED, with dates, from the implementation log.
//
// The subject is the safety architecture and the shipping discipline, because
// those are what a regulated-industry client is actually buying. Growth is not
// claimed in either direction.
export const metadata: Metadata = {
  title: 'Case study: shipping consumer AI with the guardrails first',
  description:
    'Enkily is a voice-first capture app on the App Store. How an AI feature touching personal journals shipped behind five explicit gates, and the bug that only a real device could find.'
}

const FAQS: FaqItem[] = [
  {
    q: 'What does Enkily actually do?',
    a: 'You speak or type a thought, and it routes to the right place on its own: a task, a calendar entry, a journal note, or long-term memory. The point is that capture should cost nothing. Deciding which bucket something belongs in is exactly the friction that stops people recording anything at all, so a model does that part and the person does not.'
  },
  {
    q: 'Why are there no download or revenue numbers on this page?',
    a: 'Because I have never read them. The App Store analytics key returns a permissions error and has not been resolved, so no store-side impression, page-view or conversion figure has ever been in my hands. There are numbers for the marketing website, and quoting those as if they described the App Store would be the kind of substitution I would flag in a client audit. When I can read the real ones, they can go here.'
  },
  {
    q: 'What were the five gates?',
    a: 'For the feature that lets AI respond to a personal journal entry: the user must be in journal mode, must have attested to being over eighteen, must have opted in through a setting that defaults to off, must have given explicit AI-processing consent under the App Store guideline that governs it, and the crisis classifier must have returned an explicit no-risk result that the code waits for rather than races. Any one of them missing means the feature does nothing at all.'
  },
  {
    q: 'Is a five-gate feature not overengineered?',
    a: 'For a to-do app, yes. For software that reads what someone wrote in a journal at two in the morning, the gates are the product. The interesting part is that they made the feature silently do nothing for a while, which is covered below, and I would still rather debug that than the alternative.'
  },
  {
    q: 'What is the transferable lesson?',
    a: 'A passing test suite tells you the code does what you wrote. It cannot tell you whether a real person on a real device ever sees the result. Two bugs here were invisible to hundreds of green tests and obvious within seconds of installing the build, and both cost real money while producing nothing a user could see.'
  },
  {
    q: 'Do you build iOS apps for clients?',
    a: 'That is not the offer. This is here because it is evidence of how I ship AI into places where a wrong output is not a rounding error, and because a solo consumer app forces every decision about consent, safety and cost to be made explicitly rather than delegated to somebody else’s policy.'
  }
]

export default function EnkilyCaseStudy() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <section className="pt-36 pb-14 md:pt-44 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-6">
            Case study · My own iOS app · Live on the App Store
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-ink mb-6">
            An AI that reads your journal should be hard to turn on.
          </h1>
          <p className="font-display text-lg text-ink-2 leading-relaxed">
            Enkily takes a spoken thought and files it as a task, an event, a journal entry or a
            memory. Built solo and shipped to the App Store in thirteen days. The part worth
            writing about is what it refuses to do without permission.
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
              No download counts, no user numbers, no revenue, and no version number. The App
              Store analytics credential returns a permissions error that is still unresolved, so
              I have genuinely never read a store-side figure for this app. There are numbers for
              the marketing website, and presenting those as App Store performance would be
              exactly the substitution I would flag in somebody else&apos;s reporting. This page is
              about how it was built and what it refuses to do.
            </p>
          </div>
        </div>
      </section>

      {/* ── The shipping story ───────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            Thirteen days from first upload to live
          </h2>
          <p className="text-ink-2 mb-5 leading-relaxed">
            First build uploaded on 2026-06-07. Submitted to App Review on 2026-06-11. Live on the
            App Store on 2026-06-20, with the next reliability release submitted the same day it
            went live.
          </p>
          <p className="text-ink-2 mb-7 leading-relaxed">
            That pace is only possible because the awkward decisions were made before the code,
            not after it. Two in particular shaped everything downstream.
          </p>

          <div className="space-y-4">
            {[
              {
                h: 'No signup wall',
                p: 'The app opens an anonymous session the first time it launches. You can capture a thought before you have an account, because an app whose entire pitch is that capture costs nothing cannot open with a registration form. This is also why the internal activation metric counts people who opened the app rather than people who installed it, and why that distinction has to be stated every time the number appears.'
              },
              {
                h: 'Settings that do not lie',
                p: 'A delete-all-data control that genuinely deletes, wired end to end rather than presented as a reassurance. If a toggle in a settings screen describes something the software does not actually do, everything else in that screen becomes a claim rather than a fact.'
              },
              {
                h: 'Designed for the distractible first',
                p: 'The product was repositioned around ADHD-first use partway through, which changed what good looked like. Frictionless lock-screen capture stopped being a nice feature and became the whole thesis.'
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

      {/* ── The gates ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-4">
            The design decision the rest depends on
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            Five gates, and every one of them can veto
          </h2>
          <p className="text-ink-2 mb-6 leading-relaxed">
            Letting a model respond to a private journal entry is not the same kind of feature as
            letting it sort a shopping list. Somebody writes something at their lowest moment and
            software answers. So the feature only runs when all five of these are true, and they
            are enforced in the code path rather than described in a policy document.
          </p>

          <div className="space-y-3 mb-7">
            {[
              ['Journal mode', 'The user is deliberately in the journaling surface, not merely capturing.'],
              ['Age attested', 'An explicit over-eighteen confirmation, wired from zero call sites to enforced.'],
              ['Opted in', 'A setting that defaults to off. Nobody arrives with this switched on.'],
              ['AI consent given', 'Separate, explicit consent to AI processing, under the App Store guideline that governs disclosure.'],
              ['No crisis risk', 'A safety classifier must return an explicit no-risk result, and the code waits for it rather than racing it.']
            ].map(([h, p], i) => (
              <div key={h} className="rounded-xl border border-line bg-card px-6 py-4 flex gap-4 items-start">
                <span className="font-display text-sm font-semibold text-blue-deep mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink mb-1">{h}</h3>
                  <p className="text-sm text-ink-3 leading-relaxed">{p}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-ink-2 leading-relaxed">
            The last one matters most and is the easiest to get wrong. A safety check that is
            started but not awaited passes every test and protects nobody, because the feature
            proceeds while the classifier is still thinking.
          </p>
        </div>
      </section>

      {/* ── The bug ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-4">
            What the test suite could not see
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            A paid AI call producing output nobody could ever read
          </h2>
          <p className="text-ink-2 mb-5 leading-relaxed">
            Hundreds of tests passed. The feature was correct. On a real device it did nothing
            visible, and it was costing money every time.
          </p>
          <p className="text-ink-2 mb-5 leading-relaxed">
            The card displaying the AI response dismissed itself automatically after six seconds.
            The response arrived at about seven and a third. Every run made a real, billed request
            and rendered the answer into a view that had already gone.
          </p>
          <p className="text-ink-2 mb-5 leading-relaxed">
            No test could catch this. Tests wait deterministically for a stubbed response and
            never experience latency, so in the suite the answer always arrived instantly and the
            card was always still there. The bug lived entirely in the gap between how fast a stub
            is and how slow a network is.
          </p>
          <p className="text-ink-2 leading-relaxed">
            The second bug was the mirror image: a feature that correctly did nothing, forever,
            because one of the five gates was refusing a consent the app had never actually asked
            for. Also invisible. Also only found by installing the thing and using it.
          </p>
        </div>
      </section>

      {/* ── What transfers ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-7">
            What I take into client work because of this
          </h2>
          <div className="space-y-7">
            {[
              {
                h: 'Green tests are not evidence that a person sees anything',
                p: 'A suite proves the code does what was written. Whether a real user on a real device ever receives the result is a different question, and it is answered by installing the build and looking. Both bugs above cost money while producing nothing visible, and both were obvious within seconds of doing that.'
              },
              {
                h: 'Consent has to be a gate, not a paragraph',
                p: 'A privacy policy describing what software will not do is worth very little next to a code path that cannot execute without an explicit, revocable, defaults-to-off permission. The second version survives a change of maintainer.'
              },
              {
                h: 'Await the safety check, do not merely start it',
                p: 'A classifier whose result arrives after the decision has been made is not a safety feature. It is an expensive log line. This is the single easiest place to build something that looks careful and is not.'
              },
              {
                h: 'Some things can only be verified by a human hand',
                p: 'The age gate could not be actuated by any automated harness. Confirming it worked took a person tapping a switch on a physical phone and watching both prompts appear. When a control genuinely cannot be tested automatically, that is a fact to schedule around, not to route past.'
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
            If AI is going to touch something sensitive, the gates come first.
          </h2>
          <p className="text-ink-2 mb-9 leading-relaxed">
            An audit works out which parts of your workflow are safe to automate, and what has to
            stay in front of a person. That order is cheaper than the reverse.
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
