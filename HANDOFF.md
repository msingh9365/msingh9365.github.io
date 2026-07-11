# Portfolio Project Handoff

This document outlines the current state of the portfolio website, the architectural decisions made, testing performed, and instructions for future modifications.

## 1. Intentions of the Project
- **Goal:** Create a modern, visually stunning, dark-themed portfolio website to showcase your experience, education, skills, and projects.
- **Design Philosophy:** Deep navy and indigo background, with cyan and violet accents. Heavy use of glassmorphism (translucent cards with background blur) and fluid animations (reveal on scroll, hero canvas particles) to create a premium, state-of-the-art feel.
- **Architecture:** The site is a static single-page application built using pure HTML, CSS, and Vanilla JavaScript. It requires no build step (no React/Vue/Node required) to ensure maximum performance, ease of maintenance, and 100% compatibility with free static hosting like GitHub Pages.
- **Data-Driven Approach:** To make future updates effortless, all dynamically changing content (Projects, Skills, Coding Profiles) is stored as simple JavaScript arrays in `script.js`.

## 2. Changes Implemented & Tested
- **Structure (`index.html`):** Semantic HTML5 layout featuring a Hero section, About Me, Experience (Timeline), Projects, Skills, Coding Profiles, Education, Achievements, and Contact.
- **Styling (`style.css`):** Comprehensive design system utilizing CSS variables for colors, typography, and spacing. Added mobile responsiveness (hamburger menu), hover effects, and CSS keyframe animations.
- **Interactivity (`script.js`):**
  - Interactive HTML5 canvas particle background in the hero section.
  - Typewriter effect for professional roles.
  - `IntersectionObserver` to trigger smooth reveal animations as you scroll down the page.
  - Project filtering mechanism (All, AI/ML, NLP, Big Data, Full-Stack, Course Work / Minor).
  - Dynamic injection of project cards, skills, and coding profiles from data arrays.
- **Content Updates (per your request):**
  - Updated B.Tech degree to "Electronics & Communication Engineering".
  - Added 10th-grade education details with 10 CGPA.
  - Updated 12th and 10th institution to "Kendriya Vidyalaya" with CBSE board.
  - Removed years from education except for M.Tech.
  - Integrated official high-quality college logos (IIT Ropar, Haldia Institute of Technology, Kendriya Vidyalaya) sourced from the web instead of AI-generated placeholders.
  - Refactored the Projects section to clearly distinguish between "Course Work" (e.g., CBIR, YouTube Trend, Music Genre, Campus Court) and "Minor Project" (Credit Card Fraud Detection) and updated the filter tabs accordingly.
  - Removed LeetCode from the bottom Contact section (kept in Coding Profiles).
- **Testing:**
  - Verified local deployment rendering.
  - Verified that all dynamic JavaScript renders the DOM properly.
  - Verified project filtering logic (the new Course Work tab works successfully).

## 3. What Needs to be Implemented / Remaining Steps
- **Add your Resume PDF:** Place your actual resume file at `assets/resume.pdf` inside the project folder. The "Download Resume" buttons are already wired up to this path.
- **Review Content:** Give the textual descriptions of your experience and projects a final read-through to ensure everything aligns perfectly with your resume.
- **Deploy:** Deploy the site to GitHub Pages (instructions in `README.md`).

## 4. How to Make Future Changes

Because of the data-driven architecture, you rarely need to touch the HTML or CSS.

### Adding or Modifying a Project
1. Open `script.js`.
2. Locate the `projects` array at the top of the file.
3. To add a new project, simply copy an existing object block and append it to the array.
   ```javascript
   {
     id: 'new-project',
     title: 'My Awesome App',
     category: 'full-stack', // Must match one of the filter tabs (e.g., 'ai-ml', 'nlp', 'big-data', 'full-stack')
     type: 'coursework',     // 'coursework' or 'minor'
     description: 'A brief description of what you built.',
     tech: ['React', 'Node.js', 'MongoDB'],
     github: 'https://github.com/msingh9365/repo-link',
     thumb: 'assets/images/thumb_new.jpg', // Add a thumbnail image in this folder
   }
   ```
4. Save the file. The UI and the filter tabs will update automatically.

### Updating Coding Profiles
1. Open `script.js` and locate the `codingProfiles` array.
2. Add new platforms (like CodeChef, GeeksForGeeks, etc.) by appending a new object:
   ```javascript
   {
     id: 'codechef',
     name: 'CodeChef',
     username: 'your_handle',
     url: 'https://www.codechef.com/users/your_handle',
     icon: '👨‍💻',
   }
   ```

### Updating Hardcoded Sections (e.g., Experience or Education)
If you land a new job or want to update your education:
1. Open `index.html`.
2. Scroll to the `<!-- EXPERIENCE -->` or `<!-- EDUCATION -->` section.
3. Copy an existing card (e.g., `<div class="timeline-item reveal">...</div>` or `<div class="edu-card glass reveal">...</div>`).
4. Paste it where you want it to appear and modify the text inside the HTML tags.
