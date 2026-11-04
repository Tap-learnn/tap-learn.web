import * as React from "react";
import Image from "next/image";
import { FolderOpen, Touchpad, Trophy, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Open Any PDF Document",
      tagline: "Instant offline rendering",
      description:
        "Select textbooks, clinical notes, study guides, or research papers directly from your device. Tap & Learn opens them immediately without sending files to any server.",
      icon: FolderOpen,
      screenshot: "/screenshots/06_PDF_Library.png",
      bulletPoints: ["Supports multi-page documents", "Remembers your exact reading position", "100% private on your device"],
    },
    {
      number: "02",
      title: "Tap Any Word to Define",
      tagline: "Uninterrupted reading immersion",
      description:
        "Whenever you encounter an unfamiliar term, simply tap it. A smooth bottom sheet surfaces the phonetic IPA, audio pronunciation, and your choice of Academic or Plain English definitions.",
      icon: Touchpad,
      screenshot: "/screenshots/08_Word_Meaning.png",
      bulletPoints: ["Standard & Plain English toggles", "Native on-device audio pronunciation", "Contextual synonyms & example usage"],
    },
    {
      number: "03",
      title: "Save & Review with Recall",
      tagline: "Turn reading into mastery",
      description:
        "Bookmark words to your personal study library. Practice anytime with automated flashcards and multiple-choice quizzes that turn passive reading into active vocabulary mastery.",
      icon: Trophy,
      screenshot: "/screenshots/11_Flashcards.png",
      bulletPoints: ["Spaced active recall flashcards", "Retention practice quizzes", "Reading time and vocabulary analytics"],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Three-Step Workflow"
          badgeVariant="purple"
          title="How Tap & Learn Transforms Your"
          highlight="Reading Experience"
          subtitle="No complex configuration, accounts, or internet connection required. Open your PDF and begin learning immediately."
        />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {steps.map((step, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Step Text Details */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-black tracking-widest uppercase mb-4">
                    Step {step.number}
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm font-bold text-accent-purple uppercase tracking-wider mt-1">
                    {step.tagline}
                  </p>

                  <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {step.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step Image Card Preview */}
                <div
                  className={`lg:col-span-6 flex justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200 group">
                    <Image
                      src={step.screenshot}
                      alt={step.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
