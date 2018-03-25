import React from "react";

const Header = props => {
  return (
    <header>
      <h1 className ="brand"><a href="/">Madhusudhan</a></h1>
      <nav className="navigation">
        <ul className="menu">
          <li className="menu__item">
            <a href="/" className="menu__link">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a href="" className="menu__link">
              Casestudies
            </a>
          </li>
          <li className="menu__item">
            <a href="" className="menu__link">
              Works
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
