import React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="skills">
      <ol className="list">
        <h1>Skills</h1>
        <li className="item">
          <h2> Front-End</h2>
          <span>ReactJS, HTML, CSS, BootStrap.</span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>MySQL.</span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>PHP.</span>
        </li>
      </ol>
    </div>
  );
}

export default Experience;
