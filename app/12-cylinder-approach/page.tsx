import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "12 Cylinder Approach - Ax Arctic",
  description: "Our signature approach to client service and strategic partnerships",
}

export default function TheBananaAnalogyPage() {
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
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8"
              style={{
                fontVariantNumeric: "lining-nums",
              }}
            >
              12 Cylinder Approach
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              In a constantly shifting digital world, businesses rely heavily on clear, compelling, and well-crafted
              information. Ax Arctic delivers the insights, systems, and support needed to create and manage this
              content with precision and confidence.
            </p>

            {/* 3 Sections Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Section 1: Precision-Driven Performance Standards */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Precision-Driven Performance Standards</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Ax Arctic rejects cookie-cutter solutions. Just as a high-performance engine depends on every cylinder
                  firing with perfect timing, effective communication requires tailored strategies—not generic
                  templates. When other firms rely on broad, one-size-fits-all methods, they create inefficiencies and
                  misalignment. We focus on accuracy, customization, and strategic refinement to ensure every component
                  of your message runs at peak performance.
                </p>
              </div>

              {/* Section 2: Engineered for Real Leadership */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Engineered for Real Leadership</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Surface-level checks may give the impression of progress, but they rarely reveal how well a system is
                  truly performing. In the same way, relying on shallow assessments can hide critical issues and limit
                  growth. Ax Arctic prioritizes deeper analysis, meaningful metrics, and reliable insight—ensuring your
                  communication engine is genuinely tuned, optimized, and ready to drive results.
                </p>
              </div>

              {/* Section 3: Driven by Purpose and Performance */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Driven by Purpose and Performance</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Ax Arctic operates with intentional focus, ensuring every initiative is actively powered—not left to
                  chance. We stay engaged throughout the entire process, applying expertise, resources, and strategic
                  oversight to keep your communication engine running at full efficiency. Our commitment is simple:
                  deliver measurable results through disciplined execution and unwavering support.
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
