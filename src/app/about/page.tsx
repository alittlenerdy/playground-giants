import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GradientText, NeonButton, GlassCard, ScrollReveal } from '@/components/ui'
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

      {/* Hero Section - Terminal Style */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <GlassCard className="p-8 font-mono">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-white/40 text-sm">terminal</span>
              </div>

              {/* Terminal Content */}
              <div className="space-y-2 text-sm md:text-base">
                <p className="text-neon-green">{`> initiating_sequence...`}</p>
                <p className="text-white/70">{`> user: alittleghost`}</p>
                <p className="text-white/70">{`> role: marketing_architect`}</p>
                <p className="text-white/70">{`> mission: kill_manual_work();`}</p>
                <p className="text-white/70">{`> location: houston_tx`}</p>
                <p className="text-neon-green mt-4 text-lg md:text-xl">
                  {`"I don't just build websites. I build revenue engines."`}
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Personal Grid Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal>
              <GlassCard className="p-6 h-48 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-neon-green animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">📍</span>
                </div>
                <p className="absolute bottom-4 left-4 text-white/40 text-sm font-mono">Houston, TX</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <GlassCard className="p-6 h-48 flex flex-col items-center justify-center text-center">
                <div className="text-5xl font-bold text-neon-green mb-2">3,402</div>
                <p className="text-white/40 text-sm font-mono tracking-wider">CUPS OF COFFEE</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <GlassCard className="p-6 h-48 flex items-center justify-center">
                <p className="text-xl md:text-2xl font-semibold text-center">
                  <GradientText>If you have to do it twice, automate it.</GradientText>
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-space-mid/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <ScrollReveal>
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/images/Screenshot-2025-03-24-at-09.50.56.png"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="rounded-2xl border border-white/10"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                  Building Systems, <GradientText>Not Just Sites.</GradientText>
                </h2>
                <div className="space-y-4 text-white/60 text-lg">
                  <p>
                    I spent years watching business owners burn cash on manual marketing tasks. I
                    realized that a pretty website is useless if it doesn&apos;t have an engine behind
                    it.
                  </p>
                  <p>
                    That&apos;s why I built Playground Giants: to replace manual grunt work with
                    automated revenue infrastructure.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-10">
                  <p className="text-sm font-mono text-white/40 mb-6 tracking-wider">POWERED BY</p>
                  <div className="flex flex-wrap items-center gap-6">
                    {[
                      { src: '/images/GTM.png', alt: 'Google Tag Manager' },
                      { src: '/images/Google-AdWords-logo-500x281.png', alt: 'Google Ads' },
                      { src: '/images/Looker-Studio-Logo-300x141.png', alt: 'Looker Studio' },
                      { src: '/images/webflow_full.png', alt: 'Webflow' },
                      { src: '/images/Logo_Google_Analytics.png', alt: 'Google Analytics' }
                    ].map((logo) => (
                      <div key={logo.alt} className="bg-white/10 rounded-lg p-3">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={80}
                          height={40}
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <NeonButton href={CAL_LINKS.QUICK} size="lg" external>
              Get Your Free Website Audit →
            </NeonButton>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
