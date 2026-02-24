import { Logo } from "@/components/ui/logo"
import Image from "next/image"

export function BrandBanner() {
  return (
    <section className="relative h-[350px] w-full overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/corporate-handshake-closeup-dark-blue.jpg"
          alt="Corporate partnership"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/90" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 container mx-auto h-full flex flex-col justify-center"
        style={{ paddingLeft: "clamp(1rem, 4vw, 3rem)", paddingRight: "clamp(1rem, 4vw, 3rem)" }}
      >
        {/* Logo Icon Only */}
        <div className="w-full flex justify-center mb-6">
          <div className="transform scale-150">
            <Logo light iconOnly />
          </div>
        </div>

        {/* Quote Text */}
        <p className="text-white/90 font-serif text-xl md:text-2xl w-full leading-relaxed italic tracking-wide text-justify [text-align-last:center]">
          Ax Arctic prioritizes understanding our clients' goals, taking the time to grasp their ideal outcome for every
          critical position.
        </p>
      </div>
    </section>
  )
}
