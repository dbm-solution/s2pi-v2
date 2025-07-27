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

/**
 * Common language configurations
 */
export const commonLanguages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    rtl: false,
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    rtl: false,
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    rtl: false,
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    rtl: false,
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    rtl: false,
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "🇵🇹",
    rtl: false,
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
    rtl: false,
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "🇨🇳",
    rtl: false,
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    rtl: false,
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇸🇦",
    rtl: true,
  },
]

/**
 * European languages subset
 */
export const europeanLanguages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
  },
]
