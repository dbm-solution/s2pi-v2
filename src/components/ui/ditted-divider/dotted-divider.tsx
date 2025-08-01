"use client"

import { cn } from "@/lib/utils"

interface DottedDividerProps {
  /** Number of dots to display */
  dotCount?: number
  /** Color of the dots */
  color?: string
  /** Size of each dot in pixels */
  dotSize?: number
  /** Space between dots in pixels */
  spacing?: number
  /** Predefined variant styles */
  variant?: "default" | "dense" | "sparse"
  /** Additional CSS classes */
  className?: string
}

export function DottedDivider({
  dotCount = 50,
  color = "#dc2626", // red-600
  dotSize = 3,
  spacing = 8,
  variant = "default",
  className,
}: DottedDividerProps) {
  // Predefined variants
  const variants = {
    default: {
      dotCount: 50,
      color: "#dc2626",
      dotSize: 3,
      spacing: 8,
    },
    dense: {
      dotCount: 80,
      color: "#1f2937", // gray-800
      dotSize: 2,
      spacing: 4,
    },
    sparse: {
      dotCount: 20,
      color: "#6b7280", // gray-500
      dotSize: 4,
      spacing: 16,
    },
  }

  // Apply variant settings if variant is specified
  const settings =
    variant !== "default"
      ? variants[variant]
      : {
          dotCount,
          color,
          dotSize,
          spacing,
        }

  // Override with custom props if provided
  const finalSettings = {
    dotCount: dotCount !== 50 ? dotCount : settings.dotCount,
    color: color !== "#dc2626" ? color : settings.color,
    dotSize: dotSize !== 3 ? dotSize : settings.dotSize,
    spacing: spacing !== 8 ? spacing : settings.spacing,
  }

  return (
    <div
      className={cn("flex items-center justify-center py-4", className)}
      role="separator"
      aria-label="Decorative divider"
    >
      <div className="flex items-center" style={{ gap: `${finalSettings.spacing}px` }}>
        {Array.from({ length: finalSettings.dotCount }, (_, index) => (
          <div
            key={index}
            className="rounded-full"
            style={{
              width: `${finalSettings.dotSize}px`,
              height: `${finalSettings.dotSize}px`,
              backgroundColor: finalSettings.color,
            }}
          />
        ))}
      </div>
    </div>
  )
}
