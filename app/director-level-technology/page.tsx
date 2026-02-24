"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function TechnologyExecutivePlacementPage() {
  const [activeSection, setActiveSection] = useState("technology-executive")

  const menuItems = [
    {
      id: "executive-placement-services",
      label: "Strategic Executive Placement",
      href: "/strategic-executive-placement",
    },
    { id: "technology-executive", label: "Director-Level Technology", href: "/director-level-technology" },
    { id: "external-searches", label: "External Leadership Search", href: "/external-leadership-search" },
    { id: "board-assessment", label: "Board Assessment Tools", href: "/board-assessment-tools" },
    { id: "executive-assessment", label: "Executive Assessment Services", href: "/executive-assessment-services" },
    { id: "board-restructuring", label: "Board Restructuring Tools", href: "/board-restructuring-tools" },
    { id: "board-consummating", label: "Board Consummating Checklist", href: "/board-consummating-tools" },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-48 pb-16 lg:pt-56 lg:pb-24">
          <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Director-Level Technology Appointment Strategy
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Established business models are often stripped of their stability by disruptive forces, leading to slowed
              growth and few avenues for revenue.
            </p>

            {/* Layout: Sidebar + Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Left Sidebar Menu */}
              <aside className="lg:col-span-1">
                <nav className="bg-gray-100 border border-gray-200 rounded-lg p-4 sticky top-32">
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

              {/* Right Content Area */}
              <div className="lg:col-span-3">
                {/* Stock Photo */}
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop"
                    alt="Technology and innovation"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Text */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    This places ongoing demands on director boards to foresee disruption, provide clear transparency to
                    investors, embed innovative practices across the organization, and ensure sustained leadership
                    continuity.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    This focus on innovation includes key high-tech areas such as cybersecurity, machine learning, and
                    A.I.—disciplines that require companies to adapt their structures, digital strategies, customer
                    insights, and broader transformation efforts.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Because many innovation-focused board members come from outside traditional corporate models,
                    bridging that gap is essential. Ax Arctic's extensive network and connected principals make this
                    transition seamless.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We are equipped to place these technology leaders alongside top decision-makers, reinforcing our
                    commitment to premium access and exceptional service.
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
