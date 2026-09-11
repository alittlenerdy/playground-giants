import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CONTACT } from '@/lib/constants'

// Privacy policy. Written 2026-09-11.
//
// Google's OAuth brand verification (needed for Google Ads API Basic access)
// requires a publicly fetchable privacy policy on this domain, linked from the
// homepage. The site had none: /privacy and four other legal paths all 404'd.
//
// 🔴 EVERY STATEMENT HERE WAS READ FROM THE CODE OR THE LIVE SITE, NOT A
// TEMPLATE. If you add a tracker, a form, an embed or a vendor, this page is
// now wrong until it is updated. The collection points as of writing:
//   - GA4 (G-VCE75005SR) via gtag.js in src/app/layout.tsx, so EVERY page.
//     No GTM container was found in the code or the live homepage HTML.
//   - Fonts from fonts.googleapis.com and api.fontshare.com, every page.
//   - Cal.com: CAL_LINKS in lib/constants.ts, plus the iframe on /contact.
//   - The /agency-partner form -> /api/contact -> Resend -> Jimmy's inbox.
//     Four fields, no database. The IP rate limiter is an in-memory Map.
//   - A youtube.com (not nocookie) embed on /case-studies/fenced-up.
//   - Mail: MX records point at Google Workspace (dig, 2026-09-11).
//   - No first-party cookies: no Set-Cookie on /, /contact or
//     /agency-partner (read live 2026-09-11).
//
// 🔴 NO COMPLIANCE CLAIMS. No GDPR, CCPA, HIPAA or SOC 2 language. This page
// discloses practice; it does not certify anything. And no invented numbers:
// there is no retention period because none exists in the code, and the GA4
// retention setting was not read, so it is referenced, not quoted.
//
// Server component, so metadata lives here rather than in a layout.tsx.
export const metadata: Metadata = {
  title: 'Privacy policy | Playground Giants',
  description:
    'What playgroundgiants.com collects, where it goes, and how to have it deleted. Google Analytics, Cal.com bookings, one contact form, and nothing else.'
}

const UPDATED = 'September 11, 2026'

const SHORT_VERSION = [
  'If you only browse, Google Analytics records which pages you viewed. It does not get your name or email.',
  'If you book a call or send the partner form, your name and email come to me so I can reply.',
  'I do not sell or rent your information.',
  'Email me and I will delete what I hold about you.'
]

const linkClass = 'text-blue-deep font-semibold hover:underline'

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium tracking-tight text-ink mb-3">{title}</h2>
      <div className="space-y-4 text-ink-2 leading-relaxed">{children}</div>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <section className="pt-36 pb-14 md:pt-44 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-deep mb-6">
            Privacy policy · Last updated {UPDATED}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-ink mb-6">
            What happens to your information here.
          </h1>
          <p className="font-display text-lg text-ink-2 leading-relaxed">
            Playground Giants is run by me, Jimmy Hackett. This page lists what this website
            collects, where it goes, and how to have it deleted. It describes what the site
            actually does, and nothing it does not.
          </p>
        </div>
      </section>

      {/* ── The short version ────────────────────────────────────────────── */}
      <section className="py-10 border-b border-line-soft bg-cream-2/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-line bg-card px-6 py-5">
            <h2 className="font-display text-lg font-semibold text-ink mb-3">The short version</h2>
            <ul className="space-y-2">
              {SHORT_VERSION.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-ink-3 leading-relaxed">
                  <span className="text-blue-deep font-semibold shrink-0">·</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── The detail ───────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Section title="When you browse">
            <p>
              I use Google Analytics 4 on every page to see which pages get read. It sets cookies
              so it can tell a returning visitor from a new one, and it reports the pages you
              viewed, how you arrived, your approximate location, and your device and browser. I
              see that as totals and trends. Nothing on this site sends your name or email to it.
            </p>
            <p>
              You can block it with your browser&apos;s cookie settings, a content blocker, or{' '}
              <ExternalLink href="https://tools.google.com/dlpage/gaoptout">
                Google&apos;s opt-out add-on
              </ExternalLink>
              . The site works the same either way.
            </p>
            <p>
              The site sets no cookies of its own. It is hosted on Vercel, and its fonts load from
              Google Fonts and Fontshare, so loading a page shares your IP address and browser
              details with those providers, as any web request does. One case study page embeds a
              YouTube video, and YouTube may set its own cookies when that page loads.
            </p>
          </Section>

          <Section title="When you book a call">
            <p>
              The booking links and the calendar on the contact page are run by Cal.com. When you
              book, you give your name, your email, and anything you choose to add, and Cal.com
              sends those details to me so the meeting can happen. The calendar on the contact page
              loads from Cal.com as soon as you open that page. Cal.com handles what you enter
              under <ExternalLink href="https://cal.com/privacy">its own privacy policy</ExternalLink>.
            </p>
          </Section>

          <Section title="When you send the partner form">
            <p>
              The form on the Agency Partner page asks for four things: your name, your email,
              your agency&apos;s website, and a monthly revenue range. When you submit it, the site
              emails those four answers to my inbox through Resend, an email delivery service.
              Nothing from the form is saved to a database. To limit spam, the server keeps your IP
              address in memory, not in a database, to count recent submissions.
            </p>
          </Section>

          <Section title="When you email me">
            <p>
              Email to me, including anything sent to{' '}
              <a href={`mailto:${CONTACT.EMAIL}`} className={linkClass}>
                {CONTACT.EMAIL}
              </a>{' '}
              and every partner form submission, is stored in my Google Workspace mailbox.
            </p>
          </Section>

          <Section title="What I do with it, and how long I keep it">
            <p>
              I use your details to reply to you, to hold the call you booked, and to follow up on
              what you asked about. I do not sell or rent your information.
            </p>
            <p>
              There is no automatic deletion schedule. Emails and bookings stay in my mailbox and
              my Cal.com account until they are deleted. If you want yours deleted, email me and I
              will do it. Google Analytics keeps its data according to the retention setting on my
              account, and Cal.com, Resend and Vercel keep their own records under their own
              policies.
            </p>
          </Section>

          <Section title="Google account data">
            <p>
              Nobody signs in to this website, and it never asks for access to your Google
              account. Separately, my own internal tools use Google APIs, including the Google Ads
              API, to manage and report on Google Ads accounts that clients have given me access
              to. That data is used only to run and report on that client&apos;s advertising. I do
              not sell it, and I do not use it to advertise to anyone else.
            </p>
          </Section>

          <Section title="Questions and changes">
            <p>
              For a copy of what I hold about you, a correction, or a deletion, email{' '}
              <a href={`mailto:${CONTACT.EMAIL}`} className={linkClass}>
                {CONTACT.EMAIL}
              </a>
              . If anything on this page changes, I will update it and the date at the top.
            </p>
          </Section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
