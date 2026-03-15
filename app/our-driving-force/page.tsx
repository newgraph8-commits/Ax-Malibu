import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Our Driving Force - Ax Malibu",
  description:
    "Ax Malibu's proprietary A-Frame Intelligence Engine delivers breakthrough outcomes for executive search",
}

export default function OurDrivingForcePage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="py-16 pt-48 lg:pt-56">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-12">Our Driving Force</h1>
            <div className="space-y-6 text-lg text-muted-foreground mb-12">
              <p className="leading-relaxed">
                Executives who prioritize precision and strategic clarity increasingly turn to Ax Malibu, confident that
                their career trajectory is supported by a firm equipped with exceptional analytical and advisory
                capability. Our ability to transform talent acquisition into a disciplined, strategic function has
                positioned Ax Malibu as the definitive partner for this critical stage of organizational and
                professional advancement. The conclusion is simple: you shouldn't look elsewhere, you wouldn't consider
                it—and ultimately, you won't.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  At the center of this advantage is Ax Malibu's proprietary A-Frame Intelligence Engine, a
                  next-generation platform containing extensive cross-industry data and advanced analytical models.
                  Designed to outperform the slower, outdated processes still used by traditional firms, the system
                  accelerates decision cycles, compresses search timelines, and consistently produces breakthrough
                  outcomes for our clients.
                </p>
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/advanced-technology-analytics-dashboard.jpg"
                  alt="A-Frame Intelligence Engine"
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
