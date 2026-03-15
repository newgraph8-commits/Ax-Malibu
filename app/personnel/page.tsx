"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function PersonnelPage() {
  const [activeSection, setActiveSection] = useState("personnel")

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Executive-Level Leadership</h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Matching leadership capability with organizational need requires precision. At Ax Malibu, our work centers
              on identifying individuals whose technical proficiency, cultural alignment, and leadership potential
              position them for meaningful, long-term impact.
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
                    src="/c-suite-executives-leadership-boardroom-meeting.jpg"
                    alt="C-Suite executives and leadership"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6 w-full">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Personnel</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full mb-4">
                      Ax Malibu partners with organizations across education, entertainment, finance, human resources,
                      law, technology, and sales—each benefiting from our disciplined approach to identifying
                      high-caliber talent. Our work spans both executive leadership and critical operational roles,
                      ensuring organizations are equipped with professionals who can sustain performance, strengthen
                      reputation, and contribute to long-term institutional impact.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full">
                      At the executive tier, we conduct targeted searches for CEOs, COOs, vice presidents, senior vice
                      presidents, and other senior leaders who have the capacity to reinforce a company's foundation and
                      advance its strategic vision. Beyond these roles, we also recruit high-impact professionals across
                      functions such as e-business, advertising, business development, customer experience, experiential
                      strategy, product management, communications, and public relations, ensuring organizations
                      maintain strong execution at every level.
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
