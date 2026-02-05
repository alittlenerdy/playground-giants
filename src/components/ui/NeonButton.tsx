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
  green: 'bg-neon-green text-black hover:shadow-[0_0_40px_rgba(0,255,0,0.6)]',
  purple: 'bg-neon-purple text-white hover:shadow-[0_0_40px_rgba(157,0,255,0.6)]',
  blue: 'bg-neon-blue text-black hover:shadow-[0_0_40px_rgba(0,217,255,0.6)]'
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
    font-bold rounded-lg
    shadow-[0_0_20px_rgba(0,255,0,0.3)]
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
