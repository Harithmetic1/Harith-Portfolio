import React from "react";
import BlogArrowLink from "../images/blogArrowLink.svg";

// Style
import "../styles/components.scss";

function BlogCard({ canonical_url, title, social_image, type_of }) {
  return (
    <div className="blog-card-container">
      <div className="blog-card-image">
        <a href={canonical_url} target="_blank" rel="noreferrer">
          <img src={social_image} alt={title} />
        </a>
      </div>
      <div className="blog-card-content">
        <div className="blog-card-title">
          <h2>{title}</h2>
          <a href={canonical_url} target="_blank" rel="noreferrer">
            <img src={BlogArrowLink} alt="Arrow link" />
          </a>
        </div>
        <div className="blog-type">
          <p>{type_of}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
