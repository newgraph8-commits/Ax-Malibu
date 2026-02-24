"use client"

import type React from "react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Phone, Mail, Upload } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function GetInTouchPage() {
  const [fileName, setFileName] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitStatus("success")
    setIsSubmitting(false)

    // Reset form after successful submission
    const form = e.currentTarget
    form.reset()
    setFileName("")

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus("idle")
    }, 5000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-16 bg-background">
        <div
          className="container mx-auto"
          style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
        >
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-12">Get In Touch</h1>

          {/* Two Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Phone Card */}
            <div className="border-2 border-border p-8 flex flex-col items-center text-center space-y-4">
              <Phone className="w-12 h-12 text-primary" />
              <h2 className="text-lg font-bold text-primary">Phone Number</h2>
              <p className="text-muted-foreground">800-222-7205</p>
            </div>

            {/* Email Card */}
            <div className="border-2 border-border p-8 flex flex-col items-center text-center space-y-4">
              <Mail className="w-12 h-12 text-primary" />
              <h2 className="text-lg font-bold text-primary">Email</h2>
              <p className="text-muted-foreground">Fill out the Form below or give us a call</p>
            </div>
          </div>

          {/* Photo and Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Photo */}
            <div className="relative h-[500px] lg:h-auto">
              <Image
                src="/professional-business-office-contact-meeting.jpg"
                alt="Contact us"
                fill
                className="object-cover"
              />
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif text-primary mb-8">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input
                      required
                      type="text"
                      className="w-full border border-border p-3 text-sm focus:border-primary outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input
                      required
                      type="text"
                      className="w-full border border-border p-3 text-sm focus:border-primary outline-none"
                    />
                  </div>
                </div>

                {/* When Can You Start */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">When can you start?</label>
                  <select
                    required
                    className="w-full border border-border p-3 text-sm focus:border-primary outline-none bg-white"
                  >
                    <option value="">Select a timeframe</option>
                    <option value="asap">ASAP</option>
                    <option value="within-2-weeks">Within 2 weeks</option>
                    <option value="2-weeks-to-month">2 weeks to a month</option>
                    <option value="more-than-year">More than a year</option>
                  </select>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full border border-border p-3 text-sm focus:border-primary outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <input
                    required
                    type="tel"
                    className="w-full border border-border p-3 text-sm focus:border-primary outline-none"
                  />
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Submit Your Resume</label>
                  <div className="border-2 border-dashed border-border p-8 text-center hover:border-primary transition-colors">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                      {fileName ? (
                        <p className="text-sm text-foreground font-medium">{fileName}</p>
                      ) : (
                        <>
                          <p className="text-sm text-muted-foreground mb-2">
                            <span className="text-primary font-medium">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX (max. 10MB)</p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Query to Ax Arctic"}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm text-center">
                    Thank you for your submission! We'll be in touch soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm text-center">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
