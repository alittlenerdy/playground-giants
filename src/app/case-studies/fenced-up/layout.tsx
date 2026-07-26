import type { Metadata } from 'next'

// Added 2026-07-26. Same reason as /agency-partner: page.tsx is a client
// component and cannot export metadata, so this page inherited the root title
// and was indistinguishable from the homepage in search results.
//
// The H1 claims a specific "147%" figure. That number is NOT repeated here on
// purpose: the site deliberately removed unverifiable stats in the 2026-07-24
// rewrite, and putting a number into the SERP entry is a stronger claim than
// leaving it in body copy next to the dashboard screenshots that support it.
export const metadata: Metadata = {
  title: 'Case study: scaling local revenue for a fencing company',
  description:
    'A full build for a local fencing company: Webflow site, tracking, local visibility, and the reporting to see what the spend actually returned.'
}

export default function FencedUpLayout({ children }: { children: React.ReactNode }) {
  return children
}
