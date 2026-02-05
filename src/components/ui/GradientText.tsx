'use client'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export default function GradientText({
  children,
  className = '',
  animate = false
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple bg-clip-text text-transparent ${
        animate ? 'bg-200% animate-gradient-x' : ''
      } ${className}`}
    >
      {children}
    </span>
  )
}
