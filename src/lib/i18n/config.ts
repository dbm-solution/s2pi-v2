import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Supported locales configuration
export const LOCALES = ['fr', 'en', 'ar', 'es', 'it'] as const;
export const DEFAULT_LOCALE = 'fr' as const;

export type Locale = typeof LOCALES[number];

// RTL languages configuration
export const RTL_LOCALES: readonly Locale[] = ['ar'] as const;

// Language metadata
export const LANGUAGE_CONFIG = {
  fr: {
    name: 'Français',
    nativeName: 'Français', 
    flag: '🇫🇷',
    dir: 'ltr' as const,
  },
  en: {
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧', 
    dir: 'ltr' as const,
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl' as const,
  },
  es: {
    name: 'Spanish', 
    nativeName: 'Español',
    flag: '🇪🇸',
    dir: 'ltr' as const,
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano', 
    flag: '🇮🇹',
    dir: 'ltr' as const,
  },
} as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!LOCALES.includes(locale as Locale)) notFound();

  let messages = {};
  try {
    messages = (await import(`../../locales/${locale}/index`)).default;
  } catch (error) {
    console.warn(`Failed to load ${locale} messages, using French fallback:`, error);
    try {
      messages = (await import(`../../locales/fr/index`)).default;
    } catch (fallbackError) {
      console.error('Failed to load French fallback messages:', fallbackError);
      messages = {};
    }
  }

  return {
    locale: locale as string,
    messages,
    timeZone: 'Europe/Paris',
    now: new Date(),
  };
});