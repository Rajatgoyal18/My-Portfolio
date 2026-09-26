import './Experience.css'

const roles = [
  {
    time: 'Jul 2026 - Present',
    status: 'Current Role',
    role: 'Graduate Trainee Engineer',
    company: 'Cubastion Consulting',
    detail:
      'Engineered enterprise workflows and managed production maintenance for Oracle Siebel CRM in a high-availability client environment. Spearheaded root-cause analysis for live incidents, resolved 80+ production tickets, validated integration touchpoints, and supported mission-critical deployments.',
    metrics: [
      '80+ Production Tickets',
      '10+ Change Requests',
      'Oracle Siebel CRM',
      'Integration Log Diagnostics',
      'JIRA & ServiceNow',
      'Enterprise Deployment',
    ],
  },
  {
    time: 'Jan 2026 - Jun 2026',
    status: 'Internship',
    role: 'Technical Intern',
    company: 'Cubastion Consulting',
    detail:
      'Fast-tracked directly to client production support following high-score technical training. Mastered enterprise CRM architecture, relational schema mapping, API integration logs, and corporate release cycles.',
    metrics: [
      'CRM Architecture',
      'API & Log Analysis',
      'Enterprise Support Workflows',
      'Client Integration Testing',
    ],
  },
  {
    time: 'May 2024 - Jul 2024',
    status: 'Training',
    role: 'Full-Stack Web Development Trainee',
    company: 'Grazitti Interactive',
    detail:
      'Engineered backend business logic, database relationships, and front-end user flows for a scalable grocery-store application during intensive software training.',
    metrics: [
      'Python & Flask',
      'MySQL & MongoDB',
      'REST APIs',
      'User Authentication',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="experience-header reveal">
          <p className="eyebrow">02 / Experience</p>
          <h2 className="section-heading">
            Battle-tested in real-world, high-stakes production systems.
          </h2>
          <p className="section-intro">
            From enterprise CRM maintenance and client integrations to full-stack engineering and agile deployment.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" aria-hidden="true" />
          
          <div className="timeline-items">
            {roles.map((item, index) => (
              <article
                className={`role-card reveal delay-${index + 1}`}
                key={item.role + item.company}
              >
                <div className="role-node" aria-hidden="true">
                  <span className={`node-dot ${index === 0 ? 'is-active' : ''}`} />
                </div>

                <div className="role-card-inner spotlight-card">
                  <div className="role-top">
                    <span className="role-time mono">{item.time}</span>
                    <span className={`role-badge ${index === 0 ? 'badge-active' : ''}`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="role-title">{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="role-detail">{item.detail}</p>

                  <div className="role-metrics">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="metric-chip">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
