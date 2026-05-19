# Moha Broha – Fullstack Developer Portfolio

A modern and responsive developer portfolio built with Angular, focused on clean UI architecture, multilingual support, responsive design, and modern frontend development practices.

This portfolio showcases personal and collaborative projects, frontend and backend learning progress, and a professional developer presentation optimized for desktop and mobile devices.

---

# 🚀 Features

* Modern responsive UI
* Angular-based architecture
* Multilingual support (DE / EN)
* Clean component structure
* Smooth animations and glow effects
* Project showcase section
* Team testimonials section
* Contact form with validation
* Legal notice / imprint page
* Custom favicon and branding
* Optimized mobile experience

---

# 🛠️ Tech Stack

## Frontend

* Angular
* TypeScript
* HTML5
* SCSS
* RxJS

## Styling & UI

* SCSS Architecture
* Responsive Design
* CSS Animations
* Flexbox
* Custom Glow Effects

## Backend / Additional Experience

* Django
* Django REST Framework
* REST APIs
* Server & Deployment Basics

---

# 📂 Featured Projects

## Join

Collaborative Kanban tool developed in a team environment.

### Technologies

Angular | TypeScript | SCSS | REST API | Bootstrap 5

### Focus

* Component architecture
* API integration
* Team collaboration
* Frontend & backend communication

---

## BookStore

Modern web application for browsing and managing books.

### Technologies

HTML5 | CSS3 | JavaScript

### Focus

* Responsive layouts
* Structured UI
* Frontend architecture

---

## El Pollo Loco

2D jump-and-run browser game developed with vanilla JavaScript.

### Technologies

JavaScript | HTML5 Canvas | OOP | CSS | Game Logic

### Focus

* Object-oriented programming
* Collision detection
* Animation systems
* Keyboard controls
* Browser rendering logic

---

## Pokédex

Interactive Pokédex application connected to an external API.

### Technologies

HTML5 | CSS3 | JavaScript | Fetch API | DOM Manipulation | PokéAPI

### Focus

* Async API handling
* Dynamic rendering
* Structured data processing

---

# 🌍 Internationalization

The portfolio supports:

* German 🇩🇪
* English 🇬🇧

Translations are managed using Angular translation pipes and JSON-based language files.

---

# 📱 Responsive Design

The entire portfolio is optimized for:

* Desktop
* Tablet
* Mobile devices

Special attention was given to:

* spacing systems
* adaptive layouts
* overflow prevention
* scalable glow effects
* mobile readability

---

# 🎨 Design Philosophy

The UI follows a modern developer-focused aesthetic:

* dark/light contrast
* blue glow visuals
* minimal but expressive styling
* consistent spacing and typography
* smooth hover interactions

The goal was to create a professional portfolio that feels modern, clean, and technically structured.

---

# 📦 Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
ng serve
```

Open in browser:

```bash
```

---

# 🏗️ Build

Production build:

```bash
ng build
```
# 📁 Project Structure

```bash
src/
│
├── app/
│   │
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── work/
│   │   ├── team-player/
│   │   ├── contact/
│   │   ├── footer/
│   │   └── legal-notice/
│   │
│   ├── services/
│   │   ├── language.service.ts
│   │   └── contact.service.ts
│   │
│   ├── shared/
│   │   ├── interfaces/
│   │   ├── models/
│   │   └── utils/
│   │
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
│
├── assets/
│   │
│   ├── images/
│   │   ├── join-preview.png
│   │   ├── bookstore-preview.png
│   │   ├── pollo-preview.png
│   │   ├── pokedex-preview.png
│   │   └── favicon.png
│   │
│   ├── icons/
│   │
│   └── i18n/
│       ├── de.json
│       └── en.json
│
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
│
├── favicon.ico
├── index.html
├── main.ts
└── styles.scss
```

---

# 🧠 Structure Philosophy

The portfolio follows a modular Angular architecture:

* Every section is separated into reusable components
* Translation files are centralized inside `/assets/i18n`
* Styling is component-based using SCSS
* Shared logic is separated into services and utilities
* Assets are grouped cleanly for scalability

---

# 📦 Important Folders

## `/components`

Contains all visual portfolio sections.

Example:

* Hero
* About
* Work
* Contact
* Team Player

---

## `/assets/i18n`

Contains all multilingual translation files.

```bash
de.json
en.json
```

Used together with Angular translation pipes.

---

## `/services`

Contains reusable logic such as:

* language switching
* form handling
* API communication

---

## `/shared`

Reusable interfaces, models, and helper utilities.

---

# 🎨 Styling Structure

Each component contains:

```bash
component-name/
├── component-name.component.html
├── component-name.component.scss
└── component-name.component.ts
```

This keeps:

* styling isolated
* responsive behavior maintainable
* UI scalable

---

# 🌍 Translation System

Example usage:

```html
{{ 'work.title' | translate }}
```

Translation files:

```bash
assets/i18n/de.json
assets/i18n/en.json
```

---

# 🚀 Scalability

The structure is prepared for future expansion:

Possible future additions:

* backend integration
* blog section
* project detail pages
* animations library
* CMS integration
* authentication
* admin dashboard
* dark/light theme system

---

# 📬 Contact

Moha Broha
Frankfurt, Germany

Portfolio: 

---

# 📄 Legal Notice

This portfolio was created for demonstration and application purposes.

All showcased projects are educational, personal, or collaborative training projects.

---

# © Copyright

© 2026 Moha Broha
All rights reserved.
