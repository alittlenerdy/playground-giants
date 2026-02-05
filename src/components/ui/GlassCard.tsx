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
        bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
        ${hover ? 'transition-all duration-300 hover:bg-white/10 hover:border-neon-green/30 hover:shadow-[0_0_30px_rgba(0,255,0,0.1)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
