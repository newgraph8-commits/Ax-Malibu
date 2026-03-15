"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function LawPage() {
  const [activeSection, setActiveSection] = useState("law")

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
              Connecting Top Legal Talent With Leading Firms
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Ax Malibu unites top-tier legal minds with law firms and corporate legal departments that demand
              excellence. Our boutique team—strategists, researchers, negotiators, analysts, and deeply connected legal
              insiders—specializes in placing high-impact professionals through full-time, project-based, or interim
              engagements.
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
                    src="/law-firm-legal-professionals-attorneys-office.jpg"
                    alt="Law firm legal professionals"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-8 w-full">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">LAW</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full">
                      Organizations rely on Ax Malibu for legal talent that aligns with their operational demands,
                      cultural expectations, and long-term performance goals. Our placements span project-based
                      engagements, interim assignments, and full-time roles, reflecting a long-standing track record of
                      delivering top-tier legal professionals across diverse needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Associate Recruiting</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4 w-full">
                      Competition for standout associates intensifies each recruitment cycle. Ax Malibu leverages its
                      nationwide network of analysts, researchers, and legal insiders to reach the country's most
                      accomplished associate candidates before the broader market.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4 w-full">
                      Once engaged, firms receive associates positioned for immediate contribution—exposure to
                      partner-level work, substantive assignments, and the rigor required to perform with accuracy,
                      speed, and consistency.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Partner Placement</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4 w-full">
                      Partner transitions are complex, high-stakes, and sensitive. Ax Malibu rejects the
                      one-size-fits-all model, instead designing highly detailed, custom solutions for each search.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4 w-full">
                      Every member of our legal consulting team has navigated partner movement firsthand during their
                      careers. This insider perspective allows us to anticipate challenges, refine strategy in real
                      time, and guide both firm and candidate through a process that can be intricate and emotionally
                      charged.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4 w-full">
                      Our consultants are empowered to adjust direction, provide strategic insight, and make critical
                      recommendations as conditions evolve.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">In-House Legal Operations</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4 w-full">
                      As compensation expectations, geographic preferences, lifestyle priorities, specialization trends,
                      and long-term stability continue to reshape the in-house legal landscape, attorneys at all levels
                      turn to Ax Malibu when preparing for a strategic career move. Whether they are senior partners
                      refining their leadership trajectory, mid-level associates exploring new areas of specialization,
                      or private practitioners seeking to move into a primary in-house counsel role.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4 w-full">
                      Preparing for a transition often raises critical questions: Is your family equipped to handle an
                      accelerated relocation or unexpected timeline change? Are you ready to manage a multilayered
                      interview process within a new or current organization? And if you are moving into an in-house
                      role, have you planned appropriately to transition or conclude existing client commitments?
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed w-full">
                      From early strategic advisory through final compensation negotiations, Ax Malibu provides the
                      clarity, discretion, and executive-level guidance necessary to navigate every phase of the process
                      with confidence.
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
