import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neuro: {
          dark: '#05070B',
          panel: 'rgba(10, 18, 32, 0.85)',
          card: 'rgba(16, 28, 47, 0.75)',
          border: 'rgba(0, 229, 255, 0.15)',
          glow: 'rgba(0, 229, 255, 0.20)',
          cyan: '#00E5FF',
          cyanHover: '#36F6FF',
          blue: '#3B82F6',
          purple: '#A855F7',
          pink: '#A855F7',
          green: '#00FF9C',
          gold: '#FFC857',
          red: '#FF4D6D',
          white: '#F8FAFC',
          textPrimary: '#F8FAFC',
          textSecondary: '#94A3B8',
          textMuted: '#64748B'
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'hologram': '0 8px 32px 0 rgba(0, 0, 0, 0.45), 0 0 25px rgba(0, 229, 255, 0.20), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'cyan-glow': '0 0 20px rgba(0, 229, 255, 0.45)',
        'purple-glow': '0 0 20px rgba(168, 85, 247, 0.45)',
        'red-glow': '0 0 20px rgba(255, 77, 109, 0.45)',
        'green-glow': '0 0 20px rgba(0, 255, 156, 0.45)'
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float': 'float 4s infinite ease-in-out',
        'spin-slow': 'spin 25s linear infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 15px #00f0ff)' },
          '50%': { opacity: '0.6', filter: 'drop-shadow(0 0 30px #00f0ff)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    },
  },
  plugins: [],
};

export default config;
