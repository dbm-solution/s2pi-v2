"use client"

import type React from "react"
import { ActionsButton } from "@/components/ui/buttons/actions-button/actions-button"

interface ActionsButtonGroupProps {
  buttons: Array<{
    id: string
    label: string
    variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "custom"
    icon?: React.ReactNode
    href?: string
    onClick?: () => void
    download?: boolean | string
    disabled?: boolean
  }>
  size?: "sm" | "md" | "lg"
  shape?: "rectangle" | "rounded" | "pill"
  orientation?: "horizontal" | "vertical"
  fullWidth?: boolean
  className?: string
}

export const ActionsButtonGroup: React.FC<ActionsButtonGroupProps> = ({
  buttons,
  size = "md",
  shape = "rounded",
  orientation = "horizontal",
  fullWidth = false,
  className = "",
}) => {
  const containerClasses = [
    "flex",
    orientation === "horizontal" ? "flex-row gap-3" : "flex-col gap-2",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={containerClasses} role="group" aria-label="Action buttons">
      {buttons.map((button) => (
        <ActionsButton
          key={button.id}
          variant={button.variant}
          size={size}
          shape={shape}
          href={button.href}
          onClick={button.onClick}
          icon={button.icon}
          download={button.download}
          disabled={button.disabled}
          fullWidth={fullWidth}
          ariaLabel={button.label}
        >
          {button.label}
        </ActionsButton>
      ))}
    </div>
  )
}
