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
      organisation: "Key One Realty Group",
      title: "Full Stack Developer",
      duration: "May 2024 - Present",
    },
    {
      id: 6,
      organisation: "Key One Realty Group",
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
      duration: "Sep 2022 - may 2023",
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
            <AnimatedLinkContainer>
              <div className="polygon-icon">
                <img src={polygon} alt="Polygon" />
              </div>
            </AnimatedLinkContainer>
          </div>
          <div className="about-me">
            <p>
              Hi, I'm Harith, a Dubai-based Frontend Developer. I specialize in
              crafting stunning and intuitive user interfaces that deliver
              exceptional user experiences. With a keen eye for detail and a
              passion for technology, I bring my clients' ideas to life using
              the latest coding standards and best practices. Let's work
              together to create something great!
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
