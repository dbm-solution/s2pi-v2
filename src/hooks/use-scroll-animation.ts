"use client";

import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  /** Threshold for when the animation should trigger (0-1) */
  threshold?: number;
  /** Root margin for the intersection observer */
  rootMargin?: string;
  /** Whether the animation should only trigger once */
  triggerOnce?: boolean;
  /** Custom selector for elements to animate */
  selector?: string;
}

/**
 * Hook for handling scroll-triggered animations
 * Automatically detects elements with scroll animation classes and triggers them when in view
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px',
    triggerOnce = true,
    selector = '[class*="scroll-"]'
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const observedElements = useRef<Set<Element>>(new Set());

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to trigger animation
            entry.target.classList.add('visible');
            
            // If triggerOnce is true, stop observing this element
            if (triggerOnce) {
              observerRef.current?.unobserve(entry.target);
              observedElements.current.delete(entry.target);
            }
          } else if (!triggerOnce) {
            // Remove visible class when element is out of view (only if not triggerOnce)
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Find all elements with scroll animation classes
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element) => {
      observerRef.current?.observe(element);
      observedElements.current.add(element);
    });

    // Set up a mutation observer to watch for new elements
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            
            // Check if the element itself has a scroll animation class
            if (element.matches && element.matches(selector)) {
              observerRef.current?.observe(element);
              observedElements.current.add(element);
            }
            
            // Check for child elements with scroll animation classes
            const childElements = element.querySelectorAll && element.querySelectorAll(selector);
            if (childElements) {
              childElements.forEach((childElement) => {
                if (!observedElements.current.has(childElement)) {
                  observerRef.current?.observe(childElement);
                  observedElements.current.add(childElement);
                }
              });
            }
          }
        });
      });
    });

    // Start observing the document for changes
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      mutationObserver.disconnect();
      observedElements.current.clear();
    };
  }, [threshold, rootMargin, triggerOnce, selector]);

  return {
    /** Manually trigger animation for a specific element */
    triggerAnimation: (element: Element) => {
      element.classList.add('visible');
    },
    /** Manually reset animation for a specific element */
    resetAnimation: (element: Element) => {
      element.classList.remove('visible');
    },
    /** Get all currently observed elements */
    getObservedElements: () => Array.from(observedElements.current),
  };
};

/**
 * Simpler hook that just initializes scroll animations with default settings
 */
export const useAutoScrollAnimation = () => {
  return useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px',
    triggerOnce: true,
  });
};

/**
 * Hook for staggered animations - useful for lists or grids
 */
export const useStaggeredScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  return useScrollAnimation({
    ...options,
    selector: '[class*="scroll-fade-in-stagger"]',
    threshold: 0.05,
  });
}; 