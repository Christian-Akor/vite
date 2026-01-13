import * as stylex from '@stylexjs/stylex';

/**
 * Design tokens for the application
 * These tokens define the design system's core values
 * and can be used throughout the application for consistent styling
 */

// Color tokens
export const colors = stylex.defineVars({
  // Primary colors
  primary: '#646cff',
  primaryHover: '#535bf2',
  
  // Secondary colors
  secondary: '#42b883',
  secondaryHover: '#33a06f',
  
  // Background colors
  background: '#242424',
  backgroundLight: '#1a1a1a',
  
  // Text colors
  text: '#ffffff',
  textMuted: 'rgba(255, 255, 255, 0.87)',
  textDim: '#888',
  
  // Border colors
  border: '#646cff',
  borderHover: '#535bf2',
});

// Spacing tokens
export const spacing = stylex.defineVars({
  small: '8px',
  medium: '16px',
  large: '24px',
  xlarge: '32px',
  xxlarge: '48px',
});

// Typography tokens
export const typography = stylex.defineVars({
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  fontSizeSmall: '14px',
  fontSizeBase: '16px',
  fontSizeLarge: '24px',
  fontSizeXLarge: '3.2em',
  lineHeight: '1.5',
  fontWeightNormal: '400',
  fontWeightMedium: '500',
  fontWeightBold: '600',
});

// Border radius tokens
export const radius = stylex.defineVars({
  small: '4px',
  medium: '8px',
  large: '16px',
  round: '50%',
});
