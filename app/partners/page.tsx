import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export const metadata = {
  title: "Partners - Ax Malibu",
  description: "Our trusted partners in executive recruitment and talent solutions",
}

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section with Title */}
        <section className="pt-48 pb-16 lg:pt-56 lg:pb-24">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-16">Partners</h1>

            {/* Partner Logos - 3 logos side by side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mb-16">
              {/* ThinkersPitch Logo */}
              <div className="flex items-center justify-center p-8 bg-white rounded-lg border-2 border-gray-300 h-[250px]">
                <Image
                  src="/images/thinkerspitch-20logo-red.png"
                  alt="ThinkersPitch Logo"
                  width={300}
                  height={200}
                  className="w-full h-auto object-contain max-h-full"
                />
              </div>

              {/* LA Horsepower Logo */}
              <div className="flex items-center justify-center p-8 bg-white rounded-lg border-2 border-gray-300 h-[250px]">
                <Image
                  src="/images/frame-204.jpeg"
                  alt="LA Horsepower Logo"
                  width={300}
                  height={200}
                  className="w-full h-auto object-contain max-h-full"
                />
              </div>

              {/* Circus Short Logo */}
              <div className="flex items-center justify-center p-8 bg-white rounded-lg border-2 border-gray-300 h-[250px]">
                <Image
                  src="/images/circus-scientific-logo.png"
                  alt="Circus Scientific Logo"
                  width={300}
                  height={200}
                  className="w-full h-auto object-contain max-h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stock Photo Section */}
        <section className="pb-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop"
                alt="Partnership and collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <div className="max-w-4xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Case studies featuring real-world examples have demonstrated the effectiveness, speed, adaptability, and
                overall success of Ax Malibu's system.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To integrate Ax Malibu's 12 AC system into your Human Resources framework or to enroll in the Ax Malibu
                system application, please contact an Ax Malibu representative at:{" "}
                <a href="mailto:info@axmalibu.com" className="text-primary hover:underline font-semibold">
                  info@axmalibu.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
