import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeatureCards } from "@/components/home/feature-cards"
import { BrandBanner } from "@/components/home/brand-banner"
import { IndustryTicker } from "@/components/home/industry-ticker"
import { CallbackForm } from "@/components/home/callback-form"
import { IndustryGrid } from "@/components/home/industry-grid"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <FeatureCards />
        <BrandBanner />
        <IndustryTicker />
        <CallbackForm />
        <IndustryGrid />
      </main>

      <Footer />
    </div>
  )
}
