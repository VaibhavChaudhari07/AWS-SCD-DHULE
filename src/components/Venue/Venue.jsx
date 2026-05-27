import './Venue.css'

const SPACES = [
  {
    icon: '🎤',
    name: 'Main Auditorium',
    desc: 'Opening ceremony, guest keynotes, industry panel discussion, and closing ceremony.',
  },
  {
    icon: '🖥',
    name: 'Presentation Rooms',
    desc: 'Parallel Track A (AI & ML) and Track B (Cloud & DevOps) classrooms equipped with interactive senseboards.',
  },
  {
    icon: '💻',
    name: 'Hands-on Workshops',
    desc: 'Dedicated 5th-floor computer laboratories hosting active AWS cloud labs.',
  },
  {
    icon: '👥',
    name: 'Central Quadrangle',
    desc: 'Physical company sponsor booths, interactive promotional displays, and community networking.',
  },
]

function Venue() {
  return (
    <section id="venue" className="venue section">
      <div className="container venue__inner">

        {/* Left — map */}
        <div className="venue__map-wrap">
          <iframe
            title="SVKM's Institute of Technology, Dhule"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.0379045149602!2d74.7685126!3d20.8705224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec60f78cc96db%3A0x6ae5738a6d39c455!2sSVKM&#39;s%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1779743533165!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right — info */}
        <div className="venue__info">
          <span className="venue__label">Event Location</span>
          <h2 className="venue__title">The Venue &amp; Spaces</h2>
          <p className="venue__desc">
            SVKM's Institute of Technology, Dhule — a world-class educational hub
            known for its modern infrastructure and commitment to engineering excellence.
          </p>

          <div className="venue__spaces">
            {SPACES.map((s) => (
              <div key={s.name} className="venue__space glass-card">
                <p className="venue__space-name">
                  <span className="venue__space-icon">{s.icon}</span>
                  {s.name}
                </p>
                <p className="venue__space-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="venue__footer">
            <a
              href="https://maps.app.goo.gl/svkm-iot-dhule"
              target="_blank"
              rel="noopener noreferrer"
              className="venue__directions"
            >
              <span>Get Directions ↗</span>
            </a>
            <a href="#register" className="venue__ticket btn btn-primary">
              <span>Buy Ticket</span>
            </a>
            <p className="venue__address">
              Survey No. 499, Plot No. 2,<br />
              Mumbai Agra Highway, Dhule,<br />
              Maharashtra 424311
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Venue
