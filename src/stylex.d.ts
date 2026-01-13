/**
 * TypeScript declarations for StyleX token files
 * These provide type safety for design tokens used throughout the application
 */

declare module '*.stylex.js' {
  // Import proper StyleX types
  import type { VarGroup } from '@stylexjs/stylex/lib/StyleXTypes';
  
  // Define the specific structure of our color tokens
  export const colors: VarGroup<{
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
    background: string;
    backgroundLight: string;
    text: string;
    textMuted: string;
    textDim: string;
    border: string;
    borderHover: string;
  }>;
  
  // Define the specific structure of our spacing tokens
  export const spacing: VarGroup<{
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
  }>;
  
  // Define the specific structure of our typography tokens
  export const typography: VarGroup<{
    fontFamily: string;
    fontSizeSmall: string;
    fontSizeBase: string;
    fontSizeLarge: string;
    fontSizeXLarge: string;
    lineHeight: string;
    fontWeightNormal: string;
    fontWeightMedium: string;
    fontWeightBold: string;
  }>;
  
  // Define the specific structure of our radius tokens
  export const radius: VarGroup<{
    small: string;
    medium: string;
    large: string;
    round: string;
  }>;
}
