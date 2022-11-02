import React from "react";
import BlogArrowLink from "../images/blogArrowLink.svg";

// Style
import "../styles/components.scss";

function YTBlogCard({ contentDetails, snippet, social_image, type_of }) {
  return (
    <div className="blog-card-container">
      <div className="blog-card-image">
        <a
          href={`https://www.youtube.com/watch?v=${contentDetails.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
        </a>
      </div>
      <div className="blog-card-content">
        <div className="blog-card-title">
          <h2>{snippet.title}</h2>
          <a
            href={`https://www.youtube.com/watch?v=${contentDetails.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={BlogArrowLink} alt="Arrow link" />
          </a>
        </div>
        <div className="blog-type">
          <p>{snippet.resourceId.kind}</p>
        </div>
      </div>
    </div>
  );
}

export default YTBlogCard;
