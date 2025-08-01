"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface DividerProps {
  /** Height of the spacer above the line in pixels */
  spacerHeight?: number
  /** Height of the spacer below the line in pixels */
  spacerHeightBottom?: number
  /** Color of the separator line */
  lineColor?: string
  /** Border width in pixels */
  borderWidth?: number
  /** Enable shadow effect */
  withShadow?: boolean
  /** Width percentage of the separator line */
  separatorWidth?: number
  /** Additional CSS classes */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}

export function Divider({
  spacerHeight = 15,
  spacerHeightBottom = 25,
  lineColor = "#CEC2AB", // chino color from the website
  borderWidth = 4,
  withShadow = true,
  separatorWidth = 30, // 50% width like the original
  className,
  style,
}: DividerProps) {
  return (
    <div className={cn("w-full flex flex-col items-center", className)} style={style}>
      {/* Top Spacer - 15px */}
      <div 
        style={{
          height: `${spacerHeight}px`,
          width: "20%",
        }}
      >
        <span></span>
      </div>
      
      {/* Centered Separator Line with limited width */}
      <div 
        style={{
          width: `${separatorWidth}%`,
          height: `${borderWidth}px`,
          backgroundColor: lineColor,
          boxShadow: withShadow ? "0 2px 4px rgba(0,0,0,0.2)" : "none",
        }}
      />

      {/* Bottom Spacer - 25px */}
      <div 
        style={{
          height: `${spacerHeightBottom}px`,
          width: "100%",
        }}
      >
        <span></span>
      </div>
    </div>
  )
}

export default Divider