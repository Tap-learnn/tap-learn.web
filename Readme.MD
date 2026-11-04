# Tap & Learn — Official Promotional Website

> **Project:** Tap & Learn (Tap & Search)
> **Type:** Public-facing promotional / product landing website
> **Target platform:** Vercel
> **Status:** Implementation blueprint — build from scratch
> **Core principle:** The website must look like a natural extension of the **existing Tap & Learn mobile app**, not a separate brand.

---

## 1. Project Overview

Tap & Learn is a privacy-conscious, offline-first mobile PDF-reading and vocabulary-learning app. A reader opens a PDF, taps an unfamiliar word, and gets its meaning and an example to improve English comprehension.

Build a visually engaging, fast, accessible, responsive **promotional website** to explain the product and encourage visitors to download or join a waitlist. **This website is not a web-based PDF reader** and must not promise browser-based features that have not been implemented in the mobile app.

### Product value proposition

**Headline:** Every Word Opens a World.

**Subheadline:** Read PDFs with confidence. Tap any unfamiliar word to discover its meaning and see how it's used — with an offline-first reading experience.

**Primary audience:** Students, English learners, readers, and people studying from PDF documents.

**Primary conversion:** Download the app (when a verified release link exists). Until then use a transparent `Coming soon` state and a working contact/waitlist workflow only if it has actually been implemented.

### Success criteria

- Visitors understand the product in the first screen.
- Visitors can experience a **safe, simulated tap-to-define demo** without uploading a document.
- The visual identity clearly matches screenshots of the real mobile app.
- The site works well on phones, tablets, and desktops.
- Everything can be built and deployed to Vercel with no mandatory paid services.

---

## 2. Source-of-Truth References — REQUIRED

**Do not invent the mobile app's colors, icons, screenshots, or features.** The current working theme hypothesis is **light background + lavender/purple accents**, but it is **not confirmed** until actual mobile screenshots are inspected.

### Reference folder contract

Before implementing polished visuals, the design agent should collect the team's existing mobile assets into:

```text
public/
  references/
    mobile/
      home.png                 # Existing app home/library screen
      reader.png               # Existing PDF reader screen
      word-definition.png      # Existing tapped-word definition state
      vocabulary.png           # Existing saved words screen, if implemented
      settings.png             # Existing settings screen, if implemented
    brand/
      logo.png                 # Approved brand logo; do not generate a substitute silently
      icon.png                 # Approved app icon
  screenshots/                 # Optimized copies permitted for website display
```

**Reference status:** These files are expected inputs, **not files bundled with this README**. If a reference is missing, create a tracked TODO and use a clearly labeled temporary placeholder. Never claim an invented UI mockup is an actual mobile screenshot.

### Reference priority (highest to lowest)

1. Latest approved Tap & Learn mobile screenshots / Figma components.
2. Official app logo, icon, and existing design tokens.
3. Actual released feature list and current implementation.
4. Product documentation approved by the mobile-app team.
5. This README's fallback proposals (only where references do not specify an answer).

### Design-reference inventory

| Reference | Why it matters | Owner | Required before |
|---|---|---|---|
| `home.png` | Navigation, card styling, core visual language | Mobile/design team | Visual sign-off |
| `reader.png` | PDF layout, toolbar, type sizes | Mobile/design team | Hero mockup |
| `word-definition.png` | Most important interaction, popover styling | Mobile/design team | Live demo |
| `logo.png` / `icon.png` | Brand, favicon, open graph | Brand/design team | Production launch |
| Mobile design tokens | Colors, spacing, type, corner radius | Mobile/design team | Final styling |
| Verified feature matrix | Prevents false marketing claims | Product owner | Copy sign-off |
| Verified store/release URL | Enables genuine download CTA | Release owner | Production CTA |

### Proposed asset metadata

Create `src/content/references.ts` to track source filenames, whether the asset is approved, and where each is used. If the website team has no access to the reference images, stop visual sign-off but continue scaffolding, content structure, and demo logic.

---

## 3. What We Are Building

### Single-page website (MVP)

