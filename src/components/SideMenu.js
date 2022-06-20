import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Resume from "../images/Resume.docx";
const SideMenu = ({ sideMenuClose }) => {
  return (
    <div className="side__menu">
      <AiOutlineClose className="side__menu__close" onClick={sideMenuClose} />
      <ul
        className="desktop__list"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          minHeight: "100vh",
          position: "fixed",
          top: 0,
          right: 0,
          width: "370px",
          justifyContent: "center",
          background: "#233554",
          alignItems: "center",
        }}
      >
        <li>
          <a href="#about">
            <span className="side__menu__number">01.</span>About
          </a>
        </li>
        <li>
          <a href="#experience">
            <span className="side__menu__number">02. </span>Experience
          </a>
        </li>
        <li>
          <a href="#works">
            <span className="side__menu__number">03.</span>Work
          </a>
        </li>
        <li>
          <a href="#contact">
            <span className="side__menu__number">04.</span>Contact
          </a>
        </li>
        <li className="resume__link">
          <a href={Resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
