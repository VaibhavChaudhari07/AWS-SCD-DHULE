import './Activities.css'

const SCHEDULE = [
  { start: '08:00 AM', end: '08:30 AM', title: 'Organizing Team Preparation', sector: 'formation' },
  { start: '08:30 AM', end: '10:00 AM', title: 'Registration & Morning Breakfast', sector: 'pit' },
  { start: '10:00 AM', end: '10:30 AM', title: 'Official Opening Ceremony', sector: 'start' },
  { start: '10:30 AM', end: '11:15 AM', title: 'Main Presentation 1: Tech Keynote', sector: 'race' },
  { start: '11:15 AM', end: '11:30 AM', title: 'Short Networking Break', sector: 'caution' },
  { start: '11:30 AM', end: '12:30 PM', title: 'Parallel Presentation Sessions', sector: 'race' },
  { start: '12:30 PM', end: '01:30 PM', title: 'Lunch Break & Company Networking', sector: 'pit' },
  { start: '01:30 PM', end: '03:00 PM', title: 'Practical Hands-on Workshops', sector: 'race' },
  { start: '03:00 PM', end: '03:15 PM', title: 'Short Afternoon Break', sector: 'caution' },
  { start: '03:15 PM', end: '04:00 PM', title: 'Industry Panel Discussion', sector: 'race' },
  { start: '04:00 PM', end: '04:45 PM', title: 'Student Project Exhibition & High-Tea', sector: 'race' },
  { start: '04:45 PM', end: '05:30 PM', title: 'Closing Ceremony & Group Photo', sector: 'finish' },
]

const SECTOR_LABEL = {
  formation: 'Formation Lap',
  pit: 'Pit Lane',
  start: 'Lights Out',
  race: 'Green Flag',
  caution: 'Safety Car',
  finish: 'Chequered Flag',
}

/**
 * Activities — F1 circuit-style race day schedule.
 */
function Activities() {
  return (
    <section id="activities" className="activities section">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-label">Race Circuit</span>
          <h2 className="section-title">Day Schedule</h2>
          <p className="section-subtitle">
            Twelve sectors. One full day on the cloud racing calendar — green flag at 10:00 AM.
          </p>
        </header>

        <div className="activities__circuit" aria-label="Event schedule race track">
          <div className="activities__track-svg" aria-hidden="true">
            <svg viewBox="0 0 120 800" preserveAspectRatio="none" className="activities__svg">
              <path
                className="activities__track-path"
                d="M60 20 C 95 80, 95 140, 60 200 C 25 260, 25 320, 60 380 C 95 440, 95 500, 60 560 C 25 620, 25 680, 60 740 L 60 780"
                fill="none"
              />
              <path
                className="activities__track-curb activities__track-curb--left"
                d="M60 20 C 95 80, 95 140, 60 200 C 25 260, 25 320, 60 380 C 95 440, 95 500, 60 560 C 25 620, 25 680, 60 740 L 60 780"
                fill="none"
              />
              <path
                className="activities__track-curb activities__track-curb--right"
                d="M60 20 C 95 80, 95 140, 60 200 C 25 260, 25 320, 60 380 C 95 440, 95 500, 60 560 C 25 620, 25 680, 60 740 L 60 780"
                fill="none"
              />
            </svg>
          </div>

          <div className="activities__start-line" aria-hidden="true">
            <span className="activities__flag activities__flag--checkered" />
            <span className="activities__start-text">Start / Finish</span>
          </div>

          <ol className="activities__sectors">
            {SCHEDULE.map((item, index) => {
              const side = index % 2 === 0 ? 'left' : 'right'
              const lap = String(index + 1).padStart(2, '0')
              return (
                <li
                  key={item.title}
                  className={`activities__sector activities__sector--${side} activities__sector--${item.sector}`}
                >
                  <div className="activities__apex" aria-hidden="true">
                    <span className="activities__lap">{lap}</span>
                  </div>
                  <article className="activities__card">
                    <div className="activities__timing">
                      <span className="activities__time-start">{item.start}</span>
                      <span className="activities__time-sep">→</span>
                      <span className="activities__time-end">{item.end}</span>
                    </div>
                    <span className="activities__sector-tag">{SECTOR_LABEL[item.sector]}</span>
                    <h3 className="activities__card-title">{item.title}</h3>
                  </article>
                </li>
              )
            })}
          </ol>

          <div className="activities__finish-line" aria-hidden="true">
            <span className="activities__flag activities__flag--checkered" />
            <span className="activities__start-text">Chequered Flag · 05:30 PM</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities
