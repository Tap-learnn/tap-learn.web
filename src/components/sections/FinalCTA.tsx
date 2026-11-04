"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WaitlistModal } from "@/components/ui/WaitlistModal";

export function FinalCTA() {
  const [waitlistOpen, setWaitlistOpen] = React.useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] bg-gradient-to-br from-brand-600 via-blue-700 to-accent-purple p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden">
            {/* Ambient background circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* 3D App Icon */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 drop-shadow-2xl">
                <Image
                  src="/brand/app_logo_3d.webp"
                  alt="Tap & Learn 3D Logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Pre-Release Candidate &middot; Android & iOS</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Experience Friction-Free Offline Reading?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed font-normal max-w-xl mx-auto">
                Join thousands of students, researchers, and book lovers who are preparing to unlock the full potential of their PDF libraries.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => setWaitlistOpen(true)}
                  className="w-full sm:w-auto bg-white text-brand-700 hover:bg-blue-50 shadow-lg font-black text-base px-8 py-4"
                >
                  <Smartphone className="w-5 h-5 text-brand-600" />
                  Get Launch Notification
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>

                <a href="#demo" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md font-bold text-base px-7 py-4"
                  >
                    <Sparkles className="w-5 h-5" />
                    Play with Interactive Demo
                  </Button>
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-blue-100 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  <span>No Credit Card or Account</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  <span>100% Free Core Offline Lexicon</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  <span>Zero Spam Guaranteed</span>
                </div>
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
