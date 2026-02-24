"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export default function HighVolumeTalentAcquisitionPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="pt-48 pb-12 lg:pt-56 lg:pb-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              High-Volume Talent Acquisition
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Ax Arctic excels in delivering targeted executive placements for leading organizations, while our
              customized solutions are equally effective for large-scale recruitment initiatives.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=500&fit=crop"
                  alt="High-volume recruitment team"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 lg:col-span-2">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether an organization is launching a new product, opening a satellite office, building out an
                  entirely new division, navigating rapid mergers and acquisitions, or preparing a pipeline of future
                  talent, Ax Arctic's project managers bring the experience and connections needed to manage high-volume
                  or multi-position searches with efficiency and precision.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
