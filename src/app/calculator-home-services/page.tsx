import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How Much Revenue Is Sitting In Your CRM? | Free Calculator',
  description:
    'Most home service businesses have 20-40% of leads sitting uncontacted. Use our free 60-second calculator to see exactly how much revenue you are losing right now.',
  openGraph: {
    title: 'How Much Revenue Is Sitting In Your CRM? | Free Calculator',
    description:
      'Most home service businesses have 20-40% of leads sitting uncontacted. Use our free 60-second calculator to see exactly how much revenue you are losing right now.',
    images: ['/images/og-1200x630.png']
  }
}

export default function CalculatorHomeServicesPage() {
  return (
    <div className="body-base">
      <Header />

      {/* Hero Section */}
      <section className="section-hero">
        <div className="container-main">
          <h1 className="hero-heading">How Much Revenue Is Sitting In Your CRM?</h1>
          <p className="hero-subhead">
            Most home service businesses have 20-40% of leads sitting uncontacted. That&apos;s
            thousands in lost jobs. Find out how much in 60 seconds.
          </p>
          <a href="#calculator" className="button-primary hero w-button">
            Calculate My Lost Revenue
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-problem">
        <div className="w-layout-blockcontainer container-main w-container">
          <h2 className="heading-problem">Where Your Revenue Is Leaking</h2>
          <div className="grid-problem">
            <div className="card-problem">
              <div className="icon-stat">40%</div>
              <h3 className="icon-text">Leads Never Contacted</h3>
              <p className="icon-paragraph">
                From Angi, HomeAdvisor, Thumbtack - paid for but sitting cold in your CRM.
              </p>
            </div>
            <div className="card-problem">
              <div className="icon-stat">72hrs</div>
              <h3 className="icon-text">Too Slow to Follow Up</h3>
              <p className="icon-paragraph">
                You&apos;re on a job site. Phone rings. You miss it. By the time you call back,
                they&apos;ve hired someone else.
              </p>
            </div>
            <div className="card-problem">
              <div className="icon-stat">$0</div>
              <h3 className="icon-text">No Follow-Up System</h3>
              <p className="icon-paragraph">
                Relying on sticky notes and memory. That works... until it doesn&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-social">
        <div className="w-layout-blockcontainer container-main w-container">
          <div className="results-text">PROVEN RESULTS</div>
          <h2 className="results-heading">
            We Helped Fenced Up Rescue $40K From Uncontacted Leads
          </h2>
          <div className="stats-grid">
            <div className="results-stat">
              <div className="results-stat-number">147%</div>
              <div className="results-stat-label">Organic Traffic</div>
            </div>
            <div className="results-stat">
              <div className="results-stat-number">+83%</div>
              <div className="results-stat-label">GBP Lift</div>
            </div>
            <div className="results-stat">
              <div className="results-stat-number">47%</div>
              <div className="results-stat-label">Faster Mobile Traffic</div>
            </div>
          </div>
          <div className="the-story">
            <p className="the-story-text">
              In 90 days, we built Fenced Up a lead reactivation system that contacted every lead
              within 60 minutes, followed up 3x over 5 days, and tracked which sources actually
              converted. Result: $40,000 in recovered revenue from leads they&apos;d already paid
              for.
            </p>
            <Link href="/case-studies/fenced-up" className="story-link">
              Read The Full Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="calculator" className="section-cta">
        <div className="w-layout-blockcontainer container-main w-container">
          <h2 className="heading-cta">Ready to Find Your Hidden Revenue?</h2>
          <p className="subhead-cta">Answer 5 quick questions. Get your personalized recovery plan.</p>
          <a href="#calculator" className="button-primary hero w-button">
            Calculate My Lost Revenue -&gt;
          </a>
          <div className="text-tiny">Takes 60 seconds. No email required to see your results.</div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
