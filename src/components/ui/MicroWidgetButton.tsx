import React from 'react';
import Link from 'next/link';
import styles from './MicroWidgetButton.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type IconAlign = 'left' | 'right' | 'center';

export interface MicroWidgetButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconAlign?: IconAlign;
  className?: string;
  responsiveClasses?: string;
  disabled?: boolean;
  target?: '_blank' | '_self';
  rel?: string;
  title?: string;
  // S2PI specific classes
  bgOn?: boolean;
  hoverBgOn?: boolean;
  borderOn?: boolean;
  hoverBorderOn?: boolean;
  disableAnimation?: boolean;
}

const variantClasses = {
  primary: styles.primary,
  secondary: styles.secondary,
  outline: styles.outline,
  ghost: styles.ghost
};

const sizeClasses = {
  sm: styles.small,
  md: styles.medium,
  lg: styles.large
};

const iconAlignClasses = {
  left: styles.iconLeft,
  right: styles.iconRight,
  center: styles.iconCenter
};

export default function MicroWidgetButton({
  href,
  children,
  icon,
  variant = 'primary',
  size = 'md',
  iconAlign = 'left',
  className = '',
  responsiveClasses = '',
  disabled = false,
  target = '_self',
  rel,
  title,
  bgOn = true,
  hoverBgOn = true,
  borderOn = true,
  hoverBorderOn = true,
  disableAnimation = false
}: MicroWidgetButtonProps) {
  
  // Combine all classes
  const buttonClasses = [
    styles.microWidgetButton,
    variantClasses[variant],
    sizeClasses[size],
    iconAlignClasses[iconAlign],
    borderOn ? styles.borderOn : '',
    hoverBorderOn ? styles.hoverBorderOn : '',
    disableAnimation ? styles.disableAnimation : '',
    disabled ? styles.disabled : '',
    responsiveClasses,
    className
  ].filter(Boolean).join(' ');

  const buttonContent = (
    <>
      {icon && (
        <span className={styles.iconWrapper}>
          {icon}
        </span>
      )}
      <span className={styles.textWrapper}>{children}</span>
    </>
  );

  if (disabled) {
    return (
      <span className={buttonClasses} title={title}>
        {buttonContent}
      </span>
    );
  }

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

// Predefined button configurations for common S2PI use cases
export const EnqueteButton = ({ href = '/enquete-de-satisfaction', className = '', ...props }: Partial<MicroWidgetButtonProps>) => (
  <MicroWidgetButton
    href={href}
    variant="primary"
    size="md"
    iconAlign="left"
    responsiveClasses="show-on-desktop near-logo-first-switch in-menu-second-switch"
    className={`${styles.enqueteButton} ${className}`}
    icon={
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    }
    bgOn={true}
    hoverBgOn={true}
    borderOn={true}
    hoverBorderOn={true}
    disableAnimation={true}
    {...props}
  >
    ENQUÊTE
  </MicroWidgetButton>
); 