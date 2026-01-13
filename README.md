# Vite + React + StyleX Starter

A production-ready starter template for building modern web applications with **Vite**, **React**, and **StyleX**. This template demonstrates best practices for integrating StyleX's atomic CSS-in-JS solution with Vite's lightning-fast build tooling.

## 🚀 Features

- ⚡ **Vite** - Lightning-fast development server and optimized builds
- ⚛️ **React 19** - Latest React with TypeScript support
- 🎨 **StyleX** - Meta's atomic CSS-in-JS solution for scalable styling
- 🎯 **TypeScript** - Full type safety throughout the application
- 📦 **Design Tokens** - Centralized design system with color, spacing, and typography tokens
- 🔄 **Hot Module Replacement** - Instant feedback during development
- 🎭 **Component Examples** - Reusable components demonstrating StyleX patterns

## 📋 What's Included

### Project Structure

```
vite-react-stylex/
├── src/
│   ├── components/
│   │   └── Button.tsx          # Reusable Button component with StyleX
│   ├── styles/
│   │   └── tokens.stylex.js    # Design tokens (colors, spacing, typography)
│   ├── App.tsx                  # Main App component showcasing StyleX features
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML template
├── vite.config.ts              # Vite configuration with StyleX plugin
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

### StyleX Features Demonstrated

1. **Basic Styling** - Using `stylex.create()` for component styles
2. **Design Tokens** - Centralized variables for colors, spacing, and typography
3. **Pseudo-selectors** - Hover, active, and focus states
4. **Responsive Design** - Media queries for different screen sizes
5. **Component Variants** - Button variants (primary, secondary)
6. **Atomic CSS** - Optimized CSS output with no runtime overhead

## 🛠️ Installation

### Prerequisites

- Node.js 18+ and npm

### Getting Started

1. **Clone or use this template:**
   ```bash
   git clone <repository-url>
   cd vite-react-stylex
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Using StyleX

### Creating Styles

StyleX uses `stylex.create()` to define styles:

```tsx
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  button: {
    backgroundColor: '#646cff',
    padding: '8px 24px',
    borderRadius: '8px',
    ':hover': {
      backgroundColor: '#535bf2',
    },
  },
});

// Apply styles with stylex.props()
<button {...stylex.props(styles.button)}>Click me</button>
```

### Using Design Tokens

Design tokens are defined in `src/styles/tokens.stylex.js`:

```tsx
import { colors, spacing, radius } from './styles/tokens.stylex';

const styles = stylex.create({
  card: {
    backgroundColor: colors.background,
    padding: spacing.large,
    borderRadius: radius.medium,
  },
});
```

### Creating Reusable Components

The `Button` component demonstrates how to create reusable components with variants:

```tsx
import { Button } from './components/Button';

<Button onClick={() => console.log('clicked')}>
  Primary Button
</Button>

<Button variant="secondary" onClick={() => console.log('clicked')}>
  Secondary Button
</Button>
```

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` file includes the StyleX Rollup plugin:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleX from '@stylexjs/rollup-plugin'

export default defineConfig({
  plugins: [
    react(),
    styleX({
      dev: process.env.NODE_ENV === 'development',
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: process.cwd(),
      },
    }),
  ],
})
```

### TypeScript Support

Full TypeScript support is included with proper type definitions for StyleX. The project uses separate tsconfig files for app and node environments.

## 📚 Learn More

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [StyleX Documentation](https://stylexjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🎯 Design Tokens Reference

### Colors
- `colors.primary` - Primary brand color (#646cff)
- `colors.secondary` - Secondary brand color (#42b883)
- `colors.background` - Main background color
- `colors.text` - Primary text color

### Spacing
- `spacing.small` - 8px
- `spacing.medium` - 16px
- `spacing.large` - 24px
- `spacing.xlarge` - 32px
- `spacing.xxlarge` - 48px

### Typography
- `typography.fontFamily` - Inter, system-ui, Avenir, Helvetica, Arial, sans-serif
- `typography.fontSize*` - Small (14px), Base (16px), Large (24px), XLarge (3.2em)
- `typography.fontWeight*` - Normal (400), Medium (500), Bold (600)

### Border Radius
- `radius.small` - 4px
- `radius.medium` - 8px
- `radius.large` - 16px
- `radius.round` - 50%

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 License

MIT License - feel free to use this template for any project!

---

Built with ❤️ using Vite, React, and StyleX
