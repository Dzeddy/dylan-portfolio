# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development server:**
```bash
npm run dev
```
Starts Vite dev server on port 3000 with auto-open browser.

**Production build:**
```bash
npm run build
```
Creates optimized production build in `dist/` directory.

**Preview production build:**
```bash
npm run preview
```

## Architecture Overview

This is a modern React TypeScript portfolio website built with component composition and separation of concerns:

### Core Technologies
- **React 18** with TypeScript for type safety
- **Vite** as build tool and dev server
- **Tailwind CSS** for styling with custom animations
- **Lucide React** for icons

### Architecture Patterns

**Component Structure:**
- Small, single-responsibility components in `src/components/`
- Each component has a clear, focused purpose (Navigation, HeroSection, ProjectCard, etc.)
- Barrel exports from `src/components/index.ts` for clean imports
- Composition over inheritance throughout

**Data Management:**
- All portfolio content centralized in `src/data/portfolio.ts`
- Comprehensive TypeScript interfaces in `src/types/index.ts`
- Data includes: personalInfo, socialLinks, experiences, projects, timeline, skills, education

**Custom Hooks:**
- `useScrolled` hook in `src/hooks/` manages scroll state
- Extracted from components to promote reusability

**Type Definitions:**
Key interfaces include:
- `ExperienceItem` - Job/internship data structure
- `ProjectItem` - Project cards with tech stack
- `TimelineItem` & `EnhancedTimelineItem` - Career timeline
- `SocialLink` - Social media links with icons

### File Organization
```
src/
├── components/     # React components (Navigation, HeroSection, etc.)
├── data/          # Portfolio content and static data
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── App.tsx        # Main app component
└── main.tsx       # Entry point
```

## Customization Workflow

To update portfolio content:
1. Modify data in `src/data/portfolio.ts` 
2. Update types in `src/types/index.ts` if adding new fields
3. Components automatically reflect data changes

To modify styling:
1. Update Tailwind config in `tailwind.config.js` for theme changes
2. Custom animations defined in Tailwind config
3. Component-level styling uses Tailwind utility classes

## Development Notes

- No linting or testing commands configured
- Hot reload enabled in development
- TypeScript strict mode enabled
- All components use functional components with hooks
- Responsive design implemented with Tailwind breakpoints