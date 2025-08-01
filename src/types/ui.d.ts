import { ReactNode } from 'react';

// Social Platform Types
export type SocialPlatform = 'linkedin' | 'facebook' | 'email' | 'twitter' | 'instagram';

// Button Types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type IconAlign = 'left' | 'right' | 'center';

// Common Props
export interface ResponsiveProps {
  responsiveClasses?: string;
  className?: string;
}

export interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
}

// Social Icon Component Props
export interface SocialIconProps extends ResponsiveProps {
  platform: SocialPlatform;
  href: string;
  title?: string;
  variant?: 'header' | 'article-bar' | 'footer';
  size?: 'sm' | 'md' | 'lg';
  target?: '_blank' | '_self';
  rel?: string;
  children?: ReactNode;
}

// MicroWidget Button Props
export interface MicroWidgetButtonProps extends ResponsiveProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconAlign?: IconAlign;
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

// Social Share Component Props
export interface SocialShareProps {
  url: string;
  title: string;
  className?: string;
  platforms?: SocialPlatform[];
  variant?: 'rect' | 'circle' | 'square';
  position?: 'center' | 'left' | 'right';
  tracking?: boolean;
  trackingContainer?: string;
}

// TopBar Component Props
export interface TopBarProps {
  locale?: string;
}

// Header Component Props
export interface HeaderProps {
  locale?: string;
}

// Navigation Component Props
export interface NavProps {
  locale?: string;
}

// Footer Component Props  
export interface FooterProps {
  locale?: string;
}

// Generic Component Factory Types
export type ComponentVariant<T extends string> = T;
export type ComponentSize<T extends string> = T;

// Utility Types for Component APIs
export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Theme Types for Consistent Styling
export interface S2PITheme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    muted: string;
    border: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    fontFamily: {
      sans: string[];
      serif: string[];
      mono: string[];
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
  };
}

// Component State Types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
export type DisplayState = 'visible' | 'hidden' | 'collapsed';

// Animation Types
export interface AnimationProps {
  animate?: boolean;
  duration?: number;
  delay?: number;
  easing?: string;
}

// Accessibility Types
export interface A11yProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  role?: string;
  tabIndex?: number;
} 