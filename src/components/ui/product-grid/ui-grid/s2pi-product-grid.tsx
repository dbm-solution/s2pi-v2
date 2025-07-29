"use client"

import React, { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import styles from "./s2pi-product-grid.module.css"

export interface ProductGridItem {
  id: string
  title: string
  image: string
  imageAlt?: string
  link: string
  buttonText?: string
  onClick?: () => void
}

export interface S2PIProductGridProps {
  title?: string
  items: ProductGridItem[]
  columnsPerRow?: 1 | 2 | 3 | 4 | 5
  enableScrollAnimation?: boolean
  className?: string
}

export const S2PIProductGrid = React.forwardRef<HTMLDivElement, S2PIProductGridProps>(
  ({ title, items, columnsPerRow = 3, enableScrollAnimation = true, className, ...props }, ref) => {
    const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
    const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map())

    useEffect(() => {
      if (!enableScrollAnimation) {
        // If animation is disabled, make all items visible immediately
        setVisibleItems(new Set(items.map((item) => item.id)))
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const itemId = entry.target.getAttribute("data-item-id")
              if (itemId) {
                setVisibleItems((prev) => new Set([...prev, itemId]))
              }
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "50px 0px -50px 0px",
        },
      )

      // Observe all items
      itemRefs.current.forEach((element) => {
        if (element) {
          observer.observe(element)
        }
      })

      return () => {
        observer.disconnect()
      }
    }, [items, enableScrollAnimation])

    const handleImageClick = (item: ProductGridItem) => {
      if (item.onClick) {
        item.onClick()
      } else {
        window.open(item.link, "_blank", "noopener,noreferrer")
      }
    }

    const handleButtonClick = (item: ProductGridItem) => {
      if (item.onClick) {
        item.onClick()
      } else {
        window.open(item.link, "_blank", "noopener,noreferrer")
      }
    }

    return (
      <div ref={ref} className={cn(styles.productGrid, className)} {...props}>
        {title && <h2 className={styles.sectionTitle}>- {title} -</h2>}

        <div className={cn(styles.gridContainer, styles[`gridCols${columnsPerRow}`])}>
          {items.map((item) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) {
                  itemRefs.current.set(item.id, el)
                } else {
                  itemRefs.current.delete(item.id)
                }
              }}
              data-item-id={item.id}
              className={cn(styles.productItem, visibleItems.has(item.id) && styles.visible)}
            >
              <div
                className={styles.imageContainer}
                onClick={() => handleImageClick(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    handleImageClick(item)
                  }
                }}
                aria-label={`Voir ${item.title}`}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.imageAlt || item.title}
                  className={styles.productImage}
                  loading="lazy"
                />
              </div>

              <button
                className={styles.actionButton}
                onClick={() => handleButtonClick(item)}
                aria-label={`${item.buttonText || "En savoir +"} - ${item.title}`}
              >
                <ExternalLink className={styles.buttonIcon} />
                {item.buttonText || "En savoir +"}
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  },
)

S2PIProductGrid.displayName = "S2PIProductGrid"

export default S2PIProductGrid
