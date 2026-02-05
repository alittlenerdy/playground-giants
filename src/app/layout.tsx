import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400', '700']
})

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
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${spaceMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
