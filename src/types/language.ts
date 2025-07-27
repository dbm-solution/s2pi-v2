import type React from "react"
/**
 * Language configuration interface
 */
export interface Language {
  /** ISO 639-1 language code (e.g., 'en', 'fr', 'es') */
  code: string
  /** Display name of the language */
  name: string
  /** Native name of the language (optional) */
  nativeName?: string
  /** Flag emoji or icon (optional) */
  flag?: string
  /** Custom icon component (optional) */
  icon?: React.ComponentType<{ className?: string }>
  /** RTL language direction */
  rtl?: boolean
}

/**
 * Language selector component props
 */
export interface LanguageSelectorProps {
  /** List of supported languages */
  languages: Language[]
  /** Currently selected language code */
  selectedLanguage: string
  /** Callback when language changes */
  onLanguageChange: (language: Language) => void
  /** Display variant */
  variant?: "dropdown" | "inline" | "compact"
  /** Size variant */
  size?: "sm" | "md" | "lg"
  /** Show language names */
  showNames?: boolean
  /** Show native names */
  showNativeNames?: boolean
  /** Show flags/icons */
  showFlags?: boolean
  /** Custom placeholder text */
  placeholder?: string
  /** Disabled state */
  disabled?: boolean
  /** Custom CSS classes */
  className?: string
  /** Custom dropdown classes */
  dropdownClassName?: string
  /** Position of dropdown */
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right"
  /** Custom trigger element */
  trigger?: React.ReactNode
  /** Loading state */
  loading?: boolean
  /** Error state */
  error?: string
  /** Maximum height of dropdown */
  maxHeight?: number
  /** Enable search/filter */
  searchable?: boolean
  /** Custom search placeholder */
  searchPlaceholder?: string
  /** Custom no results message */
  noResultsMessage?: string
}
