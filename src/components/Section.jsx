import { useReveal } from '../hooks/useReveal.js'

// A scroll-anchored <section> that fades its contents up on first view.
export default function Section({ id, label, title, children }) {
  const [ref, visible] = useReveal()

  return (
    <section id={id} className="section">
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        {label && <p className="section-label">{label}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  )
}
