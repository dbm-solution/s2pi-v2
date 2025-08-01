export interface S2PIThemeConfig {
  colors: {
    primary: string
    primaryHover: string
    primaryLight: string
    secondary: string
    textPrimary: string
    textSecondary: string
    textMuted: string
    textLight: string
    bgPrimary: string
    bgSecondary: string
    bgAccent: string
    borderLight: string
    borderMedium: string
    borderDark: string
  }
  typography: {
    fontFamilyPrimary: string
    fontFamilySecondary: string
    fontSize: {
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      "2xl": string
      "3xl": string
      "4xl": string
    }
    fontWeight: {
      light: number
      normal: number
      medium: number
      semibold: number
      bold: number
    }
    lineHeight: {
      tight: number
      snug: number
      normal: number
      relaxed: number
      loose: number
      custom: number
      xl: number
      "2xl": number
    }
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    "2xl": string
    "3xl": string
    separatorMarginX: string
    separatorMarginBottom: string
    contentPaddingY: string
    contentPaddingBottom: string
  }
  borderRadius: {
    sm: string
    md: string
    lg: string
    xl: string
  }
  shadows: {
    sm: string
    md: string
    lg: string
  }
  transitions: {
    fast: string
    normal: string
    slow: string
  }
  zIndex: {
    dropdown: number
    sticky: number
    fixed: number
    modal: number
    popover: number
    tooltip: number
  }
}

export const defaultS2PITheme: S2PIThemeConfig = {
  colors: {
    primary: "#1d4572",
    primaryHover: "#153a5f",
    primaryLight: "#2a5a8a",
    secondary: "#636363",
    textPrimary: "#232323",
    textSecondary: "#565656",
    textMuted: "#636363",
    textLight: "#888888",
    bgPrimary: "#ffffff",
    bgSecondary: "#f8f9fa",
    bgAccent: "#f0f4f8",
    borderLight: "#e5e7eb",
    borderMedium: "#d1d5db",
    borderDark: "#9ca3af",
  },
  typography: {
    fontFamilyPrimary: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontFamilySecondary: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "17px",
      lg: "20px",
      xl: "22px",
      "2xl": "28px",
      "3xl": "36px",
      "4xl": "48px",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 1.75,
      custom: 1.82, // 31px / 17px
      xl: 2.11, // 36px / 17px
      "2xl": 1.36, // 60px / 48px
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    separatorMarginX: "233.125px",
    separatorMarginBottom: "35px",
    contentPaddingY: "60px",
    contentPaddingBottom: "25px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  transitions: {
    fast: "150ms ease-in-out",
    normal: "200ms ease-in-out",
    slow: "300ms ease-in-out",
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
}

export const applyS2PITheme = (theme: Partial<S2PIThemeConfig> = {}) => {
  const mergedTheme = { ...defaultS2PITheme, ...theme }

  if (typeof document !== "undefined") {
    const root = document.documentElement

    // Apply colors
    Object.entries(mergedTheme.colors).forEach(([key, value]) => {
      const cssVar = `--s2pi-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
      root.style.setProperty(cssVar, value)
    })

    // Apply typography
    Object.entries(mergedTheme.typography.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--s2pi-text-${key}`, value)
    })

    Object.entries(mergedTheme.typography.fontWeight).forEach(([key, value]) => {
      root.style.setProperty(`--s2pi-font-${key}`, value.toString())
    })

    Object.entries(mergedTheme.typography.lineHeight).forEach(([key, value]) => {
      root.style.setProperty(`--s2pi-leading-${key}`, value.toString())
    })

    // Apply spacing
    Object.entries(mergedTheme.spacing).forEach(([key, value]) => {
      const cssVar = `--s2pi-space-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
      root.style.setProperty(cssVar, value)
    })

    // Apply other properties
    Object.entries(mergedTheme.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--s2pi-radius-${key}`, value)
    })

    Object.entries(mergedTheme.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--s2pi-shadow-${key}`, value)
    })

    Object.entries(mergedTheme.transitions).forEach(([key, value]) => {
      root.style.setProperty(`--s2pi-transition-${key}`, value)
    })
  }

  return mergedTheme
}

// Utility function to get CSS variable value
export const getS2PIVar = (variable: string): string => {
  if (typeof document !== "undefined") {
    return getComputedStyle(document.documentElement).getPropertyValue(`--s2pi-${variable}`).trim()
  }
  return ""
}

// Predefined theme variations
export const s2piThemeVariations = {
  default: defaultS2PITheme,

  compact: {
    ...defaultS2PITheme,
    spacing: {
      ...defaultS2PITheme.spacing,
      separatorMarginX: "16px",
      contentPaddingY: "32px",
      contentPaddingBottom: "16px",
    },
    typography: {
      ...defaultS2PITheme.typography,
      fontSize: {
        ...defaultS2PITheme.typography.fontSize,
        base: "15px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
      },
    },
  },

  large: {
    ...defaultS2PITheme,
    spacing: {
      ...defaultS2PITheme.spacing,
      separatorMarginX: "300px",
      contentPaddingY: "80px",
      contentPaddingBottom: "40px",
    },
    typography: {
      ...defaultS2PITheme.typography,
      fontSize: {
        ...defaultS2PITheme.typography.fontSize,
        base: "19px",
        xl: "26px",
        "2xl": "32px",
        "3xl": "42px",
        "4xl": "56px",
      },
    },
  },

  minimal: {
    ...defaultS2PITheme,
    colors: {
      ...defaultS2PITheme.colors,
      textPrimary: "#1a1a1a",
      textSecondary: "#4a4a4a",
      textMuted: "#6a6a6a",
    },
    spacing: {
      ...defaultS2PITheme.spacing,
      separatorMarginX: "0px",
      contentPaddingY: "40px",
      contentPaddingBottom: "20px",
    },
  },
} as const

export type S2PIThemeVariation = keyof typeof s2piThemeVariations
