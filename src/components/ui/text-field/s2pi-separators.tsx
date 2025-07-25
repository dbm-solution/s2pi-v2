"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const separatorVariants = cva("", {
  variants: {
    variant: {
      default: [
        "flex items-center",
        "text-[var(--s2pi-text-primary)]",
        "text-[var(--s2pi-text-base)]",
        "font-[var(--s2pi-font-light)]",
        "leading-[var(--s2pi-leading-custom)]",
        "mx-[var(--s2pi-separator-margin-x)]",
        "mb-[var(--s2pi-separator-margin-bottom)]",
      ],
      centered: [
        "flex items-center justify-center",
        "text-[var(--s2pi-text-primary)]",
        "text-[var(--s2pi-text-base)]",
        "font-[var(--s2pi-font-light)]",
        "leading-[var(--s2pi-leading-custom)]",
        "mb-[var(--s2pi-separator-margin-bottom)]",
      ],
      simple: [
        "flex items-center",
        "text-[var(--s2pi-text-primary)]",
        "text-[var(--s2pi-text-base)]",
        "font-[var(--s2pi-font-light)]",
        "leading-[var(--s2pi-leading-custom)]",
        "mb-[var(--s2pi-space-md)]",
      ],
      spaced: [
        "flex items-center",
        "text-[var(--s2pi-text-primary)]",
        "text-[var(--s2pi-text-base)]",
        "font-[var(--s2pi-font-light)]",
        "leading-[var(--s2pi-leading-custom)]",
        "py-[var(--s2pi-content-padding-y)]",
        "px-0",
        "pb-[var(--s2pi-content-padding-bottom)]",
      ],
      dotted: [
        "flex items-center justify-center",
        "text-[var(--s2pi-text-primary)]",
        "text-[var(--s2pi-text-base)]",
        "font-[var(--s2pi-font-light)]",
        "leading-[var(--s2pi-leading-custom)]",
        "mb-[var(--s2pi-space-2xl)]",
      ],
      line: [
        "flex items-center",
        "text-[var(--s2pi-text-primary)]",
        "text-[var(--s2pi-text-base)]",
        "font-[var(--s2pi-font-light)]",
        "leading-[var(--s2pi-leading-custom)]",
        "mb-[var(--s2pi-space-lg)]",
      ],
    },
    size: {
      xs: "text-[var(--s2pi-text-xs)] leading-[var(--s2pi-leading-tight)]",
      sm: "text-[var(--s2pi-text-sm)] leading-[var(--s2pi-leading-snug)]",
      md: "text-[var(--s2pi-text-base)] leading-[var(--s2pi-leading-custom)]",
      lg: "text-[var(--s2pi-text-lg)] leading-[var(--s2pi-leading-relaxed)]",
      xl: "text-[var(--s2pi-text-xl)] leading-[var(--s2pi-leading-xl)]",
      "2xl": "text-[var(--s2pi-text-2xl)] leading-[var(--s2pi-leading-loose)]",
    },
    spacing: {
      none: "m-0",
      xs: "mb-[var(--s2pi-space-xs)]",
      sm: "mb-[var(--s2pi-space-sm)]",
      md: "mb-[var(--s2pi-space-md)]",
      lg: "mb-[var(--s2pi-space-lg)]",
      xl: "mb-[var(--s2pi-space-xl)]",
      "2xl": "mb-[var(--s2pi-space-2xl)]",
      "3xl": "mb-[var(--s2pi-space-3xl)]",
      custom: "mx-[var(--s2pi-separator-margin-x)] mb-[var(--s2pi-separator-margin-bottom)]",
    },
    padding: {
      none: "p-0",
      xs: "py-[var(--s2pi-space-xs)]",
      sm: "py-[var(--s2pi-space-sm)]",
      md: "py-[var(--s2pi-space-md)]",
      lg: "py-[var(--s2pi-space-lg)]",
      xl: "py-[var(--s2pi-space-xl)]",
      "2xl": "py-[var(--s2pi-space-2xl)]",
      "3xl": "py-[var(--s2pi-space-3xl)]",
      custom: "py-[var(--s2pi-content-padding-y)] px-0 pb-[var(--s2pi-content-padding-bottom)]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    spacing: "md",
    padding: "none",
  },
})

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof separatorVariants> {
  text?: string
  showLine?: boolean
  lineColor?: string
  lineWidth?: string
  lineOpacity?: number
  dotCount?: number
  dotSize?: string
  dotSpacing?: string
  customContent?: React.ReactNode
  fontFamily?: "primary" | "secondary"
  textColor?: string
  responsive?: boolean
}

