'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import { CAL_LINKS } from '@/lib/constants'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    spend: 'low',
    bottleneck: 'traffic',
    houston: 'yes'
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (formData.spend === 'high' && formData.houston === 'yes') {
      router.push('/thank-you-qualified')
    } else {
      router.push('/thank-you-unqualified')
    }
  }

  return (
    <div className="body-base">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="glow-orb"></div>
          <h1 className="hero-headline">
            <span className="text-gradient">Get More High-Value Leads</span>{' '}
            <span className="text-span">Without Spending More on Ads</span>
          </h1>
          <p className="hero-subheading">
            Stop relying on luck. Proven systems for Home Services &amp; Medical Aesthetics.
          </p>
          <CTAButton href={CAL_LINKS.QUICK} variant="quick">
            Get Your Free Website Audit
          </CTAButton>
          <div className="hero-trust-strip">
            <div className="trust-label">POWERED BY MODERN INFRASTRUCTURE</div>
            <div className="trust-logo-grid">
              <Image
                src="/images/google-wordmarks-2x.webp"
                loading="lazy"
                alt="Google logo with each letter in a different color: blue, red, yellow, blue, green, and red."
                className="client-logo"
                width={240}
                height={80}
              />
              <Image
                src="/images/zapier-logo_white.png"
                loading="lazy"
                alt="Zapier company logo with an orange dash to the left of the word zapier in lowercase white letters."
                className="client-logo"
                width={240}
                height={80}
              />
              <Image
                src="/images/Stripe-wordmark---Blurple---Large.png"
                loading="lazy"
                alt="Stripe wordmark in blurple color."
                className="client-logo"
                width={240}
                height={80}
              />
              <Image
                src="/images/webflow_full.png"
                loading="lazy"
                alt="Webflow company logo with stylized blue 'W' and white text on black background."
                className="client-logo"
                width={240}
                height={80}
              />
              <Image
                src="/images/large-3435affbf6896b9e737506d30ec5b48f.png"
                loading="lazy"
                alt="SEMRush"
                className="client-logo"
                width={240}
                height={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Section */}
      <section className="section-bento">
        <div className="w-layout-blockcontainer container-bento w-container">
          <div className="bento-grid">
            <div className="bento-card">
              <div className="text-wrapper">
                <h2 className="card-title">Web Design</h2>
                <p className="card-text">Fast, high-converting sites built to rank.</p>
              </div>
              <div className="image-wrapper">
                <Image
                  src="/images/Screenshot-2025-11-22-at-17.00.23.png"
                  loading="lazy"
                  width={381}
                  height={300}
                  alt="Advertisement for Houston's premier fencing contractor offering premium fences installed in 14 days or less, with a 14-day guarantee, lifetime warranty, and 4.9/5 rating from 83 reviews, including buttons for a free quote and to view work."
                  className="card-image"
                />
              </div>
            </div>
            <div className="bento-card">
              <h3 className="card-title">Reputation</h3>
              <div className="card-metric">5.0 ★★★★★</div>
            </div>
            <div className="bento-card">
              <h3 className="card-title">Performance</h3>
              <div className="card-metric green">99</div>
              <div className="card-label">Infrastructure Grade</div>
            </div>
            <div className="bento-card">
              <h3 className="card-title">Growth</h3>
              <div className="card-metric pink">+147%</div>
              <div className="card-label">Pipeline Velocity</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="section-cta-final">
        <div className="w-layout-blockcontainer container-cta w-container">
          <h1 className="cta-heading">
            Ready to dominate your <strong>local market</strong>?
          </h1>
          <p className="cta-subhead">Stop chasing leads. Start attracting them.</p>
          <div className="form-block w-form">
            <form
              id="lead-form"
              name="email-form"
              className="form"
              onSubmit={handleSubmit}
            >
              <label htmlFor="name" className="label-main">
                Name
              </label>
              <input
                className="input-main w-input"
                maxLength={256}
                name="name"
                placeholder=""
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <label htmlFor="email" className="label-main">
                Email Address
              </label>
              <input
                className="input-main w-input"
                maxLength={256}
                name="email"
                placeholder=""
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <label htmlFor="field" className="label-main">
                Industry Type
              </label>
              <select
                id="field"
                name="field"
                className="input-main w-select"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              >
                <option value="">Select one...</option>
                <option value="Services">Home Services</option>
                <option value="Medical Aesthetics">Medical Aesthetics</option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="spend-select" className="label-main">
                Monthly Marketing Spend
              </label>
              <select
                id="spend-select"
                name="Monthly-Marketing-Spend"
                className="input-main w-select"
                value={formData.spend}
                onChange={(e) => setFormData({ ...formData, spend: e.target.value })}
              >
                <option value="low">$0-5k</option>
                <option value="med">$5-10k</option>
                <option value="high">$10k+</option>
              </select>

              <label htmlFor="bottleneck" className="label-main">
                Biggest Bottleneck?
              </label>
              <select
                id="bottleneck"
                name="Bottleneck"
                className="input-main w-select"
                value={formData.bottleneck}
                onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
              >
                <option value="traffic">Website traffic</option>
                <option value="quality">Lead quality</option>
                <option value="conversion">Conversion rate</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="houston-select" className="label-main">
                Do you operate in the Houston area?
              </label>
              <select
                id="houston-select"
                name="Location"
                className="input-main w-select"
                value={formData.houston}
                onChange={(e) => setFormData({ ...formData, houston: e.target.value })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <input
                type="submit"
                className="submit-button w-button"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
