# Tap & Learn — Quality Assurance & Acceptance Checklist

## 1. Product Accuracy & Claims
- [x] All feature statements match the real app build (`com.tapandlearn`).
- [x] Offline/privacy claims accurately reflect zero-cloud-sync architecture.
- [x] Download CTA transparently communicates "Pre-Release Candidate / Coming Soon".
- [x] No invented testimonials, fake ratings, or fabricated user reviews.

## 2. Visual Quality & Brand Parity
- [x] Official app brand assets used (`app_logo_3d.webp`, `home_header_logo.webp`, `app-icon.webp`, `ic_3d_purple_book.webp`).
- [x] Official color palette implemented (`PrimaryBlue: #2563EB`, `AccentPurple: #8B5CF6`, `BackgroundLight: #F8FAFC`).
- [x] Real mobile app screenshots integrated across Hero, Features, How It Works, and Screenshots gallery.
- [x] Responsive design verified across mobile (360px, 390px), tablet (768px), and desktop (1024px, 1440px).
- [x] No clipped popovers or unexpected horizontal overflow.

## 3. Mobile Responsiveness & Ergonomics Audit
- [x] **Hero Section:** Responsive positioning for floating 3D elements and micro-stats (`overflow-x-clip`, zero horizontal wobble at 360px width).
- [x] **Touch Targets:** Word tap buttons increased to comfortable 40px+ touch targets on mobile.
- [x] **Mode Selector Pill:** Adaptive labels (`Standard` / `Plain English` on mobile, expanded text on desktop) to prevent button wrapping on 320px/360px screens.
- [x] **Smooth Scroll on Word Tap:** On mobile viewports, tapping a word smoothly scrolls the definition card into focus.
- [x] **Toast Notifications:** Fixed viewport position with high z-index (`z-50`) to ensure 100% visibility regardless of scroll position.
- [x] **Modal Viewport Constraint:** Waitlist modal equipped with `max-h-[90vh] overflow-y-auto` to prevent off-screen clipping on short screens or landscape phones.
- [x] **Mobile Drawer:** Navigation menu scrollable up to `80vh` on small screens.

## 4. Ads & Sponsored Partners Section ("Must Be Show")
- [x] **Dedicated Section:** `SponsoredAds.tsx` prominently showcased on homepage.
- [x] **Guaranteed Visual Display:** Leaderboard ad banner (`728x90` / responsive `320x100`) and 3-column native sponsored partner cards.
- [x] **AdSense Ready:** `AdSlot.tsx` accepts standard `adClient` and `adSlot` IDs for plug-and-play ad network script injection.
- [x] **Ad Compliance & Disclosures:** FTC / AdSense compliant "Advertisement" and "Sponsored" badges, plus ethical privacy notice explaining that the mobile app remains 100% offline and ad-free.

## 5. Interactive Word Demo
- [x] Displays original English reading passage with interactive target words.
- [x] Tapping a word opens the definition card without page reload.
- [x] Supports Standard Mode (academic) and Plain English Mode (simplified).
- [x] Web Speech API provides real, audible on-device word pronunciation.
- [x] Bookmark toggle allows saving/removing words from local session with toast notifications.
- [x] Keyboard accessible (Tab navigation, Space/Enter to activate).
- [x] 100% local lexicon data; zero external dictionary API dependencies.

## 6. Engineering & Code Quality
- [x] `npm run typecheck` (`tsc --noEmit`) passes with 0 errors.
- [x] `npm run lint` passes with 0 warnings/errors.
- [x] `npm run build` creates optimized production build (8/8 static routes).
- [x] Semantic HTML elements used (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- [x] Full accessibility with WCAG 2.1 AA color contrast and `:focus-visible` rings.
- [x] No secrets or API keys committed.
