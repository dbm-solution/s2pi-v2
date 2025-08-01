'use client';

import { useEffect, ReactNode } from 'react';

interface LocaleProviderProps {
  locale: string;
  children: ReactNode;
}

export default function LocaleProvider({ locale, children }: LocaleProviderProps) {
  useEffect(() => {
    // Set the lang attribute on the html element
    document.documentElement.lang = locale;
    
    // Set the dir attribute based on locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    
    // Remove the no-js class and add js class
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
  }, [locale]);

  return <>{children}</>;
} 