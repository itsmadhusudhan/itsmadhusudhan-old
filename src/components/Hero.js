import React from "react";
import SocialLink from "./SocialLink";
import hero from "../images/hero.webp";
import heropng from "../images/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__img--wrapper">
        <picture>
        <source srcSet={hero} type="image/webp" />
        <img className="hero__img" src={heropng} alt="hero" />
      </picture>
      </div>
      <div className="intro">
        <h1>I'm Madhusudhan</h1>
        <h3>a Front-End Web Developer</h3>
        <div className="slogan">
          <p>
            I will hustle all my way to the top, No matter what other say or
            what others think until and unless I decide I'm done, I don't quit
            working.
          </p>

          <SocialLink
            url="https://github.com/itsmadhusudhan"
            icon="icon icon--github"
            fa="fa fa-github fa-lg"
          />
          <SocialLink
            url="https://twitter.com/itsmadhusudhan"
            icon="icon icon--twitter"
            fa="fa fa-twitter fa-lg"
          />
          <SocialLink
            url="https://medium.com/itsmadhusudhan"
            icon="icon icon--medium"
            fa="fa fa-medium fa-lg"
          />
          <SocialLink
            url="https://linkedin.com/in/itsmadhusudhan"
            icon="icon icon--linkedin"
            fa="fa fa-linkedin fa-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
