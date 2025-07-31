# Her Circle Event Website

Modern event website for Her Circle's inaugural white-themed networking event. Built with React, TypeScript, and Tailwind CSS featuring bilingual support (English/Chinese) and elegant minimalist design.

## Features

- 🎨 **Elegant Design**: Custom canvas color palette with minimalist aesthetic
- 🌐 **Bilingual Support**: English and Chinese language switching
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Built with Vite for optimal performance
- 🎯 **Accessible**: Built with shadcn/ui components based on Radix UI

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router
- **Data Fetching**: TanStack Query

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd canvas-white-event
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:8080`

### Development Commands

```bash
npm run dev          # Start development server on port 8080
npm run build        # Production build
npm run build:dev    # Development build 
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components (auto-generated)
│   ├── Hero.tsx         # Main hero section
│   ├── EventDetails.tsx # Event information section  
│   ├── Navigation.tsx   # Header navigation
│   └── Footer.tsx       # Footer component
├── contexts/            # React contexts
│   └── LanguageContext.tsx # Bilingual support
├── pages/               # Route components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── lib/
│   └── utils.ts         # Utility functions
└── hooks/               # Custom React hooks
```

## Design System

The project uses a custom design system with:

- **Colors**: Custom canvas palette (`canvas-white`, `canvas-charcoal`, `canvas-silver`, `canvas-mist`)
- **Typography**: Inter font family for both display and body text
- **Shadows**: Custom shadow utilities (`minimal`, `elegant`, `dramatic`)
- **Components**: Built with shadcn/ui for consistency and accessibility

## Adding New Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

## License

MIT License
