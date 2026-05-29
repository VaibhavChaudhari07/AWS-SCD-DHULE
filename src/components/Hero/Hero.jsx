import { useEffect, useRef, useState } from 'react'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const [carY, setCarY] = useState(0)
  const [carVisible, setCarVisible] = useState(true)
  const [muted, setMuted] = useState(true)

  // Unmute as soon as the user has interacted (intro button click = user gesture)
  useEffect(() => {
    const unlock = () => {
      const video = videoRef.current
      if (video) {
        video.muted = false
        setMuted(false)
      }
    }
    window.addEventListener('hero-unmute', unlock, { once: true })
    return () => window.removeEventListener('hero-unmute', unlock)
  }, [])

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

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero__video"
          src="/herobg/herobg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero__video-overlay" />
        <div className="hero__aurora" />
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      {/* Mute toggle */}
      <button
        className="hero__mute-btn"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
      >
        {muted ? <MutedIcon /> : <UnmutedIcon />}
      </button>

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

function MutedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

function UnmutedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  )
}

export default Hero
