import type { Metadata } from 'next'
import { pageTitle } from '@/lib/seo-title'

// Replaces /calculator-home-services, 2026-07-26.
//
// The old page was a legacy Webflow export selling lost-CRM-revenue to home
// service businesses, a positioning the 2026-07-24 rewrite deliberately
// abandoned. It also was not a calculator: it had a "Calculate My Lost Revenue"
// button anchored to a #calculator section that did not exist.
//
// page.tsx here is a client component, so metadata lives in this layout. See
// /agency-partner for the same pattern and the reason.
export const metadata: Metadata = {
  title: pageTitle('What is the manual work costing you?'),
  description:
    'A short calculator that prices the hours your team spends retyping, chasing, and reporting by hand. Your numbers, your arithmetic, no benchmarks invented.',
  alternates: { canonical: 'https://www.playgroundgiants.com/calculator' }
}

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
