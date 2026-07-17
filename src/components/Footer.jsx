import { profile } from '../data/site.js'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>
          © {year} {profile.name}
        </span>
        <span className={styles.built}>Built with React &amp; Vite</span>
      </div>
    </footer>
  )
}
