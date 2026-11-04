# Tap & Learn — Official Design System Specifications

**Source of Truth:** Extracted from production Android codebase (`com.tapandlearn.core.designsystem.Color.kt`, `Theme.kt`, and `design/screens`).

---

## 1. Color Palette

### Primary Brand Colors
- **Primary Blue (`PrimaryBlue`):** `#2563EB` (Tailwind blue-600) — Primary CTAs, active highlights, key brand accents.
- **Primary Blue Dark (`PrimaryBlueDark`):** `#1D4ED8` (Tailwind blue-700) — Button hover states, deep text emphasis.
- **Primary Blue Light (`PrimaryBlueLight`):** `#3B82F6` (Tailwind blue-500) — Gradients, badges, interactive icon tints.
- **Primary Blue Ultra Light (`PrimaryBlueUltraLight`):** `#EFF6FF` (Tailwind blue-50) — Card tint backgrounds, pill highlights.

### Accent & Feedback Colors
- **Accent Purple (`AccentPurple`):** `#8B5CF6` (Tailwind violet-500) — Secondary brand accent, feature highlights, vocabulary tags.
- **Accent Amber/Orange (`AccentOrange`):** `#F59E0B` (Tailwind amber-500) — Quiz stars, badges, streak indicators.
- **Accent Green (`AccentGreen`):** `#10B981` (Tailwind emerald-500) — Success states, offline-ready indicators, verified badges.
- **Accent Green Light (`AccentGreenLight`):** `#D1FAE5` — Success container backgrounds.
- **Accent Red (`AccentRed`):** `#EF4444` — Warning / close badges.

### Neutrals & Surfaces (Light Theme)
- **Background (`BackgroundLight`):** `#F8FAFC` (Slate-50) — Main page canvas.
- **Surface (`SurfaceLight`):** `#FFFFFF` — Cards, floating modals, navbar.
- **Surface Variant:** `#F1F5F9` (Slate-100) — Inset pills, code blocks, segment controls.
- **Text Primary (`TextPrimary`):** `#0F172A` (Slate-900) — High-contrast headlines and primary copy.
- **Text Secondary (`TextSecondary`):** `#64748B` (Slate-500) — Body descriptions, labels, helper text.
- **Text Muted (`TextMuted`):** `#94A3B8` (Slate-400) — Captions, disabled text, subtle hints.
- **Border Subtle (`BorderSubtle`):** `#E2E8F0` (Slate-200) — Card dividers and borders.

### Gradients
- **Primary Hero Gradient:** `linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)`
- **Brand Accent Gradient:** `linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)`
- **Soft Folder Gradient:** `linear-gradient(180deg, #EFF6FF 0%, #DBEAFE 100%)`
- **Soft Book Gradient:** `linear-gradient(180deg, #FAF5FF 0%, #F3E8FF 100%)`

---

## 2. Typography & Scale
- **Headings Font:** Inter / System UI sans-serif with `font-black` (800/900) and `font-bold` (700) matching mobile app headers.
- **Body Font:** Inter / system-ui, high readability with 1.6 line height.
- **Sizes:**
  - H1 Display: 3rem to 4.5rem (48px - 72px)
  - H2 Section: 2.25rem to 3rem (36px - 48px)
  - H3 Subsection: 1.5rem to 2rem (24px - 32px)
  - Body: 1.125rem (18px) for hero lead, 1rem (16px) standard.

---

## 3. Radii & Elevation
- **Cards:** `rounded-2xl` (16px) or `rounded-3xl` (24px) with subtle border `border border-slate-200/80`.
- **Buttons & Pills:** `rounded-full` (9999px) for primary actions, `rounded-xl` (12px) for segment controls.
- **Shadows:** Soft diffuse shadows (`shadow-sm`, `shadow-md`, `shadow-xl shadow-blue-500/10`) without harsh black drops.
