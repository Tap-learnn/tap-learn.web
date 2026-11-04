# Agent Collaboration Contract — Tap & Learn Website

- Read `Readme.MD` and `AGENTS.md` before every new task.
- The mobile app's approved screenshots (`public/references/mobile/`) and design tokens (`Color.kt`, `Theme.kt`) are the visual source of truth.
- Never invent product features, ratings, pricing, privacy promises, or download links.
- Keep components accessible, semantic, responsive, and typed.
- Keep `WordDemo` local/offline and avoid external requests.
- Only edit assigned files; coordinate shared files through A0 (Lead Architect / Coordinator).
- Report tests executed and any assumptions.
- Label missing references explicitly rather than silently faking them.
- Run `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`.

## Assigned Workstreams
- **A0 — Lead Architect & Multi-Agent Coordinator**: Architecture, integration, contracts, quality gates, sign-off.
- **A1 — Design System & Tokens**: Design tokens extracted directly from mobile `Color.kt` and `Theme.kt`, global CSS variables, theme classes.
- **A2 — Frontend Architecture & Layout**: Next.js App Router, layout, responsive navbar, footer, error/not-found pages, SEO metadata.
- **A3 — Landing Page Sections**: Hero with 3D device preview, Core Features, How It Works, Real Screenshot Gallery, Offline & Privacy, FAQ, CTA.
- **A4 — Interactive Demo Engine**: Browser-based interactive tap-to-define demo simulating mobile `WordMeaningBottomSheet.kt`, with Standard/Plain English toggle, IPA, TTS pronunciation, examples, local lexicon.
- **A5 — Motion & Visual Polish**: Framer Motion microinteractions, responsive phone mockups, smooth hover states, reduced-motion accessibility.
- **A6 — Quality Assurance**: TypeScript verification, linting, production build verification, responsive breakpoint testing.
- **A7 — Vercel Deployment**: Vercel configuration, zero-config static optimization, deployment documentation.
