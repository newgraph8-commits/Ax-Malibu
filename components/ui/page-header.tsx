"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  size?: "default" | "large"
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  size = "default",
}: PageHeaderProps) {
  return (
    <div
      className={`relative w-full ${size === "large" ? "h-[60vh]" : "h-[40vh]"} bg-navy overflow-hidden flex items-center`}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/60 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent z-10" />
        <div
          className="w-full h-full bg-cover bg-center animate-subtle-zoom"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">{title}</h1>
          {subtitle && <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>
    </div>
  )
}
