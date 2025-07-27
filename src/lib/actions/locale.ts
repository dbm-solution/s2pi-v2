'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { LOCALES, DEFAULT_LOCALE } from '../i18n/config';

/**
 * Server action to change language and redirect
 */
export async function changeLanguage(locale: string, currentPath?: string) {
  // Validate locale
  if (!LOCALES.includes(locale as any)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  // Set the cookie
  const cookieStore = await cookies();
  cookieStore.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60, // 1 year
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  });

  // Construct the new path
  let newPath = `/${locale}`;
  
  if (currentPath && currentPath !== '/') {
    // Remove existing locale from path if present
    const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/');
    newPath = `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  }

  // Redirect to the new locale path
  redirect(newPath);
}

/**
 * Get the current locale from cookies
 */
export async function getCurrentLocale(): Promise<string> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');
  
  if (localeCookie?.value && LOCALES.includes(localeCookie.value as any)) {
    return localeCookie.value;
  }
  
  return DEFAULT_LOCALE;
} 