import { useState, useMemo } from 'react'
import Stack from '../Stack/Stack'
import './Team.css'

const MEMBERS = [
  {
    name: 'Soham Chaudhari',
    role: 'AWS Cloud Club Captain',
    photo: '/team-photos/team-01.jpg.jpeg',
    linkedin: 'https://www.linkedin.com/in/soham-chaudhari-174b4b287/',
  },
  {
    name: 'Vaibhav Chaudhari',
    role: 'Administration and Operations Lead',
    photo: '/team-photos/team-02.jpg.png',
    linkedin: 'https://www.linkedin.com/in/vaibhav-chaudhari-1355a3281/',
  },
  {
    name: 'Saurabh Girase',
    role: 'IT Support and Management',
    photo: '/team-photos/team-03.jpg.jpeg',
    linkedin: 'https://www.linkedin.com/in/saurabhrajput15/',
  },
  {
    name: 'Abdullah Bandukwala',
    role: 'Technical Lead',
    photo: '/team-photos/team-04.jpg.jpeg',
    linkedin: 'https://www.linkedin.com/in/abdullah-bandukwala-74848b231/',
  },
  {
    name: 'Aashish Ingale',
    role: 'Social Media Lead',
    photo: '/team-photos/team-05.jpg.jpeg',
    linkedin: 'https://www.linkedin.com/in/aashish-ingale-276bb2298/',
  },
  {
    name: 'Bhavesh Dev',
    role: 'Event Management Lead',
    photo: '/team-photos/team-06.jpg.png',
    linkedin: 'https://www.linkedin.com/in/bhavesh-dev-118b472a9/',
  },
]

function Team() {
  // Stack renders last card on top — reverse so team-01 (Soham) is on top first
  const [activeIndex, setActiveIndex] = useState(0)
  const current = MEMBERS[activeIndex]

  // Reversed so index 0 (Soham) ends up on top; onTopCardChange remaps back
  const stackCards = useMemo(() =>
    [...MEMBERS].reverse().map((m, i) => (
      <img key={i} src={m.photo} alt={m.name} className="card-image" />
    ))
  , [])

  return (
    <section id="team" className="team section">
      <div className="container">
        <header className="team__header reveal">
          <h2 className="team__title">Meet Our Team</h2>
        </header>

        <div className="team__showcase">
          <div className="team__stack-wrap reveal">
            <Stack
              cards={stackCards}
              randomRotation
              sendToBackOnClick
              sensitivity={160}
              pauseOnHover
              mobileClickOnly
              onTopCardChange={i => setActiveIndex(MEMBERS.length - 1 - i)}
            />
          </div>

          <div className="team__profile reveal reveal-delay-2">
            <h3 className="team__name">{current.name}</h3>
            <p className="team__role">{current.role}</p>
            <div className="team__socials">
              <a
                href={current.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team__social"
                aria-label={`${current.name} on LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default Team
