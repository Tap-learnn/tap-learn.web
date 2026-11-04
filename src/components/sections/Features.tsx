import * as React from "react";
import {
  BookOpen,
  Sparkles,
  Layers,
  Volume2,
  Bookmark,
  BrainCircuit,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { featuresList, type Feature } from "@/content/features";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  BookOpen,
  Sparkles,
  Layers,
  Volume2,
  Bookmark,
  BrainCircuit,
  BarChart3,
  ShieldCheck,
};

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Capabilities"
          badgeVariant="brand"
          title="Engineered for Serious Readers &"
          highlight="Language Learners"
          subtitle="Every feature is designed to keep you immersed in your reading material while effortlessly expanding your English vocabulary."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuresList.map((feature: Feature) => {
            const IconComponent = iconMap[feature.iconName] || Sparkles;

            return (
              <div
                key={feature.id}
                className="group relative bg-slate-50/80 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-brand-200 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-brand-50 border border-slate-200 group-hover:border-brand-200 flex items-center justify-center text-brand-600 transition-colors shadow-sm">
                      <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    {feature.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-slate-600 border border-slate-200 group-hover:border-brand-100 group-hover:text-brand-700 transition-colors">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide mt-1">
                    {feature.tagline}
                  </p>

                  {/* Feature Description */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore in app</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
