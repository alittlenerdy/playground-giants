import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { CAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Case Study: Fenced Up | +147% Leads via Webflow & Automation',
  description:
    'See how Playground Giants transformed Fenced Up from zero online presence to market leader. We used Webflow, Local SEO, and automated infrastructure to generate 147% more leads in just 90 days.',
  openGraph: {
    title: 'Case Study: Fenced Up | +147% Leads via Webflow & Automation',
    description:
      'See how Playground Giants transformed Fenced Up from zero online presence to market leader.',
    images: ['/images/fencedup_og_image_charcoal.png']
  }
}

export default function FencedUpCaseStudyPage() {
  return (
    <div className="body-base">
      <Header />

      {/* Hero Section */}
      <section className="case-hero-section">
        <div className="w-layout-blockcontainer case-hero-container w-container">
          <div className="case-hero-left">
            <div className="hero-stat-bar">
              <div className="hero-stat-text">CASE: HIGH-TICKET SCALE</div>
              <div className="hero-stat-text">SYSTEM: THE ACQUISITION ENGINE</div>
              <div className="hero-stat-text green">VELOCITY: +147% PIPELINE GROWTH</div>
            </div>
            <h1 className="case-hero-title list-item">
              Scaling High-Ticket Local Revenue by 147%
            </h1>
            <p className="case-hero-subhead">
              How we installed the automated Acquisition Engine to capture demand for a high-volume
              local service business.
            </p>
            <Image
              src="/images/Screenshot-2025-11-24-at-14.26.24.avif"
              loading="eager"
              width={429}
              height={300}
              alt="Screenshot of Fenced Up website showing local SEO metrics"
              className="case-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Body Section */}
      <section className="case-body-section">
        <div className="case-body-container">
          <div className="case-body-wrapper">
            <h2 className="case-section-title">1. Situational Analysis</h2>
            <div className="overview-card">
              <ul role="list" className="case-list w-list-unstyled">
                <li className="overview-item">
                  The client possessed a high-quality service delivery mechanism but suffered from{' '}
                  <strong>analog dependency</strong>. Reliance on inconsistent word-of-mouth created
                  a &apos;feast or famine&apos; revenue cycle, with zero data visibility into
                  real-time market demand.
                </li>
                <li className="overview-item">
                  They had no web presence, tracking, or local visibility -- and relied solely on
                  word-of-mouth.
                </li>
                <li className="overview-item">
                  The goal of this foundation phase was to build every core system from the ground
                  up: a modern Webflow website, an optimized Google Business Profile (GPB), domain
                  configuration, and analytics infrastructure to enable data-driven growth.
                </li>
              </ul>
            </div>

            <div className="objectives-container">
              <h2 className="case-section-title">2. Mission Parameters</h2>
              <ul role="list" className="case-list is-grid w-list-unstyled">
                <li className="objective-card">
                  Deploy <span className="text-highlight"><strong>Core Infrastructure</strong></span>{' '}
                  to maximize conversion velocity.
                </li>
                <li className="objective-card">
                  Establish <span className="text-highlight"><strong>Market Dominance</strong></span>{' '}
                  via localized reputation assets.
                </li>
                <li className="objective-card">
                  Implement <span className="text-highlight"><strong>RevOps</strong></span> to
                  automate the lead-to-calendar journey.
                </li>
                <li className="objective-card">
                  Activate the{' '}
                  <span className="text-highlight"><strong>Acquisition Engine</strong></span> to
                  capture high-intent search traffic.
                </li>
                <li className="objective-card">
                  Connect{' '}
                  <span className="text-highlight"><strong>conversion tracking</strong></span> for
                  calls, forms, and ad performance.
                </li>
              </ul>
            </div>

            <h2 className="case-section-title">3. System Deployment</h2>

            <div className="process-card">
              <h3 className="process-step-title">Phase 1: Core Infrastructure</h3>
              <ul role="list" className="case-list w-list-unstyled">
                <li>
                  Rebuilt the entire Fenced Up website from HTML into Webflow with no prior
                  template.
                </li>
                <li>
                  Designed &amp; developed five localized landing pages (Katy, Memorial, West
                  Houston, Sugar Land, and Main Houston).
                </li>
                <li>
                  Implemented responsive layouts, lazy-loading, WebP imagery, async scripts, and
                  schema-based metadata for high Pagespeed performance.
                </li>
                <li>
                  Integrated lead-capture forms connected through native Webflow CMS and Zapier /
                  Pipedream for automations.
                </li>
              </ul>
            </div>

            {/* YouTube Embed */}
            <div className="case-body-element w-embed w-iframe">
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  width: '100%'
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/K383IQcjTvQ?autoplay=0&mute=1&controls=1&loop=1&playlist=K383IQcjTvQ&showinfo=0&rel=0"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0
                  }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Fenced Up Case Study Video"
                />
              </div>
            </div>

            <div className="process-card">
              <h3 className="process-step-title">Phase 2: Asset Configuration</h3>
              <ul role="list" className="case-list">
                <li>Created brand identity (logo, color palette, fonts).</li>
                <li>
                  Registered &amp; connected domain (getyoufencedup.com) with SSL enabled.
                </li>
                <li>Configured DNS records and redirects to support future subdomains.</li>
                <li>Established branded email and CRM forwarding.</li>
              </ul>
              <Image
                src="/images/Screenshot-2025-11-24-at-15.51.38.png"
                loading="lazy"
                alt="Various versions of the 'fenced up' logo showing a blue house icon above the text in different color styles."
                className="case-body-image"
                width={700}
                height={400}
              />
            </div>

            <div className="process-card">
              <h3 className="process-step-title">Phase 3: Market Trust Protocols</h3>
              <ul role="list" className="case-list">
                <li>
                  Claimed and verified Fenced Up&apos;s GPB in-person using photo verification.
                </li>
                <li>
                  Completed categories, services areas, attributes, hours, and UTM-linked calls to
                  action.
                </li>
                <li>
                  Uploaded localized images and regular posts to build search relevance.
                </li>
                <li>
                  Implemented keyword targeting for &quot;fence installation&quot;, &quot;cedar
                  fencing&quot;, and &quot;treated pine fencing Houston.&quot;
                </li>
                <li>
                  Submitted sitemap &amp; structured data through Search Console for indexation.
                </li>
              </ul>
              <Image
                src="/images/Screenshot-2025-11-24-at-15.38.18.png"
                loading="lazy"
                alt="Dashboard showing a list of five published post updates about fence treatment and home curb appeal."
                className="case-body-image"
                width={500}
                height={300}
              />
            </div>

            <div className="process-card">
              <h3 className="process-step-title">Phase 4: Revenue Operations (RevOps)</h3>
              <ul role="list" className="case-list">
                <li>
                  Deployed <strong>Server-Side Tracking (GTM)</strong> to bypass cookie restrictions
                  and capture 100% of conversion data.
                </li>
                <li>
                  Unified cross-channel attribution (Google Ads + Organic) into a single{' '}
                  <strong>&quot;Source of Truth&quot;</strong> dashboard.
                </li>
                <li>
                  Engineered a live <strong>Executive view</strong> for real-time visibility into
                  Cost Per Acquisition (CPA) and Pipeline ROI.
                </li>
                <li>
                  Automated the feedback loop between CRM status and Ad Platforms to optimize for{' '}
                  <strong>revenue</strong>, not just leads.
                </li>
              </ul>
              <Image
                src="/images/Fenced_Up_Website_Traffic_Engagement_Dashboard_Webflow.jpg"
                loading="lazy"
                alt="Website traffic dashboard showing session trends from March to June 2025."
                className="case-body-image"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="case-stats-section">
        <div className="tech-stock-wrapper">
          <div className="tech-stack-label">POWERED BY</div>
          <div className="tech-logo-grid">
            <Image
              src="/images/GTM.png"
              loading="lazy"
              alt="Google Tag Manager logo"
              className="tech-logo"
              width={100}
              height={50}
            />
            <Image
              src="/images/Google-AdWords-logo-500x281.png"
              loading="lazy"
              alt="Google Ads logo"
              className="tech-logo"
              width={100}
              height={50}
            />
            <Image
              src="/images/Looker-Studio-Logo-300x141.png"
              loading="lazy"
              alt="Looker Studio logo"
              className="tech-logo"
              width={100}
              height={50}
            />
            <Image
              src="/images/stripe-logo-black-transparent.png"
              loading="lazy"
              alt="Stripe company logo"
              className="tech-logo"
              width={100}
              height={50}
            />
            <Image
              src="/images/Logo_Google_Analytics.png"
              loading="lazy"
              alt="Google Analytics logo"
              className="tech-logo"
              width={100}
              height={50}
            />
          </div>
        </div>

        <div className="w-layout-blockcontainer case-stats-container w-container">
          <div className="case-stat">
            <div className="stat-number">715</div>
            <p className="stat-label">Ad Sessions</p>
          </div>
          <div className="case-stat">
            <div className="stat-number">5.4k</div>
            <p className="stat-label">Engagement events</p>
          </div>
          <div className="case-stat">
            <div className="stat-number">883</div>
            <p className="stat-label">Active Users</p>
          </div>
        </div>

        <div className="w-layout-blockcontainer container-8 w-container">
          <h2 className="cta-heading">Ready to dominate your neighborhood?</h2>
          <p className="cta-subhead">Stop chasing leads. Start attracting them.</p>
          <CTAButton href={CAL_LINKS.MAIN}>Get Your Free Website Audit</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  )
}
