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
      // Zentrale Typografie-Tokens. Vorher setzte jede Komponente ihre Grössen
      // selbst — dabei sind fünf verschiedene H2-Grössen nebeneinander
      // entstanden (36/40/48/56/60px). Ab jetzt leiten alle Überschriften von
      // hier ab, damit das nicht wieder auseinanderläuft.
      //
      // Schnitt statt Grösse: Die H1 stand auf 63px in Schnitt 700. Keines der
      // Vergleichsbüros geht über 400 hinaus — fett wirkt laut, nicht gross.
      // Darum bleibt die Grösse fast gleich und der Schnitt geht deutlich
      // zurück.
      fontSize: {
        hero:  ['clamp(2.52rem, 1.68rem + 2.52vw, 5.32rem)', { lineHeight: '1.1', letterSpacing: '-0.022em', fontWeight: '400' }],
        h1:    ['clamp(1.67rem, 1.12rem + 1.54vw, 2.49rem)', { lineHeight: '1.1', letterSpacing: '-0.018em', fontWeight: '400' }],
        h2:    ['clamp(1.23rem, 0.95rem + 0.77vw, 1.58rem)', { lineHeight: '1.2', letterSpacing: '-0.012em', fontWeight: '400' }],
        h3:    ['1.25rem', { lineHeight: '1.35', letterSpacing: '-0.005em', fontWeight: '500' }],
        karte: ['1rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        // Zeilenlänge in ch, nicht in px: Die Grenze hängt an der Schrift,
        // nicht an der Bildschirmbreite. Über ~68 Zeichen findet das Auge
        // beim Zeilenwechsel den Zeilenanfang nicht mehr zuverlässig.
        lesbar: '68ch',
        content: '1440px',
      },
      colors: {
        ink: '#111111',
        graphite: '#3a3a3a',
        // War #7a7a7a — auf den kleinen, getrackten Eyebrow-Labels (11px)
        // knapp unter dem WCAG-AA-Kontrast von 4.5:1 gegen paper/weiss
        // (Lighthouse-Audit). Dieser Ton besteht mit ca. 5.2:1, sichtbar
        // praktisch identisch.
        stone: '#6b6b6b',
        mist: '#ecece9',
        paper: '#fafaf9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      // (content bleibt bei 1440px: Die Zeilenlänge begrenzt der Text selbst
      // über max-w-lesbar, die Gesamtbreite trägt weiterhin die Bilder.)
      letterSpacing: {
        widest: '.2em',
      },
    },
  },
  plugins: [],
};

export default config;
