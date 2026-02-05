'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  GradientText,
  NeonButton,
  GlassCard,
  ScrollReveal,
  AnimatedCounter
} from '@/components/ui'
import { CAL_LINKS } from '@/lib/constants'

export default function FencedUpCaseStudyPage() {
  return (
    <div className="min-h-screen bg-space-deep">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            {/* Status Bar */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-white/60">
                CASE: HIGH-TICKET SCALE
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-white/60">
                SYSTEM: ACQUISITION ENGINE
              </span>
              <span className="px-3 py-1 bg-neon-green/20 border border-neon-green/30 rounded-full text-sm font-mono text-neon-green">
                VELOCITY: +147% PIPELINE GROWTH
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display text-center">
              Scaling High-Ticket Local Revenue by{' '}
              <GradientText>147%</GradientText>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-10 text-center">
              How we installed the automated Acquisition Engine to capture demand for a high-volume
              local service business.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-green/20 to-neon-blue/20 rounded-2xl blur-xl" />
              <Image
                src="/images/Screenshot-2025-11-24-at-14.26.24.avif"
                width={800}
                height={500}
                alt="Screenshot of Fenced Up website showing local SEO metrics"
                className="relative rounded-xl border border-white/10 shadow-2xl w-full"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-space-mid/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <ScrollReveal>
              <div className="text-4xl md:text-5xl font-bold text-neon-green mb-2">
                <AnimatedCounter end={715} />
              </div>
              <p className="text-white/40 text-sm">Ad Sessions</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-4xl md:text-5xl font-bold text-neon-blue mb-2">
                <AnimatedCounter end={5400} suffix="+" />
              </div>
              <p className="text-white/40 text-sm">Engagement Events</p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-4xl md:text-5xl font-bold text-neon-purple mb-2">
                <AnimatedCounter end={883} />
              </div>
              <p className="text-white/40 text-sm">Active Users</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Situational Analysis */}
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">
              1. Situational Analysis
            </h2>
            <GlassCard className="p-8 mb-12">
              <ul className="space-y-4 text-white/70">
                <li className="flex gap-3">
                  <span className="text-neon-green shrink-0">→</span>
                  <span>
                    The client possessed a high-quality service delivery mechanism but suffered from{' '}
                    <strong className="text-white">analog dependency</strong>. Reliance on
                    inconsistent word-of-mouth created a &apos;feast or famine&apos; revenue cycle,
                    with zero data visibility into real-time market demand.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neon-green shrink-0">→</span>
                  <span>
                    They had no web presence, tracking, or local visibility — and relied solely on
                    word-of-mouth.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neon-green shrink-0">→</span>
                  <span>
                    The goal: build every core system from the ground up — a modern Webflow website,
                    an optimized Google Business Profile (GBP), domain configuration, and analytics
                    infrastructure to enable data-driven growth.
                  </span>
                </li>
              </ul>
            </GlassCard>
          </ScrollReveal>

          {/* Mission Parameters */}
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">
              2. Mission Parameters
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { label: 'Core Infrastructure', desc: 'to maximize conversion velocity' },
                { label: 'Market Dominance', desc: 'via localized reputation assets' },
                { label: 'RevOps', desc: 'to automate the lead-to-calendar journey' },
                { label: 'Acquisition Engine', desc: 'to capture high-intent search traffic' },
                { label: 'Conversion Tracking', desc: 'for calls, forms, and ad performance' }
              ].map((item) => (
                <GlassCard key={item.label} className="p-4">
                  <span className="text-neon-green font-semibold">{item.label}</span>
                  <span className="text-white/60"> {item.desc}</span>
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>

          {/* System Deployment */}
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">
              3. System Deployment
            </h2>
          </ScrollReveal>

          {/* Phase 1 */}
          <ScrollReveal>
            <GlassCard className="p-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                <span className="text-neon-green">Phase 1:</span> Core Infrastructure
              </h3>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex gap-2">
                  <span className="text-neon-green">✓</span>
                  Rebuilt the entire Fenced Up website from HTML into Webflow with no prior template.
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-green">✓</span>
                  Designed & developed five localized landing pages (Katy, Memorial, West Houston,
                  Sugar Land, and Main Houston).
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-green">✓</span>
                  Implemented responsive layouts, lazy-loading, WebP imagery, async scripts, and
                  schema-based metadata for high Pagespeed performance.
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-green">✓</span>
                  Integrated lead-capture forms connected through native Webflow CMS and Zapier /
                  Pipedream for automations.
                </li>
              </ul>
            </GlassCard>
          </ScrollReveal>

          {/* Video Embed */}
          <ScrollReveal>
            <div className="mb-8 rounded-xl overflow-hidden border border-white/10">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.youtube.com/embed/K383IQcjTvQ?autoplay=0&mute=1&controls=1&loop=1&playlist=K383IQcjTvQ&showinfo=0&rel=0"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Fenced Up Case Study Video"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Phase 2 */}
          <ScrollReveal>
            <GlassCard className="p-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                <span className="text-neon-blue">Phase 2:</span> Asset Configuration
              </h3>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex gap-2">
                  <span className="text-neon-blue">✓</span>
                  Created brand identity (logo, color palette, fonts).
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-blue">✓</span>
                  Registered & connected domain (getyoufencedup.com) with SSL enabled.
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-blue">✓</span>
                  Configured DNS records and redirects to support future subdomains.
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-blue">✓</span>
                  Established branded email and CRM forwarding.
                </li>
              </ul>
              <div className="flex justify-center">
                <Image
                  src="/images/Screenshot-2025-11-24-at-15.51.38.png"
                  alt="Fenced Up logo variations"
                  width={700}
                  height={400}
                  className="rounded-lg border border-white/10"
                />
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Phase 3 */}
          <ScrollReveal>
            <GlassCard className="p-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                <span className="text-neon-purple">Phase 3:</span> Market Trust Protocols
              </h3>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex gap-2">
                  <span className="text-neon-purple">✓</span>
                  Claimed and verified Fenced Up&apos;s GBP in-person using photo verification.
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-purple">✓</span>
                  Completed categories, service areas, attributes, hours, and UTM-linked calls to
                  action.
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-purple">✓</span>
                  Uploaded localized images and regular posts to build search relevance.
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-purple">✓</span>
                  Implemented keyword targeting for &quot;fence installation&quot;, &quot;cedar
                  fencing&quot;, and &quot;treated pine fencing Houston.&quot;
                </li>
              </ul>
              <div className="flex justify-center">
                <Image
                  src="/images/Screenshot-2025-11-24-at-15.38.18.png"
                  alt="GBP post updates dashboard"
                  width={500}
                  height={300}
                  className="rounded-lg border border-white/10"
                />
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Phase 4 */}
          <ScrollReveal>
            <GlassCard className="p-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                <span className="text-neon-green">Phase 4:</span> Revenue Operations (RevOps)
              </h3>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex gap-2">
                  <span className="text-neon-green">✓</span>
                  <span>Deployed Server-Side Tracking (GTM) to bypass cookie restrictions and capture 100% of conversion data.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-green">✓</span>
                  <span>Unified cross-channel attribution (Google Ads + Organic) into a single &quot;Source of Truth&quot; dashboard.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-green">✓</span>
                  <span>Engineered a live Executive view for real-time visibility into Cost Per Acquisition (CPA) and Pipeline ROI.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-neon-green">✓</span>
                  <span>Automated the feedback loop between CRM status and Ad Platforms to optimize for revenue, not just leads.</span>
                </li>
              </ul>
              <div className="flex justify-center">
                <Image
                  src="/images/Fenced_Up_Website_Traffic_Engagement_Dashboard_Webflow.jpg"
                  alt="Website traffic dashboard"
                  width={800}
                  height={500}
                  className="rounded-lg border border-white/10"
                />
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-space-mid/50 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-mono text-white/60 mb-10 tracking-wider">POWERED BY</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { src: '/images/GTM.png', alt: 'Google Tag Manager' },
              { src: '/images/Google-AdWords-logo-500x281.png', alt: 'Google Ads' },
              { src: '/images/Looker-Studio-Logo-300x141.png', alt: 'Looker Studio' },
              { src: '/images/Logo_Google_Analytics.png', alt: 'Google Analytics' }
            ].map((logo) => (
              <div key={logo.alt} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Ready to dominate <GradientText>your neighborhood?</GradientText>
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Stop chasing leads. Start attracting them.
            </p>
            <NeonButton href={CAL_LINKS.MAIN} size="lg" external>
              Get Your Free Website Audit →
            </NeonButton>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
