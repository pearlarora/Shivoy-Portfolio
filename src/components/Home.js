import React from "react";
import "./css/Home.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="portfolio-intro">
        <div className="intro-content">
          <h3>Hello, Welcome to My Portfolio</h3>
          <h1>I'M SHIVOY ARORA</h1>
          <p>
            I aspire to use my technological and leadership skills in an admired
            company. Tech-savvy, competent, dedicated, detail-oriented creative
            individual and a fast learner with inherent communication expertise
            and natural curiosity to grow and learn.
          </p>
        </div>
        <div className="next-section">
          <a href="" className="scroll">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.886,5.536C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569l9,13 C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13C22.034,6.263,22.059,5.865,21.886,5.536z M12,17.243L4.908,7h14.184 L12,17.243z"></path>
            </svg>
            <p>Scroll Down</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
