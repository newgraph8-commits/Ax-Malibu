import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Users, Globe, TrendingUp, Target } from "lucide-react"

export const metadata = {
  title: "Unmatched Global Presence - Ax Arctic",
  description: "Surpassing the limits of traditional senior-leadership evaluation",
}

export default function UnmatchedGlobalPresensePage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="pt-48 pb-12 lg:pt-56 lg:pb-16">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">Unmatched Global Presense</h1>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                Surpassing the limits of traditional senior-leadership evaluation, Ax Arctic is equipped to execute
                high-visibility searches across the executive spectrum, including placements of industry-leading CEOs
                and other senior corporate figures.
              </p>
            </div>
          </div>
        </section>

        {/* Four Icon Cards Section */}
        <section className="py-16 bg-muted/30">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
              {/* Left side - 3 cards */}
              <div className="space-y-8">
                {/* Top row - 2 cards side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Card 1 - Exceptional Talent */}
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Exceptional Talent</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The creation of a wide-ranging, diverse roster of highly qualified candidates—regardless of the
                      time or resources required—is the mission that guides our entire approach.
                    </p>
                  </div>

                  {/* Card 2 - Worldwide Connections */}
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Worldwide Connections</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ax Arctic's boutique model is built to drive impact—serving as a catalyst in some of the most
                      competitive arenas and keeping results at the forefront. What sets us apart is not only the
                      breadth of our global access, but our ability to translate those relationships into strategic,
                      market-shaping outcomes. Few firms can match that combination of reach and execution, and our
                      track record continues to validate that distinction.
                    </p>
                  </div>
                </div>

                {/* Bottom row - 1 card spanning full width */}
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Leadership Placement Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    True, sustainable success in executive placement requires attention to every detail—there are no
                    shortcuts. Every step of the process serves a critical purpose.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    For example, in our growing education division, Ax Arctic maintains trusted relationships with
                    school presidents, deans, vice chairs, chancellors, athletic directors, and other key administrators
                    worldwide. In most cases, we can connect a qualified candidate directly with top-level
                    decision-makers with just a single call.
                  </p>
                </div>
              </div>

              {/* Right side - 1 card */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Long-Term Market Leadership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ax Arctic's expert team prides itself on being just a phone call—or discreet meeting—away from placing
                  a highly qualified executive in front of influential decision-makers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  How do we cultivate such a powerful network of skilled and committed leaders? And how does it
                  streamline the high-stakes process of identifying the ideal candidate at the right time?
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through a structured, detail-driven approach, Ax Arctic begins by collaborating closely with clients
                  to understand their vision for each critical role—spanning sectors such as education, entertainment,
                  finance, healthcare, law, media, and marketing.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From there, we leverage an interconnected system of global contacts and data-driven insights to
                  conduct a targeted search for exceptional candidates, highlighting the distinct skills, experiences,
                  and leadership qualities that define a future industry leader.
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
