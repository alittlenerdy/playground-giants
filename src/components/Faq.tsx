// Shared FAQ block: renders the visible questions AND the FAQPage schema from
// one source, added 2026-07-26.
//
// Why one component rather than repeating the pattern per page:
//
// A live audit of all four properties found FAQ markup on ONE of this site's
// fourteen pages, while ReplySequence carries it on 120 of 165. The agency
// selling this service had almost none of it. The pattern already existed on
// /workflow-audit and simply never spread, so the fix is to make spreading it
// cheap rather than to write the same twenty lines again.
//
// 🔴 The schema and the visible list are generated from the SAME array on
// purpose. Structured data that does not match what a reader sees is a Google
// policy violation, not a shortcut, and the usual way that happens is a
// well-meaning edit to one copy of the content. There is only one copy here.

export type FaqItem = {
  /** The question, phrased the way someone would actually ask it. */
  q: string;
  /** Plain-text answer. Keep it to what is true and checkable on this page. */
  a: string;
};

export default function Faq({
  items,
  heading = 'Questions people ask'
}: {
  items: FaqItem[];
  heading?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="py-16 md:py-20 border-b border-line-soft">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Server-rendered so answer engines read it without executing JS. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: items.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a }
              }))
            }).replace(/</g, '\\u003c')
          }}
        />

        <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink mb-9">
          {heading}
        </h2>
        <div className="space-y-7">
          {items.map((f) => (
            <div key={f.q}>
              <h3 className="font-display text-lg font-semibold text-ink mb-1.5">{f.q}</h3>
              <p className="text-ink-3 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
