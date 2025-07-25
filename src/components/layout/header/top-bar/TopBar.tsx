"use client";

import React from 'react';
import Link from 'next/link';
import styles from './TopBar.module.css';

interface TopBarProps {
  locale?: string;
}

export default function TopBar({ locale = 'fr' }: TopBarProps) {
  return (
    <div className={styles.topBar}>
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

          {/* Right Side - LinkedIn and Enquête Button */}
          <div className={styles.rightWidgets}>
            <Link
              href="https://www.linkedin.com/company/s2pi-isolation/?viewAsMember=true"
              target="_blank"
              rel="noopener"
              className={styles.linkedinButton}
            >
              in
            </Link>
            <Link
              href="/enquete-de-satisfaction"
              className={styles.enqueteButton}
            >
              ENQUÊTE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}