export const S2PISeparator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      spacing = "md",
      padding = "none",
      text,
      showLine = true,
      lineColor,
      lineWidth = "1px",
      lineOpacity = 0.3,
      dotCount = 5,
      dotSize = "4px",
      dotSpacing = "8px",
      customContent,
      fontFamily = "primary",
      textColor,
      responsive = true,
      style,
      ...props
    },
    ref,
  ) => {
    const computedLineColor = lineColor || "var(--s2pi-text-primary)"
    const computedTextColor = textColor || "var(--s2pi-text-primary)"
    const fontFamilyVar =
      fontFamily === "primary" ? "var(--s2pi-font-family-primary)" : "var(--s2pi-font-family-secondary)"

    const renderLine = () => (
      <div
        className="flex-1 transition-all duration-[var(--s2pi-transition-normal)]"
        style={{
          height: lineWidth,
          backgroundColor: computedLineColor,
          opacity: lineOpacity,
        }}
      />
    )

    const renderDots = () => (
      <div className="flex items-center" style={{ gap: dotSpacing }}>
        {Array.from({ length: dotCount }).map((_, index) => (
          <div
            key={index}
            className="rounded-full transition-all duration-[var(--s2pi-transition-normal)]"
            style={{
              width: dotSize,
              height: dotSize,
              backgroundColor: computedLineColor,
              opacity: lineOpacity + 0.3,
            }}
          />
        ))}
      </div>
    )

    const renderContent = () => {
      if (customContent) return customContent

      if (variant === "dotted") {
        return (
          <>
            {showLine && renderLine()}
            <div style={{ padding: `0 var(--s2pi-space-md)` }}>{renderDots()}</div>
            {showLine && renderLine()}
          </>
        )
      }

      if (text) {
        return (
          <>
            {showLine && renderLine()}
            <span
              className="whitespace-nowrap transition-colors duration-[var(--s2pi-transition-normal)]"
              style={{
                padding: `0 var(--s2pi-space-md)`,
                color: computedTextColor,
                fontFamily: fontFamilyVar,
              }}
            >
              {text}
            </span>
            {showLine && renderLine()}
          </>
        )
      }

      return showLine ? renderLine() : null
    }

    const combinedStyle = {
      fontFamily: fontFamilyVar,
      color: computedTextColor,
      ...style,
    }

    return (
      <div
        ref={ref}
        className={cn(
          separatorVariants({ variant, size, spacing, padding }),
          {
            "max-w-none": !responsive,
            "max-w-4xl mx-auto": responsive && (variant === "centered" || variant === "dotted"),
            "max-w-6xl mx-auto": responsive && variant === "spaced",
          },
          className,
        )}
        style={combinedStyle}
        {...props}
      >
        {renderContent()}
      </div>
    )
  },
)

S2PISeparator.displayName = "S2PISeparator"

// Specialized S2PI Separator Components with configurable props
export const S2PITextSeparator = React.forwardRef<HTMLDivElement, Omit<SeparatorProps, "variant"> & { text: string }>(
  ({ text, className, ...props }, ref) => (
    <S2PISeparator ref={ref} variant="centered" text={text} className={cn("max-w-4xl mx-auto", className)} {...props} />
  ),
)

S2PITextSeparator.displayName = "S2PITextSeparator"

export const S2PILineSeparator = React.forwardRef<HTMLDivElement, Omit<SeparatorProps, "variant" | "text">>(
  ({ className, ...props }, ref) => (
    <S2PISeparator ref={ref} variant="line" showLine={true} className={cn("max-w-4xl mx-auto", className)} {...props} />
  ),
)

S2PILineSeparator.displayName = "S2PILineSeparator"

export const S2PIDottedSeparator = React.forwardRef<HTMLDivElement, Omit<SeparatorProps, "variant">>(
  ({ className, dotCount = 7, ...props }, ref) => (
    <S2PISeparator
      ref={ref}
      variant="dotted"
      dotCount={dotCount}
      className={cn("max-w-4xl mx-auto", className)}
      {...props}
    />
  ),
)

