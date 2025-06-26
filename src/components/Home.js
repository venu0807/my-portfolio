import React from "react";
import profileImage from "../dp2.png";
import fullStackImage from "../Full Stack Developer.jpg";


function Home() {
  return (
    <div className="main-content">
      <section id="home" className="section">
        <div className="container pb-5 pt-5 mt-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">
                Venu Gopal Reddy Palugulla
              </h1>
              <h3 className="h3 text-light mb-4" style={{color: 'var(--accent-primary)', fontWeight: 700}}>
                Full Stack Developer | Building Modern Web Solutions
              </h3>
              <p className="lead mb-4" style={{color: 'var(--text-secondary)', fontSize: '1.15rem'}}>
                Passionate about delivering robust, scalable, and user-centric applications. Experienced in React, Django, REST APIs, and MySQL. Open to new opportunities and collaborations.
              </p>
              <a href="https://drive.google.com/file/d/18p1ZEuC88UgJugLxGf2HHd631LT96ejp/view?usp=drive_link" className="btn btn-primary btn-lg me-3">
                View My Resume 
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg" style={{marginLeft: '1rem', border: '2px solid var(--accent-primary)', color: 'var(--accent-primary)'}}>
                Contact Me
              </a>
            </div>
            <div className="col-lg-6">
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
        <div className="container mt-5">
          <h2 className="text-center mb-5">About Me</h2>
          <div className="row">
            <div className="col-lg-7">
              <div className="about-content">
                <p
                  className="lead mb-4"
                  style={{ color: "var(--text-secondary)", fontSize: "1.15rem" }}
                >
                  <span
                    style={{
                      color: "var(--accent-primary)",
                      fontWeight: 600,
                    }}
                  >
                    Full Stack Developer
                  </span>{" "}
                  passionate about building impactful digital solutions. I specialize
                  in{" "}
                  <span
                    style={{
                      color: "var(--accent-secondary)",
                      fontWeight: 600,
                    }}
                  >
                    end-to-end web development
                  </span>
                  —from intuitive, accessible user interfaces to robust, scalable
                  backends.
                  <br />
                  <br />
                  My approach blends{" "}
                  <span
                    style={{
                      color: "var(--accent-tertiary)",
                      fontWeight: 600,
                    }}
                  >
                    creativity
                  </span>{" "}
                  and{" "}
                  <span
                    style={{
                      color: "var(--accent-primary)",
                      fontWeight: 600,
                    }}
                  >
                    technical expertise
                  </span>{" "}
                  to deliver products that are not only functional but also visually
                  engaging and user-centric. I thrive in collaborative environments,
                  value clean code, and am always eager to learn new technologies.
                  <br />
                  <br />
                  <span
                    style={{
                      color: "var(--accent-secondary)",
                      fontWeight: 600,
                    }}
                  >
                    Key strengths:
                  </span>{" "}
                  React, Django, REST APIs, MySQL, Python and Java best
                  practices. I believe in the power of technology to solve real-world
                  problems and am committed to continuous growth as a developer and team
                  player.
                </p>
                <ul style={{ marginTop: "1.5rem" }}>
                  <li>🔹 Strong foundation in both frontend and backend technologies</li>
                  <li>🔹 Focus on performance, security, and accessibility</li>
                  <li>🔹 Experience with agile teams and real-world project delivery</li>
                  <li>🔹 Passionate about lifelong learning and innovation</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-stats">
                <h3>Quick Facts</h3>{" "}
                <div className="stats-grid">
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
                    <span className="stat-label">
                      Professional Certifications
                    </span>
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
      <section id="certificates" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Certifications</h2>
          <div className="row g-4">
            <div className="col-md-6 mb-4">
              <div className="certificate-card">
                <div className="certificate-icon">
                  <i className="fas fa-database"></i>
                </div>
                <div className="certificate-content">
                  <a
                    href={fullStackImage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>Full Stack with Python </h3>
                  </a>

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
            <div className="col-md-6 mb-4">
              <div className="certificate-card">
                <div className="certificate-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="certificate-content">
                  <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordics_bEMfQ4JoPgRbftu4E_1701404007263_completion_certificate.pdf">
                    <h3>Developer Job Simulation</h3>
                  </a>

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
            <div className="col-md-6">
              <div className="certificate-card">
                <div className="certificate-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <div className="certificate-content">
                  <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_bEMfQ4JoPgRbftu4E_1749997845404_completion_certificate.pdf">
                    <h3>GenAI Powered Data Analytics</h3>
                  </a>
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
                  <a href="https://www.credly.com/badges/2f3e9d67-a796-496b-a0b3-57025f9d80ea/linked_in_profile">
                    <h3>Introduction to Networks</h3>
                  </a>

                  <p className="issuer">Cisco</p>
                  <p className="issue-date">2025</p>
                  <div className="certificate-skills">
                    <span>Networking</span>
                    <span>Computer Networks</span>
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
              <div className="project-card">
                <a href="https://venu0807.github.io/Recommendation_System/">
                 <h3>Movie Recommendation System</h3>
                </a>
              </div>
            </div>
            {/* New Project Card */}
            <div className="col-md-6">
              <div className="project-card">
                <a href="https://venu0807.github.io/Portfolio_React/">
                  <h3>Personal Portfolio (This Site)</h3>
                </a>
                <p>React Portfolio</p>
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
                  <a
                    href="mailto:pvgreddy3@gmail.com"
                    className="contact-item"
                  >
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
                    <i
                      className="fas fa-code"
                      style={{
                        background:
                          "linear-gradient(to right, #ffa116, #ff6b6b)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    ></i>
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
              {/* Contact Form */}
              <div className="card mt-5" style={{background: 'rgba(30,41,59,0.98)', border: '1px solid var(--accent-info)', boxShadow: '0 8px 32px 0 rgba(31,38,135,0.15)'}}>
                <h3 className="mb-4" style={{color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '0.03em'}}>Contact Form</h3>
                <form action="mailto:pvgreddy3@gmail.com" method="POST" encType="text/plain" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
                  <div className="mb-3">
                    <label htmlFor="contactName" className="form-label" style={{color: 'var(--accent-secondary)', fontWeight: 600}}>Full Name</label>
                    <input type="text" className="form-control" id="contactName" name="name" required placeholder="Enter your full name" style={{background: '#1e293b', color: 'var(--text-primary)', border: '1px solid var(--accent-info)', fontSize: '1.05rem'}} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactEmail" className="form-label" style={{color: 'var(--accent-secondary)', fontWeight: 600}}>Email Address</label>
                    <input type="email" className="form-control" id="contactEmail" name="email" required placeholder="your@email.com" style={{background: '#1e293b', color: 'var(--text-primary)', border: '1px solid var(--accent-info)', fontSize: '1.05rem'}} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactSubject" className="form-label" style={{color: 'var(--accent-secondary)', fontWeight: 600}}>Subject</label>
                    <input type="text" className="form-control" id="contactSubject" name="subject" required placeholder="Subject of your message" style={{background: '#1e293b', color: 'var(--text-primary)', border: '1px solid var(--accent-info)', fontSize: '1.05rem'}} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactMessage" className="form-label" style={{color: 'var(--accent-secondary)', fontWeight: 600}}>Message</label>
                    <textarea className="form-control" id="contactMessage" name="description" rows="5" required placeholder="Please enter your message here..." style={{background: '#1e293b', color: 'var(--text-primary)', border: '1px solid var(--accent-info)', fontSize: '1.05rem'}}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactPhone" className="form-label" style={{color: 'var(--accent-secondary)', fontWeight: 600}}>Phone Number (optional)</label>
                    <input type="tel" className="form-control" id="contactPhone" name="phone" placeholder="e.g. +91 9876543210" style={{background: '#1e293b', color: 'var(--text-primary)', border: '1px solid var(--accent-info)', fontSize: '1.05rem'}} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.03em'}}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="section" style={{background: 'rgba(15,23,42,0.95)', color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem 0 1rem 0', marginTop: '2rem', borderTop: '1.5px solid var(--accent-info)'}}>
        <div style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
          &copy; {new Date().getFullYear()} Venu Gopal Reddy Palugulla. All rights reserved.
        </div>
        <div style={{fontSize: '1.2rem'}}>
          <a href="https://www.linkedin.com/in/venu-gopal-reddy-palugulla-4948b8258" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-info)', margin: '0 1rem'}}><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/venu0807" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-info)', margin: '0 1rem'}}><i className="fab fa-github"></i></a>
          <a href="mailto:pvgreddy3@gmail.com" style={{color: 'var(--accent-info)', margin: '0 1rem'}}><i className="fas fa-envelope"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
