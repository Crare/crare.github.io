# Design System Specification

**Last Updated**: 2026-09-23

## Overview

The design system for crare.github.io is a cohesive visual language built around a warm, accessible aesthetic with orange and yellow accent colors. The system uses CSS variables for consistent theming and supports a gradient background with glassmorphic card components.

---

## Color Palette

### Accent Colors
- **Primary Accent**: Orange `#FF9500`
  - Hover State: `#E68800`
  - Usage: Primary interactive elements, highlights, borders, shadows
- **Secondary Accent**: Yellow `#FFD700`
  - Hover State: `#FFC700`
  - Usage: Alternative highlights, badges, secondary accent elements

### Text Colors
- **Primary Text** (`--text-100`, `--text-primary`): `#1a1a1a`
  - Usage: Main content, headings, primary information
- **Secondary Text** (`--text-200`, `--text-secondary`): `#333333`
  - Usage: Secondary information, subheadings, descriptions
- **Muted Text** (`--text-300`, `--text-muted`): `#666666`
  - Usage: Metadata, timestamps, disabled text, tertiary content

### Background Colors
- **Surface 900** (`--bg-900`): `#ffffff` (pure white)
- **Surface 800** (`--bg-800`): `#fafafa` (almost white)
- **Surface 700** (`--bg-700`): `#f5f5f5` (light gray)
- **Light Background** (`--bg-light`): `rgba(250, 250, 250, 0.85)`
- **Normal Background** (`--bg-normal`): `rgba(255, 255, 255, 0.85)`
- **Surface Semi-opaque** (`--surface-700`): `rgba(255, 255, 255, 0.95)`

### Border & Shadow Colors
- **Soft Border** (`--border-soft`): `rgba(255, 149, 0, 0.15)` (faint orange)
- **Light Border** (`--border-light`): `rgba(255, 149, 0, 0.15)`
- **Normal Border** (`--border-normal`): `rgba(255, 149, 0, 0.2)`
- **Hover Border** (`--border-hover`): `rgba(255, 149, 0, 0.4)`
- **Shadow Hover**: `rgba(255, 149, 0, 0.15)`
- **Shadow Light**: `rgba(255, 149, 0, 0.1)`
- **Shadow Muted**: `rgba(255, 149, 0, 0.08)`

### Page Background
Gradient background (applied to `body`):
```css
linear-gradient(180deg, rgba(255, 253, 250, 1) 0%, rgba(220, 155, 90, 1) 100%)
```
Warm gradient from near-white to warm brown, creating depth and warmth.

---

## Typography

### Font Families
- **Headings**: `Space Grotesk` (weights: 600, 700)
  - CSS Variable: `--font-heading`, `--font-family-heading`
  - Usage: Page titles, section headings, prominent labels
  - Source: Google Fonts
- **Body**: `Nunito` (weights: 400, 500, 600, 700, 800) with fallbacks
  - CSS Variable: `--font-body`, `--font-family-body`
  - Fallback stack: "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif
  - Usage: Body text, UI labels, descriptions
  - Source: Google Fonts

### Font Sizes

**Responsive Sizes (using `clamp`)**:
- **Hero** (`--font-size-hero`): `clamp(2rem, 10vw, 3rem)`
- **Title** (`--font-size-title`): `clamp(2.1rem, 5vw, 3.4rem)`
- **Large Title** (`--font-size-title-lg`): `clamp(2.1rem, 5.4vw, 4.2rem)`
- **Section** (`--font-size-section`): `clamp(1.4rem, 2.6vw, 2rem)`

**Fixed Sizes**:
- XS: `0.78rem`
- SM: `0.82rem`
- MD: `0.9rem`
- Base: `0.98rem`
- LG: `1.02rem`
- XL: `1.15rem`
- 2XL–7XL: `14px` to `24px`

### Font Weights
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Line Heights
- **Tight**: 1 (for headings, compact layout)
- **Normal**: 1.02 (for slightly tighter body text)
- **Relaxed**: 1.6 (for readable body text)
- **Loose**: 1.7–1.8 (for very spacious text)

### Letter Spacing
- **Tight**: -0.03em

---

## Spacing System

Implemented using CSS custom properties for consistent spacing throughout the application.

### Base Unit
- 2px increment scale (`--spacing-xs` to `--spacing-10xl`)

| Variable | Value | Use Case |
|---|---|---|
| `--spacing-xs` | 2px | Minimal gaps |
| `--spacing-sm` | 4px | Small gaps |
| `--spacing-md` | 8px | Normal gaps |
| `--spacing-lg` | 12px | Larger gaps |
| `--spacing-xl` | 16px | Component padding |
| `--spacing-2xl` | 18px | Card padding tight |
| `--spacing-3xl` | 20px | Section padding |
| `--spacing-4xl` | 24px | Card padding standard |
| `--spacing-5xl` | 28px | Card padding large |
| `--spacing-6xl` | 32px | Large component spacing |
| `--spacing-7xl` | 34px | Extra large spacing |
| `--spacing-8xl` | 40px | Section dividers |
| `--spacing-9xl` | 56px | Hero spacing |
| `--spacing-10xl` | 60px | Section top/bottom |

