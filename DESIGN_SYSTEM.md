# Design System Specification — "Signal"

**Last Updated**: 2026-11-18

## Overview

A dark, technical look for a full-stack developer portfolio: near-black surfaces, a faint grid, one lime accent, sharp square edges and monospace labels. Every page shares the same tokens and components but has its own layout, so pages feel related without looking identical.

All styling lives in `my-app/src/styles/global.css` (see AGENTS.md for how it is organised).

---

## Colour tokens (`:root`)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0C0E11` | Page background |
| `--s1` | `#13161B` | Raised surface (cards, panels) |
| `--s2` | `#1A1E24` | Image placeholders, hover surfaces |
| `--line` | `#262B33` | Borders, grid lines, dividers |
| `--tx` | `#EDEEF0` | Primary text |
| `--mu` | `#A2AAB5` | Secondary text |
| `--dim` | `#858E9A` | Labels, metadata |
| `--accent` | `#C8F560` (lime) | Highlights, active states, primary buttons |

Text on the accent uses `#0C0E11`.

### Contrast (WCAG 2.2)

| Pair | Ratio | Level |
|---|---|---|
| `--tx` on `--bg` | 16.6 : 1 | AAA |
| `--mu` on `--bg` | 8.2 : 1 | AAA |
| `--dim` on `--bg` | 5.8 : 1 | AA |
| `--dim` on `--s1` | 5.5 : 1 | AA |
| `--accent` on `--bg` | 15.4 : 1 | AAA |
| `#0C0E11` on `--accent` | 15.4 : 1 | AAA |

---

## Typography

Loaded from Google Fonts in `index.html`.

| Role | Family | Notes |
|---|---|---|
| Display / headings | Space Grotesk 500–700 | Tight letter-spacing (−0.03 to −0.06em), large `clamp()` sizes |
| Body | Inter 400–600 | 16px base, 1.6 line height |
| Labels, data, code | JetBrains Mono 400–500 | Small uppercase "kicker" labels with 0.08–0.1em tracking |

Headline pattern: each line is wrapped in `.ln > span` and rises in on load; the accent word sits in `<em>`.

---

## Layout

- Content width: `.wrap` — max 1240px, 40px side padding (20px under 900px).
- Sections: `.sec` with 112px top padding (80px on small screens); `.sechead` holds a kicker, an `h2` and an optional "more" link.
- Square corners everywhere; depth comes from borders and offset outlines, not shadows or blur.
- Each page has its own composition:
  - **Home**: grid hero with portrait and terminal, activity ticker, stats, client cases, lifecycle, side projects, game-jam strip, big CTA.
  - **About**: split photo/profile hero, editorial bio, horizontal career timeline, certificates, lime "off the keyboard" band.
  - **Skills**: stacked layer diagram, skills table with toolkits, "also familiar with" grid.
  - **Projects**: index header, tabbed case-study viewer, filterable side-project ledger.
  - **Games**: save-file stats, level-select grid by year with solo/team filter, detail sheet.
  - **Contact**: oversized headline, Finland clock, full-width channel rows.

---

## Components

| Component | Class | Notes |
|---|---|---|
| Primary button | `.btn.pri` | Lime fill; hover inverts to light |
| Secondary button | `.btn` | Outline; lifts 2px on hover |
| Text link | `.more` | Lime underline, arrow icon |
| Tag | `.tag` | Mono 12px, 1px border |
| Filter chip | `.chip` / `.chip.sel` | 44px tall toggle buttons with `aria-pressed` |
| Kicker label | `.kick` | Mono uppercase, `--dim` |
| CTA strip | `.strip` | Closing row on inner pages |

Minimum touch target is 44px for nav links, chips, buttons and social links.

---

## Motion

- Entrance: `rise` (headlines), `fade` (copy), plus page-specific slide/stagger effects.
- Ambient: ticker marquee, blinking cursors, pulsing "now" dots, terminal typing on Home, live clock on Contact.
- Interaction: hover lifts, lime fills and underline sweeps; Projects/Games re-run their entrance when the selection changes.
- `prefers-reduced-motion: reduce` disables all animation and transitions.
