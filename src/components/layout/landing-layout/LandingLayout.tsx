'use client';

import React, { useEffect, useState } from 'react';
import './LandingLayout.css';
import Header from '../header/Header';
import Navigation from '../header/nav-bar/Nav';
import MobileNavigation from '../mobile-nav/MobileNav';
import Footer from '../footer/Footer';
// import TopBar from '../header/top-bar/TopBar';
import { S2PIHeroSlider } from '@/components/ui/slider/hero-slider/s2pi-hero-slider';

interface LandingLayoutProps {
  children: React.ReactNode;
  locale?: string;
  showTopBar?: boolean;
  showHeader?: boolean;
  showNavigation?: boolean;
  showFooter?: boolean;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({
  children,
  locale = 'fr',
  showTopBar = true,
  showHeader = true,
  showNavigation = true,
  showFooter = true
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      const loadElement = document.getElementById('load');
      if (loadElement) {
        loadElement.classList.add('loader-removed');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Toggle body scroll lock for mobile menu
    document.body.classList.toggle('mobile-menu-active', !isMobileMenuOpen);
  };

  return (
    <div id="page" className="landing-layout">
      <a className="skip-link screen-reader-text" href="#content">
        Aller au contenu
      </a>

      {(showTopBar || showHeader || showNavigation) && (
        <div>
          {showHeader && (
            <Header
              locale={locale}
              onMobileMenuToggle={toggleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
            />
          )}
        </div>
      )}


      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <main id="main" className="landing-main sidebar-none sidebar-divider-vertical">
        {children}
      </main>

      {showFooter && <Footer locale={locale} />}
    </div>
  );
};

export default LandingLayout;