S2PIDottedSeparator.displayName = "S2PIDottedSeparator"

export const S2PISpacedSeparator = React.forwardRef<
  HTMLDivElement,
  Omit<SeparatorProps, "variant"> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "py-[var(--s2pi-content-padding-y)] px-0 pb-[var(--s2pi-content-padding-bottom)]",
      "max-w-6xl mx-auto",
      className,
    )}
    style={{
      color: "var(--s2pi-text-primary)",
      fontSize: "var(--s2pi-text-base)",
      fontWeight: "var(--s2pi-font-light)",
      lineHeight: "var(--s2pi-leading-custom)",
      fontFamily: "var(--s2pi-font-family-primary)",
    }}
    {...props}
  >
    {children}
  </div>
))

S2PISpacedSeparator.displayName = "S2PISpacedSeparator"

// Content Divider Component with full customization
export const S2PIContentDivider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title?: string
    subtitle?: string
    showTopLine?: boolean
    showBottomLine?: boolean
    titleSize?: VariantProps<typeof separatorVariants>["size"]
    subtitleSize?: VariantProps<typeof separatorVariants>["size"]
    contentSize?: VariantProps<typeof separatorVariants>["size"]
    titleColor?: string
    subtitleColor?: string
    contentColor?: string
    spacing?: VariantProps<typeof separatorVariants>["spacing"]
    padding?: VariantProps<typeof separatorVariants>["padding"]
  }
