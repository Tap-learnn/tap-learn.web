"use client";

import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AdSlot } from "@/components/ui/AdSlot";
import { adConfig, educationalSponsorsList } from "@/content/ads";

export function SponsoredAds() {
  const featuredSponsor = educationalSponsorsList.find((s) => s.featured) || educationalSponsorsList[0];
  const gridSponsors = educationalSponsorsList.filter((s) => !s.featured).slice(0, 3);

  return (
    <section id="sponsors" className="py-16 sm:py-20 lg:py-24 bg-slate-100/70 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Partners & Ads"
          badgeVariant="amber"
          title="Sponsored Learning Resources &"
          highlight="Educational Partners"
          subtitle="Curated reading companions, language tools, and study aids supporting our open educational mission."
        />

        {/* Primary Leaderboard Ad Banner (Guaranteed Display) */}
        <div className="mt-10">
          <AdSlot
            format="leaderboard"
            adSlot={adConfig.defaultSlotLeaderboard}
            sponsorId={featuredSponsor.id}
          />
        </div>

        {/* 3-Column Native Sponsored Partner Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridSponsors.map((sponsor) => (
            <AdSlot
              key={sponsor.id}
              format="native-card"
              adSlot={adConfig.defaultSlotRectangle}
              sponsorId={sponsor.id}
            />
          ))}
        </div>

        {/* Ethical Ads & Offline Privacy Transparency Banner */}
        <div className="mt-10 max-w-4xl mx-auto rounded-2xl bg-white p-4 sm:p-5 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-slate-900 block sm:inline">Advertising Transparency: </strong>
              <span>{adConfig.ethicalNotice}</span>
            </div>
          </div>
          <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Ad Compliance
          </span>
        </div>
      </div>
    </section>
  );
}
