import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          void: '#05070B',
          dark: '#080D16',
          panel: '#0B1220',
          panelBorder: 'rgba(0, 255, 102, 0.18)',
          panelBorderCyan: 'rgba(0, 240, 255, 0.22)',
          green: '#00FF66',
          greenDim: '#00CC52',
          cyan: '#00F0FF',
          amber: '#FFB800',
          red: '#FF3366',
          purple: '#BD00FF',
          muted: '#8A99AD',
          dim: '#475569',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 15px rgba(0, 255, 102, 0.4), 0 0 30px rgba(0, 255, 102, 0.15)',
        'glow-cyan': '0 0 15px rgba(0, 240, 255, 0.4), 0 0 30px rgba(0, 240, 255, 0.15)',
        'glow-sm-green': '0 0 8px rgba(0, 255, 102, 0.35)',
        'glow-sm-cyan': '0 0 8px rgba(0, 240, 255, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
