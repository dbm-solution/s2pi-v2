;

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useNavContent } from '@/content/navigation/navContent';
import styles from './Nav.module.css';

interface NavProps {
  locale?: string;
  isSticky?: boolean;
}

export default function Nav({ locale = 'fr', isSticky = false }: NavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Get internationalized navigation content
  const navItems = useNavContent();

  const handleMouseEnter = (uniqueId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(uniqueId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleParentClick = (e: React.MouseEvent, item: any, hasChildren: boolean) => {
    // Only prevent navigation if it's a placeholder href (# or /#) and has children
    if (hasChildren && (item.href === "#" || item.href === "/#")) {
      e.preventDefault();
    }
    // If it's a real path like "/nos-depots", allow normal navigation even with children
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
                const uniqueId = `${item.label}-${index}`; // Use label + index as unique identifier
                
                return (
                  <li
                    key={uniqueId} // Changed from item.href to uniqueId
                    className={`${styles.menuItem} ${isItemActive ? styles.active : ''} ${hasChildren ? styles.hasDropdown : ''}`}
                    onMouseEnter={() => hasChildren && handleMouseEnter(uniqueId)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link 
                      href={item.href}
                      className={`${styles.menuLink} ${isItemActive ? styles.activeLink : ''}`}
                      onClick={(e) => handleParentClick(e, item, hasChildren || false)}
                    >
                      <span className={`${styles.menuText} ${item.highlight === 'nouveaute' ? styles.nouveauteHighlight : ''}`}>
                        {item.label}
                      </span>
                      {hasChildren && <span className={styles.dropdownArrow}>▼</span>}
                    </Link>
                    
                    {hasChildren && (
                      <ul 
                        className={`${styles.dropdown} ${openDropdown === uniqueId ? styles.dropdownVisible : ''}`}
                        onMouseEnter={() => handleMouseEnter(uniqueId)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.children!.map((subItem, subIndex) => (
                          <li 
                            key={`${uniqueId}-sub-${subIndex}`} // Added unique key for sub-items
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