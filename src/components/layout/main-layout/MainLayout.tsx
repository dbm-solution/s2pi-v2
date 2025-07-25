"use client"

import type React from "react"
import { useState } from "react"
import styles from "./MainLayout.module.css"
import Header from "../header/Header"
import { Sidebar } from "../sidebar/Sidebar"

interface MainLayoutProps {
  children: React.ReactNode
  showSidebar?: boolean
  className?: string
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, showSidebar = true, className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className={`${styles.layout} ${className}`}>
      {/* Header - Contains TopBar, Header Bar, and Navigation */}
      <Header 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Mobile Menu */}
      {/* <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} /> */}

      {/* Main Content Area - Following S2PI structure */}
      <div id="main" className={`${styles.main} ${showSidebar ? styles.sidebarRight : ''} ${styles.sidebarDividerVertical}`}>
        <div className={styles.mainGradient}></div>
        <div className={styles.wfWrap}>
          <div className={styles.wfContainerMain}>
            
            {/* Main Content */}
            <div id="content" className={`${styles.content} content`} role="main">
              {children}
            </div>

            {/* Sidebar */}
            {showSidebar && (
              <aside id="sidebar" className={`${styles.sidebar} sidebar`}>
                <div className={styles.sidebarContent}>
                  <Sidebar />
                </div>
              </aside>
            )}

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.wfWrap}>
          <div className={styles.wfContainerFooter}>
            <div className={styles.wfContainer}>
              
              <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                  <h3>Nos Produits</h3>
                  <ul>
                    <li><a href="#">ITARN – Isolation Thermique</a></li>
                    <li><a href="#">Produits Fibreux de Projection</a></li>
                    <li><a href="#">Produits Pâteux de Projection</a></li>
                    <li><a href="#">Peintures Intumescentes</a></li>
                    <li><a href="#">Primaires d'Accrochage</a></li>
                    <li><a href="#">Enduits de Finition</a></li>
                  </ul>
                </div>

                <div className={styles.footerSection}>
                  <h3>Solutions Techniques</h3>
                  <ul>
                    <li><a href="#">Correction Acoustique</a></li>
                    <li><a href="#">Isolation Thermique</a></li>
                    <li><a href="#">Protection Sécurité Incendie</a></li>
                  </ul>
                </div>

                <div className={styles.footerSection}>
                  <h3>Informations</h3>
                  <ul>
                    <li><a href="#">À Propos</a></li>
                    <li><a href="#">Charte Qualité</a></li>
                    <li><a href="#">Nos Dépôts</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>

                <div className={styles.footerSection}>
                  <h3>Contact</h3>
                  <ul>
                    <li>15 rue Jean Rostand</li>
                    <li>69740 Genas</li>
                    <li><a href="tel:0458000220">04 58 00 02 20</a></li>
                    <li><a href="mailto:contact@s2pi.fr">contact@s2pi.fr</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.wfWrap}>
            <div className={styles.wfContainerBottom}>
              <div className={styles.wfFloatLeft}>
                S2PI ©2024 I Tous droits réservés I 
                <a href="/mentions-legales">Mentions légales</a> I 
                <a href="/politique-de-confidentialite">Politique de confidentialité</a>
              </div>
              <div className={styles.wfFloatRight}>
                {/* Additional footer content */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
