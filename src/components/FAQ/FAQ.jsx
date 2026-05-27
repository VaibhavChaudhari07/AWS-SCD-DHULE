import { useState } from 'react'
import './FAQ.css'

const FAQ_ITEMS = [
  {
    question: 'Who can attend?',
    answer:
      'AWS Student Community Day is open to all university and college students, researchers, and early-career developers interested in cloud technologies. A valid student ID or student email may be required at check-in.',
  },
  {
    question: 'Is there a registration fee?',
    answer:
      'Thanks to our sponsors, registration is heavily subsidized for students. Check the registration portal for current pricing and available passes.',
  },
  {
    question: 'Do I need prior AWS experience?',
    answer:
      'Not at all! Sessions range from cloud fundamentals to advanced topics. Beginners are welcome — our hands-on labs include starter tracks designed for first-time AWS users.',
  },
  {
    question: 'Will I get a certificate?',
    answer:
      'Yes! All attendees receive a digital certificate of participation. Premium Workshop Pass holders also receive a badge recognizing completed lab modules.',
  },
  {
    question: 'Will there be networking opportunities?',
    answer:
      'Absolutely. The event includes dedicated networking breaks, a student showcase, and an informal after-session mixer — great for meeting peers, mentors, and AWS community leaders.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="faq section">
      <div className="container faq__container">

        {/* Left — photo */}
        <div className="faq__visual">
          <div className="faq__img-wrap">
            <img
              src="/scd-photos/scd-01.jpg"
              alt="Students at AWS Community Day"
              className="faq__img"
            />
            <div className="faq__img-border" aria-hidden="true" />
          </div>
        </div>

        {/* Right — accordion */}
        <div className="faq__panel">
          <header className="faq__header">
            <h2 className="faq__title">
              Frequently Asked<br />
              <span className="faq__title-highlight">Questions</span>
            </h2>
          </header>

          <div className="faq__list">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={item.question}
                className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
              >
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={openIndex === index}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </button>
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default FAQ
