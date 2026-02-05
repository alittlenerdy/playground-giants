'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
    }, 1000)
  }

  return (
    <div className="body-base">
      <Header />

      {/* Hero Section */}
      <section className="section-partner-hero">
        <div className="container-main">
          <div className="w-layout-grid hero-partner-grid">
            <div className="hero-content-wrapper">
              <div className="text-eyebrow-green">{`// AGENCY_PARTNER_PROGRAM`}</div>
              <h1 className="heading-hero">Add an AI Revenue Stream to Your Agency</h1>
              <p className="text-hero-sub">
                Get our white-label AI tool + monthly expert audits. Sell higher-value retainers
                without doing the work.
              </p>
              <a href="#apply" className="button-primary w-button">
                Claim 1 of 10 Spots
              </a>
            </div>
            <div className="hero-visual-wrapper">
              <Image
                src="/images/brilliant_nerd-dashboard.png"
                loading="lazy"
                width={556}
                height={400}
                alt="Dashboard interface for Brilliant Nerd showing Upload Design Screenshot page."
                className="hero-split-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section className="section-bundle">
        <div className="bundle-card">
          <div className="w-layout-grid bundle-grid-internal">
            <div className="bundle-column">
              <h2 className="bundle-heading">01. White-Label AI</h2>
              <div className="bundle-price-tag">$97/mo Value</div>
              <ul role="list" className="bundle-list w-list-unstyled">
                <li className="bundle-list-item">Your Agency Domain</li>
                <li className="bundle-list-item">Your Custom Branding</li>
                <li className="bundle-list-item">Client Portal Access</li>
              </ul>
            </div>
            <div className="bundle-column">
              <h2 className="bundle-heading">02. Strategic Audits</h2>
              <div className="bundle-price-tag">$400/mo Value</div>
              <ul role="list" className="bundle-list w-list-unstyled">
                <li className="bundle-list-item">We audit your client sites</li>
                <li className="bundle-list-item">White-label PDF reports</li>
                <li className="bundle-list-item">Strategy calls included</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bundle-total-row">
          <h3 className="bundle-total">
            Total Value: $500/mo -&gt; Partner Price: <span className="price-span">$300/mo</span>
          </h3>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="section-application">
        <div className="form-container-narrow">
          <h2 className="form-heading">Secure Your Spot</h2>
          <p className="form-paragraph">
            Only 10 spots available for this pilot batch. Priority given to agencies with active
            client rosters.
          </p>
          <div className="form-partner-apply w-form">
            {status === 'success' ? (
              <div className="w-form-done" style={{ display: 'block' }}>
                <div>Thank you! Your submission has been received!</div>
              </div>
            ) : status === 'error' ? (
              <div className="w-form-fail" style={{ display: 'block' }}>
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="label-main is-terminal">
                  Name
                </label>
                <input
                  className="input-main is-terminal w-input"
                  maxLength={256}
                  name="name"
                  placeholder="bob smith"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <label htmlFor="partner-email" className="label-main is-terminal">
                  Email Address
                </label>
                <input
                  className="input-main is-terminal w-input"
                  maxLength={256}
                  name="email"
                  placeholder="email@company.com"
                  type="email"
                  id="partner-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <label htmlFor="agency-url" className="label-main is-terminal">
                  Agency URL
                </label>
                <input
                  className="input-main is-terminal w-input"
                  maxLength={256}
                  name="agencyUrl"
                  placeholder="https://www.youragency.com"
                  type="text"
                  id="agency-url"
                  required
                  value={formData.agencyUrl}
                  onChange={(e) => setFormData({ ...formData, agencyUrl: e.target.value })}
                />

                <label htmlFor="revenue" className="label-main">
                  Monthly Revenue
                </label>
                <select
                  id="revenue"
                  name="revenue"
                  required
                  className="input-main is-terminal w-select"
                  value={formData.revenue}
                  onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                >
                  <option value="">Select one...</option>
                  <option value="<10k">&lt; $10k/mo</option>
                  <option value="10k - 50k">$10k - $50k/mo</option>
                  <option value="50k+">$50k+/mo</option>
                </select>

                <input
                  type="submit"
                  className="button-primary w-button"
                  value={status === 'loading' ? 'Please wait...' : 'Apply for Partner Access'}
                  disabled={status === 'loading'}
                />
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
