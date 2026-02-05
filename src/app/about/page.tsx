import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GradientText, NeonButton, GlassCard, ScrollReveal, StepIcon } from '@/components/ui'
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
    <div className="min-h-screen bg-space-deep">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Photo + Badge */}
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-green/30 to-neon-purple/30 rounded-3xl blur-2xl" />
                <div className="relative">
                  <Image
                    src="/images/Screenshot-2025-03-24-at-09.50.56.png"
                    alt="Jimmy Hackett - Marketing Architect"
                    width={400}
                    height={400}
                    className="rounded-2xl border-2 border-white/10 shadow-2xl mx-auto"
                  />
                  {/* Status Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-space-deep/90 backdrop-blur-sm border border-neon-green/50 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                    <span className="text-sm font-mono text-neon-green">Available for Projects</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Intro */}
            <ScrollReveal delay={100}>
              <div>
                <span className="text-sm font-mono text-neon-green mb-4 block tracking-wider">
                  FOUNDER / MARKETING ARCHITECT
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
                  Jimmy<br />
                  <GradientText>Hackett</GradientText>
                </h1>
                <p className="text-xl text-white/60 mb-8 leading-relaxed">
                  I build revenue engines for home service companies that are tired of
                  throwing money at marketing that doesn&apos;t work.
                </p>

                {/* Terminal-style tagline */}
                <GlassCard className="p-4 font-mono text-sm">
                  <span className="text-neon-green">&gt;</span>{' '}
                  <span className="text-white/70">mission:</span>{' '}
                  <span className="text-white">&quot;Kill manual work. Scale revenue.&quot;</span>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-space-mid/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projects Shipped' },
              { value: '$2M+', label: 'Revenue Generated' },
              { value: '147%', label: 'Avg. Traffic Growth' },
              { value: '8+', label: 'Years Experience' }
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-neon-green mb-2">
                    {stat.value}
                  </div>
                  <p className="text-white/40 text-sm font-mono tracking-wider">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-display">
              The <GradientText>Origin Story</GradientText>
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal>
              <GlassCard className="p-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-neon-green/20 border border-neon-green/30 flex items-center justify-center">
                    <span className="text-neon-green font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">The Problem I Kept Seeing</h3>
                    <p className="text-white/60 leading-relaxed">
                      I spent years watching home service business owners burn through their marketing
                      budgets on agencies that delivered vanity metrics instead of leads. Pretty
                      websites with zero traffic. Ad campaigns that generated clicks but no calls.
                      &quot;SEO strategies&quot; that took 18 months to show any results.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <GlassCard className="p-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-neon-blue/20 border border-neon-blue/30 flex items-center justify-center">
                    <span className="text-neon-blue font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">The Realization</h3>
                    <p className="text-white/60 leading-relaxed">
                      A beautiful website is worthless without an engine behind it. What these
                      businesses needed wasn&apos;t another redesign—they needed infrastructure.
                      Tracking. Automation. A system that captures demand and converts it into
                      revenue without requiring 40 hours of manual work every week.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <GlassCard className="p-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center">
                    <span className="text-neon-purple font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Building Playground Giants</h3>
                    <p className="text-white/60 leading-relaxed">
                      So I built the agency I wished existed. One that treats marketing as
                      infrastructure, not decoration. Where every decision is data-driven.
                      Where we measure success in revenue, not impressions. Where we actually
                      give a damn about whether your phone rings.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* My Approach / Philosophy */}
      <section className="py-24 bg-space-mid/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                My <GradientText>Approach</GradientText>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Three principles that guide every project I take on.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'tracking' as const,
                title: 'Data Over Opinions',
                description:
                  "I don't guess. Every strategy is built on data—your competitors, your market, your numbers. If we can't measure it, we don't do it."
              },
              {
                icon: 'build' as const,
                title: 'Systems Over Tactics',
                description:
                  "One-off campaigns are a waste. I build systems that compound over time. Infrastructure that works whether you're paying attention or not."
              },
              {
                icon: 'scale' as const,
                title: 'Revenue Over Vanity',
                description:
                  "I don't care about impressions or followers. I care about leads, conversions, and revenue. The only metric that matters is your bottom line."
              }
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <GlassCard className="p-8 h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                    <StepIcon type={item.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                The <GradientText>Stack</GradientText>
              </h2>
              <p className="text-white/60">
                Modern tools. Enterprise-grade results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: '/images/google-wordmarks-2x.webp', alt: 'Google', category: 'Platform' },
              { src: '/images/Logo_Google_Analytics.png', alt: 'Google Analytics', category: 'Analytics' },
              { src: '/images/GTM.png', alt: 'Google Tag Manager', category: 'Tracking' },
              { src: '/images/Looker-Studio-Logo-300x141.png', alt: 'Looker Studio', category: 'Reporting' },
              { src: '/images/Google-AdWords-logo-500x281.png', alt: 'Google Ads', category: 'Acquisition' },
              { src: '/images/webflow_full.png', alt: 'Webflow', category: 'Development' },
              { src: '/images/zapier-logo_white.png', alt: 'Zapier', category: 'Automation' },
              { src: '/images/Stripe-wordmark---Blurple---Large.png', alt: 'Stripe', category: 'Payments' }
            ].map((tool, index) => (
              <ScrollReveal key={tool.alt} delay={index * 50}>
                <GlassCard className="p-6 text-center group hover:border-neon-green/30 transition-colors">
                  <div className="h-12 flex items-center justify-center mb-4">
                    <Image
                      src={tool.src}
                      alt={tool.alt}
                      width={100}
                      height={40}
                      className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-wider">
                    {tool.category}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Philosophy */}
      <section className="py-24 bg-space-mid/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -top-6 -left-4 text-8xl text-neon-green/20 font-serif">&ldquo;</div>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display text-white text-center leading-relaxed pl-8">
                If you have to do it twice,{' '}
                <GradientText>automate it.</GradientText>
              </blockquote>
              <p className="text-center text-white/40 mt-6 font-mono text-sm">
                — My operating principle
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <GlassCard className="p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
                Let&apos;s talk about your business. No pitch, no pressure—just an honest
                conversation about what&apos;s working and what&apos;s not.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <NeonButton href={CAL_LINKS.MAIN} size="lg" external>
                  Book a Strategy Call →
                </NeonButton>
                <NeonButton href="/case-studies/fenced-up" variant="purple" size="lg">
                  See My Work →
                </NeonButton>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
