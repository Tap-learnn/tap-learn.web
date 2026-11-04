"use client";

import * as React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ScreenshotItem {
  id: string;
  title: string;
  category: "reader" | "vocabulary" | "library";
  filename: string;
  description: string;
}

const screenshotsList: ScreenshotItem[] = [
  {
    id: "home",
    title: "Home Dashboard",
    category: "library",
    filename: "/screenshots/05_Home_Screen.png",
    description: "Instant access to your recently read books, statistics, and quick actions.",
  },
  {
    id: "reader",
    title: "PDF Reader",
    category: "reader",
    filename: "/screenshots/07_PDF_Reader.png",
    description: "Distraction-free document rendering with smooth zooming and page indicators.",
  },
  {
    id: "word-meaning",
    title: "Word Meaning Sheet",
    category: "reader",
    filename: "/screenshots/08_Word_Meaning.png",
    description: "Detailed bottom sheet with pronunciations, dual definition modes, and examples.",
  },
  {
    id: "library",
    title: "Document Library",
    category: "library",
    filename: "/screenshots/06_PDF_Library.png",
    description: "Clean shelf of imported PDF documents with reading progress bars.",
  },
  {
    id: "saved-words",
    title: "Saved Word Repository",
    category: "vocabulary",
    filename: "/screenshots/10_Saved_Words.png",
    description: "Review all bookmarked vocabulary organized with source book markers.",
  },
  {
    id: "flashcards",
    title: "Flashcard Revision",
    category: "vocabulary",
    filename: "/screenshots/11_Flashcards.png",
    description: "Tap to reveal definitions and test your recall with simple review ratings.",
  },
  {
    id: "quiz",
    title: "Practice Quizzes",
    category: "vocabulary",
    filename: "/screenshots/12_Quiz.png",
    description: "Multiple-choice questions generated from your personal saved word bank.",
  },
  {
    id: "stats",
    title: "Reading Statistics",
    category: "library",
    filename: "/screenshots/13_Reading_Statistics.png",
    description: "Visualize reading streaks, time spent, and total words mastered.",
  },
];

export function Screenshots() {
  const [filter, setFilter] = React.useState<"all" | "reader" | "vocabulary" | "library">("all");

  const filteredScreenshots =
    filter === "all"
      ? screenshotsList
      : screenshotsList.filter((s) => s.category === filter);

  return (
    <section id="screenshots" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Authentic App Interface"
          badgeVariant="brand"
          title="Designed for Android Material 3 with"
          highlight="Pure Simplicity"
          subtitle="Explore actual in-app screenshots of the Tap & Learn interface — from clean PDF navigation to rich interactive vocabulary sheets."
        />

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { label: "All Screens", value: "all" },
            { label: "Reading & Lookup", value: "reader" },
            { label: "Vocabulary & Practice", value: "vocabulary" },
            { label: "Library & Analytics", value: "library" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 ${
                filter === tab.value
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Screenshots Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredScreenshots.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50 rounded-3xl p-4 border border-slate-200 hover:border-brand-200 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Smartphone Frame Container */}
              <div className="relative w-full aspect-[9/19] rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                <Image
                  src={item.filename}
                  alt={item.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 px-1">
                <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
