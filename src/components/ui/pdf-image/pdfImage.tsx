"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import styles from "@/components/ui/pdf-image/pdfImage.module.css"

export type ImageSize = "a4" | "a3" | "a5" | "large" | "medium" | "small" | "custom"

export interface PDFImageProps {
  title: string
  description: string | React.ReactNode
  pdfUrl: string
  pdfImageSrc: string
  pdfImageAlt?: string
  imagePosition?: "left" | "right"
  imageSize?: ImageSize
  customImageWidth?: number
  customImageHeight?: number
  className?: string
  downloadButtonText?: string
  onImageClick?: () => void
  onDownloadClick?: () => void
  enableScrollAnimation?: boolean
  animationThreshold?: number
}

const DownloadIcon = () => (
  <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
)

export const PDFImage: React.FC<PDFImageProps> = ({
  title,
  description,
  pdfUrl,
  pdfImageSrc,
  pdfImageAlt = "PDF Preview",
  imagePosition = "left",
  imageSize = "a4",
  customImageWidth,
  customImageHeight,
  className,
  downloadButtonText = "Téléchargez le PDF",
  onImageClick,
  onDownloadClick,
  enableScrollAnimation = true,
  animationThreshold = 0.2,
}) => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!enableScrollAnimation) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      {
        threshold: animationThreshold,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [enableScrollAnimation, animationThreshold, hasAnimated])

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick()
    } else {
      window.open(pdfUrl, "_blank", "noopener,noreferrer")
    }
  }

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onDownloadClick) {
      onDownloadClick()
    } else {
      window.open(pdfUrl, "_blank", "noopener,noreferrer")
    }
  }

  const getImageSizeClass = () => {
    switch (imageSize) {
      case "a4":
        return styles.sizeA4
      case "a3":
        return styles.sizeA3
      case "a5":
        return styles.sizeA5
      case "large":
        return styles.sizeLarge
      case "medium":
        return styles.sizeMedium
      case "small":
        return styles.sizeSmall
      case "custom":
        return styles.sizeCustom
      default:
        return styles.sizeA4
    }
  }

  const getCustomImageStyle = () => {
    if (imageSize === "custom" && customImageWidth && customImageHeight) {
      return {
        width: `${customImageWidth}px`,
        height: `${customImageHeight}px`,
      }
    }
    return {}
  }

  const getImageDimensions = () => {
    switch (imageSize) {
      case "a4":
        return { width: 297, height: 420 }
      case "a3":
        return { width: 420, height: 594 }
      case "a5":
        return { width: 210, height: 297 }
      case "large":
        return { width: 400, height: 300 }
      case "medium":
        return { width: 320, height: 240 }
      case "small":
        return { width: 240, height: 180 }
      case "custom":
        return { width: customImageWidth || 297, height: customImageHeight || 420 }
      default:
        return { width: 297, height: 420 }
    }
  }

  const imageDimensions = getImageDimensions()

  return (
    <section
      ref={sectionRef}
      className={cn(
        styles.pdfSection,
        imagePosition === "left" ? styles.imageLeft : styles.imageRight,
        isVisible && styles.visible,
        enableScrollAnimation && isVisible && styles.animateOnScroll,
        className,
      )}
    >
      {/* PDF Image */}
      <div
        className={cn(styles.imageContainer, getImageSizeClass())}
        onClick={handleImageClick}
        role="button"
        tabIndex={0}
        style={getCustomImageStyle()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleImageClick()
          }
        }}
      >
        <Image
          src={pdfImageSrc || "/placeholder.svg"}
          alt={pdfImageAlt}
          width={imageDimensions.width}
          height={imageDimensions.height}
          className={styles.pdfImage}
          priority
        />
      </div>

      {/* Content */}
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.description}>
          {typeof description === "string" ? <div dangerouslySetInnerHTML={{ __html: description }} /> : description}
        </div>

        <Link
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
          onClick={handleDownloadClick}
        >
          <DownloadIcon />
          {downloadButtonText}
        </Link>
      </div>
    </section>
  )
}

export default PDFImage
