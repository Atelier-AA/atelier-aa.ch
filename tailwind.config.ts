import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        elindo: '#296462',
        'elindo-dark': '#1f4e4c',
        'elindo-light': '#d1e4dd',
        cream: '#eeeadd',
        'dark-gray': '#262626',
        gray: '#39414d',
        'light-gray': '#f4f4f4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.125rem', { lineHeight: '1.2', fontWeight: '300' }],
        'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '400' }],
        'h3': ['1.5625rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      maxWidth: {
        'container': '1240px',
      },
    },
  },
  plugins: [],
}
export default config
