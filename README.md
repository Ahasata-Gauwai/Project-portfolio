# Safari Booking System - Project Showcase

A modern, animated one-page web presentation for the **Safari Booking System** built with React and Vite. This site highlights the platform vision, architecture, modules, workflow, UI concepts, timeline, and contact details for the project team.

## Overview

The Safari Booking System is designed to digitize safari reservations in Belihuloya by replacing manual workflows with a smart booking experience.

This showcase includes:

- A cinematic hero section
- Feature and problem-solution overview
- System workflow and architecture sections
- Diagrams and UI showcase blocks
- Module and technology breakdowns
- Development timeline and gallery
- Contact section and animated footer

## Tech Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS 4**
- **Framer Motion** for animations
- **Lucide React** for iconography
- **ESLint 9** for code quality

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd PP
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start Vite dev server with hot reload
- `npm run build` - Build production assets
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Project Structure

```text
PP/
|- public/
|  |- favicon.svg
|  |- icons.svg
|- src/
|  |- assets/images/
|  |- components/
|  |  |- Navbar.jsx
|  |  |- Hero.jsx
|  |  |- AboutSection.jsx
|  |  |- WorkflowSection.jsx
|  |  |- ArchitectureSection.jsx
|  |  |- DiagramsSection.jsx
|  |  |- UIShowcaseSection.jsx
|  |  |- ModulesSection.jsx
|  |  |- TechStackSection.jsx
|  |  |- MethodologySection.jsx
|  |  |- TimelineSection.jsx
|  |  |- GallerySection.jsx
|  |  |- ContactSection.jsx
|  |  |- AnimatedFooter.jsx
|  |- App.jsx
|  |- index.css
|  |- main.jsx
|- index.html
|- vite.config.js
|- eslint.config.js
|- package.json
```

## Design Notes

- Custom theme colors are defined in `src/index.css` using Tailwind CSS theme variables.
- The app uses a dark safari-inspired palette with glassmorphism cards and smooth section animations.
- Scroll-based and entrance animations are implemented using Framer Motion.

## Deployment

Build the project:

```bash
npm run build
```

Then deploy the generated `dist/` folder to any static hosting provider:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## Notes

- The contact form currently uses `preventDefault()` and is UI-only (no backend integration yet).
- Some links in the UI are placeholders and can be replaced with your actual repository/org URLs.

## License

This project is intended for academic and portfolio use. Add a license file (for example MIT) if you plan to distribute it publicly.
