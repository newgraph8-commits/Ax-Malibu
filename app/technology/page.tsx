"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function TechnologyPage() {
  const [activeSection, setActiveSection] = useState("technology")

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
              Always Ahead of the Technology Curve
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Ax Arctic stays in front of the digital curve—tracking, evaluating, and anticipating the shifts that
              define a data-driven world. From machine learning to advanced analytics and emerging automation, we remain
              aligned with the breakthroughs reshaping global business.
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
                    src="/technology-innovation-digital-transformation-ai-ml.jpg"
                    alt="Technology and innovation"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6 w-full">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Technology</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-4">
                      As markets accelerate, companies need more than adaptability—they need innovators who can thrive
                      in a rapidly evolving ecosystem. Ax Arctic delivers exactly that, connecting clients with elite
                      talent capable of redefining what's possible and elevating long-term competitive advantage.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-4">
                      Our network of seasoned consultants operates from major financial and tech hubs worldwide, giving
                      clients immediate access to high-impact candidates and real-time market intelligence.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full">
                      With deep expertise in intellectual property strategy, organizational design, peer-to-peer product
                      positioning, leadership development, and global financial markets, Ax Arctic ensures an executive
                      search experience that is streamlined, strategic, and energizing from start to finish.
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
