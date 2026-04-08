import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { AppShowcase } from "@/components/landing/app-showcase";
import { DownloadCTA } from "@/components/landing/download-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <AppShowcase />
      <DownloadCTA />
      <Footer />
    </>
  );
}
