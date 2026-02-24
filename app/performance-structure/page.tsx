import { PageHeader } from "@/components/ui/page-header"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CallbackForm } from "@/components/home/callback-form"
import { Search, Target, Users, BarChart3 } from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "Strategic Discovery",
    desc: "We begin by immersing ourselves in your organization to understand your culture, goals, and specific leadership needs. This forms the foundation of our search strategy.",
    icon: Search,
  },
  {
    number: "02",
    title: "Market Mapping",
    desc: "Using proprietary data and networks, we map the talent landscape to identify potential candidates who align with your criteria, looking beyond the obvious choices.",
    icon: Target,
  },
  {
    number: "03",
    title: "Rigorous Assessment",
    desc: "Candidates undergo a multi-stage assessment process evaluating not just skills, but leadership capability, cultural fit, and long-term potential.",
    icon: Users,
  },
  {
    number: "04",
    title: "Integration & Success",
    desc: "Our partnership continues through onboarding and integration, ensuring the new leader has the support needed to deliver early wins and long-term value.",
    icon: BarChart3,
  },
]

export default function PerformanceStructurePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <PageHeader
          title="Performance Structure"
          subtitle="A rigorous, data-driven methodology designed to deliver predictable, high-quality outcomes for critical leadership appointments."
          backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">The Ax South Methodology</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our performance structure is built on the belief that executive search is a science as much as an art.
                We apply rigorous process controls to ensure consistency, quality, and speed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative pt-8 group">
                  {/* Connecting line for desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-1/2 w-full h-[1px] bg-border z-0" />
                  )}

                  <div className="relative z-10 flex flex-col items-center text-center bg-background p-6 border border-border/40 hover:border-accent/50 rounded-sm transition-colors h-full">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-serif font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>

                    <h3 className="text-lg font-bold text-primary mb-4 font-serif">{step.title}</h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-8 h-64 rounded-sm shadow-sm flex items-center justify-center">
                    <div className="text-center">
                      <span className="block text-5xl font-serif font-bold text-primary mb-2">98%</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Placement Success</span>
                    </div>
                  </div>
                  <div className="bg-navy p-8 h-64 rounded-sm shadow-sm flex items-center justify-center translate-y-8">
                    <div className="text-center text-white">
                      <span className="block text-5xl font-serif font-bold mb-2">3yr</span>
                      <span className="text-xs uppercase tracking-widest opacity-70">Avg. Retention</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-serif text-primary">Measurable Impact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We measure our success not just by filling roles, but by the long-term impact of the leaders we place.
                  Our performance structure ensures that we consistently deliver candidates who drive revenue,
                  innovation, and cultural positive change.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By aligning talent strategy with business objectives, we help organizations build leadership teams
                  that are resilient, agile, and capable of navigating future challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CallbackForm />
      </main>

      <Footer />
    </div>
  )
}
