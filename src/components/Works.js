import React from 'react';
import search from "../images/styleguide.png"

const Works=(props)=>{
  return(
    <section id="works">
    <h2 className="heading">Works</h2>
    <div className="works__wrapper">
      <img src={search} alt="hire me" className="works__img" />
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