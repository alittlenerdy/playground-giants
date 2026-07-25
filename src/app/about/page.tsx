import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GradientText, NeonButton, GlassCard, ScrollReveal, StepIcon } from '@/components/ui'
import { CAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  // Rewritten 2026-07-25. Everything here was pre-repositioning: "Marketing
  // Architect", "I don't just build websites", "Houston businesses", "marketing
  // infrastructure". The 2026-07-24 positioning doc named this exact problem —
  // "your website describes a different company" — and this page was the last
  // core route still describing it. 189 chars, too.
  title: 'About | Playground Giants — AI automation, human judgment',
  description:
    'I build AI automation for law firms, medical practices and other regulated operators. The model reads and routes. A human still makes the call.',
  openGraph: {
    title: 'About | Playground Giants — AI automation, human judgment',
    description:
      'I build AI automation for law firms, medical practices and other regulated operators. The model reads and routes. A human still makes the call.',
    images: ['/images/og_image_charcoal.png']
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/12 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/12 rounded-full blur-[120px]" />
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
                    alt="Jimmy Hackett, founder of Playground Giants"
                    width={400}
                    height={400}
                    className="rounded-2xl border-2 border-line shadow-2xl mx-auto"
                  />
                  {/* Status Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-paper/90 backdrop-blur-sm border border-neon-green/50 rounded-full flex items-center gap-2">
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
                  FOUNDER / AI AUTOMATION
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 font-display leading-tight">
                  Jimmy<br />
                  <GradientText>Hackett</GradientText>
                </h1>
                <p className="text-xl text-ink-3 mb-8 leading-relaxed">
                  I put AI inside regulated work without letting it make the call. Law firms,
                  medical practices, and other operators who cannot afford a wrong answer.
                </p>

                {/* Terminal-style tagline */}
                <GlassCard className="p-4 font-mono text-sm">
                  <span className="text-neon-green">&gt;</span>{' '}
                  <span className="text-ink-2">mission:</span>{' '}
                  <span className="text-ink">&quot;AI does the busywork. A human makes the call.&quot;</span>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-line bg-cream-2/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/*
              Replaced 2026-07-25. The old block read 50+ Projects Shipped /
              $2M+ Revenue Generated / 147% Avg. Traffic Growth / 8+ Years
              Experience. Two problems, and the smaller one was that they were
              from the previous positioning.

              The larger one: they were unsubstantiated aggregate results claims
              on a site now selling to law firms and medical practices — buyers
              who are themselves regulated on advertising claims and will read a
              vendor's numbers with that lens. There is an open task on the legal
              engagement to pull unsubstantiated results claims off a client site
              before ads run. Selling claim-discipline while displaying
              unverified numbers undercuts the whole pitch.

              These four describe METHOD, not results, so they need no
              substantiation beyond the build itself: each is a property of how
              the systems are architected and is verifiable by reading one.
            */}
            {[
              { value: '0', label: 'Decisions Made By A Model' },
              { value: '100%', label: 'Infrastructure You Own' },
              { value: '10 yr', label: 'Append-Only Audit Trail' },
              { value: 'Human', label: 'Fallback When AI Fails' }
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-neon-green mb-2">
                    {stat.value}
                  </div>
                  <p className="text-ink-3 text-sm font-mono tracking-wider">{stat.label}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12 text-center font-display">
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
                    <h3 className="text-xl font-semibold text-ink mb-3">The Problem I Kept Seeing</h3>
                    <p className="text-ink-3 leading-relaxed">
                      The friction inside a law firm or a medical practice is almost never the
                      software. It is the manual glue between it. Someone re-typing an intake form
                      into a case system. Someone working out from memory which referral has gone
                      quiet. The work that appears on nobody&apos;s job description and eats the
                      week anyway.
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
                    <h3 className="text-xl font-semibold text-ink mb-3">The Realization</h3>
                    <p className="text-ink-3 leading-relaxed">
                      The obvious move is to let the AI decide. In regulated work that is the one
                      thing you cannot do. So I split it: the model reads documents and extracts
                      facts, and a deterministic function no model touches makes the actual call.
                      That split is why a decision can be audited line by line, and why a model
                      outage degrades to a human instead of dropping the work on the floor.
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
                    <h3 className="text-xl font-semibold text-ink mb-3">Building Playground Giants</h3>
                    <p className="text-ink-3 leading-relaxed">
                      So I build the automation I would be willing to defend in front of a
                      regulator. Every step leaves a trail. The infrastructure sits in your
                      accounts rather than mine, so leaving is a handover and not a hostage
                      negotiation. And the judgment stays where it belongs, which is with you.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* My Approach / Philosophy */}
      <section className="py-24 bg-cream-2/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 font-display">
                My <GradientText>Approach</GradientText>
              </h2>
              <p className="text-ink-3 max-w-2xl mx-auto">
                Three principles that guide every project I take on.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'tracking' as const,
                title: 'Facts Over Judgment',
                description:
                  "The model is allowed to read, extract and route. It is never allowed to decide. The call is made by deterministic code you can read line by line."
              },
              {
                icon: 'build' as const,
                title: 'Systems Over Tactics',
                description:
                  "One-off campaigns are a waste. I build systems that compound over time. Infrastructure that works whether you're paying attention or not."
              },
              {
                icon: 'scale' as const,
                title: 'Auditable Over Clever',
                description:
                  "If a decision cannot be explained to a regulator, a partner or a patient, it does not ship. Every step leaves a trail, on infrastructure you own."
              }
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <GlassCard className="p-8 h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-line flex items-center justify-center mx-auto mb-6">
                    <StepIcon type={item.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-4">{item.title}</h3>
                  <p className="text-ink-3 leading-relaxed">{item.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 font-display">
                The <GradientText>Stack</GradientText>
              </h2>
              <p className="text-ink-3">
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
                  <p className="text-xs font-mono text-ink-3 uppercase tracking-wider">
                    {tool.category}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Philosophy */}
      <section className="py-24 bg-cream-2/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -top-6 -left-4 text-8xl text-neon-green/20 font-serif">&ldquo;</div>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display text-ink text-center leading-relaxed pl-8">
                If you have to do it twice,{' '}
                <GradientText>automate it.</GradientText>
              </blockquote>
              <p className="text-center text-ink-3 mt-6 font-mono text-sm">
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
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 font-display">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-ink-3 mb-10 max-w-xl mx-auto">
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
