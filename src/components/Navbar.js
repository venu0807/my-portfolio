import React from "react";
import "../App.css";

function Navbar() {
  return (
    <nav className="custom-navbar">
      <div className="navbar-logo">Full Stack Developer</div>
      <ul className="navbar-links">
        <li><a href="#about">About me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <div className="navbar-social">
        <a href="https://github.com/venu0807" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon-social" style={{background: '#fff', padding: '4px', borderRadius: '6px'}} /></a>
        <a href="https://www.linkedin.com/in/venu-gopal-reddy-palugulla-4948b8258" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="icon-social" /></a>
        <a href="https://leetcode.com/u/venu08/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg" alt="LeetCode" className="icon-social" style={{background: '#fff', padding: '4px'}} /></a>
        <a href="mailto:pvgreddy3@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluency/48/gmail-new.png" alt="Gmail" className="icon-social" /></a>
      </div>
    </nav>
  );
}

export default Navbar;
