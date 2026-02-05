import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Packages | Playground Giants - Marketing Infrastructure & Pricing',
  description:
    "We don't sell hours; we sell revenue engines. Choose from Foundation, Growth, or Dominance packages to build your automated marketing infrastructure. Clear, transparent pricing for home service businesses.",
  openGraph: {
    title: 'Packages | Playground Giants - Marketing Infrastructure & Pricing',
    description:
      "We don't sell hours; we sell revenue engines. Choose from Foundation, Growth, or Dominance packages to build your automated marketing infrastructure.",
    images: ['/images/pg-pricing-og-1200x630.png']
  }
}

export default function PackagesPage() {
  return (
    <div className="body-base">
      <Header />

      {/* Pricing Hero Section */}
      <section className="section-pricing-hero">
        <div className="w-layout-blockcontainer section-pricing-container w-container">
          <h1 className="hero-headline">Clear, Transparent, Infrastructure.</h1>
          <div className="hero-subhead">
            <strong>Built for </strong>
            <span className="text-gradient">
              <strong>High-Ticket Operators</strong>
            </span>
            <br />
            The enterprise growth infrastructure we use to scale
            <br />
            <span className="text-gradient">
              <strong>Home Service Leaders</strong>
            </span>{' '}
            and{' '}
            <span className="text-gradient">
              <strong>Medical Aesthetic Practices</strong>
            </span>
            .
          </div>
          <p className="hero-subhead">We don&apos;t sell hours. We sell revenue engines.</p>

          <div className="pricing-grid">
            {/* Core Infrastructure */}
            <div className="pricing-card">
              <h2 className="pricing-title">The Core Infrastructure</h2>
              <p className="pricing-desc">$4,500</p>
              <ul role="list" className="pricing-list w-list-unstyled">
                <li className="pricing-item">Custom Webflow website</li>
                <li className="pricing-item">Brand identity + domain</li>
                <li className="pricing-item">Mobile responsive</li>
                <li className="pricing-item">Analytics setup</li>
                <li className="pricing-item">14-day delivery</li>
              </ul>
              <a
                href={CAL_LINKS.MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-button w-button"
              >
                Get Started
              </a>
            </div>

            {/* Acquisition Engine - Popular */}
            <div className="pricing-card ispopular">
              <h2 className="pricing-title">The Acquisition Engine</h2>
              <p className="pricing-desc">$8,500</p>
              <ul role="list" className="pricing-list w-list-unstyled">
                <li className="pricing-item">Everything in Core</li>
                <li className="pricing-item">Google Business Profile</li>
                <li className="pricing-item">Lead automation + forms</li>
                <li className="pricing-item">Server-side tracking</li>
                <li className="pricing-item">30-day support</li>
              </ul>
              <Link href="/contact" className="pricing-button is-popular w-button">
                Get Started
              </Link>
            </div>

            {/* Market Domination */}
            <div className="pricing-card">
              <h2 className="pricing-title">The Market Domination System.</h2>
              <p className="pricing-desc">$15,000</p>
              <ul role="list" className="pricing-list w-list-unstyled">
                <li className="pricing-item">Everything in Acquisition</li>
                <li className="pricing-item">RevOps dashboard</li>
                <li className="pricing-item">Google Ads management</li>
                <li className="pricing-item">Weekly strategy calls</li>
                <li className="pricing-item">Priority support</li>
              </ul>
              <a
                href={CAL_LINKS.MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-button w-button"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Promo Section */}
        <section className="section-standard">
          <div className="w-layout-grid promo-grid">
            <div className="promo-text-wrapper">
              <h2 className="promo-title">Our Unfair Advantage</h2>
              <p className="promo-desc">
                We don&apos;t code from scratch. We use our proprietary AI to automate the build,
                ensuring your site is pixel-perfect and production-ready in half the time.
              </p>
              <Link href="/tools-brilliant-nerd" className="link-arrow-pink w-button">
                See The Architecture
              </Link>
            </div>
            <div className="promo-image-wrapper">
              <Image
                src="/images/Screenshot-2025-12-17-at-12.50.49.png"
                loading="lazy"
                alt="Comparison of three pricing packages named Foundation, Growth, and Dominance for Playground Giants shown on black background with highlighted Growth package in green."
                className="promo-screenshot"
                width={500}
                height={300}
              />
              <p className="promo-desc-image">
                We don&apos;t code from scratch. We use our proprietary AI tool to automate
                design-to-code conversion, cutting development time in half while maintaining
                pixel-perfect accuracy.
              </p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  )
}
