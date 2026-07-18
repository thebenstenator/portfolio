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
  github: 'https://github.com/thebenstenator',
  linkedin: 'https://www.linkedin.com/in/benanderson5809',
  resume: '/resume.pdf', // TODO: add file to /public
  photo: '/images/profile.jpg',
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
    image: '/images/boardfoot.jpg',
    blurb:
      'A SaaS tool that turns messy woodworking cut lists into accurate material estimates. I built a calculation engine that handles board-foot math and waste factors, a live bill-of-materials editor, and PDF export, with Stripe wired up end to end for subscriptions. The trickiest part was keeping the client-side calculator and server-side pricing perfectly in sync.',
    featured: true,
  },
  {
    name: 'HomeWise',
    tagline: 'Free home maintenance tracker I built for myself.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://yourhomewise.app',
    github: null,
    image: '/images/homewise.jpg',
    blurb:
      'I built HomeWise because I wanted this tool myself: one place to track appliances, warranties, and recurring home upkeep instead of scattered notes and receipts. Once it worked for me, I treated it like a real launch, printing business cards and handing them to realtors to get it in front of other homeowners.',
    featured: false,
  },
  {
    name: 'CustomSeal',
    tagline: 'Open-source designer for 3D-printable moisture chamber attachments.',
    stack: ['React', 'JavaScript', 'Open Source'],
    live: null,
    github: 'https://github.com/thebenstenator/custom-seal',
    image: '/images/customseal.jpg',
    blurb:
      'An open-source React app that lets you design custom, 3D-printable moisture-chamber attachments to spec. I built it to solve my own problem, then opened it up so others could adapt it. The interesting challenge was translating user inputs into valid, printable geometry parameters entirely in the browser.',
    featured: false,
  },
]
