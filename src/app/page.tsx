'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  GradientText,
  NeonButton,
  GlassCard,
  ScrollReveal,
  AnimatedCounter,
  StepIcon
} from '@/components/ui'
import { CAL_LINKS } from '@/lib/constants'

export default function Home() {
  return (
    <div className="min-h-screen bg-space-deep">
      <Header />

      {/* Hero Section - Full Viewport */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-float animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[150px]" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 255, 0, 0.03) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(0, 255, 0, 0.03) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-sm font-mono text-white/60">
              HOME SERVICES + MEDSPA MARKETING
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 animate-fade-in-up font-display">
            <span className="text-white">Your Competitors Rank Higher.</span>
            <br />
            <GradientText animate>{"Let's Fix That."}</GradientText>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delay-200">
            We help roofing, HVAC, fencing, and home service companies dominate local search.
            More qualified leads. Better rankings. Real results you can measure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300 mb-20">
            <NeonButton href={CAL_LINKS.QUICK} size="lg" external>
              Get Your Free Audit →
            </NeonButton>
            <Link
              href="/case-studies/fenced-up"
              className="px-8 py-4 text-lg font-semibold text-white/70 hover:text-neon-green transition-colors"
            >
              See Our Results
            </Link>
          </div>
        </div>

        {/* Scroll Indicator - positioned at very bottom of hero */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white/60"
          >
            <path
              d="M12 5L12 19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Trust Strip - Logo Marquee */}
      <section className="py-12 border-y border-white/5 bg-space-mid/30">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-mono text-white/40 mb-8">
            POWERED BY MODERN INFRASTRUCTURE
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 shrink-0 px-6">
                  <Image
                    src="/images/google-wordmarks-2x.webp"
                    alt="Google"
                    width={120}
                    height={40}
                    className="h-8 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/images/Logo_Google_Analytics.png"
                    alt="Google Analytics"
                    width={140}
                    height={40}
                    className="h-8 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/images/zapier-logo_white.png"
                    alt="Zapier"
                    width={120}
                    height={40}
                    className="h-6 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/images/Stripe-wordmark---Blurple---Large.png"
                    alt="Stripe"
                    width={100}
                    height={40}
                    className="h-8 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/images/webflow_full.png"
                    alt="Webflow"
                    width={120}
                    height={40}
                    className="h-6 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/images/GTM.png"
                    alt="Google Tag Manager"
                    width={80}
                    height={40}
                    className="h-8 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/images/Looker-Studio-Logo-300x141.png"
                    alt="Looker Studio"
                    width={100}
                    height={40}
                    className="h-7 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/images/large-3435affbf6896b9e737506d30ec5b48f.png"
                    alt="SEMRush"
                    width={120}
                    height={40}
                    className="h-6 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                  {/* Text-based logos for additional SaaS brands */}
                  <span className="text-xl font-bold text-white/50 hover:text-white transition-all tracking-tight">HubSpot</span>
                  <span className="text-xl font-bold text-white/50 hover:text-white transition-all tracking-tight">Calendly</span>
                  <span className="text-xl font-bold text-white/50 hover:text-white transition-all tracking-tight">Slack</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                Sound Familiar?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                These are the problems keeping home service business owners up at night.
                We solve all of them.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                problem: 'Your Competitors Rank Higher',
                solution: 'We reverse-engineer their playbook and outrank them',
                iconType: 'ranking' as const,
                stat: '#1',
                statLabel: 'Target Position'
              },
              {
                problem: 'Leads Cost Too Much',
                solution: 'We cut your cost-per-lead by 40%+ with better targeting',
                iconType: 'money' as const,
                stat: '40%',
                statLabel: 'Avg. CAC Reduction'
              },
              {
                problem: "Can't Track ROI",
                solution: 'Real-time dashboard that shows exactly what\'s working',
                iconType: 'tracking' as const,
                stat: '100%',
                statLabel: 'Transparent Reporting'
              },
              {
                problem: 'No Time to Manage It',
                solution: 'We handle everything—you just answer the phone',
                iconType: 'time' as const,
                stat: '0',
                statLabel: 'Hours of Your Time'
              }
            ].map((item, index) => (
              <ScrollReveal key={item.problem} delay={index * 100}>
                <GlassCard className="p-8 h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <StepIcon type={item.iconType} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.problem}
                      </h3>
                      <p className="text-white/60 mb-4">{item.solution}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-neon-green">
                          {item.stat}
                        </span>
                        <span className="text-sm text-white/40">{item.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section - Case Study Teaser */}
      <section className="py-24 md:py-32 bg-space-mid/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-green/20 to-neon-blue/20 rounded-2xl blur-xl" />
                <Image
                  src="/images/Fenced_Up_Website_Traffic_Engagement_Dashboard_Webflow.jpg"
                  alt="Fenced Up analytics dashboard showing 400% traffic growth"
                  width={600}
                  height={400}
                  className="relative rounded-xl border border-white/10 shadow-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <span className="text-sm font-mono text-neon-green mb-4 block">
                  CASE STUDY: FENCED UP
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                  From Invisible to <GradientText>#1 in Houston</GradientText>
                </h2>
                <p className="text-white/60 mb-8">
                  Fenced Up was spending $5k/month on ads with nothing to show for it.
                  We rebuilt their entire digital presence and turned them into the
                  most visible fencing company in Houston.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-neon-green">
                      <AnimatedCounter end={400} suffix="%" />
                    </div>
                    <p className="text-white/40 text-sm">Traffic Growth</p>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-neon-blue">
                      <AnimatedCounter end={83} suffix="%" />
                    </div>
                    <p className="text-white/40 text-sm">GBP Visibility Increase</p>
                  </div>
                </div>

                <NeonButton href="/case-studies/fenced-up">
                  Read Full Case Study →
                </NeonButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works - Process Timeline */}
      <section id="how-it-works" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                How We <GradientText>Dominate</GradientText> Local Search
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                A proven process that transforms your online presence in 90 days or less.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green via-neon-blue to-neon-purple hidden md:block" />

            {[
              {
                step: '01',
                title: 'Audit Your Shit',
                description:
                  "We tear apart your website, GBP, and competitors. Every leak, every opportunity—nothing's hidden.",
                iconType: 'audit' as const
              },
              {
                step: '02',
                title: 'Build the Machine',
                description:
                  'SEO foundations, Google Business Profile optimization, content strategy, and conversion tracking—all working together.',
                iconType: 'build' as const
              },
              {
                step: '03',
                title: 'Turn It On',
                description:
                  'Launch the campaigns, flip the switches, and watch the leads start rolling in. Real-time dashboard included.',
                iconType: 'launch' as const
              },
              {
                step: '04',
                title: 'Scale & Dominate',
                description:
                  'More revenue with the same effort. We optimize, you grow. Simple as that.',
                iconType: 'scale' as const
              }
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 150}>
                <div className="relative flex gap-6 mb-12 last:mb-0">
                  {/* Step Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-space-deep border-2 border-neon-green/50 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,255,0,0.2)]">
                    <StepIcon type={item.iconType} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <span className="text-xs font-mono text-neon-green mb-1 block">
                      STEP {item.step}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 md:py-32 bg-space-mid/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <GlassCard className="p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                One Price. Everything Included. No Surprises.
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                No hidden fees. No long-term contracts. Just results.
              </p>

              <div className="mb-8">
                <span className="text-sm text-white/40">Starting at</span>
                <div className="text-5xl md:text-6xl font-bold text-neon-green">
                  $2,500<span className="text-2xl text-white/40">/mo</span>
                </div>
              </div>

              <ul className="text-left max-w-md mx-auto mb-10 space-y-3">
                {[
                  'Complete SEO Strategy & Execution',
                  'Google Business Profile Optimization',
                  'Content Creation & Optimization',
                  'Real-Time Analytics Dashboard',
                  'Monthly Strategy Calls',
                  'No Long-Term Contracts'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <span className="text-neon-green">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <NeonButton href="/packages" size="lg">
                See Full Packages →
              </NeonButton>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/10 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Ready to <GradientText animate>Dominate</GradientText>
              <br />
              Local Search?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Book a free 15-minute call. We&apos;ll audit your current setup and show you
              exactly how to outrank your competitors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <NeonButton href={CAL_LINKS.QUICK} size="lg" external>
                Book Your Free Strategy Call →
              </NeonButton>
            </div>

            <p className="text-sm text-white/40">
              No sales pitch. No obligation. Just honest advice.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
