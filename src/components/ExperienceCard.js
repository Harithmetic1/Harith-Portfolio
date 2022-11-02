import React from "react";

// Style
import "../styles/components.scss";

const ExperienceCard = ({ organisation, title, duration }) => {
  return (
    <div className="experience-card-container">
      <div className="experience-card">
        <div className="organisation">
          <p>{organisation}</p>
        </div>
        <div className="title-duration">
          <p>{title}</p>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
