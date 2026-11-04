"use client";

import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DeviceFrame } from "@/components/ui/DeviceFrame";

export interface ScreenshotItem {
  id: string;
  title: string;
  category: "reader" | "vocabulary" | "library" | "setup";
  filename: string;
  badge: string;
  description: string;
  featureNote: string;
}

export const allScreenshots: ScreenshotItem[] = [
  {
    id: "splash",
    title: "Brand Splash Screen",
    category: "setup",
    filename: "/screenshots/01_Splash_Screen.png",
    badge: "Launch",
    description: "Instant cold-start initialization with local dictionary indexing and zero cloud latency.",
    featureNote: "Loads in <300ms offline",
  },
  {
    id: "onboarding-1",
    title: "Reader Onboarding",
    category: "setup",
    filename: "/screenshots/02_Onboarding_1.png",
    badge: "Welcome",
    description: "Overview of offline PDF reading capabilities and distraction-free document rendering.",
    featureNote: "Simple 3-step setup",
  },
  {
    id: "onboarding-2",
    title: "Tap-to-Define Guide",
    category: "setup",
    filename: "/screenshots/03_Onboarding_2.png",
    badge: "Core Mechanic",
    description: "Visual walkthrough demonstrating how tapping any highlighted word surfaces definitions.",
    featureNote: "Zero app switching",
  },
  {
    id: "onboarding-3",
    title: "Active Practice Guide",
    category: "setup",
    filename: "/screenshots/04_Onboarding_3.png",
    badge: "Learning",
    description: "Guidance on how bookmarked words turn into automated flashcards and retention quizzes.",
    featureNote: "Spaced active recall",
  },
  {
    id: "home",
    title: "Home Dashboard",
    category: "library",
    filename: "/screenshots/05_Home_Screen.png",
    badge: "Dashboard",
    description: "Quick access to your recent reading documents, daily streaks, and learning statistics.",
    featureNote: "Resumes last read page",
  },
  {
    id: "library",
    title: "Document Library",
    category: "library",
    filename: "/screenshots/06_PDF_Library.png",
    badge: "Shelf",
    description: "Clean shelf view of all imported PDF books, research papers, and lecture slides.",
    featureNote: "Sort by recency or title",
  },
  {
    id: "reader",
    title: "Distraction-Free PDF Reader",
    category: "reader",
    filename: "/screenshots/07_PDF_Reader.png",
    badge: "Reading View",
    description: "Fluid document rendering with rapid page jumping, smooth pinch-to-zoom, and word highlighting.",
    featureNote: "Sub-pixel vector rendering",
  },
  {
    id: "word-meaning",
    title: "Word Meaning Sheet",
    category: "reader",
    filename: "/screenshots/08_Word_Meaning.png",
    badge: "Lookup Sheet",
    description: "Material 3 modal bottom sheet showing phonetic IPA, TTS audio pronunciation, and definitions.",
    featureNote: "Standard & Plain English",
  },
  {
    id: "dictionary-search",
    title: "Offline Dictionary Search",
    category: "reader",
    filename: "/screenshots/09_Dictionary_Search.png",
    badge: "Lexicon",
    description: "Direct full-text search across 50,000+ local vocabulary terms and definitions without internet.",
    featureNote: "Instant keystroke filtering",
  },
  {
    id: "saved-words",
    title: "Saved Word Repository",
    category: "vocabulary",
    filename: "/screenshots/10_Saved_Words.png",
    badge: "Word Vault",
    description: "Personalized vocabulary bank categorized by origin book, mastery level, and saved date.",
    featureNote: "One-tap bookmarking",
  },
  {
    id: "flashcards",
    title: "Spaced Flashcards",
    category: "vocabulary",
    filename: "/screenshots/11_Flashcards.png",
    badge: "Revision",
    description: "Flip-card revision cards with self-rated difficulty for spaced repetition study sessions.",
    featureNote: "Active recall algorithm",
  },
  {
    id: "quiz",
    title: "Practice Quizzes",
    category: "vocabulary",
    filename: "/screenshots/12_Quiz.png",
    badge: "Assessment",
    description: "Interactive multiple-choice vocabulary assessments generated automatically from your saved words.",
    featureNote: "Instant score feedback",
  },
  {
    id: "stats",
    title: "Reading & Vocabulary Stats",
    category: "library",
    filename: "/screenshots/13_Reading_Statistics.png",
    badge: "Analytics",
    description: "Visual streak tracking, total reading minutes, and vocabulary expansion milestone charts.",
    featureNote: "100% private on device",
  },
  {
    id: "settings",
    title: "App Settings & Controls",
    category: "setup",
    filename: "/screenshots/14_Settings.png",
    badge: "Settings",
    description: "Customization controls for reader themes, default dictionary modes, and local storage management.",
    featureNote: "Zero cloud dependencies",
  },
];

