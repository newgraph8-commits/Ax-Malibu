import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Ax Arctic",
  description: "Terms of Service for Ax Arctic executive search services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-white">
        <div
          className="container mx-auto pt-48 pb-16 lg:pt-56 lg:pb-24"
          style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-tight">Terms of Service</h1>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700 leading-relaxed">
              <section>
                <p className="text-lg">
                  Ax Arctic has rapidly positioned itself as a leading force in executive search, delivering focused
                  service and exceptional opportunities to an elite portfolio of clients.
                </p>
              </section>

              <section>
                <p>
                  We take a highly engaged, day-to-day approach to leadership placement, leveraging proprietary
                  research, curated industry insights, and access to exclusive global networks. In many cases, we can
                  directly connect a prospective division leader or senior executive with top-tier decision-makers in a
                  single call.
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl font-bold text-primary mb-4">SMS Notifications</h2>
                <p>
                  Our program provides appointment reminder and confirmation texts to help you stay organized and on
                  schedule. You may cancel SMS notifications at any time by replying "STOP" to the designated shortcode.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Unsubscribing from SMS</h2>
                <p>
                  After texting "STOP," you will receive a confirmation message verifying that you have been
                  unsubscribed. Once confirmed, you will no longer receive text messages from us. If you wish to rejoin
                  later, simply enroll again through the standard sign-up process and messaging will resume.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Support</h2>
                <p>
                  If you encounter any issues with our messaging system, please contact us directly at{" "}
                  <a href="mailto:info@axarctic.com" className="text-[#FF2B2B] hover:underline">
                    info@axarctic.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Carrier Information</h2>
                <p>Carriers are not responsible for delayed or undelivered messages.</p>
                <p className="mt-4">
                  Message and data rates may apply for both outgoing and incoming texts. You will receive reminder and
                  confirmation messages according to your appointment schedule. For questions regarding your text or
                  data plan, contact your wireless provider.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Privacy Policy</h2>
                <p>
                  For privacy-related questions, please refer to our{" "}
                  <a href="/privacy" className="text-[#FF2B2B] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
