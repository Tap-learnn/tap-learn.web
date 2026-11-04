"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  Smartphone,
  Layers,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { WaitlistModal } from "@/components/ui/WaitlistModal";

const navIcons: Record<string, React.ElementType> = {
  "#features": Layers,
  "#demo": Sparkles,
  "#how-it-works": BookOpen,
  "#screenshots": Smartphone,
  "#privacy": ShieldCheck,
  "#faq": HelpCircle,
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [waitlistOpen, setWaitlistOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-2.5 sm:py-3 border-b border-slate-200/80 shadow-sm"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-xl p-1"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-md shadow-brand-600/20 group-hover:scale-105 transition-transform bg-white shrink-0">
                <Image
                  src="/brand/app-icon.webp"
                  alt="Tap & Learn App Icon"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none group-hover:text-brand-600 transition-colors">
                  Tap & Learn
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-brand-600 tracking-wider uppercase mt-1">
                  Offline PDF Reader
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-md py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#demo">
                <Button variant="ghost" size="sm" className="font-bold gap-1.5 text-brand-700">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  Try Live Demo
                </Button>
              </a>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setWaitlistOpen(true)}
                className="gap-1.5 font-bold shadow-md min-h-[40px]"
              >
                Get App
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Actions: Fast CTA + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setWaitlistOpen(true)}
                className="text-xs px-3 py-1.5 font-bold min-h-[36px]"
              >
                Get App
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Backdrop & Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[65px] z-50 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white border-b border-slate-200 px-5 pt-4 pb-8 shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto">
              <nav className="flex flex-col space-y-1">
                {siteConfig.navItems.map((item) => {
                  const Icon = navIcons[item.href] || Sparkles;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3.5 py-3 rounded-2xl text-base font-bold text-slate-800 hover:bg-brand-50 hover:text-brand-600 transition-all flex items-center gap-3 min-h-[48px]"
                    >
                      <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-brand-600" />
                      </div>
                      <span>{item.label}</span>
                    </a>
                  );
                })}

                <div className="pt-4 border-t border-slate-200/80 flex flex-col gap-2.5 mt-2">
                  <a href="#demo" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="secondary" className="w-full justify-center gap-2 font-bold py-3.5 min-h-[48px]">
                      <Sparkles className="w-4 h-4 text-brand-600" />
                      Try Interactive Demo
                    </Button>
                  </a>
                  <Button
                    variant="primary"
                    className="w-full justify-center font-bold py-3.5 min-h-[48px]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setWaitlistOpen(true);
                    }}
                  >
                    Join Early Access
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>

                <div className="pt-4 mt-2 text-center text-xs text-slate-500 font-medium">
                  Material 3 Android App &bull; 100% Offline
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </>
  );
}
