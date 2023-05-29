import React from "react";
import "../styles/Home.css";
import me from "../imgs/me.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={me} alt="Me" />
        <h2>Giovanni Rocha</h2>
        <div className="prompt">
          <p>Um menino da C1 que estuda na ETEC de Cotia.</p>
          <a
            className="social-media"
            href="https://www.linkedin.com/in/giovanni-rocha-78a88b268/"
          >
            Linkledin
          </a>
          <a className="social-media" href="https://github.com/Rochalion">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
