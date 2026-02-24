"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function TalentAcquisitionPage() {
  const [activeSection, setActiveSection] = useState("talent-acquisition")

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Talent Acquisition</h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              At the center of our work is a value-driven philosophy: to elevate and strengthen our clients'
              organizational potential. As the business landscape evolves, our commitment remains the same—to deliver
              measurable results and empower the leaders and organizations we serve to advance their goals with clarity
              and efficiency.
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
                    src="/professional-talent-acquisition-recruitment-team-m.jpg"
                    alt="Talent acquisition and recruitment"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold text-primary mb-6">Acquisition</h2>

                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Organizations today operate in a digital environment that demands both immediate decision-making and
                    long-term strategic vision. Ax Arctic has grown in step with this pace, providing executive search
                    solutions that translate complex information into clear, actionable leadership strategies. Clients
                    draw on the firm's extensive experience in board governance, management consulting, and senior-level
                    recruitment—expertise that informs every engagement we undertake.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our methodology is built around outcomes. Each engagement is tailored to identify leaders who
                    demonstrate strong potential, effective communication and engagement skills, and the ability to
                    unite cross-functional teams behind shared objectives. This approach is reinforced by the guidance
                    of Ax Arctic's board, whose insight and discipline help ensure our work remains focused, precise,
                    and aligned with the needs of diverse industries.
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
