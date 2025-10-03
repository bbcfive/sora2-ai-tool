import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0a0f25',
        primary: {
          DEFAULT: '#f6c445',
          foreground: '#0b1220'
        },
        secondary: '#0f1630',
        accent: '#f08b2e',
        muted: '#94a3b8'
      },
      boxShadow: {
        glow: '0 0 45px -10px rgba(246, 196, 69, 0.4)'
      }
    }
  },
  plugins: []
};

export default config;
