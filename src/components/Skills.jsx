import React from 'react'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'HTML/CSS', level: 80, icon: '🌐' },
    { name: 'SQL', level: 90, icon: '🗄️' },
    { name: 'C/C++', level: 80, icon: '💻' },
    { name: 'React', level: 50, icon: '⚛️' },
    { name: 'Node.js', level: 60, icon: '🟢' },
    { name: 'Git', level: 80, icon: '📝' },
    { name: 'REST APIs', level: 85, icon: '📘' },
    { name: 'Linux', level: 60, icon: '💻' },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills-categories">
            <div className="category">
              <h3>Frontend</h3>
              <div className="category-skills">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
            
            <div className="category">
              <h3>Backend</h3>
              <div className="category-skills">
                <span>Node.js</span>
                <span>Vue.js</span>
                <span>Python(Flask)</span>
                <span>Jinja 2</span>
                <span>REST APIs</span>
              </div>
            </div>
            
            <div className="category">
              <h3>Programming Languages</h3>
              <div className="category-skills">
                <span>Python</span>
                <span>C/C++</span>
                <span>Java(Basic)</span>
              </div>
            </div>

            <div className="category">
              <h3>Database Management</h3>
              <div className="category-skills">
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>SQLite</span>
                <span>MongoDB</span>
              </div>
            </div>

            <div className="category">
              <h3>Tools & Others</h3>
              <div className="category-skills">
                <span>Git</span>
                <span>VS Code</span>
                <span>Power BI</span>
                <span>Windows</span>
                <span>Linux</span>
              </div>
            </div>

            <div className="category">
              <h3>Interpersonal Skills</h3>
              <div className="category-skills">
                <span>Team Leadership</span>
                <span>Management and Coordination</span>
                <span>Time management</span>
                <span>Decision Making</span>
                <span>Speaking and Writing</span>
                <span>Competitive Spirit</span>
                <span>Anchoring Skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 