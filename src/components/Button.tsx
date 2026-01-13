import * as stylex from '@stylexjs/stylex';
import { colors, spacing, radius, typography } from '../styles/tokens.stylex.js';

/**
 * Button component demonstrating StyleX usage
 * Shows how to use design tokens, pseudo-selectors, and variants
 */

// Define styles using stylex.create()
const styles = stylex.create({
  button: {
    // Base styles using design tokens
    backgroundColor: colors.primary,
    color: colors.text,
    padding: `${spacing.small} ${spacing.large}`,
    borderRadius: radius.medium,
    border: `1px solid ${colors.border}`,
    fontSize: typography.fontSizeBase,
    fontWeight: typography.fontWeightMedium,
    fontFamily: typography.fontFamily,
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    
    // Hover state using pseudo-selector
    ':hover': {
      backgroundColor: colors.primaryHover,
      borderColor: colors.borderHover,
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    
    // Active state
    ':active': {
      transform: 'translateY(0)',
    },
    
    // Focus state for accessibility
    ':focus': {
      outline: `2px solid ${colors.primaryHover}`,
      outlineOffset: '2px',
    },
  },
  
  // Variant for secondary button style
  secondary: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    
    ':hover': {
      backgroundColor: colors.secondaryHover,
      borderColor: colors.secondaryHover,
    },
  },
});

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

/**
 * Reusable Button component with StyleX styling
 */
export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      {...stylex.props(
        styles.button,
        variant === 'secondary' && styles.secondary
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
