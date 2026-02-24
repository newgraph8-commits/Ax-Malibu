"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { industries } from "@/lib/types"

export function IndustryTicker() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Create a triple list for infinite scrolling illusion
  const tripleIndustries = [...industries, ...industries, ...industries]

  // Initialize scroll position to the middle set
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current
      // Wait for layout to settle
      setTimeout(() => {
        if (scrollContainer) {
          const singleSetWidth = scrollContainer.scrollWidth / 3
          scrollContainer.scrollLeft = singleSetWidth
        }
      }, 100)
    }
  }, [])

  // Handle infinite scroll loop
  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const singleSetWidth = container.scrollWidth / 3

    // If we've scrolled into the first set (too far left), jump to middle
    if (container.scrollLeft < singleSetWidth / 2) {
      container.scrollLeft += singleSetWidth
    }
    // If we've scrolled into the third set (too far right), jump to middle
    else if (container.scrollLeft >= singleSetWidth * 2.5) {
      container.scrollLeft -= singleSetWidth
    }
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused || isDragging) return

    const scroll = () => {
      const item = scrollContainer.firstElementChild as HTMLElement
      if (!item) return
      const itemWidth = item.offsetWidth

      // Scroll to the next item index
      const currentScroll = scrollContainer.scrollLeft
      const targetScroll = Math.round(currentScroll / itemWidth) * itemWidth + itemWidth

      scrollContainer.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      })
    }

    const intervalId = setInterval(scroll, 5000)
    return () => clearInterval(intervalId)
  }, [isPaused, isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsPaused(true)
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
    // Disable snap while dragging to allow smooth free movement
    scrollRef.current.style.scrollSnapType = "none"
    scrollRef.current.style.scrollBehavior = "auto"
  }

  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp()
  }

  const handleMouseUp = () => {
    if (!scrollRef.current) return
    setIsPaused(false)
    setIsDragging(false)
    // Re-enable snap
    scrollRef.current.style.scrollSnapType = "x mandatory"
    scrollRef.current.style.scrollBehavior = "smooth"
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section className="bg-slate-100 w-full h-24 flex items-center justify-center overflow-hidden border-t border-slate-200 select-none">
      <div className="max-w-7xl mx-auto w-full h-full px-4 md:px-12 flex items-center">
        <div
          ref={scrollRef}
          className="flex items-center w-full h-full overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {tripleIndustries.map((industry, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/3 lg:w-1/5 h-full flex items-center justify-center px-4 rounded-lg snap-start"
            >
              <span className="text-primary font-serif text-base md:text-lg font-bold uppercase tracking-wider text-center whitespace-nowrap pointer-events-none">
                {industry.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
