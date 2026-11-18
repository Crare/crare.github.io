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
    App.tsx               # routes
    components/           # shared UI: SiteHeader, SiteFooter, ExternalLink, PageMeta, CtaStrip, Icons
    pages/<page>/         # routed pages (landing, about, skills, projects, games, contact, layout)
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
- **Structure**: design tokens on `:root` (`--accent`, `--bg`, `--s1`, `--s2`, `--line`, `--tx`, `--mu`, `--dim`), then shared components (nav, buttons, tags, footer), then one block per page scoped under the page root class (`.p-home`, `.p-about`, `.p-skills`, `.p-projects`, `.p-games`, `.p-contact`). Pages reuse short class names (`.row`, `.panel`, `.kpis`…) with different meanings, so always keep page rules inside their page scope.
- **Motion**: entrance animations use `animation: … both`, so content starts hidden until the animation runs. The `prefers-reduced-motion` block at the end turns all animation off; if you add an element that starts at `opacity:0` outside an animation, add it there too.
- **Keyframe names are global**: check for clashes before adding one (e.g. Contact uses `cping` because About already has `ping`).

### Design system
**See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for the complete design system specification.**

### Accessibility
**See [ACCESSIBILITY.md](ACCESSIBILITY.md) for WCAG compliance guidelines and improvement roadmap.**
- React Router v7 with a `LayoutPage` shell (`/`) and child routes for `/skills`, `/about`, `/projects`, `/games`, `/contact`.
- GitHub Pages SPA redirect is handled by `public/404.html` (copied to `dist/404.html` by the Vite plugin in `vite.config.ts`).

### Deployment
- CI (`deploy.yml`) triggers only on pushes to `main` that modify files in `my-app/` or the workflow file itself. Changes in other files (e.g., README.md, AGENTS.md, DESIGN_SYSTEM.md) do **not** trigger deployment. Pull requests do not run this workflow; direct pushes to `main` are blocked, so updates must go through a pull request.
- Build output goes to `my-app/dist/`. The smoke test just checks that `dist/index.html` was produced.
- `vite.config.ts` is CommonJS syntax (no `"type": "module"` in package.json). Vite warns about this at startup — it's safe to ignore.

### Content
- Page copy and lists come from `src/data/`. Client case figures must match the public zure.com case studies; do not add client names to skills.
- Game thumbnails: `thumb` (local) → `gifThumb` → first itch.io screenshot (`media[0]`). The itch.io originals are large, so prefer adding a local `thumb` for new games.

### Testing
- Tests live in `tests/` (not colocated with source). Vitest is configured via `vite.config.ts`.
- Test setup file: `tests/setup.ts`.
- Run `yarn typecheck` to catch TypeScript errors before review.
