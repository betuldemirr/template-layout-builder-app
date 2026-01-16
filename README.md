# Template Layout Builder App

This project is a React + TailwindCSS case study that implements the core architecture of an AI-ready website builder system.  
The system focuses on dividing page layouts into section-based components, providing multiple variants per section, and managing the entire theme through a single design token system.

## Architecture

This project implements the key building blocks of a modern, AI-ready template builder:

- Section-based UI architecture (Header, Hero, Features)
- Variant management through a centralized catalog / registry
- Single-source theme and design token system
- Scoped theming applied only inside the preview frame
- Extensible builder UI for composing layouts
- Schema definitions prepared for AI-driven prop and layout control

## How Does the Builder Screen Work?

The user selects the following options from the left panel:
- Theme (light / dark)
- Header variant
- Hero variant
- Features variant

Inside the PreviewFrame:
- **ThemeScope** applies the selected theme tokens as CSS variables
- **renderVariantById()** resolves and renders the correct React component from the registry

Based on these selections, the chosen layout variants are rendered as a live UI preview.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).