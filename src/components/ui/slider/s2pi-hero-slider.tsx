"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../text-field/button"
// import { Button } from "@/components/ui/button"

interface SlideData {
  id: number
  image: string
  alt: string
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1200&text=Construction+Materials+1",
    alt: "Construction materials and building solutions",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200&text=Insulation+Systems+2",
    alt: "Thermal and acoustic insulation systems",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200&text=Fire+Protection+3",
    alt: "Fire protection and safety solutions",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=600&width=1200&text=Building+Solutions+4",
    alt: "Professional building solutions",
  },
]

export function S2PIHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-100">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-20" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-800 rounded-full shadow-lg"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-800 rounded-full shadow-lg"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dot Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/60 hover:bg-white/80"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}
