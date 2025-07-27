"use client";

import { useState, useEffect } from 'react';
import { DEFAULT_LOCALE } from '@/lib/i18n/config';
import { LOCALE_COOKIE } from '@/lib/cookies';

/**
 * Client-side hook to read locale from cookies
 * Note: This is read-only on client side. Changes should be done via server actions.
 */
export function useLocaleCookie(): string {
  const [locale, setLocale] = useState<string>(DEFAULT_LOCALE);

  useEffect(() => {
    // Read cookie on client side
    const getCookieValue = (name: string): string | null => {
      if (typeof document === 'undefined') return null;
      
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? match[2] : null;
    };

    const cookieLocale = getCookieValue(LOCALE_COOKIE);
    if (cookieLocale) {
      setLocale(cookieLocale);
    }
  }, []);

  return locale;
}

/**
 * Utility to get locale from document cookies (client-side only)
 */
export function getClientLocale(): string {
  if (typeof document === 'undefined') return DEFAULT_LOCALE;
  
  const match = document.cookie.match(new RegExp(`(^| )${LOCALE_COOKIE}=([^;]+)`));
  return match ? match[2] : DEFAULT_LOCALE;
} 