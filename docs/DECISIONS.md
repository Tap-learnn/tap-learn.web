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

## ADR-005: Android Material 3 Mobile Screen Parity & Showcase Overhaul
- **Problem:**
  - Generic iPhone device mockups with Dynamic Island pills and bottom home bars obstructed Android Material 3 app headers and navigation.
  - Screenshots were cropped aggressively due to mismatched aspect ratios (`aspect-[9/16]` and `aspect-[9/19]` vs actual screenshot ratio `219x507` / `aspect-[219/507]`).
  - Only 8 of 14 authentic screens were displayed, in an awkward single-column stack on mobile.
  - Word Demo violently scrolled mobile viewports away from reading text on tap.
- **Decision & Solution:**
  1. Re-engineered `DeviceFrame.tsx` into an authentic flagship Android chassis with precise `219/507` aspect ratio, minimal punch-hole camera, chamfered metallic edges, and specular glass gloss. Zero clipping.
  2. Redesigned `Hero.tsx` with responsive floating badges and an interactive 3-screen live switcher ("PDF Reader", "Word Meaning", "Library Shelf").
  3. Upgraded `HowItWorks.tsx` from raw cropped 9:16 boxes to sleek `DeviceFrame` Android phone mockups without dimming gradients.
  4. Built a complete 14-screen interactive showcase in `Screenshots.tsx` featuring filter tabs, a mobile carousel with thumbnail pagination, a responsive grid, and a full-screen Lightbox modal.
  5. Refined `WordDemo.tsx` for mobile viewports by removing disruptive forced scroll jumps, enhancing tap indicators, and ensuring 44px+ touch targets.
  6. Upgraded `Navbar.tsx` with background-scroll lock, backdrop blur overlay, and accessible touch ergonomics.
