"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function SalesPage() {
  const [activeSection, setActiveSection] = useState("sales")

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Sales</h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              In today's landscape, sales and marketing must operate as a unified force—aligning around brand identity,
              organizational values, corporate reputation, and communication strategy. Every initiative, regardless of
              scale, should reinforce a company's image with clarity and consistency.
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
                    src="/sales-team-strategy-meeting-business-growth.jpg"
                    alt="Sales team strategy meeting"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6 w-full">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Driving Product Performance</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-4">
                      A key question for any organization is how effectively it integrates content creation with revenue
                      generation. The way a company connects storytelling to product performance reveals its true
                      operational strengths—and exposes any gaps.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full">
                      Ax Arctic equips clients with the insight, talent, and strategic firepower needed to build and
                      sustain high-performing revenue streams through precise, data-driven targeting and market
                      engagement.
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
