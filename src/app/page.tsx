import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WordDemo } from "@/components/sections/WordDemo";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Screenshots } from "@/components/sections/Screenshots";
import { SponsoredAds } from "@/components/sections/SponsoredAds";
import { Privacy } from "@/components/sections/Privacy";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WordDemo />
        <Features />
        <HowItWorks />
        <Screenshots />
        <SponsoredAds />
        <Privacy />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
