"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronRight } from "lucide-react"

const SLIDES = [
  {
    id: 1,
    type: "video",
    poster: "", // Removing poster to prevent mismatch with new video
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%286%29-ueXFakrWn5EUiQM96812VzwkwU5aUK.mp4", // Using direct URL for reliable playback
    opacity: "opacity-60", // Added opacity control per slide
    blur: "blur-[2px]", // Added blur control per slide
    playbackRate: 1.0, // Default speed
  },
  {
    id: 2,
    type: "video",
    poster: "", // Removed poster for 2nd slide to prevent ghosting
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2811%29-N0NkDBHSpDvmQ4udDmTtXzZYdt8K09.mp4", // Updated to use the new video URL directly to bypass upload issues
    opacity: "opacity-100", // Full opacity for 2nd slide
    blur: "backdrop-blur-2xl", // Increased blur from backdrop-blur-lg to backdrop-blur-2xl for much stronger blur effect
    playbackRate: 1.0, // Default speed
  },
  {
    id: 3,
    type: "video",
    poster: "", // no poster to prevent ghosting
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2810%29-m5ilkEcDEWPkZStKQXPLEfKwXb7GY5.mp4", // Updated to use the new video URL directly to ensure reliable playback and bypass upload issues
    opacity: "opacity-100", // full opacity
    blur: "blur-0", // no blur
    playbackRate: 0.75, // Slowed down to 75% speed
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextSlide, setNextSlide] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showText, setShowText] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [isManualPaused, setIsManualPaused] = useState(false)
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isManualPaused && !isTransitioning) {
      const timer = setInterval(() => {
        handleSlideChange((currentSlide + 1) % SLIDES.length)
      }, 12000)
      return () => clearInterval(timer)
    }
  }, [isManualPaused, isTransitioning, currentSlide])

  const handleSlideChange = (targetSlide: number) => {
    if (isTransitioning || targetSlide === currentSlide) return

    setShowText(false)
    setIsTransitioning(true)
    setNextSlide(targetSlide)

    setTimeout(() => {
      setCurrentSlide(targetSlide)
      setNextSlide(null)
      setIsTransitioning(false)
      setTimeout(() => {
        setShowText(true)
      }, 300)
    }, 900)
  }

  const handleManualInteraction = () => {
    setIsManualPaused(true)
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = null
    }
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = null
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (isManualPaused) {
      resumeTimerRef.current = setTimeout(() => {
        setIsManualPaused(false)
      }, 20000)
    }
  }

  const handleNextSlide = () => {
    handleManualInteraction()
    handleSlideChange((currentSlide + 1) % SLIDES.length)
  }

  const handlePrevSlide = () => {
    handleManualInteraction()
    handleSlideChange((currentSlide - 1 + SLIDES.length) % SLIDES.length)
  }

  return (
    <section
      className="relative h-[80vh] min-h-[700px] w-full overflow-hidden bg-navy group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-navy/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-transparent" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="relative w-full h-full object-cover scale-105 opacity-60 blur-[2px]"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%286%29-ueXFakrWn5EUiQM96812VzwkwU5aUK.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 container mx-auto h-full" style={{ paddingInline: "clamp(1rem, 4vw, 3rem)" }}>
        <div className="relative w-full h-full flex flex-col justify-center items-start text-left">
          <div className="max-w-[900px] space-y-6 mt-32">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight uppercase drop-shadow-lg">
              The Precision-Driven <br />
              Executive Search Firm
            </h1>

            <p className="max-w-3xl text-xs md:text-sm font-bold tracking-wider text-white/90 uppercase leading-relaxed drop-shadow-md">
              As a global leader in executive recruitment, we support organizations in key sectors—finance, technology,
              entertainment, law, healthcare, HR, and education—with strategic, high-impact talent placements.
            </p>

            <div className="pt-16">
              <div className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-xs md:text-sm font-bold tracking-[0.1em] uppercase shadow-lg">
                Your Connection to Leadership
                <ChevronRight className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
