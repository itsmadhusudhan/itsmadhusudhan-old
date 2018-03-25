import React from "react";
import hero from "../images/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__img--wrapper">
        <img className="hero__img" src={hero} alt="hero" />
      </div>
      <div className="intro">
        <h1>I'm Madhusudhan</h1>
        <h3>a Front-End Web Developer</h3>
        <div className="slogan">
          <p>
            I always find hope even in the worst situation. I will hustle all my
            way to the top, No matter what other say or what others think until
            and unless I decide I'm done, I don't quit working.
          </p>
          <a href="./casestudies.html" className="btn btn--blue">
            Case Studies
          </a>
          <a href="/" className="btn btn--red spacer--left">
            Style Guide
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
