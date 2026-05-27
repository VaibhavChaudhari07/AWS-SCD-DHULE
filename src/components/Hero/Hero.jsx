import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const HERO_STATS = [
  { value: '500+', label: 'Students' },
  { value: '10+', label: 'Speakers' },
  { value: '1 Day', label: 'Full Experience' },
]

function Hero() {
  const heroRef = useRef(null)
  const [carY, setCarY] = useState(0)
  const [carVisible, setCarVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const hero = heroRef.current
      if (!hero) return

      const rect = hero.getBoundingClientRect()
      const inHeroZone = rect.bottom > 0 && rect.top < window.innerHeight
      setCarVisible(inHeroZone)
      if (!inHeroZone) return

      const scrollRange = Math.max(hero.offsetHeight - window.innerHeight * 0.35, 1)
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollRange)
      const progress = scrolled / scrollRange
      const maxTravel = Math.max(hero.offsetHeight - 280, 0)
      setCarY(progress * maxTravel)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__aurora" />
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div
        className={`hero__car-wrap ${carVisible ? 'hero__car-wrap--visible' : ''}`}
        aria-hidden="true"
        style={{ transform: `translateY(${carY}px)` }}
      >
        <img src="/f1-car.png" alt="" className="hero__car" draggable="false" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Student Edition · 2026
          </span>
          <h1 className="hero__title">
            <span className="hero__title-line">Welcome to</span>
            <span className="hero__highlight">AWS Student Community Day</span>
          </h1>
          <p className="hero__subtitle">
            The premier cloud experience for students — hands-on labs, world-class
            speakers, and a community built to launch your career.
          </p>
          <div className="hero__actions">
            <a href="#register" className="btn btn-primary btn-lg">
              Register Now
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