>(
  (
    {
      className,
      title,
      subtitle,
      showTopLine = false,
      showBottomLine = true,
      titleSize = "xl",
      subtitleSize = "md",
      contentSize = "md",
      titleColor,
      subtitleColor,
      contentColor,
      spacing = "2xl",
      padding = "custom",
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn("py-[var(--s2pi-content-padding-y)] px-0 pb-[var(--s2pi-content-padding-bottom)]", className)}
      {...props}
    >
      {showTopLine && <S2PILineSeparator className="mb-[var(--s2pi-space-2xl)]" spacing="none" />}

      {title && (
        <div className="text-center mb-[var(--s2pi-space-lg)]">
          <h2
            className={cn(
              "mb-[var(--s2pi-space-sm)]",
              "font-[var(--s2pi-font-light)]",
              "transition-colors duration-[var(--s2pi-transition-normal)]",
              {
                "text-[var(--s2pi-text-xs)] leading-[var(--s2pi-leading-tight)]": titleSize === "xs",
                "text-[var(--s2pi-text-sm)] leading-[var(--s2pi-leading-snug)]": titleSize === "sm",
                "text-[var(--s2pi-text-base)] leading-[var(--s2pi-leading-custom)]": titleSize === "md",
                "text-[var(--s2pi-text-lg)] leading-[var(--s2pi-leading-relaxed)]": titleSize === "lg",
                "text-[var(--s2pi-text-xl)] leading-[var(--s2pi-leading-xl)]": titleSize === "xl",
                "text-[var(--s2pi-text-2xl)] leading-[var(--s2pi-leading-loose)]": titleSize === "2xl",
              },
            )}
            style={{
              color: titleColor || "var(--s2pi-text-primary)",
              fontFamily: "var(--s2pi-font-family-primary)",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={cn("transition-colors duration-[var(--s2pi-transition-normal)]", {
                "text-[var(--s2pi-text-xs)] leading-[var(--s2pi-leading-tight)]": subtitleSize === "xs",
                "text-[var(--s2pi-text-sm)] leading-[var(--s2pi-leading-snug)]": subtitleSize === "sm",
                "text-[var(--s2pi-text-base)] leading-[var(--s2pi-leading-custom)]": subtitleSize === "md",
                "text-[var(--s2pi-text-lg)] leading-[var(--s2pi-leading-relaxed)]": subtitleSize === "lg",
                "text-[var(--s2pi-text-xl)] leading-[var(--s2pi-leading-xl)]": subtitleSize === "xl",
                "text-[var(--s2pi-text-2xl)] leading-[var(--s2pi-leading-loose)]": subtitleSize === "2xl",
              })}
              style={{
                color: subtitleColor || "var(--s2pi-text-muted)",
                fontFamily: "var(--s2pi-font-family-primary)",
                fontWeight: "var(--s2pi-font-light)",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children && (
        <div
          className={cn("max-w-4xl mx-auto transition-colors duration-[var(--s2pi-transition-normal)]", {
            "text-[var(--s2pi-text-xs)] leading-[var(--s2pi-leading-tight)]": contentSize === "xs",
            "text-[var(--s2pi-text-sm)] leading-[var(--s2pi-leading-snug)]": contentSize === "sm",
            "text-[var(--s2pi-text-base)] leading-[var(--s2pi-leading-custom)]": contentSize === "md",
            "text-[var(--s2pi-text-lg)] leading-[var(--s2pi-leading-relaxed)]": contentSize === "lg",
            "text-[var(--s2pi-text-xl)] leading-[var(--s2pi-leading-xl)]": contentSize === "xl",
            "text-[var(--s2pi-text-2xl)] leading-[var(--s2pi-leading-loose)]": contentSize === "2xl",
          })}
          style={{
            color: contentColor || "var(--s2pi-text-primary)",
            fontFamily: "var(--s2pi-font-family-primary)",
            fontWeight: "var(--s2pi-font-light)",
          }}
        >
          {children}
        </div>
      )}

      {showBottomLine && <S2PILineSeparator className="mt-[var(--s2pi-space-2xl)]" spacing="none" />}
    </div>
  ),
)

S2PIContentDivider.displayName = "S2PIContentDivider"

// Section Wrapper with full S2PI styling and customization
export const S2PISection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    as?: "section" | "div" | "article"
    bordered?: boolean
    centered?: boolean
    size?: VariantProps<typeof separatorVariants>["size"]
    spacing?: VariantProps<typeof separatorVariants>["spacing"]
    padding?: VariantProps<typeof separatorVariants>["padding"]
    textColor?: string
    backgroundColor?: string
    borderColor?: string
  }
>(
  (
    {
      className,
      as: Component = "section",
      bordered = false,
      centered = true,
      size = "md",
      spacing = "custom",
      padding = "custom",
      textColor,
      backgroundColor,
      borderColor,
      children,
      style,
      ...props
    },
    ref,
  ) => (
    <Component
      ref={ref as any}
      className={cn(
        "transition-all duration-[var(--s2pi-transition-normal)]",
        {
          "text-[var(--s2pi-text-xs)] leading-[var(--s2pi-leading-tight)]": size === "xs",
          "text-[var(--s2pi-text-sm)] leading-[var(--s2pi-leading-snug)]": size === "sm",
          "text-[var(--s2pi-text-base)] leading-[var(--s2pi-leading-custom)]": size === "md",
          "text-[var(--s2pi-text-lg)] leading-[var(--s2pi-leading-relaxed)]": size === "lg",
          "text-[var(--s2pi-text-xl)] leading-[var(--s2pi-leading-xl)]": size === "xl",
          "text-[var(--s2pi-text-2xl)] leading-[var(--s2pi-leading-loose)]": size === "2xl",
        },
        {
          "py-[var(--s2pi-content-padding-y)] px-0 pb-[var(--s2pi-content-padding-bottom)]": padding === "custom",
          "p-0": padding === "none",
          "py-[var(--s2pi-space-xs)]": padding === "xs",
          "py-[var(--s2pi-space-sm)]": padding === "sm",
          "py-[var(--s2pi-space-md)]": padding === "md",
          "py-[var(--s2pi-space-lg)]": padding === "lg",
          "py-[var(--s2pi-space-xl)]": padding === "xl",
          "py-[var(--s2pi-space-2xl)]": padding === "2xl",
          "py-[var(--s2pi-space-3xl)]": padding === "3xl",
        },
        {
          "border-t border-b": bordered,
          "max-w-4xl mx-auto": centered,
        },
        className,
      )}
      style={{
        color: textColor || "var(--s2pi-text-primary)",
        backgroundColor: backgroundColor || "transparent",
        borderColor: borderColor || "var(--s2pi-border-light)",
        fontFamily: "var(--s2pi-font-family-primary)",
        fontWeight: "var(--s2pi-font-light)",
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  ),
)

S2PISection.displayName = "S2PISection"
