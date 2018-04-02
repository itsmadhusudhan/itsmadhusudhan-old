import React from "react";
import { NavLink } from "react-router-dom";
import confused from "../images/confused.webp";
import confusedpng from "../images/confused.png";

const NotFound = props => {
  return (
    <section className="notfound">
      <div className="confused__wrapper">
        <picture>
          <source srcSet={confused} type="image/webp" />
          <img src={confusedpng} alt="notfound" className="confused__img" />
        </picture>
        <h3>
          Didn't find what your are looking for? {"   "}
          <NavLink to="/" className="menu__link">Go Back Home</NavLink>
        </h3>
      </div>
    </section>
  );
};

export default NotFound;