1. **Navbar:** app logo, `Features`, `Live Demo`, `How It Works`, `Privacy`, primary CTA.
2. **Hero:** headline, supporting copy, mobile screenshot/mockup based on real app, CTA, secondary `Try the demo` anchor.
3. **Interactive Word Demo:** a short built-in paragraph; clicking/tapping a highlighted word opens a definition and an example sentence. All data is local and embedded. Clearly label it as a demo.
4. **Features:** offline-first PDF reading, tap-to-define, contextual example sentences, clear reading experience, and saved vocabulary **only if confirmed implemented**.
5. **How It Works:** Open a PDF → Tap a word → Understand and continue reading.
6. **App Screenshots:** responsive visual gallery using approved real app screenshots.
7. **Privacy / Offline:** documents stay on the device **only if confirmed for the released app**; no forced login **only if confirmed**. Explain that the promotional website itself loads over the internet.
8. **FAQ:** offline usage, PDFs, definitions, app availability, device support (each answer checked against actual release scope).
9. **Final CTA + Footer:** download or coming soon, privacy page, contact details, copyright.

### Supporting routes

| Route | Purpose |
|---|---|
| `/` | Promotional landing page |
| `/privacy` | Accurate privacy policy (must be reviewed before publication) |
| `/terms` | Terms, if required / provided by project owner |
| `/404` | Friendly not-found page (Next.js not-found handling) |

### Explicitly out of scope for MVP

- User accounts, authentication, dashboards, PDF upload, server-side PDF parsing.
- Paid subscriptions, payment processing, real app analytics dashboards.
- Fake testimonials, invented download counts, fabricated ratings.
- Collection of email addresses unless a real consent-based backend/form provider is configured.
- Advertising on the marketing site unless separately approved.

---

## 4. Visual Style: Match the Mobile App

**Goal:** The site should feel like the *same product*, translated from a phone UI to a web landing experience.

### Fallback direction — ONLY if the mobile screenshots confirm it

- Background: off-white / white.
- Accent: soft lavender and purple.
- Components: smooth rounded cards, subtle shadows, friendly clean typography.
- Mood: accessible, modern, optimistic, trustworthy — not a dark cyberpunk site.
- Animation: subtle floating screenshots, section reveal, hover states; honor reduced-motion settings.

### Design-token rules

Create CSS variables from the **real mobile reference** instead of hardcoding styling across components.

```css
/* src/app/globals.css — EXAMPLE ONLY: replace with confirmed mobile tokens */
:root {
  --color-bg: #ffffff;
  --color-surface: #f8f7ff;
  --color-primary: #6d4aff;
  --color-primary-soft: #ede8ff;
  --color-text: #19152d;
  --color-muted: #665f79;
  --color-border: #e7e2f4;
  --radius-card: 20px;
  --radius-button: 999px;
}
```

**Do not treat the hex values above as official colors.** Update from actual mobile app screenshots/tokens and document the finalized values in `docs/DESIGN_SYSTEM.md`.

### UI guidelines

- One clear H1 and one clear primary action above the fold.
- Use a real app screenshot in the hero when available; otherwise show an annotated placeholder.
- Use generous spacing and clear hierarchy; no cluttered gradient overload.
- Avoid overly heavy animation and oversized assets.
- Keep touch targets comfortably large; ensure keyboard focus states.
- Hero should remain useful if images or JavaScript fail.
- Keep all copy honest about feature availability.

---

## 5. Recommended Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js (App Router, TypeScript) | Routing, SEO, Vercel deployment |
| Styling | Tailwind CSS | Fast consistent responsive styling |
| UI primitives | Semantic HTML; optional shadcn/ui components | Accessibility and reuse |
| Icons | lucide-react | Lightweight, consistent icons |
| Motion | CSS transitions; optional Motion library | Attractive but restrained effects |
| Tests | Vitest + React Testing Library; Playwright | Unit + end-to-end coverage |
| Static assets | `public/` | Simple hosting and optimization |
| Hosting | Vercel | Git-based deployments and previews |

Use current stable, mutually compatible package releases. Do not pin a version in documentation without verifying it at implementation time.

**Backend:** Not required for the **static marketing MVP**. A waitlist, analytics, or contact form may need an external provider/serverless function and explicit privacy documentation. The offline mobile application remains a separate product; hosting a marketing website does not compromise its offline-first architecture.

---

## 6. Project Directory Structure

