import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.playgroundgiants.com'),
  title: 'Playground Giants — Local Search Domination for Home Services',
  description:
    'We help roofing, HVAC, fencing, and home service companies dominate local search. More leads. Better rankings. Real results.',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/webclip.png'
  },
  openGraph: {
    title: 'Playground Giants — Local Search Domination for Home Services',
    description:
      'We help roofing, HVAC, fencing, and home service companies dominate local search. More leads. Better rankings. Real results.',
    images: ['/images/og_image_charcoal.png'],
    siteName: 'Playground Giants'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playground Giants — Local Search Domination for Home Services',
    description:
      'We help roofing, HVAC, fencing, and home service companies dominate local search. More leads. Better rankings. Real results.'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/*
          Server-rendered JSON-LD. This was previously a `next/script` block,
          which injects the tag CLIENT-SIDE — so a raw-HTML fetch of the
          homepage returned NO parseable structured data at all. A 2026-07-24
          audit caught it: enkily.ai and binderlawpc.com both exposed valid
          schema in their served HTML, and the agency's own site exposed none.
          That matters most for the crawlers this site is meant to win: AI
          answer engines read raw HTML and generally do not execute JS.

          Rendering the tag directly (not via <Script>) puts it in the served
          document. Do NOT convert this back to next/script.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Playground Giants',
              url: 'https://www.playgroundgiants.com',
              description:
                'Local search domination for home services — SEO, Google Business Profile, and lead generation.',
              author: {
                '@type': 'Person',
                name: 'Jimmy Hackett'
              },
              publisher: {
                '@type': 'Organization',
                name: 'Playground Giants',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.playgroundgiants.com/images/White-logo---no-background.svg'
                }
              }
            })
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
