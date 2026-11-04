export const siteConfig = {
  name: "Tap & Learn",
  tagline: "Every Word Opens a World",
  description:
    "Read PDFs with confidence. Tap any unfamiliar word to discover its meaning, pronunciation, and examples — with a 100% offline-first reading experience.",
  url: "https://tapandlearn.app",
  ogImage: "/og-image.png",
  downloadUrl: process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL || "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@tapandlearn.app",
  navItems: [
    { label: "Features", href: "#features" },
    { label: "Interactive Demo", href: "#demo" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Privacy & Offline", href: "#privacy" },
    { label: "FAQ", href: "#faq" },
  ],
  links: {
    github: "https://github.com/avinashpandit1122/tap-search",
    privacy: "/privacy",
    terms: "/terms",
  },
  platforms: [
    { name: "Android", status: "Coming Soon (Google Play)" },
    { name: "iOS", status: "In Development (App Store)" },
  ],
};
