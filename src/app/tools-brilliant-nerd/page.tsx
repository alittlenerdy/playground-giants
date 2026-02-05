'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GradientText, NeonButton, GlassCard, ScrollReveal } from '@/components/ui'

export default function ToolsBrilliantNerdPage() {
  return (
    <div className="min-h-screen bg-space-deep">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 bg-neon-purple/20 border border-neon-purple/30 rounded-full text-sm font-mono text-neon-purple mb-6">
              INTERNAL TOOL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Screenshot-to-Code AI for <GradientText>Designers</GradientText>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
              Built by Playground Giants. The tool we use internally to ship projects 50% faster.
            </p>
            <NeonButton href="#demo" variant="purple" size="lg">
              See How It Works →
            </NeonButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Section */}
      <section id="demo" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <GlassCard className="p-2 overflow-hidden">
              <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.loom.com/embed/9011541c17904746b655d9f0283bf703?autoplay=0&muted=1"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="Tool Demo"
                />
              </div>
            </GlassCard>
            <p className="text-center text-white/40 text-sm mt-4">
              Video demo of our internal screenshot-to-code workflow
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-space-mid/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-display">
              The Manual Coding Bottleneck
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stat: '50+',
                label: 'Hours wasted per project on manual builds'
              },
              {
                stat: '3x',
                label: 'Longer timelines from design-to-code translation'
              },
              {
                stat: '∞',
                label: 'Frustration from back-and-forth revisions'
              }
            ].map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 100}>
                <GlassCard className="p-6 text-center">
                  <div className="text-4xl font-bold text-neon-purple mb-2">{item.stat}</div>
                  <p className="text-white/60 text-sm">{item.label}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-display">
              How It Works
            </h2>
          </ScrollReveal>

          <div className="space-y-16">
            {[
              {
                step: '01',
                title: 'Upload Screenshot',
                description: 'Drag and drop any UI design, Figma export, or screenshot.',
                image: '/images/Screenshot-2025-12-17-at-12.50.49.png'
              },
              {
                step: '02',
                title: 'AI Generation',
                description: 'Instant conversion to clean, semantic Webflow HTML/CSS.',
                image: '/images/Screenshot-2025-12-17-at-12.51.23.png'
              },
              {
                step: '03',
                title: 'Natural Language Edit',
                description: "Refine the layout by typing commands like 'Make it 4 columns'.",
                image: '/images/Screenshot-2025-12-17-at-12.51.49.png'
              }
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 100}>
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <span className="text-sm font-mono text-neon-green mb-2 block">STEP {item.step}</span>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/60 text-lg">{item.description}</p>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-2xl blur-xl" />
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="relative rounded-xl border border-white/10 shadow-2xl w-full"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-space-mid/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-display">
              Power User Features
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Client-First Ready',
                description: 'Auto-generates classes using the Finsweet naming convention.'
              },
              {
                title: 'Auto-Responsive',
                description: 'Built-in support for Desktop, Tablet, and Mobile breakpoints.'
              },
              {
                title: 'Conversational Edit',
                description: 'Iterate on designs with plain English commands.'
              },
              {
                title: 'Native Structure',
                description: 'Clean DOM elements, no messy custom code blobs.'
              }
            ].map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 50}>
                <GlassCard className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <GlassCard className="p-12">
              <span className="text-sm font-mono text-neon-green mb-4 block">&gt; SYSTEM_READY</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                Want to See It in Action?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                This tool is how we deliver projects faster than anyone else. Book a call to see a live demo.
              </p>
              <NeonButton href="https://cal.com/alittleghost/30min" size="lg" external>
                Book a Demo Call →
              </NeonButton>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
