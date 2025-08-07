import * as React from 'react'
import styles from './ResponsiveGrid.module.css'

export interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns on desktop (>= 1024px). Default: 3 */
  columnsDesktop?: number
  /** Number of columns on tablet (>= 768px). Default: 2 */
  columnsTablet?: number
  /** Number of columns on mobile (< 768px). Default: 1 */
  columnsMobile?: number
  /** Gap between grid items. Number is interpreted as pixels. Default: 16 */
  gap?: number | string
  /** Optional custom className */
  className?: string
  /** Optional custom styles */
  style?: React.CSSProperties
  /** Render as a different HTML element. Default: 'div' */
  as?: React.ElementType
}

/**
 * ResponsiveGrid
 * A minimal, reusable responsive grid layout that accepts a column count per breakpoint.
 * - Mobile first: uses columnsMobile by default
 * - Tablet breakpoint: >= 768px → columnsTablet
 * - Desktop breakpoint: >= 1024px → columnsDesktop
 */
export default function ResponsiveGrid({
  columnsDesktop = 3,
  columnsTablet = 2,
  columnsMobile = 1,
  gap = 16,
  className = '',
  style,
  as: Element = 'div',
  children,
  ...rest
}: ResponsiveGridProps) {
  const inlineStyle: React.CSSProperties = {
    // CSS variables consumed by the CSS module
    ['--columns-mobile' as any]: String(columnsMobile),
    ['--columns-tablet' as any]: String(columnsTablet),
    ['--columns-desktop' as any]: String(columnsDesktop),
    ['--gap' as any]: typeof gap === 'number' ? `${gap}px` : gap,
    ...style,
  }

  const classes = [styles.grid, className].filter(Boolean).join(' ')

  const Component = Element as React.ElementType

  return (
    <Component className={classes} style={inlineStyle} {...rest}>
      {children}
    </Component>
  )
} 