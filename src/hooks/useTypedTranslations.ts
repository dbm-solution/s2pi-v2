import { useClientTranslations, useClientLocale } from '@/components/providers/ClientTranslationProvider';

// Import all translation files by locale and namespace
import frTranslations from '@/locales/fr';
import enTranslations from '@/locales/en';
import esTranslations from '@/locales/es';
import itTranslations from '@/locales/it';
import arTranslations from '@/locales/ar';

// Helper type to create nested object structure
type DeepObject<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? DeepObject<T[K]>
        : T[K] extends Array<infer U>
        ? U extends string
          ? T[K] // Keep arrays as arrays
          : T[K]
        : T[K];
    }
  : T;

// Translation schemas mapping by locale
const translationSchemas = {
  fr: frTranslations,
  en: enTranslations,
  es: esTranslations,
  it: itTranslations,
  ar: arTranslations,
} as const;

// Type for available locales and namespaces
type AvailableLocales = keyof typeof translationSchemas;
type AvailableNamespaces = keyof typeof translationSchemas[AvailableLocales];

// Helper function to get nested value from object using dot notation
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Create a proxy that allows dot notation access
function createTranslationProxy<T extends Record<string, any>>(translations: T): DeepObject<T> {
  return new Proxy({} as any, {
    get(target, prop) {
      if (typeof prop === 'string') {
        const value = getNestedValue(translations, prop);
        
        // If it's an object, create another proxy for nested access
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          return createTranslationProxy(value);
        }
        
        return value;
      }
      return undefined;
    }
  }) as DeepObject<T>;
}

// Universal typed translations hook
export function useTypedTranslations<T extends AvailableNamespaces>(
  namespace: T
) {
  const baseT = useClientTranslations(namespace);
  const { locale } = useClientLocale(); // Get current locale from context
  
  // Use current locale or fallback to French
  const currentLocale = (locale as AvailableLocales) || 'fr';
  const schema = translationSchemas[currentLocale]?.[namespace] || translationSchemas.fr[namespace];
  
  // Create the proxy for dot notation access
  const t = createTranslationProxy(schema) as DeepObject<typeof schema>;
  
  return {
    t, // Dot notation access: t.introduction.left
    raw: (key: string) => baseT.raw(key), // For arrays: raw('commitments.items')
    getString: (key: string) => baseT(key) // Fallback for dynamic keys
  };
}

// Export types for each namespace (using French as the type reference)
export type AboutTranslations = DeepObject<typeof frTranslations.about>;
export type HomeTranslations = DeepObject<typeof frTranslations.home>;
export type CommonTranslations = DeepObject<typeof frTranslations.common>;
export type NavTranslations = DeepObject<typeof frTranslations.nav>;
export type ProductsTranslations = DeepObject<typeof frTranslations.products>;
export type SolutionsTranslations = DeepObject<typeof frTranslations.solutions>;
export type ContactTranslations = DeepObject<typeof frTranslations.contact>;
export type FooterTranslations = DeepObject<typeof frTranslations.footer>;
export type ErrorsTranslations = DeepObject<typeof frTranslations.errors>;
export type ThermalInsulationTranslations = DeepObject<typeof frTranslations.thermalInsulation>;