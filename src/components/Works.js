import React from 'react';
import search from "../images/styleguide.webp"
import searchpng from "../images/styleguide.png"

const Works=(props)=>{
  return(
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
        <h2 className="work__heading">Portfolio site</h2>
        <p className="work__info"></p>
      </div>
    </div>
  </section>
  )
}

export default Works;