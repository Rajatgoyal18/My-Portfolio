import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Vite. Features smooth animations, dark theme, and interactive components showcasing my skills and projects.',
      image: '🎨',
      category: 'frontend',
      technologies: ['React', 'CSS3', 'JavaScript', 'Vite'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Grocery Store Application',
      description: 'Developed a grocery store application to store product details and generate bills, streamlining sales and purchases. Implemented core business logic using Python with Flask for a responsive web interface.',
      image: '🛒',
      category: 'Fullstack',
      technologies: ['Python', 'MySQL', 'Jinja2', 'Flask'],
      liveLink: '#',
      githubLink: 'https://github.com/Rajatgoyal18/Grocery-Store-App'
    },
    {
      id: 3,
      title: 'Quiz Master Application',
      description: 'Developed Quiz Master, a web-based quiz application enabling students to attempt quizzes managed by an admin. Built using Flask (Python) with SQLite, featuring authentication, quiz management, and performance analytics.',
      image: '📋',
      category: 'Development',
      technologies: ['Python', 'HTML/CSS', 'Jinja2', 'Flask'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'T20 World Cup Data Analytics',
      description: 'Analyzed T20 World Cup 2024 data to build a Dream11 team. Scraped and cleaned data using Bright Data, Pandas, and Jupyter Notebook, visualized with Power BI.',
      image: '📊',
      category: 'Data Analytics',
      technologies: ['Pandas', 'Numpy', 'Jupyter Notebook', 'Power BI'],
      liveLink: '#',
      githubLink: 'https://github.com/Rajatgoyal18/T20-World-Cup-Cricket-Data-Analytics-'
    },
    {
      id: 5,
      title: 'Vehicle Parking Application',
      description: 'It is a multi-user app (one requires an administrator and other users) that manages different parking lots, parking spots and parked vehicles.',
      image: '🚗',
      category: 'Development',
      technologies: ['Python', 'HTML/CSS', 'Jinja2', 'Flask'],
      liveLink: '#',
      githubLink: '#'
    },
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 