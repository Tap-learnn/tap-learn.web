"use client";

import * as React from "react";
import { ExternalLink, Sparkles, BookOpen, GraduationCap, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export type AdFormat = "leaderboard" | "rectangle" | "native-card" | "mobile-banner";

interface AdSlotProps {
  format?: AdFormat;
  adClient?: string;
  adSlot?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  sponsorName?: string;
  className?: string;
}

export function AdSlot({
  format = "leaderboard",
  adClient,
  adSlot,
  title,
  description,
  ctaText = "Learn More",
  ctaUrl = "#",
  sponsorName = "Featured Educational Partner",
  className,
}: AdSlotProps) {
  // If actual AdSense credentials are provided, we can render the official ad container
  const hasLiveAdSense = Boolean(adClient && adSlot);

  if (hasLiveAdSense) {
    return (
      <div className={cn("my-6 w-full flex flex-col items-center", className)}>
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">
          Advertisement
        </span>
        <div className="w-full flex justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2">
          {/* External Ad Container */}
          <ins
            className="adsbygoogle"
            style={{ display: "block", textAlign: "center" }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    );
  }

  // Guaranteed Visible Ads (Leaderboard / Mobile Banner)
  if (format === "leaderboard") {
    return (
      <div className={cn("w-full my-6", className)}>
        <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1.5 px-1">
          <span>Advertisement &middot; Sponsored Partner</span>
          <span className="text-slate-400">Verified Sponsor</span>
        </div>

        <div className="relative w-full rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-4 sm:p-6 shadow-md border border-slate-700/60 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-brand-300 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 mb-0.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{sponsorName}</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {title || "Master 1,000+ GRE & SAT Essential Academic Words"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl line-clamp-2 md:line-clamp-none mt-0.5">
                {description || "Explore curated study guides, phonetic flashcards, and exam practice passages crafted for high-performance test takers."}
              </p>
            </div>
          </div>

          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            <span>{ctaText}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  // Native Card Format
  if (format === "native-card") {
    return (
      <div className={cn("group rounded-3xl bg-white border border-slate-200/90 hover:border-brand-300 shadow-sm hover:shadow-card transition-all p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden", className)}>
        <div>
          <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-3">
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
              Sponsored
            </span>
            <span className="text-slate-400">{sponsorName}</span>
          </div>

          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-3 border border-brand-100">
            <BookOpen className="w-5 h-5" />
          </div>

          <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
            {title || "Academic Reading Companion"}
          </h4>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {description || "Expand your comprehension with expert vocabulary decks and curated bilingual reading annotations."}
          </p>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-brand-600 group-hover:underline flex items-center gap-1">
            {ctaText} <ExternalLink className="w-3.5 h-3.5" />
          </span>
          <span className="text-[10px] text-slate-400 font-medium">Ad</span>
        </div>
      </div>
    );
  }

  // Mobile Banner Format
  return (
    <div className={cn("w-full my-4 rounded-xl bg-slate-900 text-white p-3.5 border border-slate-800 flex items-center justify-between gap-3 shadow-sm", className)}>
      <div className="flex items-center gap-2.5 overflow-hidden">
        <Award className="w-5 h-5 text-amber-400 shrink-0" />
        <div className="truncate">
          <p className="text-xs font-bold text-white truncate">
            {title || "College English & GRE Vocab Bootcamp"}
          </p>
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
            Sponsored &middot; {sponsorName}
          </span>
        </div>
      </div>
      <a
        href={ctaUrl}
        className="shrink-0 px-3 py-1.5 rounded-lg bg-brand-600 text-white text-xs font-bold hover:bg-brand-500 transition-colors"
      >
        {ctaText}
      </a>
    </div>
  );
}
