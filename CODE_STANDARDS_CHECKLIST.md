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

### In Progress 🟡
- Accessibility audit (see [ACCESSIBILITY.md](ACCESSIBILITY.md))
- Performance optimization (Lighthouse scores)
- Test coverage expansion
- SEO meta descriptions refinement

### To Do 🔴
- [ ] Add skip link for keyboard navigation
- [ ] Implement prefers-reduced-motion
- [ ] Complete accessibility audit
- [ ] Run Lighthouse and fix issues
- [ ] Verify color contrast on all hover states
- [ ] Add/audit all image alt text
- [ ] Performance testing on lower-end devices

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

## Manual Testing Checklist

### Keyboard Navigation
- [ ] Can navigate entire site using only Tab key
- [ ] Can open/close modals with Escape key
- [ ] Can browse gallery with arrow keys
- [ ] Can activate buttons with Enter or Space
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
