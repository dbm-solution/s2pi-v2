"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2, ZoomIn } from "lucide-react"
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
  const [isFullscreen, setIsFullscreen] = useState(false)

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
    // Exit fullscreen when closing lightbox
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    } else {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    }
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
        case "f":
        case "F":
          toggleFullscreen()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen])

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

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
        <div 
          className="fixed inset-0 bg-black bg-opacity-40"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            margin: 0,
            padding: 0,
            zIndex: 99999
          }}
        >
          {/* Top Dark Band */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-black bg-opacity-80 flex justify-between items-center px-6 z-10">
            {/* Image Counter on the left */}
            <div className="text-white text-lg font-medium">
              {currentIndex + 1}/{images.length}
            </div>

            {/* Control Buttons on the right */}
            <div className="flex items-center space-x-3">
              {/* YouTube-style Fullscreen Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-sm transition-colors"
                onClick={toggleFullscreen}
                title={isFullscreen ? "Exit fullscreen (f)" : "Fullscreen (f)"}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-5 h-5" />
                ) : (
                  <Maximize2 className="w-5 h-5" />
                )}
              </Button>

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-sm transition-colors"
                onClick={closeLightbox}
                title="Close (Esc)"
              >
                <X className="w-6 h-6 stroke-2" />
              </Button>
            </div>
          </div>

          {/* Main Image Container */}
          <div className="flex items-center justify-center h-full w-full px-16" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <div className="relative max-w-full max-h-full">
              <img
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt || images[currentIndex].title}
                className="max-w-full max-h-full object-contain"
                style={{
                  maxWidth: 'calc(100vw - 8rem)',
                  maxHeight: 'calc(100vh - 8rem)'
                }}
              />
            </div>
          </div>

          {/* Navigation Arrows - Updated style */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-sm w-12 h-12 transition-all z-20"
                onClick={prevImage}
                title="Previous image (←)"
              >
                <ChevronLeft className="w-7 h-7 stroke-2" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-sm w-12 h-12 transition-all z-20"
                onClick={nextImage}
                title="Next image (→)"
              >
                <ChevronRight className="w-7 h-7 stroke-2" />
              </Button>
            </>
          )}

          {/* Bottom Dark Band */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-black bg-opacity-80 flex justify-center items-center px-6 z-10">
            {/* Image Title in the center */}
            <h3 className="text-white text-xl font-medium text-center">
              {images[currentIndex].title}
            </h3>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0"
            onClick={closeLightbox}
            style={{ 
              cursor: 'pointer',
              zIndex: 1
            }}
          />
        </div>
      )}
    </>
  )
}