```text
tap-and-learn-web/
├── README.md
├── AGENTS.md
├── .env.example
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── public/
│   ├── references/
│   │   ├── mobile/
│   │   └── brand/
│   ├── screenshots/
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/{Header,Footer}.tsx
│   │   ├── sections/{Hero,Features,WordDemo,HowItWorks,Screenshots,Privacy,FAQ,FinalCTA}.tsx
│   │   └── ui/{Button,SectionHeading,DeviceFrame}.tsx
│   ├── content/
│   │   ├── site.ts
│   │   ├── features.ts
│   │   ├── faq.ts
│   │   ├── demoWords.ts
│   │   └── references.ts
│   ├── lib/
│   │   └── utils.ts
│   └── tests/
│       └── wordDemo.test.tsx
├── e2e/
│   └── landing.spec.ts
└── docs/
    ├── DESIGN_SYSTEM.md
    ├── FEATURE_VERIFICATION.md
    ├── AGENT_TASKS.md
    ├── DECISIONS.md
    ├── QA_CHECKLIST.md
    └── DEPLOYMENT.md
```

`{...}` in the tree means separate files in that folder (for example `Hero.tsx` and `Features.tsx`). Build only necessary components; avoid creating empty files merely to match a diagram.

---

## 7. Getting Started from Scratch

### Prerequisites

- Node.js compatible with the installed Next.js version (use the currently documented Node.js LTS).
- npm installed.
- Git and a GitHub repository for team collaboration.
- Vercel account for deployment.
- Approved mobile visual references for final polish.

### Initialize

```bash
npx create-next-app@latest tap-and-learn-web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd tap-and-learn-web
npm install lucide-react
# Optional animation library only if motion requirements justify it:
# npm install motion
npm run dev
```

Visit `http://localhost:3000` and replace starter content with the homepage sections.

### Useful scripts

Ensure `package.json` offers commands equivalent to:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:e2e": "playwright test"
  }
}
```

Install/configure the matching test dependencies **before** running test scripts. Some scripts above are intended targets, not generated automatically by the initial scaffold.

### Environment variables

The static MVP needs **no secrets**. Create `.env.example` only for intentionally introduced optional integrations, e.g.:

```dotenv
# Optional, public verified app download URL. Empty = show "Coming soon".
NEXT_PUBLIC_APP_DOWNLOAD_URL=
# Optional, public support email if the team provides one.
NEXT_PUBLIC_SUPPORT_EMAIL=
```

Never commit API keys, credentials, or contact-form secrets. Do not invent store links.

---

## 8. Functional Specs

### 8.1 Interactive tap-to-define demo

- Display a short **original** English paragraph with 3–5 tap-enabled words.
- When a visitor clicks a word, display a small accessible card or popover with:
  - selected word,
  - part of speech (where relevant),
  - plain-English definition,
  - original example sentence,
  - `Close` button.
- Use a local data object; no API calls, no external dictionary dependency.
- Supports keyboard activation (`Enter` / `Space` on real buttons), close via `Escape`, accessible labels, and visible focus state.
- On mobile, show the definition without clipping off the viewport.
- Make the demo unambiguously simulated; **do not claim every English word is covered**.

Example data shape:

```ts
export type DemoWord = {
  word: string;
  partOfSpeech?: string;
  definition: string;
  example: string;
};

