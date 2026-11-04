import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Heart, Code2 } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-white shadow-md">
                <Image
                  src="/brand/app-icon.webp"
                  alt="Tap & Learn"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Tap & Learn
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              The privacy-first, offline Android PDF reader and contextual vocabulary builder. Tap any word to uncover instant definitions, phonetics, and usage examples.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-800/40 px-3 py-2 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Offline &middot; Zero Cloud Sync &middot; No Account Required</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Open Source */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Legal & Community
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-brand-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-brand-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-brand-400 transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="hover:text-brand-400 transition-colors"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} Tap & Learn. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for readers and English learners worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
