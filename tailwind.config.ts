import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#060816',
        surface: '#0b1022',
        primary: '#7c3aed',
        secondary: '#22d3ee',
        muted: '#94a3b8'
      },
      boxShadow: {
        glow: '0 0 40px rgba(124,58,237,0.25)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(124,58,237,0.25), rgba(34,211,238,0.12), transparent 60%)',
        'card-border': 'linear-gradient(135deg, rgba(124,58,237,0.6), rgba(34,211,238,0.25))'
      }
    }
  },
  plugins: []
};

export default config;
