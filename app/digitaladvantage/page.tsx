import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Digital Advantage - Ax Arctic",
  description: "Proprietary tools and adaptive solutions for the digital era",
}

export default function DigitalAdvantagePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-48 pb-24 lg:pt-56 lg:pb-32">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">Digital Advantage</h1>
            <div className="space-y-6 text-lg text-muted-foreground max-w-5xl">
              <p className="leading-relaxed">
                Organizations that excel in today's digital environment must move quickly, adapt in real time, and
                maintain the agility to scale with rising demands. Although failure is never the objective, it often
                becomes a catalyst for long-term progress — shaping the strategies that drive sustained advancement.
              </p>
              <p className="leading-relaxed">
                Ax Arctic's continued growth in the executive search and talent solutions space reflects this reality.
                Our commitment to refinement informs both how we engage exceptional clients and how we cultivate highly
                focused, high-performing talent.
              </p>
            </div>
          </div>
        </section>

        {/* Two-Column Section: Stock Photo Left, Text Right */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Stock Photo */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  alt="Team collaboration and strategic planning"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right: Text Content */}
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  To meet the demands of an era defined by rapid decision-making and overwhelming data volume, our team
                  of developers and technical engineers has created proprietary tools engineered to overcome digital and
                  operational challenges with efficiency and precision. These adaptable systems support organizations
                  navigating the pressures of a fast-evolving landscape, where informed action and strategic clarity are
                  essential.
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
