import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Leadership Succession Planning - Ax Malibu",
  description: "Strategic succession planning and leadership transition expertise",
}

export default function LeadershipSuccessionPlanningPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="pt-48 pb-12 lg:pt-56 lg:pb-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
              Leadership Succession Planning
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                Periods of leadership change can alter team dynamics and introduce uncertainty, even in organizations
                that are otherwise operating smoothly. In a business climate defined by continual competition and
                inevitable personnel turnover, these transitions require thoughtful planning and steady guidance to
                preserve organizational cohesion.
              </p>
              <p className="leading-relaxed">
                To support this need, Ax Malibu designs and executes succession strategies tailored to each client's
                structure and long-term goals. Our consultants apply extensive experience in managing executive
                turnover, ensuring that the transition of top leadership is carried out with minimal disruption and that
                stability is maintained throughout every layer of the organization.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-12">What Makes Us Different?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
                    alt="CEO leadership"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">CEO Network Insight</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Insights from our network of current and former CEOs inform the techniques we use to evaluate senior
                  leadership candidates, including modern assessment tools, simulation exercises, and advanced interview
                  practices. This perspective strengthens our approach to reviewing both internal and external
                  executives.
                </p>
              </div>

              {/* Card 2 */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                    alt="Talent evaluation"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">Proven Talent Evaluation Model</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leadership advancement and development decisions are strengthened through Ax Malibu's tested
                  framework, which delivers a clear measure of both existing and emerging talent.
                </p>
              </div>

              {/* Card 3 */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"
                    alt="Organizational strategy"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">Role Redesign for Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By identifying organizational gaps and clarifying role expectations, our corporate-culture specialists
                  develop strategies that elevate performance and improve overall effectiveness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="py-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Our approach also incorporates proven communication practices designed to strengthen alignment and
              transparency:
            </h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="leading-relaxed">
                  Ensuring ongoing feedback between new or promoted leaders and their supervisors.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="leading-relaxed">
                  Supporting organizational clarity during major leadership or structural changes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="leading-relaxed">Streamlining communication between staff and leadership.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="leading-relaxed">
                  Providing all personnel with clearly defined goals and expectations.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
