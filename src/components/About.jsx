import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate <span className="highlight">Python and web developer</span> with a strong focus on creating impactful, scalable,
              and user-friendly applications. My core strengths lie in backend development using <span className="highlight">Flask and MySQL</span>,
              along with frontend technologies like <span className="highlight">HTML, CSS, and JavaScript</span>. I take pride in writing clean, 
              efficient code and building web solutions that solve real-world problems.
            </p>
            <p>
              Currently, I'm pursuing a dual-degree program — <span className="highlight">B.Tech</span> in <span className="highlight">Computer Science Engineering</span> from 
              <span className="highlight">Chandigarh Engineering College</span> and a <span className="highlight">B.S.</span> in <span className="highlight">Data Science and Applications</span> from <span className="highlight">IIT Madras</span>. 
              This blend of engineering and data science has helped me build a strong foundation in both <span className="highlight">software 
              development and analytical problem-solving</span>. I constantly explore the intersection of technology and 
              data, applying both skill sets in my projects.
            </p>
            <p>
              Over the past year, I’ve worked on several full-stack projects, including a <span className="highlight">Grocery Store Application 
              and a Quiz Master platform</span>. These projects demonstrate my ability to build complete solutions — 
              <span className="highlight">from designing databases and implementing business logic to creating responsive user interfaces.</span> 
              Additionally, I made a <span className="highlight">Data Analytics project</span> on the <span className="highlight">T20 World Cup</span>, showcasing my capability in 
              <span className="highlight">data scraping, transformation, and dashboarding using Power BI</span>.
            </p>
            <p>
            Beyond technical skills, I’ve taken on leadership roles such as <span className="highlight">Class Representative and Event Director</span>,
            contributing to various technical and cultural events on campus. I believe in <span className="highlight">continuous learning, teamwork,
            and taking initiative </span>— whether it's through contributing to hackathons, mentoring peers, or managing 
            responsibilities as part of the core team in national-level programs.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>Fresher</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>1089 rating</h3>
              <p>Competitive Programming</p>
            </div>
            <div className="stat-item resume-download">
              <button 
                className="btn btn-resume-small"
                onClick={() => window.open('/Resume-rajat.pdf', '_blank')}
              >
                📄 Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 