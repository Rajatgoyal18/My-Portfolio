import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'rajatg1578@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container contact-layout reveal">
        <div className="contact-left">
          <p className="eyebrow">05 / Contact</p>
          <h2 className="contact-heading">Have a challenge worth solving?</h2>
          <p className="contact-copy">
            I am always open to discussing enterprise software engineering, full-stack systems, or data analytics opportunities. 
            Whether you have a specific role, a project in mind, or just want to connect — reach out!
          </p>

          <div className="email-actions">
            <a className="email-link" href={`mailto:${email}`}>
              {email} <span className="email-arrow">↗</span>
            </a>
            <button
              onClick={handleCopy}
              className="copy-btn magnetic-btn mono"
              aria-label="Copy email address to clipboard"
            >
              {copied ? '✓ Copied!' : 'Copy Address'}
            </button>
          </div>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/rajat-goyal-90013024a/"
            target="_blank"
            rel="noreferrer"
            className="contact-card spotlight-card"
          >
            <div className="contact-card-info">
              <span className="contact-num mono">01</span>
              <div>
                <strong>LinkedIn</strong>
                <small>Connect professionally</small>
              </div>
            </div>
            <b className="contact-arrow">↗</b>
          </a>

          <a
            href="https://github.com/Rajatgoyal18"
            target="_blank"
            rel="noreferrer"
            className="contact-card spotlight-card"
          >
            <div className="contact-card-info">
              <span className="contact-num mono">02</span>
              <div>
                <strong>GitHub</strong>
                <small>Explore open source repositories</small>
              </div>
            </div>
            <b className="contact-arrow">↗</b>
          </a>

          <a
            href="/Resume-rajat.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-card spotlight-card"
          >
            <div className="contact-card-info">
              <span className="contact-num mono">03</span>
              <div>
                <strong>Resume</strong>
                <small>Download latest PDF</small>
              </div>
            </div>
            <b className="contact-arrow">↗</b>
          </a>
        </div>
      </div>

      <footer className="container footer">
        <div className="footer-left">
          <span>Designed & built by <strong>Rajat Goyal</strong></span>
          <span className="footer-badge mono">Available for Opportunities</span>
        </div>
        <div className="footer-right mono">
          <span>Punjab, India · 2026</span>
        </div>
      </footer>
    </section>
  )
}
