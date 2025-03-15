import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`} 
         style={{
           background: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
           backdropFilter: scrolled ? 'blur(10px)' : 'none',
           transition: 'all 0.3s ease'
         }}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">Venu Gopal Reddy</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">ABOUT ME</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">EDUCATION</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">SKILLS</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">PROJECTS</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
