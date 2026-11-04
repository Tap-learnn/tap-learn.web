"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, WifiOff, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { WaitlistModal } from "@/components/ui/WaitlistModal";

export function Hero() {
  const [waitlistOpen, setWaitlistOpen] = React.useState(false);

  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-x-clip bg-gradient-to-b from-blue-50/50 via-white to-slate-50">
        {/* Soft background ambient gradient bubbles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] max-w-[95vw] h-[550px] bg-gradient-to-tr from-brand-300/25 via-purple-300/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Headline and Primary Value Proposition */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-bold shadow-sm mb-5 animate-in fade-in duration-300">
                <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-ping" />
                <span>Next-Gen Offline PDF Reader</span>
                <span className="text-brand-300">&bull;</span>
                <span className="text-slate-500 font-semibold">Coming Soon</span>
              </div>

              {/* Master Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Every Word{" "}
                <span className="bg-gradient-to-r from-brand-600 via-blue-600 to-accent-purple bg-clip-text text-transparent">
                  Opens a World.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Read textbooks, research papers, and documents with unwavering confidence. Tap any unfamiliar word to instantly discover its meaning, pronunciation, and examples — with a <strong>100% offline-first</strong> reading experience.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => setWaitlistOpen(true)}
                  className="w-full sm:w-auto font-bold gap-2 text-base px-8 py-3.5 sm:py-4 shadow-xl shadow-brand-600/20"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <a href="#demo" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto font-bold gap-2 text-base px-7 py-3.5 sm:py-4"
                  >
                    <Sparkles className="w-5 h-5 text-brand-600" />
                    Try Interactive Demo
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 font-semibold">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <WifiOff className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>100% Offline Lexicon</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Cloud Tracking</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <FileText className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Any Standard PDF</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Smartphone Mockup with Real Mobile App Screenshot */}
            <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0">
              <div className="relative w-full max-w-[300px] sm:max-w-[360px]">
                {/* 3D Floating Book Accent Badge */}
                <div className="absolute top-1 left-1 sm:-top-6 sm:-left-6 z-20 w-14 h-14 sm:w-20 sm:h-20 drop-shadow-xl animate-bounce hover:scale-110 transition-transform">
                  <Image
                    src="/brand/ic_3d_purple_book.webp"
                    alt="3D Book Icon"
                    width={80}
                    height={80}
                    priority
                  />
                </div>

                {/* Floating Micro-Stat Card */}
                <div className="absolute bottom-2 right-2 sm:-bottom-6 sm:-right-6 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-2.5 sm:gap-3 scale-95 sm:scale-100 origin-bottom-right">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Privacy Guaranteed</div>
                    <div className="text-xs sm:text-sm font-black text-slate-900">Zero Cloud Upload</div>
                  </div>
                </div>

                {/* Smartphone Device Frame displaying authentic PDF Reader Screen */}
                <DeviceFrame
                  imageSrc="/screenshots/07_PDF_Reader.png"
                  imageAlt="Tap & Learn Real PDF Reader Screen"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </>
  );
}
