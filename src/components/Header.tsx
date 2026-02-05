'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <section className="section-header-wrapper">
      <div className="w-layout-blockcontainer header-section w-container">
        <Link href="/" className="nav-logo-link w-inline-block">
          <Image
            width={186}
            height={40}
            loading="lazy"
            alt="Playground Giants logo – marketing portfolio site"
            src="/images/White-logo---no-background.svg"
            className="nav-logo-image"
          />
        </Link>
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="nav-component w-nav"
        >
          <div className="menu-button w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
          <div className="nav-menu-wrapper w-container">
            <nav role="navigation" className="nav-link-list w-nav-menu">
              <Link href="/packages" className="nav-link w-nav-link">
                Pricing
              </Link>
              <Link href="/blueprint" className="nav-link w-nav-link">
                The Blueprint
              </Link>
              <Link href="/tools-brilliant-nerd" className="nav-link w-nav-link">
                The Tools
              </Link>
              <Link href="/case-studies/fenced-up" className="nav-link w-nav-link">
                Case Study
              </Link>
              <Link href="/about" className="nav-link w-nav-link">
                About
              </Link>
              <Link href="/contact" className="nav-link w-nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
