import { PageHeader } from "@/components/ui/page-header"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CallbackForm } from "@/components/home/callback-form"
import { CheckCircle2, Users, Globe2, TrendingUp } from "lucide-react"

export default function OurValuePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <PageHeader
          title="Our Value"
          subtitle="Ax Frost delivers transformative leadership solutions that drive organizational excellence and sustainable growth."
          backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-serif text-primary leading-tight">
                  Redefining Executive Search Through Strategic Partnership
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    At Ax Frost, we believe that executive search is not merely about filling a vacancy—it is about
                    securing the future of your organization. Our value proposition is rooted in a deep understanding of
                    market dynamics, organizational culture, and the evolving demands of leadership.
                  </p>
                  <p>
                    We partner with clients to identify leaders who possess not just the requisite skills, but the
                    vision and adaptability to thrive in complex environments. Our rigorous methodology ensures that
                    every placement is a strategic asset to your business.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {[
                    "Global Market Intelligence",
                    "Rigorous Assessment Methodology",
                    "Cultural Alignment Focus",
                    "Long-term Strategic Partnership",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-primary font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-12">
                  <div className="bg-secondary/30 p-8 rounded-sm border border-border/50 h-48 flex flex-col justify-center items-center text-center hover:shadow-md transition-all">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-3xl font-serif font-bold text-primary mb-1">96%</h3>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Retention Rate</p>
                  </div>
                  <div className="bg-primary p-8 rounded-sm border border-border/50 h-48 flex flex-col justify-center items-center text-center text-white hover:shadow-md transition-all">
                    <Globe2 className="w-8 h-8 mb-4 text-accent" />
                    <h3 className="text-3xl font-serif font-bold mb-1">50+</h3>
                    <p className="text-xs uppercase tracking-widest text-white/70">Global Markets</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-secondary/30 p-8 rounded-sm border border-border/50 h-48 flex flex-col justify-center items-center text-center hover:shadow-md transition-all">
                    <TrendingUp className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-3xl font-serif font-bold text-primary mb-1">24%</h3>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Growth Impact</p>
                  </div>
                  <div className="bg-white p-8 rounded-sm border border-border/50 h-48 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all">
                    <h3 className="text-3xl font-serif font-bold text-primary mb-1">500+</h3>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Executive Placements</p>
                  </div>
                </div>
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
