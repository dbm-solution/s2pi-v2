"use client"

import type React from "react"
import { forwardRef, useState, useRef, useEffect } from "react"
import styles from "./menu-button.module.css"

export interface MenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "active" | "highlight" | "secondary" | "custom"
  size?: "sm" | "md" | "lg"
  href?: string
  target?: "_blank" | "_self" | "_parent" | "_top"
  hasDropdown?: boolean
  isOpen?: boolean
  onDropdownToggle?: (isOpen: boolean) => void
  dropdownContent?: React.ReactNode
  megaMenu?: boolean
  fullWidth?: boolean
  ariaLabel?: string
  badge?: string | number
  disabled?: boolean
}

const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "md",
      href,
      target = "_self",
      hasDropdown = false,
      isOpen = false,
      onDropdownToggle,
      dropdownContent,
      megaMenu = false,
      fullWidth = false,
      ariaLabel,
      badge,
      disabled = false,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [internalIsOpen, setInternalIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const isControlled = onDropdownToggle !== undefined
    const dropdownOpen = isControlled ? isOpen : internalIsOpen

    const getClassNames = () => {
      const classes = [
        styles.menuButton,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : "",
        hasDropdown ? styles.hasDropdown : "",
        dropdownOpen ? styles.open : "",
        disabled ? styles.disabled : "",
        className,
      ]
      return classes.filter(Boolean).join(" ")
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (hasDropdown && !disabled) {
        e.preventDefault()
        const newIsOpen = !dropdownOpen
        if (isControlled) {
          onDropdownToggle?.(newIsOpen)
        } else {
          setInternalIsOpen(newIsOpen)
        }
      }
      onClick?.(e)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (hasDropdown && !disabled) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          const newIsOpen = !dropdownOpen
          if (isControlled) {
            onDropdownToggle?.(newIsOpen)
          } else {
            setInternalIsOpen(newIsOpen)
          }
        } else if (e.key === "Escape" && dropdownOpen) {
          if (isControlled) {
            onDropdownToggle?.(false)
          } else {
            setInternalIsOpen(false)
          }
        }
      }
    }

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          buttonRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          if (isControlled) {
            onDropdownToggle?.(false)
          } else {
            setInternalIsOpen(false)
          }
        }
      }

      if (dropdownOpen) {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [dropdownOpen, isControlled, onDropdownToggle])

    const content = (
      <>
        <span className={styles.text}>{children}</span>
        {badge && <span className={styles.badge}>{badge}</span>}
        {hasDropdown && (
          <span className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`} aria-hidden="true">
            <ChevronDownIcon />
          </span>
        )}
      </>
    )

    const buttonElement =
      href && !hasDropdown && !disabled ? (
        <a href={href} target={target} className={getClassNames()} aria-label={ariaLabel} role="button" tabIndex={0}>
          {content}
        </a>
      ) : (
        <button
          ref={buttonRef}
          className={getClassNames()}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-expanded={hasDropdown ? dropdownOpen : undefined}
          aria-haspopup={hasDropdown ? "menu" : undefined}
          {...props}
        >
          {content}
        </button>
      )

    if (hasDropdown && dropdownContent) {
      return (
        <div className={styles.menuContainer}>
          {buttonElement}
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className={`${styles.dropdown} ${megaMenu ? styles.megaMenu : ""}`}
              role="menu"
              aria-orientation="vertical"
            >
              {dropdownContent}
            </div>
          )}
        </div>
      )
    }

    return buttonElement
  },
)

MenuButton.displayName = "MenuButton"

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path
      d="M7 10l5 5 5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

export { MenuButton }
