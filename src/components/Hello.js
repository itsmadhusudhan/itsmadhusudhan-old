import React from 'react';
import board from "../images/board.png";

const Hello=(props)=>{
    return(
        <section id="hello">
        <div className="board__wrapper">
          <img src={board} alt="hello" className="board"/>
        </div>
        <div className="hello__text">
          <p className="text">I'm a Front-End Developer from Bengaluru. I love and desire for web development is endless.I'm a man on curiosity when
            it comes to learning new things.
          </p>
        </div>
      </section>
    )
}

export default Hello;