import React from "react";
import ButtonLink from "../components/ButtonLink";
import ExperienceCard from "../components/ExperienceCard";
import Layout from "../components/Layout";
import polygon from "../images/Polygon.svg";

// Style
import "../styles/about.scss";

const about = () => {
  const experienceFields = [
    {
      id: 1,
      organisation: "Google Developer Student Club, MDX Dubai",
      title: "Frontend and Flutter Head",
      duration: "Sep 2022 - Present",
    },
    {
      id: 2,
      organisation: "Acumen Digital",
      title: "Software Engineer Intern",
      duration: "Mar 2022 - Present",
    },
    {
      id: 3,
      organisation: "HNG Internship",
      title: "Frontend Developer Intern",
      duration: "Jul 2021 - September 2021",
    },
    {
      id: 4,
      organisation: "Google Developer Student Club, UNILAG Chapter",
      title: "JavaScript Tutor",
      duration: "Sep 2020 - Jan 2021",
    },
    // {id: 1, organisation: 'Acumen Digital', title: 'Software Engineer Intern', duration: "Mar 2022 - Present"},
  ];

  return (
    <>
      <Layout pageTitle={"About me"}>
        <div className="about-me-container">
          <div className="about-me-header">
            <div className="about-me-links">
              <h1>About me</h1>
              <ButtonLink btnName={"My blog"} to="/blog" />
            </div>
            <div className="polygon-icon">
              <img src={polygon} alt="Polygon" />
            </div>
          </div>
          <div className="about-me">
            <p>
              Hello there, I'm Harith, a Frontend Developer currently studying
              in Dubai, I love implementing beautiful UI designs and find
              pleasure in bringing my client's ideas to life using technology.
            </p>
          </div>
          <div className="skills-container">
            <h2>Skills</h2>
            <div className="skils">
              <p>
                /JavaScript /HTML & CSS /SCSS /React /Gatsby /Vue /Nuxt /VueX
                /Flutter /Git /GitHub /Arduino /Python
              </p>
            </div>
          </div>
          <div className="experience-section">
            <h2>Experience</h2>
            <div className="experience-card-section">
              {experienceFields.map((field) => {
                return <ExperienceCard {...field} key={field.id} />;
              })}
            </div>
          </div>
          <div className="education-section">
            <h2>Education</h2>
            <div className="education-list">
              <ul>
                <li>Middlesex University Dubai/ 2020 - Present</li>
                <li>University of Lagos/ 2018 - 2020</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default about;
