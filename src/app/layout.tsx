import type { Metadata } from 'next'
import './globals.css'

// Repositioned 2026-07-24. Previously: "Local Search Domination for Home
// Services" / "roofing, HVAC, fencing". That described a business Jimmy no
// longer runs, and anchored every visitor to the wrong offer and the wrong
// price before they read a word of the page.
// Two titles on purpose, split 2026-07-25 after an audit measured the single
// TITLE at 91 characters. Google truncates around 60, so "that cannot afford a
// wrong answer" — the entire differentiator — never rendered in a search
// result. It was doing no work where it cost the most.
//
// TITLE is the SERP title and is kept under 60. TITLE_SOCIAL keeps the full
// positioning line for OG/Twitter cards, where the constraint is far looser and
// the whole sentence actually displays.
const TITLE = 'Playground Giants — AI automation for law firms & practices'
const TITLE_SOCIAL =
  'Playground Giants — AI automation for firms and practices that cannot afford a wrong answer'
const DESCRIPTION =
  'AI automation for law firms, medical practices and regulated operators. The model reads and routes. A human makes the call, and every step is auditable.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.playgroundgiants.com'),
  title: TITLE,
  description: DESCRIPTION,
  // No page on this site emitted a canonical until 2026-07-25. The apex
  // redirects to www, so every page was reachable on two hosts with nothing
  // declaring which one counts.
  //
  // './' is RELATIVE and resolves against metadataBase + the current route, so
  // each page self-canonicalises. An absolute '/' here would point every page
  // at the homepage and deindex the site — which is why this was verified
  // against the built HTML on four different routes, not trusted from docs.
  alternates: { canonical: './' },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/webclip.png'
  },
  openGraph: {
    title: TITLE_SOCIAL,
    description: DESCRIPTION,
    images: ['/images/og_image_charcoal.png'],
    siteName: 'Playground Giants'
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE_SOCIAL,
    description: DESCRIPTION
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
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.playgroundgiants.com/#org',
                  name: 'Playground Giants',
                  url: 'https://www.playgroundgiants.com',
                  description: DESCRIPTION,
                  founder: { '@id': 'https://www.playgroundgiants.com/#jimmy' },
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.playgroundgiants.com/images/White-logo---no-background.svg'
                  },
                  areaServed: { '@type': 'Country', name: 'United States' },
                  knowsAbout: [
                    'AI workflow automation',
                    'Legal intake automation',
                    'Medical practice operations automation',
                    'Compliance-constrained AI systems',
                    'Lead qualification and routing',
                    'Answer engine optimization'
                  ]
                },
                {
                  '@type': 'Person',
                  '@id': 'https://www.playgroundgiants.com/#jimmy',
                  name: 'Jimmy Hackett',
                  jobTitle: 'Founder',
                  worksFor: { '@id': 'https://www.playgroundgiants.com/#org' }
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.playgroundgiants.com/#website',
                  url: 'https://www.playgroundgiants.com',
                  name: 'Playground Giants',
                  publisher: { '@id': 'https://www.playgroundgiants.com/#org' }
                },
                {
                  '@type': 'Service',
                  '@id': 'https://www.playgroundgiants.com/#service',
                  name: 'AI workflow automation for regulated businesses',
                  provider: { '@id': 'https://www.playgroundgiants.com/#org' },
                  serviceType: 'AI automation consulting and implementation',
                  description:
                    'Workflow audit, build, and ongoing operation of AI automation for law firms, medical practices, and other regulated operators. AI handles extraction and routing; humans keep the judgment call.',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Engagements',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        name: 'The Workflow Audit',
                        description:
                          'Two weeks. A written map of where the manual work is, what is safe to automate, what must stay human, and what a build would cost. Credited toward a build.',
                        price: '2500',
                        priceCurrency: 'USD'
                      },
                      {
                        '@type': 'Offer',
                        name: 'Build the system',
                        description:
                          'One or two workflows taken end to end into production, on infrastructure you own.',
                        priceCurrency: 'USD',
                        priceSpecification: {
                          '@type': 'PriceSpecification',
                          minPrice: '6000',
                          maxPrice: '25000',
                          priceCurrency: 'USD'
                        }
                      },
                      {
                        '@type': 'Offer',
                        name: 'Run it with you',
                        description:
                          'Monthly operation: monitoring, tuning, reporting, and the next phase.',
                        priceCurrency: 'USD',
                        priceSpecification: {
                          '@type': 'PriceSpecification',
                          minPrice: '1500',
                          maxPrice: '9500',
                          priceCurrency: 'USD'
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
