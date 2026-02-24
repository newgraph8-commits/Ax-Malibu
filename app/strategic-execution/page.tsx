import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export const metadata = {
  title: "Strategic Execution - Ax Arctic",
  description: "Strategic execution and actionable information for modern American businesses",
}

export default function StrategicExecutionPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="pt-48 pb-12 lg:pt-56 lg:pb-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">Strategic Execution</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              In contemporary U.S. businesses, the ability to shape broad audiences through strategic, thoughtfully
              constructed messaging remains our decisive advantage. Ax Arctic delivers the resources and expertise to
              make that possible.
            </p>

            {/* 3 Photos Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/business-strategy-meeting.png"
                  alt="Strategic business planning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/data-analytics-dashboard-business-intelligence.jpg"
                  alt="Business analytics and data"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/professional-email-communication-business.jpg"
                  alt="Professional communication"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              In an environment where inboxes are saturated with dozens of emails daily, the messages that rise to the
              top are the ones that communicate clearly, engage immediately, and stand out visually.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
