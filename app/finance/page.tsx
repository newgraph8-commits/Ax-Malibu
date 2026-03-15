"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function FinancePage() {
  const [activeSection, setActiveSection] = useState("finance")

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
              Financial Services Industry Overview
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Ax Malibu delivers an executive search experience designed for efficiency, impact, and long-term
              organizational strength. Our consultants operate from major financial hubs across the globe, bringing
              expertise in intellectual property, organizational strategy, leadership development, peer-to-peer product
              positioning, and the dynamics of international financial markets.
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
                    src="/financial-services-professional-office-trading-flo.jpg"
                    alt="Financial services and trading floor"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Finance Section */}
                <h2 className="text-3xl font-bold text-primary mb-6">Finance</h2>

                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In a marketplace defined by rapid change, financial service organizations must remain agile and
                    adaptable. Ax Malibu addresses this need by prioritizing versatility and leadership strength in
                    every search, identifying top-tier executives capable of guiding institutions through both current
                    challenges and emerging industry shifts.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    This combination of global positioning, specialized knowledge, and disciplined search methodology
                    ensures that our clients secure the talent required to thrive in today's evolving financial
                    landscape.
                  </p>
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
