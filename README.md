# Ben — Portfolio

Single-page portfolio site. Dark, minimal, recruiter-skim optimized.
Built with **Vite + React** (CSS Modules, zero UI dependencies).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Before it goes live — fill these in

Everything editable lives in one file: [`src/data/site.js`](src/data/site.js).

- [ ] **GitHub URL** — replace `github.com/your-username`
- [ ] **LinkedIn URL** — replace `linkedin.com/in/your-handle`
- [ ] **CustomSeal repo URL** — replace the placeholder in the CustomSeal project
- [ ] **Résumé PDF** — drop your file at `public/resume.pdf` (the download
      buttons already point there)
- [ ] Optionally add public repo links for BoardFoot / HomeWise (set `github:`)

## Structure

```
src/
  data/site.js        # profile, skills, projects — edit here
  components/          # one component + its .module.css per section
  hooks/useReveal.js  # fade-up-on-scroll (respects reduced-motion)
  index.css           # design tokens + global styles
```

## Deploy

Any static host works. `npm run build` outputs `dist/`. Vercel, Netlify, and
Cloudflare Pages all auto-detect Vite — point them at this repo and they'll
build with the commands above.
