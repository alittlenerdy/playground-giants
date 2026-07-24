import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CAL_LINKS } from '@/lib/constants'

// Anonymized case study, 2026-07-24. Framing decision worth recording:
//
// This engagement has NOT been built. Discovery and the phased plan were
// delivered; the build is gated on the client's go-ahead and has not started.
// Writing this up as a transformation story would be a lie, so it is written
// as what it actually is: a worked example of the diagnosis phase, which is
// exactly the artifact the Workflow Audit sells.
//
// That makes it more useful than a fabricated outcome page, because a prospect
// deciding whether to pay $2,500 for an audit wants to see what an audit
// produces, not what someone else's finished system looks like.
//
// Anonymization: no practice name, no physician name, no city, and the EHR
// vendor is deliberately not named. Specialty plus vendor plus region would
// narrow this to a handful of practices. "Their EHR" is enough for the point.
export const metadata: Metadata = {
  title: 'Case study: what a workflow audit found in a medical practice',
  description:
    'A worked example of the diagnosis phase. What the audit found inside a long-established specialist practice, what was safe to automate, what had to stay human, and why the plan started smaller than expected.'
}

export default function MedicalPracticeAudit() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <section className="pt-36 pb-14 md:pt-44 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-6">
            Case study · Medical · Diagnosis phase
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-ink mb-6">
            The systems were fine. Everything between them was being done by hand.
          </h1>
          <p className="font-display text-lg text-ink-2 leading-relaxed">
            A specialist physician practice with eighteen years of accumulated case records,
            a capable EHR, and a team that was still retyping the same information into three
            places. The practice is not named here.
          </p>
        </div>
      </section>

      {/* ── Status honesty ───────────────────────────────────────────────── */}
      <section className="py-10 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-line bg-card px-6 py-5">
            <h2 className="font-display text-lg font-semibold text-ink mb-2">
              What stage this is at
            </h2>
            <p className="text-sm text-ink-3 leading-relaxed">
              This is a write-up of the diagnosis, not of a finished build. The audit was
              delivered and the phased plan is with the practice; the build is gated on their
              go-ahead and has not begun. It is published because the diagnosis is the part
              most people have never seen, and it is exactly what the Workflow Audit produces.
              There are no outcome numbers on this page because there are no outcomes yet.
            </p>
          </div>
        </div>
      </section>

      {/* ── What the audit found ─────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            What the audit found
          </h2>
          <p className="text-ink-2 mb-8 leading-relaxed">
            The practice was not disorganised, which is the usual assumption and the usual
            mistake. The EHR handled scheduling, records and reporting well. The billing
            software was genuinely good. The case log carried eighteen years of hard-won
            structure. The cost was in the gaps between those systems, where a person was
            doing the joining.
          </p>

          <div className="space-y-4">
            {[
              {
                h: 'Referrals logged and chased from memory',
                p: 'Every referral entered by hand, one at a time, and followed up when somebody remembered. No single list of what was outstanding, so the chase depended on whoever was paying attention that week.'
              },
              {
                h: 'Email as the coordination layer',
                p: 'Messages scattered across departments, so the workaround had become copying everyone on everything. Things still slipped. The clearest example was a week lost because the one person who needed to see a message was the one person not copied.'
              },
              {
                h: 'No single at-a-glance view',
                p: 'Status lived in people’s heads and in a spreadsheet that had to be re-typed from what the EHR already knew. The same fact was being entered two and three times.'
              },
              {
                h: 'Reporting quietly wrong',
                p: 'The same physician’s name spelled four different ways across records, so any report grouping by provider was subtly incorrect. Nobody had noticed because the numbers looked plausible.'
              }
            ].map((f) => (
              <div key={f.h} className="rounded-xl border border-line bg-card px-6 py-5">
                <h3 className="font-display text-base font-semibold text-ink mb-1.5">{f.h}</h3>
                <p className="text-sm text-ink-3 leading-relaxed">{f.p}</p>
              </div>
            ))}
          </div>

          <p className="text-ink-2 mt-7 leading-relaxed">
            The last one is worth dwelling on. A data hygiene problem that nobody can see is
            more dangerous than a workflow problem everybody complains about, because decisions
            get made on the bad numbers with full confidence.
          </p>
        </div>
      </section>

      {/* ── What was safe, what was not ──────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-8">
            What was safe to automate, and what was not
          </h2>
          <div className="grid md:grid-cols-2 gap-7">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-4">
                Safe, and worth doing first
              </h3>
              <ul className="space-y-2.5">
                {[
                  'Routing incoming email to the right person automatically, so nothing depends on remembering to copy someone',
                  'Logging a referral in one action instead of by hand',
                  'Generating the weekly list of what is outstanding and who to chase',
                  'Producing a summary for a scheduled review, from records that already exist',
                  'Normalising provider names so reporting stops being wrong'
                ].map((i) => (
                  <li key={i} className="flex gap-2.5 text-ink-2 text-sm leading-relaxed">
                    <span className="text-sage font-bold shrink-0">+</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-4">
                Off the table entirely
              </h3>
              <ul className="space-y-2.5">
                {[
                  'Anything patient-facing. No AI talking to patients, in any channel',
                  'Anything clinical. No triage, no prioritisation by medical urgency, no interpretation of records',
                  'Any decision a clinician is professionally accountable for',
                  'Moving patient information anywhere it was not already held'
                ].map((i) => (
                  <li key={i} className="flex gap-2.5 text-ink-2 text-sm leading-relaxed">
                    <span className="text-ink-3 font-bold shrink-0">&minus;</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-card px-6 py-5 mt-8">
            <p className="text-ink-2 leading-relaxed">
              The dividing line was simple enough to state in one sentence to the practice:{' '}
              <span className="font-semibold text-ink">
                the AI works in the back office only, sorting and summarising and reminding.
                Never patients, never clinical decisions.
              </span>{' '}
              A boundary a physician can repeat from memory is a boundary that survives contact
              with a busy week.
            </p>
          </div>
        </div>
      </section>

      {/* ── The compliance finding ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-4">
            The finding that changed the plan
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            They could build the first phase without signing anything new.
          </h2>
          <p className="text-ink-2 mb-5 leading-relaxed">
            The default assumption going into a project like this is that new capability means
            new vendors, new agreements, and a legal review that adds months. Checking rather
            than assuming turned up something better: the practice had held a suitable agreement
            with their existing platform provider since 2018, and the entire first phase could
            be built inside it.
          </p>
          <p className="text-ink-2 mb-7 leading-relaxed">
            That single finding reshaped the sequencing. The work that required no new
            paperwork, no new system for staff to learn, and no patient data moving anywhere
            new became phase one. The work that would require a separate agreement, covering
            the more advanced querying, was pushed to a later phase to be scoped only once the
            earlier work had proved itself.
          </p>
          <div className="rounded-2xl border border-line bg-card px-6 py-5">
            <p className="text-sm text-ink-3 leading-relaxed">
              This is the sort of thing an audit is for. It is not a technical insight and it
              is not clever. It is just the result of reading the existing agreements before
              designing the system rather than after, and it removed the slowest step from the
              project.
            </p>
          </div>
        </div>
      </section>

      {/* ── The plan ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-5">
            The plan that came out of it
          </h2>
          <p className="text-ink-2 mb-8 leading-relaxed">
            Three phases, each one gated on the last having earned its place. The practice can
            stop after any of them and still be better off than before.
          </p>

          <div className="space-y-4">
            {[
              {
                n: 'Phase one',
                t: 'Referrals and one shared inbox',
                p: 'A single team inbox that routes messages to the right person automatically, plus a referral tracker with one-action logging and a weekly chase list. Ends the manual logging and the missed hand-offs. Built entirely inside what the practice already runs and already has covered.',
                tag: 'Start here'
              },
              {
                n: 'Phase two',
                t: 'The case log becomes an application',
                p: 'The spreadsheet view rebuilt as a proper app, organised by referrer and by status, with one-click summaries for scheduled reviews and a scorecard showing which referral sources actually send work. Provider names locked to a fixed list so reporting is finally trustworthy.',
                tag: 'When ready'
              },
              {
                n: 'Phase three',
                t: 'Ask the data questions, and connect the EHR',
                p: 'Plain-English querying across cases, and a link to the EHR so an update in one place appears in the other and the duplicate entry ends. Scoped last deliberately: what is possible depends entirely on what the vendor opens up, and that gets confirmed before anything is promised.',
                tag: 'Scoped as we go'
              }
            ].map((p) => (
              <div key={p.n} className="rounded-2xl border border-line bg-card overflow-hidden">
                <div className="px-6 py-4 bg-cream-2/70 border-b border-line-soft flex flex-wrap justify-between items-baseline gap-3">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.1em] uppercase text-ink-3 mr-3">
                      {p.n}
                    </span>
                    <span className="font-display text-lg font-semibold text-ink">{p.t}</span>
                  </div>
                  <span className="text-xs font-semibold tracking-[0.08em] uppercase text-blue-deep">
                    {p.tag}
                  </span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-ink-3 leading-relaxed">{p.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lessons ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink mb-8">
            What this shows about the diagnosis phase
          </h2>
          <div className="space-y-6">
            {[
              {
                h: 'The answer is usually smaller than the pitch',
                p: 'Nothing in phase one is technically impressive. A routing inbox and a tracker are not the future of medicine. They are what would actually give this practice its week back, and an audit that recommended something grander would have been serving me rather than them.'
              },
              {
                h: 'Read the agreements before designing the system',
                p: 'The most valuable finding was that they could build inside what they already had. That came from reading paperwork, not from technical work, and it removed months from the timeline.'
              },
              {
                h: 'Name what you will not automate, early and plainly',
                p: 'Stating the boundary in one memorable sentence did more for confidence than any capability demonstration. In regulated work, the limits are the product.'
              },
              {
                h: 'Find the errors nobody is complaining about',
                p: 'The provider-name inconsistency was not on anyone’s list of problems. It was quietly corrupting every report. Those are the findings worth paying for, because by definition nobody was going to ask for them.'
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
            This is what the audit produces.
          </h2>
          <p className="text-ink-2 mb-9 leading-relaxed">
            A map of where the manual work is, a clear line around what should stay human, a
            compliance answer, and a phased plan you can stop after at any point.
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
