'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CAL_LINKS } from '@/lib/constants'

// Manual-glue cost calculator, 2026-07-26. Replaces /calculator-home-services.
//
// 🔴 THE ONE RULE THIS PAGE MUST KEEP: it computes the cost of the CURRENT
// state from the visitor's own inputs, and makes NO claim about savings.
//
// Every calculator of this kind is tempted to end with "you could save 60%".
// That number would be invented, and this site removed an invented statistic
// from its homepage on 2026-07-24 precisely because one unverifiable figure is
// enough to end the conversation with a lawyer or a physician. The honest
// version is more persuasive anyway: the visitor does their own arithmetic and
// reaches their own conclusion, and the audit is what tells them which parts
// are actually safe to remove.
//
// If anyone later adds a "potential savings" output, they have reintroduced the
// exact thing that was deliberately taken out.

const CURRENCY = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
})

/** Weeks worked per year, after a conservative allowance for leave. */
const WORKING_WEEKS = 46

type Field = {
  id: string
  label: string
  hint: string
  min: number
  max: number
  step: number
}

const FIELDS: Field[] = [
  {
    id: 'people',
    label: 'People doing manual coordination',
    hint: 'Anyone retyping intake, chasing referrals, or assembling reports by hand.',
    min: 1,
    max: 25,
    step: 1
  },
  {
    id: 'hours',
    label: 'Hours a week each of them spends on it',
    hint: 'Just the glue between systems. Not their actual work.',
    min: 1,
    max: 40,
    step: 1
  },
  {
    id: 'rate',
    label: 'Loaded hourly cost per person',
    hint: 'Salary plus employment costs, divided by hours. A rough figure is fine.',
    min: 15,
    max: 250,
    step: 5
  }
]

export default function CalculatorPage() {
  const [people, setPeople] = useState(3)
  const [hours, setHours] = useState(6)
  const [rate, setRate] = useState(45)

  const values: Record<string, number> = { people, hours, rate }
  const setters: Record<string, (n: number) => void> = {
    people: setPeople,
    hours: setHours,
    rate: setRate
  }

  const hoursPerWeek = people * hours
  const hoursPerYear = hoursPerWeek * WORKING_WEEKS
  const costPerYear = hoursPerYear * rate
  const weeksOfOnePerson = Math.round(hoursPerYear / 40)

  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <section className="pt-36 pb-14 md:pt-44 border-b border-line-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-6">
            Free, no email required
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-ink mb-6">
            What is the manual work actually costing you?
          </h1>
          <p className="font-display text-lg text-ink-2 leading-relaxed">
            Not the software. The hours in the gaps between it: the intake retyped into a second
            tool, the referral chased from memory, the report assembled by hand every month.
          </p>
          <p className="text-base text-ink-3 leading-relaxed mt-4">
            Three numbers, your own figures. Nothing is sent anywhere and there is no email gate.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 border-b border-line-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7">
            {FIELDS.map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="block font-display text-lg font-semibold text-ink mb-1"
                >
                  {f.label}
                </label>
                <p className="text-sm text-ink-3 mb-3">{f.hint}</p>
                <div className="flex items-center gap-4">
                  <input
                    id={f.id}
                    type="range"
                    min={f.min}
                    max={f.max}
                    step={f.step}
                    value={values[f.id]}
                    onChange={(e) => setters[f.id](Number(e.target.value))}
                    className="flex-1 accent-blue-deep"
                    aria-describedby={`${f.id}-value`}
                  />
                  <output
                    id={`${f.id}-value`}
                    htmlFor={f.id}
                    className="font-display text-2xl font-semibold text-ink tabular-nums min-w-[4.5rem] text-right"
                  >
                    {f.id === 'rate' ? CURRENCY.format(values[f.id]) : values[f.id]}
                  </output>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 border-b border-line-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-6">
            Your figures
          </p>

          <div className="rounded-2xl border border-line bg-card p-7 md:p-9 shadow-[0_2px_10px_rgba(26,19,8,0.04)]">
            <div className="font-display text-5xl md:text-6xl font-semibold text-ink tracking-tight tabular-nums">
              {CURRENCY.format(costPerYear)}
            </div>
            <p className="text-ink-2 mt-2">
              a year, spent on the glue between your systems
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mt-8 pt-7 border-t border-line-soft">
              <div>
                <div className="font-display text-2xl font-semibold text-ink tabular-nums">
                  {hoursPerWeek.toLocaleString()}
                </div>
                <div className="text-sm text-ink-3 mt-1">hours a week, across the team</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-ink tabular-nums">
                  {hoursPerYear.toLocaleString()}
                </div>
                <div className="text-sm text-ink-3 mt-1">hours a year</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-ink tabular-nums">
                  {weeksOfOnePerson.toLocaleString()}
                </div>
                <div className="text-sm text-ink-3 mt-1">
                  full-time weeks of one person
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-ink-3 mt-5 leading-relaxed">
            Calculated as people &times; hours &times; {WORKING_WEEKS} working weeks &times; your
            hourly cost. That is the cost of the current state, and it is the only number on this
            page. <strong className="text-ink-2 font-semibold">
              There is deliberately no savings estimate here
            </strong>, because any figure I put on it before looking at your actual workflow would
            be a guess dressed as a result.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-5">
            The number is the easy part. Which hours are safe to remove is not.
          </h2>
          <p className="text-ink-2 leading-relaxed mb-4">
            Some of that time is genuinely mechanical and can go. Some of it is judgment that
            happens to look mechanical, and automating it is how a regulated practice gets into
            trouble. Telling those apart is what the Workflow Audit does.
          </p>
          <p className="text-ink-3 leading-relaxed mb-9">
            Two weeks, $2,500, and a written report that marks each step as safe to automate,
            needs a human checkpoint, or should stay manual. If you go on to a build within ninety
            days, the fee comes off the build price. If the answer is that you do not need
            automation, the report says that instead.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/workflow-audit"
              className="px-7 py-3.5 rounded-xl bg-ink text-paper font-semibold hover:bg-ink-2 transition-colors"
            >
              See what the audit covers
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

      <Footer />
    </div>
  )
}