export const demoWords: Record<string, DemoWord> = {
  curious: {
    word: 'curious',
    partOfSpeech: 'adjective',
    definition: 'Eager to learn or know more about something.',
    example: 'The curious reader looked up a new word.'
  },
  discover: {
    word: 'discover',
    partOfSpeech: 'verb',
    definition: 'To find or learn something for the first time.',
    example: 'Every chapter helps us discover new ideas.'
  }
};
```

### 8.2 CTA behavior

| Condition | Behavior |
|---|---|
| Approved live store/download URL | Open exact approved URL with clear button label |
| No approved release URL | Show `Coming soon` clearly; optional `Explore the demo` CTA |
| Waitlist implemented and privacy-reviewed | Show working signup with consent and failure/success feedback |
| No waitlist backend | Do **not** show a fake working subscription form |

### 8.3 Accessibility

- Use semantic HTML (`header`, `nav`, `main`, `section`, `footer`).
- Visible focus indicators; logical tab order.
- Meaningful image alternative text; decorative visuals can use empty alt.
- Color contrast suitable for WCAG 2.2 AA targets.
- Respect `prefers-reduced-motion`.
- Avoid motion effects on scroll that obstruct reading.
- Form controls, if added, must have proper labels/errors.

### 8.4 Responsive behavior

Test at approximately **360**, **390**, **768**, **1024**, and **1440** CSS-pixel viewport widths. No horizontal overflow; content readable with touch-friendly interactions.

### 8.5 SEO and performance

- Unique title and meta description.
- Open Graph and social sharing image.
- Sitemap and robots configuration.
- Optimized approved screenshots with appropriate alt text.
- Avoid rendering all sections as client-side components; only the live demo needs client-side state.
- Set performance goals: Lighthouse scores of **90+** in Performance, Accessibility, SEO, Best Practices under representative runs, understanding scores vary by environment.
- Prefer lazy-loading images below the fold and avoiding heavy animation bundles.

---

## 9. Multi-Agent Implementation Plan

> The project is designed for **parallel AI agents** with separate ownership and a shared integration contract. Each agent must read `README.md`, `AGENTS.md`, and the latest files in `docs/` before editing.

### Roles and deliverables

| Agent | Area | Deliverable | Must not modify |
|---|---|---|---|
| **A0 — Coordinator / Integrator** | Planning, architecture, integration | `AGENTS.md`, tracked decisions, conflict resolution, PR merges, final sign-off | Avoid rewrites of completed agent-owned UI without review |
| **A1 — Brand / Design System** | Mobile reference extraction | `docs/DESIGN_SYSTEM.md`, design tokens, approved asset inventory | Application logic |
| **A2 — UI / Landing Sections** | Layout, hero, feature sections | Responsive presentational components | Demo dictionary data and deployment config |
| **A3 — Interactive Demo** | Tap-to-define experience | `WordDemo.tsx`, local data, unit tests | Global theme and navigation |
| **A4 — Content / SEO / Legal Coordination** | Product copy, FAQ, metadata | Content modules, verified claims log, draft policy pages | Product features not confirmed by owner |
| **A5 — QA / Accessibility** | Testing, responsiveness | Tests, QA report, bug tickets, accessibility review | Broad visual redesign without coordination |
| **A6 — Deployment / Release** | Vercel and delivery | Build checks, deployment guide, live URL validation | App feature implementation |

### Parallelization sequence

```text
Phase 0 — Coordinator: confirm scope, inventory assets, establish contracts
          |
          +--> A1: mobile design reference / tokens ---+
          +--> A4: verified copy / SEO / FAQ ----------+--> A2: integrated landing UI
          +--> A3: isolated demo + tests --------------+
                                                     |
                                         A0: integrate and review
                                                     |
                                         A5: QA + accessibility
                                                     |
                                         A6: Vercel deploy
                                                     |
                                         A0: acceptance sign-off
```

**Important dependency:** A2 may scaffold with provisional styling but **cannot declare visual parity complete** until A1 receives and validates actual mobile references.

### Agent task template

Copy this into each agent assignment, filling in its exact files and acceptance criteria:

```text
PROJECT: Tap & Learn promotional website
READ FIRST: README.md, AGENTS.md, docs/DECISIONS.md, docs/FEATURE_VERIFICATION.md
ROLE: <agent name>
GOAL: <specific outcome>
OWNED FILES: <explicit paths>
DEPENDENCIES: <files/assets from other agents>
DO NOT TOUCH: <other agent-owned paths>
REQUIREMENTS: Mobile-app visual parity, honest product claims, accessibility, responsive design.
DELIVERABLE: Working code/docs plus a short summary of changes, tests run, unresolved TODOs.
ACCEPTANCE: <measurable criteria>
```

### Working protocol

1. **Coordinator creates interfaces first:** token names, content object shapes, component export names, and file ownership are agreed before parallel coding.
2. **One primary owner per file:** no two agents independently overwrite `page.tsx`, `globals.css`, `package.json`, or `layout.tsx`.
3. **Separate branches:** e.g. `agent/design-system`, `agent/landing-ui`, `agent/word-demo`, `agent/content-seo`, `agent/qa`, `agent/deploy`.
4. **Small PRs:** include screenshots (if available), changed files, tests, known issues, and references used.
5. **No fabricated references or links:** store `UNVERIFIED` next to unknown claims; route decision to product owner.
6. **Integration cadence:** merge contracts/tokens before visual sections; demo can merge independently; QA follows integrated build.
7. **Conflict resolution:** A0 owns conflicts and must preserve user-approved decisions; record changes in `docs/DECISIONS.md`.
8. **Definition of done:** typecheck, lint, tests, build, manual visual QA, no broken links or fake CTAs.

### Suggested `AGENTS.md`

Create at repository root:

```md
# Agent Collaboration Contract

