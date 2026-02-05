'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GradientText, GlassCard, ScrollReveal } from '@/components/ui'

export default function AgencyPartnerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agencyUrl: '',
    revenue: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error('Form submission error:', data.error)
        setStatus('error')
        return
      }

      setStatus('success')
      setFormData({ name: '', email: '', agencyUrl: '', revenue: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-space-deep">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="text-sm font-mono text-neon-green mb-4 block">
                {`// AGENCY_PARTNER_PROGRAM`}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
                Add an AI Revenue Stream to{' '}
                <GradientText>Your Agency</GradientText>
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Get our white-label AI tool + monthly expert audits. Sell higher-value retainers
                without doing the work.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-8 py-4 bg-neon-green text-black font-bold rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_40px_rgba(0,255,0,0.6)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Claim 1 of 10 Spots →
              </a>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-green/20 to-neon-purple/20 rounded-2xl blur-xl" />
                <Image
                  src="/images/brilliant_nerd-dashboard.png"
                  width={556}
                  height={400}
                  alt="Dashboard interface for Brilliant Nerd showing Upload Design Screenshot page."
                  className="relative rounded-xl border border-white/10 shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section className="py-20 bg-space-mid/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <GlassCard className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">01. White-Label AI</h2>
                  <span className="inline-block px-3 py-1 bg-neon-green/20 text-neon-green text-sm font-mono rounded mb-4">
                    $97/mo Value
                  </span>
                  <ul className="space-y-2 text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="text-neon-green">✓</span> Your Agency Domain
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neon-green">✓</span> Your Custom Branding
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neon-green">✓</span> Client Portal Access
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">02. Strategic Audits</h2>
                  <span className="inline-block px-3 py-1 bg-neon-purple/20 text-neon-purple text-sm font-mono rounded mb-4">
                    $400/mo Value
                  </span>
                  <ul className="space-y-2 text-white/60">
                    <li className="flex items-center gap-2">
                      <span className="text-neon-green">✓</span> We audit your client sites
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neon-green">✓</span> White-label PDF reports
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neon-green">✓</span> Strategy calls included
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">
                Total Value: $500/mo → Partner Price:{' '}
                <span className="text-neon-green">$300/mo</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                Secure Your Spot
              </h2>
              <p className="text-white/60">
                Only 10 spots available for this pilot batch. Priority given to agencies with active
                client rosters.
              </p>
            </div>

            <GlassCard className="p-8">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Application Received!</h3>
                  <p className="text-white/60">
                    Thank you! We&apos;ll review your application and get back to you within 24 hours.
                  </p>
                </div>
              ) : status === 'error' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-accent-danger/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✕</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Something went wrong</h3>
                  <p className="text-white/60 mb-4">
                    Please try again or email us directly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-neon-green hover:underline"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Bob Smith"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@company.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="agencyUrl" className="block text-sm font-medium text-white/70 mb-2">
                      Agency URL
                    </label>
                    <input
                      type="text"
                      id="agencyUrl"
                      name="agencyUrl"
                      required
                      value={formData.agencyUrl}
                      onChange={(e) => setFormData({ ...formData, agencyUrl: e.target.value })}
                      placeholder="https://www.youragency.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium text-white/70 mb-2">
                      Monthly Revenue
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      required
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-colors"
                    >
                      <option value="" className="bg-space-deep">Select one...</option>
                      <option value="<10k" className="bg-space-deep">&lt; $10k/mo</option>
                      <option value="10k - 50k" className="bg-space-deep">$10k - $50k/mo</option>
                      <option value="50k+" className="bg-space-deep">$50k+/mo</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-8 py-4 bg-neon-green text-black font-bold rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_40px_rgba(0,255,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? 'Submitting...' : 'Apply for Partner Access →'}
                  </button>
                </form>
              )}
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
