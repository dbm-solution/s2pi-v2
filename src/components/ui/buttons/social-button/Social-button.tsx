"use client"

import type React from "react"
import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils/utils"
import styles from "./social-button.module.css"

const socialButtonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        facebook: styles.facebook,
        linkedin: styles.linkedin,
        email: styles.email,
        twitter: styles.twitter,
        custom: styles.custom,
      },
      size: {
        sm: styles.sm,
        md: styles.md,
        lg: styles.lg,
      },
      shape: {
        rectangle: "rounded-sm",
        rounded: "rounded-md",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "facebook",
      size: "md",
      shape: "rectangle",
    },
  },
)

export interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof socialButtonVariants> {
  asChild?: boolean
  href?: string
  target?: "_blank" | "_self" | "_parent" | "_top"
  rel?: string
  icon?: React.ReactNode
  loading?: boolean
  ariaLabel?: string
}

const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      asChild = false,
      href,
      target = "_blank",
      rel = "noopener noreferrer",
      icon,
      loading = false,
      ariaLabel,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseClasses = cn(
      socialButtonVariants({ variant, size, shape }),
      styles.socialButton,
      loading && styles.loading,
      className,
    )

    const content = (
      <>
        {loading ? (
          <div className={styles.spinner} aria-hidden="true" />
        ) : (
          icon && <span className={styles.icon}>{icon}</span>
        )}
        {children && <span className={styles.text}>{children}</span>}
      </>
    )

    if (href && !disabled) {
      return (
        <a href={href} target={target} rel={rel} className={baseClasses} aria-label={ariaLabel} role="button">
          {content}
        </a>
      )
    }

    return (
      <button ref={ref} className={baseClasses} disabled={disabled || loading} aria-label={ariaLabel} {...props}>
        {content}
      </button>
    )
  },
)

SocialButton.displayName = "SocialButton"

export { SocialButton, socialButtonVariants }
