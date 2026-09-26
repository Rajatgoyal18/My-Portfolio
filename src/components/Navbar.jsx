import { useEffect, useState } from 'react'
import './Navbar.css'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -50% 0px' }
    )

    links.forEach((link) => {
      const el = document.getElementById(link.toLowerCase())
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const visit = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav container" aria-label="Primary navigation">
        <button className="brand" onClick={() => visit('hero')} aria-label="Rajat Goyal - Go to top">
          RG<span>.</span>
        </button>

        <div className="nav-right">
          <div className={`nav-links ${open ? 'is-open' : ''}`}>
            {links.map((link) => {
              const id = link.toLowerCase()
              const isActive = active === id
              return (
                <button
                  key={link}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => visit(id)}
                >
                  {link}
                  {isActive && <span className="active-pill" />}
                </button>
              )
            })}
          </div>

          {/* Theme Toggle Button */}
          <button
            className="theme-toggle magnetic-btn"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span className="toggle-icon-wrap">
              {theme === 'dark' ? (
                // Sun icon for dark mode (click to switch to light)
                <svg className="theme-svg sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                // Moon icon for light mode (click to switch to dark)
                <svg className="theme-svg moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </span>
            <span className="theme-name">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          <a className="nav-resume magnetic-btn" href="/Resume-rajat.pdf" target="_blank" rel="noreferrer">
            Resume <span>↗</span>
          </a>

          <button
            className={`menu-toggle ${open ? 'is-active' : ''}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  )
}
