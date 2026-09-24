# Code Standards Checklist

Based on AGENTS.md code standards, this checklist ensures crare.github.io meets all required quality criteria.

## Standards to Verify

### ✅ Readable & Easy to Understand
- [ ] Variable and function names are descriptive and self-documenting
- [ ] Code follows consistent formatting and indentation
- [ ] Comments explain "why", not just "what"
- [ ] Complex logic is broken into smaller, understandable functions
- [ ] No deeply nested code (max 3 levels)
- [ ] Component files stay under 300 lines
- [ ] TypeScript types are properly annotated

**Related Files**: All `.tsx` and `.ts` files
**Verification**: Code review, peer review

---

### ✅ Good Practices
- [ ] ESLint/TypeScript rules are followed (no `any` types)
- [ ] No console.log() statements in production code
- [ ] No hardcoded values (use constants or config)
- [ ] DRY (Don't Repeat Yourself) principle applied
- [ ] Import statements are organized and sorted
- [ ] No unused imports or variables
- [ ] Functions have single responsibility
- [ ] Error handling is implemented where needed

**Related Files**: All source files
**Verification**: `yarn lint`

---

### ✅ Secure
- [ ] No sensitive data in code or git history
- [ ] External links use `rel="noopener noreferrer"`
- [ ] User input is validated (if applicable)
- [ ] No SQL injection risks (N/A for static site)
- [ ] Content Security Policy headers are considered
- [ ] Dependencies are regularly audited
- [ ] No hardcoded API keys or tokens

**Related Files**: `src/utils/`, `src/components/`
**Verification**: 
```bash
yarn audit
```

---

### ✅ Reliable
- [ ] Components handle edge cases (empty data, null, undefined)
- [ ] Error states are managed gracefully
- [ ] Loading states are shown when appropriate
- [ ] No race conditions in async operations
- [ ] Focus management is restored after modal/dialog close
- [ ] Navigation works on all routes
- [ ] Build succeeds consistently

**Related Files**: All component files
**Verification**: 
```bash
yarn build
```

---

### ✅ Testable
- [ ] Unit tests cover core functionality
- [ ] Tests are maintainable and readable
- [ ] No tests are skipped (no `.skip` or `.only`)
- [ ] Components can be tested in isolation
- [ ] Mock data is consistent and realistic
- [ ] Test coverage for critical paths

**Related Files**: `tests/`
**Verification**: 
```bash
yarn test
```

---

### ✅ Responsive
- [ ] Layout works on mobile (375px), tablet (768px), desktop (1024px+)
- [ ] Images scale appropriately
- [ ] Navigation is accessible on all screen sizes
- [ ] Touch targets are at least 44x44px
- [ ] Text is readable on all screen sizes
- [ ] No horizontal scroll on mobile
- [ ] Fonts scale with viewport (using `clamp()`)

**Related Files**: `src/styles/global.css`, `theme.css`
**Verification**: 
- [ ] Zoom to 200% — still readable?
- [ ] Test on devices: mobile, tablet, desktop
- [ ] Chrome DevTools device emulation

---

### ✅ Performant on Most Devices
- [ ] Lighthouse Performance score ≥ 80
- [ ] First Contentful Paint (FCP) < 2.5s
- [ ] Largest Contentful Paint (LCP) < 4s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Images are optimized (lazy loaded, compressed)
- [ ] Code splitting is implemented
- [ ] No unnecessary re-renders
- [ ] Bundle size is monitored

**Related Files**: `vite.config.ts`, `src/`
**Verification**: 
```bash
yarn build
yarn preview
# Then run Lighthouse in Chrome DevTools
```

---

### ✅ Accessible (WCAG Compliant)
- [ ] Semantic HTML used (`<nav>`, `<section>`, `<button>`, etc.)
- [ ] Proper heading hierarchy (single `<h1>` per page, logical flow)
- [ ] ARIA labels for interactive elements
- [ ] Keyboard navigation works (Tab, Enter, Escape, arrows)
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA (4.5:1 for text, 3:1 for large text)
- [ ] Images have descriptive alt text
- [ ] Skip link present
- [ ] Respects `prefers-reduced-motion`
- [ ] Screen reader tested

**Related Files**: All component files, `src/styles/`
**Verification**: 
- [ ] See [ACCESSIBILITY.md](ACCESSIBILITY.md) for detailed guidelines
- [ ] Use Axe DevTools browser extension
- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader (VoiceOver on Mac)

---

### ✅ Search Engine Optimized (SEO)
- [ ] Page titles are descriptive and unique
- [ ] Meta descriptions present and under 160 characters
- [ ] Canonical URLs set for all pages
- [ ] Open Graph tags implemented for social sharing
- [ ] Structured data (JSON-LD) present
- [ ] Robots.txt and sitemap.xml configured
- [ ] No duplicate content
- [ ] Heading hierarchy is logical (for both UX and SEO)
- [ ] Internal links use meaningful anchor text
- [ ] Mobile-friendly (responsive design)
- [ ] Fast page load times

**Related Files**: `index.html`, `public/sitemap.xml`, `public/robots.txt`, page components
**Verification**: 
- [ ] Lighthouse SEO score ≥ 90
- [ ] Google Search Console (if applicable)
- [ ] Schema.org structured data validation

---

## Implementation Status

### Completed ✅
- Semantic HTML and ARIA attributes in place
- TypeScript with strict mode
- Responsive design with `clamp()` sizing
- Meta tags and JSON-LD structured data
- Good naming conventions
- Focus management for modals
- **Skip link for keyboard navigation** (added to LayoutPage)
- **Prefers-reduced-motion media query** (animations disabled for users with reduced motion preference)
- **Image alt text audit** (all images have descriptive alt text)
- **Color contrast verification** (hover states meet WCAG AA standards: 7.1:1 orange on white)
- **Performance optimization** (implemented code splitting with Vite - vendor bundles separated)
- **Performance hints** (added dns-prefetch and preconnect for external resources)

### In Progress 🟡
- Accessibility audit (see [ACCESSIBILITY.md](ACCESSIBILITY.md))
- Performance testing on lower-end devices

### To Do 🔴
- [ ] Run Lighthouse audit with Chrome DevTools for detailed metrics
- [ ] Test Core Web Vitals (LCP, FID, CLS)
- [ ] Image optimization (consider WebP format conversion)
- [ ] Additional bundle size optimizations

---

## Performance Improvements Made

### Build Optimization
- **Code Splitting**: Separated vendor bundles into:
  - `vendor-react`: React + React Router (262 KB uncompressed, 83 KB gzipped)
  - `vendor-mui`: Material-UI icons & components (97 KB uncompressed, 34 KB gzipped)
  - `vendor-other`: Helper libraries (8 KB uncompressed, 3.7 KB gzipped)
  - `index`: Application code (50 KB uncompressed, 14.5 KB gzipped)
- **CSS Code Splitting**: Separated CSS into its own file for better caching
- **Performance Hints**: Added DNS prefetch and preconnect directives

### Bundle Sizes
- **Main JS Bundle**: 418 KB uncompressed → split into vendors + app code
- **CSS**: 32 KB uncompressed (6.2 KB gzipped)
- **Total Assets**: ~2.3 MB (includes images)

---

## Quick Verification Commands

```bash
# Type checking
yarn lint

# Run tests
yarn test

# Build
yarn build

# Check build output
yarn smoke

# Performance audit (manual)
yarn preview
# Then open Lighthouse in Chrome DevTools (Ctrl+Shift+I → Lighthouse)
```

---

## Lower-End Device Testing Guide

### Device Profiles to Test
- **Mobile (3G throttling)**: iPhone 12 Mini or equivalent Android device
- **Tablet**: iPad Mini or equivalent 7-8" tablet
- **Older Devices**: iPhone 7+ or Android equivalent (2016-2017 era)

### Network Throttling (Chrome DevTools)
1. Open DevTools (F12 / Cmd+Option+I)
2. Go to **Network** tab
3. Select throttling profile:
   - **Slow 4G**: 4 Mbps download / 3 Mbps upload (12ms latency)
   - **Fast 3G**: 1.6 Mbps download / 0.75 Mbps upload (40ms latency)
   - **Slow 3G**: 400 Kbps / 400 Kbps (400ms latency) - for extreme testing

### Performance Metrics to Check
```
✓ First Contentful Paint (FCP) < 2.5s on 3G
✓ Largest Contentful Paint (LCP) < 4s on 3G
✓ Cumulative Layout Shift (CLS) < 0.1
✓ Time to Interactive (TTI) < 5s on 3G
✓ Bundle size under 500KB total (target for 3G)
```

### Manual Testing Steps
1. **Mobile Device (Chrome/Safari)**
   - [ ] Site loads and renders without horizontal scroll
   - [ ] Navigation is touch-friendly (tap targets 44x44px min)
   - [ ] Text is readable without zooming (16px minimum)
   - [ ] Images load progressively (lazy loading works)
   - [ ] Animations are smooth (60fps target)
   - [ ] Interactions respond quickly (no lag)

2. **Slow Network (DevTools Throttling)**
   - [ ] Page shell renders within 2s (perceived fast load)
   - [ ] Content loads progressively
   - [ ] No broken states during loading
   - [ ] Hero image/critical content loads first

3. **Low-End CPU (CPU Throttling in DevTools)**
   - [ ] Animations remain smooth (no jank)
   - [ ] Interactive elements respond immediately
   - [ ] Scroll performance is smooth
   - [ ] No visual glitches during repaints

### Optimization Checklist for Lower-End Devices
- [ ] Code splitting reduces initial JS load ✅ (implemented)
- [ ] Lazy loading for images ✅ (already in place)
- [ ] No blocking scripts in critical path ✅ (Vite handles async)
- [ ] CSS critical path optimized ✅ (inlined critical CSS potential)
- [ ] Prefers-reduced-motion respected ✅ (implemented)
- [ ] Font optimization (self-hosted fonts) - Consider optimization
- [ ] Service Worker caching - Consider PWA implementation

---

## Manual Testing Checklist

### Keyboard Navigation
- [x] Can navigate entire site using only Tab key
- [x] Can open/close modals with Escape key
- [x] Can browse gallery with arrow keys
- [x] Can activate buttons with Enter or Space
- [ ] Focus order is logical

### Screen Reader (VoiceOver on Mac)
- [ ] All content is announced
- [ ] Page structure is clear
- [ ] Interactive elements are announced correctly
- [ ] Links indicate they open in new tab
- [ ] Alt text is meaningful

### Visual Testing
- [ ] Zoom to 200% — no overlapping text
- [ ] Text has sufficient contrast
- [ ] Focus indicators are visible
- [ ] Hover states are clear
- [ ] Mobile view works well

### Performance Testing
- [ ] Page loads quickly on 3G throttling
- [ ] No cumulative layout shift
- [ ] Animations are smooth
- [ ] Respects prefers-reduced-motion

---

## Resources

- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) — Theming and component standards
- [ACCESSIBILITY.md](ACCESSIBILITY.md) — WCAG compliance roadmap
- [AGENTS.md](AGENTS.md) — Project overview and caveats
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) — Performance audits
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) — Accessibility reference
