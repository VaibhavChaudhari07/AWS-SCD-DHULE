import { Link } from "react-router-dom"
import { useState } from "react"
import "./Sponsors.css"

const TIERS = [
  { tier: "Title Sponsor", slots: 1 },
  { tier: "Gold Sponsor", slots: 2 },
  { tier: "Silver Sponsor", slots: 3 },
  { tier: "Community Partner", slots: 3 },
]

function Sponsors() {
  return (
    <div className="sponsors-page">
      <header className="sponsors-page__hero">
        <Link to="/" className="sponsors-page__back">Back to Home</Link>
        <span className="section-label">Partners and Supporters</span>
        <h1 className="sponsors-page__title">Our Sponsors</h1>
        <p className="sponsors-page__sub">
          AWS Student Community Day is made possible by the generous support of our sponsors.
          Interested in partnering with us?{" "}
          <a href="mailto:aws.scd.dhule@gmail.com" className="sponsors-page__email">
            aws.scd.dhule@gmail.com
          </a>
        </p>
      </header>
      <main className="sponsors-page__content container">
        <section className="sponsors-tier sponsors-tier--main">
          <h2 className="sponsors-tier__name sponsors-tier__name--main">Main Sponsor</h2>
          <div className="sponsors-main-slot">
            <img src="/Sponser/aws.png" alt="Amazon Web Services" className="sponsors-main-img" />
          </div>
        </section>
        {TIERS.map((t) => (
          <section key={t.tier} className="sponsors-tier">
            <h2 className="sponsors-tier__name">{t.tier}</h2>
            <div className={`sponsors-tier__grid sponsors-tier__grid--${t.slots}`}>
              {Array.from({ length: t.slots }).map((_, i) => (
                <div key={i} className="sponsors-slot">
                  <span className="sponsors-slot__label">Coming Soon</span>
                </div>
              ))}
            </div>
          </section>
        ))}
        <section className="sponsors-form-section">
          <div className="sponsors-form-header">
            <span className="sponsors-tier__name">Become a Sponsor</span>
            <h2 className="sponsors-form-title">Send a Sponsorship Request</h2>
            <p className="sponsors-form-sub">Fill out the form and our team will get back to you within 2-3 business days.</p>
            <div className="sponsors-form-contact">
              <span>Or email us directly</span>
              <a href="mailto:aws.scd.dhule@gmail.com">aws.scd.dhule@gmail.com</a>
            </div>
          </div>
          <SponsorForm />
        </section>
      </main>
    </div>
  )
}

function SponsorForm() {
  const [status, setStatus] = useState("")
  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    const formData = new FormData(e.target)
    const key = import.meta.env.VITE_WEB3FORMS_KEY
    formData.append("access_key", key)
    formData.append("subject", "Sponsorship Request - AWS Student Community Day")
    formData.append("from_name", "AWS SCD Sponsor Form")
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData })
      const data = await res.json()
      if (data.success) { setStatus("success"); e.target.reset() }
      else setStatus("error")
    } catch { setStatus("error") }
  }
  if (status === "success") {
    return (
      <div className="sponsors-form__success">
        <div className="sponsors-form__success-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" stroke="var(--f1-red)" strokeWidth="1.5" />
            <path d="M7 12.5l3.5 3.5 6.5-7" stroke="var(--f1-red-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Request Sent!</h3>
        <p>We will get back to you within 2-3 business days.</p>
      </div>
    )
  }
  return (
    <form className="sponsors-form" onSubmit={onSubmit} noValidate>
      <div className="sponsors-form__row">
        <div className="sponsors-form__field">
          <label htmlFor="sf-name">Your Name</label>
          <input id="sf-name" name="name" type="text" required placeholder="John Doe" />
        </div>
        <div className="sponsors-form__field">
          <label htmlFor="sf-org">Organization</label>
          <input id="sf-org" name="organization" type="text" required placeholder="Company or College" />
        </div>
      </div>
      <div className="sponsors-form__row">
        <div className="sponsors-form__field">
          <label htmlFor="sf-email">Email Address</label>
          <input id="sf-email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="sponsors-form__field">
          <label htmlFor="sf-tier">Sponsorship Tier</label>
          <select id="sf-tier" name="tier">
            <option value="">Select a tier</option>
            <option>Title Sponsor</option>
            <option>Gold Sponsor</option>
            <option>Silver Sponsor</option>
            <option>Community Partner</option>
          </select>
        </div>
      </div>
      <div className="sponsors-form__field">
        <label htmlFor="sf-message">Message</label>
        <textarea id="sf-message" name="message" rows={4} placeholder="Tell us about your organization..." />
      </div>
      <div className="sponsors-form__divider" />
      {status === "error" && <p className="sponsors-form__error">Something went wrong. Please email us directly.</p>}
      <button type="submit" className="sponsors-form__submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Request"}
      </button>
    </form>
  )
}

export default Sponsors