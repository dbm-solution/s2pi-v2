"use client"

import type React from "react"
import { forwardRef } from "react"
import styles from "./actions-button.module.css"

export interface ActionsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "custom"
  size?: "sm" | "md" | "lg"
  shape?: "rectangle" | "rounded" | "pill"
  href?: string
  target?: "_blank" | "_self" | "_parent" | "_top"
  rel?: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  loading?: boolean
  ariaLabel?: string
  fullWidth?: boolean
  download?: boolean | string
}

const ActionsButton = forwardRef<HTMLButtonElement, ActionsButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      shape = "rounded",
      href,
      target = "_blank",
      rel = "noopener noreferrer",
      icon,
      iconPosition = "left",
      loading = false,
      ariaLabel,
      children,
      disabled,
      fullWidth = false,
      download,
      ...props
    },
    ref,
  ) => {
    const getClassNames = () => {
      const classes = [
        styles.actionsButton,
        styles[variant],
        styles[size],
        styles[shape],
        fullWidth ? styles.fullWidth : "",
        loading ? styles.loading : "",
        iconPosition === "right" ? styles.iconRight : "",
        className,
      ]
      return classes.filter(Boolean).join(" ")
    }

    const content = (
      <>
        {loading ? (
          <div className={styles.spinner} aria-hidden="true" />
        ) : (
          <>
            {icon && iconPosition === "left" && <span className={styles.icon}>{icon}</span>}
            {children && <span className={styles.text}>{children}</span>}
            {icon && iconPosition === "right" && <span className={styles.icon}>{icon}</span>}
          </>
        )}
      </>
    )

    if (href && !disabled) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={getClassNames()}
          aria-label={ariaLabel}
          role="button"
          download={download}
        >
          {content}
        </a>
      )
    }

    return (
      <button ref={ref} className={getClassNames()} disabled={disabled || loading} aria-label={ariaLabel} {...props}>
        {content}
      </button>
    )
  },
)

ActionsButton.displayName = "ActionsButton"

export { ActionsButton }
