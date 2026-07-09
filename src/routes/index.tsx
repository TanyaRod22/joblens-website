import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/joblens/Navbar";
import { Hero } from "@/components/joblens/Hero";
import { Marquee } from "@/components/joblens/Marquee";
import { HowItWorks } from "@/components/joblens/HowItWorks";
import { Features } from "@/components/joblens/Features";
import { Demo } from "@/components/joblens/Demo";
import { Personalization } from "@/components/joblens/Personalization";
import { Compare } from "@/components/joblens/Compare";
import { Faq } from "@/components/joblens/Faq";
import { FinalCta } from "@/components/joblens/FinalCta";
import { Footer } from "@/components/joblens/Footer";
import { MobileCta } from "@/components/joblens/MobileCta";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <Features />
        <Demo />
        <Personalization />
        <Compare />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
