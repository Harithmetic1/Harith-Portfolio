import React from "react";
import { Link } from "gatsby";

// Style
import "../styles/components.scss";

const ButtonLink = ({ to, btnName, styles }) => {
  return (
    <div className="btn-links" style={styles}>
      <Link to={to}>{btnName}</Link>
    </div>
  );
};

export default ButtonLink;
