import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CONTACT, CAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact | Playground Giants - Marketing Architect & Automation',
  description:
    "Stop wasting time on manual follow-ups. Book a 30-minute audit to see where you're losing money. Contact Playground Giants to build your revenue engine.",
  openGraph: {
    title: 'Contact | Playground Giants - Marketing Architect & Automation',
    description:
      "Stop wasting time on manual follow-ups. Book a 30-minute audit to see where you're losing money. Contact Playground Giants to build your revenue engine.",
    images: ['/images/cta-og-1200x630.png']
  }
}

export default function ContactPage() {
  return (
    <div className="body-base">
      <Header />

      {/* Contact Section */}
      <section className="section-contact">
        <div className="w-layout-blockcontainer container-contact w-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h1 className="hero-heading-h1">Let&apos;s Build Your Engine</h1>
              <p className="hero-subhead">
                Stop wasting time on manual follow-ups. Book a 30-minute audit to see where
                you&apos;re losing money.
              </p>
              <a
                href={`mailto:${CONTACT.EMAIL}?subject=inquiry from playground giants`}
                className="button-primary neon-pink w-button"
              >
                Email Me Instead
              </a>
            </div>
            <div className="w-embed w-iframe">
              <iframe
                src={CAL_LINKS.MAIN}
                style={{
                  width: '100%',
                  height: '600px',
                  border: '1px solid #333',
                  borderRadius: '12px'
                }}
                frameBorder="0"
                title="Book a meeting"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
