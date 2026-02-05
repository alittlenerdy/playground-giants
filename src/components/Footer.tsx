import Image from 'next/image'
import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="footer">
      <div className="w-layout-blockcontainer footer-container w-container">
        <Link href="/" className="link-block w-inline-block">
          <Image
            src="/images/White-logo---no-background.svg"
            loading="lazy"
            alt="Playground Giants white logo on black background"
            className="image-4"
            width={186}
            height={40}
          />
        </Link>
        <div className="footer-text">
          {`// © ${currentYear} Playground Giants · Houston, TX`}
        </div>
        <div className="footer-links">
          <Link href="/" className="footer-link">
            Portfolio
          </Link>
          <Link href="/blueprint" className="footer-link">
            The Blueprint
          </Link>
          <Link href="/tools-brilliant-nerd" className="footer-link">
            Tools
          </Link>
          <Link href="/packages" className="footer-link">
            Pricing
          </Link>
          <Link href="/case-studies/fenced-up" className="footer-link">
            Case Study
          </Link>
          <Link href="/agency-partner" className="footer-link">
            Agency Partner
          </Link>
          <a
            href={`mailto:${CONTACT.EMAIL}?subject=You've Got Mail From Your Site!`}
            className="footer-link"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
