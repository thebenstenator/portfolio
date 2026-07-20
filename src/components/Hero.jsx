import { profile } from '../data/site.js'
import { useCopyEmail } from '../hooks/useCopyEmail.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  const { copied, copy } = useCopyEmail(profile.email)

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.available} /> Open to remote roles
          </p>

          <h1 className={styles.name}>
            {profile.name}
            <span className={styles.role}>{profile.role}</span>
          </h1>

          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.ctas}>
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a
              href={profile.resume}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              Download resume
            </a>
          </div>

          <div className={styles.socials}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              onClick={copy}
              aria-label={copied ? 'Email copied to clipboard' : 'Email'}
              title={copied ? 'Copied!' : profile.email}
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <div className={styles.portrait}>
          <img
            src={profile.photo}
            alt={`${profile.name}, ${profile.role}`}
            width="400"
            height="480"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
