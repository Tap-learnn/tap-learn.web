import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the Tap & Learn website and mobile application.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 text-slate-600">
                <ArrowLeft className="w-4 h-4" />
                Back to Homepage
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200 mb-4">
              <FileText className="w-4 h-4" />
              Terms of Service
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="mt-2 text-xs text-slate-500 font-semibold">
              Last updated: November 2026
            </p>

            <div className="mt-8 prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using the Tap & Learn promotional website and mobile software, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the application or website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  2. Use License and Intellectual Property
                </h2>
                <p>
                  Tap & Learn grants you a personal, revocable, non-exclusive, non-transferable license to use the application for your educational and reading purposes. All brand graphics, 3D assets, logos, and UI designs are the intellectual property of Tap & Learn.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  3. User Content & Documents
                </h2>
                <p>
                  You retain complete and sole ownership over all PDF documents, textbooks, and personal study notes opened within the application. You are solely responsible for ensuring you have lawful authorization to read and store your imported files.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  4. Disclaimer of Warranties
                </h2>
                <p>
                  The website and software are provided &ldquo;as is&rdquo; without warranty of any kind. While our bundled offline English lexicon strives for high linguistic accuracy and beginner accessibility, definitions and examples are provided for educational assistance and should not be relied upon as legal, medical, or definitive technical advice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  5. Contact
                </h2>
                <p>
                  For any legal inquiries regarding these terms, please contact <a href="mailto:support@tapandlearn.app" className="font-semibold text-brand-600">support@tapandlearn.app</a>.
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
