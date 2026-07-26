import type { Metadata } from 'next'

// Added 2026-07-26. page.tsx here is a client component ('use client'), and a
// client component cannot export `metadata` in the App Router. That is why this
// page had none, and why it silently inherited the root title: it shipped a
// search-result entry identical to the homepage and to the fenced-up case
// study. Three pages, one title, competing with each other.
//
// A layout is the correct place for metadata on a client page. Do not move this
// back into page.tsx unless that file stops being a client component.
export const metadata: Metadata = {
  title: 'Add an AI revenue stream to your agency | Playground Giants',
  description:
    'White-label AI automation for agencies. You keep the client relationship, I build and run the systems behind it.'
}

export default function AgencyPartnerLayout({ children }: { children: React.ReactNode }) {
  return children
}
