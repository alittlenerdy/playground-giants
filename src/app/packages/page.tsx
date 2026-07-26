import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CAL_LINKS } from '@/lib/constants'
import Faq, { type FaqItem } from '@/components/Faq'

// Rebuilt 2026-07-24 as a three-stage ladder (audit -> build -> run).
//
// The old page sold Foundation/Growth/Dominance marketing packages for home
// service businesses, anchored at "from $2,500/mo". Two problems: it advertised
// a service no longer being led with, and $2,500 sat BELOW both real retainers,
// anchoring every reader low before the conversation started.
//
// Prices here are what has actually been charged, not aspirational: $6k for a
// single-phase practice build, $25k for a multi-market lead system, $9,500/mo
// for full service. The $1,500 and $4,500 bands fill the gap between them,
// which is where most deals will land. The audit at $2,500 is the new rung and
// the important one: that work was previously given away free.
export const metadata: Metadata = {
  title: 'Engagements and pricing | Playground Giants',
  description:
    'Three stages: a $2,500 Workflow Audit, a $6,000 to $25,000 build, and monthly operation from $1,500. Prices are what I actually charge.'
}

// FAQ content added 2026-07-26. Every figure here is taken from the RETAINERS
// array and the stage pricing on this page, so the schema, the visible answers
// and the price cards cannot disagree with each other.
const FAQS: FaqItem[] = [
  {
    q: 'What does the whole thing cost, end to end?',
    a: 'The Workflow Audit is $2,500. A build is $6,000 to $25,000 depending on how many workflows it covers. Running it afterwards is $1,500, $4,500 or $9,500 a month. These are prices that have actually been charged, not a rate card written to look impressive.'
  },
  {
    q: 'Do I have to do all three stages?',
    a: 'No. You can stop after any of them. Plenty of people take the audit, get the plan, and build it themselves or hand it to their own team. That is a normal outcome and you owe nothing further.'
  },
  {
    q: 'Is the audit fee really credited against a build?',
    a: 'Yes. If you proceed to a build within ninety days, the full $2,500 comes off the build price.'
  },
  {
    q: 'Why is there no cheap monthly tier?',
    a: 'Because a system doing regulated work with a person in the loop needs someone accountable for it, and there is no honest version of that for a few hundred a month. Watch at $1,500 is the floor: monitoring, tuning as your work changes, and a monthly report. Below that I would be selling attention I could not actually give.'
  },
  {
    q: 'What happens to the system if we stop working together?',
    a: 'You keep all of it. Everything is built inside the systems and the accounts you already own, so there is nothing to hand back and nothing that stops working when I do. That is deliberate, and it is why nothing here is built on a platform only I can log into.'
  },
  {
    q: 'Who am I actually hiring?',
    a: 'Me. Playground Giants is one person, not an agency with a bench. That is the trade: you get a named senior person on your work, and I take on fewer engagements than an agency would.'
  }
]

const RETAINERS = [
  {
    name: 'Watch',
    price: '$1,500',
    per: 'per month',
    who: 'A built system that mostly needs to keep working.',
    includes: [
      'Monitoring and alerting on the whole pipeline',
      'Prompt and rule tuning as your work changes',
      'Monthly report on volume, routing and exceptions',
      'Small changes and fixes'
    ]
  },
  {
    name: 'Operate',
    price: '$4,500',
    per: 'per month',
    featured: true,
    who: 'You want the system improving, not just running.',
    includes: [
      'Everything in Watch',
      'A new workflow or phase each quarter',
      'Reporting built for your leadership, not just for me',
      'Priority turnaround on changes',
      'Quarterly review of what to automate next'
    ]
  },
  {
    name: 'Own the outcome',
    price: '$9,500',
    per: 'per month',
    who: 'You want one person accountable for the whole funnel.',
    includes: [
      'Everything in Operate',
      'Paid acquisition managed end to end',
      'Search and answer-engine work ongoing',
      'Compliance monitoring as rules change',
      'Client-facing reporting on your approval'
    ]
  }
]

