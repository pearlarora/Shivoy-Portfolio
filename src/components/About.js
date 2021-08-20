import React from "react";
import "./css/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-section">
        <div className="about-me">
          <h3>ABOUT ME</h3>
          <h2>WHO AM I?</h2>
          <p>
            I am a 2nd-year student currently pursuing my BTech in Computer
            Science from The NorthCap University with the Full Stack
            Specialization.
          </p>
          <div class="cards education">
            <div class="card">
              <h4>The NorthCap University</h4>
              <p>Bachelor of Technology Computer Science</p>
              <p>
                <b>2019-2023</b>
              </p>
            </div>
            <div class="card">
              <h4>The Air Force School</h4>
              <p>12th, Non-Medical</p>
              <p>
                <b>2005-2019</b>
              </p>
            </div>
          </div>
        </div>
        <div className="my-pic">
            <img src="me.jpg" alt="My Picture" />
        </div>
      </div>
    </div>
  );
}

export default About;
