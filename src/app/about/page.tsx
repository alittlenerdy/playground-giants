import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { CAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About | Playground Giants - Marketing Architect & Automation',
  description:
    "I don't just build websites; I build revenue engines. Learn how Playground Giants helps Houston businesses kill manual work and scale through modern marketing infrastructure and automation.",
  openGraph: {
    title: 'About | Playground Giants - Marketing Architect & Automation',
    description:
      "I don't just build websites; I build revenue engines. Learn how Playground Giants helps Houston businesses kill manual work and scale through modern marketing infrastructure and automation.",
    images: ['/images/og_image_charcoal.png']
  }
}

export default function AboutPage() {
  return (
    <div className="body-base">
      <Header />

      {/* Hero Section */}
      <section className="section-about-hero">
        <div className="w-layout-blockcontainer container-about w-container">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot"></div>
            </div>
            <div className="text-block-16">
              {`> initiating_sequence...`}
              <br />
              {`> user: alittleghost`}
              <br />
              {`> role: marketing_architect`}
              <br />
              {`> mission: kill_manual_work();`}
              <br />
              {`> location: houston_tx`}
              <br />
              {`"I don't just build websites. I build revenue engines."`}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Grid Section */}
      <section className="section-about-grid">
        <div className="w-layout-blockcontainer container-10 w-container">
          <div className="personal-grid">
            <div className="personal-card is-map">
              <div className="status-dot"></div>
            </div>
            <div className="personal-card">
              <div className="text-block-21">3,402</div>
              <div className="text-block-20">CUPS OF COFFEE</div>
            </div>
            <div className="personal-card">
              <div className="text-gradient">If you have to do it twice, automate it.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-bio">
        <div className="w-layout-blockcontainer container-bio w-container">
          <div className="bio-grid">
            <Image
              src="/images/Screenshot-2025-03-24-at-09.50.56.png"
              loading="lazy"
              alt="Emoji of a person with light brown hair and blue eyes covering their mouth with their hand."
              width={200}
              height={200}
            />
            <div className="bio-content">
              <h2 className="hero-heading-h1">Building Systems, Not Just Sites.</h2>
              <p className="hero-subhead">
                I spent years watching business owners burn cash on manual marketing tasks. I
                realized that a pretty website is useless if it doesn&apos;t have an engine behind
                it.
              </p>
              <p className="hero-subhead">
                That&apos;s why I built Playground Giants: to replace manual grunt work with
                automated revenue infrastructure.
              </p>
              <div className="tech-stock-wrapper">
                <div className="tech-stack-label">POWERED BY</div>
                <div className="tech-logo-grid">
                  <Image
                    src="/images/GTM.png"
                    loading="lazy"
                    alt="Google Tag Manager logo with overlapping blue diamond shapes."
                    className="tech-logo"
                    width={100}
                    height={50}
                  />
                  <Image
                    src="/images/Google-AdWords-logo-500x281.png"
                    loading="lazy"
                    alt="Google Ads logo with a stylized A in blue, yellow, and green above the text 'Google Ads'."
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
                    src="/images/webflow_full.png"
                    loading="lazy"
                    alt="Webflow company logo with a stylized blue 'W' and white text."
                    className="tech-logo"
                    width={100}
                    height={50}
                  />
                  <Image
                    src="/images/Logo_Google_Analytics.png"
                    loading="lazy"
                    alt="Google Analytics logo with orange and yellow bar chart icon next to gray text."
                    className="tech-logo"
                    width={100}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta-final">
        <div className="w-layout-blockcontainer container-cta w-container">
          <h1 className="cta-heading">Ready to dominate your neighborhood?</h1>
          <p className="cta-subhead">Stop chasing leads. Start attracting them.</p>
          <CTAButton href={CAL_LINKS.QUICK} variant="quick">
            Get Your Free Website Audit
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  )
}
