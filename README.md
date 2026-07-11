# Manish Singh — Portfolio

Personal portfolio website built with vanilla HTML, CSS, and JavaScript. Hosted on GitHub Pages.

**Live site:** https://msingh9365.github.io/

---

## Tech Stack

- **HTML5** — Semantic structure, SEO meta tags, Open Graph
- **CSS3** — Custom design system, glassmorphism, animations, responsive
- **Vanilla JS** — Data-driven rendering, canvas particles, IntersectionObserver

---

## Project Structure

```
portfolio/
├── index.html          # Single-page app — all sections
├── style.css           # Design system + all styles
├── script.js           # All interactivity + data
└── assets/
    ├── images/         # Project thumbnail images
    └── resume.pdf      # Add your resume PDF here
```

---

## Running Locally

Just open `index.html` in your browser. No build step needed.

Or use a local dev server for best results:

```bash
# Python
python3 -m http.server 8080

# Node (if installed)
npx serve .
```

Then visit `http://localhost:8080`

---

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo named `<your-username>.github.io`
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/msingh9365/msingh9365.github.io.git
   git push -u origin main
   ```
2. Go to **Settings → Pages** → set source to `main` branch, `/ (root)`
3. Your site will be live at `https://msingh9365.github.io/`

---

## Adding Your Resume

Place your resume PDF at:
```
assets/resume.pdf
```
The "Download Resume" buttons will automatically link to it.

---

## Extending the Site

### Add a New Project

Open `script.js` → find the `projects` array → append:

```js
{
  id: 'my-new-project',          // unique slug
  title: 'My New Project',
  category: 'ai-ml',             // 'ai-ml' | 'nlp' | 'big-data' | 'full-stack'
  type: 'featured',              // 'featured' | 'minor'
  description: 'What it does...',
  tech: ['Python', 'FastAPI'],
  github: 'https://github.com/msingh9365/new-repo',
  thumb: 'assets/images/thumb_new.jpg',
}
```

### Add a Coding Profile

Open `script.js` → find the `codingProfiles` array → append:

```js
{
  id: 'codechef',
  name: 'CodeChef',
  username: 'your_handle',
  url: 'https://www.codechef.com/users/your_handle',
  icon: '👨‍💻',
}
```

Supported platforms to add: CodeChef, Codeforces, GeeksForGeeks — just add objects above.

---

## License

MIT
