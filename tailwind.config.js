/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,scss,css}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#070A0F',
          950: '#070A0F',
          900: '#0D1118',
          850: '#10141d',
          800: '#121722',
          700: '#1a2030',
          600: '#252d3f',
        },
        accent: {
          DEFAULT: '#8B7CFF',
          50: '#f5f3ff',
          100: '#ede9ff',
          200: '#ddd6ff',
          300: '#c4b8ff',
          400: '#a99bff',
          500: '#8B7CFF',
          600: '#7b6bef',
          700: '#6a59d8',
          800: '#5948b8',
          900: '#4a3c99',
        },
        sky: {
          DEFAULT: '#38BDF8',
          400: '#38BDF8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        cloud: {
          DEFAULT: '#F4F7FB',
          100: '#F4F7FB',
          200: '#98A2B3',
          300: '#98A2B3',
          400: '#667085',
          500: '#667085',
          600: '#475467',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['Space Grotesk', 'Geist', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-3xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'display-2xl': ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.4rem, 2.5vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-accent': '0 0 24px -6px rgba(139, 124, 255, 0.35)',
        'glow-sky': '0 0 24px -6px rgba(56, 189, 248, 0.3)',
        'glow-sm': '0 0 16px -4px rgba(139, 124, 255, 0.2)',
        'card': '0 1px 3px 0 rgba(0,0,0,0.3), 0 1px 2px -1px rgba(0,0,0,0.2)',
        'card-hover': '0 12px 40px -12px rgba(0,0,0,0.5), 0 0 24px -8px rgba(139,124,255,0.1)',
        'elevated': '0 20px 60px -20px rgba(0,0,0,0.6)',
        'lift': '0 8px 24px -8px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'grid-faint': "linear-gradient(to right, rgba(139,124,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,124,255,0.03) 1px, transparent 1px)",
        'accent-gradient': 'linear-gradient(135deg, #8B7CFF, #38BDF8)',
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'blink': 'blink 1.2s step-end infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}