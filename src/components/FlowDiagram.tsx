// Hero flow diagram, added 2026-07-26.
//
// Why this exists, and why it looks the way it does, so nobody flattens it:
//
// 1. IT IS INFORMATION, NOT DECORATION. The 2026-07-24 rewrite of page.tsx
//    deliberately stripped the orbs, the logo marquee and the animated gradient
//    text, on the reasoning that "this buyer reads restraint as competence, and
//    the site should feel like the proposal PDF they will receive later."
//    A proposal PDF has diagrams. This is that, not a re-opened door for motion.
//    It is static. Do not animate it.
//
// 2. THE MODEL IS THE QUIETEST BOX ON PURPOSE. Every AI vendor draws the model
//    as the hero of the pipeline. The entire pitch here is that the model does
//    not decide, so the two steps the client owns carry the visual weight and
//    the two assistive steps are dashed and muted. If someone "fixes" the
//    inconsistent borders, the diagram stops making its argument.
//
// 3. HTML, NOT SVG. An SVG would need separate mobile artwork and its labels
//    would not be real text. Divs reflow to a vertical stack on small screens,
//    inherit the palette tokens so they cannot drift, and stay selectable and
//    readable by a screen reader.
//
// Copy is lifted from the section headings further down the page on purpose,
// so the diagram and the prose say the same thing in the same words.

type Step = {
  label: string
  detail: string
  /** Assistive steps are dashed and muted. Owned steps are solid and dark. */
  owned: boolean
}

const STEPS: Step[] = [
  { label: 'Intake', detail: 'email, form, phone', owned: false },
  { label: 'The model extracts', detail: 'nothing else', owned: false },
  { label: 'Rules you own decide', detail: 'thresholds you set', owned: true },
  { label: 'A human makes the call', detail: 'it fails toward a person', owned: true }
]

const DESCRIPTION =
  'How the system works: intake arrives by email, form or phone. The model extracts fields and nothing else. ' +
  'Rules you own make the decision using thresholds you set. A human makes the final call, and anything ' +
  'uncertain fails toward a person. Every step leaves an audit trail.'

function Arrow() {
  return (
    <div className="flex items-center justify-center text-ink-3/50 md:px-1" aria-hidden="true">
      {/* Down on mobile where the steps stack, right on desktop where they run across. */}
      <svg
        className="h-4 w-4 rotate-90 md:rotate-0"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h11M9 4l4 4-4 4" />
      </svg>
    </div>
  )
}

export default function FlowDiagram() {
  return (
    <figure className="mt-14 md:mt-16" role="img" aria-label={DESCRIPTION}>
      <div className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-0">
        {STEPS.map((step, i) => (
          <div key={step.label} className="contents">
            <div
              className={[
                'flex-1 rounded-xl px-4 py-3.5 md:px-4 md:py-4',
                step.owned
                  ? 'border border-ink/20 bg-card shadow-[0_2px_8px_rgba(26,19,8,0.04)]'
                  : 'border border-dashed border-line bg-transparent'
              ].join(' ')}
            >
              <div
                className={[
                  'text-[13px] md:text-sm font-semibold leading-snug',
                  step.owned ? 'text-ink' : 'text-ink-3'
                ].join(' ')}
              >
                {step.label}
              </div>
              <div
                className={[
                  'mt-1 text-xs leading-snug',
                  step.owned ? 'text-ink-2' : 'text-ink-3/80'
                ].join(' ')}
              >
                {step.detail}
              </div>
            </div>
            {i < STEPS.length - 1 && <Arrow />}
          </div>
        ))}
      </div>

      {/* The audit rail. "Everything leaves a record" is the fourth pillar in the
          copy below and the thing regulated buyers actually ask about. */}
      <div className="mt-3 flex items-center gap-3" aria-hidden="true">
        <div className="h-px flex-1 bg-sage/30" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sage whitespace-nowrap">
          Every step leaves an audit trail
        </span>
        <div className="h-px flex-1 bg-sage/30" />
      </div>
    </figure>
  )
}
