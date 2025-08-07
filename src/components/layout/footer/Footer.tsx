"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = 'fr' }: FooterProps) {
  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            {/* Logo and Company Info */}
            <div className={styles.logoSection}>
              <Image
                src="/images/Logo-S2PI.png"
                width={280}
                height={90}
                alt="S2PI - Société de Production de Produits Isolants"
                priority
                className={styles.logoImage}
              />
            </div>

            {/* Contact Information */}
            <div className={styles.contactSection}>
              {/* Header with blue background */}
              <div className={styles.contactHeader}>
                <h3 className={styles.contactTitle}>
                  NOS COORDONNÉES
                </h3>
              </div>
              
              {/* Contact Details with no background */}
              <div className={styles.contactDetails}>
                <div className={styles.contactInfo}>
                  <p className={styles.contactBold}>S2PI</p>
                  <p className={styles.contactNormal}>15 rue Jean Rostand</p>
                  <p className={styles.contactBold}>69740 GENAS</p>
                  <p className={styles.contactNormal}>04 58 00 02 20</p>
                  <p className={styles.contactLast}>contact@s2pi.fr</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Bottom Bar */}
      <div id="bottom-bar" className={`${styles.bottomBar} logo-center`} role="contentinfo">
        <div className={styles.wfWrap}>
          <div className={styles.wfContainerBottom}>
            <div className={styles.wfFloatLeft}>
              S2PI ©2022 I Tous droits réservés I{' '}
              <Link href={`/${locale}/legal`}>Mentions légales</Link> I{' '}
              <Link href="/privacy">Politique de confidentialité</Link> I{' '}
              Création par{' '}
              <a href="https://www.webecco.fr/" target="_blank" rel="noopener">
                WEBECCO
              </a>
            </div>
            

          </div>
        </div>
      </div>
    </footer>
  );
}
