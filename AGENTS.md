# AGENTS.md — Caveats for developing crare.github.io

**Project**: A personal portfolio website deployed to GitHub Pages at [crare.github.io](https://crare.github.io). Built with React + TypeScript + Vite, featuring pages for skills, projects, games, about, and contact.

**Purpose**: Showcase personal work, skills, and projects with a modern, responsive web interface.

**Code Standards**: Readable, easy-to-understand code with good practices. Secure, reliable, testable, responsive, performant on most devices, accessible (WCAG compliant), Search Engine Optimized (SEO), and readable.

**See [CODE_STANDARDS_CHECKLIST.md](CODE_STANDARDS_CHECKLIST.md) for a detailed verification checklist of all standards.**

## Project layout

All source code lives in `my-app/`. The repo root only contains the GitHub Actions workflow and this file.

```
my-app/
  src/
    App.tsx               # routes: the one-page site at "/", old page URLs redirect to its sections
    components/           # shared UI: ExternalLink, PageMeta, Icons
    pages/home/           # HomePage: the whole site, one section per topic
    pages/layout/         # LayoutPage: analytics, scroll handling, skip link
    data/                 # static content: projects.ts, skills.ts, games.ts, work-experience.ts, contacts.ts
    styles/global.css     # single global stylesheet — all styling lives here
    img/                  # bundled screenshots and thumbnails
  public/images/          # profile photo
  tests/                  # Vitest tests, mirrors src/ structure
```

## Commands (run from `my-app/`)

| Purpose | Command |
|---|---|
| Dev server | `yarn dev` (http://localhost:5173) |
| Lint | `yarn lint` |
| Type-check | `yarn typecheck` |
| Build | `yarn build` |
| Tests | `yarn test` |
| Post-build smoke | `yarn smoke` (checks `dist/index.html` exists) |

## Pull requests

- Before requesting review, run `yarn test`, `yarn lint`, and `yarn typecheck` from `my-app/`. CI runs these as separate checks; also run `yarn build` to verify the production bundle.
- For pull requests that change user-visible UI, run the app locally, capture screenshots of the changed page or component, and attach them to the pull request description or a comment. Use descriptive alt text and capture before-and-after screenshots when a representative before state is available.

## Key caveats

### CSS architecture
- **One stylesheet**: `src/styles/global.css` holds every style. No CSS Modules, styled-components or MUI.
- **Structure**: design tokens on `:root` (`--accent`, `--paper`, `--paper2`, `--ink`, `--mu`, `--rule`), then the page in reading order (masthead, opening, sections, footer), then motion, then the phone layout (`max-width: 900px`).
- **Motion**: the opening uses load animations; sections use CSS scroll-driven animations inside `@supports (animation-timeline: view())`, so browsers without support just show the content. The `prefers-reduced-motion` block turns all of it off. The portrait's intro animation uses `backwards` fill so its hover transform still works afterwards.
- **Phone layout**: the top bar has a fixed 72px height and each section's `h2` sticks just below it (`top: 72px`). Change both together.

### Design system
**See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for the complete design system specification.**

### Accessibility
**See [ACCESSIBILITY.md](ACCESSIBILITY.md) for WCAG compliance guidelines and improvement roadmap.**
- React Router v7 with a `LayoutPage` shell. The site is one page at `/`; `/about`, `/skills`, `/projects`, `/games` and `/contact` redirect to the matching `#section`.
- GitHub Pages SPA redirect is handled by `public/404.html` (copied to `dist/404.html` by the Vite plugin in `vite.config.ts`).

### Deployment
- CI (`deploy.yml`) triggers only on pushes to `main` that modify files in `my-app/` or the workflow file itself. Changes in other files (e.g., README.md, AGENTS.md, DESIGN_SYSTEM.md) do **not** trigger deployment. Pull requests do not run this workflow; direct pushes to `main` are blocked, so updates must go through a pull request.
- Build output goes to `my-app/dist/`. The smoke test just checks that `dist/index.html` was produced.
- `vite.config.ts` is CommonJS syntax (no `"type": "module"` in package.json). Vite warns about this at startup — it's safe to ignore.

### Content
- Lists come from `src/data/`; longer prose lives in `HomePage.tsx`. Client case facts must match the public zure.com case studies; do not add client names to skills.
- Side-project screenshots use a small thumbnail plus a `-large.jpg` (cropped to the visible 16:10 area) through `srcset`. Keep both when adding a project with an image.
- Game thumbnails: `thumb` (local) → `gifThumb` → first itch.io screenshot (`media[0]`). The itch.io originals are large, so prefer adding a local `thumb` for new games.

### Testing
- Tests live in `tests/` (not colocated with source). Vitest is configured via `vite.config.ts`.
- Test setup file: `tests/setup.ts`.
- Run `yarn typecheck` to catch TypeScript errors before review.
