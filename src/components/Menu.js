import React from "react";
import Logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import Resume from "../images/Resume.docx";

const Menu = ({ sideMenuOpen }) => {
  return (
    <div className="nav__menu">
      <div>
        <img src={Logo} alt="Portfolio Logo" className="logo"></img>
      </div>
      <div className="desktop__menu">
        <ul className="desktop__list">
          <li>
            <a href="#about" id="side__menu__item">
              <span>01.</span>About
            </a>
          </li>
          <li>
            <a href="#experience" id="side__menu__item">
              <span>02. </span>Experience
            </a>
          </li>
          <li>
            <a href="#works" id="side__menu__item">
              <span>03.</span>Work
            </a>
          </li>
          <li>
            <a href="#contact" id="side__menu__item">
              <span>04.</span>Contact
            </a>
          </li>
          <li className="resume__link">
            <a href={Resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </div>
      <FaBars className="home__icon" onClick={sideMenuOpen} />
    </div>
  );
};

export default Menu;
