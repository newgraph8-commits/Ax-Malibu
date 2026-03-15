import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Premium Talent Acquisition - Ax Malibu",
  description: "Tailored solutions for executive search and talent acquisition",
}

export default function AcquisitionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-48 pb-8 lg:pt-56 lg:pb-12">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">Premium Talent Acquisition</h1>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                Organizations today operate in a digital environment that demands both immediate decision-making and
                long-term strategic vision. Ax Malibu has grown in step with this pace, providing executive search
                solutions that translate complex information into clear, actionable leadership strategies. Clients draw
                on the firm's extensive experience in board governance, management consulting, and senior-level
                recruitment—expertise that informs every engagement we undertake.
              </p>
              <p className="leading-relaxed">
                Our methodology is built around outcomes. Each engagement is tailored to identify leaders who
                demonstrate strong potential, effective communication and engagement skills, and the ability to unite
                cross-functional teams behind shared objectives. This approach is reinforced by the guidance of Ax
                Malibu's board, whose insight and discipline help ensure our work remains focused, precise, and aligned
                with the needs of diverse industries.
              </p>
              <p className="leading-relaxed">
                At the center of our work is a value-driven philosophy: to elevate and strengthen our clients'
                organizational potential. As the business landscape evolves, our commitment remains the same—to deliver
                measurable results and empower the leaders and organizations we serve to advance their goals with
                clarity and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Marketplace Strategy Section */}
        <section className="py-16 bg-muted/30">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-12">Marketplace Strategy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                    alt="Motivated team"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">Relentlessly Motivated</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advocating for the needs and priorities of our clients and partners remains the foundation of our
                  commitment and purpose.
                </p>
              </div>

              {/* Card 2 */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
                    alt="Team facing challenges"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">Fearless in the Face of Challenges</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We embrace the challenge of discovering the next generation of top talent for each organizational
                  structure.
                </p>
              </div>

              {/* Card 3 */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
                    alt="Outcome focused strategy"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">Outcome-Focused</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment is to achieve outcomes that are both measurable and high-impact, delivered with
                  efficiency and precision.
                </p>
              </div>

              {/* Card 4 */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/business-tactical-planning-strategy-meeting.jpg"
                    alt="Tactical planning"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">Tactical Planning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We specialize in developing customized strategic roadmaps for our clients, supporting both short-term
                  transitions and long-term organizational growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Separator Section */}
        <section className="py-0">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&h=600&fit=crop"
                alt="Executive talent acquisition"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* AF-RPO Excellence Section */}
        <section className="py-24">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">AX-RPO Excellence</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                Companies seeking stronger recruitment infrastructure and improved strategic outcomes increasingly benefit from Ax Malibu's AX-RPO framework—a proprietary system designed to deliver high-level executive search and talent acquisition capabilities without the premium cost structure. By redefining process implementation, this model gives organizations a measurable competitive advantage, regardless of their global footprint.
              </p>
              <p className="leading-relaxed">
                The AX-RPO approach enhances efficiency across executive search, talent strategy, and organizational development, setting a new standard for modern Recruitment Process Outsourcing. Ax Malibu continues to expand its influence in the executive placement sector, driven by a commitment to outperform industry competitors and deliver superior long-term value.
              </p>
            </div>
          </div>
        </section>

        {/* The Digital Edge Section */}
        <section className="py-24 bg-muted/30">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">The Digital Edge</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                In a market where agility must extend across entire enterprises, organizations are required to operate
                with a level of adaptability that exceeds traditional expectations. Long-term growth is often shaped at
                pivotal moments—points where unexpected setbacks, while never acceptable as outcomes, prompt critical
                reflection and renewed strategic focus. The companies that ultimately excel are those that convert these
                inflection points into disciplined learning, decisive action, and sustained performance.
              </p>
              <p className="leading-relaxed">
                To meet these evolving demands, Ax Malibu continues to strengthen its approach to attracting leading
                clients and developing culturally dynamic, high-performing talent. Our developers and engineers
                contribute directly to this effort by creating proprietary technologies that address a broad spectrum of
                organizational challenges and support smarter, more resilient operations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
