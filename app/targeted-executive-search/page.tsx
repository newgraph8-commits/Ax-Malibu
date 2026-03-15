"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export default function TargetedExecutiveSearchPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="pt-48 pb-12 lg:pt-56 lg:pb-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Targeted Executive Search</h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Ax Malibu manages every direct hire with exceptional discretion and professionalism, supported by a global
              network of candidates skilled in communication strategy, market analytics, and technology-driven
              solutions.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="space-y-6 lg:col-span-2">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team conducts thorough vetting at each stage of the process, developing detailed candidate
                  profiles and maintaining extensive notes before and throughout the interview cycle.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  For organizations pursuing mid- to senior-level leadership placements—whether through confidential
                  searches or open recruiting—this model provides a strong, reliable path to securing top talent. Its
                  focus on substance, not optics, consistently delivers measurable results for clients with high
                  performance standards.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Few firms match Ax Malibu's ability to design precise, tailored, data-driven solutions for
                  mission-critical executive hires. This self-sustaining recruiting framework has become a defining
                  advantage for enterprising companies seeking exceptional leadership.
                </p>
              </div>

              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
                  alt="Executive search team collaboration"
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
