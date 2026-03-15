"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  light?: boolean
  className?: string
  iconOnly?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export function Logo({ light = false, className, iconOnly = false, onClick }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group flex-shrink-0", className)} onClick={onClick}>
      <div className="relative w-8 h-8 flex-shrink-0">
        <Image
          src="/images/ax-arctic-logo.png"
          alt="Ax Malibu Logo"
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Logotype */}
      {!iconOnly && (
        <div className="flex flex-col justify-center flex-shrink-0">
          <span
            className={cn(
              "font-serif text-xl font-bold tracking-tight leading-none whitespace-nowrap",
              light ? "text-white" : "text-primary",
            )}
          >
            Ax Malibu
          </span>
          <div className={cn("h-[1px] w-full my-1", light ? "bg-white/30" : "bg-primary/20")} />
          <span
            className={cn(
              "text-[10px] uppercase tracking-widest text-center whitespace-nowrap",
              light ? "text-gray-300" : "text-muted-foreground",
            )}
          >
            Executive Search
          </span>
        </div>
      )}
    </Link>
  )
}
