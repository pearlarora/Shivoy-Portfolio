import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className="nav-bar">
      <div className={`nav ${show && "nav-background"}`}>
        <h1>
          <a href="">My Portfolio</a>
        </h1>
        <div className="nav-contents">
          <a href="index.html" className="nav-items">
            Home
          </a>
          <a href="about.html" className="nav-items">
            About
          </a>
          <a href="services.html" className="nav-items">
            Services
          </a>
          <a href="skills.html" className="nav-items">
            Skills
          </a>
          <a href="work.html" className="nav-items">
            Experience
          </a>
          <a href="projects.html" className="nav-items">
            Projects
          </a>
          <a href="contact.html" className="nav-items">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
