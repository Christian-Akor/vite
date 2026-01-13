import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { Button } from './components/Button';
import { colors, spacing, radius, typography } from './styles/tokens.stylex.js';

/**
 * Main App component demonstrating StyleX features:
 * - Basic styling with stylex.create()
 * - Design token usage
 * - Hover states and pseudo-selectors
 * - Responsive design patterns
 */

// Define styles using stylex.create() with design tokens
const styles = stylex.create({
  // Container with padding, background, and border radius
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: colors.background,
    padding: spacing.large,
  },
  
  // Content card
  card: {
    backgroundColor: colors.backgroundLight,
    padding: spacing.xxlarge,
    borderRadius: radius.large,
    maxWidth: '600px',
    textAlign: 'center',
    border: `1px solid ${colors.border}`,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  
  // Heading with custom typography
  heading: {
    fontSize: typography.fontSizeXLarge,
    fontWeight: typography.fontWeightBold,
    color: colors.text,
    marginTop: 0,
    marginBottom: spacing.large,
    lineHeight: '1.1',
  },
  
  // Text styles
  description: {
    fontSize: typography.fontSizeBase,
    color: colors.textMuted,
    lineHeight: typography.lineHeight,
    marginBottom: spacing.large,
  },
  
  // Counter display
  counter: {
    fontSize: typography.fontSizeLarge,
    fontWeight: typography.fontWeightMedium,
    color: colors.primary,
    marginBottom: spacing.large,
    padding: spacing.medium,
    backgroundColor: 'rgba(100, 108, 255, 0.1)',
    borderRadius: radius.medium,
  },
  
  // Button group
  buttonGroup: {
    display: 'flex',
    gap: spacing.medium,
    marginBottom: spacing.large,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
  // Code element
  code: {
    backgroundColor: 'rgba(100, 108, 255, 0.1)',
    padding: '2px 6px',
    borderRadius: radius.small,
    fontFamily: 'monospace',
    color: colors.primary,
  },
  
  // Link with hover effect
  link: {
    color: colors.primary,
    textDecoration: 'none',
    fontWeight: typography.fontWeightMedium,
    transition: 'color 0.25s ease',
    
    ':hover': {
      color: colors.primaryHover,
      textDecoration: 'underline',
    },
  },
  
  // Feature list
  features: {
    textAlign: 'left',
    marginTop: spacing.large,
    padding: spacing.medium,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: radius.medium,
  },
  
  featureItem: {
    marginBottom: spacing.small,
    color: colors.textMuted,
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.card)}>
        <h1 {...stylex.props(styles.heading)}>
          Vite + React + StyleX
        </h1>
        
        <p {...stylex.props(styles.description)}>
          A production-ready starter template demonstrating StyleX integration with Vite and React.
        </p>
        
        <div {...stylex.props(styles.counter)}>
          Count: {count}
        </div>
        
        <div {...stylex.props(styles.buttonGroup)}>
          <Button onClick={() => setCount(count + 1)}>
            Increment
          </Button>
          <Button variant="secondary" onClick={() => setCount(count - 1)}>
            Decrement
          </Button>
          <Button onClick={() => setCount(0)}>
            Reset
          </Button>
        </div>
        
        <p {...stylex.props(styles.description)}>
          Edit <span {...stylex.props(styles.code)}>src/App.tsx</span> and save to test HMR
        </p>
        
        <div {...stylex.props(styles.features)}>
          <h3>Features Demonstrated:</h3>
          <ul>
            <li {...stylex.props(styles.featureItem)}>
              ✨ StyleX integration with Vite
            </li>
            <li {...stylex.props(styles.featureItem)}>
              🎨 Design tokens for consistent styling
            </li>
            <li {...stylex.props(styles.featureItem)}>
              🔘 Reusable Button component with variants
            </li>
            <li {...stylex.props(styles.featureItem)}>
              🎯 Hover states and pseudo-selectors
            </li>
            <li {...stylex.props(styles.featureItem)}>
              📱 Responsive design patterns
            </li>
            <li {...stylex.props(styles.featureItem)}>
              ⚡ TypeScript support
            </li>
          </ul>
        </div>
        
        <p {...stylex.props(styles.description)}>
          Learn more about{' '}
          <a
            {...stylex.props(styles.link)}
            href="https://stylexjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            StyleX
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
