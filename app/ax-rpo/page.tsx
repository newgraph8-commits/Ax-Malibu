"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function URPOPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="pt-48 pb-12 lg:pt-56 lg:pb-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-12">AX-RPO Excellence</h1>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ax Malibu operates with an unwavering commitment to outperform competitors and expand its presence in
                the executive placement market. Through our innovative AX-RPO system, companies gain a clear competitive
                advantage which delivers both strategic and tangible value without the premium costs typically
                associated with expert-level services.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Through this innovative system, Ax Malibu has elevated the globally recognized Recruitment Process
                Outsourcing framework, introducing more efficient strategies for executive search and organizational
                development.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                And for every client, the process begins the same way — with you, the first step forward.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
