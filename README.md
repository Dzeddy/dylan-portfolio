# Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS following React best practices.

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Navigation.tsx    # Navigation bar component
│   ├── HeroSection.tsx   # Landing section component
│   ├── SocialLinks.tsx   # Reusable social media links
│   ├── ExperienceSection.tsx # Experience section wrapper
│   ├── ExperienceCard.tsx    # Individual experience card
│   ├── Timeline.tsx      # Career timeline component
│   ├── ProjectsSection.tsx   # Projects section wrapper
│   ├── ProjectCard.tsx   # Individual project card
│   ├── ContactSection.tsx    # Contact section component
│   ├── Footer.tsx        # Footer component
│   ├── Portfolio.tsx     # Main portfolio component
│   └── index.ts          # Component exports
├── hooks/                # Custom React hooks
│   └── useScrolled.ts    # Hook for scroll state management
├── types/                # TypeScript type definitions
│   └── index.ts          # Interface definitions
├── data/                 # Static data and content
│   └── portfolio.ts      # Portfolio content and data
├── App.tsx               # Main App component
├── main.tsx              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎯 Best Practices Implemented

### Single Responsibility Principle
- Each component has one clear purpose
- Navigation handles only navigation logic
- Cards handle only display of individual items
- Sections handle only layout and composition

### Composition over Inheritance
- Components are composed together rather than extended
- Flexible prop interfaces allow for reusability
- SocialLinks component can be used anywhere with different styling

### Custom Hooks
- `useScrolled` hook extracts scroll logic from components
- Promotes reusability across the application
- Keeps components clean and focused

### Separation of Concerns
- Data is separated from components in `/data` directory
- Types are defined in dedicated `/types` directory
- Styling is handled through Tailwind classes
- Business logic is extracted to custom hooks

### Component Organization
- Small, focused components that do one thing well
- Clear prop interfaces with TypeScript
- Consistent naming conventions
- Barrel exports for clean imports

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library

## 📱 Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Animated background elements
- Hover effects and transitions
- Custom scrollbar styling
- Accessible markup with proper ARIA labels

## 🎨 Customization

To customize the portfolio:

1. Update personal information in `src/data/portfolio.ts`
2. Modify colors in `tailwind.config.js`
3. Add new sections by creating components and adding them to `Portfolio.tsx`
4. Extend types in `src/types/index.ts` for new data structures 