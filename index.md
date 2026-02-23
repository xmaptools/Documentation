---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: XMapTools 4.5
  text: Compositional mapping
  tagline: Free and versatile software solution for quantitative chemical maps analysis.
  actions:
    - theme: brand
      text: Installation
      link: /installation_guide
    - theme: alt
      text: Official website
      link: https://xmaptools.ch
    - theme: alt
      text: Developer repository
      link: https://github.com/xmaptools/XMapTools_Developers
  image:
    src: /assets/Logo_2025_square_512.png
    alt: XMapTools

features:
  - icon: 📚
    title: Documentation
    details: Powerful tools for quantitative compositional mapping and analysis
    link: /getting-started

  - icon: 💻
    title: Tutorials
    details: Video tutorials and demonstrations of XMapTools functionality
    link: /tutorials

  - icon: 🚀
    title: Bingo-Antidote 
    details: Step-by-step tutorial for using Bingo-Antidote in XMapTools
    link: /bingo-antidote
---

## What is XMapTools?

XMapTools is an advanced analysis software for quantitative chemical analysis of solids in 1D, 2D and 3D. It provides numerical tools and packages implemented in a guided and versatile environment that allows you to explore and visualise data in your own way. For example, XMapTools includes a wide range of data processing options including routines for classification, segmentation, calibration and visualisation via single and multi-channel maps or via binary, ternary and spider diagrams.

<br /><br />

<img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Logo/XMapTools_Transition.jpg" alt="XMapTools Logo" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">

## Contribute to the user guide 

Contributions to improve or extend the documentation are welcome. Please follow the workflow described below.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Git](https://git-scm.com/)
- A GitHub account

### Setting Up the Project Locally

1. **Fork** this repository on GitHub.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/Documentation.git
   cd Documentation
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173/Documentation/`. Changes to `.md` files are reflected live in the browser.

### Writing and Editing Content

- All documentation pages are written in **Markdown** (`.md` files) at the root of the repository.
- VitePress supports standard Markdown syntax plus [additional features](https://vitepress.dev/guide/markdown) such as custom containers, code highlighting, and frontmatter.
- Images are hosted in the separate [Documentation_Images](https://github.com/xmaptools/Documentation_Images) repository. Reference them using raw GitHub URLs with an HTML `<img>` tag:
  ```html
  <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Figures/my-image.png" alt="description" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
  ```
- Navigation and sidebar links are configured in [.vitepress/config.js](.vitepress/config.js).

### Submitting Changes

1. Create a new branch for your changes:
   ```bash
   git checkout -b my-contribution
   ```
2. Make your edits and verify them locally with `npm run dev`.
3. Commit your changes with a clear message:
   ```bash
   git add .
   git commit -m "docs: describe your changes"
   ```
4. Push to your fork:
   ```bash
   git push origin my-contribution
   ```
5. Open a **Pull Request** against the `main` branch of this repository.
6. Wait for review and approval before merging.

### Style Guidelines

- Use clear, concise language.
- Use headings (`##`, `###`) to structure content logically.
- Prefer numbered lists for sequential instructions and bullet points for unordered items.
- Include screenshots or diagrams where they help clarify a concept.
- Keep filenames lowercase with underscores (e.g., `installation_guide.md`).

---

## Building for Production

```bash
npm run build
```

The static site is generated in `.vitepress/dist/` and automatically deployed to GitHub Pages via the CI workflow on push to `main`.