### Preset Padding
- **Card Tight** (`--pad-card-tight`): `var(--spacing-4xl)` (24px)
- **Card Standard** (`--pad-card`): `var(--spacing-5xl)` (28px)
- **Card Large** (`--pad-card-lg`): `var(--spacing-6xl)` (32px)
- **Section** (`--pad-section`): `60px 20px` (top/bottom × left/right)

---

## Card Component System

### Card Base Styles
- **Default Opacity**: 0.75
- **Background (Light)**: `linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(250, 250, 250, 0.75) 100%)`
- **Background (Normal)**: `rgba(255, 255, 255, 0.75)`
- **Border (Default)**: `2px solid rgba(255, 149, 0, 0.2)`
- **Border (Hover)**: `2px solid rgba(255, 149, 0, 0.4)`
- **Shadow**: `0 8px 32px rgba(255, 149, 0, 0.15)`
- **Transition**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

### Card Features
- Glassmorphic design with semi-transparent backgrounds
- Subtle gradient overlays for depth
- Orange-tinted borders that intensify on hover
- Smooth cubic-bezier transitions for interactive states

---

## Z-Index Layering

- **Animated Background**: `z-index: 0` (fixed position, appears behind all content)
- **Page Content**: `z-index: 1` (minimum for all interactive elements)
- **Important**: Do not lower content z-index below 1; maintain separation from animated background

---

## Animation & Transitions

### Timing
- **Default Transition**: `cubic-bezier(0.4, 0, 0.2, 1)` (standard easing)
- **Duration**: 0.3s for most interactions

### Animated Background
- Fixed position diamond animations provide visual interest
- Must maintain z-index: 0 to stay behind content
- Used as a decorative layer, not interactive

---

## Icons & Media

### Social Media Icons
- Source: Simple Icons CDN v16+ (https://cdn.jsdelivr.net/npm/simple-icons@16/)
- Format: SVG
- Integration: Currently supports Bluesky and Itch.io social links
- Usage: Place in header/footer for social media connectivity

### Image Gallery
- Component: `GalleryModal.tsx`
- Thumbnail Component: `MediaThumb.tsx`
- Displays project images with modal lightbox interaction

---

## Accessibility

- **Font Smoothing**: 
  - `-webkit-font-smoothing: antialiased` (Chrome/Safari)
  - `-moz-osx-font-smoothing: grayscale` (Firefox)
- **Color Contrast**: All text uses high-contrast colors against light backgrounds
- **Semantic HTML**: Proper heading hierarchy using `Space Grotesk` for structure
- **Responsive Design**: Typography and spacing use fluid sizing with `clamp()` for viewport adaptation

---

## Responsive Breakpoints

- **Mobile-first approach**: Typography sizes use `clamp()` for fluid scaling
- **Hero & Title elements**: Scale between 2-4rem depending on viewport
- **Section spacing**: Adjusts with viewport width (5-60px depending on size)

---

## CSS Architecture

### File Organization
- **theme.css**: Global CSS variables, font imports, root theme definitions
- **global.css**: Base styles, card system definitions, spacing scales
- **Component-specific**: Individual component styling (optional separate stylesheets)

### Key Principles
1. **Single Source of Truth**: CSS variables defined in `:root` for consistency
2. **Cascade & Inheritance**: Leverage CSS cascade for theme application
3. **Utility-first Variables**: Reusable spacing, typography, and color variables
4. **Card System**: Consistent border, shadow, and background patterns

---

## Usage Guidelines for Agents

### When Adding Components
1. Use CSS variables from `:root` for all colors, spacing, and typography
2. Apply `--card-bg-normal` or `--card-bg-light` for component backgrounds
3. Use `--card-border` for default borders, `--card-border-hover` for interactive states
4. Apply `--card-transition` for all hover/active state changes
5. Maintain z-index hierarchy: background at 0, content at 1+

### When Modifying Styles
1. Update CSS variables in `theme.css` or `global.css` (not inline styles)
2. Check for duplicate definitions (e.g., `section-title` may exist twice)
3. Search for both CSS variables and hardcoded hex values when changing colors
4. Test responsive behavior with `clamp()` functions on various viewport sizes

### When Adding Colors
1. Add new colors to `:root` with semantic naming (e.g., `--accent-secondary`)
2. Avoid hardcoding hex values; use variables instead
3. Consider border/shadow variants of new accent colors

### Social Media Integration
1. Reference Simple Icons CDN for consistent icon styling
2. Support latest icon versions (v16+)
3. Include proper `aria-label` and semantic HTML for accessibility

---

## Component Reference

- **HeaderSection**: Navigation and branding
- **AnimatedBackground**: Fixed position decorative background (z-index: 0)
- **FooterSection**: Footer with social links and branding
- **GalleryModal & MediaThumb**: Image display and lightbox
- **Section Components**: About, Contact, Games, Projects, Skills
- **FadeInText**: Text animation utility component

---

## Tools & Build Commands

Run from `my-app/` directory:

| Command | Purpose |
|---|---|
| `yarn dev` | Development server (http://localhost:5173) |
| `yarn build` | Production build |
| `yarn lint` | Type checking |
| `yarn test` | Run Vitest suite |
| `yarn smoke` | Post-build verification |
