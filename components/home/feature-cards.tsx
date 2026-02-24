"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const features = [
  {
    title: "THE AX ARCTIC FRAMEWORK",
    description:
      "In today's rapidly evolving digital landscape, where organizations are expected to make swift, data-driven decisions and convert complex information into sustainable strategic direction, Ax Arctic has emerged as a leading force in the executive search industry.",
    image: "/images/snowjet.jpeg",
  },
  {
    title: "PERFORMANCE FOCUSED",
    description:
      "Every Ax Arctic solution is designed to achieve the strongest possible client outcome, ensuring leadership strength, strategic alignment, and cohesive team direction.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
  },
  {
    title: "MARKET LEADERSHIP ADVANTAGE",
    description:
      "To strengthen organizational performance and unlock long-term potential, many companies rely on the specialized insight and support that we provide. For the executive search outcomes that enable such progress, contact Ax Arctic.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
  },
]

export function FeatureCards() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-background border border-border/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500" />
              </div>

              <div className="p-6 xl:p-8 flex flex-col flex-grow">
                <h3 className="text-sm xl:text-base font-bold text-primary mb-4 font-serif flex items-center justify-between group-hover:text-navy-light transition-colors whitespace-nowrap tracking-tight">
                  {feature.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent ml-2 flex-shrink-0" />
                </h3>
                <div className="w-12 h-[1px] bg-accent mb-6 group-hover:w-full transition-all duration-500" />
                <p className="text-muted-foreground leading-relaxed text-sm flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
