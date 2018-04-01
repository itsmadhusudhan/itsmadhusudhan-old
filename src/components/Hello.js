import React from "react";
import hello from "../images/hello.webp";
import hellopng from "../images/hello.png";


const Hello = props => {
  return (
    <section id="hello">
      <div className="board__wrapper">
        <picture>
          <source srcSet={hello} type="image/webp" />
          <img src={hellopng} alt="hello" className="board" />
        </picture>
      </div>
      <div className="hello__text">
        <p className="text">
          I'm a Front-End Developer from Bengaluru. I love and desire for web
          development is endless.I'm a man on curiosity when it comes to
          learning new things.
        </p>
      </div>
    </section>
  );
};

export default Hello;
