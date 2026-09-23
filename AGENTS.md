# AGENTS.md — Caveats for developing crare.github.io

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
- **Accent palette**: orange `#FF9500` → yellow `#FFD700`. Use these for interactive elements, labels, icons, and highlights.
- **Text**: `#1a1a1a` (primary), `#333333` (secondary), `#666666` (muted).
- **Fonts**: `Space Grotesk` (headings, weights 600/700) + `Nunito` (body, weights 400–800). Both loaded from Google Fonts in the `@import` at the top of `Home.css`.
- **Animated background diamonds** (`AnimatedBackground.tsx`) are `position: fixed` with `z-index: 0`; page content uses `z-index: 1`. Do not lower content z-index below 1.

### Routing
- React Router v7 with a `LayoutPage` shell (`/`) and child routes for `/skills`, `/about`, `/projects`, `/games`, `/contact`.
- GitHub Pages SPA redirect is handled by `public/404.html` (copied to `dist/404.html` by the Vite plugin in `vite.config.ts`).

### Deployment
- CI (`deploy.yml`) triggers only on pushes to `main`/`master`. Feature branches do **not** deploy automatically.
- Build output goes to `my-app/dist/`. The smoke test just checks that `dist/index.html` was produced.
- `vite.config.ts` is CommonJS syntax (no `"type": "module"` in package.json). Vite warns about this at startup — it's safe to ignore.

### Testing
- Tests live in `tests/` (not colocated with source). Vitest is configured via `vite.config.ts`.
- Test setup file: `tests/setup.ts`.
- Run `yarn lint` before `yarn test` — type errors will surface there first.
