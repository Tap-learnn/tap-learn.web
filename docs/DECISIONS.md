# Tap & Learn — Architecture & Design Decisions Log (ADR)

## ADR-001: Mobile Reference Discovery & Brand Alignment
- **Decision:** Use real mobile application assets discovered in `/Users/apple/Desktop/tap-search`.
- **Finding:** The actual app uses `PrimaryBlue` (`#2563EB`) as primary brand color, `AccentPurple` (`#8B5CF6`) as secondary accent, `BackgroundLight` (`#F8FAFC`), and clean rounded Material 3 cards.
- **Action:** Instead of generic lavender placeholders, utilize the genuine mobile app assets: 3D logo (`app_logo_3d.webp`), header logo (`home_header_logo.webp`), 3D icons (`ic_3d_purple_book.webp`), and 14 screen mockups.

## ADR-002: Interactive Word Demo Architecture
- **Decision:** Build a browser-based, client-side interactive tap-to-define component mimicking `WordMeaningBottomSheet.kt`.
- **Implementation:**
  - Local dictionary store with rich English vocabulary.
  - Standard vs. Plain English toggle mode.
  - Web Speech API integration for native audio pronunciation fallback.
  - Keyboard accessibility (Enter/Space, Tab navigation, Escape to close).
  - Responsive positioning so popups never clip off small mobile viewports.

## ADR-003: Honest Product Marketing & Release State
- **Decision:** Since the mobile app is in final pre-release readiness without a live App Store/Play Store URL, provide an honest "Coming Soon to Google Play & App Store" CTA state with an interactive waitlist / notification modal and an immediate anchor to the Interactive Demo.
- **Rule:** Never invent fictitious download links or ratings.

## ADR-004: Pure Static Next.js App Router Architecture
- **Decision:** Build a 100% static, performant Next.js 15 site targeting Vercel deployment with zero mandatory backend or paid API keys.
