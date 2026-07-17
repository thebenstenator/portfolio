// ---------------------------------------------------------------------------
// Single source of truth for personal info + links.
// Edit these once and they update everywhere on the site.
// TODO(ben): fill in your real GitHub + LinkedIn URLs, drop your resume PDF
// into /public/resume.pdf, and swap the placeholder images in /public/images
// for real ones (your headshot + screenshots of each site).
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Ben',
  role: 'Full-Stack Engineer',
  tagline:
    'Full-stack engineer with 6 years in fintech, now building and shipping real products with React, Node, and TypeScript.',
  location: 'Remote',
  email: 'benjamin.anderson.5809@gmail.com',
  github: 'https://github.com/your-username', // TODO: real URL
  linkedin: 'https://www.linkedin.com/in/your-handle', // TODO: real URL
  resume: '/resume.pdf', // TODO: add file to /public
  photo: '/images/profile.svg', // TODO: replace with a real headshot
}

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Next.js',
  'Supabase',
  'PostgreSQL',
  'Stripe',
  'REST APIs',
  'Git',
]

export const projects = [
  {
    name: 'BoardFoot',
    tagline: 'Woodworking estimator SaaS.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    live: 'https://boardfoot.app',
    github: null, // add if the repo is public
    image: '/images/boardfoot.svg', // TODO: replace with a real screenshot
    blurb:
      'A SaaS tool that turns messy woodworking cut lists into accurate material estimates. I built a calculation engine that handles board-foot math and waste factors, a live bill-of-materials editor, and PDF export, with Stripe wired up end to end for subscriptions. The trickiest part was keeping the client-side calculator and server-side pricing perfectly in sync.',
    featured: true,
  },
  {
    name: 'HomeWise',
    tagline: 'Free home maintenance tracker, launched during my job search.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://yourhomewise.app',
    github: null,
    image: '/images/homewise.svg', // TODO: replace with a real screenshot
    blurb:
      'When Centriq shut down in January 2026, I spotted a gap in the home-maintenance space and built HomeWise to fill it. Homeowners track appliances, warranties, and recurring upkeep in one place. Beyond the code, I treated it like a real launch, printing business cards and handing them to realtors to reach homeowners directly.',
    featured: false,
  },
  {
    name: 'CustomSeal',
    tagline: 'Open-source designer for 3D-printable moisture chamber attachments.',
    stack: ['React', 'JavaScript', 'Open Source'],
    live: null,
    github: 'https://github.com/your-username/customseal', // TODO: real URL
    image: '/images/customseal.svg', // TODO: replace with a real screenshot
    blurb:
      'An open-source React app that lets you design custom, 3D-printable moisture-chamber attachments to spec. I built it to solve my own problem, then opened it up so others could adapt it. The interesting challenge was translating user inputs into valid, printable geometry parameters entirely in the browser.',
    featured: false,
  },
]
