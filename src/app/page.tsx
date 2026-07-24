import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CAL_LINKS } from '@/lib/constants'

// Repositioned 2026-07-24.
//
// What changed and why, so nobody quietly reverts it:
//
// 1. POSITIONING. The old page sold local SEO to roofing/HVAC/fencing/medspa.
//    The actual book of business is a NYC personal-injury firm, an orthopaedic
//    practice, and a music/merch umbrella. Every visitor was being anchored to
//    the wrong offer and the wrong price before reading a word.
//
// 2. THE FABRICATED STAT IS GONE. The old page claimed "We cut your cost-per-lead
//    by 40%+". That number was invented. For a lawyer or a physician evaluating
//    an AI vendor, one unverifiable number is enough to end the conversation.
//    Nothing on this page is a metric that cannot be shown.
//
// 3. "I", NOT "WE". Playground Giants is one person. For this buyer that is a
//    strength: they are hiring a named senior person, not an anonymous bench.
//
// 4. THE MOTION IS GONE. Removed the blur-[120px] gradient orbs, the logo
//    marquee, the bouncing scroll pill, and the animated gradient text. The
//    palette was already the cream editorial one (rebrand be05090, 2026-07-05);
//    what still read as "startup" was the movement, not the colour. This buyer
//    reads restraint as competence, and the site should feel like the proposal
//    PDF they will receive later.
export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-line-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-6">
            AI automation for regulated work
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.02] tracking-tight text-ink mb-7 max-w-4xl">
            AI that does the busywork.
            <br />
            <span className="italic text-blue-deep">A human still makes the call.</span>
          </h1>

          <p className="font-display text-lg sm:text-xl text-ink-2 max-w-2xl leading-relaxed mb-4">
            I build automation for firms and practices where a wrong answer has consequences.
            The AI sorts, extracts, drafts and routes. The judgment stays with your people,
            and every step leaves an audit trail.
          </p>
          <p className="text-base text-ink-3 max-w-2xl leading-relaxed mb-10">
            I build it inside the systems and the compliance you already have, on accounts
            you own. If we stop working together, you keep all of it.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
              Or book a 15 minute call
            </a>
          </div>
        </div>
      </section>

      {/* ── The problem ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-line-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-5 max-w-3xl">
            The friction is rarely the software. It is the manual glue between it.
          </h2>
          <p className="text-ink-2 max-w-2xl mb-10 leading-relaxed">
            Most firms and practices I meet already run good systems. What costs them time is
            everything happening by hand in the gaps: the intake retyped into a second tool,
            the referral chased from memory, the email that got missed because the right person
            was not copied, the report that runs wrong because a name is spelled four ways.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                h: 'Work that arrives faster than anyone can triage it',
                p: 'Leads, referrals and requests land in three places at once. Whoever is free grabs them. Nothing records why a decision was made.'
              },
              {
                h: 'The good stuff buried in the routine stuff',
                p: 'The urgent case looks identical to the tyre-kicker until someone reads it properly, and reading everything properly is the bottleneck.'
              },
              {
                h: 'AI that nobody trusts enough to turn on',
                p: 'The tools can draft and summarise. What stops adoption is not capability, it is the question of what happens when it is confidently wrong.'
              }
            ].map((c) => (
              <div key={c.h} className="rounded-2xl border border-line bg-card p-6">
                <h3 className="font-display text-lg font-semibold text-ink mb-2 leading-snug">
                  {c.h}
                </h3>
                <p className="text-sm text-ink-3 leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The method — the actual differentiator ───────────────────────── */}
      <section id="how-it-works" className="py-20 md:py-24 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-4">
            How I keep AI out of the judgment call
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-5 max-w-3xl">
            The model reads. It does not decide.
          </h2>
          <p className="text-ink-2 max-w-2xl mb-10 leading-relaxed">
            This is the part that makes the rest safe to adopt, and it is an architectural
            choice rather than a promise. In the intake systems I build, the language model
            is used only to pull facts out of unstructured text. The decision that follows is
            made by ordinary code with rules your professionals wrote and can read.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                n: '01',
                h: 'The model extracts. Nothing else.',
                p: 'It turns a messy message into structured facts: what happened, when, where, who else is involved. It is never asked whether something is good, valuable, or worth taking.'
              },
              {
                n: '02',
                h: 'Rules you own make the decision.',
                p: 'Deadlines, thresholds, conflict checks and routing run as plain deterministic code. Same input, same output, every time. Your people can read the rule and change it.'
              },
              {
                n: '03',
                h: 'It fails toward a human.',
                p: 'If the model is unavailable, uncertain, or the input is strange, the work routes to a person rather than being guessed at or dropped. An outage never silently loses anything.'
              },
              {
                n: '04',
                h: 'Everything leaves a record.',
                p: 'An append-only log of what came in, what was extracted, which rule fired, who acted and when. If anyone ever asks how a decision was made, the answer exists.'
              }
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-line bg-card p-6">
                <div className="font-display text-2xl font-semibold text-blue-deep mb-2">{s.n}</div>
                <h3 className="font-display text-lg font-semibold text-ink mb-2 leading-snug">
                  {s.h}
                </h3>
                <p className="text-sm text-ink-3 leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-ink-3 mt-8 max-w-2xl leading-relaxed">
            In regulated work this distinction is not academic. It is the difference between a
            tool that assists your professionals and one that quietly practises on their behalf.
          </p>
        </div>
      </section>

      {/* ── What I build ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-line-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-10">
            What I actually build
          </h2>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-7">
            {[
              {
                h: 'Intake and qualification',
                p: 'Every enquiry captured in one place, facts extracted, graded against your own rules, routed to the right person with a response clock attached.'
              },
              {
                h: 'The manual glue removed',
                p: 'Shared inboxes that route themselves, trackers that stop being spreadsheets, weekly chase lists, one-click summaries, data cleaned so reporting is trustworthy.'
              },
              {
                h: 'Acquisition wired end to end',
                p: 'Paid search, profile and call tracking connected through to what actually became a client, so spend is judged on signed work rather than on clicks.'
              },
              {
                h: 'Findability, including by AI',
                p: 'Structured data, technical fixes, and the files answer engines read. Increasingly your next client asks an assistant before they ask Google.'
              },
              {
                h: 'Reporting with a human gate',
                p: 'Internal digests daily, client-facing reports drafted for your approval before anything is sent. Nothing goes out over your name unreviewed.'
              },
              {
                h: 'Compliance treated as a deliverable',
                p: 'Advertising rules, messaging registration, disclaimers, records retention, and sign-off from your own counsel where it is warranted.'
              }
            ].map((s) => (
              <div key={s.h}>
                <h3 className="font-display text-lg font-semibold text-ink mb-1.5">{s.h}</h3>
                <p className="text-sm text-ink-3 leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proof ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-3">
            Work I can point at
          </h2>
          <p className="text-ink-3 mb-9 max-w-2xl text-sm leading-relaxed">
            Client engagements are described without naming the client. Where a number is not
            shown, it is because it is theirs to share rather than mine.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <Link
              href="/case-studies/personal-injury-intake"
              className="rounded-2xl border border-line bg-card p-6 hover:border-canary/50 transition-colors"
            >
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-blue-deep mb-3">
                Legal
              </p>
              <h3 className="font-display text-lg font-semibold text-ink mb-2 leading-snug">
                A New York personal injury firm
              </h3>
              <p className="text-sm text-ink-3 leading-relaxed mb-3">
                Graded intake, response clocks, an audit trail built for a regulator, and paid
                acquisition connected to signed cases. The grading architecture above came from
                this build.
              </p>
              <span className="text-sm font-semibold text-blue-deep">Read the case study</span>
            </Link>

            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-blue-deep mb-3">
                Medical
              </p>
              <h3 className="font-display text-lg font-semibold text-ink mb-2 leading-snug">
                An orthopaedic practice, 18 years of records
              </h3>
              <p className="text-sm text-ink-3 leading-relaxed">
                Referral tracking and a self-routing team inbox, built inside the Google
                Workspace and the agreement they already had. Nothing new to sign, no patient
                data anywhere new, AI confined to the back office.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-blue-deep mb-3">
                My own product
              </p>
              <h3 className="font-display text-lg font-semibold text-ink mb-2 leading-snug">
                Enkily, live on the App Store
              </h3>
              <p className="text-sm text-ink-3 leading-relaxed">
                An AI capture app I designed, built and shipped myself. Speech handled on
                device, model calls gated behind explicit consent. I build AI products, not
                just wire up other people&apos;s.
              </p>
            </div>
          </div>

          <p className="text-sm text-ink-3 mt-7">
            Earlier local search work, including a Houston fencing company, is written up in the{' '}
            <Link href="/case-studies/fenced-up" className="text-blue-deep font-semibold hover:underline">
              Fenced Up case study
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Engagement ladder ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-line-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-3">
            How engagements work
          </h2>
          <p className="text-ink-2 mb-9 max-w-2xl leading-relaxed">
            Almost everyone starts with the audit. It is the only way either of us can scope a
            build honestly, and what you pay for it comes off the build if you go ahead.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                n: 'One',
                t: 'The Workflow Audit',
                price: '$2,500',
                p: 'Two weeks. I map where the manual work actually is, what is safe to automate, what has to stay human, and what a build would cost. Yours to keep either way.'
              },
              {
                n: 'Two',
                t: 'Build the system',
                price: '$6,000 to $25,000',
                p: 'One or two workflows taken end to end into production. Scoped at the audit, billed against milestones, built on accounts in your name.'
              },
              {
                n: 'Three',
                t: 'Run it with you',
                price: 'from $1,500 per month',
                p: 'Monitoring, tuning, reporting and the next phase. Three bands depending on how much of the operation you want me holding.'
              }
            ].map((t) => (
              <div key={t.t} className="rounded-2xl border border-line bg-card p-6 flex flex-col">
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-ink-3 mb-2">
                  Step {t.n}
                </p>
                <h3 className="font-display text-xl font-semibold text-ink mb-1">{t.t}</h3>
                <p className="font-display text-lg font-semibold text-blue-deep mb-3">{t.price}</p>
                <p className="text-sm text-ink-3 leading-relaxed">{t.p}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/packages" className="text-blue-deep font-semibold hover:underline">
              Full detail on what is included at each stage
            </Link>
          </div>
        </div>
      </section>

      {/* ── Close ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-5">
            Start by finding out what is worth automating.
          </h2>
          <p className="text-ink-2 mb-9 leading-relaxed">
            Fifteen minutes is enough for me to tell you whether there is anything here worth
            paying for. If there is not, I will say so.
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

      <Footer />
    </div>
  )
}
