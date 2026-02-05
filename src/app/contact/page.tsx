import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GradientText, NeonButton, GlassCard, ScrollReveal } from '@/components/ui'
import { CONTACT, CAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact | Playground Giants - Book Your Strategy Call',
  description:
    "Stop wasting time on manual follow-ups. Book a 30-minute audit to see where you're losing money. Contact Playground Giants to build your revenue engine.",
  openGraph: {
    title: 'Contact | Playground Giants - Book Your Strategy Call',
    description:
      "Stop wasting time on manual follow-ups. Book a 30-minute audit to see where you're losing money.",
    images: ['/images/cta-og-1200x630.png']
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-space-deep">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
                Let&apos;s Build Your <GradientText>Revenue Engine</GradientText>
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Stop wasting time on manual follow-ups. Book a call to see exactly where you&apos;re
                losing money—and how we can fix it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <ScrollReveal>
              <div className="space-y-6">
                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${CONTACT.EMAIL}?subject=Inquiry from Playground Giants`}
                      className="flex items-center gap-3 text-white/70 hover:text-neon-green transition-colors"
                    >
                      <span className="text-xl">✉️</span>
                      <span>{CONTACT.EMAIL}</span>
                    </a>
                    <a
                      href={CAL_LINKS.QUICK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/70 hover:text-neon-green transition-colors"
                    >
                      <span className="text-xl">📅</span>
                      <span>15-minute quick call</span>
                    </a>
                    <a
                      href={CAL_LINKS.MAIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/70 hover:text-neon-green transition-colors"
                    >
                      <span className="text-xl">🎯</span>
                      <span>30-minute strategy session</span>
                    </a>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-white/60">
                    <li className="flex items-start gap-2">
                      <span className="text-neon-green mt-1">✓</span>
                      <span>Honest assessment of your current setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon-green mt-1">✓</span>
                      <span>Clear recommendations for improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon-green mt-1">✓</span>
                      <span>No pressure, no sales pitch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon-green mt-1">✓</span>
                      <span>Actionable next steps you can take today</span>
                    </li>
                  </ul>
                </GlassCard>

                <NeonButton
                  href={`mailto:${CONTACT.EMAIL}?subject=Inquiry from Playground Giants`}
                  variant="purple"
                  className="w-full"
                  external
                >
                  Prefer Email? →
                </NeonButton>
              </div>
            </ScrollReveal>

            {/* Calendar Embed */}
            <ScrollReveal delay={100}>
              <div className="lg:col-span-2">
                <GlassCard className="p-2 overflow-hidden">
                  <iframe
                    src={CAL_LINKS.MAIN}
                    style={{
                      width: '100%',
                      height: '650px',
                      border: 'none',
                      borderRadius: '12px',
                      background: '#0A0E27'
                    }}
                    title="Book a meeting"
                  />
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
