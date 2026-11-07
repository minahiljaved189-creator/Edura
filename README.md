# Edura

Education platform frontend built with **Vue 3, Vue Router, and Vite**. The project organizes its interface into reusable components, shared styles, and separate page views.

## Project overview

Edura presents an education platform through a landing page and dedicated contact, login, and sign-up views. Its component structure separates navigation, page content, and shared UI elements.

This repository contains the frontend. The presence of login and sign-up views does not by itself establish a working authentication backend.

## Interface components

- Landing-page sections for the hero, platform overview, and how it works.
- Audience cards, pricing, reviews, FAQ, and a get-started section.
- Shared navigation and footer.
- Reusable button component and centralized base and theme styles.
- Contact, login, and sign-up page views.

## Technology

| Category | Tools |
| --- | --- |
| Framework | Vue 3 |
| Routing | Vue Router |
| Build tooling | Vite |
| Styling | CSS, Font Awesome |
| Language | JavaScript |

## Run locally

Use a Node.js version matching the package requirement: `^22.18.0 || >=24.12.0`.

```bash
git clone https://github.com/minahiljaved189-creator/Edura.git
cd Edura
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The build is written to `dist/`. The preview command serves that build locally.

## Repository structure

```text
src/
  assets/
    css/               # Base and theme styles
    images/            # Project branding
  components/
    common/            # Reusable UI components
    home/              # Landing-page sections
    layout/            # Navigation and footer
  router/              # Page routes
  views/               # Home, Contact, Login, SignUp
  App.vue
  main.js
```

## Explore more

[Developer profile](https://github.com/minahiljaved189-creator) · [LinkedIn](https://www.linkedin.com/in/minahil-javed-41878840b)
