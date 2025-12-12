import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact', isCTA: true }
  ]

  const handleLinkClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className={`nav ${isScrolled ? 'scrolled' : ''}`} id="top-nav">
      <div className="nav__brand">Landing Page</div>
      <button
        className="nav__toggle"
        aria-label="Toggle navigation"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`nav__links ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav__link ${link.isCTA ? 'nav__cta' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick(link.href)
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar

