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
          dark: '#000000',
          panel: 'rgba(5, 12, 28, 0.85)',
          card: 'rgba(10, 22, 48, 0.7)',
          border: 'rgba(0, 240, 255, 0.25)',
          cyan: '#00f0ff',
          blue: '#0066ff',
          purple: '#8a2be2',
          pink: '#ff007f',
          green: '#00ff88',
          gold: '#ffaa00',
          red: '#ff3366',
          white: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'hologram': '0 0 30px rgba(0, 240, 255, 0.35), inset 0 0 20px rgba(0, 240, 255, 0.15)',
        'cyan-glow': '0 0 25px rgba(0, 240, 255, 0.6)',
        'purple-glow': '0 0 25px rgba(138, 43, 226, 0.6)'
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
