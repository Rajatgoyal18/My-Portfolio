import React, { useState, useEffect } from 'react'
import './Hero.css'
import hackerHero from '../assets/hacker-hero.jpg'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)

  const texts = ['Python Developer', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Rajat Goyal</span>
          </h1>
          <h2 className="hero-subtitle">
            I'm a <span className="animated-text">{texts[currentText]}</span>
          </h2>
          <p className="hero-description">
            Passionate for building efficient, scalable, and user-centric web applications.
            With hands-on experience in Flask, MySQL, and front-end technologies, 
            I enjoy turning complex problems into simple, elegant solutions. 
            From dynamic web platforms to data-driven applications, 
            I strive to deliver clean code and impactful user experiences.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
            <button 
              className="btn btn-resume"
              onClick={() => window.open('/Resume-rajat.pdf', '_blank')}
            >
              📄 Download Resume
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={hackerHero} alt="Hacker Hero" className="hero-photo" />
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero 