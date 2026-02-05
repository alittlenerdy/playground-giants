import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Poppins, Space_Mono } from 'next/font/google'
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
  weight: ['300', '400', '500', '600', '700']
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.playgroundgiants.com'),
  title: 'Playground Giants — Marketing Systems for Growth & Automation',
  description:
    'I build marketing systems that connect design, data, and automation — helping brands grow smarter, faster, and with measurable clarity. Explore case studies and automation examples.',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/webclip.png'
  },
  openGraph: {
    title: 'Playground Giants — Marketing Systems for Growth & Automation',
    description:
      'I build marketing systems that connect design, data, and automation — helping brands grow smarter, faster, and with measurable clarity.',
    images: ['/images/og_image_charcoal.png'],
    siteName: 'Playground Giants'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playground Giants — Marketing Systems for Growth & Automation',
    description:
      'I build marketing systems that connect design, data, and automation — helping brands grow smarter, faster, and with measurable clarity.'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/css/normalize.css" rel="stylesheet" />
        <link href="/css/webflow.css" rel="stylesheet" />
        <link href="/css/playground-giants.webflow.css" rel="stylesheet" />
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Playground Giants',
            url: 'https://www.playgroundgiants.com',
            description:
              'Marketing systems built for clarity and growth — automation, analytics, and Webflow design.',
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
        className={`${inter.variable} ${plusJakartaSans.variable} ${poppins.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
