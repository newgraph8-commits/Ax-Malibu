"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export default function ExclusiveSearchEngagementsPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="pt-48 pb-12 lg:pt-56 lg:pb-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Exclusive Search Engagements
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Whether an organization requires support for a short-term initiative or a long-term strategic partnership,
              Ax Malibu's consultants ensure that every engagement makes the most effective use of time, resources, and
              overall impact. Our firm delivers service models that are fully customized to the needs of each client,
              regardless of scale or complexity.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-primary">Our comprehensive approach includes:</h2>

                <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed list-disc pl-6">
                  <li>Driving initiatives that support organizational growth and talent development</li>
                  <li>Implementing programs to strengthen corporate culture and operational efficiency</li>
                  <li>Reshaping strategies to navigate expansion and market shifts</li>
                  <li>
                    Advising on employment regulations and compliance across local, state, and regional jurisdictions
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden self-stretch">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop"
                  alt="Professional executive engagement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ax Malibu remains the sole point of contact from the initial search through a candidate's integration,
                ensuring consistency and avoiding the handoff model used by many firms. This continuity allows
                organizations and newly placed leaders to feel supported through every stage of a high-stakes
                transition—an essential foundation when the work is both critical and mutually beneficial.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                This sustained involvement reflects our broader commitment to the nuanced work of cultivating
                relationships that endure and generate meaningful value. By remaining engaged throughout the full
                duration of an engagement, our consultants reinforce alignment, strengthen long-term collaboration, and
                create opportunities for continued partnership.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