- Read README.md before every new task.
- The mobile app's approved screenshots and design tokens are the visual source of truth.
- Never invent product features, ratings, pricing, privacy promises, or download links.
- Keep components accessible, semantic, responsive, and typed.
- Keep WordDemo local/offline and avoid external requests.
- Only edit assigned files; coordinate shared files through A0.
- Report tests executed and any assumptions.
- Label missing references explicitly rather than silently faking them.
- Run `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` when configured.
```

---

## 10. Execution Roadmap

### Milestone 0 — Reference & scope lock

- [ ] Gather the latest approved mobile screenshots and logo.
- [ ] Record verified features and unsupported features in `docs/FEATURE_VERIFICATION.md`.
- [ ] Confirm release status, supported platforms, and download URLs.
- [ ] Create design tokens from the mobile app.
- [ ] Sign off on site sections and core copy.

### Milestone 1 — Repository foundation

- [ ] Scaffold Next.js + TypeScript + Tailwind.
- [ ] Set up ESLint, type checking, tests, CI build.
- [ ] Add `AGENTS.md` and docs folders.
- [ ] Implement global tokens, font strategy, page metadata, layout.

### Milestone 2 — Landing-page MVP

- [ ] Responsive navbar and hero.
- [ ] Interactive word-demo section.
- [ ] Feature cards and three-step explanation.
- [ ] Screenshot gallery populated with approved images.
- [ ] Privacy/offline messaging, FAQ, final CTA, footer.

### Milestone 3 — Polish & QA

- [ ] Mobile visual parity review against screenshots.
- [ ] Add restrained animations with reduced-motion fallback.
- [ ] Test keyboard access, responsiveness, image loading, 404, all links.
- [ ] Validate copy and legal/privacy pages.
- [ ] Complete automated and manual QA checklist.

### Milestone 4 — Release

- [ ] Production build passes.
- [ ] Push to GitHub.
- [ ] Import repository into Vercel.
- [ ] Configure optional env vars and domain.
- [ ] Test preview and production URLs on mobile and desktop.
- [ ] Verify real download link or visible Coming Soon state.

---

## 11. Vercel Deployment Guide

### Git-based deployment (recommended)

1. Push the working repository to GitHub.
2. In Vercel, import the GitHub repository.
3. Use the detected Next.js framework settings.
4. Add any intentionally used environment variables (none required for static MVP).
5. Deploy and review the Vercel preview URL.
6. Verify the production build, working anchors, mobile layout, social preview, and CTAs.
7. Connect a custom domain if available; configure DNS according to Vercel's current instructions.

### CLI option

```bash
npm install -g vercel
vercel
vercel --prod
```

The CLI prompts to link the project/account. **Do not claim the website is deployed until a working URL is actually verified.** Check Vercel plan limits and current terms at the time of launch; the free Hobby tier may have eligibility restrictions, including for commercial usage.

### Official technical references

- Next.js documentation: https://nextjs.org/docs
- Next.js installation: https://nextjs.org/docs/app/getting-started/installation
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Next.js: https://vercel.com/docs/frameworks/full-stack/nextjs
- Vercel deployment: https://vercel.com/docs/deployments
- React accessibility fundamentals: https://react.dev/learn
- Web Content Accessibility Guidelines: https://www.w3.org/TR/WCAG22/
- Playwright: https://playwright.dev/docs/intro
- Vitest: https://vitest.dev/guide/

These are documentation links, **not** screenshots or evidence that a site has been built.

---

## 12. Quality Assurance / Acceptance Checklist

### Product accuracy

- [ ] All feature statements match the real app build.
- [ ] All offline/privacy claims have been reviewed.
- [ ] Download CTA works or clearly says `Coming soon`.
- [ ] No invented testimonials, statistics, app ratings, or badges.

### Visual quality

- [ ] Exact approved logo and app palette used.
- [ ] App mockups correspond to actual existing UI.
- [ ] Responsive at 360/390/768/1024/1440px.
- [ ] No clipped popovers, overlap, overflow, unreadable gradients.

### Interaction

- [ ] Demo opens correct definition for each supported word.
- [ ] Demo supports touch, keyboard, dismiss/escape.
- [ ] Header navigation and anchor links work.
- [ ] CTA has a real destination or honest disabled/coming-soon state.

### Engineering

- [ ] `npm run lint` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm test` passes once configured.
- [ ] `npm run build` succeeds.
- [ ] No secrets committed; no console errors.
- [ ] Performance and accessibility audit completed.

