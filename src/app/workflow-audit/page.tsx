import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CAL_LINKS } from '@/lib/constants'

// New page, 2026-07-24. This is the rung that was missing from the ladder.
//
// The audit artifact was already being produced for every prospect: workflow
// maps, phase plans, compliance reviews, cost forecasts, tool evaluations. It
// was simply given away as pre-sale work. The 2026 market norm is $1,500-$3,000
// for exactly this, credited toward the build, and it doubles as qualification:
// a buyer who will not pay for the plan was never going to buy the build.
export const metadata: Metadata = {
  title: 'The Workflow Audit — Playground Giants',
  description:
    'Two weeks, $2,500, credited toward a build. A written map of where your manual work is, what is safe to automate, what must stay human, and what it would cost.'
}

const FAQS = [
  {
    q: 'What do I actually receive?',
    a: 'A written report and a phased plan. The report maps your current workflow step by step, flags where the time goes, and marks each step as safe to automate, needs a human checkpoint, or should stay manual. The plan sequences the work into phases with prices, ordered so the first phase pays for itself before the next begins.'
  },
  {
    q: 'What if I do not hire you afterwards?',
    a: 'You keep the plan and you owe nothing further. It is written to be handed to another developer or an internal team. That happens sometimes and it is a perfectly good outcome.'
  },
  {
    q: 'Is the fee really credited?',
    a: 'Yes. If you proceed to a build within ninety days, the full $2,500 comes off the build price.'
  },
  {
    q: 'How much of my team’s time does it take?',
    a: 'Roughly three to four hours total, spread across two weeks. Usually a kickoff conversation, some time watching how work actually moves, a couple of short follow-ups, and a walkthrough at the end.'
  },
  {
    q: 'Do you need access to our systems?',
    a: 'Read-only access helps but is not required, and I will never ask for access to patient records, client files, or anything privileged in order to scope work. Screenshots and a conversation are usually enough to map a workflow.'
  },
  {
    q: 'What if the answer is that we do not need automation?',
    a: 'Then that is what the report says. Sometimes the real problem is a process or staffing problem, and automating it just makes the wrong thing happen faster. I would rather tell you that in week two than six weeks into a build.'
  }
]

