"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export default function AdvancedResearchMethodsPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="pt-48 pb-12 lg:pt-56 lg:pb-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Advanced Research Methods</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="space-y-6 lg:col-span-2">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Successful campaigns understand their audiences at a granular level—tracking geographic location,
                  engagement history, and other key metrics through analytics, testing, and research.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  In contrast, less effective campaigns often falter in the basics, such as accurate contact
                  information, audience preferences, or maintaining consistent messaging across daily and weekly
                  outreach.
                </p>
              </div>

              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/advanced-research-data-analytics-dashboard.jpg"
                  alt="Advanced research and analytics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
