# File Structure Guidelines

## Project Structure

This project follows a **section-based architecture** optimized for single-page React applications.

```
src/
├── App.tsx                    # Main application component
├── App.css                    # Global app layout styles
├── main.tsx                   # Application entry point
├── index.css                  # Global styles and imports
├── vite-env.d.ts             # Vite type definitions
├── layout/                    # Layout components (header, footer)
│   ├── header/
│   │   ├── Header.tsx
│   │   └── Header.css
│   └── footer/
│       ├── Footer.tsx
│       └── Footer.css
├── sections/                  # Page sections (main content areas)
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── Hero.css
│   ├── about/
│   │   ├── About.tsx
│   │   └── About.css
│   ├── services/
│   │   ├── Services.tsx
│   │   └── Services.css
│   └── contact/
│       ├── Contact.tsx
│       └── Contact.css
├── styles/                    # Global shared styles
│   ├── variables.css          # Design tokens (colors, fonts, spacing)
│   ├── typography.css         # Typography system
│   ├── layout.css            # Layout utilities
│   └── components.css        # Shared component utilities
└── assets/                   # Static assets (images, icons)
```

## Architecture Principles

### Layout vs Sections
- **layout/**: Components that appear on every page (header, footer, navigation)
- **sections/**: Content sections specific to the single page (hero, about, services, contact)

### Styling Approach
- **Global styles**: Shared utilities, design tokens, typography in `styles/`
- **Component styles**: Each component has its own CSS file
- **No CSS modules**: Using regular CSS with BEM-like naming conventions

### Import Structure
```tsx
// Layout components
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

// Section components
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
```

## Adding New Components

### New Section
1. Create directory: `src/sections/new-section/`
2. Create files: `NewSection.tsx` and `NewSection.css`
3. Import and add to `App.tsx`

### New Layout Component
1. Create directory: `src/layout/new-layout/`
2. Create files: `NewLayout.tsx` and `NewLayout.css`
3. Import and add to `App.tsx`

## Benefits of This Structure

- **Clear separation**: Layout vs content sections
- **Easy maintenance**: Each component is self-contained
- **Scalable**: Easy to add, remove, or reorder sections
- **Single-page optimized**: Perfect for one-page websites
- **Team-friendly**: Clear ownership and organization
