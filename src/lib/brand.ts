export const brand = {
  name: 'Playground Giants',
  tagline: 'AI that does the busywork. A human still makes the call.',

  // Repositioned 2026-07-24. The old line ("We don't just move the needle. We
  // break the scoreboard.") and the old voice belonged to the home-services SEO
  // offer. The buyer now is a lawyer, a practice manager, or an operator in a
  // regulated business, and for them swagger reads as risk. Calm and specific
  // outsells confident and loud here.
  voice: {
    primary: 'Plain, specific, first-person. Jimmy solo, never "we".',
    tone: 'Calm and precise. Name the risk before naming the benefit.',
    avoid: [
      'corporate speak',
      'we leverage',
      'synergy',
      'solutions',
      'we/our/us, Playground Giants is one person',
      'invented statistics or percentages',
      'passive-income framing ("just answer the phone")',
      'em-dashes in body copy'
    ]
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
