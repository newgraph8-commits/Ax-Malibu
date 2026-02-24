"use client"

import type React from "react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { useState } from "react"
import { Mail, Phone, MapPin, Loader2, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <PageHeader
          title="Contact Ax South"
          subtitle="Connect with our global team to discuss your executive search needs or career aspirations."
          backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-serif text-primary mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you are looking to build your leadership team or are seeking your next executive role, our
                    consultants are ready to assist you with discretion and strategic insight.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-secondary/50 rounded-sm flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Call Us</h3>
                      <p className="text-muted-foreground text-lg">305-914-5000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-secondary/50 rounded-sm flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Email Us</h3>
                      <p className="text-muted-foreground text-lg">contact@axsouth.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-secondary/50 rounded-sm flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
                        Global Headquarters
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        1000 Innovation Drive
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 md:p-12 shadow-xl border border-border/40 rounded-sm">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-serif text-primary">Message Sent</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting Ax South. A member of our team will respond to your inquiry shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-sm font-bold uppercase tracking-widest text-primary underline underline-offset-4 hover:text-accent transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          First Name
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-secondary/30 border border-border p-3 text-sm focus:border-primary outline-none rounded-sm transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Last Name
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-secondary/30 border border-border p-3 text-sm focus:border-primary outline-none rounded-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Work Email
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full bg-secondary/30 border border-border p-3 text-sm focus:border-primary outline-none rounded-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        className="w-full bg-secondary/30 border border-border p-3 text-sm focus:border-primary outline-none rounded-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-secondary/30 border border-border p-3 text-sm focus:border-primary outline-none rounded-sm transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-navy-light transition-colors flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
