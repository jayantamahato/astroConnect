# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tailwind CSS & Font Setup

This project has been configured with Tailwind CSS (v4) and custom fonts.

### Fonts
1. Place your font files in `src/assets/fonts/`.
2. Update `src/index.css` to match the actual filenames of your fonts.
   - For Quicksand (Major Section), update the `Quicksand` @font-face block.
   - For the Heading font, update the `HeadingFont` @font-face block with the correct filename and family name.

### Theme & Colors
The project supports Light and Dark modes using CSS variables defined in `src/index.css`.
- Semantic colors like `--primary`, `--secondary`, `--accent`, etc. are available.
- Dark mode is automatically respected based on system preference, or can be toggled manually (see `App.jsx` for example).

### Usage
- Use `font-sans` for the Quicksand font.
- Use `font-heading` for the heading font.
- Default styles automatically apply `font-sans` to the body and `font-heading` to headers (h1-h6).
