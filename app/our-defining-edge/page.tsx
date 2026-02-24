import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Our Defining Edge - Ax Arctic",
  description: "The Ax Arctic advantage is defined by our global reach and proven excellence in executive search",
}

export default function OurDefiningEdgePage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="pt-48 pb-16 lg:pt-56 lg:pb-24 bg-muted/30">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-12">Our Defining Edge</h1>
            <div className="space-y-6 text-lg text-muted-foreground mb-12">
              <p className="leading-relaxed">
                At Ax Arctic, complacency is not an option. Our reputation rests on an unyielding commitment to
                executing every engagement with precision, discipline, and intensity. This operational mindset reflects
                the standards of elite military units: anticipate every scenario, prepare for every variable, and leave
                nothing to chance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/military-precision-strategy-team.jpg"
                  alt="Precision and intensity"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  Even the strongest organizations encounter periods of volatility—whether financial, cultural, or
                  social. Supported by a fortified infrastructure and a deeply experienced team, Ax Arctic is positioned
                  to stabilize disruption, restore confidence, and rebuild trust among key stakeholders.
                </p>
                <p className="leading-relaxed">
                  The strength of our approach is reinforced by a global reach and a record of excellence in executive
                  search across finance, technology, entertainment, law, healthcare, human resources, and education.
                  Working within these high-impact sectors, our strategic negotiators, elite researchers, embedded
                  analysts, industry insiders, and connected leaders operate under a single expectation: deliver
                  exceptional executive talent with absolute discretion. Privacy, trust, and precision define every
                  placement, well above any pursuit of short-term visibility.
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
