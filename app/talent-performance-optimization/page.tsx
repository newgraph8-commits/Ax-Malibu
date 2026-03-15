"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export default function TalentPerformanceOptimizationPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="pt-48 pb-12 lg:pt-56 lg:pb-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Talent Performance Optimization
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="space-y-6 lg:col-span-2">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ax Malibu delivers modern, performance-driven frameworks that refine workflows, strengthen efficiency,
                  reduce unintended consequences, and ensure rewards are closely aligned with measurable outcomes.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  This need for a more adaptive approach stems from the fact that traditional evaluation models—while
                  still effective in assessing individual contributions within team settings—often struggle to keep pace
                  with today's fast-moving digital business climate.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  For organizations seeking long-term success, a performance management system that can evolve with
                  changing demands is no longer optional; it is foundational.
                </p>
              </div>

              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop"
                  alt="Performance optimization and team collaboration"
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
