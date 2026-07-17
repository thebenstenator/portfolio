import { profile } from '../data/site.js'
import Section from './Section.jsx'
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons.jsx'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <Section id="contact" label="04 / Contact" title="Let's build something">
      <div className={styles.wrap}>
        <p className={styles.lead}>
          I'm open to remote full-stack roles and happy to talk. The fastest way to
          reach me is email, or grab my resume below.
        </p>

        <div className={styles.ctas}>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            {profile.email} <ArrowIcon />
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

        <div className={styles.links}>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GitHubIcon /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>
            <MailIcon /> Email
          </a>
        </div>
      </div>
    </Section>
  )
}
