import { projects } from '../data/site.js'
import Section from './Section.jsx'
import { ExternalIcon, GitHubIcon } from './icons.jsx'
import styles from './Projects.module.css'

function ProjectCard({ project }) {
  const { name, tagline, stack, live, github, blurb, featured, image } = project
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      {image && (
        <a
          href={live || github || undefined}
          target="_blank"
          rel="noreferrer"
          className={styles.thumb}
          tabIndex={-1}
          aria-hidden="true"
        >
          <img src={image} alt="" width="640" height="360" loading="lazy" />
        </a>
      )}

      <div className={styles.body}>
        {featured && <span className={styles.badge}>Featured</span>}

        <div className={styles.head}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.tagline}>{tagline}</p>
        </div>

        <p className={styles.blurb}>{blurb}</p>

        <ul className={styles.stack}>
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className={styles.actions}>
        {live && (
          <a
            href={live}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live demo <ExternalIcon />
          </a>
        )}
        {github && (
          <a
            href={github}
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> Code
          </a>
        )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" label="01 / Work" title="Projects I've shipped">
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  )
}
