"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function EducationPage() {
  const [activeSection, setActiveSection] = useState("education")

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
          <div
            className="container mx-auto"
            style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Onboarding Academic Leaders
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Within higher education, Ax Malibu has built a proven track record of sourcing and placing distinguished
              academic leaders for respected universities and private institutions. This success is supported by our
              deep engagement with presidents, provosts, chancellors, vice presidents, deans, faculty leadership,
              coaches, alumni, and additional decision-makers who play a central role in selecting candidates for
              pivotal leadership roles.
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
                {/* Stock Photo */}
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/university-campus-students-studying-education-acad.jpg"
                    alt="Academic leadership and education"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Education Section */}
                <h2 className="text-3xl font-bold text-primary mb-6">Education</h2>

                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Access to distinguished academic talent is often limited by time constraints and the difficulty of
                    reaching senior leaders, yet Ax Malibu's industry relationships and extensive resources allow
                    organizations to connect with top-tier candidates efficiently. This capability is reinforced by our
                    nationwide network of senior academic leaders, which enables a recruitment process defined by
                    strategic foresight, sharp evaluative judgment, and the creativity required to identify individuals
                    who meet the high standards of today's higher education landscape.
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
