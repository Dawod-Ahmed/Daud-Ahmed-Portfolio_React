import React, { useState } from "react";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
} from "../../../assets/assets";
import { ProjectComponent } from "../../components/pagesExport";

const ProjectsSection = () => {
  const [projectData, setPorjectData] = useState([
    {
      image: project1,
      title1: "BroadBand ",
      title2: "Genie",
      projectDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt porro enim. Ut officiis ipsum minima.",
    },
    {
      image: project2,
      title1: "Play",
      title2: "Pluniverse",
      projectDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt porro enim. Ut officiis ipsum minima.",
    },
    {
      image: project3,
      title1: "News",
      title2: "App",
      projectDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt porro enim. Ut officiis ipsum minima.",
    },
    {
      image: project4,
      title1: "Law",
      title2: "On Demand",
      projectDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt porro enim. Ut officiis ipsum minima.",
    },
    {
      image: project5,
      title1: "Admin",
      title2: "Panel",
      projectDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt porro enim. Ut officiis ipsum minima.",
    },

    {
      image: project6,
      title1: "Dubai",
      title2: "Center",
      projectDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt porro enim. Ut officiis ipsum minima.",
    },
    {
      image: project7,
      title1: "Sigma",
      title2: "Sol",
      projectDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt porro enim. Ut officiis ipsum minima.",
    },
  ]);

  return (
    <>
      <section className="projects-section mt-5">
        {projectData.map((value, index) => {
          return (
            <>
              {" "}
              <ProjectComponent
                image={value.image}
                projectTitle1={value.title1}
                projectTitle2={value.title2}
                projectDetails={value.projectDetails}
                leftImage={index % 2 == 0 ? true : false}
              />
            </>
          );
        })}
      </section>
    </>
  );
};

export default ProjectsSection;
