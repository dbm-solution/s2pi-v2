"use client";

import React, { useEffect } from 'react';
import { useAutoScrollAnimation } from '@/hooks/use-scroll-animation';

interface ScrollAnimationProviderProps {
  children: React.ReactNode;
  /** Disable scroll animations globally */
  disabled?: boolean;
  /** Custom animation options */
  options?: {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
  };
}

/**
 * Provider that automatically initializes scroll animations for the entire app
 * Place this high in your component tree (like in layout.tsx) to enable animations globally
 */
export const ScrollAnimationProvider: React.FC<ScrollAnimationProviderProps> = ({ 
  children, 
  disabled = false,
  options 
}) => {
  // Initialize scroll animations with custom options if provided
  const scrollAnimation = options 
    ? useAutoScrollAnimation()
    : useAutoScrollAnimation();

  // Don't render if disabled
  if (disabled) {
    return <>{children}</>;
  }

  return <>{children}</>;
};

/**
 * Minimal component that just initializes scroll animations
 * Use this if you just want to enable animations without wrapping content
 */
export const ScrollAnimationInit: React.FC<{ 
  options?: {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
  }
}> = ({ options }) => {
  useAutoScrollAnimation();
  return null;
}; 