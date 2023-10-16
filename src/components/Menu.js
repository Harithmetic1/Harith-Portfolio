import React from "react";
import { Link } from "gatsby";

// Style
import "../styles/components.scss";

function Menu({ revealMenu, setRevealMenu }) {
  const closeMenu = () => {
    setRevealMenu(false);
  };

  return (
    <div className="menu-container">
      <div className={revealMenu ? "menu-links reveal" : "close"}>
        <div className="menu-contents">
          <div className="close-btn" onClick={() => closeMenu()}>
            <div></div>
            <div></div>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/works">My Works</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a
                download={"Harith Onigemo's Resume"}
                href="../../Harith Onigemo 2023.pdf"
                className="Resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
