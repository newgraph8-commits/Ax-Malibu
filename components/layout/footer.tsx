"use client"

import Link from "next/link"
import { Phone, ChevronRight } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { footerValueItems, industries } from "@/lib/types"

export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 mt-0">
      <div className="container mx-auto py-16 lg:py-24" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-8">
            <div>
              {/* Used the light variant of the Logo instead of CSS filters to fix rendering issues */}
              <Logo light />
            </div>
            <p className="text-white leading-relaxed max-w-md">
              Ax Malibu prioritizes an active-listening approach with clients, striving to fully understand their ideal
              vision for every critical role.
            </p>
            <div className="pt-4">
              <div className="text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6" />
                800-222-7205
              </div>
            </div>
            <div className="flex gap-6 text-xs text-white uppercase tracking-widest pt-8 items-center">
              <Link href="/termsofservice" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <div className="h-3 w-px bg-gray-600" />
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-base uppercase tracking-widest mb-6 text-white border-b border-white/20 pb-2 inline-block">
                Our Value
              </h4>
              <ul className="space-y-3">
                {footerValueItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-white transition-all duration-200 flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 text-white/60 group-hover:text-white transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base uppercase tracking-widest mb-6 text-white border-b border-white/20 pb-2 inline-block">
                Industries
              </h4>
              <ul className="space-y-3">
                {industries.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-white transition-all duration-200 flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 text-white/60 group-hover:text-white transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: About */}
          <div>
            <h4 className="font-bold text-base uppercase tracking-widest mb-6 text-white border-b border-white/20 pb-2 inline-block">
              What Sets Us Apart
            </h4>
            <div className="space-y-4 text-white leading-relaxed">
              <p>
                The Ax Malibu advantage lies in our global leadership in executive recruitment, spanning high-impact
                sectors including finance, technology, entertainment, law, healthcare, human resources, and education.
              </p>
              <p>
                We also specialize in conducting strategic searches for blue-chip executives and top-tier C-suite
                talent, ensuring our clients secure the leaders who drive lasting success.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-6" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
          <p className="text-white text-center text-sm">
            Copyright © 2026 Ax Malibu, LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
