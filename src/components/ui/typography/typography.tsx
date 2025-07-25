// src/components/ui/typography/typography.tsx
"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva("transition-colors duration-300", {
  variants: {
    variant: {
      // Main body text - exact match from original S2PI website
      body: [
        "text-[17px]",
        "leading-[31px]", 
        "font-[300]",
        "text-[#232323]",
        "text-justify",
        "block",
        "m-0",
        "p-0",
        "font-['Roboto',Helvetica,Arial,Verdana,sans-serif]",
        "tracking-normal", // letter-spacing: normal
        "transform-none",  // text-transform: none
        "decoration-none", // text-decoration: none
        "word-spacing-0",  // word-spacing: normal
      ],
      // Bold body text
      bodyBold: [
        "text-[17px]",
        "leading-[31px]", 
        "font-[700]",
        "text-[#232323]",
        "text-justify",
        "inline",
      ],
      // Main page headings - from HTML analysis
      h1: [
        "text-[48px]",
        "leading-[52px]",
        "font-[300]",
        "text-[#565656]",
        "text-center",
        "font-[var(--font-open-sans)]",
      ],
      // Secondary headings
      h2: [
        "text-[36px]",
        "leading-[46px]",
        "font-[400]",
        "text-[#565656]",
        "text-center",
        "font-[var(--font-open-sans)]",
      ],
      // Section headings
      h3: [
        "text-[26px]",
        "leading-[36px]",
        "font-[400]",
        "text-[#565656]",
        "text-center",
        "font-[var(--font-open-sans)]",
      ],
      // Philosophy heading and similar
      h4: [
        "text-[20px]",
        "leading-[30px]",
        "text-[#2d2d2d]",
        "font-[var(--font-open-sans)]",
        "px-4",
        "text-center",
      ],
      // Small headings
      h5: [
        "text-[18px]",
        "leading-[28px]",
        "font-[600]",
        "text-[#2d2d2d]",
        "font-[var(--font-open-sans)]",
      ],
      h6: [
        "text-[16px]",
        "leading-[24px]",
        "font-[600]",
        "text-[#2d2d2d]",
        "font-[var(--font-open-sans)]",
      ],
      // Quote/blockquote text
      quote: [
        "text-[18px]",
        "leading-[28px]",
        "font-[400]",
        "text-[#333333]",
        "italic",
        "font-[Georgia,serif]",
      ],
      // Small text
      small: [
        "text-[12px]",
        "leading-[18px]",
        "font-[400]",
        "text-[#666666]",
      ],
      // Caption text
      caption: [
        "text-[14px]",
        "leading-[20px]",
        "font-[400]",
        "text-[#888888]",
      ],
      // Link text
      link: [
        "text-[17px]",
        "leading-[31px]",
        "font-[400]",
        "text-[#b52626]",
        "underline",
        "hover:no-underline",
      ],
      // Widget titles (sidebar)
      widgetTitle: [
        "text-[14px]",
        "leading-[18px]",
        "font-[700]",
        "text-[#ffffff]",
        "bg-[#1c4572]",
        "p-3",
        "font-[var(--font-oswald)]",
      ],
    },
    size: {
      xs: "text-xs leading-tight",
      sm: "text-sm leading-snug",
      base: "text-base leading-normal",
      lg: "text-lg leading-relaxed",
      xl: "text-xl leading-loose",
      "2xl": "text-2xl leading-loose",
      "3xl": "text-3xl leading-loose",
      "4xl": "text-4xl leading-tight",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    color: {
      primary: "text-[#232323]",
      secondary: "text-[#565656]", 
      tertiary: "text-[#2d2d2d]",
      muted: "text-[#666666]",
      light: "text-[#888888]",
      brand: "text-[#b52626]",
      white: "text-white",
    },
    fontFamily: {
      roboto: "font-[var(--font-roboto)]",
      openSans: "font-[var(--font-open-sans)]",
      oswald: "font-[var(--font-oswald)]",
      prata: "font-[var(--font-prata)]",
      poppins: "font-[var(--font-poppins)]",
    },
  },
  defaultVariants: {
    variant: "body",
    align: "justify",
    color: "primary",
    fontFamily: "roboto",
    weight: "light",
  },
})

export interface TypographyProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>, VariantProps<typeof typographyVariants> {
  as?: React.ElementType
  customColor?: string
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant = "body",
      size,
      weight,
      align,
      color,
      fontFamily,
      customColor,
      as,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    // Auto-determine HTML element
    const Component = as || 
      (variant === "h1" ? "h1" :
       variant === "h2" ? "h2" :
       variant === "h3" ? "h3" :
       variant === "h4" ? "h4" :
       variant === "h5" ? "h5" :
       variant === "h6" ? "h6" :
       variant === "quote" ? "blockquote" :
       variant === "small" ? "small" :
       variant === "caption" ? "figcaption" :
       variant === "link" ? "a" :
       variant === "widgetTitle" ? "div" :
       variant?.includes("Bold") ? "strong" : "p")

    const combinedStyle = {
      color: customColor || undefined,
      ...style,
    }

    return (
      <Component
        ref={ref}
        className={cn(
          typographyVariants({ variant, size, weight, align, color, fontFamily }),
          className,
        )}
        style={combinedStyle}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Typography.displayName = "Typography"

export { typographyVariants }
