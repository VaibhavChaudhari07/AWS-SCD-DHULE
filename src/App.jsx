import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import LogoLoopSection from './components/LogoLoopSection/LogoLoopSection'
import PreviousEvents from './components/PreviousEvents/PreviousEvents'
import Team from './components/Team/Team'
import Activities from './components/Activities/Activities'
import Speakers from './components/Speakers/Speakers'
import SocialWall from './components/SocialWall/SocialWall'
import FAQ from './components/FAQ/FAQ'
import Venue from './components/Venue/Venue'
import Footer from './components/Footer/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
  return (
    <>
      <div className="page-ambient" aria-hidden="true">
        <div className="page-ambient__orb page-ambient__orb--1" />
        <div className="page-ambient__orb page-ambient__orb--2" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <LogoLoopSection />
        <PreviousEvents />
        <Team />
        <Activities />
        <Speakers />
        <SocialWall />
        <FAQ />
        <Venue />
      </main>
      <Footer />
    </>
  )
}

export default App
