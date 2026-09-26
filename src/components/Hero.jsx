import { useEffect, useState, useRef } from 'react'
import './Hero.css'
import HeroCanvas from './HeroCanvas'

function CountUp({ target, duration = 1600, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return (
    <span ref={ref} className="count-number">
      {count}{suffix}
    </span>
  )
}

export default function Hero() {
  const roles = ['software systems', 'enterprise scale', 'data-driven insights', 'complex problems']
  const [roleIndex, setRoleIndex] = useState(0)
  const cardRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [roles.length])

  // Subtle 3D tilt effect on the terminal card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotX = (y / (rect.height / 2)) * -6
    const rotY = (x / (rect.width / 2)) * 6
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }

  return (
    <section id="hero" className="hero section">
      <HeroCanvas />
      <div className="hero-orb one" aria-hidden="true" />
      <div className="hero-orb two" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="availability">
            <span className="pulse-dot" />
            <p>Open to software engineering, data & enterprise opportunities</p>
          </div>

          <p className="eyebrow">Hello, I am Rajat Goyal</p>
          
          <h1 className="hero-title">
            Engineering with <br />
            <span className="word-flipper-wrap">
              <em key={roles[roleIndex]} className="flipper-word">
                {roles[roleIndex]}.
              </em>
            </span>
          </h1>

          <p className="hero-description">
            Software engineer & Graduate Trainee at <strong>Cubastion Consulting</strong>, working on enterprise Oracle Siebel CRM systems. 
            Passionate about architecting reliable workflows, solving production incidents, full-stack development, and data-driven solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary magnetic-btn">
              Explore my work <span className="arrow-down">↓</span>
            </a>
            <a href="/Resume-rajat.pdf" target="_blank" rel="noreferrer" className="button button-ghost magnetic-btn">
              Read resume <span className="arrow-diag">↗</span>
            </a>
          </div>
        </div>

        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="signal-card spotlight-card glow-shimmer reveal delay-1"
          aria-label="Career snapshot"
        >
          <div className="card-top">
            <div className="terminal-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <span className="mono card-filename">career_signal.json</span>
            <span className="card-status-badge">Live</span>
          </div>

          <div className="terminal-body">
            <div className="terminal-line">
              <span className="line-num">01</span>
              <span className="prop">role:</span> <b>Graduate Trainee Engineer</b>
            </div>
            <div className="terminal-line">
              <span className="line-num">02</span>
              <span className="prop">company:</span> <b>Cubastion Consulting</b>
            </div>
            <div className="terminal-line">
              <span className="line-num">03</span>
              <span className="prop">focus:</span> <b>Oracle Siebel CRM + Full Stack</b>
            </div>
            <div className="terminal-line">
              <span className="line-num">04</span>
              <span className="prop">education:</span> <b>B.Tech CSE (Jul &apos;26) + IIT Madras B.S.</b>
            </div>
            <div className="terminal-line">
              <span className="line-num">05</span>
              <span className="prop">location:</span> <b>Punjab, India</b>
            </div>
          </div>

          <div className="signal-stats">
            <div className="stat-box">
              <strong>
                <CountUp target={80} suffix="+" />
              </strong>
              <small>production tickets resolved</small>
            </div>
            <div className="stat-box">
              <strong>
                <CountUp target={400} suffix="+" />
              </strong>
              <small>coding problems solved</small>
            </div>
            <div className="stat-box">
              <strong>
                <CountUp target={1171} suffix="" />
              </strong>
              <small>Codeforces rating</small>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>ORACLE SIEBEL CRM <b>✦</b> ENTERPRISE SYSTEMS <b>✦</b> DATA ANALYTICS <b>✦</b> FULL STACK ENGINEERING <b>✦</b> COMPETITIVE PROGRAMMING <b>✦</b> IIT MADRAS DATA SCIENCE <b>✦</b> ORACLE SIEBEL CRM <b>✦</b> ENTERPRISE SYSTEMS <b>✦</b> DATA ANALYTICS <b>✦</b> FULL STACK ENGINEERING <b>✦</b> COMPETITIVE PROGRAMMING <b>✦</b> IIT MADRAS DATA SCIENCE <b>✦</b></span>
        </div>
      </div>

      <a className="scroll-cue mono" href="#about" aria-label="Scroll to about section">
        SCROLL TO EXPLORE <span className="cue-arrow">↓</span>
      </a>
    </section>
  )
}
