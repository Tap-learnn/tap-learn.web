"use client";

import * as React from "react";
import { X, Bell, CheckCircle2, Sparkles, Smartphone } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "./Button";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = React.useState("");
  const [platform, setPlatform] = React.useState<"android" | "ios" | "both">("android");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button with 44x44px touch target */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-4">
              <Bell className="w-6 h-6" />
            </div>

            <h3 id="waitlist-title" className="text-2xl font-black text-slate-900 tracking-tight">
              Get Notified on Launch
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Tap & Learn is in final pre-release readiness. Be the first to receive the official Google Play download link and early access updates.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="email-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="reader@university.edu"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-brand-600 text-sm transition-all"
                />
                {error && <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>}
              </div>

              <div>
                <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Your Device Platform
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(["android", "ios", "both"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPlatform(item)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all capitalize flex items-center justify-center gap-1.5 ${
                        platform === item
                          ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full py-3.5 font-bold" size="lg">
                  Notify Me When Ready
                </Button>
              </div>

              <p className="text-[11px] text-center text-slate-600">
                🔒 We respect your privacy. No spam, no marketing emails. Only official release notices.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-4 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4 animate-in zoom-in-75 duration-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              You&apos;re on the List!
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thank you for supporting offline reading. We&apos;ll notify <strong className="text-slate-900">{email}</strong> the moment the release build hits Google Play.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-brand-50 border border-brand-100 text-left flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <p className="text-xs text-brand-900 leading-relaxed">
                Meanwhile, you can explore the <strong>Interactive Tap Demo</strong> right on this page below!
              </p>
            </div>

            <Button onClick={handleReset} variant="outline" className="mt-6 w-full">
              Back to Website
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
