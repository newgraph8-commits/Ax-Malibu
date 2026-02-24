"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function ExecutiveAssessmentServicesPage() {
  const [activeSection, setActiveSection] = useState("executive-assessment")

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
              Executive Assessment Services
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              By integrating strategic advisory insight, customized evaluations of executive talent, and deep recruiting
              expertise, Ax Arctic has developed a comprehensive and highly effective framework for assessing potential
              board candidates.
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
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=400&fit=crop"
                    alt="Executive assessment and evaluation"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Text */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Candidate selections are ultimately endorsed by company stakeholders, who hold the authority to
                    appoint, retain, or remove board members. Within this framework, our evaluation model prioritizes
                    identifying directors capable of offering both stability and forward-looking leadership to
                    high-performing boards.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Once this foundation is established, the assessment shifts to understanding how well a candidate's
                    judgment, temperament, and work ethic align with the board's existing dynamic. Key considerations
                    include:
                  </p>

                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li className="text-lg text-muted-foreground leading-relaxed">
                      Whether they possess a proven track record of managing internal and external crises.
                    </li>
                    <li className="text-lg text-muted-foreground leading-relaxed">
                      Their ability to motivate others during difficult or uncertain periods.
                    </li>
                    <li className="text-lg text-muted-foreground leading-relaxed">
                      Whether they can collaborate effectively with strong, established personalities.
                    </li>
                    <li className="text-lg text-muted-foreground leading-relaxed">
                      How clearly they communicate in complex or ambiguous environments.
                    </li>
                  </ul>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The effectiveness of these crucial executive and board decisions is reinforced by Ax Arctic's
                    advanced infrastructure and industry-leading expertise.
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
