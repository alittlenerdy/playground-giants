export const brand = {
  name: 'Playground Giants',
  tagline: "We don't just move the needle. We break the scoreboard.",

  voice: {
    primary: 'Direct, confident, no bullshit',
    tone: 'Results-obsessed with personality',
    avoid: ['corporate speak', 'we leverage', 'synergy', 'solutions']
  },

  colors: {
    neon: {
      green: '#00FF00',
      purple: '#9D00FF',
      blue: '#00D9FF',
      pink: '#FF00FF'
    },
    space: {
      deep: '#0A0E27',
      mid: '#1a1f3a',
      light: '#2d3454'
    },
    accent: {
      warning: '#FFD700',
      success: '#00FF00',
      danger: '#FF006E'
    }
  },

  typography: {
    display: 'font-bold tracking-tight',
    headline: 'font-semibold',
    body: 'font-normal',
    code: 'font-mono'
  },

  gradients: {
    neon: 'from-[#00FF00] via-[#00D9FF] to-[#9D00FF]',
    fire: 'from-[#FF006E] via-[#FF00FF] to-[#9D00FF]',
    ocean: 'from-[#00D9FF] via-[#00FF00] to-[#00D9FF]'
  }
} as const

export type Brand = typeof brand
