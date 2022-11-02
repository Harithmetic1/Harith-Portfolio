import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

// style
import "../styles/home.scss";

// Images
import polygon from "../images/Polygon.svg";
import homeRectangle from "../images/home-rectangle.svg";

// markup
const IndexPage = () => {
  return (
    <>
      <Layout pageTitle={"Harith's Portfolio"}>
        <div className="home-container">
          <div className="hello">
            <h2>
              <div className="polygon">
                <img src={polygon} alt="polygon" />
              </div>
              Hello, I’m Harith
            </h2>
          </div>
          <div className="home-caption">
            <h1>Frontend Developer with skills in Vue and React;</h1>
          </div>
          <div className="page-links-container">
            <div className="page-links">
              <Link to="/works">My Works</Link>
            </div>
            <div className="page-links middle-link">
              <Link to="/about">About me</Link>
            </div>
            <div className="page-links">
              <Link to="/blog">My blog</Link>
            </div>
          </div>
          <div className="home-rectangle">
            <img src={homeRectangle} alt="home-rectangle" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
