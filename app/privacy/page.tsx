import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Ax Arctic",
  description: "Privacy Policy for Ax Arctic executive search services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-white">
        <div
          className="container mx-auto pt-48 pb-16 lg:pt-56 lg:pb-24"
          style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-gray-600 mb-12">Last Updated: November 23, 2025</p>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700 leading-relaxed">
              <section>
                <p className="text-lg">
                  Ax Arctic ("we," "our," or "us") is committed to protecting your personal information and maintaining
                  transparency regarding how your data is collected, used, and safeguarded. This Privacy Policy explains
                  how we handle information when you interact with our website, communication systems, and SMS
                  notification services.
                </p>
                <p className="mt-4">By accessing our services, you agree to the terms outlined below.</p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1.1 Information You Provide</h3>
                <p>We may collect personal information you voluntarily submit, including:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Name, email address, phone number, and other contact details</li>
                  <li>Information shared during inquiries, appointments, or recruitment processes</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  1.2 Information Collected Automatically
                </h3>
                <p>When you access our website or digital platforms, we may gather:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Device and browser information</li>
                  <li>IP address and approximate location</li>
                  <li>Pages visited, interactions, and usage patterns</li>
                  <li>Cookies or similar tracking technologies (See Section 7 for cookie details.)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1.3 SMS Program Information</h3>
                <p>If you opt into our SMS notifications, we collect:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Your mobile number</li>
                  <li>Message history related to reminders, confirmations, and opt-in/opt-out actions</li>
                </ul>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
                <p>We may use your information to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Provide recruitment, placement, and consulting services</li>
                  <li>Respond to inquiries and deliver requested communications</li>
                  <li>Improve site performance, features, and user experience</li>
                  <li>Maintain operational security and service functionality</li>
                  <li>Send appointment reminders and confirmations via SMS</li>
                  <li>Fulfill legal, regulatory, or compliance obligations</li>
                </ul>
                <p className="mt-4 font-semibold">We do not sell your personal information.</p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl font-bold text-primary mb-4">3. SMS Messaging Terms</h2>
                <p>Our SMS notifications are designed to keep you updated with reminders and confirmations.</p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 Opt Out Instructions</h3>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>You may unsubscribe at any time by texting "STOP" to the provided shortcode.</li>
                  <li>We will send a confirmation message, after which SMS notifications will cease.</li>
                  <li>You may re-enroll at any time using the original sign-up process.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Assistance</h3>
                <p>
                  For support related to SMS messaging, contact us at:{" "}
                  <a href="mailto:info@axarctic.com" className="text-[#FF2B2B] hover:underline">
                    info@axarctic.com
                  </a>
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.3 Carrier & Fee Disclosure</h3>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Message and data rates may apply depending on your wireless plan.</li>
                  <li>Carriers are not responsible for delayed or undelivered messages.</li>
                </ul>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl font-bold text-primary mb-4">4. How We Share Information</h2>
                <p>We may share personal information with:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Service providers assisting with hosting, analytics, or communication systems</li>
                  <li>Internal staff involved in recruitment or consulting processes</li>
                  <li>Third parties when required to comply with legal obligations</li>
                </ul>
                <p className="mt-4">We do not share information with advertisers or unrelated third parties.</p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl font-bold text-primary mb-4">5. Data Security</h2>
                <p>
                  We implement administrative, technical, and physical safeguards to protect your information. While we
                  strive to maintain strong security, no digital platform is completely immune to risks.
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights & Choices</h2>
                <p>Depending on your location, you may have rights to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Access or update your personal information</li>
                  <li>Request deletion of certain data</li>
                  <li>Opt out of SMS or email communications</li>
                  <li>Limit certain types of data processing</li>
                </ul>
                <p className="mt-4">
                  To make a request, contact us at:{" "}
                  <a href="mailto:info@axarctic.com" className="text-[#FF2B2B] hover:underline">
                    info@axarctic.com
                  </a>
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl font-bold text-primary mb-4">7. Cookies & Tracking Technologies</h2>
                <p>
                  We use cookies and similar tools to improve functionality, analyze usage, and enhance user experience.
                  You may disable cookies through your browser settings, but doing so may limit site functionality.
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl font-bold text-primary mb-4">8. Children's Privacy</h2>
                <p>
                  Ax Arctic does not knowingly collect personal information from individuals under the age of 16. Our
                  services are intended for adults and professional users.
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl font-bold text-primary mb-4">9. Updates to This Policy</h2>
                <p>
                  We may revise this Privacy Policy from time to time. Any updates will be posted with the revised "Last
                  Updated" date. Your continued use of our services signifies acceptance of these changes.
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Information</h2>
                <p>For privacy inquiries, please contact:</p>
                <div className="mt-4 space-y-2">
                  <p className="font-semibold">Ax Arctic Privacy Office</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:info@axarctic.com" className="text-[#FF2B2B] hover:underline">
                      info@axarctic.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
