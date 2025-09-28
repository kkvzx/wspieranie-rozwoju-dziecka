# Naming Conventions

This document outlines the naming conventions used throughout the project to ensure consistency and maintainability.

## Directories

**Rule:** All directory names use **camelCase** convention
```
✅ Good
src/sections/hero/
src/layout/header/
src/constants/

❌ Bad
src/Sections/Hero/
src/Layout/Header/
src/Constants/
```

## Files

### React Components
**Rule:** **PascalCase** for component files
```
✅ Good
Header.tsx
Hero.tsx
About.tsx

❌ Bad
header.tsx
hero.tsx
about.tsx
```

### CSS Files
**Rule:** Match the component name exactly
```
✅ Good
Header.css (matches Header.tsx)
Hero.css (matches Hero.tsx)

❌ Bad
header.css
hero-styles.css
```

### Other Files
**Rule:** **kebab-case** for non-component files
```
✅ Good
file-structure.md
naming-conventions.md
sections.ts

❌ Bad
fileStructure.md
NamingConventions.md
Sections.ts
```

## TypeScript Code

### Enums
**Rule:** **PascalCase** for enum names and enum keys
```typescript
✅ Good
export enum Sections {
  Hero = 'hero',
  About = 'about',
  Services = 'services',
  Contact = 'contact'
}

❌ Bad
export enum SECTIONS {
  HERO = 'hero',
  ABOUT = 'about'
}

export enum sections {
  hero = 'hero',
  about = 'about'
}
```

### Variables and Functions
**Rule:** **camelCase** for variables and functions
use `handler` prefix when it comes to react handlers definition. 
```typescript
✅ Good
const isMenuOpen = true
const toggleMenu = () => {}
const closeMenu = () => {}

❌ Bad
const IsMenuOpen = true
const toggle_menu = () => {}
const CloseMenu = () => {}
```

### Constants
**Rule:** **UPPER_SNAKE_CASE** for module-level constants
```typescript
✅ Good
const API_BASE_URL = 'https://api.example.com'
const MAX_RETRY_ATTEMPTS = 3

❌ Bad
const apiBaseUrl = 'https://api.example.com'
const maxRetryAttempts = 3
```

## CSS Classes

### Component Classes
**Rule:** **kebab-case** with component prefix
```css
✅ Good
.header
.header-content
.nav-list
.nav-link

❌ Bad
.Header
.headerContent
.navList
.nav_link
```

### Utility Classes
**Rule:** **kebab-case** following design system pattern
```css
✅ Good
.text-center
.btn-primary
.bg-neutral
.py-lg

❌ Bad
.textCenter
.btnPrimary
.bgNeutral
.py_lg
```

## HTML Attributes

### IDs
**Rule:** **lowercase** matching enum values
```html
✅ Good
<section id="hero">
<section id="about">

❌ Bad
<section id="Hero">
<section id="HERO">
```

### CSS Classes
**Rule:** **kebab-case**
```html
✅ Good
<div className="header-content">
<button className="menu-toggle">

❌ Bad
<div className="headerContent">
<button className="menuToggle">
```

## Import/Export Names

### Components
**Rule:** **PascalCase** for component imports
```typescript
✅ Good
import Header from './layout/header/Header'
import Hero from './sections/hero/Hero'

❌ Bad
import header from './layout/header/Header'
import HERO from './sections/hero/Hero'
```

### Enums and Constants
**Rule:** **PascalCase** for enums, preserve original casing for others
```typescript
✅ Good
import { Sections } from './constants/sections'

❌ Bad
import { sections } from './constants/sections'
import { SECTIONS } from './constants/sections'
```

## Summary

| Element | Convention | Example |
|---------|------------|---------|
| Directories | lowercase | `src/sections/hero/` |
| React Components | PascalCase | `Header.tsx` |
| CSS Files | Match component | `Header.css` |
| Other Files | kebab-case | `naming-conventions.md` |
| Enums | PascalCase | `Sections.Hero` |
| Variables/Functions | camelCase | `isMenuOpen` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |
| CSS Classes | kebab-case | `.header-content` |
| HTML IDs | lowercase | `id="hero"` |

Following these conventions ensures code consistency, improves readability, and makes the project easier to maintain and scale.
