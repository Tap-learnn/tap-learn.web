import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official privacy policy for the Tap & Learn mobile application and promotional website. We believe reading should be 100% private and offline-first.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 text-slate-600">
                <ArrowLeft className="w-4 h-4" />
                Back to Homepage
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200 mb-4">
              <ShieldCheck className="w-4 h-4" />
              100% Offline Commitment
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-slate-500 font-semibold">
              Last updated: November 2026 &middot; Version 1.0 (US & Global Edition)
            </p>

            <div className="mt-8 prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  1. Our Core Principle: Offline-First and Zero Data Collection
                </h2>
                <p>
                  At <strong>Tap & Learn</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the app&rdquo;), we believe that your reading materials, research notes, and vocabulary learning should remain private to you.
                </p>
                <p>
                  The Tap & Learn mobile application operates <strong>100% offline</strong>. We do not require you to create an account, register with an email address, or log in.
                </p>
              </section>

              <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <Lock className="w-5 h-5 text-brand-600" />
                  What Happens to Your PDF Documents
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Your PDF files are opened directly from your device storage using Android&apos;s native Storage Access Framework.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Your documents are never transmitted, uploaded, scanned, or mirrored to external servers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>All text rendering and dictionary lookups occur strictly in local on-device memory.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  2. Local Data Storage on Device
                </h2>
                <p>
                  Any information generated during your reading sessions — including bookmarked words, flashcard review intervals, quiz scores, and reading statistics — is stored locally in an on-device SQLite / Room database. You retain full control to clear this data or delete individual records at any time directly through the in-app settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  3. Promotional Website vs. Mobile Application
                </h2>
                <p>
                  This website (<code>tapandlearn.app</code>) is a public informational and promotional site hosted on Vercel. Standard web server access logs (such as IP address, browser user-agent, and requested page URLs) may be generated temporarily by the hosting infrastructure to deliver web pages and defend against malicious attacks.
                </p>
                <p>
                  If you voluntarily submit your email address to our launch notification waitlist, your email is used solely to notify you when the application is officially available for download. We do not sell, rent, or share notification emails with third-party advertisers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  4. Third-Party Services and Advertising
                </h2>
                <p>
                  The Tap & Learn core mobile reader does not incorporate third-party ad networks, tracking pixels, or user behavior surveillance SDKs.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  5. Contacting Us
                </h2>
                <p>
                  If you have questions, feedback, or concerns regarding our privacy practices, please contact us at:
                </p>
                <p className="font-semibold text-brand-600">
                  <a href="mailto:support@tapandlearn.app">support@tapandlearn.app</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
