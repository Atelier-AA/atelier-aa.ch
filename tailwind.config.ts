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
        // War #7a7a7a — auf den kleinen, getrackten Eyebrow-Labels (11px)
        // knapp unter dem WCAG-AA-Kontrast von 4.5:1 gegen paper/weiss
        // (Lighthouse-Audit). Dieser Ton besteht mit ca. 5.2:1, sichtbar
        // praktisch identisch.
        stone: '#6b6b6b',
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
