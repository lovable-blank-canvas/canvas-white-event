# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Primary development workflow:**
```bash
npm run dev          # Start development server on port 8080
npm run build        # Production build
npm run build:dev    # Development build 
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

**Installation:**
```bash
npm i               # Install dependencies
```

Note: This project uses npm (not yarn or pnpm) - package-lock.json is tracked.

## Architecture Overview

This is a **React + TypeScript event website** built with modern tooling, originally created with Lovable AI.

**Tech Stack:**
- **Vite** - Build tool and dev server
- **React 18** + TypeScript
- **shadcn/ui** - Component library built on Radix UI
- **Tailwind CSS** - Styling with custom design tokens
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching (though minimal usage currently)

**Project Structure:**
```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components (auto-generated)
│   ├── Hero.tsx         # Main hero section
│   ├── EventDetails.tsx # Event information section  
│   ├── Navigation.tsx   # Header navigation
│   └── Footer.tsx       # Footer component
├── pages/               # Route components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
└── hooks/               # Custom React hooks
```

**Key Patterns:**

1. **Component Structure**: Single-page event website with modular components. Main page (`Index.tsx`) composes: Navigation → Hero → EventDetails → Footer.

2. **Styling System**: Custom design tokens defined in Tailwind config:
   - Canvas colors: `canvas-white`, `canvas-charcoal`, `canvas-silver`, `canvas-mist`
   - Typography: Inter font for both display and body text
   - Custom shadows: `minimal`, `elegant`, `dramatic`

3. **Path Aliases**: `@/` resolves to `src/` directory (configured in vite.config.ts)

4. **Component Library**: Uses shadcn/ui components. Add new components with: `npx shadcn@latest add [component-name]`

5. **Route Setup**: Simple React Router setup in App.tsx. Add new routes above the catch-all `*` route.

## Lovable Integration

This project was built with Lovable AI and includes:
- `lovable-tagger` plugin for development mode component identification
- Automatic syncing between Lovable editor and this repository
- Component tagging system for visual editing

## Development Notes

- Dev server runs on `http://localhost:8080` (not the typical 3000/5173)
- No testing framework is currently configured
- ESLint configuration uses modern flat config format
- TypeScript strict mode enabled with multiple tsconfig files for different contexts