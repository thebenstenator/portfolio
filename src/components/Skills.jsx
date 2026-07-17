import { skills } from '../data/site.js'
import Section from './Section.jsx'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <Section id="skills" label="03 / Toolkit" title="What I build with">
      <ul className={styles.pills}>
        {skills.map((skill) => (
          <li key={skill} className={styles.pill}>
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  )
}
