import React from "react";
import profileImage from "../f4126512-621a-11ef-8031-0242ac110011.jpeg";

function Home() {
  return (
    <div className="main-content">
      <section id="home" className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">
                Venu Gopal Reddy Palugulla
              </h1>
              <h2 className="h3 text-light mb-4">Python Developer</h2>
              <p className="lead text-light mb-4">
                A motivated Python Developer with strong programming
                fundamentals and focus on creating efficient solutions
              </p>
              <a href="#contact" className="btn btn-primary btn-lg">
                Contact Me
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src={profileImage}
                alt="Venu Gopal Reddy Palugulla"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Education</h2>
          <div className="row g-4">
            <div className="col-md-6"></div>

            <div className="col-md-6">
              <div className="col-md-12 m-4">
                <div className="education-card">
                  <h4>Master of Computer Applications (MCA)</h4>
                  <p>Galgotias University</p>
                  <p>2024 - 2026</p>
                  {/* <p>CGPA: 8.61</p> */}
                </div>
              </div>
              <div className="col-md-12 m-4">
                <div className="education-card">
                  <h4>Bachelor of Computer Science (BSc)</h4>
                  <p>Chaudhary Charan Singh University</p>
                  <p>2019 - 2022  ||  Percentage of 85</p>
                  <p></p>
                </div>
              </div>
              <div className="col-md-12 m-4">
                <div className="education-card">
                  <h4>Intermediate</h4>
                  <p>Sri Sadhana Junior College</p>
                  <p>2017 - 2019   ||   CGPA: 9.12</p>
                </div>
              </div>
              <div className="col-md-12 m-4">
                <div className="education-card">
                  <h4>SSC</h4>
                  <p>Sri Vivekananda Vidya Peetham</p>
                  <p>Completed in 2017  ||  CGPA: 9.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Technical Skills</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="skill-card">
                <h3>Programming Languages</h3>
                <ul>
                  <li>Python</li>
                  <li>C</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-card">
                <h3>Frameworks & Tools</h3>
                <ul>
                  <li>Django</li>
                  <li>Django REST Framework</li>
                  <li>React.js</li>
                  <li>MySQL</li>
                  <li>Web Development</li>
                </ul>
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
                <h3>Movie Recommendation System</h3>
                <p>Built using Django, DRF, React and MySQL </p>
                <p>
                  • Developed a Full-Fledged Movie Recommendation Website using
                  React, Django Framework, Python, and DRF(API) for Efficient
                  Data Exchange.
                </p>
                <p>
                  • Implemented MySQL Database Management System for Tracking
                  and Storing Moviesdata, Ensuring Scalability and Reliability.
                </p>
                <p>
                  • Successfully Implemented User Authentication, Allowing Users
                  to Create Accounts and Receive Personalized Movie
                  Recommendations
                </p>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="project-card">
                <h3>Task Manager</h3>
                <p>Built using Django, React, MySQL</p>
                <p>
                  • Created a task management application with CRUD operations
                </p>
                <p>
                  • Implemented user authentication and task prioritization
                  features
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="text-center mb-5">Contact</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <a href="mailto:pvgreddy3@gmail.com" className="contact-item">
                <i className="fas fa-envelope"></i>
                pvgreddy3@gmail.com
              </a>
              <a href="tel:+916309343563" className="contact-item">
                <i className="fas fa-phone"></i>
                +91 6309343563
              </a>
              <a
                href="https://www.linkedin.com/in/venu-gopal-reddy-palugulla-4948b8258"
                className="contact-item"
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a href="https://github.com/venu0807" className="contact-item">
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a href="https://www.hackerrank.com/profile/pvgreddy3" className="contact-item">
                <i className="fab fa-hackerrank"></i>
                HackerRank
              </a>
            </div>
            {/* <div className="col-md-3">
              <a href="tel:+916309343563" className="contact-item">
                <i className="fas fa-phone"></i>
                +91 6309343563
              </a>
            </div>
            <div className="col-md-2">
              <a
                href="https://www.linkedin.com/in/venu-gopal-reddy-palugulla-4948b8258"
                className="contact-item"
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
            </div>
            <div className="col-md-2">
              <a href="https://github.com/venu0807" className="contact-item">
                <i className="fab fa-github"></i>
                GitHub
              </a>
            </div>
            <div className="col-md-3">
              <a href="https://www.hackerrank.com/profile/pvgreddy3" className="contact-item">
                <i className="fab fa-hackerrank"></i>
                HackerRank
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
