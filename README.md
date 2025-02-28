
/**
 * # Pokemon App
 * 
 * This project is a React application set up with TypeScript and Vite. It includes configurations for Hot Module Replacement (HMR) and ESLint rules to ensure code quality.
 * 
 * ## Features
 * - Uses Vite for fast development and build processes.
 * - Supports React with TypeScript for type-safe development.
 * - Configured with ESLint for code linting and style enforcement.
 * - Includes plugins for React-specific linting rules.
 * 
 * ## ESLint Configuration
 * - The ESLint configuration can be expanded to enable type-aware lint rules.
 * - Recommended to use `@vitejs/plugin-react` or `@vitejs/plugin-react-swc` for Fast Refresh.
 * - Additional plugins like `eslint-plugin-react-x` and `eslint-plugin-react-dom` can be installed for more specific linting rules.
 * 
 * ## Getting Started
 * - Clone the repository.
 * - Install dependencies using `npm install` or `yarn install`.
 * - Start the development server using `npm run dev` or `yarn dev`.
 * 
 * ## File Structure
 * - `src/`: Contains the source code of the application.
 * - `public/`: Contains static assets.
 * - `eslint.config.js`: ESLint configuration file.
 * - `tsconfig.json`: TypeScript configuration file.
 * 
 * ## Contributing
 * Contributions are welcome! Please open an issue or submit a pull request.
 */
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# pokemon-app
