import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CAL_LINKS } from '@/lib/constants'

// Anonymized case study, 2026-07-24. Rules applied here, deliberately:
//
// 1. NO CLIENT NAME. Agreed level of disclosure is "a New York personal injury
//    firm". No firm name, no attorney names, no address, no co-counsel detail,
//    and no commercial terms, since those are the client's to disclose.
// 2. NO OUTCOME METRICS. The engagement has not reached its Day-30 measurement
//    point and paid acquisition has not launched. There is therefore no
//    cost-per-case or lead-volume number that could honestly be printed, so
//    none is. Saying so plainly is better than implying results exist.
// 3. WHAT IS CLAIMED IS WHAT WAS BUILT. Every item below is work actually
//    delivered and verifiable in the engagement record.
//
// If the client later grants permission to be named and there are real numbers
// to publish, this page gets upgraded rather than replaced.
export const metadata: Metadata = {
  title: 'Case study: intake and grading for a New York personal injury firm',
  description:
    'Graded intake, response clocks and a regulator-ready audit trail for a NYC personal injury firm. The AI extracts facts. It never decides merit.'
}

export default function PersonalInjuryIntake() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <section className="pt-36 pb-14 md:pt-44 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-6">
            Case study · Legal · New York
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-ink mb-6">
            Intake that grades itself, without the AI deciding whether a case has merit.
          </h1>
          <p className="font-display text-lg text-ink-2 leading-relaxed">
            A personal injury firm in New York City, practising across the five boroughs and
            Long Island. The firm is not named here at their preference. Everything described
            below was built and is running.
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
              There are no performance numbers on this page. The engagement has not yet reached
              its first formal measurement point and paid acquisition has not gone live, so any
              cost-per-case or lead-volume figure I printed today would be a projection dressed
              as a result. When there are real numbers and permission to publish them, they
              will appear here. In the meantime this is a description of what was built and why
              it is built that way, which is the part that is actually transferable.
            </p>
          </div>
        </div>
      </section>

      {/* ── The situation ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            The situation
          </h2>
          <p className="text-ink-2 mb-5 leading-relaxed">
            The firm had a live website, a real caseload, and an intention to start advertising.
            What it did not have was a reliable path from an enquiry to a decision. Enquiries
            arrived by phone and by form, were triaged from memory, and left no record of why
            anyone had said yes or no.
          </p>
          <p className="text-ink-2 mb-7 leading-relaxed">
            Before any of the automation work, an audit of the existing site turned up several
            problems that would have quietly wasted the entire advertising budget.
          </p>

          <div className="space-y-4">
            {[
              {
                h: 'Almost nowhere to convert',
                p: 'A single phone link per page, sitting near the very bottom of the document, and a homepage with no enquiry form at all. Paid traffic would have arrived and left.'
              },
              {
                h: 'Results claims with nothing behind them',
                p: 'Several prominent figures about past recoveries and case volume that could not be substantiated on request. In a jurisdiction with strict attorney advertising rules, that is a live risk, not a copywriting quibble. They came down before any spend started.'
              },
              {
                h: 'A repealed statute quoted as current law',
                p: 'A practice-area page described a serious-injury threshold using language that was no longer accurate. A prospective client could have relied on it.'
              },
              {
                h: 'The site itself was unreliable on a phone',
                p: 'A structured audit found a long list of layout defects across tablet and mobile, which traced back to about a dozen underlying causes once grouped properly.'
              }
            ].map((p) => (
              <div key={p.h} className="rounded-xl border border-line bg-card px-6 py-5">
                <h3 className="font-display text-base font-semibold text-ink mb-1.5">{p.h}</h3>
                <p className="text-sm text-ink-3 leading-relaxed">{p.p}</p>
              </div>
            ))}
          </div>

          <p className="text-ink-2 mt-7 leading-relaxed">
            None of that is glamorous, and all of it had to be fixed before automation was worth
            building. This is a fairly typical finding: the constraint is rarely the absence of
            AI.
          </p>
        </div>
      </section>

      {/* ── The core design decision ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-4">
            The decision the rest depends on
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            The model extracts facts. Code decides what they mean.
          </h2>
          <p className="text-ink-2 mb-6 leading-relaxed">
            A law firm cannot have software forming a view on whether someone has a case. That
            is a judgment reserved to lawyers, and a system that blurs it creates a problem far
            more expensive than the one it solves. So the grading engine is split in two, and
            the split is architectural rather than a policy written in a document.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-7">
            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="text-xs font-semibold tracking-[0.1em] uppercase text-blue-deep mb-2">
                The language model
              </p>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">
                Reads the message. Extracts facts. Stops.
              </h3>
              <p className="text-sm text-ink-3 leading-relaxed">
                What kind of incident, when it happened, where, whether there was medical
                treatment, who else was involved. Structured fields out of unstructured text.
                It is never asked whether the matter is good, strong, or worth taking.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-card p-6">
              <p className="text-xs font-semibold tracking-[0.1em] uppercase text-blue-deep mb-2">
                Ordinary deterministic code
              </p>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">
                Applies the firm&apos;s own rules to those facts.
              </h3>
              <p className="text-sm text-ink-3 leading-relaxed">
                Limitation periods calculated from dates. Statutory thresholds checked. Conflicts
                matched against existing matters. Same facts in, same grade out, every single
                time, and a lawyer can read the rule and change it.
              </p>
            </div>
          </div>

          <p className="text-ink-2 leading-relaxed">
            The practical consequence is that the firm can describe exactly what its software
            does and does not do, in a sentence, to a regulator or an insurer. The grade is a
            sorting mechanism over facts, not an opinion about a case. Everything else in the
            build sits on top of that distinction.
          </p>
        </div>
      </section>

      {/* ── What was built ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-9">
            What was built
          </h2>
          <div className="grid md:grid-cols-2 gap-x-9 gap-y-6">
            {[
              {
                h: 'One intake path',
                p: 'Website enquiries and calls captured into a single pipeline, so nothing depends on who happened to pick up.'
              },
              {
                h: 'Response clocks with real teeth',
                p: 'Urgent matters carry a thirty minute clock, standard matters a day. The clock is visible, and an unmet one escalates rather than expiring quietly.'
              },
              {
                h: 'Escalation for the serious categories',
                p: 'Certain matters route immediately to a named human regardless of what any grade says. Some things should never wait in a queue.'
              },
              {
                h: 'Fail toward a person, always',
                p: 'If the model is unavailable or unsure, the enquiry goes to a human rather than being guessed at. An outage cannot silently drop work.'
              },
              {
                h: 'An append-only audit trail',
                p: 'Retained for ten years. What arrived, what was extracted, which rule applied, who acted, when. Written once and never edited.'
              },
              {
                h: 'Acquisition connected to outcomes',
                p: 'Paid search, profile listings and call tracking wired so that spend can eventually be judged against signed work rather than clicks.'
              },
              {
                h: 'The findability layer',
                p: 'Structured data, canonical fixes, practice-area content, and the plain-text files that AI answer engines read when someone asks them for a lawyer.'
              },
              {
                h: 'Compliance handled as scope',
                p: 'Attorney advertising requirements, business messaging registration, disclaimers, and sign-off from the firm&apos;s own counsel where it was warranted.'
              },
              {
                h: 'Reporting with an approval gate',
                p: 'Internal digest daily. Anything going to the client is drafted for review and published only on approval. Nothing goes out unreviewed.'
              },
              {
                h: 'Everything in the firm&apos;s name',
                p: 'Hosting, database, analytics and ad accounts all owned by the firm. If they replace me tomorrow they change the passwords and keep operating.'
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

      {/* ── Transferable lessons ─────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-8">
            What carries over to other engagements
          </h2>
          <div className="space-y-6">
            {[
              {
                h: 'Fix the leaks before you turn on the tap',
                p: 'Sending paid traffic to a site with one phone link and no form converts budget into nothing. The unglamorous fixes came first, and they were the highest-return work in the project.'
              },
              {
                h: 'Put the compliance boundary in the architecture',
                p: 'A policy saying the AI will not decide merit is a promise. A system where the model physically cannot reach the decision is a guarantee. Only one of those survives a hard question.'
              },
              {
                h: 'An audit trail is much cheaper to build than to retrofit',
                p: 'It went in on day one. Adding one after the fact means reconstructing history that was never recorded, which usually means it cannot be done.'
              },
              {
                h: 'Client ownership is a feature, not a concession',
                p: 'Building on accounts in the firm&apos;s name removed the entire question of what happens if this does not work out, which made every other decision easier to agree.'
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
            Most of this started as a two week audit.
          </h2>
          <p className="text-ink-2 mb-9 leading-relaxed">
            The conversion holes, the compliance problems and the build sequence all came out of
            mapping the workflow before writing any code.
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
