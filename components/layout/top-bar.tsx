import Link from "next/link"
import { Phone } from "lucide-react"
import { topBarLinks } from "@/lib/types"

export function TopBar() {
  return (
    <div className="w-full bg-primary border-b border-white/10">
      {/* Mobile Layout: Two rows, centered */}
      <div className="flex lg:hidden flex-col gap-2 py-2 text-[10px] font-medium tracking-wide uppercase">
        <div className="flex items-center justify-center gap-3">
          {topBarLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          {topBarLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 text-white">
            <div className="bg-white/10 rounded-full p-1">
              <Phone className="w-3 h-3" />
            </div>
            <span className="whitespace-nowrap">CALL 305-914-5000</span>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Split into two groups to mirror header layout */}
      <div className="hidden lg:block min-h-10 h-12">
        <div className="container mx-auto h-full" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
          <div className="flex items-center justify-between h-full">
            {/* Left group: Navigation links */}
            <nav className="flex items-center lg:gap-4 xl:gap-6 text-xs lg:text-sm font-medium tracking-wide uppercase">
              {topBarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right group: Phone number */}
            <div className="flex items-center gap-2 text-white whitespace-nowrap text-xs lg:text-sm">
              <div className="bg-white/10 rounded-full p-1">
                <Phone className="w-3 h-3" />
              </div>
              <span>CALL 800-222-7205</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
