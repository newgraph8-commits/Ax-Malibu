import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Users, Target, Globe, TrendingUp } from "lucide-react"

export const metadata = {
  title: "About Us - Ax Arctic",
  description: "Ax Arctic has quickly established itself as the new standard in executive search",
}

export default function AboutUsPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">About Us</h1>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                Ax Arctic has quickly established itself as the new standard in executive search—delivering
                precision-focused service and access to transformative leadership opportunities for a global roster of
                high-value clients.
              </p>
              <p className="leading-relaxed">
                Every day, we activate a dynamic, intelligence-driven approach to leadership placement, powered by
                proprietary data models and a network of elite contacts spanning the world's most influential sectors.
                In many cases, we're one call away from positioning a division leader or C-suite visionary directly in
                front of top decision-makers.
              </p>
            </div>
          </div>
        </section>

        {/* Three Cards Section */}
        <section className="py-16 bg-muted/30">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/elite-professional-network-handshake.jpg"
                    alt="The AF Elite Network"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">The AX Elite Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                  How did we build a network of leaders this strong?
                </p>
              </div>

              {/* Card 2 */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/perfect-fit-business-leadership-match.jpg"
                    alt="Finding the Perfect Fit"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">Finding the Perfect Fit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  How does that expertise translate into securing the ideal leader precisely when the stakes are
                  highest?
                </p>
              </div>

              {/* Card 3 */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/global-business-contacts-worldwide-relationships.jpg"
                    alt="Global Contacts"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">Global Contacts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leveraging worldwide relationships and data-driven intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Approach Section */}
        <section className="py-16">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                Ax Arctic leads with a true partnership mindset, beginning every engagement with deep, active listening.
                We work to understand each client's ideal vision for a critical role—down to culture fit, leadership
                style, and long-term impact.
              </p>
              <p className="leading-relaxed">
                From there, we engage our global network and data-driven intelligence to conduct a targeted search for
                standout candidates across the business landscape. We focus on uncovering and elevating the distinct
                qualities, experience, and potential that define future leaders.
              </p>
              <p className="leading-relaxed">
                Importantly, we don't treat searches as one-off transactions. Our methodology is designed to support the
                full arc of organizational needs—assessment, development, onboarding, and structural design—ensuring our
                clients are equipped for long-term success, not just short-term solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Defining Edge Section */}
        <section className="py-16 bg-muted/30">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-12">Our Defining Edge</h2>
            <div className="space-y-6 text-lg text-muted-foreground mb-12">
              <p className="leading-relaxed">
                At Ax Arctic, complacency is not an option. Our reputation rests on an unyielding commitment to
                executing every engagement with precision, discipline, and intensity. This operational mindset reflects
                the standards of elite military units: anticipate every scenario, prepare for every variable, and leave
                nothing to chance.
              </p>
              <p className="leading-relaxed">
                Even the strongest organizations encounter periods of volatility—whether financial, cultural, or social.
                Supported by a fortified infrastructure and a deeply experienced team, Ax Arctic is positioned to
                stabilize disruption, restore confidence, and rebuild trust among key stakeholders.
              </p>
            </div>

            {/* Photo on left, text on right */}
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

        {/* Our Driving Force Section */}
        <section className="py-16">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-12">Our Driving Force</h2>
            <div className="space-y-6 text-lg text-muted-foreground mb-12">
              <p className="leading-relaxed">
                Executives who prioritize precision and strategic clarity increasingly turn to Ax Arctic, confident that
                their career trajectory is supported by a firm equipped with exceptional analytical and advisory
                capability. Our ability to transform talent acquisition into a disciplined, strategic function has
                positioned Ax Arctic as the definitive partner for this critical stage of organizational and
                professional advancement. The conclusion is simple: you shouldn't look elsewhere, you wouldn't consider
                it—and ultimately, you won't.
              </p>
            </div>

            {/* Text on left, photo on right */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  At the center of this advantage is Ax Arctic's proprietary A-Frame Intelligence Engine, a
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

        {/* Unmatched Global Reach Section */}
        <section className="py-16 bg-muted/30">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">Unmatched Global Reach</h2>
            <div className="space-y-6 text-lg text-muted-foreground mb-12">
              <p className="leading-relaxed">
                Surpassing the limits of traditional senior-leadership evaluation, Ax Arctic is equipped to execute
                high-visibility searches across the executive spectrum, including placements of industry-leading CEOs
                and other senior corporate figures.
              </p>
            </div>

            {/* Four Icon Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">TOP-TIER TALENT</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The creation of a wide-ranging, diverse roster of highly qualified candidates—regardless of the time
                  or resources required—is the mission that guides our entire approach.
                </p>
              </div>

              {/* Card 2 */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">PLACEMENT INDUSTRY LEADERSHIP</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For example, in our growing education division, Ax Arctic maintains strong global relationships with
                  school presidents, deans, vice chairs, chancellors, athletic directors, and other key educational
                  administrators. In most cases, we can quickly connect a top-tier candidate—such as an administrator or
                  provost—directly with the organization's decision-makers.
                </p>
              </div>

              {/* Card 3 */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">SUSTAINABLE INDUSTRY LEADERSHIP</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Achieving lasting leadership in the placement industry requires deliberate strategy and meticulous
                  execution. Every element of our process is designed to serve a critical purpose in maintaining
                  long-term success and market influence.
                </p>
              </div>

              {/* Card 4 */}
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">GLOBAL RELATIONSHIPS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ax Arctic's boutique model is built to drive impact—serving as a catalyst in some of the most
                  competitive arenas and keeping results at the forefront. What sets us apart is not only the breadth of
                  our global access, but our ability to translate those relationships into strategic, market-shaping
                  outcomes. Few firms can match that combination of reach and execution, and our track record continues
                  to validate that distinction.
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
