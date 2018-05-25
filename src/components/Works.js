import React from "react";
import search from "../images/styleguide.webp";
import searchpng from "../images/styleguide.png";
import portfolio from "../images/portfolio.jpg";
import { NavLink } from "react-router-dom";

const Works = props => {
  return (
    <section id="works">
      <h2 className="heading">Works</h2>
      <div className="works__wrapper">
        <picture>
          <source srcSet={search} type="image/webp" />
          <img src={searchpng} alt="works" className="works__img" />
        </picture>
      </div>

      <div className="works">
        <div className="work">
          <img className="img__portfolio" src={portfolio} />
          <h2 className="work__heading">Portfolio site</h2>
          <p className="work__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            animi quisquam ipsa est neque accusantium enim ut, cupiditate saepe
            necessitatibus consectetur delectus mollitia voluptas minus quos
            veritatis libero illo deserunt.
          </p>
          <div className="work__action">
            <a href="" className="btn btn--blue btn--work">
              View On Github
            </a>
            <NavLink
              to="/casestudies/portfolio-site"
              className="btn btn--red btn--work"
            >
              Read Case Study
            </NavLink>
          </div>
        </div>

        <div className="work">
          <img className="img__portfolio" src={portfolio} />
          <h2 className="work__heading">Portfolio site</h2>
          <p className="work__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            animi quisquam ipsa est neque accusantium enim ut, cupiditate saepe
            necessitatibus consectetur delectus mollitia voluptas minus quos
            veritatis libero illo deserunt.
          </p>
          <div className="work__action">
            <a href="" className="btn btn--blue btn--work">
              View On Github
            </a>
            <NavLink
              to="/casestudies/portfolio-site"
              className="btn btn--red btn--work"
            >
              Read Case Study
            </NavLink>
          </div>
        </div>

        <div className="work">
          <img className="img__portfolio" src={portfolio} />
          <h2 className="work__heading">Portfolio site</h2>
          <p className="work__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            animi quisquam ipsa est neque accusantium enim ut, cupiditate saepe
            necessitatibus consectetur delectus mollitia voluptas minus quos
            veritatis libero illo deserunt.
          </p>
          <div className="work__action">
            <a href="" className="btn btn--blue btn--work">
              View On Github
            </a>
            <NavLink
              to="/casestudies/portfolio-site"
              className="btn btn--red btn--work"
            >
              Read Case Study
            </NavLink>
          </div>
        </div>

        <div className="work">
          <img className="img__portfolio" src={portfolio} />
          <h2 className="work__heading">Portfolio site</h2>
          <p className="work__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            animi quisquam ipsa est neque accusantium enim ut, cupiditate saepe
            necessitatibus consectetur delectus mollitia voluptas minus quos
            veritatis libero illo deserunt.
          </p>
          <div className="work__action">
            <a href="" className="btn btn--blue btn--work">
              View On Github
            </a>
            <NavLink
              to="/casestudies/portfolio-site"
              className="btn btn--red btn--work"
            >
              Read Case Study
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
