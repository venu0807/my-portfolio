import React from "react";
import profileImage from "../f4126512-621a-11ef-8031-0242ac110011.jpeg";

function Home() {
  return (
    <div className="main-content">
      <section id="home" className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">              <h1 className="display-4 fw-bold mb-3">
                Venu Gopal Reddy Palugulla
              </h1>
              <h2 className="h3 text-light mb-4">Aspiring Full Stack Developer</h2>
              {/* <p className="lead text-light mb-4">                  Aspiring Full Stack Developer with a strong foundation in Python, Java, and web technologies.
                  Currently pursuing MCA with a specialization in AI & ML at Galgotias University.
                  Experienced in developing end-to-end web applications using Django and React.
                  Proficient in implementing RESTful APIs, database management, and user authentication systems.
                  Passionate about building scalable solutions and continuously learning new technologies.
              </p> */}
              <a href="#contact" className="btn btn-primary btn-lg">
                Contact Me
              </a>
            </div>            <div className="col-lg-6">
              <div className="image-container">
                <div className="image-wrapper">
                  <img
                    src={profileImage}
                    alt="Venu Gopal Reddy Palugulla"
                    className="profile-image"
                  />
                  <div className="image-border-effect"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="text-center mb-5">About Me</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content">              <p className="lead mb-4">
                  A Full Stack Developer with expertise in both front-end and back-end technologies. I have a proven
                  ability to build responsive, user-friendly, and high-performance web applications, consistently delivering
                  robust solutions. I'm committed to staying current with industry trends and best practices,
                  continuously enhancing my skills, and contributing to innovative software solutions.
                </p>                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-stats">
                <h3>Quick Facts</h3>                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-number">3</span>
                    <span className="stat-label">Programming Languages</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3</span>
                    <span className="stat-label">Frameworks Mastered</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Professional Certifications</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">85% +</span>
                    <span className="stat-label">Academic Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Education</h2>
          <div className="row g-4">
              <div className="col-md-6">
                <div className="education-card">                  <div className="education-year">2024 - 2026</div>
                  <h4>Master of Computer Applications (MCA)</h4>
                  <p className="institution">Galgotias University</p>                  <p className="education-details">
                    Major in Artificial Intelligence and Machine Learning
                    <br />
                    • Core focus: Machine Learning, Data Structures,  Algorithms and  Artificial Intelligence.
                    <br />
                    • Relevant coursework: Database Management, Web Development.
                  </p>
                  <div className="education-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="education-card">
                  <div className="education-year">2019 - 2022</div>
                  <h4>Bachelor of Computer Science (BSc)</h4>
                  <p className="institution">Chaudhary Charan Singh University</p>
                  <p className="education-details">
                    Graduated with 85% | Dean's List
                    <br />
                    Core focus on Python, Django, and Web Development.
                  </p>
                  <div className="education-icon">
                    <i className="fas fa-university"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="education-card">
                  <div className="education-year">2017 - 2019</div>
                  <h4>Intermediate</h4>
                  <p className="institution">Sri Sadhana Junior College</p>
                  <p className="education-details">
                    CGPA: 9.12 | PCM
                    <br />
                    Specialized in Mathematics and Science
                  </p>
                  <div className="education-icon">
                    <i className="fas fa-school"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="education-card">
                  <div className="education-year">2017</div>
                  <h4>SSC</h4>
                  <p className="institution">Sri Vivekananda Vidya Peetham</p>
                  <p className="education-details">
                    CGPA: 9.0 | Board of Secondary Education
                  </p>
                  <div className="education-icon">
                    <i className="fas fa-award"></i>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>      <section id="certificates" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Certifications</h2>
          <div className="row g-4">            
            <div className="col-md-6">
              <div className="certificate-card">
                <div className="certificate-icon">
                  <i className="fas fa-database"></i>
                </div>
                <div className="certificate-content">
                  <h3>Python with Django Certification</h3>
                  <p className="issuer">Besant Technologies</p>
                  <p className="issue-date">2023</p>
                  <div className="certificate-skills">
                    <span>Python</span>
                    <span>Django</span>
                    <span>Database Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="certificate-card">
                <div className="certificate-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <div className="certificate-content">
                  <h3>GenAI Powered Data Analytics</h3>
                  <p className="issuer">Tata Group - Forage</p>
                  <p className="issue-date">2025</p>
                  <div className="certificate-skills">
                    <span>Data Analytics</span>
                    <span>AI</span>
                    <span>Python</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="certificate-card">
                <div className="certificate-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <div className="certificate-content">
                  <h3>Introduction to Networks</h3>
                  <p className="issuer">Cisco</p>
                  <p className="issue-date">2025</p>
                  <div className="certificate-skills">
                    <span>Networking</span>
                    <span>Computer Networks</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="certificate-card">
                <div className="certificate-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="certificate-content">
                  <h3>Developer Job Simulation</h3>
                  <p className="issuer">Accenture - Forage</p>
                  <p className="issue-date">2023</p>
                  <div className="certificate-skills">
                    <span>HTML/CSS</span>
                    <span>JavaScript</span>
                    <span>Responsive Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Technical Skills</h2>
          <div className="row g-4">            <div className="col-md-4">
              <div className="skill-card">                <h3>Programming Languages</h3>
                <div className="skill-item">
                  <span>Python</span>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Java</span>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{width: '75%'}}></div>
                  </div>
                </div>
                 <div className="skill-item">
                  <span>C</span>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card">                <h3>Frameworks & Libraries</h3>
                <div className="skill-item">
                  <span>Django</span>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Django REST Framework</span>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>React</span>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{width: '82%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card">                <h3>Database & Tools</h3>
                <div className="skill-item">
                  <span>MySQL</span>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{width: '88%'}}></div>
                  </div>
                </div>
                {/* <div className="skill-item">
                  <span>Git & GitHub</span>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div> */}
                <div className="skill-item">
                  <span>RESTful APIs</span>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="project-card">                <h3>Movie Recommendation System</h3>
                <p>Full Stack Project | Duration: 2 months</p>
                <p>
                  • Architected and developed a comprehensive movie recommendation platform using
                  React.js for the frontend and Django/DRF for the backend, implementing RESTful APIs
                  for efficient data exchange
                </p>
                <p>
                  • Designed and implemented a robust MySQL database schema for managing movie data,
                  user preferences, and viewing history, optimizing query performance for large datasets
                </p>
                <p>
                  • Integrated JWT-based authentication system for secure user management and
                  personalized recommendations
                </p>
                <p>
                  • Implemented responsive UI design using Bootstrap and custom CSS, ensuring
                  seamless user experience across devices
                </p>
                <p>
                  • Utilized Git for version control and implemented CI/CD pipeline for automated
                  testing and deployment
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Django</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">REST API</span>
                  <span className="tech-tag">JWT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      <section id="posts" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Recent Activities</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="post-card">
                <div className="post-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <div className="post-content">
                  <h3>Earned New Certification</h3>
                  <p className="post-date">June 2025</p>
                  <p className="post-text">Successfully completed GenAI Powered Data Analytics from Tata group, enhancing my full-stack development capabilities.</p>
                  <div className="post-tags">
                    <span>#Django</span>
                    <span>#WebDevelopment</span>
                    <span>#Learning</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="post-card">
                <div className="post-icon">
                  <i className="fas fa-code-branch"></i>
                </div>
                <div className="post-content">
                  <h3>Project Milestone</h3>
                  <p className="post-date">January 2025</p>
                  <p className="post-text">Completed the Movie Recommendation System project using React and Django, implementing advanced features and robust architecture.</p>
                  <div className="post-tags">
                    <span>#React</span>
                    <span>#Django</span>
                    <span>#ProjectDevelopment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Contact</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row g-4">
                <div className="col-md-6">
                  <a href="mailto:pvgreddy3@gmail.com" className="contact-item">
                    <i className="fas fa-envelope"></i>
                    pvgreddy3@gmail.com
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="tel:+916309343563" className="contact-item">
                    <i className="fas fa-phone"></i>
                    +91 6309343563
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    href="https://www.linkedin.com/in/venu-gopal-reddy-palugulla-4948b8258"
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                    LinkedIn
                  </a>
                </div>
                <div className="col-md-6">
                  <a 
                    href="https://github.com/venu0807" 
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    href="https://leetcode.com/u/venu08/"
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-code" style={{
                      background: 'linear-gradient(to right, #ffa116, #ff6b6b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}></i>
                    LeetCode
                  </a>
                </div>
                <div className="col-md-6">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    Greater Noida, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
