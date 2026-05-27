import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About', href: '#hero' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Activities', href: '#activities' },
]

/**
 * Sticky responsive navbar with desktop links, centered title, and CTA.
 * Collapses to hamburger menu on mobile.
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Left — navigation links */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
          <Link to="/sponsors" className="navbar__link">Sponsors</Link>
        </nav>

        {/* Center — event title */}
        <a href="#hero" className="navbar__brand">
          AWS Community Day
        </a>

        {/* Right — ticket CTA */}
        <a href="#register" className="navbar__cta btn btn-primary">
          Buy Ticket
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <Link to="/sponsors" className="navbar__mobile-link" onClick={closeMenu}>
            Sponsors
          </Link>
          <a
            href="#register"
            className="btn btn-primary navbar__mobile-cta"
            onClick={closeMenu}
          >
            Buy Ticket
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
