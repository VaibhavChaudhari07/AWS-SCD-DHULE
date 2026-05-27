import './Registration.css'

/**
 * Registration — full-width CTA banner in F1 theme.
 */
function Registration() {
  return (
    <section id="register" className="registration section">
      <div className="registration__inner">
        {/* Racing stripe decorations */}
        <div className="registration__stripes" aria-hidden="true">
          <span className="registration__stripe registration__stripe--1" />
          <span className="registration__stripe registration__stripe--2" />
          <span className="registration__stripe registration__stripe--3" />
        </div>

        <div className="registration__content">
          <span className="section-label">Limited Seats</span>
          <h2 className="registration__title">
            Secure Your Spot at the<br />
            Community Event of the Year
          </h2>
          <p className="registration__sub">
            No stuffy conference rooms, no dull corporate halls — just students,
            builders, and cloud enthusiasts sharing knowledge and levelling up together.
          </p>
          <div className="registration__actions">
            <a href="#register" className="btn btn-primary btn-lg">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
