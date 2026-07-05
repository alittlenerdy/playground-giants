import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

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
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
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
          })}
        </Script>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
