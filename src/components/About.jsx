import Section from './Section.jsx'
import styles from './About.module.css'

export default function About() {
  return (
    <Section id="about" label="02 / Background" title="From fintech to full-stack">
      <div className={styles.prose}>
        <p>
          I spent six years in fintech at Lending Club as an Auto Loan Specialist,
          working every day inside the systems that move real money and real
          decisions. That work gave me something a lot of new engineers are still
          reaching for: domain fluency in financial products, and the professional
          maturity that comes from owning outcomes people actually depend on.
        </p>
        <p>
          I graduated from the TripleTen full-stack bootcamp in Spring 2026 and
          haven't stopped building since. Rather than wait for permission, I've been
          shipping real products: a woodworking estimator with Stripe subscriptions
          wired up end to end, a home-maintenance tracker I launched into a gap left
          by a competitor's shutdown, and an open-source design tool. Each one was a
          chance to take an idea all the way to something people can actually use.
        </p>
        <p>
          I'm looking for a remote full-stack role where I can keep doing exactly
          that: understand the problem, ship the solution, and grow alongside a team
          that ships too.
        </p>
      </div>
    </Section>
  )
}
