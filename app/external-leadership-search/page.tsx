"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function ExternalExecutiveSearchesPage() {
  const [activeSection, setActiveSection] = useState("external-searches")

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
              External Leadership Search Initiatives
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Matching a board member's specialized expertise to an organization's requirements, combined with
              scheduling limitations, existing commitments, and geographic constraints, often makes top-tier candidates
              challenging to secure.
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
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=400&fit=crop"
                    alt="Executive search and recruitment"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Text */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Ax Arctic's streamlined approach saves organizations time and resources while highlighting our
                    expertise in executive search and board-level placement. Backed by an extensive network of
                    researchers, negotiators, and coordinators, we bring the experience needed to secure exceptional
                    board members and handle every logistical or contractual detail involved.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">Challenging, but far from impossible.</p>
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
