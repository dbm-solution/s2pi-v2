"use client"

import { memo } from "react"
import { ChevronDown, Globe, Search, Loader2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguageSelector } from "@/hooks/useLanguageSelector"
import type { Language, LanguageSelectorProps } from "@/content/data/languages"
import { Button } from "../text-field/button"
import { LANGUAGE_CONFIG } from "@/lib/i18n/config"

/**
 * Enhanced Language Selector with localStorage persistence
 */
export const LanguageSelector = memo<LanguageSelectorProps>(
  ({
    languages,
    selectedLanguage, // Now optional - will use localStorage if not provided
    onLanguageChange,
    variant = "dropdown",
    size = "md",
    showNames = true,
    showNativeNames = false,
    showFlags = true,
    placeholder = "Select language",
    disabled = false,
    className,
    dropdownClassName,
    position = "bottom-left",
    trigger,
    loading = false,
    error,
    maxHeight = 300,
    searchable = false,
    searchPlaceholder = "Search languages...",
    noResultsMessage = "No languages found",
  }) => {
    const {
      isOpen,
      setIsOpen,
      searchQuery,
      setSearchQuery,
      focusedIndex,
      currentLanguage,
      currentLocale,
      filteredLanguages,
      handleLanguageSelect,
      handleKeyDown,
      dropdownRef,
      triggerRef,
    } = useLanguageSelector(languages, selectedLanguage, onLanguageChange)

    // Size variants
    const sizeClasses = {
      sm: "text-xs px-2 py-1",
      md: "text-sm px-3 py-2",
      lg: "text-base px-4 py-3",
    }

    // Position classes
    const positionClasses = {
      "bottom-left": "top-full left-0 mt-1",
      "bottom-right": "top-full right-0 mt-1",
      "top-left": "bottom-full left-0 mb-1",
      "top-right": "bottom-full right-0 mb-1",
    }

    const buttonSizeMap = {
      sm: "sm" as const,
      md: "default" as const,
      lg: "lg" as const,
    }

    // Render language item with RTL support
    const renderLanguageItem = (language: Language, isSelected = false, isFocused = false) => {
      const langConfig = LANGUAGE_CONFIG[language.code as keyof typeof LANGUAGE_CONFIG]
      
      return (
        <div className={cn(
          "flex items-center space-x-2",
          langConfig?.dir === 'rtl' && "space-x-reverse"
        )}>
          {showFlags && language.flag && (
            <span className="text-lg" role="img" aria-label={`${language.name} flag`}>
              {language.flag}
            </span>
          )}
          {showFlags && language.icon && <language.icon className="w-4 h-4" />}
          <div className="flex flex-col">
            {showNames && (
              <span className={cn(
                "font-medium", 
                isSelected && "text-blue-600", 
                isFocused && "text-blue-600"
              )}>
                {language.name}
              </span>
            )}
            {showNativeNames && language.nativeName && (
              <span className="text-xs text-gray-500">{language.nativeName}</span>
            )}
          </div>
        </div>
      )
    }

    // Inline variant
    if (variant === "inline") {
      return (
        <div className={cn("flex items-center space-x-2", className)}>
          {languages.map((language) => (
            <Button
              key={language.code}
              variant={language.code === currentLocale ? "default" : "ghost"}
              size={buttonSizeMap[size]}
              onClick={() => handleLanguageSelect(language)}
              disabled={disabled || loading}
              className={cn(
                "transition-colors", 
                language.code === currentLocale && "bg-blue-600 text-white"
              )}
            >
              {renderLanguageItem(language, language.code === currentLocale)}
            </Button>
          ))}
        </div>
      )
    }

    // Compact variant
    if (variant === "compact") {
      return (
        <div className={cn("relative", className)}>
          <Button
            ref={triggerRef}
            variant="ghost"
            size={buttonSizeMap[size]}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            disabled={disabled || loading}
            className="flex items-center space-x-1"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label={`Current language: ${currentLanguage?.name}`}
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                {showFlags && currentLanguage?.flag && <span className="text-sm">{currentLanguage.flag}</span>}
                <span className="text-xs font-medium">{currentLanguage?.code.toUpperCase()}</span>
              </>
            )}
          </Button>

          {isOpen && (
            <div
              ref={dropdownRef}
              className={cn(
                "absolute z-50 bg-white border border-gray-200 rounded-md shadow-lg",
                positionClasses[position],
                dropdownClassName,
              )}
              style={{ maxHeight }}
            >
              <div className="py-1 max-h-60 overflow-y-auto">
                {filteredLanguages.map((language, index) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language)}
                    className={cn(
                      "w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none",
                      language.code === currentLocale && "bg-blue-50 text-blue-600",
                      index === focusedIndex && "bg-gray-50",
                    )}
                    role="option"
                    aria-selected={language.code === currentLocale}
                  >
                    {renderLanguageItem(language, language.code === currentLocale, index === focusedIndex)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    }

    // Default dropdown variant
    return (
      <div className={cn("relative", className)}>
        {/* Custom trigger or default button */}
        {trigger ? (
          <div onClick={() => !disabled && !loading && setIsOpen(!isOpen)}>{trigger}</div>
        ) : (
          <Button
            ref={triggerRef}
            variant="outline"
            size={buttonSizeMap[size]}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            disabled={disabled || loading}
            className={cn("justify-between min-w-[200px]", sizeClasses[size], error && "border-red-500")}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label={`Language selector. Current: ${currentLanguage?.name}`}
          >
            <div className="flex items-center space-x-2">
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  {!currentLanguage && <Globe className="w-4 h-4 text-gray-400" />}
                  {renderLanguageItem(currentLanguage || { code: "", name: placeholder })}
                </>
              )}
            </div>
            <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
          </Button>
        )}

        {/* Error message */}
        {error && (
          <div className="flex items-center mt-1 text-sm text-red-600">
            <AlertCircle className="w-4 h-4 mr-1" />
            {error}
          </div>
        )}

        {/* Dropdown */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className={cn(
              "absolute z-50 bg-white border border-gray-200 rounded-md shadow-lg",
              positionClasses[position],
              dropdownClassName,
            )}
            style={{ maxHeight }}
            role="listbox"
            aria-label="Language options"
          >
            {/* Search input */}
            {searchable && (
              <div className="p-2 border-b border-gray-100">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
              </div>
            )}

            {/* Language options */}
            <div className="py-1 max-h-60 overflow-y-auto">
              {filteredLanguages.length === 0 ? (
                <div className="px-3 py-2 text-sm text-gray-500 text-center">{noResultsMessage}</div>
              ) : (
                filteredLanguages.map((language, index) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language)}
                    className={cn(
                      "w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors",
                      language.code === currentLocale && "bg-blue-50 text-blue-600",
                      index === focusedIndex && "bg-gray-50",
                    )}
                    role="option"
                    aria-selected={language.code === currentLocale}
                  >
                    {renderLanguageItem(language, language.code === currentLocale, index === focusedIndex)}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    )
  },
)

LanguageSelector.displayName = "LanguageSelector"
