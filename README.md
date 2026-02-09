# XMapTools Documentation

Official documentation for [XMapTools](https://github.com/xmaptools/XMapTools_Public), a free and versatile software solution for quantitative compositional mapping and analysis. This site is built with [VitePress](https://vitepress.dev/) and deployed via GitHub Pages.

**Live site:** [https://xmaptools.github.io/Documentation/](https://xmaptools.github.io/Documentation/)

---

## Contributing

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

### Repository Structure

```
.
├── index.md                  # Home page
├── getting-started.md        # Getting started guide
├── installation_guide.md     # Installation instructions
├── documentation_epma.md     # EPMA documentation
├── documentation_laicpms.md  # LA-ICP-MS documentation
├── bingo-antidote.md         # Bingo-Antidote documentation
├── tutorials.md              # Tutorials
├── videos.md                 # Video resources
├── .vitepress/               # VitePress configuration and theme
│   ├── config.js             # Site configuration (nav, sidebar, ...)
│   └── theme/                # Custom theme overrides
└── package.json
```

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

## License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
