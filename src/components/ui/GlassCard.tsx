interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({
  children,
  className = '',
  hover = true
}: GlassCardProps) {
  return (
    <div
      className={`
        bg-card border border-line rounded-2xl shadow-[0_10px_30px_rgba(26,19,8,0.06)]
        ${hover ? 'transition-all duration-300 hover:border-canary/40 hover:shadow-[0_16px_40px_rgba(26,19,8,0.1)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
