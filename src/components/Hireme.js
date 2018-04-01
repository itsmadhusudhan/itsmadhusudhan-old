import React from "react";
import shout from "../images/about.png";

const Hireme=(props)=>{
    return(
        <section id="hire-me">
        <h2 className="heading">Hire Me</h2>
        <div className="shout__wrapper">
          <img className="shout__img" src={shout} alt="hire me"/>
        </div>
        <p className="hire-me__text"> I'm looking for a full time Front-End developer job right now in Bangalore. Look into the case studies here. I'm just
          not experienced but I got skills. If you are impressed, message me for an interview.
        </p>
        <div className="btn__wrapper">
          <a href="/" className="btn btn--green">Message Me</a>
        </div>
      </section>
    )
};

export default Hireme;