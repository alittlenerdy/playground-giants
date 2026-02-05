import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GradientText, NeonButton, GlassCard, ScrollReveal } from '@/components/ui'
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

const packages = [
  {
    name: 'Core Infrastructure',
    price: '$4,500',
    description: 'Everything you need to launch',
    features: [
      'Custom Webflow website',
      'Brand identity + domain',
      'Mobile responsive design',
      'Analytics setup (GA4)',
      '14-day delivery'
    ],
    cta: 'Get Started',
    href: CAL_LINKS.MAIN,
    popular: false
  },
  {
    name: 'Acquisition Engine',
    price: '$8,500',
    description: 'Built to capture leads',
    features: [
      'Everything in Core',
      'Google Business Profile',
      'Lead automation + forms',
      'Server-side tracking',
      '30-day support'
    ],
    cta: 'Most Popular',
    href: '/contact',
    popular: true
  },
  {
    name: 'Market Domination',
    price: '$15,000',
    description: 'Full-stack growth system',
    features: [
      'Everything in Acquisition',
      'RevOps dashboard',
      'Google Ads management',
      'Weekly strategy calls',
      'Priority support'
    ],
    cta: 'Get Started',
    href: CAL_LINKS.MAIN,
    popular: false
  }
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-space-deep">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Clear. Transparent. <GradientText>Infrastructure.</GradientText>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-4">
              Built for <span className="text-neon-green font-semibold">High-Ticket Operators</span>
              <br />
              The enterprise growth infrastructure we use to scale{' '}
              <span className="text-neon-blue font-semibold">Home Service Leaders</span> and{' '}
              <span className="text-neon-purple font-semibold">Medical Aesthetic Practices</span>.
            </p>
            <p className="text-lg text-white/40">
              We don&apos;t sell hours. We sell revenue engines.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScrollReveal key={pkg.name} delay={index * 100}>
                <div
                  className={`relative h-full ${
                    pkg.popular
                      ? 'bg-gradient-to-b from-neon-green/20 to-transparent p-[1px] rounded-2xl'
                      : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-green text-black text-sm font-bold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <GlassCard
                    className={`p-8 h-full flex flex-col ${pkg.popular ? 'border-neon-green/50' : ''}`}
                    hover={false}
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">{pkg.name}</h2>
                    <p className="text-white/60 mb-6">{pkg.description}</p>

                    <div className="mb-8">
                      <span className="text-4xl font-bold text-neon-green">{pkg.price}</span>
                      <span className="text-white/40 ml-2">one-time</span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-white/70">
                          <span className="text-neon-green">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {pkg.popular ? (
                      <Link
                        href={pkg.href}
                        className="w-full px-8 py-4 bg-neon-green text-black font-bold rounded-lg text-center shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_40px_rgba(0,255,0,0.6)] transition-all duration-300 hover:-translate-y-0.5"
                      >
                        {pkg.cta}
                      </Link>
                    ) : (
                      <a
                        href={pkg.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-8 py-4 bg-white/10 text-white font-semibold rounded-lg text-center border border-white/20 hover:bg-white/20 hover:border-neon-green/50 transition-all duration-300"
                      >
                        {pkg.cta}
                      </a>
                    )}
                  </GlassCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 bg-space-mid/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                  Our Unfair Advantage
                </h2>
                <p className="text-white/60 text-lg mb-8">
                  We don&apos;t code from scratch. We use our proprietary AI to automate the build,
                  ensuring your site is pixel-perfect and production-ready in half the time.
                </p>
                <NeonButton href="/tools-brilliant-nerd" variant="purple">
                  See The Architecture →
                </NeonButton>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-2xl blur-xl" />
                <Image
                  src="/images/Screenshot-2025-12-17-at-12.50.49.png"
                  alt="Playground Giants AI tool interface"
                  width={500}
                  height={300}
                  className="relative rounded-xl border border-white/10 shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-display">
              Common Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                q: 'Do you offer monthly retainers?',
                a: 'Yes. After the initial build, we offer ongoing optimization and management starting at $2,500/month.'
              },
              {
                q: 'What industries do you work with?',
                a: 'We specialize in home services (roofing, HVAC, fencing, plumbing) and medical aesthetics (medspas, dental practices).'
              },
              {
                q: 'How long until I see results?',
                a: 'Most clients see significant improvement in 30-60 days. Full SEO results typically take 90-120 days.'
              },
              {
                q: 'Do you require long-term contracts?',
                a: 'No. All retainers are month-to-month. We earn your business every month.'
              }
            ].map((faq, index) => (
              <ScrollReveal key={faq.q} delay={index * 50}>
                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-white/60">{faq.a}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-space-mid/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Not sure which package is right?
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Book a free 15-minute call and we&apos;ll recommend the best fit for your business.
            </p>
            <NeonButton href={CAL_LINKS.QUICK} size="lg" external>
              Book a Free Consultation →
            </NeonButton>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
