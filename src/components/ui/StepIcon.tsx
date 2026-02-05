'use client'

interface StepIconProps {
  type: 'audit' | 'build' | 'launch' | 'scale' | 'ranking' | 'money' | 'tracking' | 'time'
  className?: string
}

export default function StepIcon({ type, className = '' }: StepIconProps) {
  const icons = {
    // Magnifying glass with target/scan aesthetic
    audit: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-8 h-8 ${className}`}
      >
        <defs>
          <linearGradient id="auditGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF00" />
            <stop offset="100%" stopColor="#00D9FF" />
          </linearGradient>
          <filter id="auditGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#auditGlow)">
          <circle cx="20" cy="20" r="14" stroke="url(#auditGrad)" strokeWidth="3" fill="none" />
          <line x1="30" y1="30" x2="42" y2="42" stroke="url(#auditGrad)" strokeWidth="4" strokeLinecap="round" />
          <line x1="20" y1="12" x2="20" y2="28" stroke="url(#auditGrad)" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="20" x2="28" y2="20" stroke="url(#auditGrad)" strokeWidth="2" strokeLinecap="round" />
          <path d="M11 14V11H14" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" />
          <path d="M26 11H29V14" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" />
          <path d="M29 26V29H26" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 29H11V26" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    ),

    // Gear/cog with circuit lines
    build: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-8 h-8 ${className}`}
      >
        <defs>
          <linearGradient id="buildGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="100%" stopColor="#9D00FF" />
          </linearGradient>
          <filter id="buildGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#buildGlow)">
          <path
            d="M24 8L26.5 4H21.5L24 8ZM24 40L21.5 44H26.5L24 40ZM8 24L4 21.5V26.5L8 24ZM40 24L44 26.5V21.5L40 24ZM11.5 11.5L7.5 9.5L9.5 7.5L11.5 11.5ZM36.5 36.5L40.5 38.5L38.5 40.5L36.5 36.5ZM36.5 11.5L38.5 7.5L40.5 9.5L36.5 11.5ZM11.5 36.5L9.5 40.5L7.5 38.5L11.5 36.5Z"
            fill="url(#buildGrad)"
          />
          <circle cx="24" cy="24" r="12" stroke="url(#buildGrad)" strokeWidth="3" fill="none" />
          <circle cx="24" cy="24" r="5" fill="url(#buildGrad)" />
          <line x1="24" y1="19" x2="24" y2="14" stroke="#00D9FF" strokeWidth="2" />
          <line x1="29" y1="24" x2="34" y2="24" stroke="#00D9FF" strokeWidth="2" />
          <line x1="24" y1="29" x2="24" y2="34" stroke="#9D00FF" strokeWidth="2" />
          <line x1="19" y1="24" x2="14" y2="24" stroke="#9D00FF" strokeWidth="2" />
        </g>
      </svg>
    ),

    // Rocket/power launch
    launch: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-8 h-8 ${className}`}
      >
        <defs>
          <linearGradient id="launchGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9D00FF" />
            <stop offset="50%" stopColor="#00FF00" />
            <stop offset="100%" stopColor="#00D9FF" />
          </linearGradient>
          <filter id="launchGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#launchGlow)">
          <path
            d="M24 4C24 4 32 12 32 24C32 32 28 38 24 42C20 38 16 32 16 24C16 12 24 4 24 4Z"
            stroke="url(#launchGrad)"
            strokeWidth="2.5"
            fill="none"
          />
          <circle cx="24" cy="18" r="4" fill="url(#launchGrad)" />
          <path d="M16 28L8 36L12 28" stroke="#9D00FF" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
          <path d="M32 28L40 36L36 28" stroke="#00D9FF" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
          <path d="M24 42L21 46L24 44L27 46L24 42Z" fill="#00FF00" />
          <path d="M22 44L20 47" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" />
          <path d="M26 44L28 47" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    ),

    // Growth chart with arrow
    scale: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-8 h-8 ${className}`}
      >
        <defs>
          <linearGradient id="scaleGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FF00" />
            <stop offset="100%" stopColor="#00D9FF" />
          </linearGradient>
          <filter id="scaleGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#scaleGlow)">
          <path d="M8 40V8M8 40H40" stroke="url(#scaleGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 34L20 26L28 30L40 14" stroke="url(#scaleGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M36 8L40 14L34 14" stroke="#00FF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="12" cy="34" r="3" fill="#00FF00" />
          <circle cx="20" cy="26" r="3" fill="#00D9FF" />
          <circle cx="28" cy="30" r="3" fill="#9D00FF" />
          <circle cx="40" cy="14" r="3" fill="#00FF00" />
          <line x1="8" y1="26" x2="36" y2="26" stroke="url(#scaleGrad)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
          <line x1="8" y1="18" x2="36" y2="18" stroke="url(#scaleGrad)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
        </g>
      </svg>
    ),

    // Ranking podium with crown
    ranking: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-8 h-8 ${className}`}
      >
        <defs>
          <linearGradient id="rankGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF006E" />
            <stop offset="100%" stopColor="#00FF00" />
          </linearGradient>
          <filter id="rankGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#rankGlow)">
          <rect x="6" y="28" width="10" height="16" fill="#FF006E" opacity="0.6" rx="2" />
          <rect x="19" y="20" width="10" height="24" fill="url(#rankGrad)" rx="2" />
          <rect x="32" y="12" width="10" height="32" fill="#00FF00" rx="2" />
          <text x="11" y="38" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">3</text>
          <text x="24" y="32" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">2</text>
          <text x="37" y="24" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">1</text>
          <path d="M32 8L34 4L37 6L40 4L42 8H32Z" fill="#FFD700" />
        </g>
      </svg>
    ),

    // Money/Dollar with cost reduction
    money: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-8 h-8 ${className}`}
      >
        <defs>
          <linearGradient id="moneyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF00" />
            <stop offset="100%" stopColor="#00D9FF" />
          </linearGradient>
          <filter id="moneyGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#moneyGlow)">
          <circle cx="20" cy="24" r="16" stroke="url(#moneyGrad)" strokeWidth="3" fill="none" />
          <path
            d="M20 12V14M20 34V36M16 18C16 16 18 14 20 14C22 14 24 15 24 17C24 19 22 20 20 21C18 22 16 23 16 25C16 27 18 29 20 29C22 29 24 28 24 26M20 14V16M20 28V30"
            stroke="url(#moneyGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path d="M36 16L36 32M36 32L30 26M36 32L42 26" stroke="#00FF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="38" cy="12" r="2" fill="#00FF00" />
        </g>
      </svg>
    ),

    // Dashboard/Analytics tracking
    tracking: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-8 h-8 ${className}`}
      >
        <defs>
          <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="100%" stopColor="#9D00FF" />
          </linearGradient>
          <filter id="trackGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#trackGlow)">
          <rect x="4" y="6" width="40" height="28" rx="3" stroke="url(#trackGrad)" strokeWidth="2.5" fill="none" />
          <path d="M18 34V40H30V34" stroke="url(#trackGrad)" strokeWidth="2.5" />
          <path d="M14 42H34" stroke="url(#trackGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="8" y="10" width="12" height="8" rx="1" fill="#00D9FF" opacity="0.6" />
          <rect x="22" y="10" width="18" height="8" rx="1" fill="#00FF00" opacity="0.6" />
          <path d="M8 26L14 22L20 24L28 18L36 20" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 12L36 14L40 10" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    ),

    // Clock/Time with automation
    time: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-8 h-8 ${className}`}
      >
        <defs>
          <linearGradient id="timeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9D00FF" />
            <stop offset="100%" stopColor="#00FF00" />
          </linearGradient>
          <filter id="timeGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#timeGlow)">
          <circle cx="24" cy="24" r="18" stroke="url(#timeGrad)" strokeWidth="3" fill="none" />
          <path d="M24 14V24L30 28" stroke="url(#timeGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 24C40 32.8 32.8 40 24 40" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M8 24C8 15.2 15.2 8 24 8" stroke="#9D00FF" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M38 18L42 14L40 18L44 18L40 22" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    )
  }

  return icons[type]
}
