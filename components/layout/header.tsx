"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/ui/logo"
import { TopBar } from "@/components/layout/top-bar"
import {
  headerValueItems,
  industries,
  performanceStructureItems,
  talentAcquisitionItems,
  executivePlacementItems,
} from "@/lib/types"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setExpandedSection(null)
  }, [pathname])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    setTimeout(() => {
      window.location.href = "/"
    }, 100)
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 shadow-sm",
          isScrolled ? "bg-background/95 backdrop-blur-md" : "bg-background",
        )}
      >
        {/* Top Utility Bar - hides on scroll to simplify */}
        <div
          className={cn(
            "transition-all duration-300 overflow-hidden",
            isScrolled ? "h-0 opacity-0" : "h-auto opacity-100",
          )}
        >
          <TopBar />
        </div>

        <div
          className={cn(
            "flex items-center justify-between gap-4 lg:gap-8 transition-all duration-300",
            isScrolled ? "py-4" : "py-8",
          )}
        >
          <div
            className="container mx-auto flex items-center justify-between w-full"
            style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}
          >
            <Logo onClick={handleLogoClick} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:gap-4 xl:gap-6 flex-nowrap items-center whitespace-nowrap">
              {/* Our Value Dropdown */}
              <div className="group relative">
                <Link
                  href="/about-us"
                  className="flex items-center gap-1 text-xs lg:text-sm font-bold uppercase tracking-wider text-black hover:text-primary/70 transition-colors py-4 whitespace-nowrap"
                >
                  Our Value
                </Link>
                <div className="absolute top-full left-0 w-64 bg-primary border border-white/10 shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2 flex flex-col">
                    {headerValueItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-6 py-2.5 text-sm text-white/90 hover:text-white hover:bg-primary/80 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="group relative">
                <Link
                  href="/education"
                  className="flex items-center gap-1 text-xs lg:text-sm font-bold uppercase tracking-wider text-black hover:text-primary/70 transition-colors py-4 whitespace-nowrap"
                >
                  Industries
                </Link>
                <div className="absolute top-full left-0 w-64 bg-primary border border-white/10 shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2 flex flex-col">
                    {industries.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-6 py-2.5 text-sm text-white/90 hover:text-white hover:bg-primary/80 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Structure Dropdown */}
              <div className="group relative">
                <Link
                  href="/leadership-succession-planning"
                  className="flex items-center gap-1 text-xs lg:text-sm font-bold uppercase tracking-wider text-black hover:text-primary/70 transition-colors py-4 whitespace-nowrap"
                >
                  Performance Structure
                </Link>
                <div className="absolute top-full left-0 w-80 bg-primary border border-white/10 shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2 flex flex-col">
                    {performanceStructureItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-6 py-2.5 text-sm text-white/90 hover:text-white hover:bg-primary/80 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Talent Acquisition Dropdown */}
              <div className="group relative">
                <Link
                  href="/acquisition"
                  className="flex items-center gap-1 text-xs lg:text-sm font-bold uppercase tracking-wider text-black hover:text-primary/70 transition-colors py-4 whitespace-nowrap"
                >
                  Talent Acquisition
                </Link>
                <div className="absolute top-full left-0 w-80 bg-primary border border-white/10 shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2 flex flex-col">
                    {talentAcquisitionItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-6 py-2.5 text-sm text-white/90 hover:text-white hover:bg-primary/80 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Executive Placement Dropdown */}
              <div className="group relative">
                <Link
                  href="/strategic-executive-placement"
                  className="flex items-center gap-1 text-xs lg:text-sm font-bold uppercase tracking-wider text-black hover:text-primary/70 transition-colors py-4 whitespace-nowrap"
                >
                  Executive Placement
                </Link>
                <div className="absolute top-full left-0 w-80 bg-primary border border-white/10 shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2 flex flex-col">
                    {executivePlacementItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-6 py-2.5 text-sm text-white/90 hover:text-white hover:bg-primary/80 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-primary hover:text-primary/70 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                // X icon when menu is open
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12M6 12l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon when menu is closed
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-border shadow-lg overflow-hidden"
            >
              <div className="container mx-auto px-8 py-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                <div className="border-b border-border/40">
                  <button
                    onClick={() => toggleSection("ourValue")}
                    className="w-full flex items-center justify-between py-4 text-left font-bold uppercase tracking-wider text-primary hover:text-primary/70 transition-colors"
                  >
                    <span>Our Value</span>
                    <svg
                      className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        expandedSection === "ourValue" ? "rotate-90" : "",
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {expandedSection === "ourValue" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-4 space-y-1">
                          {headerValueItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-2 text-sm text-foreground hover:text-primary hover:bg-muted px-3 rounded-sm transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-b border-border/40">
                  <button
                    onClick={() => toggleSection("industries")}
                    className="w-full flex items-center justify-between py-4 text-left font-bold uppercase tracking-wider text-primary hover:text-primary/70 transition-colors"
                  >
                    <span>Industries</span>
                    <svg
                      className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        expandedSection === "industries" ? "rotate-90" : "",
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {expandedSection === "industries" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-4 space-y-1">
                          {industries.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-2 text-sm text-foreground hover:text-primary hover:bg-muted px-3 rounded-sm transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-b border-border/40">
                  <button
                    onClick={() => toggleSection("performance")}
                    className="w-full flex items-center justify-between py-4 text-left font-bold uppercase tracking-wider text-primary hover:text-primary/70 transition-colors"
                  >
                    <span>Performance Structure</span>
                    <svg
                      className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        expandedSection === "performance" ? "rotate-90" : "",
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {expandedSection === "performance" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-4 space-y-1">
                          {performanceStructureItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-2 text-sm text-foreground hover:text-primary hover:bg-muted px-3 rounded-sm transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-b border-border/40">
                  <button
                    onClick={() => toggleSection("talent")}
                    className="w-full flex items-center justify-between py-4 text-left font-bold uppercase tracking-wider text-primary hover:text-primary/70 transition-colors"
                  >
                    <span>Talent Acquisition</span>
                    <svg
                      className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        expandedSection === "talent" ? "rotate-90" : "",
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {expandedSection === "talent" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-4 space-y-1">
                          {talentAcquisitionItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-2 text-sm text-foreground hover:text-primary hover:bg-muted px-3 rounded-sm transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-b border-border/40">
                  <button
                    onClick={() => toggleSection("executive")}
                    className="w-full flex items-center justify-between py-4 text-left font-bold uppercase tracking-wider text-primary hover:text-primary/70 transition-colors"
                  >
                    <span>Executive Placement</span>
                    <svg
                      className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        expandedSection === "executive" ? "rotate-90" : "",
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {expandedSection === "executive" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-4 space-y-1">
                          {executivePlacementItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-2 text-sm text-foreground hover:text-primary hover:bg-muted px-3 rounded-sm transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
