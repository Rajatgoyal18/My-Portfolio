import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) return saved
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  // Theme synchronization
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('portfolio-theme', theme)
    
    const themeColorMeta = document.querySelector('meta[name="theme-color"]')
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'dark' ? '#080c14' : '#f8fafc')
    }
  }, [theme])

  // Scroll Progress
  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  // Universal Intersection Observer for smooth scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            // Optional: keep observing or unobserve once revealed
            // observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Card Mouse Spotlight & Magnetic Button Micro-interactions
  useEffect(() => {
    const handlePointerMove = (e) => {
      // 1. Dynamic Card Spotlight
      const card = e.target.closest('.spotlight-card')
      if (card) {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      }

      // 2. Magnetic Buttons
      const magneticBtn = e.target.closest('.magnetic-btn')
      if (magneticBtn) {
        const rect = magneticBtn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        magneticBtn.style.transform = `translate3d(${x * 0.22}px, ${y * 0.22}px, 0)`
      }
    }

    const handlePointerLeave = (e) => {
      const magneticBtn = e.target.closest('.magnetic-btn')
      if (magneticBtn) {
        magneticBtn.style.transform = 'translate3d(0, 0, 0)'
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerout', handlePointerLeave, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerout', handlePointerLeave)
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app-shell">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Dynamic Ambient Glow Mesh */}
      <div className="app-ambient-glow" aria-hidden="true">
        <div className="ambient-blob top-right" />
        <div className="ambient-blob mid-left" />
        <div className="ambient-blob bottom-right" />
      </div>

      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
