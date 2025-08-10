"use client"

import type React from "react"
import { useState } from "react"
import styles from "./MainLayout.module.css"
import Header from "../header/Header"
import { Sidebar } from "../sidebar/Sidebar"
import Footer from "../footer/Footer"

interface MainLayoutProps {
  children: React.ReactNode
  showSidebar?: boolean
  className?: string
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, showSidebar = true, className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className={`${styles.layout} ${className}`}>
      <Header
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />


      {/* Mobile Menu */}
      {/* <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} /> */}

      <div id="main" className={`${styles.main} `}>
        <div className={styles.wfWrap}>
          <div className={styles.wfContainerMain}>

            {/* Main Content */}
            <div id="content" className={`${styles.content}`} role="main">
              {children}
            </div>

            {/* Sidebar */}
            {showSidebar && (
              <aside id="sidebar" className={styles.sidebar}>
                <Sidebar />
              </aside>
            )}

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
