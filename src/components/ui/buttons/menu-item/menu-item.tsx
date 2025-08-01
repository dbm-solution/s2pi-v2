"use client"

import type React from "react"
import { forwardRef } from "react"
import styles from "./menu-item.module.css"

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  target?: "_blank" | "_self" | "_parent" | "_top"
  active?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  badge?: string | number
  description?: string
}

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      className = "",
      href,
      target = "_self",
      active = false,
      disabled = false,
      icon,
      badge,
      description,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    const getClassNames = () => {
      const classes = [styles.menuItem, active ? styles.active : "", disabled ? styles.disabled : "", className]
      return classes.filter(Boolean).join(" ")
    }

    const content = (
      <>
        {icon && <span className={styles.icon}>{icon}</span>}
        <div className={styles.content}>
          <span className={styles.text}>{children}</span>
          {description && <span className={styles.description}>{description}</span>}
        </div>
        {badge && <span className={styles.badge}>{badge}</span>}
      </>
    )

    if (href && !disabled) {
      return (
        <a href={href} target={target} className={getClassNames()} role="menuitem">
          {content}
        </a>
      )
    }

    return (
      <button ref={ref} className={getClassNames()} onClick={onClick} disabled={disabled} role="menuitem" {...props}>
        {content}
      </button>
    )
  },
)

MenuItem.displayName = "MenuItem"

export { MenuItem }
