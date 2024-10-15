import React from "react";
import ButtonLink from "../components/ButtonLink";
import ExperienceCard from "../components/ExperienceCard";
import Layout from "../components/Layout";
import polygon from "../images/Polygon.svg";

// Style
import "../styles/about.scss";
import AnimatedLinkContainer from "../components/AnimatedLinkContainer";

const about = () => {
  const experienceFields = [
    {
      id: 7,
      organisation: "Keyone",
      title: "Full Stack Developer",
      duration: "May 2024 - Present",
    },
    {
      id: 6,
      organisation: "Keyone",
      title: "Web Developer Intern",
      duration: "Dec 2023 - May 2024",
    },
    {
      id: 5,
      organisation: "Exemplar Projects Consort",
      title: "Frontend Developer Intern",
      duration: "Aug 2023 - October 2023",
    },
    {
      id: 0,
      organisation: "Middlesex Computing Society",
      title: "President",
      duration: "Oct 2022 - May 2024",
    },
    {
      id: 1,
      organisation: "Google Developer Student Club, MDX Dubai",
      title: "Frontend and Flutter Head",
      duration: "Sep 2022 - May 2023",
    },
    {
      id: 2,
      organisation: "Acumen Digital",
      title: "Software Engineer Intern",
      duration: "Mar 2022 - Nov 2022",
    },
    {
      id: 3,
      organisation: "HNG Internship",
      title: "Frontend Developer Intern",
      duration: "Jul 2021 - September 2021",
    },
    {
      id: 4,
      organisation: "Google Developer Student Club, UNILAG",
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
            <AnimatedLinkContainer>
              <div className="polygon-icon">
                <img src={polygon} alt="Polygon" />
              </div>
            </AnimatedLinkContainer>
          </div>
          <div className="about-me">
            <p>
              Hi, I'm Harith, a Fullstack Developer with a passion for creating
              high-performing, scalable web applications. I focus on delivering
              seamless user experiences while adhering to modern coding
              standards and best practices. From frontend interfaces to backend
              systems, I turn innovative ideas into functional, well-architected
              products. Let's collaborate to bring your vision to life!
            </p>
          </div>
          <div className="skills-container">
            <h2>Tech I Use</h2>
            <div className="skils">
              <p>
                /JavaScript /TypeScript /Python /PHP /HTML & CSS /Tailwind /Vue
                /React /NextJs /Gatsby /Laravel /Express /Nest /Flutter /Git
                /Arduino
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
                <li>
                  Middlesex University Dubai / Computer Systems Engineering /
                  2021 - 2024
                </li>
                <li>University of Lagos / Systems Engineering / 2018 - 2020</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default about;
