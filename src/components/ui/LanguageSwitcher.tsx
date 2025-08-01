"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { changeLanguage } from '@/lib/actions/locale';

interface LanguageSwitcherProps {
  currentLocale?: string;
}

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export default function LanguageSwitcher({ currentLocale = 'fr' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = async (locale: string) => {
    try {
      await changeLanguage(locale, pathname);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white border-2 border-s2pi-blue-300 rounded-s2pi px-4 py-2 hover:bg-s2pi-blue-50 hover:border-s2pi-blue-400 transition-all duration-200 shadow-s2pi"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-bold text-s2pi-gray-700">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 text-s2pi-blue-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border-2 border-s2pi-blue-300 rounded-s2pi shadow-s2pi-lg z-50 min-w-40 overflow-hidden">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setIsOpen(false);
                handleLanguageChange(language.code);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-s2pi-blue-50 transition-colors border-b border-s2pi-gray-200 last:border-b-0 ${
                language.code === currentLocale 
                  ? 'bg-s2pi-blue-100 text-s2pi-blue-700 font-bold' 
                  : 'text-s2pi-gray-700 hover:text-s2pi-blue-600'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
              {language.code === currentLocale && (
                <svg className="w-4 h-4 text-s2pi-blue-600 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
