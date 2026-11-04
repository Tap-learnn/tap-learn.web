"use client";

import * as React from "react";
import {
  ExternalLink,
  Sparkles,
  BookOpen,
  GraduationCap,
  Award,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { adConfig, educationalSponsorsList, type EducationalSponsor } from "@/content/ads";

export type AdFormat = "leaderboard" | "rectangle" | "native-card" | "mobile-banner" | "in-stream";

interface AdSlotProps {
  format?: AdFormat;
  adClient?: string;
  adSlot?: string;
  sponsorId?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  sponsorName?: string;
  className?: string;
}

export function AdSlot({
  format = "leaderboard",
  adClient = adConfig.adsenseClientId,
  adSlot,
  sponsorId,
  title,
  description,
  ctaText,
  ctaUrl,
  sponsorName,
  className,
}: AdSlotProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [adBlocked, setAdBlocked] = React.useState(false);
  const [adLoaded, setAdLoaded] = React.useState(false);

  // Match custom sponsor or fallback
  const matchedSponsor: EducationalSponsor = React.useMemo(() => {
    if (sponsorId) {
      const found = educationalSponsorsList.find((s) => s.id === sponsorId);
      if (found) return found;
    }
    return educationalSponsorsList[0];
  }, [sponsorId]);

  const activeTitle = title || matchedSponsor.headline;
  const activeDesc = description || matchedSponsor.description;
  const activeCtaText = ctaText || matchedSponsor.ctaText;
  const activeCtaUrl = ctaUrl || matchedSponsor.ctaUrl;
  const activeSponsorName = sponsorName || matchedSponsor.name;

  // IntersectionObserver for lazy loading
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize AdSense push if live network is configured
  const hasLiveAdSense = Boolean(adClient && adSlot && !adBlocked);

  React.useEffect(() => {
    if (hasLiveAdSense && isVisible) {
      try {
        if (typeof window !== "undefined") {
          // @ts-expect-error window.adsbygoogle global
          const adsbygoogle = window.adsbygoogle || [];
          adsbygoogle.push({});
          setAdLoaded(true);
        }
      } catch {
        setAdBlocked(true);
      }
    }
  }, [hasLiveAdSense, isVisible]);

  // Height reservation to guarantee CLS = 0.0
  const minHeightClass = {
    leaderboard: "min-h-[110px] sm:min-h-[120px]",
    "in-stream": "min-h-[100px] sm:min-h-[110px]",
    rectangle: "min-h-[260px]",
    "native-card": "min-h-[220px]",
    "mobile-banner": "min-h-[70px]",
  }[format];

  return (
    <div
      ref={containerRef}
      className={cn("w-full transition-all duration-200", minHeightClass, className)}
    >
      {/* Live AdSense Rendering */}
      {hasLiveAdSense && !adBlocked ? (
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1.5 px-1">
            <span>Advertisement</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              Verified Ad
            </span>
          </div>
          <div className="w-full flex justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 min-h-[90px]">
            <ins
              className="adsbygoogle"
              style={{ display: "block", textAlign: "center", width: "100%" }}
              data-ad-client={adClient}
              data-ad-slot={adSlot}
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      ) : null}

      {/* Guaranteed High-Quality Partner / Fallback Rendering */}
      {(!hasLiveAdSense || adBlocked || !adLoaded) && (
        <>
          {format === "leaderboard" && (
            <div className="w-full">
              <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1.5 px-1">
                <span>Advertisement &middot; Sponsored Educational Partner</span>
                <span className="text-slate-400 hidden sm:inline">Certified Study Resource</span>
              </div>

              <div className="relative w-full rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-4 sm:p-6 shadow-md border border-slate-700/60 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3.5 sm:gap-4 text-center md:text-left">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-brand-300 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 mb-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{activeSponsorName}</span>
                    </div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white tracking-tight">
                      {activeTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl line-clamp-2 md:line-clamp-none mt-0.5 font-normal">
                      {activeDesc}
                    </p>
                  </div>
                </div>

                <a
                  href={activeCtaUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                >
                  <span>{activeCtaText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {format === "in-stream" && (
            <div className="w-full">
              <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1.5 px-1">
                <span>Featured Study Companion &middot; Sponsored</span>
                <span className="text-slate-400">Ad</span>
              </div>

              <div className="relative w-full rounded-2xl bg-white border border-brand-200/80 p-4 sm:p-5 shadow-sm hover:shadow-card transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0 font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-brand-600 tracking-wide uppercase">
                      {activeSponsorName}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {activeTitle}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {activeDesc}
                    </p>
                  </div>
                </div>

                <a
                  href={activeCtaUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                >
                  <span>{activeCtaText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {format === "native-card" && (
            <div className="group rounded-3xl bg-white border border-slate-200/90 hover:border-brand-300 shadow-sm hover:shadow-card transition-all p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden h-full">
              <div>
                <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
                    {matchedSponsor.badge || "Sponsored"}
                  </span>
                  <span className="text-slate-400">{activeSponsorName}</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-3 border border-brand-100">
                  <BookOpen className="w-5 h-5" />
                </div>

                <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                  {activeTitle}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {activeDesc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={activeCtaUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-xs font-bold text-brand-600 group-hover:underline flex items-center gap-1"
                >
                  <span>{activeCtaText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] text-slate-400 font-medium">Ad</span>
              </div>
            </div>
          )}

          {format === "mobile-banner" && (
            <div className="w-full my-3 rounded-xl bg-slate-900 text-white p-3 border border-slate-800 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="truncate">
                  <p className="text-xs font-bold text-white truncate">
                    {activeTitle}
                  </p>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    Sponsored &middot; {activeSponsorName}
                  </span>
                </div>
              </div>
              <a
                href={activeCtaUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="shrink-0 px-3 py-1.5 rounded-lg bg-brand-600 text-white text-xs font-bold hover:bg-brand-500 transition-colors"
              >
                {activeCtaText}
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
}
