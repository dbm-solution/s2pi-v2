"use client"

import type React from "react"
import { useState, useCallback, useMemo, useRef, useEffect } from "react"
import { useRouter, usePathname } from 'next/navigation'
import type { Language } from "@/content/data/languages"
import { useS2PILocale } from './useLocalStorage'
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config'

/**
 * Enhanced language selector hook with localStorage persistence and routing
 */
export function useLanguageSelector(
  languages: Language[],
  selectedLanguage?: string,
  onLanguageChange?: (language: Language) => void,
) {
  const router = useRouter()
  const pathname = usePathname()
  
  // Get locale from localStorage
  const [storedLocale, setStoredLocale] = useS2PILocale(DEFAULT_LOCALE)
  
  // State management
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Determine current language - priority: prop > localStorage > default
  const currentLocale = selectedLanguage || storedLocale || DEFAULT_LOCALE
  
  // Get currently selected language object
  const currentLanguage = useMemo(
    () => languages.find((lang) => lang.code === currentLocale) || languages[0],
    [languages, currentLocale],
  )

  // Filter languages based on search query
  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) return languages

    const query = searchQuery.toLowerCase()
    return languages.filter(
      (lang) =>
        lang.name.toLowerCase().includes(query) ||
        lang.nativeName?.toLowerCase().includes(query) ||
        lang.code.toLowerCase().includes(query),
    )
  }, [languages, searchQuery])

  // Handle language change with routing and localStorage
  const handleLanguageSelect = useCallback(
    (language: Language) => {
      // Save to localStorage
      setStoredLocale(language.code)
      
      // Update URL if we're using route-based locales
      if (pathname && LOCALES.includes(language.code as any)) {
        // Extract current locale from pathname
        const currentLocaleInPath = pathname.split('/')[1]
        
        if (LOCALES.includes(currentLocaleInPath as any)) {
          // Replace current locale in path
          const newPath = pathname.replace(`/${currentLocaleInPath}`, `/${language.code}`)
          router.push(newPath)
        } else {
          // Add locale to path
          router.push(`/${language.code}${pathname}`)
        }
      }
      
      // Call external handler if provided
      onLanguageChange?.(language)
      
      // Close dropdown and reset state
      setIsOpen(false)
      setSearchQuery("")
      setFocusedIndex(-1)
      triggerRef.current?.focus()
    },
    [setStoredLocale, pathname, router, onLanguageChange],
  )

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "Enter":
        case " ":
          if (!isOpen) {
            setIsOpen(true)
            setFocusedIndex(0)
          } else if (focusedIndex >= 0) {
            handleLanguageSelect(filteredLanguages[focusedIndex])
          }
          e.preventDefault()
          break

        case "Escape":
          setIsOpen(false)
          setFocusedIndex(-1)
          triggerRef.current?.focus()
          break

        case "ArrowDown":
          if (!isOpen) {
            setIsOpen(true)
            setFocusedIndex(0)
          } else {
            setFocusedIndex((prev) => (prev < filteredLanguages.length - 1 ? prev + 1 : 0))
          }
          e.preventDefault()
          break

        case "ArrowUp":
          if (isOpen) {
            setFocusedIndex((prev) => (prev > 0 ? prev - 1 : filteredLanguages.length - 1))
            e.preventDefault()
          }
          break

        case "Tab":
          setIsOpen(false)
          setFocusedIndex(-1)
          break
      }
    },
    [isOpen, focusedIndex, filteredLanguages, handleLanguageSelect],
  )

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setFocusedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return {
    isOpen,
    setIsOpen,
    searchQuery,
    setSearchQuery,
    focusedIndex,
    setFocusedIndex,
    currentLanguage,
    currentLocale,
    storedLocale,
    filteredLanguages,
    handleLanguageSelect,
    handleKeyDown,
    dropdownRef,
    triggerRef,
  }
}
