"use client"

import type React from "react"

import { useState } from "react"
import { MenuButton } from "@/components/ui/buttons/menu-button/menu-button"
import { MenuItem } from "@/components/ui/buttons/menu-item/menu-item"

interface NavigationItem {
  id: string
  label: string
  href?: string
  variant?: "default" | "active" | "highlight" | "secondary"
  hasDropdown?: boolean
  megaMenu?: boolean
  items?: Array<{
    id: string
    label: string
    href?: string
    description?: string
    active?: boolean
  }>
}

interface NavigationBarProps {
  items: NavigationItem[]
  className?: string
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ items, className = "" }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleToggle = (itemId: string, isOpen: boolean) => {
    setOpenDropdown(isOpen ? itemId : null)
  }

  return (
    <nav className={`flex items-center gap-1 ${className}`} role="navigation" aria-label="Main navigation">
      {items.map((item) => (
        <MenuButton
          key={item.id}
          variant={item.variant}
          href={item.href}
          hasDropdown={item.hasDropdown}
          isOpen={openDropdown === item.id}
          onDropdownToggle={(isOpen: boolean) => handleToggle(item.id, isOpen)}
          megaMenu={item.megaMenu}
          dropdownContent={
            item.items && (
              <div>
                {item.items.map((subItem) => (
                  <MenuItem
                    key={subItem.id}
                    href={subItem.href}
                    active={subItem.active}
                    description={subItem.description}
                  >
                    {subItem.label}
                  </MenuItem>
                ))}
              </div>
            )
          }
        >
          {item.label}
        </MenuButton>
      ))}
    </nav>
  )
}
