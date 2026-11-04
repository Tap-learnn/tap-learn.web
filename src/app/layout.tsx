import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { AdSenseScript } from "@/components/ui/AdSenseScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tap & Learn — Offline PDF Reader & Contextual Vocabulary Builder",
    template: "%s | Tap & Learn",
  },
  description: siteConfig.description,
  keywords: [
    "PDF reader",
    "offline dictionary",
    "English vocabulary builder",
    "tap to define",
    "plain English meaning",
    "offline reading",
    "student study app",
    "vocabulary flashcards",
    "Android PDF reader",
  ],
  authors: [{ name: "Tap & Learn Team" }],
  creator: "Tap & Learn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Tap & Learn — Every Word Opens a World",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/brand/home_hero_banner.webp",
        width: 1200,
        height: 630,
        alt: "Tap & Learn Offline PDF Reader and Vocabulary Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tap & Learn — Every Word Opens a World",
    description: siteConfig.description,
    images: ["/brand/home_hero_banner.webp"],
  },
  icons: {
    icon: "/brand/app-icon.webp",
    apple: "/brand/app-icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <AdSenseScript />
      </head>
      <body className="font-sans text-slate-900 bg-slate-50 antialiased selection:bg-brand-100 selection:text-brand-900">
        {children}
      </body>
    </html>
  );
}
