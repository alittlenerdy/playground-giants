import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Enkily editorial palette
        paper: '#FAF6EE',
        card: '#FFFCF6',
        'cream-2': '#F2EADB',
        line: {
          DEFAULT: '#E5DBC8',
          soft: '#EFE6D2'
        },
        ink: {
          DEFAULT: '#1A1308',
          2: '#3D2F1A',
          3: '#776652'
        },
        canary: '#4A95E0',
        'blue-deep': '#2D70BA',
        pink: {
          DEFAULT: '#FF7099',
          soft: '#FFEAF1'
        },
        sage: {
          DEFAULT: '#3E7C6A',
          soft: '#E4F1EB'
        },
        // Legacy keys remapped so old classes re-skin to the new palette
        neon: {
          green: '#4A95E0', // canary
          purple: '#3E7C6A', // sage
          blue: '#2D70BA', // blue-deep
          pink: '#FF7099' // pink
        },
        space: {
          deep: '#FAF6EE', // paper
          mid: '#F2EADB', // cream-2
          light: '#FFFCF6' // card
        },
        accent: {
          warning: '#E0A93E',
          success: '#4A95E0',
          danger: '#FF7099'
        }
      },
      fontFamily: {
        sans: ['var(--font-switzer)', 'system-ui', 'sans-serif'],
        display: ['var(--font-newsreader)', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'Menlo', 'monospace']
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 8px 24px rgba(74, 149, 224, 0.12)' },
          '50%': { boxShadow: '0 12px 32px rgba(74, 149, 224, 0.22)' }
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      backgroundSize: {
        '200%': '200% 200%'
      }
    }
  },
  plugins: [forms, typography]
}

export default config
