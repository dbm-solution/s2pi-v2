"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSelector } from '@/components/ui/language-selector/language-selector';
import { changeLanguage } from '@/lib/actions/locale';
import type { Language } from '@/content/data/languages';
import styles from './TopBar.module.css';
import EnquetteButton from '@/components/ui/buttons/enquette/enquette.button';

interface TopBarProps {
  locale?: string;
  isSticky?: boolean;
}

// Supported languages for S2PI
const supportedLanguages: Language[] = [
  {
    code: 'fr',
    name: 'FR',
    nativeName: 'Français',
    flag: '🇫🇷',
  },
  {
    code: 'en',
    name: 'EN',
    nativeName: 'English',
    flag: '🇬🇧',
  },
  {
    code: 'es',
    name: 'ES',
    nativeName: 'Español',
    flag: '🇪🇸',
  },
  {
    code: 'it',
    name: 'IT',
    nativeName: 'Italiano',
    flag: '🇮🇹',
  },
  {
    code: 'ar',
    name: 'AR',
    nativeName: 'العربية',
    flag: '🇸🇦',
  },
];

export default function TopBar({ locale = 'fr', isSticky = false }: TopBarProps) {
  const [currentLanguage, setCurrentLanguage] = useState(locale);
  const pathname = usePathname();

  const handleLanguageChange = async (language: Language) => {
    try {
      setCurrentLanguage(language.code);
      await changeLanguage(language.code, pathname);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <div className={`${styles.topBar} ${isSticky ? styles.stickyTopBar : ''}`}>
      <div className="container-s2pi">
        <div className={styles.topBarContent}>
          {/* Left Side - Contact Information */}
          <div className={styles.leftWidgets}>
            <span className={styles.contactInfo}>
              📞 04 58 00 02 20
            </span>
            <Link href="mailto:contact@s2pi.fr" className={styles.contactInfo}>
              ✉ contact@s2pi.fr
            </Link>
            <span className={styles.contactInfo}>
              15 rue Jean Rostand • 69740 Genas
            </span>
          </div>

          {/* Right Side - Language Selector, LinkedIn and Enquête Button */}
          <div className={styles.rightWidgets}>
            {/* Language Selector */}
            <div className={styles.languageSelector} style={{ position: 'relative', zIndex: 9999 }}>
              <LanguageSelector
                languages={supportedLanguages}
                selectedLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
                variant="compact"
                size="sm"
                showFlags={true}
                showNames={true}
                className={styles.languageSelectorDropdown}
                dropdownClassName="language-dropdown-above-all s2pi-language-dropdown"
              />
            </div>

            {/* LinkedIn Button */}
            <Link
              href="https://www.linkedin.com/company/s2pi-isolation/?viewAsMember=true"
              target="_blank"
              rel="noopener"
              className={styles.linkedinButton}
            >
              in
            </Link>

            {/* Enquête Button */}

            <EnquetteButton 
               href="/enquete-de-satisfaction" 
               variant="standard"
               hoverStyle={{ backgroundColor: '#a01f1f' }}
                />
{/* 
            <Link
              href="/enquete-de-satisfaction"
              className={styles.enqueteButton}
            >
              ENQUÊTE
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
