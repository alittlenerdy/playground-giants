export const brand = {
  name: 'Playground Giants',
  tagline: "We don't just move the needle. We break the scoreboard.",

  voice: {
    primary: 'Direct, confident, no bullshit',
    tone: 'Results-obsessed with personality',
    avoid: ['corporate speak', 'we leverage', 'synergy', 'solutions']
  },

  colors: {
    paper: '#FAF6EE',
    card: '#FFFCF6',
    cream2: '#F2EADB',
    line: '#E5DBC8',
    ink: '#1A1308',
    ink2: '#3D2F1A',
    ink3: '#776652',
    canary: '#4A95E0',
    blueDeep: '#2D70BA',
    pink: '#FF7099',
    pinkSoft: '#FFEAF1',
    sage: '#3E7C6A',
    sageSoft: '#E4F1EB',
    // Legacy aliases mapped to the editorial palette
    neon: {
      green: '#4A95E0',
      purple: '#3E7C6A',
      blue: '#2D70BA',
      pink: '#FF7099'
    },
    space: {
      deep: '#FAF6EE',
      mid: '#F2EADB',
      light: '#FFFCF6'
    },
    accent: {
      warning: '#E0A93E',
      success: '#4A95E0',
      danger: '#FF7099'
    }
  },

  typography: {
    display: 'font-bold tracking-tight',
    headline: 'font-semibold',
    body: 'font-normal',
    code: 'font-mono'
  },

  gradients: {
    neon: 'from-[#4A95E0] via-[#2D70BA] to-[#FF7099]',
    fire: 'from-[#FF7099] via-[#4A95E0] to-[#3E7C6A]',
    ocean: 'from-[#2D70BA] via-[#4A95E0] to-[#2D70BA]'
  }
} as const

export type Brand = typeof brand