export default function Packages() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <section className="pt-36 pb-16 md:pt-44 border-b border-line-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-6">
            Engagements
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-ink mb-6 max-w-3xl">
            Three stages. You can stop after any of them.
          </h1>
          <p className="font-display text-lg text-ink-2 max-w-2xl leading-relaxed">
            Nearly everyone starts with the audit, because neither of us can scope a build
            honestly without it. What you pay for the audit comes off the build if you go
            ahead, and the written plan is yours either way.
          </p>
        </div>
      </section>

      {/* ── Stage 1 ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-ink bg-card overflow-hidden">
            <div className="px-7 py-6 bg-cream-2 border-b border-line flex flex-wrap justify-between items-baseline gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-ink-3 mb-1.5">
                  Stage one
                </p>
                <h2 className="font-display text-2xl font-semibold text-ink">The Workflow Audit</h2>
              </div>
              <div className="text-right">
                <div className="font-display text-3xl font-semibold text-ink">$2,500</div>
                <div className="text-sm text-ink-3">credited toward a build</div>
              </div>
            </div>
            <div className="px-7 py-7">
              <p className="text-ink-2 mb-6 max-w-2xl leading-relaxed">
                Two weeks. I sit with how your work actually moves, not how the org chart says
                it moves, and come back with a written answer to four questions.
              </p>
              <div className="grid md:grid-cols-2 gap-x-9 gap-y-5 mb-7">
                {[
                  {
                    h: 'Where is the manual work really?',
                    p: 'Mapped step by step, with rough hours attached, so the expensive parts are obvious rather than assumed.'
                  },
                  {
                    h: 'What is safe to automate here?',
                    p: 'And just as importantly, what is not. Some steps should stay human, and I will tell you which and why.'
                  },
                  {
                    h: 'What does your compliance already allow?',
                    p: 'Existing agreements, what they cover, and where a new one would be needed before anything is built.'
                  },
                  {
                    h: 'What would it cost and in what order?',
                    p: 'A phased plan with prices, sequenced so the first phase pays for itself before the second starts.'
                  }
                ].map((q) => (
                  <div key={q.h}>
                    <h3 className="font-display text-base font-semibold text-ink mb-1">{q.h}</h3>
                    <p className="text-sm text-ink-3 leading-relaxed">{q.p}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-cream-2/70 border border-line-soft px-5 py-4 mb-7">
                <p className="text-sm text-ink-2 leading-relaxed">
                  <span className="font-semibold text-ink">You keep the plan regardless.</span>{' '}
                  If you take it to someone else, or build it in house, or decide the honest
                  answer is that automation is not your problem right now, that is a fine
                  outcome and you have still had the question answered properly.
                </p>
              </div>
              <Link
                href="/workflow-audit"
                className="inline-block px-7 py-3.5 rounded-xl bg-ink text-paper font-semibold hover:bg-ink-2 transition-colors"
              >
                What the audit covers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stage 2 ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-baseline gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-ink-3 mb-1.5">
                Stage two
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Build the system
              </h2>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl font-semibold text-ink">$6,000 to $25,000</div>
              <div className="text-sm text-ink-3">scoped at the audit, billed on milestones</div>
            </div>
          </div>

          <p className="text-ink-2 max-w-2xl mb-8 leading-relaxed">
            One or two workflows taken all the way into production and actually used. The range
            is real rather than a placeholder: the low end is a single-phase build inside tools
            you already own, the high end is a multi-market intake and acquisition system.
          </p>

          <div className="grid md:grid-cols-2 gap-x-9 gap-y-5">
            {[
              {
                h: 'Built on accounts in your name',
                p: 'Hosting, database, analytics, ad accounts. If we part ways you change the passwords and nothing breaks. No hostage situation.'
              },
              {
                h: 'Inside your existing compliance',
                p: 'Where an existing agreement already covers it, I build there rather than introducing a new vendor and a new signature.'
              },
              {
                h: 'A human checkpoint on anything consequential',
                p: 'Approval steps where the stakes justify them, and a fail-toward-a-person default everywhere else.'
              },
              {
                h: 'The audit trail from day one',
                p: 'Append-only record of what happened and why. Retrofitting this later is painful, so it goes in at the start.'
              },
              {
                h: 'Your team trained on it',
                p: 'Written runbook plus a working session. A system nobody understands gets abandoned in a fortnight.'
              },
              {
                h: 'Monitoring before handover',
                p: 'Alerting so a silent failure surfaces immediately. I have learned this one the hard way on my own systems.'
              }
            ].map((s) => (
              <div key={s.h}>
                <h3 className="font-display text-base font-semibold text-ink mb-1">{s.h}</h3>
                <p className="text-sm text-ink-3 leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stage 3 ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-ink-3 mb-1.5">
            Stage three
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-3">
            Run it with you
          </h2>
          <p className="text-ink-2 max-w-2xl mb-9 leading-relaxed">
            Optional, and genuinely so. Some clients take the build and run it themselves. Most
            would rather someone kept watching it, because an automation nobody is monitoring
            is a liability waiting to be discovered.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {RETAINERS.map((r) => (
              <div
                key={r.name}
                className={`rounded-2xl bg-card p-6 flex flex-col ${
                  r.featured ? 'border-2 border-blue-deep' : 'border border-line'
                }`}
              >
                {r.featured && (
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-blue-deep mb-2">
                    Most engagements
                  </p>
                )}
                <h3 className="font-display text-xl font-semibold text-ink mb-1">{r.name}</h3>
                <div className="mb-3">
                  <span className="font-display text-2xl font-semibold text-blue-deep">
                    {r.price}
                  </span>{' '}
                  <span className="text-sm text-ink-3">{r.per}</span>
                </div>
                <p className="text-sm text-ink-2 mb-4 leading-relaxed">{r.who}</p>
                <ul className="space-y-2 mt-auto">
                  {r.includes.map((i) => (
                    <li key={i} className="text-sm text-ink-3 flex gap-2.5 leading-relaxed">
                      <span className="text-sage font-bold shrink-0">+</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Honest notes ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-7">
            Things worth saying before you enquire
          </h2>
          <div className="space-y-6">
            {[
              {
                h: 'Software and ad spend are separate',
                p: 'Hosting, databases, tracking and any advertising budget are billed to your accounts at cost. I do not mark them up, and you can see every line.'
              },
              {
                h: 'I will turn work down',
                p: 'If your problem is a process problem wearing an automation costume, automating it makes it faster and worse. I would rather say that at the audit than six weeks into a build.'
              },
              {
                h: 'You are hiring one person',
                p: 'That means direct access and no account manager in between. It also means I take on a small number of clients at a time, so start dates are real constraints.'
              },
              {
                h: 'No long lock-in on the retainer',
                p: 'Build engagements are milestone-based and finite. Retainers run month to month unless a specific engagement warrants a term, in which case it is agreed up front and in writing.'
              }
            ].map((n) => (
              <div key={n.h}>
                <h3 className="font-display text-lg font-semibold text-ink mb-1.5">{n.h}</h3>
                <p className="text-ink-3 leading-relaxed">{n.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-5">
            The audit is the right first step for almost everyone.
          </h2>
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
