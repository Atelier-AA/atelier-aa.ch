import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        // Das alte Theme schaltet bei 960px um, hatte aber nur vier
        // Menüpunkte. Mit fünf (inkl. Insights) überlappt die Navigation dort
        // das Logo, deshalb erst ab 1100px auf die Desktop-Leiste wechseln.
        lg: '1100px',
      },
      colors: {
        ink: '#111111',
        graphite: '#3a3a3a',
        stone: '#7a7a7a',
        mist: '#f5f5f4',
        paper: '#fafaf9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1440px',
      },
      letterSpacing: {
        widest: '.2em',
      },
    },
  },
  plugins: [],
};

export default config;
