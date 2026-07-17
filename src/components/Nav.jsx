import { useEffect, useState } from 'react'
import { profile } from '../data/site.js'
import styles from './Nav.module.css'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Back to top">
          <span className={styles.dot} />
          {profile.name}
        </a>
        <nav className={styles.links} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resume}
          className={`btn btn-ghost ${styles.resumeBtn}`}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </header>
  )
}
