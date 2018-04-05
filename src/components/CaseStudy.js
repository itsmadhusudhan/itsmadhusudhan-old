import React from "react";
import { Link } from "react-router-dom";
import search from "../images/search.webp";
import searchpng from "../images/search.png";
import portfolio from "../images/portfolio.jpg";

const CaseStudy = props => {
  return (
    <div>
      <div className="casestudy__hero">
        <h1 className="casestudy__heading">CASE STUDIES</h1>
        <p className="casestudy__description">
          Here're detailed explaination of some of the works I have done
        </p>
        <picture>
          <source srcSet={search} type="image/webp" />
          <img src={searchpng} alt="casestudy search" />
        </picture>
      </div>

      <section className="projects">
        <div className="project">
          <div className="project__img--wrapper">
            <img src={portfolio} alt="portfolio-itsmadhusudhan" />
          </div>
          <div className="project__info">
            <h2>Portfolio Site</h2>
            <h3>A minimalist and consistent layout</h3>
            <p>
              I have both designed and developed my own portfolio site which you
              are looking at now. It was quite a challenging task to design. You
              can read the casestudy to know more on my decisions for design and
              development of this project. 
            </p>
            <Link to="/casestudies/portfolio-site" className="btn btn--yellow">
              View details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
