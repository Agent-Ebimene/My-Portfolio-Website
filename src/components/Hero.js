import React from "react";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="hero__section__container">
      <div className="hero__section">
        <h1>
          Agent Ebimene.
          <br />
          <span className="hero__dark__header">
            I build things for the web.
          </span>
        </h1>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at
          <a href="https://www.google.com">Astrosoft</a>
        </p>
      </div>
      <Button />
    </div>
  );
};

export default Hero;
