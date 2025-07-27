"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import styles from "./text-content.module.css"

const textContentVariants = cva(styles.textContent, {
  variants: {
    variant: {
      default: styles.default,
      s2pi: styles.s2pi,
      heading: styles.heading,
      subheading: styles.subheading,
      body: styles.body,
      caption: styles.caption,
      highlight: styles.highlight,
    },
    size: {
      xs: styles.xs,
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
      xl: styles.xl,
      "2xl": styles.xl2,
      "3xl": styles.xl3,
    },
    weight: {
      light: styles.light,
      normal: styles.normal,
      medium: styles.medium,
      semibold: styles.semibold,
      bold: styles.bold,
    },
    align: {
      left: styles.alignLeft,
      center: styles.alignCenter,
      right: styles.alignRight,
      justify: styles.alignJustify,
    },
    color: {
      default: styles.colorDefault,
      primary: styles.colorPrimary,
      secondary: styles.colorSecondary,
      muted: styles.colorMuted,
      accent: styles.colorAccent,
      s2pi: styles.colorS2pi,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    weight: "normal",
    align: "left",
    color: "default",
  },
})

export interface TextContentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof textContentVariants> {
  as?: "div" | "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
  dotted?: boolean
  s2piStyle?: boolean
}

export const TextContent = React.forwardRef<HTMLDivElement, TextContentProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      weight = "normal",
      align = "left",
      color = "default",
      as: Component = "div",
      children,
      dotted = false,
      s2piStyle = false,
      ...props
    },
    ref,
  ) => {
    const effectiveVariant = s2piStyle ? "s2pi" : variant
    const effectiveColor = s2piStyle ? "s2pi" : color

    return (
      <Component
        className={cn(
          textContentVariants({
            variant: effectiveVariant,
            size,
            weight,
            align,
            color: effectiveColor,
          }),
          {
            [styles.dotted]: dotted,
            [styles.s2piContent]: s2piStyle,
          },
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

TextContent.displayName = "TextContent"

// Specialized S2PI Components
export const S2PIHeading = React.forwardRef<HTMLHeadingElement, Omit<TextContentProps, "variant" | "s2piStyle">>(
  ({ className, size = "2xl", weight = "normal", align = "center", color = "s2pi", as = "h1", ...props }, ref) => (
    <TextContent
      ref={ref}
      as={as}
      variant="heading"
      size={size}
      weight={weight}
      align={align}
      color={color}
      s2piStyle
      className={cn(styles.s2piHeading, className)}
      {...props}
    />
  ),
)

S2PIHeading.displayName = "S2PIHeading"

export const S2PISubheading = React.forwardRef<HTMLHeadingElement, Omit<TextContentProps, "variant" | "s2piStyle">>(
  ({ className, size = "lg", weight = "bold", align = "left", color = "s2pi", as = "h2", ...props }, ref) => (
    <TextContent
      ref={ref}
      as={as}
      variant="subheading"
      size={size}
      weight={weight}
      align={align}
      color={color}
      s2piStyle
      className={cn(styles.s2piSubheading, className)}
      {...props}
    />
  ),
)

S2PISubheading.displayName = "S2PISubheading"

export const S2PIBody = React.forwardRef<HTMLParagraphElement, Omit<TextContentProps, "variant" | "s2piStyle">>(
  ({ className, size = "md", weight = "normal", align = "justify", color = "default", as = "p", ...props }, ref) => (
    <TextContent
      ref={ref}
      as={as}
      variant="body"
      size={size}
      weight={weight}
      align={align}
      color={color}
      s2piStyle
      className={cn(styles.s2piBody, className)}
      {...props}
    />
  ),
)

S2PIBody.displayName = "S2PIBody"

export const S2PIList = React.forwardRef<HTMLUListElement, Omit<TextContentProps, "variant" | "s2piStyle" | "as">>(
  ({ className, size = "md", weight = "normal", align = "left", color = "default", children, ...props }, ref) => (
          <ul
        ref={ref}
        className={cn(
          textContentVariants({
            variant: "body",
            size,
            weight,
            align,
            color,
          }),
          styles.s2piList,
          className,
        )}
        {...(props as any)}
      >
      {children}
    </ul>
  ),
)

S2PIList.displayName = "S2PIList"
