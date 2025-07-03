import React from "react";
import profileImage from "../dp2.png";
import "../App.css";

function Home() {
  return (
    <div id="about" className="cosmic-bg">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        <div className="hero-flex-container">
          <div className="hero-content">
            <button className="hero-name-btn">
              Venu Gopal Reddy Palugulla
            </button>
            <h1 className="hero-title">
              Empowering <span className="gradient-text">Web</span>
              <br />
              <span className="gradient-text">Through</span> Modern
              <br />
              Tech !!
            </h1>
            <p className="hero-desc">
              Python Full Stack Developer with hands-on experience in developing
              robust applications using Python (Django, DRF) and React.js.
              Skilled in integrating machine learning models into web systems
              and building scalable backend services. Strong foundation in data
              structures, RESTful APIs and database design.
            </p>
            <a
              href="https://drive.google.com/file/d/1dsp9Aoia-DytwBR29woAuiDo2zpGcNCH/view?usp=drive_link"
              className="hero-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Resume
            </a>
          </div>
          <div className="hero-image-wrapper">
            <img
              src={profileImage}
              alt="Venu Gopal Reddy Palugulla"
              className="profile-image"
            />
            <div className="image-border-effect"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title gradient-text">
          Making Applications with Modern Technologies !!
        </h2>
        <div className="skills-icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="Java"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="Django"
          />
        </div>
        <div className="skills-icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
            alt="Django"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-plain.svg"
            alt="Django REST Framework"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="SQL / PostgreSQL"
          />
        </div>
        <div className="skills-icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
            alt="Postman"
          />
        </div>
        <div className="skills-icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
            alt="NumPy"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
            alt="Pandas"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"
            alt="Matplotlib"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"
            alt="Scikit-learn"
          />
        </div>
        <div className="skills-icons"></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title gradient-text">My Projects</h2>
        <div className="projects-grid">
          <div
            className="project-card custom-project-card"
            style={{ width: "420px", minWidth: "320px", maxWidth: "100%" }}
          >
            <div
              className="project-image-half"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1615986201152-7686a4867f30?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            ></div>
            <br />
            <div className="project-text-half">
              <h3 className="text-light">Movie Recommendation System</h3>
              <p>
                Built a recommendation system using Python and machine learning
                to suggest movies based on user preferences.
              </p>
            </div>
          </div>
          <div
            className="project-card custom-project-card"
            style={{ width: "420px", minWidth: "320px", maxWidth: "100%" }}
          >
            <div
              className="project-image-half"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1670315264879-59cc6b15db5f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            ></div>
            <br />
            <div className="project-text-half">
              <h3 className="text-light mb-4 pb-3">
                Personal Portfolio (This Site)
              </h3>
              <p>
                React-based portfolio to showcase my skills, projects, and
                contact information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div>© Venu Gopal Reddy Palugulla | All rights reserved</div>
      </footer>
    </div>
  );
}

export default Home;
