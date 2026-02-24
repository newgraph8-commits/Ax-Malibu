"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const industries = [
  {
    name: "Sales",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=800&auto=format&fit=crop",
    href: "/sales",
  },
  {
    name: "Entertainment",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop",
    href: "/entertainment",
  },
  {
    name: "Law",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
    href: "/law",
  },
  {
    name: "Human Resource",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    href: "/human-resources",
  },
  {
    name: "C-Suite Personnel",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    href: "/personnel",
  },
  {
    name: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    href: "/technology",
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    href: "/education",
  },
  {
    name: "Finance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    href: "/finance",
  },
  {
    name: "Marketing",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=800&auto=format&fit=crop",
    href: "/marketing",
  },
  {
    name: "Health Care",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop",
    href: "/healthcare",
  },
]

export function IndustryGrid() {
  return (
    <section className="pt-16 pb-12 bg-transparent">
      <div
        className="container mx-auto"
        style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.name} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function IndustryCard({ industry, index }: { industry: (typeof industries)[0]; index: number }) {
  const [isLoading, setIsLoading] = useState(true)

  const content = (
    <>
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-sm bg-slate-200">
        <Image
          src={industry.image || "/placeholder.svg"}
          alt={industry.name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className={cn(
            "object-cover transition-all duration-700 ease-in-out",
            isLoading ? "scale-110 blur-sm grayscale" : "scale-100 blur-0 grayscale-0",
            "group-hover:scale-105",
          )}
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-300" />
      </div>
      <h3 className="text-center font-serif text-sm font-medium uppercase tracking-wider text-primary">
        {industry.name}
      </h3>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col group"
    >
      {industry.href ? (
        <Link href={industry.href} className="flex flex-col">
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.div>
  )
}
