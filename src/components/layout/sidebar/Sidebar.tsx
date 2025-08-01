"use client"

import type React from "react"
import styles from "./sidebar.module.css"

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  return (
    <div className={`${styles.sidebarContent} ${className}`}>
      
      {/* Logo Section */}
      <section className={`${styles.widget} ${styles.widgetMediaImage}`}>
        <img 
          width="280" 
          height="90" 
          src="/images/Logo-S2PI.png" 
          className={styles.logoImage}
          alt="S2PI - Société de Production de Produits Isolants" 
          loading="lazy"
        />
      </section>

      {/* Association Section */}
      <section className={`${styles.widget} ${styles.widgetText}`}>
        <div className={styles.widgetTitle}>
          Nous sommes membre de l'association, Ambassadeur des Alpes
        </div>
        <div className={styles.textwidget}>
          <div className={styles.associationText}>
            Association d'entreprises engagées dans la promotion de notre territoire alpin et de ses valeurs, 
            partenaire de l'association de la Descente des Alpages, aide aux associations caritatives locales 
            ayant des interactions avec la montagne.
          </div>
          <p>
            <a href="https://www.la-descente-des-alpages.fr/ambassadeurs/" target="_blank" rel="noopener">
              <img 
                src="/images/ambassadeur_2020_gris.png" 
                alt="Ambassadeur des Alpes" 
                width="100%" 
                className={styles.ambassadorImage}
                loading="lazy"
              />
            </a>
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className={`${styles.widget} ${styles.widgetText}`}>
        <div className={styles.widgetTitle}>PLAN D'ACCÈS</div>
        <div className={styles.textwidget}>
          <div className={styles.mapContainer}>
            <iframe 
              loading="lazy" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154678.79537583236!2d4.868376138183276!3d45.71963331395314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c4286393d1d5%3A0x5272597615c5299d!2s15%20Rue%20Jean%20Rostand%2C%2069740%20Genas!5e0!3m2!1sfr!2sfr!4v1688738757428!5m2!1sfr!2sfr" 
              width="100%" 
              height="200"
              allowFullScreen
              title="Plan d'accès S2PI"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${styles.widget} ${styles.widgetText}`}>
        <div className={styles.widgetTitle}>NOS COORDONNÉES</div>
        <div className={styles.textwidget}>
          <div className={styles.contactInfo}>
            <p>
              <strong>S2PI</strong><br />
              15 rue Jean Rostand<br />
              <strong>69740 Genas</strong><br />
              <a href="tel:0458000220" className={styles.contactLink}>04 58 00 02 20</a><br />
              <a href="mailto:contact@s2pi.fr" className={styles.contactLink}>contact@s2pi.fr</a>
            </p>
          </div>
        </div>
      </section>

      {/* French Tech Section */}
      <section className={`${styles.widget} ${styles.widgetText}`}>
        <div className={styles.textwidget}>
          <p>
            <a href="https://lafrenchtech.com/fr/" target="_blank" rel="noopener">
              <img 
                src="/images/logo-la-french-tech-min.png" 
                alt="La French Tech" 
                width="120" 
                className={styles.frenchTechLogo}
                loading="lazy"
              />
            </a>
          </p>
        </div>
      </section>

      {/* CE Section */}
      <section className={`${styles.widget} ${styles.widgetText}`}>
        <div className={styles.textwidget}>
          <p>
            <img 
              src="/images/LOGO_CE.jpg" 
              alt="CE" 
              width="100%" 
              className={styles.ceLogo}
              loading="lazy"
            />
          </p>
          <div className={styles.ceText}>
            <strong>Panneaux sous marque CE</strong>
          </div>
        </div>
      </section>

    </div>
  )
}
