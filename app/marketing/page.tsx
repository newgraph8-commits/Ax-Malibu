"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function MarketingPage() {
  const [activeSection, setActiveSection] = useState("marketing")

  const menuItems = [
    { id: "education", label: "Education", href: "/education" },
    { id: "entertainment", label: "Entertainment", href: "/entertainment" },
    { id: "finance", label: "Finance", href: "/finance" },
    { id: "healthcare", label: "Healthcare", href: "/healthcare" },
    { id: "human-resources", label: "Human Resources", href: "/human-resources" },
    { id: "law", label: "Law", href: "/law" },
    { id: "marketing", label: "Marketing", href: "/marketing" },
    { id: "personnel", label: "Personnel", href: "/personnel" },
    { id: "talent-acquisition", label: "Talent Acquisition", href: "/talent-acquisition" },
    { id: "sales", label: "Sales", href: "/sales" },
    { id: "technology", label: "Technology", href: "/technology" },
  ]

  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="pt-48 pb-12 lg:pt-56 lg:pb-16">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Strategic Marketing and SEO
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Ax Malibu develops advanced, adaptive SEO frameworks that align with audience behavior, expand visibility,
              and strengthen an organization's digital presence across key channels.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-[256px_1fr] gap-8">
              {/* Left Sidebar Menu */}
              <aside className="flex-shrink-0">
                <nav className="bg-gray-100 border border-gray-200 rounded-lg p-4 lg:sticky lg:top-32">
                  <ul className="space-y-1">
                    {menuItems.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          onClick={() => setActiveSection(item.id)}
                          className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                            activeSection === item.id
                              ? "bg-primary text-white"
                              : "text-gray-700 hover:bg-primary hover:text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              <div className="flex-1">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/digital-marketing-seo-analytics-dashboard.jpg"
                    alt="Digital marketing and SEO"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-8 w-full">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">SEARCH ENGINE OPTIMIZATION</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-6">
                      Ax Malibu brings the technical depth and strategic foresight needed to expand, refine, and
                      dominate your target audience segments.
                    </p>

                    <h3 className="text-xl font-bold text-primary mb-3">Optimized Content Architecture</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-6">
                      We amplify content performance through intelligent keyword planning, refined title-tag
                      engineering, and share-driven frameworks that boost organic spread.
                    </p>

                    <h3 className="text-xl font-bold text-primary mb-3">Strategic Linking</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-3">
                      Authority-driven linking strategies are built into every campaign:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-muted-foreground leading-relaxed ml-4">
                      <li>Connecting to high-trust sites</li>
                      <li>Updating legacy content for renewed traction</li>
                      <li>Elevating new articles through precision distribution</li>
                      <li>Creating seamless multi-page navigation paths</li>
                    </ul>

                    <h3 className="text-xl font-bold text-primary mb-3">Content-Rich Compliance</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-3">
                      We build copy that ranks:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-muted-foreground leading-relaxed ml-4">
                      <li>Strong word-count foundations</li>
                      <li>Embedded visuals and data graphics</li>
                      <li>High-value content density that passes every algorithm test</li>
                    </ul>

                    <h3 className="text-xl font-bold text-primary mb-3">Keyword Intelligence</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-6">
                      We integrate keywords into strategic placements—title tags, anchors, headers—and perform
                      competitor analysis to expose opportunities they missed.
                    </p>

                    <h3 className="text-xl font-bold text-primary mb-3">Localized SEO</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-4">
                      Ax Malibu treats local visibility as a growth accelerator. We uncover the keywords, visuals, and
                      content angles that lead to community dominance—helping your business carve out a durable,
                      recognized niche in any competitive region.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-8">
                      Behind every local search is intent, urgency, and timing. We analyze it all.
                    </p>
                  </div>

                  {/* Three Photos Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <Image
                        src="/facebook-advertising-social-media-campaign.jpg"
                        alt="Facebook Advertising Strategies"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <Image
                        src="/google-ads-pay-per-click-ppc-dashboard.jpg"
                        alt="Google Pay-Per-Click"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <Image
                        src="/mobile-app-marketing-smartphone-screen.jpg"
                        alt="Mobile App Marketing"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Facebook Advertising Strategies</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-4">
                      Facebook processes nearly 3 billion searches daily and handles 2 trillion daily content
                      interactions—commanding around 20% of global digital ad market share.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-4">
                      Ax Malibu understands exactly why the platform performs at that scale.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full">
                      Our creative engineers build scalable, high-impact campaigns that transform attention into action.
                      Whether you're a startup or an enterprise, our content ecosystems feed a captive audience with
                      precision.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Google Pay-Per-Click</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-4">
                      When Facebook advertising is integrated with paid search, overall performance increases
                      substantially. This multi-channel dynamic has enabled Ax Malibu clients to achieve stronger click
                      through rate (CTR) results and expanded audience reach.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-4">
                      Given Facebook's highly efficient cost per click (CPC) rates, our team is able to position clients
                      at a clear advantage in conversion efficiency.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full">
                      <span className="font-semibold">Bottom Line:</span>
                      <br />
                      By integrating Facebook and Google PPC strategies, organizations can take advantage of a
                      particularly strong moment in the market to expand and strengthen their customer pipelines. Ax
                      Arctic ensures that clients leverage this environment to its fullest potential.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Mobile App Marketing</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-4">
                      The average smartphone user maintains 20–30 apps, many used daily. Our mission: move your app into
                      their daily ritual.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-3">We support teams with:</p>

                    <div className="space-y-4 mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">(a) Revenue Architecture</h4>
                        <p className="text-lg text-muted-foreground leading-relaxed w-full">
                          Whether through paid downloads or engagement-based ad models, we build the framework to
                          maximize recurring revenue.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">(b) Monetization Strategy</h4>
                        <p className="text-lg text-muted-foreground leading-relaxed w-full">
                          Organizations looking to improve app performance across multiple user touchpoints rely on Ax
                          Arctic for the technical capabilities and operational support required to launch effectively,
                          scale efficiently, and monetize successfully.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">(c) Content & Engagement</h4>
                        <p className="text-lg text-muted-foreground leading-relaxed w-full mb-3">
                          Our creative force turns casual users into daily loyalists with:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-4 text-lg text-muted-foreground leading-relaxed ml-4">
                          <li>compelling content layers</li>
                          <li>high-value promotions</li>
                          <li>habit-forming features</li>
                          <li>engagement loops designed to increase check-ins (even on holidays)</li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed w-full">
                      Few firms can match our blend of creativity, engineering, and behavioral insight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
