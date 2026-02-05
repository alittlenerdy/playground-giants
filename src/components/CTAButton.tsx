import Link from 'next/link'
import { CAL_LINKS } from '@/lib/constants'

interface CTAButtonProps {
  href?: string
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'quick'
}

export default function CTAButton({
  href,
  children,
  className = '',
  variant = 'primary'
}: CTAButtonProps) {
  const calLink = variant === 'quick' ? CAL_LINKS.QUICK : CAL_LINKS.MAIN

  return (
    <Link
      href={href || calLink}
      className={`hero-button w-button ${className}`}
    >
      {children}
    </Link>
  )
}
