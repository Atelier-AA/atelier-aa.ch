# Atelier AA - Next.js Website Project

## Project Overview
- **Name**: Atelier AA Website
- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Node Version**: 18+

## Project Structure
```
├── app/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── Footer.tsx
│   ├── lib/              # Utility functions and helpers
│   ├── types/            # TypeScript type definitions
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── .gitignore
```

## Available Scripts
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Styling
- Tailwind CSS is configured and ready to use
- Global styles in `app/globals.css`
- Custom color palette in `tailwind.config.ts`:
  - Primary: #1a1a1a (dark)
  - Secondary: #666666 (gray)
  - Accent: #e74c3c (red)

## Components
- **Header**: Navigation component with menu links
- **Hero**: Landing page hero section
- **Footer**: Footer with links and copyright

## Path Aliases
- `@/*` - Root alias
- `@/components/*` - Components directory
- `@/lib/*` - Library/utility functions
- `@/types/*` - Type definitions

## Notes
- The project uses Next.js App Router (modern routing)
- All components should be properly typed with TypeScript
- Client components should include `'use client'` directive
- Environment variables should be defined in `.env.local`
