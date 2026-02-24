import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Star } from "lucide-react"

export const metadata = {
  title: "Why Partner With Us - Ax Arctic",
  description: "Outcome-driven excellence and workforce culture strategy",
}

export default function OutcomeDrivenExcellencePage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">Outcome-Driven Excellence</h1>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                The value Ax Arctic delivers—unmatched and inimitable—is rooted in our ability to drive measurable
                results and strengthen organizational cohesion. This standard guides every custom solution we create;
                each one built to advance leadership potential, improve engagement effectiveness, and bring diverse
                teams into alignment around common objectives. Through this approach, we ensure that every client
                receives an outcome optimized for long-term performance and retention.
              </p>
            </div>
          </div>
        </section>

        {/* Workforce Culture Strategy Section */}
        <section className="py-16 bg-muted/30">
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">Workforce Culture Strategy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Long-term organizational growth depends heavily on a strong, intentional workforce culture—one shaped by
              leadership that sets clear priorities and establishes the right performance benchmarks. Though often
              underestimated, this work starts at the top.
            </p>

            {/* Four Benchmark Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Benchmark 1 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-primary">Benchmark 1</h3>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="relative w-10 h-10">
                      <Star className="w-10 h-10 text-primary fill-primary" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-[8px] font-bold text-white">AX</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Are your organizational goals clearly communicated to every team member?
                </p>
              </div>

              {/* Benchmark 2 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-primary">Benchmark 2</h3>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="relative w-10 h-10">
                      <Star className="w-10 h-10 text-primary fill-primary" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-[8px] font-bold text-white">AX</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Do all employees understand the implicit expectations and culture of your organization?
                </p>
              </div>

              {/* Benchmark 3 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-primary">Benchmark 3</h3>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="relative w-10 h-10">
                      <Star className="w-10 h-10 text-primary fill-primary" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-[8px] font-bold text-white">AX</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Are directors providing consistent, actionable, and encouraging feedback to their teams?
                </p>
              </div>

              {/* Benchmark 4 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-primary">Benchmark 4</h3>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="relative w-10 h-10">
                      <Star className="w-10 h-10 text-primary fill-primary" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-[8px] font-bold text-white">AX</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Do employees feel motivated and supported by their peers and supervisors every day?
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
