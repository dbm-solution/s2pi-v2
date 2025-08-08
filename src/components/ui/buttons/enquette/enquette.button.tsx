import React from 'react';
import Link from 'next/link';
import styles from './enquette.module.css';

export interface EnquetteButtonProps {
  href?: string;
  variant?: 'topbar' | 'standard' | 'large' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
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
  style,
  hoverStyle,
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

  // Hover event handlers
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (hoverStyle && !disabled) {
      // Store original styles before applying hover
      const element = e.currentTarget as HTMLElement;
      if (!element.dataset.originalStyles) {
        element.dataset.originalStyles = JSON.stringify({
          backgroundColor: element.style.backgroundColor || '',
          color: element.style.color || '',
          border: element.style.border || ''
        });
      }
      Object.assign(element.style, hoverStyle);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (hoverStyle && !disabled) {
      const element = e.currentTarget as HTMLElement;
      if (element.dataset.originalStyles) {
        const originalStyles = JSON.parse(element.dataset.originalStyles);
        Object.assign(element.style, originalStyles);
      }
    }
  };

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
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonContent}
    </Link>
  );
}
