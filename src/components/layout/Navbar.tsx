"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { WaitlistModal } from "@/components/ui/WaitlistModal";

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3 border-b border-slate-200/80 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-xl p-1"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-brand-600/20 group-hover:scale-105 transition-transform bg-white">
                <Image
                  src="/brand/app-icon.webp"
                  alt="Tap & Learn App Icon"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 tracking-tight leading-none group-hover:text-brand-600 transition-colors">
                  Tap & Learn
                </span>
                <span className="text-[11px] font-bold text-brand-600 tracking-wider uppercase mt-1">
                  Offline PDF Reader
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
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
                className="gap-1.5 font-bold shadow-md"
              >
                Get App
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setWaitlistOpen(true)}
                className="text-xs px-3 py-1.5"
              >
                Get App
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-nav border-b border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-3">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-base font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-600 transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200/80 flex flex-col gap-2">
                <a href="#demo" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="secondary" className="w-full justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-600" />
                    Try Interactive Demo
                  </Button>
                </a>
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setWaitlistOpen(true);
                  }}
                >
                  Join Release Waitlist
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </>
  );
}
