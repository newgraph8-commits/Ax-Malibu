import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Marketplace Strategy - Ax Arctic",
  description: "Strategic marketplace positioning and client value delivery",
}

export default function MarketplaceStrategyPage() {
  const principles = [
    {
      number: "1",
      text: "We are dedicated to producing impactful, high-value outcomes with urgency and precision.",
    },
    {
      number: "2",
      text: "We are fully invested in crafting tailored strategic roadmaps for our clients — each designed to support effective planning, long-term transformation, and organizational growth.",
    },
    {
      number: "3",
      text: "We are motivated by an unwavering commitment to advocate for every client and partner.",
    },
    {
      number: "4",
      text: "We embrace the challenge of recognizing emerging talent that will help shape and strengthen each organization's future.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-48 pb-16 lg:pt-56 lg:pb-24">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">Marketplace Strategy</h1>
            <div className="space-y-6 text-lg text-muted-foreground max-w-5xl">
              <p className="leading-relaxed">
                Exceptional service, flexible pricing models, and direct access to influential global leaders form the
                foundation of Ax Arctic's client partnerships.
              </p>
              <p className="leading-relaxed">
                The advancement and refinement of every client's potential stem from the integration of these strengths
                with our capacity to provide significant strategic value.
              </p>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12">To begin with …</h2>

            {/* 4 Numbered Principles - Horizontal Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle) => (
                <div key={principle.number} className="flex flex-col">
                  {/* Number Circle */}
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">{principle.number}</span>
                    </div>
                  </div>

                  {/* Principle Text */}
                  <p className="text-base text-muted-foreground leading-relaxed">{principle.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
