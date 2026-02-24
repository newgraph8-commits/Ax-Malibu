import { PageHeader } from "@/components/ui/page-header"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CallbackForm } from "@/components/home/callback-form"

export default function ExecutivePlacementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <PageHeader
          title="Executive Placement"
          subtitle="Securing visionary leaders for the C-suite and boardroom."
          backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto text-center max-w-4xl" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">Leadership That Defines the Future</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Our executive placement practice is dedicated to identifying and securing the transformative leaders who
              will shape the future of your organization. We understand that at the highest levels, leadership is about
              more than just competence—it's about vision, character, and the ability to inspire.
            </p>
          </div>

          <div
            className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}
          >
            {[
              {
                title: "C-Suite Search",
                desc: "CEO, COO, CFO, CTO, and other top-level executive searches conducted with absolute discretion.",
              },
              {
                title: "Board Advisory",
                desc: "Recruiting diverse, experienced board members to provide governance and strategic guidance.",
              },
              {
                title: "Succession Planning",
                desc: "Proactive identification of internal and external talent to ensure leadership continuity.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-navy p-10 text-white text-center rounded-sm shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="text-xl font-serif font-bold mb-4 text-accent">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <CallbackForm />
      </main>

      <Footer />
    </div>
  )
}
