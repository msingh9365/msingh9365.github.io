# Manish Singh — Portfolio

My personal site: projects, background, and what I'm working on now.

**Live site:** https://msingh9365.github.io/

Built with [Astro](https://astro.build) and plain CSS. The look is a simple "terminal" style:
everything is set in IBM Plex Mono, with one orange accent, and a light and a dark mode
(the sun/moon button in the header).

---

## Run it on your computer

You need Node.js 22 or newer.

```bash
npm ci
npm run dev        # open http://localhost:4321
```

Other commands:

```bash
npm run check      # checks types and project files for mistakes
npm run build      # builds the final site into dist/
npm run preview    # shows the built site
```

---

## Where things live

```
src/
  config.ts              # your name, links, the menu, the tag above the headline
  data/about.ts          # About page: bio, education, career log, awards, skills
  data/now.ts            # Now page (and the "now" card on the home page)
  content/projects/*.md  # one file per project
  components/ProjectArt.astro  # the small diagram for each project
  pages/                 # one file per page (index, about, now, projects, 404)
  styles/tokens.css      # all colours and fonts
public/
  assets/resume.pdf      # your résumé (all "Resume" links point here)
  assets/images/         # favicon, app icon, link-preview image (og.png)
  fonts/                 # IBM Plex Mono
```

---

## Common changes

**Update the Now page.** Edit `src/data/now.ts` and change `updated` to today's date.

**Add a project.** Copy a file in `src/content/projects/`, give it a new name (the name becomes the
web address, like `/projects/my-project/`), and fill in the fields at the top:

```md
---
title: My Project
tag: machine-learning   # computer-vision | nlp-data | machine-learning | full-stack
kind: Course work
order: 6                # lower numbers show first
featured: false         # true = big card on the home page
summary: "One or two sentences."
status: Completed
period: "Jan 2027 – May 2027"
stack: ["Python", "PyTorch"]
links:
  repo: https://github.com/msingh9365/my-project
art: music              # which diagram to show (see ProjectArt.astro)
---

## Problem
...
```

To give a project its own diagram, add a new drawing in `src/components/ProjectArt.astro`
and add its name to the `art` list in `src/content.config.ts`.

**Change colours.** Edit `src/styles/tokens.css`. Light and dark each have their own block.

**Replace the résumé.** Overwrite `public/assets/resume.pdf` with the new file, keeping the same name.

---

## Publishing

GitHub builds and publishes the site every time something is pushed to `main`
(see `.github/workflows/deploy.yml`).

**One-time setup:** on GitHub, open the repository, go to **Settings → Pages → Build and
deployment**, and set **Source** to **GitHub Actions**.

---

## License

MIT
