"use client"

import { useState, useEffect, useCallback } from 'react'

/**
 * Custom hook for localStorage with SSR support
 * @param key - localStorage key
 * @param initialValue - default value
 * @returns [value, setValue, removeValue]
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        // Allow value to be a function so we have the same API as useState
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        
        // Save to local storage
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore))
          
          // Dispatch storage event for cross-tab synchronization
          window.dispatchEvent(new StorageEvent('storage', {
            key,
            newValue: JSON.stringify(valueToStore),
            storageArea: localStorage
          }))
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error)
      }
    },
    [key, storedValue]
  )

  // Remove value from localStorage
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue)
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
        
        // Dispatch storage event
        window.dispatchEvent(new StorageEvent('storage', {
          key,
          newValue: null,
          storageArea: localStorage
        }))
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
    }
  }, [key, initialValue])

  // Listen for changes in localStorage (cross-tab synchronization)
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.storageArea === localStorage) {
        try {
          const newValue = e.newValue ? JSON.parse(e.newValue) : initialValue
          setStoredValue(newValue)
        } catch (error) {
          console.warn(`Error parsing localStorage value for key "${key}":`, error)
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [key, initialValue])

  return [storedValue, setValue, removeValue]
}

/**
 * Hook specifically for S2PI locale storage
 */
export function useS2PILocale(defaultLocale: string = 'fr') {
  return useLocalStorage<string>('s2pi_locale', defaultLocale)
}
