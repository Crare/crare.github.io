# Design System Specification: "Warm editorial"

**Last Updated**: 2026-11-20

## Overview

A personal, print-like look: warm paper, dark ink, a serif for reading, one quiet accent, thin rules and a two-column layout with titles in a narrow left column. It deliberately avoids template tropes (neon accents, gradients, fake terminals, stat counters, slogan headlines). Copy is plain first person.

The whole site is one page. All styling lives in `my-app/src/styles/global.css`.

---

## Colour tokens (`:root`)

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F4F0E8` | Page background |
| `--paper2` | `#EAE4D8` | Image placeholders |
| `--ink` | `#1C1A17` | Text, strong rules, buttons on hover |
| `--mu` | `#5C574E` | Secondary text, captions |
| `--rule` | `#D8D0C1` | Thin dividers and frame borders (decoration only, never text) |
| `--accent` | `#2F5D46` (deep green) | Link underlines, the main call to action, hover states |

Image frames use a lighter mount, `#FBF9F4`.

### Contrast (WCAG 2.2)

| Pair | Ratio | Level |
|---|---|---|
| `--ink` on `--paper` | 15.3 : 1 | AAA |
| `--mu` on `--paper` | 6.3 : 1 | AA |
| `--accent` on `--paper` | 6.7 : 1 | AA |
| `--paper` on `--accent` (button text) | 6.7 : 1 | AA |

---

## Typography

Loaded from Google Fonts in `index.html`.

| Role | Family | Notes |
|---|---|---|
| Headings and reading text | Newsreader 400–600, italic 400 | 20px body (18px on phones), optical sizing on |
| Menu, labels, captions, links under entries | Work Sans 400–600 | 13–17px |

Headlines are full sentences, not slogans. Italic is used for the "facts" lines and the opening line of the About section.

---

## Layout

- Column: `.col`, max 1160px, 48px side padding (20px on phones).
- Sections (`.sec`): a 220px title column and the content beside it; on phones the title sits above and sticks under the top bar while you read that section.
- Entries inside sections (client work, jobs, skills) repeat the same idea with a 200px label column.
- Order: opening (intro + portrait) → Client work → A bit about me → Skills → Side projects → Game jams → Get in touch.

---

## Components

| Component | Class | Notes |
|---|---|---|
| Top bar | `.mast` | Sticky; name on the left, section links on the right, "Contact" as a small outlined button |
| Phone menu | `.burger`, `.menu.open` | Disclosure button, menu drops down under the bar |
| Main call to action | `.go a.cta` | Filled accent button, used once in the opening |
| Framed image | `.frame` | Light mount, thin border, soft shadow; the portrait sits slightly tilted |
| Back to top | `.totop` | Fixed bottom-right square button |
| Text link | `.more` | Work Sans, underlined in the accent |

Minimum touch target is 44px for every link and button.

---

## Motion

- Load: the opening text settles upward line by line; the portrait is "placed" onto the page.
- Scroll: section rules draw across and content eases up as it enters (CSS scroll-driven animations; no JavaScript).
- Hover: framed images lift and tilt about 1–1.5°; link underlines thicken.
- `prefers-reduced-motion: reduce` turns all animation and transitions off.
