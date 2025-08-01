import { cookies } from 'next/headers';
import { DEFAULT_LOCALE, LOCALES } from './i18n/config';

export const LOCALE_COOKIE = 'NEXT_LOCALE';

/**
 * Get the current locale from cookies (server-side)
 */
export async function getServerLocale(): Promise<string> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(LOCALE_COOKIE);
  
  if (localeCookie?.value && LOCALES.includes(localeCookie.value as any)) {
    return localeCookie.value;
  }
  
  return DEFAULT_LOCALE;
}

/**
 * Set the locale cookie (server action)
 */
export async function setServerLocale(locale: string) {
  'use server';
  
  if (!LOCALES.includes(locale as any)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  
  const cookieStore = await cookies();
  cookieStore.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60, // 1 year
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  });
} 