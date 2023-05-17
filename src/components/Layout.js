import React, { useState } from "react";
import "../styles/layout.scss";
import hamburgerIcon from "../images/hamburger.svg";
import instagramIcon from "../images/social-links/InstagramLogo.svg";
import twitterIcon from "../images/social-links/TwitterLogo.svg";
import linkedinIcon from "../images/social-links/LinkedinLogo.svg";
import githubIcon from "../images/social-links/GithubLogo.svg";
import Menu from "./Menu";
import MouseFollow from "./MouseFollow";
// import Harith from "./Harith";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const [revealMenu, setRevealMenu] = useState(false);
  const [isloaded, setIsLoaded] = useState(false);

  const showMenu = () => {
    setRevealMenu(true);
  };

  return (
    <>
      <title>{pageTitle}</title>
      <main>
        <Menu revealMenu={revealMenu} setRevealMenu={setRevealMenu} />
        <MouseFollow />
        <div className="navbar">
          <h1>
            <Link to="/">Harith</Link>
            {/* <Harith /> */}
          </h1>
          <div className="hamburger-menu" onClick={() => showMenu()}>
            <img src={hamburgerIcon} alt="hamburger-menu" />
          </div>
        </div>
        {children}
        <footer>
          <div className="footer-header">
            <h2>Reach me</h2>
          </div>
          <div className="footer-links">
            <div className="email">
              <a href="mailto:harith.onigemo@gmail.com">
                harith.onigemo@gmail.com
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://www.instagram.com/tosin_igx/"
                className="instagram"
              >
                <img src={instagramIcon} alt="instagram" />
              </a>
              <a href="https://twitter.com/harithOnigemo" className="twitter">
                <img src={twitterIcon} alt="twitter" />
              </a>
              <a href="https://github.com/Harithmetic1" className="github">
                <img src={githubIcon} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/harith-onigemo/"
                className="linkedin"
              >
                <img src={linkedinIcon} alt="linkedin" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Layout;
