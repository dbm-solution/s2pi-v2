"use client"

import type React from "react"
import { createContext, useContext, useState, useRef, useEffect, useId } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Types
export interface S2PIAccordionProps {
  children: React.ReactNode
  type?: "single" | "multiple"
  variant?: "default" | "primary" | "secondary" | "success" | "warning"
  borderRadius?: "none" | "sm" | "md" | "lg"
  animationDuration?: "fast" | "normal" | "slow"
  className?: string
}

export interface S2PIAccordionItemProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  disabled?: boolean
  className?: string
}

// Context
interface AccordionContextType {
  openItems: Set<string>
  toggleItem: (id: string) => void
  registerDefaultOpen: (id: string) => void
  initialized: boolean
  setInitialized: (value: boolean) => void
  type: "single" | "multiple"
  variant: "default" | "primary" | "secondary" | "success" | "warning"
  borderRadius: "none" | "sm" | "md" | "lg"
  animationDuration: "fast" | "normal" | "slow"
}

const AccordionContext = createContext<AccordionContextType | null>(null)

const useAccordion = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error("useAccordion must be used within S2PIAccordion")
  }
  return context
}

// Variant styles
const variants = {
  default: {
    background: "#c8bba2",
    backgroundHover: "#b8ac85",
    text: "#fff",
    border: "#b8ac85",
  },
  primary: {
    background: "#2563eb",
    backgroundHover: "#1d4ed8",
    text: "#fff",
    border: "#1d4ed8",
  },
  secondary: {
    background: "#64748b",
    backgroundHover: "#475569",
    text: "#fff",
    border: "#475569",
  },
  success: {
    background: "#059669",
    backgroundHover: "#047857",
    text: "#fff",
    border: "#047857",
  },
  warning: {
    background: "#d97706",
    backgroundHover: "#b45309",
    text: "#fff",
    border: "#b45309",
  },
}

const borderRadiusClasses = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
}

const animationDurations = {
  fast: "200ms",
  normal: "300ms",
  slow: "500ms",
}

// Main Accordion Component
export function S2PIAccordion({
  children,
  type = "single",
  variant = "default",
  borderRadius = "md",
  animationDuration = "normal",
  className,
}: S2PIAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [initialized, setInitialized] = useState(false)

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)

      if (type === "single") {
        // Single mode: close all others, toggle current
        newSet.clear()
        if (!prev.has(id)) {
          newSet.add(id)
        }
      } else {
        // Multiple mode: toggle current
        if (newSet.has(id)) {
          newSet.delete(id)
        } else {
          newSet.add(id)
        }
      }

      return newSet
    })
  }

  // Register default open items
  const registerDefaultOpen = (id: string) => {
    if (!initialized) {
      setOpenItems((prev) => {
        const newSet = new Set(prev)
        if (type === "single") {
          // In single mode, only allow one default open
          if (newSet.size === 0) {
            newSet.add(id)
          }
        } else {
          newSet.add(id)
        }
        return newSet
      })
    }
  }

  return (
    <AccordionContext.Provider
      value={{
        openItems,
        toggleItem,
        registerDefaultOpen,
        initialized,
        setInitialized,
        type,
        variant,
        borderRadius,
        animationDuration,
      }}
    >
      <div className={cn("space-y-1", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

// Accordion Item Component
export function S2PIAccordionItem({
  title,
  children,
  defaultOpen = false,
  disabled = false,
  className,
}: S2PIAccordionItemProps) {
  const { openItems, toggleItem, registerDefaultOpen, initialized, setInitialized, variant, borderRadius, animationDuration } = useAccordion()
  const itemId = useId()
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number>(0)

  const isOpen = openItems.has(itemId)
  const variantStyles = variants[variant]
  const duration = animationDurations[animationDuration]

  // Handle default open state
  useEffect(() => {
    if (defaultOpen) {
      registerDefaultOpen(itemId)
    }
    
    // Mark as initialized after first render
    const timer = setTimeout(() => {
      setInitialized(true)
    }, 0)
    
    return () => clearTimeout(timer)
  }, [defaultOpen, itemId, registerDefaultOpen, setInitialized])

  // Calculate content height for smooth animation
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [children, isOpen])

  const handleClick = () => {
    if (!disabled) {
      toggleItem(itemId)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleClick()
    }
  }

  return (
    <div className={cn("overflow-hidden", borderRadiusClasses[borderRadius], className)}>
      {/* Header */}
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={cn(
          "w-full text-left relative transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          disabled && "opacity-50 cursor-not-allowed",
        )}
        style={{
          backgroundColor: variantStyles.background,
          color: variantStyles.text,
          fontFamily: "Open Sans, sans-serif",
          fontSize: "20px",
          lineHeight: "20px",
          padding: "14px 20px 14px 46px",
          border: `1px solid ${variantStyles.border}`,
          transition: `all ${duration} ease-in-out`,
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.backgroundColor = variantStyles.backgroundHover
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled) {
            e.currentTarget.style.backgroundColor = variantStyles.background
          }
        }}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${itemId}`}
      >
        {/* Arrow Icon - Left Side */}
        <ChevronDown
          className="absolute left-4 top-1/2 transform -translate-y-1/2 transition-transform"
          style={{
            color: variantStyles.text,
            fontSize: "20px",
            lineHeight: "20px",
            transform: `translateY(-50%) rotate(${isOpen ? "180deg" : "0deg"})`,
            transition: `transform ${duration} ease-in-out`,
          }}
          size={20}
        />

        {/* Title */}
        <span className="block">{title}</span>
      </button>

      {/* Content */}
      <div
        id={`accordion-content-${itemId}`}
        className="overflow-hidden transition-all"
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
          transition: `max-height ${duration} ease-in-out`,
        }}
        aria-hidden={!isOpen}
      >
        <div
          ref={contentRef}
          className="p-6 bg-white border-l border-r border-b"
          style={{
            borderColor: variantStyles.border,
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

// Compound component pattern
S2PIAccordion.Item = S2PIAccordionItem

export default S2PIAccordion
