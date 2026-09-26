import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    kind: 'Full stack',
    title: 'Placement Portal',
    accent: 'mint',
    stack: 'Vue 3 / Flask / JWT / Celery / Redis',
    description:
      'A multi-role enterprise placement operating system for educational institutes, candidates, and recruiters. Streamlines drive creation, eligibility filtering, applicant screening, automated interview scheduling, and offer letters.',
    outcomes: [
      '3 role-specific dashboards (Admin, Student, Recruiter)',
      'Background Celery workers for automated email & CSV export',
      'Normalized PostgreSQL / SQLite database workflows',
    ],
    link: 'https://github.com/Rajatgoyal18/Placement-Portal',
  },
  {
    kind: 'Full stack',
    title: 'Park Inn 2.0',
    accent: 'aqua',
    stack: 'Vue.js / Flask / Redis / Celery / SQLite / MySQL',
    description:
      'A smart vehicle-parking platform converting live lot telemetry into a frictionless booking flow. Features real-time spot reservations, admin allocation tools, role-based access control, and payment lifecycle tracking.',
    outcomes: [
      'Live lot and multi-floor slot telemetry',
      'Asynchronous reservation confirmation via Redis & Celery',
      'Full administrative oversight & billing audit logs',
    ],
    link: 'https://github.com/Rajatgoyal18/Park-Inn-2.0',
  },
  {
    kind: 'Data analytics',
    title: 'T20 World Cup Analytics',
    accent: 'orange',
    stack: 'Python / Pandas / Matplotlib / Seaborn / Power BI',
    description:
      'An end-to-end data analytics pipeline studying the 2024 ICC T20 World Cup. Leverages ball-by-ball and match records to uncover strategic pitch dynamics, dismissal clusters, phase scoring, and individual player impact.',
    outcomes: [
      'Ball-by-ball automated data cleaning & transformation',
      'Interactive Power BI visual dashboards for team analysis',
      'Statistically grounded match outcome indicators',
    ],
    link: 'https://github.com/Rajatgoyal18/T20-World-Cup-Cricket-Data-Analytics-',
  },
  {
    kind: 'Machine learning',
    title: 'Placement Prediction Engine',
    accent: 'violet',
    stack: 'Python / Pandas / Scikit-learn / Matplotlib / Seaborn',
    description:
      'A predictive machine learning framework evaluating candidate placement readiness from academic records and coding metrics. Features extensive exploratory data analysis, feature scaling, model benchmarking, and hyperparameter tuning.',
    outcomes: [
      'Comprehensive EDA & correlation feature engineering',
      'Ensemble model comparison across Decision Trees & Random Forests',
      '98% validated classification accuracy on test sets',
    ],
    link: 'https://github.com/Rajatgoyal18/Placement-Prediction',
  },
  {
    kind: 'Full stack',
    title: 'Park Inn (Core)',
    accent: 'mint',
    stack: 'Python / Flask / SQLAlchemy / SQLite',
    description:
      'The foundational parking reservation system built with Python and Flask. Handles secure authentication, vehicle check-in/out calculations, parking slot states, and automatic billing.',
    outcomes: [
      'Secure password hashing and session management',
      'Automated time-tracking and fee estimation engine',
      'Clean relational schema with SQLAlchemy ORM',
    ],
    link: 'https://github.com/Rajatgoyal18/Park-Inn',
  },
]

const extras = [
  {
    name: 'Mini Projects',
    detail: 'Front-end interactive simulators & JavaScript tools',
    link: 'https://github.com/Rajatgoyal18/Mini-Projects',
  },
  {
    name: 'This Portfolio Site',
    detail: 'Modern React + Vite, light/dark engine & animations',
    link: 'https://github.com/Rajatgoyal18/My-Portfolio',
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [filterKey, setFilterKey] = useState(0)
  const categories = ['All', 'Full stack', 'Data analytics', 'Machine learning']

  const visible =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.kind === filter)

  const handleFilter = (item) => {
    setFilter(item)
    setFilterKey((k) => k + 1)
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="project-header reveal">
          <div>
            <p className="eyebrow">04 / Selected Projects</p>
            <h2 className="section-heading">
              Engineered to perform in production, not just to live in a repository.
            </h2>
            <p className="section-intro">
              Demonstrating architectural discipline across full-stack applications, data engineering pipelines, and ML modeling.
            </p>
          </div>

          <div className="filters" role="tablist" aria-label="Filter projects by category">
            {categories.map((item) => (
              <button
                key={item}
                role="tab"
                aria-selected={filter === item}
                className={`filter-btn ${filter === item ? 'selected' : ''}`}
                onClick={() => handleFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="project-list" key={filterKey}>
          {visible.map((project, index) => (
            <article
              className={`project-card ${project.accent} spotlight-card card-item`}
              key={project.title}
              style={{ animationDelay: `${index * 65}ms` }}
            >
              <div className="project-num-col mono">
                0{index + 1}

              </div>

              <div className="project-info-col">
                <div className="project-kind-badge mono">
                  {project.kind}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack mono">{project.stack}</div>
              </div>

              <div className="project-outcomes-col">
                <span className="outcomes-label mono">Key Deliverables</span>
                <ul>
                  {project.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div className="project-action-col">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn magnetic-btn"
                  aria-label={`View ${project.title} repository on GitHub`}
                  title="View on GitHub"
                >
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="more-projects reveal delay-2">
          <div className="more-header">
            <p className="eyebrow">Explore More</p>
            <h3>Additional Code & Open Source</h3>
          </div>
          <div className="extras-grid">
            {extras.map((project) => (
              <a
                href={project.link}
                key={project.name}
                target="_blank"
                rel="noreferrer"
                className="extra-card spotlight-card"
              >
                <div className="extra-text">
                  <strong>{project.name}</strong>
                  <small>{project.detail}</small>
                </div>
                <span className="extra-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
