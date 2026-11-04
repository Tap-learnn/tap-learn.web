import Link from "next/link";
import { ArrowLeft, BookX } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="w-20 h-20 rounded-3xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 mb-6 shadow-sm">
        <BookX className="w-10 h-10" />
      </div>

      <span className="px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
        Error 404
      </span>

      <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
        Page Not Found
      </h1>

      <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
        The page you are looking for doesn&apos;t exist or has moved. Return to the homepage to explore the interactive reader demo.
      </p>

      <div className="mt-8">
        <Link href="/">
          <Button size="lg" className="gap-2 font-bold">
            <ArrowLeft className="w-5 h-5" />
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
