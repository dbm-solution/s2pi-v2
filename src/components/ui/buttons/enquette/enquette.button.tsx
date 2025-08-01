import React from 'react';
import Link from 'next/link';
import styles from './enquette.module.css';

export interface EnquetteButtonProps {
  href?: string;
  variant?: 'topbar' | 'standard' | 'large' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  target?: '_blank' | '_self';
  rel?: string;
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
  locale?: string;
}

const variantClasses = {
  topbar: styles.topbar,
  standard: styles.standard,
  large: styles.large,
  outline: styles.outline
};

const sizeClasses = {
  sm: styles.small,
  md: styles.medium,
  lg: styles.large
};

export default function EnquetteButton({
  href = '/enquete-de-satisfaction',
  variant = 'topbar',
  size = 'md',
  className = '',
  children,
  icon,
  target = '_self',
  rel,
  title = 'Enquête de satisfaction',
  onClick,
  disabled = false,
  locale = 'fr'
}: EnquetteButtonProps) {
  
  // Default content based on locale
  const defaultContent = {
    fr: 'ENQUÊTE',
    en: 'SURVEY',
    es: 'ENCUESTA',
    it: 'SONDAGGIO',
    ar: 'استطلاع'
  };

  // Default icon
  const defaultIcon = <span className={styles.defaultIcon}>❤</span>;

  // Combine classes
  const buttonClasses = [
    styles.enquetteButton,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? styles.disabled : '',
    className
  ].filter(Boolean).join(' ');

  // Button content
  const buttonContent = (
    <>
      {icon || defaultIcon}
      <span className={styles.text}>
        {children || defaultContent[locale as keyof typeof defaultContent] || defaultContent.fr}
      </span>
    </>
  );

  // If disabled or no href, render as button
  if (disabled || !href || onClick) {
    return (
      <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        title={title}
        type="button"
      >
        {buttonContent}
      </button>
    );
  }

  // Render as link
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={buttonClasses}
      title={title}
    >
      {buttonContent}
    </Link>
  );
}
