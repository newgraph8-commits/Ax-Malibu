"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function CallbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section id="callback-form" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -skew-x-12 translate-x-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/20 -skew-x-12 -translate-x-20" />

      <div
        className="container mx-auto relative z-10"
        style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Form */}
          <div className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left border border-primary/10 p-8 md:p-12 bg-primary shadow-lg h-full"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Connect With Us</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Would you like to connect with one of our expert recruiters by phone? Share your details and we’ll
                  reach out. You’re also welcome to contact us by email if that’s more convenient.
                </p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif text-white">Callback Request Received</h3>
                  <p className="text-white/80">We will contact you shortly to schedule your consultation.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm font-medium text-white underline underline-offset-4 hover:text-white/80 transition-colors"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-white/70">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        className="w-full bg-white border border-transparent focus:border-white focus:ring-1 focus:ring-white/20 p-3 text-sm outline-none transition-all rounded-sm text-primary placeholder:text-muted-foreground"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-white/70">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        className="w-full bg-white border border-transparent focus:border-white focus:ring-1 focus:ring-white/20 p-3 text-sm outline-none transition-all rounded-sm text-primary placeholder:text-muted-foreground"
                        placeholder="Business Email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-white/70">
                        Phone{" "}
                        <span className="text-white/40 font-normal lowercase tracking-normal ml-1">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full bg-white border border-transparent focus:border-white focus:ring-1 focus:ring-white/20 p-3 text-sm outline-none transition-all rounded-sm text-primary placeholder:text-muted-foreground"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "bg-gray-400 text-white w-full py-4 uppercase tracking-widest text-xs font-bold transition-all hover:bg-gray-500 flex items-center justify-center gap-3",
                        isSubmitting && "opacity-80 cursor-wait",
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Callback
                          <Send className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          {/* Right Column: News & Insights */}
          <div className="flex flex-col justify-between h-full pb-8 md:pb-12">
            <div>
              <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">
                News & Insights
              </span>
              <div className="relative aspect-video bg-muted rounded-sm overflow-hidden mb-6 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                  alt="Ax Tokyo Insights"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Replaced icon grid with skinny divider lines above and below the text */}
            <div className="space-y-6">
              <div className="w-full h-px bg-border/60" />
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ax Malibu delivers trusted expertise in the often overlooked work of building corporate teams. We
                support executive, director, and staff-level hiring across finance and accounting, IT services, sales,
                marketing, manufacturing, engineering, human resources, corporate communications, community relations,
                media relations, and administrative roles.
              </p>
              <div className="w-full h-px bg-border/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
