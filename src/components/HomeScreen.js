import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import "./css/HomeScreen.css";

function HomeScreen() {
  return (
    <div className="home-page">
      <div className="background-overlay"></div>
      <video className="background-video" autoPlay loop muted>
        <source src="backgroundVideo.mp4" type="video/mp4" />
      </video>
      <div className="page-contents">
        <Nav />
        <Home />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default HomeScreen;
