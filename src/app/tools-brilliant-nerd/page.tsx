import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Brilliant Nerd | AI Screenshot-to-Code for Webflow Designers',
  description:
    'Stop wasting hours on manual builds. Instantly convert UI screenshots into clean, Client-First Webflow code. Save 50+ hours per project. Access the beta today.',
  openGraph: {
    title: 'Brilliant Nerd | AI Screenshot-to-Code for Webflow Designers',
    description:
      'Stop wasting hours on manual builds. Instantly convert UI screenshots into clean, Client-First Webflow code. Save 50+ hours per project.',
    images: ['/images/brilliant-nerd-og-1200x630.png']
  }
}

export default function ToolsBrilliantNerdPage() {
  return (
    <div className="body-base">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="w-layout-blockcontainer hero-container w-container">
          <h1 className="hero-headline">Brilliant Nerd: Screenshot-to-code AI for Designers</h1>
          <div className="hero-subhead">
            Built by Playground Giants. Now available for everyone.
          </div>
          <a href="#" className="hero-button w-button">
            Try Beta
          </a>
        </div>
        <div className="hero-video">
          <div className="w-embed w-iframe">
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/9011541c17904746b655d9f0283bf703?autoplay=0&muted=1"
                frameBorder="0"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                title="Brilliant Nerd Demo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-standard">
        <h2 className="section-title">The Manual Coding Bottleneck</h2>
        <div className="overview-card">
          <div className="overview-item">
            Designers spend hours manually coding Webflow layouts.
          </div>
          <div className="overview-item">
            Manual translation frustrates clients and kills velocity.
          </div>
          <div className="overview-item">
            Agencies lose 50+ hours per project on non-creative build time.
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-standard">
        <h2 className="section-title">How It Works</h2>

        <div className="overview-card">
          <h3 className="process-title">1. Upload Screenshot</h3>
          <div className="process-text">Drag and drop any UI design or screenshot.</div>
          <Image
            src="/images/Screenshot-2025-12-17-at-12.50.49.png"
            loading="lazy"
            alt="Screenshot upload interface with a drag and drop area."
            className="process-image"
            width={600}
            height={400}
          />
        </div>

        <div className="overview-card">
          <h3 className="process-title">2. AI Generation</h3>
          <div className="process-text">Instant conversion to clean Webflow HTML/CSS.</div>
          <Image
            src="/images/Screenshot-2025-12-17-at-12.51.23.png"
            loading="lazy"
            alt="Split-screen showing a payments analytics dashboard screenshot on the left and its generated HTML code on the right."
            className="process-image"
            width={600}
            height={400}
          />
        </div>

        <div className="overview-card">
          <h3 className="process-title">3. Natural Language Edit</h3>
          <div className="process-text">
            Refine layout by typing commands like &apos;Make it 4 columns&apos;.
          </div>
          <Image
            src="/images/Screenshot-2025-12-17-at-12.51.49.png"
            loading="lazy"
            alt="Comparison of two code snippets highlighting semantic, readable, production-ready code."
            className="process-image"
            width={600}
            height={400}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-standard">
        <h2 className="section-title">Power User Features</h2>
        <div className="w-layout-grid features-grid">
          <div className="feature-card">
            <h3 className="process-title">Client-First Ready</h3>
            <div className="process-text">
              Auto-generates classes using the Finsweet naming convention.
            </div>
          </div>
          <div className="feature-card">
            <h3 className="process-title">Auto-Responsive</h3>
            <div className="process-text">
              Built-in support for Desktop, Tablet, and Mobile breakpoints.
            </div>
          </div>
          <div className="feature-card">
            <h3 className="process-title">Conversational Edit</h3>
            <div className="process-text">Iterate on designs with plain English commands.</div>
          </div>
          <div className="feature-card">
            <h3 className="process-title">Native Structure</h3>
            <div className="process-text">Clean DOM elements, no messy custom code blobs.</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard">
        <div className="cta-card">
          <div className="cta-command">&gt; SYSTEM_READY</div>
          <h2 className="cta-title">Start Building at Hyper-Speed.</h2>
          <a
            href="https://www.brilliantnerd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button w-button"
          >
            <strong>Access the Beta</strong>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
