"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2, ZoomIn } from "lucide-react"
import { Button } from "../../text-field/button"
import styles from "./imageSlider.module.css"

interface ImageSliderProps {
  images: { src: string; title: string; alt?: string }[]
  className?: string
  rounded?: boolean | number
  height?: number | string
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
}

export function ImageSlider({
  images,
  className = "",
  rounded = true,
  height = 492,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setTimeout(() => setIsTransitioning(false), 500) // Match CSS transition duration
  }

  const prevImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setTimeout(() => setIsTransitioning(false), 500) // Match CSS transition duration
  }

  const goToImage = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const openLightbox = () => setIsLightboxOpen(true)
  const closeLightbox = () => {
    setIsLightboxOpen(false)
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }
  
  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen(); 
      setIsFullscreen(false)
    } else {
      document.documentElement.requestFullscreen(); 
      setIsFullscreen(true)
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return

    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextImage()
      }
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, images.length, isTransitioning])

  if (images.length === 0) return null

  const radius = typeof rounded === 'number' ? `${rounded}px` : rounded ? '8px' : '0px'
  const heightValue = typeof height === 'number' ? `${height}px` : height

  // Calculate positions for continuous sliding
  const getSlidePosition = (index: number) => {
    const offset = index - currentIndex
    return `${offset * 100}%`
  }

  return (
    <>
      {/* Regular Slider */}
      <div 
        className={`relative group ${styles.wrapper} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* image container */}
        <div
          className={styles.imageContainer}
          style={{
            ['--slider-radius' as any]: radius,
            ['--slider-height' as any]: heightValue,
          }}
        >
          <div
            className={styles.clickArea}
            onClick={openLightbox}
          >
            <div className={styles.track}>
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image.src} 
                  alt={image.alt || image.title} 
                  className={styles.slide}
                  style={{
                    transform: `translateX(${getSlidePosition(index)})`,
                  }}
                />
              ))}
            </div>
            
            {/* Zoom overlay with plus icon */}
            <div className={styles.zoomOverlay}>
              <div className={styles.zoomIcon}>
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* arrows - visible on hover or always on mobile */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className={`${styles.arrow} ${styles.arrowLeft} ${isHovered ? styles.arrowVisible : ''}`}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`${styles.arrow} ${styles.arrowRight} ${isHovered ? styles.arrowVisible : ''}`}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              disabled={isTransitioning}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}

        {/* Navigation dots - only show if showDots is true */}
        {images.length > 1 && showDots && (
          <div className={styles.dotsContainer}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                onClick={() => goToImage(index)}
                disabled={isTransitioning}
              />
            ))}
          </div>
        )}

        {/* title */}
        <div className={styles.titleWrap}>
          <h3 className={styles.title}>{images[currentIndex].title}</h3>
        </div>
      </div>

      {/* Lightbox Modal (unchanged) */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh', margin: 0, padding: 0, zIndex: 99999 }}
        >
          <div className="absolute top-0 left-0 right-0 h-16 bg-black bg-opacity-80 flex justify-between items-center px-6 z-10">
            <div className="text-white text-lg font-medium">
              {currentIndex + 1}/{images.length}
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-20 rounded-sm transition-colors" onClick={toggleFullscreen} title={isFullscreen ? "Exit fullscreen (f)" : "Fullscreen (f)"}>
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-20 rounded-sm transition-colors" onClick={closeLightbox} title="Close (Esc)">
                <X className="w-6 h-6 stroke-2" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center h-full w-full px-16" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <div className="relative max-w-full max-h-full">
              <img
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt || images[currentIndex].title}
                className="max-w-full max-h-full object-contain"
                style={{ maxWidth: 'calc(100vw - 8rem)', maxHeight: 'calc(100vh - 8rem)' }}
              />
            </div>
          </div>

          {images.length > 1 && (
            <>
              <Button variant="ghost" size="icon" className="absolute left-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-sm w-12 h-12 transition-all z-20" onClick={() => setCurrentIndex((p) => (p - 1 + images.length) % images.length)} title="Previous image (←)">
                <ChevronLeft className="w-7 h-7 stroke-2" />
              </Button>
              <Button variant="ghost" size="icon" className="absolute right-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-sm w-12 h-12 transition-all z-20" onClick={() => setCurrentIndex((p) => (p + 1) % images.length)} title="Next image (→)">
                <ChevronRight className="w-7 h-7 stroke-2" />
              </Button>
            </>
          )}

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-black bg-opacity-80 flex justify-center items-center px-6 z-10">
            <h3 className="text-white text-xl font-medium text-center">{images[currentIndex].title}</h3>
          </div>

          <div className="absolute inset-0" onClick={closeLightbox} style={{ cursor: 'pointer', zIndex: 1 }} />
        </div>
      )}
    </>
  )
}