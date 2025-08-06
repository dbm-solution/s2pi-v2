"use client";

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useS2PILocale } from '@/hooks/useLocalStorage';
import { DEFAULT_LOCALE, LOCALES } from '@/lib/i18n/config';

interface TranslationContextType {
  locale: string;
  messages: Record<string, any>;
  setLocale: (locale: string) => void;
  isLoading: boolean;
  t: (key: string, defaultValue?: string) => string;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

interface ClientTranslationProviderProps {
  children: ReactNode;
  initialLocale?: string;
}

// Helper function to get nested value from object using dot notation
function getNestedValue(obj: Record<string, any>, path: string): any {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

export function ClientTranslationProvider({ 
  children, 
  initialLocale 
}: ClientTranslationProviderProps) {
  // Use your existing localStorage hook
  const [storedLocale, setStoredLocale] = useS2PILocale(initialLocale || DEFAULT_LOCALE);
  const [messages, setMessages] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations when locale changes
  useEffect(() => {
    async function loadTranslations() {
      if (!storedLocale || !LOCALES.includes(storedLocale as any)) return;
      
      setIsLoading(true);
      try {
        const translations = await import(`../../locales/${storedLocale}/index`);
        setMessages(translations.default);
      } catch (error) {
        console.warn(`Failed to load ${storedLocale} messages, falling back to French:`, error);
        try {
          const fallbackTranslations = await import(`../../locales/fr/index`);
          setMessages(fallbackTranslations.default);
        } catch (fallbackError) {
          console.error('Failed to load French fallback messages:', fallbackError);
          setMessages({});
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadTranslations();
  }, [storedLocale]);

  // Translation function
  const t = (key: string, defaultValue?: string): string => {
    const value = getNestedValue(messages, key);
    
    if (typeof value === 'string') {
      return value;
    }
    
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    
    return defaultValue || key;
  };

  // Handle locale change
  const setLocale = (newLocale: string) => {
    if (LOCALES.includes(newLocale as any)) {
      setStoredLocale(newLocale);
    }
  };

  const contextValue: TranslationContextType = {
    locale: storedLocale,
    messages,
    setLocale,
    isLoading,
    t,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
}

// Hook for using translations with optional namespace
export function useClientTranslations(namespace?: string) {
  const context = useContext(TranslationContext);
  
  if (!context) {
    throw new Error('useClientTranslations must be used within a ClientTranslationProvider');
  }

  const { t: contextT, messages } = context;

  const t = (key: string, defaultValue?: string): string => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return contextT(fullKey, defaultValue);
  };

  // Add raw method to access raw values (arrays, objects)
  t.raw = (key: string): any => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return getNestedValue(messages, fullKey);
  };

  return t;
}

// Hook for locale management
export function useClientLocale() {
  const context = useContext(TranslationContext);
  
  if (!context) {
    throw new Error('useClientLocale must be used within a ClientTranslationProvider');
  }

  return {
    locale: context.locale,
    setLocale: context.setLocale,
    isLoading: context.isLoading,
  };
}
