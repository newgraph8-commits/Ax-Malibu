"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function HealthcarePage() {
  const [activeSection, setActiveSection] = useState("healthcare")

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
              Rely on a Broad Network of Medical Experts & Consultants
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Significant shifts are reshaping the American healthcare landscape, bringing new regulations, rising
              pharmaceutical costs, evolving care-delivery models, and a growing need to support an aging population.
              Organizations must adapt quickly—and strategically.
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
                    src="/medical-hospital-doctors-nurses-team-healthcare.jpg"
                    alt="Healthcare professionals in medical setting"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Healthcare Section */}
                <h2 className="text-3xl font-bold text-primary mb-6">Healthcare</h2>

                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Healthcare leaders today face complex challenges: navigating public–private frameworks, managing
                    cost pressures, improving coordinated care, securing consistent access to skilled professionals, and
                    planning for long-term demographic demands.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                    Addressing Critical Staffing Shortages
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The growing importance of travel nursing across the healthcare sector is reflected in Ax Malibu's
                    ability to mobilize a nationwide network of seasoned clinicians. Our nurses provide dependable
                    support during critical staffing gaps—including parental or personal leave, unexpected injuries, and
                    seasonal surges—and many are able to coordinate flexible scheduling directly with partnering
                    hospitals. This adaptability allows healthcare organizations to maintain continuity of care while
                    ensuring operational efficiency during periods of heightened demand.
                  </p>

                  <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                    Client Support in Times of Constant Change
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ax Malibu equips healthcare organizations to remain responsive and well-positioned amid ongoing
                    industry shifts. Our network of medical specialists and healthcare consultants delivers guidance
                    grounded in precision, discretion, and strategic insight.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    For instance, hospitals facing variable patient volumes—particularly those in rural and underserved
                    areas—benefit significantly from Ax Malibu's travel nursing resources. This capability, combined
                    with our wider healthcare expertise, supports organizations in sustaining consistent staffing
                    levels. As a result, clients are better equipped to adapt to evolving demands and maintain
                    operational readiness.
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
