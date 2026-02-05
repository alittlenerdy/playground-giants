import Image from 'next/image'
import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: '/case-studies/fenced-up', label: 'Case Study' },
    { href: '/packages', label: 'Pricing' },
    { href: '/tools-brilliant-nerd', label: 'Tools' },
    { href: '/agency-partner', label: 'Agency Partner' },
    { href: `mailto:${CONTACT.EMAIL}`, label: 'Email', external: true }
  ]

  return (
    <footer className="border-t border-white/10 bg-space-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/White-logo---no-background.svg"
              alt="Playground Giants"
              width={140}
              height={30}
              className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-neon-green transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-neon-green transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-white/30 font-mono">
            {`// ${currentYear} Playground Giants`}
          </p>
        </div>
      </div>
    </footer>
  )
}
