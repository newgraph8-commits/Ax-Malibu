"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function ExecutivePlacementServicesPage() {
  const [activeSection, setActiveSection] = useState("executive-placement-services")

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
              Strategic Executive Placement
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              With deep expertise and resources, Ax Arctic consistently identifies premier talent for executive
              appointments on corporate and nonprofit boards.
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
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=400&fit=crop"
                    alt="Executive leadership meeting"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Text */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Ax Arctic's reputation for securing highly qualified board directors is built on a global track
                    record that few firms can rival. Our client portfolio spans public and private companies, nonprofit
                    organizations, family-owned enterprises, and private-equity-backed groups—creating extensive
                    opportunities for meaningful, strategic placements.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    At the center of this work is our proprietary vetting process, which efficiently identifies
                    candidates whose expertise aligns with both the immediate priorities and long-term objectives of
                    each client. This approach enables us to deliver strategic matches that strengthen boards and
                    enhance overall governance.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Whether an organization requires its first board director or a high-potential leader prepared to
                    assume broader responsibilities within a larger governance structure, Ax Arctic provides a clear
                    pathway for establishing strong, future-ready leadership. This is achieved through a time-tested
                    framework designed to evolve in step with the personnel needs of emerging enterprises.
                  </p>

                  <h2 className="text-2xl font-bold text-primary mt-12 mb-6">The Ax Arctic Pledge</h2>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our clients draw on decades of collective experience in board leadership, executive search, and
                    management consulting—expertise that consistently elevates their strategic position and operational
                    impact. This depth of knowledge is strengthened by Ax Arctic's forward-thinking board members, whose
                    guidance and resources enable our team to lead effectively across industries.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ax Arctic's continued emphasis on measurable results and strengthened market positioning remains
                    central to the value we provide. Although the marketplace continues to evolve, our mission does
                    not—to ensure every client is positioned to achieve their full potential in the most positive and
                    impactful manner.
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