export function Screenshots() {
  const [filter, setFilter] = React.useState<"all" | "reader" | "vocabulary" | "library" | "setup">("all");
  const [carouselIndex, setCarouselIndex] = React.useState<number>(0);
  const [lightboxItem, setLightboxItem] = React.useState<ScreenshotItem | null>(null);
  const [viewMode, setViewMode] = React.useState<"carousel" | "grid">("carousel");

  const filteredScreenshots =
    filter === "all"
      ? allScreenshots
      : allScreenshots.filter((s) => s.category === filter);

  // Reset carousel index when filter changes
  React.useEffect(() => {
    setCarouselIndex(0);
  }, [filter]);

  // Handle keyboard events for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxItem) return;

      if (e.key === "Escape") {
        setLightboxItem(null);
      } else if (e.key === "ArrowRight") {
        const currentIdx = filteredScreenshots.findIndex((s) => s.id === lightboxItem.id);
        const nextIdx = (currentIdx + 1) % filteredScreenshots.length;
        setLightboxItem(filteredScreenshots[nextIdx]);
      } else if (e.key === "ArrowLeft") {
        const currentIdx = filteredScreenshots.findIndex((s) => s.id === lightboxItem.id);
        const prevIdx = (currentIdx - 1 + filteredScreenshots.length) % filteredScreenshots.length;
        setLightboxItem(filteredScreenshots[prevIdx]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxItem, filteredScreenshots]);

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % filteredScreenshots.length);
  };

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + filteredScreenshots.length) % filteredScreenshots.length);
  };

  return (
    <section id="screenshots" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Authentic App Interface"
          badgeVariant="brand"
          title="Designed for Android Material 3 with"
          highlight="Pure Simplicity"
          subtitle="Explore all 14 authentic mobile screens from the Tap & Learn Android app — captured directly from production builds with zero mockup fakery."
        />

        {/* Filter Navigation Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {[
            { label: "All Screens (14)", value: "all" },
            { label: "Reading & Lookup (3)", value: "reader" },
            { label: "Vocabulary & Practice (3)", value: "vocabulary" },
            { label: "Library & Analytics (3)", value: "library" },
            { label: "Setup & Settings (5)", value: "setup" },
          ].map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setFilter(tab.value as any)}
              className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 min-h-[40px] flex items-center justify-center ${
                filter === tab.value
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/25 scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* View Switcher Controls (Mobile/Desktop friendly) */}
        <div className="mt-6 flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="text-xs sm:text-sm font-semibold text-slate-500">
            Showing <span className="font-bold text-slate-900">{filteredScreenshots.length}</span> authentic screens
          </div>

          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              type="button"
              onClick={() => setViewMode("carousel")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === "carousel"
                  ? "bg-white text-brand-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Showcase</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === "grid"
                  ? "bg-white text-brand-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Grid</span>
            </button>
          </div>
        </div>

        {/* ===================== VIEW MODE 1: SHOWCASE CAROUSEL ===================== */}
        {viewMode === "carousel" && (
          <div className="mt-8 relative">
            {/* Carousel Main Stage */}
            <div className="max-w-4xl mx-auto bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center">
                {/* Phone Mockup Screen */}
                <div className="md:col-span-6 flex justify-center">
                  <div
                    onClick={() => setLightboxItem(filteredScreenshots[carouselIndex])}
                    className="cursor-pointer group relative transition-transform hover:scale-[1.02]"
                    title="Click to expand high-resolution screen"
                  >
                    <DeviceFrame
                      imageSrc={filteredScreenshots[carouselIndex].filename}
                      imageAlt={filteredScreenshots[carouselIndex].title}
                      size="sm"
                    />
                    <div className="absolute inset-0 bg-brand-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-[38px] flex items-center justify-center pointer-events-none">
                      <div className="bg-white/95 text-slate-900 px-3 py-1.5 rounded-full shadow-lg text-xs font-bold flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-brand-600" />
                        <span>Tap to Zoom</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen Meta & Details */}
                <div className="md:col-span-6 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold mb-3">
                    <span>{filteredScreenshots[carouselIndex].badge}</span>
                    <span className="text-brand-300">&bull;</span>
                    <span className="capitalize">{filteredScreenshots[carouselIndex].category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {filteredScreenshots[carouselIndex].title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {filteredScreenshots[carouselIndex].description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{filteredScreenshots[carouselIndex].featureNote}</span>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
                    <button
                      type="button"
                      onClick={handlePrevCarousel}
                      aria-label="Previous screen"
                      className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-brand-600 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <span className="text-xs font-bold text-slate-500 font-mono px-2">
                      {carouselIndex + 1} / {filteredScreenshots.length}
                    </span>

                    <button
                      type="button"
                      onClick={handleNextCarousel}
                      aria-label="Next screen"
                      className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-brand-600 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setLightboxItem(filteredScreenshots[carouselIndex])}
                      className="ml-auto hidden sm:flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 hover:underline"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Full screen view</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="mt-6 flex items-center justify-center gap-2 overflow-x-auto py-2 px-4 no-scrollbar">
              {filteredScreenshots.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCarouselIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 ${
                    carouselIndex === idx
                      ? "bg-brand-600 w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to ${item.title}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* ===================== VIEW MODE 2: RESPONSIVE GRID ===================== */}
        {viewMode === "grid" && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredScreenshots.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group cursor-pointer bg-slate-50/90 hover:bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 hover:border-brand-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Embedded Phone Mockup */}
                <div className="relative w-full flex justify-center py-2">
                  <DeviceFrame
                    imageSrc={item.filename}
                    imageAlt={item.title}
                    size="sm"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-1.5 rounded-full text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <Maximize2 className="w-4 h-4 text-brand-600" />
                  </div>
                </div>

                {/* Caption Details */}
                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600">
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400">
                      Material 3
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ===================== LIGHTBOX FULL-SCREEN MODAL ===================== */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl border border-slate-800 p-4 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Smartphone High-Res Showcase */}
            <div className="flex justify-center shrink-0 w-full md:w-auto">
              <DeviceFrame
                imageSrc={lightboxItem.filename}
                imageAlt={lightboxItem.title}
                size="md"
                priority
              />
            </div>

            {/* Screen Annotation Context */}
            <div className="text-white flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-bold mb-3">
                <span>{lightboxItem.badge}</span>
                <span>&bull;</span>
                <span className="capitalize">{lightboxItem.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {lightboxItem.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {lightboxItem.description}
              </p>

              <div className="mt-5 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-300 space-y-1.5">
                <div className="text-brand-400 font-bold uppercase text-[11px] tracking-wider">
                  Mobile Feature Highlights
                </div>
                <div>&bull; {lightboxItem.featureNote}</div>
                <div>&bull; Authentic production Android screenshot</div>
                <div>&bull; Runs completely on-device without cloud connectivity</div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const currentIdx = filteredScreenshots.findIndex((s) => s.id === lightboxItem.id);
                    const prevIdx = (currentIdx - 1 + filteredScreenshots.length) % filteredScreenshots.length;
                    setLightboxItem(filteredScreenshots[prevIdx]);
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const currentIdx = filteredScreenshots.findIndex((s) => s.id === lightboxItem.id);
                    const nextIdx = (currentIdx + 1) % filteredScreenshots.length;
                    setLightboxItem(filteredScreenshots[nextIdx]);
                  }}
                  className="px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-500 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Next Screen</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
