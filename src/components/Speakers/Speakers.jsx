import './Speakers.css'

const SPEAKER_COUNT = 5

function Speakers() {
  return (
    <section id="speakers" className="speakers section">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-label">Learn from the Best</span>
          <h2 className="section-title">Featured Speakers</h2>
          <p className="section-subtitle">
            Industry experts and AWS professionals sharing real-world insights.
          </p>
        </header>

        <div className="speakers__grid">
          {Array.from({ length: 3 }).map((_, i) => (
            <SpeakerCard key={i} delay={i + 1} />
          ))}
        </div>
        <div className="speakers__grid speakers__grid--centered">
          {Array.from({ length: 2 }).map((_, i) => (
            <SpeakerCard key={i} delay={i + 4} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SpeakerCard({ delay }) {
  return (
    <article className={`speakers__card glass-card reveal reveal-delay-${delay}`}>
      <div className="speakers__image">
        <PersonIcon />
      </div>
      <div className="speakers__info">
        <div className="speakers__coming-soon">Speaker Coming Soon</div>
        <p className="speakers__bio">Details will be announced shortly. Stay tuned!</p>
      </div>
    </article>
  )
}

function PersonIcon() {
  return (
    <svg
      className="speakers__person-icon"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="40" cy="28" r="16" fill="currentColor" opacity="0.25" />
      <path
        d="M10 72c0-16.569 13.431-30 30-30s30 13.431 30 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.15"
        opacity="0.4"
      />
    </svg>
  )
}

export default Speakers
