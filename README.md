# Manish Singh — Portfolio

Personal portfolio website built with vanilla HTML, CSS, and JavaScript. Hosted on GitHub Pages.

**Live site:** https://msingh9365.github.io/

---

## Design System

"Warm Technical" — a light, editorial system inspired by product sites like vanna.ai,
adapted for a portfolio: warm paper background, a slab-serif display face, monospace
metadata in place of icons/emoji, and flat 2px-bordered cards (no glow, no glass, no
gradients-as-decoration).

- **Display:** Roboto Slab (headings)
- **Body:** Space Grotesk
- **Metadata / labels:** Space Mono — section indices, dates, tech tags

---

## Tech Stack

- **HTML5** — Semantic structure, SEO meta tags, Open Graph, Twitter Card, JSON-LD
- **CSS3** — Custom design system, CSS custom properties, responsive, `prefers-reduced-motion` aware
- **Vanilla JS** — Data-driven rendering, `IntersectionObserver` scroll reveals, filter tabs, scroll-spy nav

No build step, no dependencies, no framework.

---

## Project Structure

```
portfolio/
├── index.html          # Single-page app — all sections
├── style.css            # Design system + all styles
├── script.js             # All interactivity + data
└── assets/
    ├── images/          # Project thumbnails, logos, favicon, OG image (WebP)
    │   └── _orig/       # Uncompressed originals, kept for reference (not deployed)
    └── resume.pdf        # Résumé — powers both "Download CV" buttons
```

---

## Running Locally

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`. No build step needed.

---

## Deploy to GitHub Pages

1. Go to GitHub and create a new public repository named `msingh9365.github.io`. **Do not** initialize it with a README, .gitignore, or license.
2. Open your terminal in this folder and run:
   ```bash
   git remote add origin https://github.com/msingh9365/msingh9365.github.io.git
   git push -u origin main
   ```
3. On GitHub, go to your repository **Settings → Pages** → set source to `main` branch, `/ (root)`.
4. Your site will be live at `https://msingh9365.github.io/`

---

## Adding Your Resume

Place your resume PDF at:
```
assets/resume.pdf
```
Both "Download CV" / "Download Résumé" buttons link to it automatically.

---

## Adding a Portrait

The About section ships without a photo. To add one, drop a square image
(≥ 480×480) at `assets/images/portrait.jpg` and uncomment the `<figure class="about-portrait">`
block in `index.html` (`#about` section) — the CSS is already in place.

---

## Extending the Site

### Add a New Project

Open `script.js` → find the `projects` array → append:

```js
{
  id: 'my-new-project',          // unique slug
  title: 'My New Project',
  category: 'ai-ml',             // 'ai-ml' | 'nlp' | 'big-data' | 'full-stack'
  type: 'coursework',            // 'coursework' | 'minor' — controls the card badge text
  dates: 'Jan 2026 – May 2026',  // or null to omit
  description: 'What it does...',
  tech: ['Python', 'FastAPI'],
  github: 'https://github.com/msingh9365/new-repo',
  thumb: 'assets/images/thumb_new.webp',
}
```

Filter tabs and the "Course Work / Minor" grouping are driven by `type` and `category` —
no HTML changes needed.

### Add a Skill Category

Open `script.js` → find the `skills` array → append:

```js
{ index: '06', name: 'New Category', pills: ['Tool A', 'Tool B'] }
```

---

## Image Guidelines

All images ship as WebP. When adding new ones:

```bash
cwebp -q 78 input.png -o assets/images/output.webp
```

Project thumbnails are sized at 1000px wide; logos at ~160–320px. Keep individual files
under ~100 KB where possible — the whole `assets/images/` directory (excluding `_orig/`)
should stay well under 1 MB.

---

## License

MIT
