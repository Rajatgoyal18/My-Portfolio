import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import './CustomCursor.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Disable completely on touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return
    }

    const onPointerMove = (e) => {
      // 1:1 Instant hardware tracking - both dot and ring are in cursorRef so they NEVER split
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
      
      setIsVisible(true)

      // Check if hovering clickable / interactive target
      const target = e.target
      const isInteractive = Boolean(
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.project-card') ||
          target.closest('.skill-group') ||
          target.closest('.pillar-card') ||
          target.closest('.story-block') ||
          target.closest('.extra-card') ||
          target.closest('.contact-card') ||
          target.closest('.role-card-inner') ||
          target.closest('.signal-card'))
      )
      setIsHovered(isInteractive)
    }

    const onMouseDown = () => setIsClicked(true)
    const onMouseUp = () => setIsClicked(false)
    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [])

  if (!isMounted) return null

  // Portal directly to document.body: guaranteed top layer, zero container interference
  return createPortal(
    <div
      ref={cursorRef}
      className={`unified-cursor ${isVisible ? 'is-visible' : ''} ${
        isHovered ? 'is-hovered' : ''
      } ${isClicked ? 'is-clicked' : ''}`}
      aria-hidden="true"
    >
      {/* Concentric expanding outer halo */}
      <div className="cursor-halo" />
      {/* Center precision luminous dot */}
      <div className="cursor-center-dot" />
    </div>,
    document.body
  )
}
