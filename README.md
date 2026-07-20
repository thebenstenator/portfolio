# Ben - Portfolio

Single-page portfolio site. Dark, minimal, recruiter-skim optimized.
Built with **Vite + React** (CSS Modules, zero UI dependencies).

**Live:** https://benaportfolio.vercel.app

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Editing content

Everything editable (profile, links, skills, projects) lives in one file:
[`src/data/site.js`](src/data/site.js). Change it there and it updates
everywhere on the site. Assets live in `public/` (resume at `public/resume.pdf`,
images under `public/images/`).

## Structure

```
src/
  data/site.js          # profile, skills, projects - edit here
  components/            # one component + its .module.css per section
  hooks/useReveal.js     # fade-up-on-scroll (respects reduced-motion)
  hooks/useCopyEmail.js  # copy-to-clipboard for the email buttons
  index.css             # design tokens + global styles
```

## Deploy

Hosted on Vercel, auto-deploying on every push to `main`. Vite is auto-detected
(build `npm run build`, output `dist/`), so any static host works the same way.
