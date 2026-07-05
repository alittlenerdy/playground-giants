import Link from 'next/link'

interface NeonButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'green' | 'purple' | 'blue'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
}

const variantStyles = {
  green: 'bg-canary text-paper hover:shadow-[0_14px_32px_rgba(74,149,224,0.28)]',
  purple: 'bg-sage text-paper hover:shadow-[0_14px_32px_rgba(62,124,106,0.28)]',
  blue: 'bg-blue-deep text-paper hover:shadow-[0_14px_32px_rgba(45,112,186,0.28)]'
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

export default function NeonButton({
  href,
  children,
  variant = 'green',
  size = 'md',
  className = '',
  external = false
}: NeonButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    shadow-[0_8px_20px_rgba(26,19,8,0.08)]
    transition-all duration-300
    hover:-translate-y-0.5
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={baseStyles}>
      {children}
    </Link>
  )
}
