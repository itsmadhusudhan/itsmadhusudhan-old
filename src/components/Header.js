import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="brand">
        <NavLink to="/">Madhusudhan</NavLink>
      </h1>
      <nav className="navigation">
        <ul className="menu">
          <li className="menu__item">
            <NavLink
              to="/"
              activeClassName="is-active"
              className="menu__link"
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              to="/casestudies"
              activeClassName="is-active"
              className="menu__link"
              exact={true}
            >
              Casestudies
            </NavLink>
          </li>
          <li className="menu__item">
            <a href="https://medium.com/@itsmadhusudhan" className="menu__link" target="_blank">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
