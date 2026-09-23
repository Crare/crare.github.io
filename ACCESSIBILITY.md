# Accessibility Improvement Guide

This document outlines accessibility enhancements for crare.github.io to meet WCAG 2.1 Level AA standards.

## Current Status
✅ Strong foundation with semantic HTML, focus management, keyboard navigation, and proper ARIA attributes.

## Priority Improvements

### 🔴 High Priority

#### 1. Skip Link
**Issue**: No way to bypass navigation to main content.
**Solution**: Add a skip link at the top of the page.

```html
<!-- Add to LayoutPage.tsx -->
<a href="#main-content" className="skip-link">Skip to main content</a>

<!-- Add CSS to global.css -->
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #FF9500;
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

**Impact**: Essential for keyboard users and screen readers.

#### 2. Heading Hierarchy
**Issue**: Multiple `<h1>` tags on pages (should be max 1 per page) + inconsistent heading structure.
**Solution**: 
- Review all pages to ensure single `<h1>` per page
- Ensure heading levels flow logically (h1 → h2 → h3, never skip levels)
- Example: Page title as `<h1>`, section titles as `<h2>`, subsections as `<h3>`

**Files to review**: 
- `src/pages/*.tsx` 
- `src/components/*Section.tsx`

#### 3. Color Contrast on Hover States
**Issue**: FadeInText hover color (#a78bfa) may have insufficient contrast against light backgrounds.
**Current code** (FadeInText.tsx):
```typescript
":hover": {
  color: "#a78bfa",  // Purple - check contrast
}
```

**Solution**: Test and potentially adjust to:
- Increase saturation/darkness of hover color
- Example: Use `#7c3aed` (Tailwind purple-600) instead for better contrast

**Testing**: Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify all text meets 4.5:1 for body text, 3:1 for large text.

#### 4. Form Accessibility (ContactSection)
**Issue**: Contact cards use `<Link>` components as buttons; not semantically correct for cards.
**Current**:
```tsx
<Link
  href={contact.link}
  target="_blank"
  rel="noopener"
  className="contact-card contact-card-link"
>
```

**Solution**: Consider using semantic `<a>` tag with proper structure:
```tsx
<a
  href={contact.link}
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
  aria-label={`Visit ${contact.label}: ${contact.description}`}
>
  {/* content */}
</a>
```

**Reason**: MUI `Link` component may not announce consistently across screen readers. Semantic `<a>` is more reliable.

#### 5. Image Alt Text Completeness
**Issue**: Some images may lack descriptive alt text.
**Solution**: Audit all images and ensure:
- Decorative images have `alt=""` or `aria-hidden="true"`
- Meaningful images have descriptive alt text (describe content, not "image of...")
- Gallery images should describe what the screenshot/photo shows

**Example**:
```tsx
// ❌ Bad
<img src="project.png" alt="screenshot" />

// ✅ Good
<img src="project.png" alt="Dashboard showing real-time analytics with daily chart" />
```

### 🟡 Medium Priority

#### 6. Animation Preferences
**Issue**: Animations (FadeInText, AnimatedBackground) don't respect `prefers-reduced-motion`.
**Solution**: Add this to `global.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Files affected**: 
- FadeInText.tsx (Fade animation)
- AnimatedBackground.tsx (salmiakki-scroll)
- Card hover transitions (global.css)

**Impact**: Users with motion sensitivity won't experience distraction or health issues.

#### 7. Link Target Announcement
**Issue**: External links don't clearly indicate they open in new tab.
**Current**: Using `target="_blank"` without indication.
**Solution**:
```tsx
// Add aria-label or visual indicator
<a href={url} target="_blank" rel="noopener noreferrer" 
   aria-label={`${text} (opens in new tab)`}>
  {text} <OpenInNewIcon />
</a>
```

**Files**: FooterSection.tsx, ContactSection.tsx, and all external links.

#### 8. Carousel/Slider Accessibility
**Issue**: If gallery navigation (prev/next) lacks proper labels.
**Solution**: Ensure buttons have descriptive aria-labels:
```tsx
<button 
  aria-label={`View previous image (${index + 1} of ${total})`}
  onClick={showPrevGalleryImage}
>
  ❮
</button>
```

### 🟢 Low Priority (Nice to Have)

#### 9. Page Language Meta Tag
**Current**: `<html lang="en">` ✅ Good!
**Enhancement**: Add language-specific text:
```html
<meta http-equiv="Content-Language" content="en-US" />
```

#### 10. Focus Indicators
**Verify**: Default browser focus indicators are visible.
**Ensure**: No `outline: none` without replacement.
```css
/* Good practice */
button:focus-visible {
  outline: 2px solid #FF9500;
  outline-offset: 2px;
}
```

#### 11. Section Landmarks
**Current**: Using `<section>` with ids ✅
**Enhancement**: Add `role="region"` with `aria-labelledby`:
```tsx
<section id="projects" className="projects-section" 
         role="region" aria-labelledby="projects-heading">
  <h2 id="projects-heading">Projects</h2>
  {/* content */}
</section>
```

## Testing Recommendations

### Manual Testing
- [ ] Navigate site using keyboard only (Tab, Enter, Escape, arrows)
- [ ] Test with screen reader: [NVDA (Windows)](https://www.nvaccess.org/) or [VoiceOver (Mac)](https://www.apple.com/accessibility/voiceover/)
- [ ] Zoom to 200% and verify readability
- [ ] Disable CSS and verify content still flows logically

### Automated Testing
- **Axe DevTools**: Browser extension for accessibility audits
- **WAVE**: WebAIM tool for accessibility evaluation
- **Lighthouse**: Built into Chrome DevTools (Accessibility audit)

### Tools to Run
```bash
# Add to package.json for automated testing
yarn add -D axe-core jest-axe
```

## WCAG 2.1 Checklist

### Level A (Minimum)
- [x] 1.1.1 Non-text Content (alt text)
- [x] 1.3.1 Info and Relationships (semantic HTML)
- [x] 2.1.1 Keyboard (keyboard navigation)
- [x] 2.4.1 Bypass Blocks (partial - add skip link)
- [x] 3.1.1 Language of Page (`lang="en"`)
- [x] 4.1.1 Parsing (valid HTML, React handles this)
- [x] 4.1.2 Name, Role, Value (ARIA labels)

### Level AA (Recommended)
- [ ] 1.4.3 Contrast (Minimum) - **Verify** hover colors
- [ ] 1.4.11 Non-text Contrast - **Verify** focus indicators
- [ ] 2.1.2 No Keyboard Trap - ✅ Good (modal handles Tab)
- [ ] 2.3.3 Animation from Interactions - **Add** prefers-reduced-motion
- [ ] 2.4.3 Focus Order - **Verify** heading hierarchy
- [ ] 2.4.7 Focus Visible - **Verify** focus styles
- [ ] 3.2.4 Consistent Identification - ✅ Consistent navigation

## Implementation Order

1. **Week 1**: Skip link + prefers-reduced-motion
2. **Week 2**: Heading hierarchy audit + fix
3. **Week 3**: Contrast testing + hover color adjustments
4. **Week 4**: Alt text audit + external link labels

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Accessibility by Google](https://www.udacity.com/course/web-accessibility--ud891)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [Inclusive Components](https://inclusive-components.design/)

## Success Metrics

- [ ] Keyboard navigation works on all pages without mouse
- [ ] Screen reader announces all content correctly
- [ ] No WCAG Level AA violations detected by Axe DevTools
- [ ] All text contrast ratios meet 4.5:1 (standard) or 3:1 (large)
- [ ] Users with motion sensitivity can disable animations
