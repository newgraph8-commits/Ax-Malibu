"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function HumanResourcesPage() {
  const [activeSection, setActiveSection] = useState("human-resources")

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
              Strategic Corporate Role Staffing
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Securing the right talent for front-office corporate functions is one of the most consequential—and often
              underestimated—drivers of organizational performance. Ax Malibu offers focused expertise in this area,
              partnering with clients to identify and place professionals across a wide range of essential disciplines,
              including accounting, payroll, IT services, human resources, talent development, corporate communications,
              media relations, and community relations. Through this strategic support, we help organizations build the
              operational strength needed to advance their broader objectives.
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
                    src="/corporate-office-human-resources-professionals-mee.jpg"
                    alt="Corporate human resources professionals"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Human Resources</h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  By leveraging our integrated network of consultants, clients gain timely access to key administrative
                  teams within global organizations. This connectivity ensures engagement with the right stakeholders
                  and functional leaders at precisely the right moment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
