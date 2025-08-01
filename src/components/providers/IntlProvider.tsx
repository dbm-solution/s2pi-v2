"use client";

import React, { createContext, useContext, ReactNode } from 'react';

interface IntlContextType {
  locale: string;
  messages: Record<string, any>;
  t: (key: string, defaultValue?: string) => string;
}

const IntlContext = createContext<IntlContextType | null>(null);

interface IntlProviderProps {
  locale: string;
  messages: Record<string, any>;
  children: ReactNode;
}

// Helper function to get nested value from object using dot notation
function getNestedValue(obj: Record<string, any>, path: string): any {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

export function IntlProvider({ locale, messages, children }: IntlProviderProps) {
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

  const contextValue: IntlContextType = {
    locale,
    messages,
    t,
  };

  return (
    <IntlContext.Provider value={contextValue}>
      {children}
    </IntlContext.Provider>
  );
}

export function useTranslations(namespace?: string) {
  const context = useContext(IntlContext);
  
  if (!context) {
    throw new Error('useTranslations must be used within an IntlProvider');
  }

  const t = (key: string, defaultValue?: string): string => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return context.t(fullKey, defaultValue);
  };

  // Add raw method to access raw values (arrays, objects)
  t.raw = (key: string): any => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return getNestedValue(context.messages, fullKey);
  };

  return t;
}

export function useLocale() {
  const context = useContext(IntlContext);
  
  if (!context) {
    throw new Error('useLocale must be used within an IntlProvider');
  }

  return context.locale;
} 