export default function WorkflowAudit() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      {/* FAQPage schema, server-rendered so answer engines can read it. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a }
            }))
          })
        }}
      />

      <section className="pt-36 pb-16 md:pt-44 border-b border-line-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-6">
            Stage one
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-ink mb-6 max-w-3xl">
            Find out what is worth automating before anyone builds anything.
          </h1>
          <p className="font-display text-lg text-ink-2 max-w-2xl leading-relaxed mb-8">
            Two weeks. I map how your work actually moves, mark what is safe to automate and
            what has to stay with a person, check it against the compliance you already have,
            and price the build in phases.
          </p>
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-9">
            <span className="font-display text-4xl font-semibold text-ink">$2,500</span>
            <span className="text-ink-3">fixed fee, credited in full toward a build</span>
          </div>
          <a
            href={CAL_LINKS.MAIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3.5 rounded-xl bg-ink text-paper font-semibold hover:bg-ink-2 transition-colors"
          >
            Book the kickoff conversation
          </a>
        </div>
      </section>

      {/* ── The four questions ───────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-9">
            Four questions, answered in writing
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                n: '01',
                h: 'Where is the manual work really?',
                p: 'Not where you assume it is. I follow a real piece of work end to end and record every point where a person retypes, re-checks, chases, or re-decides something. Rough hours attached, so the expensive steps become obvious.'
              },
              {
                n: '02',
                h: 'What is safe to automate?',
                p: 'Each step marked: automate fully, automate with a human checkpoint, or leave alone. The third category matters most. Anything involving professional judgment, a duty of care, or an irreversible consequence stays with a person, and I will say so plainly.'
              },
              {
                n: '03',
                h: 'What does your compliance already permit?',
                p: 'What your existing agreements already cover, where data would move, and whether anything new would need signing. Frequently the answer is that you can build inside what you already have, which removes the slowest part of the project.'
              },
              {
                n: '04',
                h: 'What would it cost, and in what order?',
                p: 'A phased plan with a price against each phase, ordered so the earliest work returns the most. You should be able to stop after any phase and still be better off than when you started.'
              }
            ].map((q) => (
              <div key={q.n} className="rounded-2xl border border-line bg-card p-6">
                <div className="font-display text-2xl font-semibold text-blue-deep mb-2">{q.n}</div>
                <h3 className="font-display text-lg font-semibold text-ink mb-2 leading-snug">
                  {q.h}
                </h3>
                <p className="text-sm text-ink-3 leading-relaxed">{q.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-9">
            How the two weeks run
          </h2>
          <div className="space-y-7">
            {[
              {
                w: 'Day 1',
                h: 'Kickoff, about an hour',
                p: 'You walk me through how the work comes in and what happens to it. I mostly ask questions and try not to propose anything yet.'
              },
              {
                w: 'Days 2 to 5',
                h: 'I follow the work',
                p: 'Reviewing how things actually move, where they stall, and what your systems already do that nobody is using. Short follow-up questions as they come up, not a standing meeting.'
              },
              {
                w: 'Days 6 to 9',
                h: 'Compliance and feasibility',
                p: 'What your existing agreements cover, what the relevant rules require, and what is genuinely buildable against your current stack rather than in principle.'
              },
              {
                w: 'Days 10 to 13',
                h: 'The plan gets written',
                p: 'Workflow map, automate-or-not marking, phased build plan with prices. Written to be read by you, not by a developer.'
              },
              {
                w: 'Day 14',
                h: 'Walkthrough, about an hour',
                p: 'I take you through it, you push back, I adjust. Then it is yours, whatever you decide to do next.'
              }
            ].map((s) => (
              <div key={s.w} className="flex flex-col sm:flex-row gap-3 sm:gap-7">
                <div className="sm:w-32 shrink-0">
                  <span className="text-xs font-semibold tracking-[0.1em] uppercase text-blue-deep">
                    {s.w}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink mb-1">{s.h}</h3>
                  <p className="text-ink-3 leading-relaxed">{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fit ──────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-9">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                This fits if
              </h2>
              <ul className="space-y-2.5">
                {[
                  'You run a firm, practice, or operation where a wrong answer has real consequences',
                  'Work arrives faster than anyone can triage it properly',
                  'Your systems are fine but the gaps between them are manual',
                  'You have looked at AI tools and stalled on whether they can be trusted',
                  'You want to own what gets built rather than rent it'
                ].map((i) => (
                  <li key={i} className="flex gap-2.5 text-ink-2 leading-relaxed">
                    <span className="text-sage font-bold shrink-0">+</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                This does not fit if
              </h2>
              <ul className="space-y-2.5">
                {[
                  'You want someone to run a chatbot pilot and call it a transformation',
                  'The real problem is that a process is undefined, not that it is manual',
                  'You need a decision this week, since the honest version takes two',
                  'You want AI making the professional judgment call, which I will not build'
                ].map((i) => (
                  <li key={i} className="flex gap-2.5 text-ink-2 leading-relaxed">
                    <span className="text-ink-3 font-bold shrink-0">&minus;</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-9">
            Questions people ask
          </h2>
          <div className="space-y-7">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-lg font-semibold text-ink mb-1.5">{f.q}</h3>
                <p className="text-ink-3 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-5">
            Two weeks to a real answer.
          </h2>
          <p className="text-ink-2 mb-9 leading-relaxed">
            If a fifteen minute call tells us it is not a fit, that costs you fifteen minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CAL_LINKS.MAIN}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-ink text-paper font-semibold hover:bg-ink-2 transition-colors"
            >
              Book the kickoff conversation
            </a>
            <Link
              href="/packages"
              className="px-7 py-3.5 text-ink-2 font-semibold hover:text-blue-deep transition-colors"
            >
              See what comes after
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
