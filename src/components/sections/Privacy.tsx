import * as React from "react";
import { ShieldCheck, HardDrive, UserX, Lock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Privacy() {
  const pillars = [
    {
      icon: HardDrive,
      title: "100% On-Device Processing",
      description:
        "Your PDFs, highlights, bookmarks, and vocabulary history are processed entirely on your device. Nothing is streamed, indexed, or uploaded to remote cloud servers.",
    },
    {
      icon: UserX,
      title: "Zero Account Requirement",
      description:
        "No email signup, passwords, or phone numbers. Open the app and start reading immediately without surrendering personal identity details.",
    },
    {
      icon: Lock,
      title: "No Invasive Analytics",
      description:
        "We believe educational reading should be completely private. The offline Android app does not include surveillance SDKs, commercial trackers, or ad-tech scripts.",
    },
    {
      icon: ShieldCheck,
      title: "Local Database Security",
      description:
        "All word lookups query a high-speed SQLite database pre-bundled into the application package, delivering sub-millisecond definitions even in Airplane Mode.",
    },
  ];

  return (
    <section id="privacy" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Guaranteed Offline Privacy"
          badgeVariant="green"
          title="Your Books, Notes, and Words Belong"
          highlight="Exclusively to You"
          subtitle="In an era of mandatory cloud subscriptions and pervasive tracking, Tap & Learn is built with a steadfast commitment to offline local privacy."
          className="text-white [&_h2]:text-white [&_p]:text-slate-400"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/60 rounded-3xl p-6 sm:p-7 border border-slate-700/60 hover:border-brand-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-950/80 border border-brand-800/50 flex items-center justify-center text-brand-400 mb-5 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Note on Website vs App */}
        <div className="mt-12 bg-slate-800/40 rounded-2xl p-4 sm:p-5 border border-slate-700/40 text-xs sm:text-sm text-slate-400 text-center max-w-3xl mx-auto leading-relaxed">
          <p>
            ℹ️ <strong>Transparency Notice:</strong> While this public promotional website loads over standard HTTPS via Vercel to introduce the product, the <strong>Tap & Learn mobile app itself</strong> operates completely disconnected from the internet.
          </p>
        </div>
      </div>
    </section>
  );
}
