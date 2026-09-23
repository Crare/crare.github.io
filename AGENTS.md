# AGENTS.md — Caveats for developing crare.github.io

**Project**: A personal portfolio website deployed to GitHub Pages at [crare.github.io](https://crare.github.io). Built with React + TypeScript + Vite, featuring pages for skills, projects, games, about, and contact.

**Purpose**: Showcase personal work, skills, and projects with a modern, responsive web interface.

**Code Standards**: Readable, easy-to-understand code with good practices. Secure, reliable, testable, responsive, performant on most devices, accessible (WCAG compliant), Search Engine Optimized (SEO), and readable.

## Project layout

All source code lives in `my-app/`. The repo root only contains the GitHub Actions workflow and this file.

```
my-app/
  src/pages/home/         # all page components and sections
    Home.css              # single global stylesheet — all theming lives here
    components/           # shared UI pieces (Header, Footer, AnimatedBackground, …)
    pages/                # routed pages (LandingPage, LayoutPage, …)
    data/                 # static data: games.ts, projects.tsx, skills.tsx
  tests/                  # Vitest tests, mirrors src/ structure
```

## Commands (run from `my-app/`)

| Purpose | Command |
|---|---|
| Dev server | `yarn dev` (http://localhost:5173) |
| Type-check | `yarn lint` |
| Build | `yarn build` |
| Tests | `yarn test` |
| Post-build smoke | `yarn smoke` (checks `dist/index.html` exists) |

## Key caveats

### CSS architecture
- **One file rules them all**: `Home.css` contains every style, including variables, animations, and all component overrides. There is no CSS Modules or styled-components.
- **CSS variables** (`--text-100`, `--bg-900`, etc.) are defined in `:root` but many rules hardcode hex values directly. When changing the colour theme, grep for both patterns.
- **Duplicate `section-title` rule**: `section-title` is defined twice in `Home.css` (once with `text-transform: uppercase`, once without). The second definition wins. Be aware when editing either.

### Design system
**See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for the complete design system specification.**

### Accessibility
**See [ACCESSIBILITY.md](ACCESSIBILITY.md) for WCAG compliance guidelines and improvement roadmap.**
- React Router v7 with a `LayoutPage` shell (`/`) and child routes for `/skills`, `/about`, `/projects`, `/games`, `/contact`.
- GitHub Pages SPA redirect is handled by `public/404.html` (copied to `dist/404.html` by the Vite plugin in `vite.config.ts`).

### Deployment
- CI (`deploy.yml`) triggers only on pushes to `main`/`master` that modify files in `my-app/` or the workflow file itself. Changes in other files (e.g., README.md, AGENTS.md, DESIGN_SYSTEM.md) do **not** trigger deployment.
- Build output goes to `my-app/dist/`. The smoke test just checks that `dist/index.html` was produced.
- `vite.config.ts` is CommonJS syntax (no `"type": "module"` in package.json). Vite warns about this at startup — it's safe to ignore.

### Testing
- Tests live in `tests/` (not colocated with source). Vitest is configured via `vite.config.ts`.
- Test setup file: `tests/setup.ts`.
- Run `yarn lint` before `yarn test` — type errors will surface there first.
