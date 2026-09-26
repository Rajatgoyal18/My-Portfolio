import './Skills.css'

const groups = [
  {
    index: '01',
    icon: '💻',
    title: 'Software Engineering',
    desc: 'Full-stack application development, clean architectural patterns, and scalable backend APIs.',
    list: [
      'Python',
      'C++',
      'JavaScript (ES6+)',
      'React.js',
      'Vue.js 3',
      'Flask',
      'REST APIs',
      'JWT Auth',
      'HTML5 / CSS3',
    ],
  },
  {
    index: '02',
    icon: '📈',
    title: 'Data & Analytics',
    desc: 'Quantitative modeling, automated ETL extraction, and insight storytelling.',
    list: [
      'SQL',
      'Pandas & NumPy',
      'Power BI',
      'Jupyter Notebooks',
      'Scikit-learn',
      'Data Scraping',
      'Data Modelling',
      'Exploratory Analysis',
    ],
  },
  {
    index: '03',
    icon: '🛠️',
    title: 'Enterprise & Systems',
    desc: 'Mission-critical enterprise tools, distributed task runners, and database architectures.',
    list: [
      'Oracle Siebel CRM',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Redis Cache',
      'Celery Workers',
      'JIRA & ServiceNow',
      'Git & GitHub',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="skills-header reveal">
          <p className="eyebrow">03 / Toolkit</p>
          <h2 className="section-heading">
            Technologies tailored to solve real problems.
          </h2>
          <p className="section-intro">
            A comprehensive toolset spanning enterprise systems, modern web engineering, and rigorous data analytics.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map((group, index) => (
            <article
              className={`skill-group spotlight-card reveal delay-${index + 1}`}
              key={group.title}
            >
              <div className="skill-card-top">
                <span className="skill-icon" aria-hidden="true">
                  {group.icon}
                </span>
                <span className="skill-index mono">{group.index}</span>
              </div>

              <h3 className="skill-group-title">{group.title}</h3>
              <p className="skill-group-desc">{group.desc}</p>

              <div className="skill-chips">
                {group.list.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
