import { PageHeader } from "@/components/ui/page-header"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import {
  ArrowRight,
  Clapperboard,
  Banknote,
  HeartPulse,
  Users2,
  Scale,
  Megaphone,
  Briefcase,
  UserCheck,
  LineChart,
  Cpu,
} from "lucide-react"

const industriesList = [
  {
    title: "Education",
    icon: Users2,
    href: "/industries/education",
    desc: "Transforming organizational capability through strategic education leadership.",
  },
  {
    title: "Entertainment",
    icon: Clapperboard,
    href: "/industries/entertainment",
    desc: "Visionary leaders for a rapidly evolving digital landscape.",
  },
  {
    title: "Finance",
    icon: Banknote,
    href: "/industries/finance",
    desc: "Secure, strategic leadership for complex financial markets.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    href: "/industries/healthcare",
    desc: "Innovators driving patient outcomes and operational excellence.",
  },
  {
    title: "Human Resources",
    icon: UserCheck,
    href: "/industries/human-resources",
    desc: "CHROs and talent leaders shaping organizational culture.",
  },
  {
    title: "Law",
    icon: Scale,
    href: "/industries/law",
    desc: "General Counsel and legal partners navigating regulatory complexity.",
  },
  {
    title: "Personnel",
    icon: Briefcase,
    href: "/industries/personnel",
    desc: "Strategic staffing and workforce solution leaders.",
  },
  {
    title: "Sales",
    icon: LineChart,
    href: "/industries/sales",
    desc: "Revenue leaders driving market expansion and growth.",
  },
  {
    title: "Technology",
    icon: Cpu,
    href: "/industries/technology",
    desc: "CTOs and CIOs leading digital acceleration.",
  },
  {
    title: "Marketing",
    icon: Megaphone,
    href: "/industries/marketing",
    desc: "CMOs driving brand growth and digital transformation.",
  },
  {
    title: "Talent Acquisition",
    icon: UserCheck,
    href: "/industries/talent-acquisition",
    desc: "Heads of TA building world-class recruitment functions.",
  },
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <PageHeader
          title="Industry Expertise"
          subtitle="Specialized knowledge across key sectors enables us to identify leaders who understand your specific challenges and opportunities."
          backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Deep Sector Specialization</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our consultants bring deep industry experience, allowing them to understand the nuances of your market
                and identify leaders who can drive immediate impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industriesList.map((industry, index) => (
                <Link
                  key={index}
                  href={industry.href}
                  className="group bg-white border border-border/60 p-8 rounded-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="w-12 h-12 bg-secondary/50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <industry.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-navy-light transition-colors">
                    {industry.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">{industry.desc}</p>

                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
