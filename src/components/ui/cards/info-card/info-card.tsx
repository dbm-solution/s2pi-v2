"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const infoCardVariants = cva("relative overflow-hidden transition-all duration-300 ease-in-out", {
  variants: {
    variant: {
      primary: "bg-[#06528a] text-white shadow-lg hover:shadow-xl",
      secondary: "bg-[#4a6fa5] text-white shadow-lg hover:shadow-xl",
      success: "bg-[#22c55e] text-white shadow-lg hover:shadow-xl",
      warning: "bg-[#f59e0b] text-white shadow-lg hover:shadow-xl",
      danger: "bg-[#ef4444] text-white shadow-lg hover:shadow-xl",
      info: "bg-[#3b82f6] text-white shadow-lg hover:shadow-xl",
      dark: "bg-[#1f2937] text-white shadow-lg hover:shadow-xl",
      light: "bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md",
      gradient: "bg-gradient-to-r from-[#1D4572] to-[#4a6fa5] text-white shadow-lg hover:shadow-xl",
      coral: "bg-[#e67e22] text-white shadow-lg hover:shadow-xl",
      teal: "bg-[#14b8a6] text-white shadow-lg hover:shadow-xl",
      purple: "bg-[#8b5cf6] text-white shadow-lg hover:shadow-xl",
      pink: "bg-[#ec4899] text-white shadow-lg hover:shadow-xl",
    },
    size: {
      sm: "p-4 text-sm",
      md: "p-6 text-base",
      lg: "p-8 text-lg",
      xl: "p-10 text-xl",
    },
    shape: {
      rectangle: "rounded-none",
      rounded: "rounded-lg",
      pill: "rounded-full",
    },
    layout: {
      compact: "min-h-[80px]",
      standard: "min-h-[120px]",
      banner: "min-h-[160px]",
      hero: "min-h-[240px]",
      default: "min-h-[295px]",
    },
    textAlign: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    animation: {
      none: "",
      hover: "hover:scale-105 hover:-translate-y-1",
      pulse: "animate-pulse",
      bounce: "hover:animate-bounce",
    },
    width: {
      full: "w-full",
      auto: "w-auto",
      twoThirds: "w-2/3",
      half: "w-1/2",
      third: "w-1/3",
      quarter: "w-1/4",
      fifth: "w-1/5",
      sixth: "w-1/6",
      seventh: "w-1/7",
      eighth: "w-1/8",
    },
    margin: {
      none: "",
      auto: "mx-auto",
      left: "ml-auto",
      right: "mr-auto",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    shape: "rectangle",
    layout: "standard",
    textAlign: "left",
    animation: "hover",
    width: "twoThirds",
    margin: "auto",
  },
})

export interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof infoCardVariants> {
  title?: string
  subtitle?: string
  description?: string
  icon?: React.ReactNode
  badge?: string
  footer?: React.ReactNode
  overlay?: boolean
  fullWidth?: boolean
  href?: string
  target?: "_blank" | "_self" | "_parent" | "_top"
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}

const InfoCard = React.forwardRef<HTMLDivElement, InfoCardProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      layout,
      textAlign,
      animation,
      title,
      subtitle,
      description,
      icon,
      badge,
      footer,
      overlay,
      fullWidth,
      href,
      target = "_self",
      onClick,
      disabled,
      loading,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = href ? "a" : onClick ? "button" : "div"
    const isInteractive = href || onClick

    const cardContent = (
      <>
        {/* Overlay for interactive cards */}
        {overlay && (
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
        )}

        {/* Loading state */}
        {loading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className="absolute top-2 right-2 bg-white bg-opacity-20 text-xs font-semibold px-2 py-1 rounded-full">
            {badge}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header with icon and title */}
          {(icon || title) && (
            <div className="flex items-start gap-3 mb-2">
              {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
              <div className="flex-1">
                {title && <h3 className="font-bold leading-tight mb-1">{title}</h3>}
                {subtitle && <p className="text-sm opacity-90 font-medium">{subtitle}</p>}
              </div>
            </div>
          )}

          {/* Description */}
          {description && <p className="flex-1 opacity-90 leading-relaxed mb-4">{description}</p>}

          {/* Custom children content */}
          {children && <div className="flex-1">{children}</div>}

          {/* Footer */}
          {footer && <div className="mt-auto pt-4">{footer}</div>}
        </div>
      </>
    )

    return (
      <Component
        {...({
          ref,
          className: cn(
            infoCardVariants({ variant, size, shape, layout, textAlign, animation }),
            fullWidth && "w-full",
            isInteractive &&
              "cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-opacity-50",
            disabled && "opacity-50 cursor-not-allowed",
            className,
          ),
          href,
          target: href ? target : undefined,
          onClick: onClick && !disabled ? onClick : undefined,
          disabled,
          ...props,
        } as any)}
      >
        {cardContent}
      </Component>
    )
  },
)

InfoCard.displayName = "InfoCard"

export { InfoCard, infoCardVariants }