### Release

- [ ] Live deployment URL confirmed.
- [ ] Metadata and Open Graph preview verified.
- [ ] Policies and contact details reviewed.
- [ ] Final approval recorded by product owner.

---

## 13. Known Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Mobile screenshots unavailable | Scaffold first; block visual sign-off; clearly mark placeholders |
| Website deviates from app style | Require side-by-side reference QA and shared token extraction |
| Features not yet available | Feature-verification matrix and conditional copy |
| Fake/non-working download CTA | Only use approved URL; otherwise `Coming soon` |
| Agents overwrite shared files | Define primary file owner and merge through A0 |
| Slow load due to oversized screenshots | Optimize, serve responsive images, lazy load |
| Demo inaccessible on mobile/keyboard | Component tests and explicit accessibility checklist |
| Contact/waitlist creates privacy obligations | Keep out of MVP unless consent and backend are implemented |
| Vercel usage/plan assumptions | Verify terms, limits, and commercial eligibility before launch |

---

## 14. Ready-to-Paste Master Prompt for Multi-Agent Coding Tools

```text
Build the complete Tap & Learn promotional website from scratch, ready for Vercel.

Read README.md as the master implementation specification. Create AGENTS.md and docs/
tracking files as described. The visual source of truth is the approved Tap & Learn
mobile-app screenshots in public/references/mobile/ and the approved logo/icon in
public/references/brand/. If these are absent, label all replacement assets as
placeholders and do not claim visual parity. The currently proposed light/purple
look is only a fallback hypothesis, not an approved brand palette.

Product: offline-first mobile PDF reader that lets readers tap unfamiliar words
for definitions and examples. Website goal: explain the value and convert
visitors to a legitimate app download. Do not build a web PDF reader.

Stack: Next.js App Router + TypeScript + Tailwind CSS. Deploy on Vercel.
Build: responsive hero, navbar, interactive local-word demo, features,
three-step walkthrough, approved screenshots gallery, privacy/offline message,
FAQ, CTA, footer, privacy page, and SEO metadata.

Divide work into these agents:
A0 Coordinator/Integrator, A1 Brand/Design, A2 UI Sections, A3 Demo,
A4 Content/SEO, A5 QA/Accessibility, A6 Deployment.
Assign non-overlapping files and parallelize only where contracts permit.

Every agent must report: files changed, reference assets used, tests run,
remaining uncertainties, and acceptance evidence. Never invent app features,
user reviews, release dates, analytics, ratings, privacy guarantees, or URLs.

Finish with passing lint, typecheck, tests, production build, and visual QA.
Give exact local run commands and verified Vercel URL if deployed.
```

---

## 15. Final Delivery Requirements

A successful team handoff includes:

- Complete, documented Git repository.
- Responsive promotional website visually aligned with approved mobile references.
- Accessible, client-side tap-to-define demo.
- Approved artwork and honest app feature copy.
- Passing tests and production build.
- Completed `docs/QA_CHECKLIST.md` and `docs/DECISIONS.md`.
- Vercel preview/production URL **if the team has actually deployed it**.
- A list of pending release items (if any), especially download links and policies.

**Reminder:** Build the website to promote Tap & Learn; keep the mobile app's offline-first identity and its real interface at the center of every design decision.
