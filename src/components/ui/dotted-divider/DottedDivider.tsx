"use client";

import React from 'react';
import styles from './DottedDivider.module.css';

export interface DottedDividerProps {
  /** Number of dots to display */
  dotCount?: number;
  /** Color of the dots */
  dotColor?: string;
  /** Size of each dot */
  dotSize?: 'small' | 'medium' | 'large' | number;
  /** Spacing between dots */
  spacing?: 'superTight' | 'tight' | 'normal' | 'loose' | number;
  /** Text to display in the middle (splits dots into two sides) */
  text?: string;
  /** Text color */
  textColor?: string;
  /** Text font size */
  textSize?: 'small' | 'medium' | 'large';
  /** Text font weight */
  textWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Split configuration - if provided, creates sections with different dot counts */
  split?: {
    left: number;
    right: number;
  };
  /** Alignment of the divider */
  align?: 'left' | 'center' | 'right';
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Animation type */
  animation?: 'none' | 'fade-in' | 'slide-in' | 'pulse';
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
}

export const DottedDivider: React.FC<DottedDividerProps> = ({
  dotCount = 5,
  dotColor = '#cbd5e1',
  dotSize = 'medium',
  spacing = 'normal',
  text,
  textColor = '#64748b',
  textSize = 'medium',
  textWeight = 'medium',
  split,
  align = 'center',
  className = '',
  style,
  animation = 'none',
  orientation = 'horizontal',
}) => {
  
  // Calculate dot sizes
  const getDotSize = () => {
    if (typeof dotSize === 'number') return `${dotSize}px`;
    switch (dotSize) {
      case 'small': return '4px';
      case 'large': return '12px';
      default: return '8px'; // medium
    }
  };

  // Calculate spacing
  const getSpacing = () => {
    if (typeof spacing === 'number') return `${spacing}px`;
    switch (spacing) {
      case  'superTight': return '4px';
      case 'tight': return '8px';
      case 'loose': return '24px';
      default: return '16px'; // normal
    }
  };

  // Get text classes
  const getTextClasses = () => {
    const classes = [styles.text];
    classes.push(styles[`text${textSize.charAt(0).toUpperCase() + textSize.slice(1)}`]);
    classes.push(styles[`weight${textWeight.charAt(0).toUpperCase() + textWeight.slice(1)}`]);
    return classes.join(' ');
  };

  // Get container classes
  const getContainerClasses = () => {
    const classes = [styles.container];
    classes.push(styles[orientation]);
    classes.push(styles[align]);
    if (animation !== 'none') {
      classes.push(styles[animation.replace('-', '')]);
    }
    if (className) classes.push(className);
    return classes.join(' ');
  };

  // Create dots array
  const createDots = (count: number, startIndex: number = 0) => {
    return Array.from({ length: count }, (_, index) => (
      <div
        key={startIndex + index}
        className={styles.dot}
        style={{
          backgroundColor: dotColor,
          width: getDotSize(),
          height: getDotSize(),
          [orientation === 'horizontal' ? 'marginRight' : 'marginBottom']: 
            index < count - 1 ? getSpacing() : '0',
        }}
      />
    ));
  };

  // Render with split configuration
  if (split) {
    return (
      <div 
        className={getContainerClasses()}
        style={style}
      >
        {/* Left/Top dots */}
        <div className={styles.dotsSection}>
          {createDots(split.left, 0)}
        </div>

        {/* Text in middle */}
        {text && (
          <div 
            className={getTextClasses()}
            style={{ color: textColor }}
          >
            {text}
          </div>
        )}

        {/* Right/Bottom dots */}
        <div className={styles.dotsSection}>
          {createDots(split.right, split.left)}
        </div>
      </div>
    );
  }

  // Render with text in middle (auto-split)
  if (text) {
    const leftDots = Math.floor(dotCount / 2);
    const rightDots = dotCount - leftDots;

    return (
      <div 
        className={getContainerClasses()}
        style={style}
      >
        {/* Left/Top dots */}
        <div className={styles.dotsSection}>
          {createDots(leftDots, 0)}
        </div>

        {/* Text in middle */}
        <div 
          className={getTextClasses()}
          style={{ color: textColor }}
        >
          {text}
        </div>

        {/* Right/Bottom dots */}
        <div className={styles.dotsSection}>
          {createDots(rightDots, leftDots)}
        </div>
      </div>
    );
  }

  // Simple dots without text
  return (
    <div 
      className={getContainerClasses()}
      style={style}
    >
      <div className={styles.dotsSection}>
        {createDots(dotCount)}
      </div>
    </div>
  );
};

// Predefined variants for common use cases
export const HorizontalDottedDivider: React.FC<Omit<DottedDividerProps, 'orientation'>> = (props) => (
  <DottedDivider {...props} orientation="horizontal" />
);

export const VerticalDottedDivider: React.FC<Omit<DottedDividerProps, 'orientation'>> = (props) => (
  <DottedDivider {...props} orientation="vertical" />
);

export const SectionDivider: React.FC<Omit<DottedDividerProps, 'dotCount' | 'dotSize' | 'spacing'>> = (props) => (
  <DottedDivider {...props} dotCount={7} dotSize="small" spacing="normal" />
);

export const HeaderDivider: React.FC<Omit<DottedDividerProps, 'dotCount' | 'dotSize' | 'textSize'>> = (props) => (
  <DottedDivider {...props} dotCount={5} dotSize="medium" textSize="large" />
); 