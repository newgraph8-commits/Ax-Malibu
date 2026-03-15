import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Innovation Hub - Ax Malibu",
  description: "Advanced technology recruitment and digital transformation expertise",
}

export default function InnovationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-48 pb-24 lg:pt-56 lg:pb-32">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">Innovation Hub</h1>
            <div className="space-y-6 text-lg text-muted-foreground max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide mb-4">
                Data Infrastructure Architecture
              </h2>
              <p className="leading-relaxed">
                By analyzing technology organizations across global markets, Ax Malibu pinpoints which companies lead in
                critical technical disciplines and identifies those that have established a strong track record for
                attracting and retaining top-tier IT talent.
              </p>
            </div>

            {/* 3 Stock Photos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/data-center-servers-technology.jpg"
                  alt="Data center servers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt="Technology dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
                  alt="Modern technology workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tech Overview Section */}
        <section className="py-24 bg-muted/30">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wide mb-8">Tech Overview</h2>
            <div className="space-y-6 text-lg text-muted-foreground max-w-5xl">
              <p className="leading-relaxed">
                Ax Malibu stands at the forefront of modern digital transformation, especially in the rapidly evolving
                landscape of data analytics and emerging technologies.
              </p>
              <p className="leading-relaxed">
                In an economy driven by instant shifts in machine learning, advanced research, and cutting-edge
                automation, companies need more than adaptability—they need talent that can shape what comes next.
              </p>
              <p className="leading-relaxed">
                With a recruitment model built around anticipating future technical demands, Ax Malibu specializes in
                identifying and securing exceptional innovators for our select clients. We connect organizations with
                the visionary talent capable of reshaping industries—an essential advantage in a market where true
                breakthrough thinkers remain in limited supply.
              </p>
            </div>

            {/* 3 Category Cards with Stock Photos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* Advanced Candidate Assessment - moved to first position */}
              <div className="space-y-6">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/professional-candidate-assessment-technology.jpg"
                    alt="Advanced Candidate Assessment"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary uppercase">Advanced Candidate Assessment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As demand for cybersecurity professionals continues to escalate, retention remains a significant
                  challenge for employers in this sector. This challenge is driven by factors such as compensation
                  expectations, geographic preferences, and career advancement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ax Malibu works to strengthen the market for cybersecurity analysts within our network while helping
                  organizations manage these pressures. We prioritize candidates with demonstrated security leadership
                  and evaluate them across key competencies, including strategic planning, risk assessment, management
                  discipline, user training, and operational security.
                </p>
              </div>

              {/* AI Technology - moved to second position */}
              <div className="space-y-6">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
                    alt="AI Technology"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary uppercase">AI Technology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A.I. is now reshaping sectors such as finance, law, healthcare, and recruiting through automated
                  workflows, adaptive software, and advanced decision-support tools—well beyond its early association
                  with autonomous vehicles and robotics.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Supporting this transformation, Ax Malibu administers the full placement cycle for A.I. professionals
                  and deploys natural-language systems that evaluate candidate information and manage communications in
                  both text and live-chat environments. By maintaining organizational identity and offering real-time
                  communication, these customized platforms facilitate a more efficient onboarding process.
                </p>
              </div>

              {/* Business Intelligence - moved to third position */}
              <div className="space-y-6">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                    alt="Business Intelligence"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary uppercase">Business Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In a digital landscape defined by speed and precision, timely information has become indispensable. Ax
                  Malibu's bot framework functions as an essential resource for both current and future clients.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Built on real-time data collection and analysis, these responsive systems support a wide range of
                  engagement capabilities, including customer chat modules that provide pricing details, manage orders,
                  and surface meaningful marketing insights.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This proprietary framework is engineered to capture, interpret, and respond to client needs on a 24/7
                  basis. It also remains fully informed on shifting dynamics within major platforms such as Facebook —
                  from updates to mobile ad formats and creative limitations to evolving campaign requirements —
                  enabling organizations to adjust quickly and effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Security Strategy Section */}
        <section className="py-24">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-12">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&h=600&fit=crop"
                alt="Compliance & Security Strategy"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wide mb-8">
              Compliance & Security Strategy
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground max-w-5xl">
              <p className="leading-relaxed">
                At the core of an effective security posture is the security and compliance lead — a role that typically
                reports to senior leadership and is responsible for continuous monitoring and the protection of
                sensitive systems from internal and external threats.
              </p>
              <p className="leading-relaxed">
                Supporting this function is the broader expertise our consultants bring from managing full-scale IT
                infrastructures within complex corporate environments. Their background includes evaluating
                organizational exposure to cyber risks, designing and deploying scalable architectures, overseeing data
                center and network operations, and developing both immediate and long-range strategies to secure
                critical assets.
              </p>
              <p className="leading-relaxed">
                For organizations of any size, this level of IT security talent is not optional but essential, and Ax
                Malibu is positioned to identify and deliver professionals capable of meeting these demands.
              </p>
            </div>
          </div>
        </section>

        {/* Web Content Management Section */}
        <section className="py-24 bg-muted/30">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wide mb-8">
              Web Content Management
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground max-w-5xl">
              <p className="leading-relaxed">
                Well-crafted, accurate, and visually compelling content continues to hold significant influence in a
                crowded digital landscape, particularly for industry-leading organizations. Ax Malibu provides the
                infrastructure, expertise, and toolset required to deliver this level of content consistently and on
                schedule.
              </p>
              <p className="leading-relaxed">
                To support long-term visibility, Ax Malibu maintains ongoing SEO initiatives that strengthen reach
                without disrupting internal workflows. These efforts include refining keyword relevance, optimizing
                shareable assets, updating outdated posts, embedding media, improving page architecture, enhancing title
                tags, linking to credible authority sources, producing new content, and evaluating competitor activity
                to identify strategic opportunities.
              </p>
              <p className="leading-relaxed">
                Through this integrated approach, we position clients for stronger engagement, higher visibility, and a
                more compelling digital presence.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
