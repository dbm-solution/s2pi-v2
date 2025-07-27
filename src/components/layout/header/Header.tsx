"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from './nav-bar/Nav';
import TopBar from './top-bar/TopBar';
import styles from './Header.module.css';

interface HeaderProps {
  locale?: string;
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

export default function Header({ locale = 'fr', onMobileMenuToggle, isMobileMenuOpen }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Activate sticky mode when scrolled down enough (adjust threshold as needed)
      const threshold = 100; // pixels
      setIsSticky(currentScrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.masthead} ${isSticky ? styles.stickyMode : ''}`}>
      {/* Top Bar - always visible */}
      <TopBar locale={locale} isSticky={isSticky} />

      {/* Main Header Section */}
      <div className={`${styles.headerMain} ${isSticky ? styles.headerMainSticky : ''}`}>
        <div className="container-s2pi">
          <div className={styles.headerContent}>
            {/* Left Section - Logo and Tagline (hidden in sticky mode) */}
            {!isSticky && (
              <div className={styles.leftSection}>
                <div className={styles.logoSection}>
                  <Link href="/" className={styles.logoLink}>
                    <Image
                      className={styles.logoImage}
                      src="/images/Logo-S2PI.png"
                      width={280}
                      height={90}
                      sizes="280px"
                      alt="S2PI - Société de Production de Produits Isolants"
                      priority
                    />
                  </Link>
                </div>

                {/* Tagline Section - Beside Logo */}
                <div className={styles.taglineSection}>
                  <p className={styles.taglineText}>
                    Une société de proximité<br />
                    et à l'écoute de ses clients
                  </p>
                </div>
              </div>
            )}

            {/* Certifications Section - Right (hidden in sticky mode) */}
            {!isSticky && (
              <div className={styles.certificationsSection}>
                <Image
                  src="/images/s2pi-pictogrammes-header-03.png"
                  width={297}
                  height={98}
                  alt="Isolation Thermique"
                  className={styles.badgeImage}
                />
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className={styles.mobileMenuToggle}
              onClick={onMobileMenuToggle}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
            </button>
          </div>
        </div>
        
        {/* Navigation Section with optional logo in sticky mode */}
        <Nav locale={locale} isSticky={isSticky} />
      </div>
    </div>
  );
}
