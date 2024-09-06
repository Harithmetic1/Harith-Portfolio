import React from "react";
import ButtonLink from "../components/ButtonLink";
import Layout from "../components/Layout";

// Styles
import "../styles/works.scss";

// Images
import tilde from "../images/tilde.svg";
import ProjectCard from "../components/ProjectCard";
import AnimatedLinkContainer from "../components/AnimatedLinkContainer";

const Works = () => {
  const projects = [
    {
      id: 13,
      projectName: "Landlord Connect: Short Term App",
      imgSrc: "landlord-connect",
      techStack: ["Flutter", "Laravel", "MySql"],
      projectDescription:
        "A mobile app made for holiday homes landlords of a real estate company. The app allows the landlords to view bookings, statements and assess their property financials, built for android and IOS, view the app on App store in the link above.",
      liveLink:
        "https://apps.apple.com/ae/app/landlord-connect-short-term/id6504141703",
      githubLink:
        "https://github.com/key-one-realty/Holiday-homes-landlord-portal",
    },
    {
      id: 12,
      projectName: "Dxberience",
      imgSrc: "dxberience",
      techStack: ["Next.js", "Tailwind", "Sanity"],
      projectDescription:
        "A website made for a luxury concierge startup based in Dubai, they offer lixurious concierge services and this website helps them get closer to their customers by expressing their taste in luxury and concierge.",
      liveLink: "https://www.thedxberience.com/",
      githubLink: "https://github.com/thedxberience/dxberience-frontend-v2",
    },
    {
      id: 11,
      projectName: "Maash Engineering",
      imgSrc: "maash-engineering",
      techStack: ["NextJs", "JavaScript", "Tailwind"],
      projectDescription:
        "An upgraded website made for a small Nigerian company dealing with renting equipments. My team reached out to this company to help them upgrade their website from an ancient website to a more powerful and modern website equipped with state of the art tech.",
      liveLink: "https://www.maash-engineering.com/",
      githubLink: "https://github.com/Harithmetic1/maash-engineering",
    },
    {
      id: 10,
      projectName: "Swave - Errand App",
      imgSrc: "swave",
      techStack: ["NextJs", "TypeScript", "Tailwind"],
      projectDescription:
        "I recently had the opportunity to work for these amazing peope at Swave. I worked on the frontend of their errand app. I used Next.js, TypeScript, Redux Toolkit, Tailwind CSS and Chakra UI to build the app. I also worked with a team of talented developers. It was an amazing experience. Y'all should watch out for this app, it's going to be a game changer.",
      liveLink: "https://staging.swave.ng/",
      githubLink: "https://github.com/GoferDevTeam/ErrandAppWeb",
    },
    {
      id: 4,
      projectName: "Efico Resources",
      imgSrc: "efico-resources",
      techStack: ["React", "CSS"],
      projectDescription:
        "I was opportune to volunteer as the technology lead for this EdTech organisation. I helped them launch their website's first and second versions alongside some talented teammates. They use the website to tell the world about their incredible mission to help students discover their strengths and abilities and push their Save the Climate Project.",
      liveLink: "https://eficoresource.com/",
      githubLink: "https://github.com/Efico-Resources/Efico-React",
    },
    {
      id: 0,
      projectName: "Ajo Travels",
      imgSrc: "ajo-project-screenshot",
      techStack: ["NuxtJS", "GCP", "VueX"],
      projectDescription:
        "A web app that serves as a travel guide for users. We used the Google maps API to render information about places users would like to visit.",
      liveLink: "https://ajo-travels.vercel.app/",
      githubLink: "https://github.com/Harithmetic1/Ajo-Travels",
    },
    {
      id: 1,
      projectName: "Logistics App",
      imgSrc: "logistics-app",
      techStack: ["NuxtJS", "GMaps API", "SCSS"],
      projectDescription:
        "Trying to send a package to a loved one? This app allows you to request or send package locally or internationally. The app served as a design solution to a logistic company looking to expand their services.",
      liveLink: "https://interns-logistics-app.netlify.app/",
      githubLink: "https://github.com/acumendigital/interns-logistics-app",
    },
    {
      id: 3,
      projectName: "Elephantom",
      imgSrc: "elephantom-vue",
      techStack: ["Vue3", "Axios", "SCSS"],
      projectDescription:
        "An online repository of different species of elephants. I had fun making this project, as it was my first vue project",
      liveLink: "https://elephantom-vue.vercel.app/",
      githubLink: "https://github.com/Harithmetic1/Elephantom-Vue",
    },
    {
      id: 6,
      projectName: "React Weather App",
      imgSrc: "react-weather-app",
      techStack: ["React", "CSS", "Axios"],
      projectDescription:
        "When I started learning React JS, I created this weather app to understand how to call Rest APIs with React. I remember using only class components because I didn't understand how hooks worked then. I also made it a PWA; I had so much fun working on this project :D",
      liveLink: "https://harithmetic1.github.io/React-weather-app/",
      githubLink: "https://github.com/Harithmetic1/React-weather-app",
    },
    {
      id: 7,
      projectName: "Base Converter",
      imgSrc: "base-calculator",
      techStack: ["HTML", "CSS", "JS"],
      projectDescription:
        "In school, especially during my networking classes, we do a lot of number base calculations, so I decided to make this app to do all the conversion while I focus on the more complex calculations",
      liveLink: "https://harithmetic1.github.io/Base-Calculator/",
      githubLink: "https://github.com/Harithmetic1/Base-Calculator",
    },
    {
      id: 8,
      projectName: "Github Search",
      imgSrc: "github-search",
      techStack: ["HTML", "CSS", "JS", "Fetch"],
      projectDescription:
        "One of my earliest projects I completed during the 30 days of code hackaton hosted by GDSC Unilag in 2020. I made use of the GitHub REST API to access any GitHub user public profile by querying with their username",
      liveLink: "https://harithmetic1.github.io/Github-search-30DOC/",
      githubLink: "https://github.com/Harithmetic1/Github-search-30DOC",
    },
    {
      id: 9,
      projectName: "Harith's Portfoilio 1",
      imgSrc: "portfolio-one",
      techStack: ["HTML", "CSS", "JS"],
      projectDescription: "The OG portfolio site",
      liveLink: "https://harithmetic-dev.netlify.app/",
      githubLink: "https://github.com/Harithmetic1/harithmetic",
    },
  ];

  return (
    <>
      <Layout pageTitle={"My Works"}>
        <div className="works-container">
          <div className="works-header">
            <h1>My Works</h1>
            <div className="tilde">
              <AnimatedLinkContainer>
                <img src={tilde} alt="tilde" />
              </AnimatedLinkContainer>
            </div>
            <ButtonLink btnName={"About me"} to="/about" />
          </div>
          <div className="projects-container">
            {projects.map((project) => {
              return <ProjectCard projectDetails={project} key={project.id} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Works;
