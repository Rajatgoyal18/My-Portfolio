import './About.css'

export default function About() {
  const highlights = [
    {
      icon: '⚙️',
      title: 'Enterprise CRM & Systems',
      subtitle: 'Cubastion Consulting',
      desc: 'Active production support on Oracle Siebel CRM, analyzing complex integrations, resolving 80+ production tickets, and orchestrating reliable deployments in live client environments.',
    },
    {
      icon: '🎓',
      title: 'Engineering & Data Science',
      subtitle: 'B.Tech (Completed) + IIT Madras',
      desc: 'Completed B.Tech in Computer Science Engineering this July from Chandigarh Engineering College, while continuing B.S. in Data Science & Applications from IIT Madras.',
    },
    {
      icon: '📊',
      title: 'Full-Stack & Analytics',
      subtitle: 'Modern Web + Data Pipelines',
      desc: 'Building responsive full-stack applications with React, Vue, Flask, and Redis, alongside data modeling, automated ETL/scraping, and interactive Power BI dashboards.',
    },
  ]

  const tags = [
    'Oracle Siebel CRM',
    'Production Incident Resolution',
    'Enterprise Integrations',
    'Full-Stack Web Dev',
    'IIT Madras Data Science',
    'B.Tech CSE Graduate',
    'Competitive Programming',
    'Data Analytics & BI',
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-intro reveal">
            <p className="eyebrow">01 / About Me</p>
            <h2 className="section-heading">
              Enterprise software engineer with an analytical problem-solving mindset.
            </h2>
            <p className="section-intro">
              Specialized in managing critical enterprise CRM workflows, debugging live production systems, and engineering software that performs reliably at scale.
            </p>
          </div>

          <div className="about-story reveal delay-1">
            {/* Job experience highlighted FIRST */}
            <div className="story-block work-focus spotlight-card glow-shimmer">
              <span className="story-badge">Current Role & Impact</span>
              <h3>Graduate Trainee Engineer at Cubastion Consulting</h3>
              <p>
                My professional work is centered on enterprise engineering with <strong>Oracle Siebel CRM</strong> in an active live-client environment. 
                I analyze complex enterprise workflows, troubleshoot integration touchpoints, and resolve mission-critical production incidents. 
                Having delivered solutions for <strong>over 80 production tickets and change requests</strong>, I focus on system stability, prompt incident remediation, and reliable production releases.
              </p>
            </div>

            {/* Education and qualifications detailed AFTER job experience */}
            <div className="story-block education-focus spotlight-card">
              <span className="story-badge education">Education & Foundations</span>
              <h3>Dual Academic Rigor: CSE & Data Science</h3>
              <p>
                I graduated with my <strong>B.Tech in Computer Science Engineering</strong> in <strong>July 2026</strong> from Chandigarh Engineering College. 
                To broaden my quantitative and analytical capabilities, I am concurrently pursuing a <strong>B.S. in Data Science and Applications from IIT Madras</strong>. 
                This combination bridges robust computer science fundamentals with modern data modeling, machine learning, and evidence-backed decision engineering.
              </p>
            </div>

            <div className="about-tags">
              {tags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="about-pillars reveal delay-2">
          {highlights.map((pillar) => (
            <div key={pillar.title} className="pillar-card spotlight-card">
              <div className="pillar-icon" aria-hidden="true">
                {pillar.icon}
              </div>
              <div className="pillar-header">
                <span className="pillar-subtitle mono">{pillar.subtitle}</span>
                <h4>{pillar.title}</h4>
              </div>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
