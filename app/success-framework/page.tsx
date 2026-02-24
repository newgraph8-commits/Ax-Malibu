import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export const metadata = {
  title: "Success Framework - Ax Arctic",
  description: "Our rigorous four-point framework for aligning the right candidate with each opportunity",
}

export default function SuccessFrameworkPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-48 pb-16 lg:pt-56 lg:pb-24">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">Success Framework</h1>
            <div className="text-lg text-muted-foreground leading-relaxed max-w-5xl space-y-6">
              <p>
                Ax Arctic applies a precise, four-point framework to ensure each placement supports both immediate
                organizational needs and long-term growth. Central to this evaluation is determining whether a candidate
                can articulate a clear vision that resonates with both staff and leadership, generating alignment and
                momentum across the institution. We also assess whether their leadership style and personality can
                energize teams, strengthen client relationships, and restore a sense of optimism within the
                organization.
              </p>
              <p>
                Equally important is evaluating the immediate impact a finalist would bring: their ability to reinforce
                credibility at the helm and provide strong, stabilizing leadership from day one. Ultimately, our process
                asks a forward-looking question—whether one, two, or three years after the hire, executives across the
                organization will echo the sentiment: "Ax Arctic truly delivered on that placement."
              </p>
            </div>
          </div>
        </section>

        {/* Stock Photo Section */}
        <section className="pb-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop"
                alt="Team collaboration and leadership"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
