"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X, Maximize2, ZoomIn } from "lucide-react"
import { Button } from "../../text-field/button"

interface ImageSliderProps {
  images: {
    src: string
    title: string
    alt?: string
  }[]
  className?: string
}

export function ImageSlider({ images, className = "" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openLightbox = () => {
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return

      switch (e.key) {
        case "ArrowLeft":
          prevImage()
          break
        case "ArrowRight":
          nextImage()
          break
        case "Escape":
          closeLightbox()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isLightboxOpen])

  if (images.length === 0) return null

  return (
    <>
      {/* Regular Slider */}
      <div className={`relative group ${className}`}>
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={openLightbox}
          >
            <img
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt || images[currentIndex].title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />

            {/* Zoom Icon Overlay */}
            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                <ZoomIn className="w-12 h-12 text-white" />
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation()
                  prevImage()
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}
        </div>

        {/* Image Title */}
        <div className="text-center mt-4">
          <h3 className="text-lg font-medium text-gray-800">{images[currentIndex].title}</h3>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95">
          {/* Header Controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            {/* Image Counter */}
            <div className="text-white text-lg font-medium">
              {currentIndex + 1}/{images.length}
            </div>

            {/* Control Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-sm"
                onClick={() => {
                  if (document.fullscreenElement) {
                    document.exitFullscreen()
                  } else {
                    document.documentElement.requestFullscreen()
                  }
                }}
              >
                <Maximize2 className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-sm"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Main Image Container */}
          <div className="flex items-center justify-center h-full px-16 py-20">
            <div className="relative max-w-full max-h-full">
              <img
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt || images[currentIndex].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}

          {/* Image Title at Bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <h3 className="text-white text-xl font-medium text-center">{images[currentIndex].title}</h3>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeLightbox} />
        </div>
      )}
    </>
  )
}
