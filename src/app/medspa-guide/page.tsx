import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { DOWNLOADS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Free MedSpa Local SEO Playbook 2026 | Playground Giants',
  description:
    "Download our free 2026 Local SEO Playbook for high-end medspas. Learn how to dominate 'Botox near me' and fill your calendar without paid ads.",
  openGraph: {
    title: 'Free MedSpa Local SEO Playbook 2026 | Playground Giants',
    description:
      "Download our free 2026 Local SEO Playbook for high-end medspas. Learn how to dominate 'Botox near me' and fill your calendar without paid ads.",
    images: ['/images/medspa-playbook-og-1200x630.jpg']
  }
}

export default function MedSpaGuidePage() {
  return (
    <div className="body-base">
      <Header />

      {/* Hero Section */}
      <section className="section-hero-medspa">
        <div className="w-layout-blockcontainer container-hero w-container">
          <div className="hero-flex-wrapper">
            <div className="hero-content-col">
              <h1 className="heading-h1-hero">
                The 2026 Local SEO Playbook for High-End Medspas
              </h1>
              <h2 className="heading-h2-hero">
                Learn how to dominate &apos;Botox near me&apos; and fill your calendar without paid
                ads
              </h2>
              <p className="text-hero-body">
                Free guide: The exact local SEO framework we used to help a Houston business get 4x
                organic traffic in 6 months—now applied to aesthetics.
              </p>
              <a
                href={DOWNLOADS.MEDSPA_PLAYBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-cta w-button"
              >
                Download Free Guide
              </a>
            </div>
            <div className="hero-image-col">
              <Image
                src="/images/medspa-playbook-3d-mockup.webp"
                loading="lazy"
                alt="3D book cover titled 'The 2026 Local SEO Playbook for High-End Medspas' by Jimmy Hackett with neon graphics showing SEO dashboard elements."
                className="image-pdf-mockup"
                width={400}
                height={500}
              />
            </div>

            {/* What's Inside Section */}
            <section className="section-whats-inside">
              <div className="w-layout-blockcontainer container-content w-container">
                <h3 className="heading-h3-section">What You&apos;ll Learn:</h3>
                <div className="bullet-list-wrapper">
                  <div className="bullet-item">
                    <div className="bullet-icon">
                      <strong>✓</strong>
                    </div>
                    <p className="text-bullets">
                      The 5 mistakes killing your Google rankings (and how to fix them)
                    </p>
                  </div>
                  <div className="bullet-item">
                    <div className="bullet-icon">
                      <strong>✓</strong>
                    </div>
                    <p className="text-bullets">
                      Google&apos;s 2025-2026 algorithm changes for local businesses
                    </p>
                  </div>
                  <div className="bullet-item">
                    <div className="bullet-icon">
                      <strong>✓</strong>
                    </div>
                    <p className="text-bullets">4-pillar framework for local SEO dominance</p>
                  </div>
                  <div className="bullet-item">
                    <div className="bullet-icon">
                      <strong>✓</strong>
                    </div>
                    <p className="text-bullets">Quick wins you can implement this week</p>
                  </div>
                  <div className="bullet-item">
                    <div className="bullet-icon">
                      <strong>✓</strong>
                    </div>
                    <p className="text-bullets">
                      Real case study: +400% traffic growth in 6 months
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="section-who-its-for">
        <div className="w-layout-blockcontainer container-content w-container">
          <h3 className="heading-h3-section">Perfect for medspas that:</h3>
          <div className="bullet-list-wrapper">
            <div className="bullet-item">
              <div className="bullet-icon">
                <strong>✓</strong>
              </div>
              <p className="text-bullets">Generate less than $50k/month from organic search</p>
            </div>
            <div className="bullet-item">
              <div className="bullet-icon">
                <strong>✓</strong>
              </div>
              <p className="text-bullets">Rely heavily on referrals or paid ads</p>
            </div>
            <div className="bullet-item">
              <div className="bullet-icon">
                <strong>✓</strong>
              </div>
              <p className="text-bullets">Want predictable patient volume from Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-final-cta">
        <div className="w-layout-blockcontainer container-cta w-container">
          <h3 className="heading-h3-cta">Ready to Fill Your Calendar?</h3>
          <p className="text-cta-body">
            Download the free playbook and learn the same strategies we used to scale local
            businesses.
          </p>
          <a
            href={DOWNLOADS.MEDSPA_PLAYBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-cta w-button"
          >
            Get Your Free Guide
          </a>
          <p className="text-disclaimer">No email required. Instant PDF download.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
