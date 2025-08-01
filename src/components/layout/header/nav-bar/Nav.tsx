"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from './Nav.module.css';

interface NavItem {
  href: string;
  label: string;
  isExternal?: boolean;
  highlight?: 'nouveaute';
  children?: NavItem[];
}

interface NavProps {
  locale?: string;
  isSticky?: boolean;
}

const navItems: NavItem[] = [
  {
    href: "/",
    label: "ACCUEIL"
  },
  {
    href: "/a-propos",
    label: "A PROPOS"
  },
  {
    href: "/nouveaute",
    label: "NOUVEAUTÉ",
    highlight: 'nouveaute'
  },
  {
    href: "/nos-produits",
    label: "NOS PRODUITS",
    children: [
      { href: "/nos-produits/produits-fibreux", label: "Produits Fibreux de Projection & Panneaux Rigides" },
      { href: "/nos-produits/produits-pateux", label: "Produits Pâteux de Projection" },
      { href: "/nos-produits/peintures-intumescentes", label: "Peintures Intumescentes PROMAPAINT®-SC4 ET PROMAPAINT®-SC3" },
      { href: "/nos-produits/primaires-accrochage", label: "Primaires d'Accrochage" },
      { href: "/nos-produits/enduits-finition", label: "Enduits de Finition" },
      { href: "/nos-produits/materiels-accessoires", label: "Matériels et Accessoires" }
    ]
  },
  {
    href: "/solutions-techniques",
    label: "SOLUTIONS TECHNIQUES",
    children: [
      { href: "/solutions-techniques/acoustique", label: "Correction Acoustique – Isolation Acoustique & Thermique" },
      { href: "/solutions-techniques/isolation-thermique", label: "Solutions Isolation Thermique" },
      { href: "/solutions-techniques/protection-incendie", label: "Solutions Protection Sécurité Incendie" }
    ]
  },
  {
    href: "/regles-mises-oeuvre",
    label: "RÈGLES DE MISES EN ŒUVRE",
    children: [
      { href: "/regles-mises-oeuvre/projection-fibreux", label: "Projection Produits Fibreux" },
      { href: "/regles-mises-oeuvre/projection-pateux", label: "Projection Produits Pâteux" },
      { href: "/regles-mises-oeuvre/revetements-peintures", label: "Revêtements Peintures Intumescentes" }
    ]
  },
  {
    href: "/informations-utiles",
    label: "INFORMATIONS UTILES"
  },
  {
    href: "/charte-qualite",
    label: "CHARTE QUALITÉ",
    children: [
      { href: "/charte-qualite/service-client", label: "Service Client S2PI" },
      { href: "/charte-qualite/zero-casse", label: "Zéro Casse Machine" },
      { href: "/charte-qualite/politique-qualite", label: "Politique Qualité" },
      { href: "/charte-qualite/certification-iso", label: "Certification ISO 9001:2015" },
      { href: "/charte-qualite/enquete-satisfaction", label: "Enquête de Satisfaction" }
    ]
  },
  {
    href: "/nos-depots",
    label: "NOS DEPÔTS",
    children: [
      { href: "/contact", label: "Contact" }
    ]
  }
];

export default function Nav({ locale = 'fr', isSticky = false }: NavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (href: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(href);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === `/${locale}`;
    }
    return pathname?.includes(href) || false;
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`${styles.navigationWrapper} ${isSticky ? styles.stickyNav : ''}`}>
      <div className="container-s2pi">
        <nav className={styles.navigation}>
          <div className={styles.navContent}>
            {/* Logo in sticky mode */}
            {isSticky && (
              <div className={styles.stickyLogo}>
                <Link href="/" className={styles.stickyLogoLink}>
                  <Image
                    src="/images/Logo-S2PI.png"
                    width={156}
                    height={50}
                    alt="S2PI"
                    className={styles.stickyLogoImage}
                  />
                </Link>
              </div>
            )}
            
            {/* Navigation Items */}
            <ul className={`${styles.mainNav} ${isSticky ? styles.mainNavSticky : ''}`}>
              {navItems.map((item, index) => {
                const hasChildren = item.children && item.children.length > 0;
                const isItemActive = isActive(item.href);
                
                return (
                  <li
                    key={item.href}
                    className={`${styles.menuItem} ${isItemActive ? styles.active : ''} ${hasChildren ? styles.hasDropdown : ''}`}
                    onMouseEnter={() => hasChildren && handleMouseEnter(item.href)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link 
                      href={item.href} 
                      className={`${styles.menuLink} ${isItemActive ? styles.activeLink : ''}`}
                    >
                      <span className={`${styles.menuText} ${item.highlight === 'nouveaute' ? styles.nouveauteHighlight : ''}`}>
                        {item.label}
                      </span>
                      {hasChildren && <span className={styles.dropdownArrow}>▼</span>}
                    </Link>
                    
                    {hasChildren && (
                      <ul 
                        className={`${styles.dropdown} ${openDropdown === item.href ? styles.dropdownVisible : ''}`}
                        onMouseEnter={() => handleMouseEnter(item.href)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.children!.map((subItem) => (
                          <li 
                            key={subItem.href} 
                            className={styles.dropdownItem}
                          >
                            <Link 
                              href={subItem.href} 
                              className={styles.dropdownLink}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
