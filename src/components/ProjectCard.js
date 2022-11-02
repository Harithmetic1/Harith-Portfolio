import React from "react";
import { motion } from "framer-motion";

// Style
import "../styles/components.scss";

// Images
import arrowLink from "../images/arrow-link.svg";

const ProjectCard = ({ projectDetails }) => {
  const variants = {
    hidden: { opacity: 0, transform: "skew(20deg)" },
    visible: {
      opacity: 1,
      transform: "skew(0deg)",
      transition: {
        delayChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      // viewport={{ once: true }}
      className="project-card-container"
    >
      <div className="image-container">
        <div className="arrow-link">
          <a href={projectDetails.liveLink}>
            <img src={arrowLink} alt="arrow link" />
          </a>
        </div>
        <div className="project-image">
          <motion.div
            whileHover={{ zIndex: 1 }}
            className="hover-state"
          ></motion.div>
          <motion.img
            whileHover={{ zIndex: -1 }}
            src={`../../${projectDetails.imgSrc}.png`}
            alt={`${projectDetails.projectName}`}
          />
        </div>
      </div>
      <div className="project-contents">
        <div className="name-stack">
          <h1>{projectDetails.projectName}</h1>
          <div className="stack">
            {projectDetails.techStack?.map((stack, index) => {
              return <p key={index}>{stack}</p>;
            })}
          </div>
        </div>
        <div className="project-description">
          <p>{projectDetails.projectDescription}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
