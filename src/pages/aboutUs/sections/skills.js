import React, { useState } from "react";
import {
  xd,
  adobephotoshop,
  bootstrap,
  css,
  gatsbyjs,
  git_Hub,
  html,
  javaScript,
  materialUI,
  next,
  npm,
  reactJs,
  redux,
  sass,
  firebase,
} from "../../../assets/assets.js";
import { SkillsComponent } from "../../components/pagesExport";
const SkillsSections = () => {
  const [skillsData, ] = useState([
    { image: reactJs, className: "reactJs", imageName: "React.Js" },
    { image: gatsbyjs, className: "gatsbyjs", imageName: "Gatsby.Js" },
    { image: next, className: "next", imageName: "Next.JS" },
    { image: redux, className: "redux", imageName: "Redux" },

    { image: html, className: "html", imageName: "HTML" },
    { image: css, className: "css", imageName: "CSS" },

    { image: sass, className: "sass", imageName: "Sass" },
    { image: javaScript, className: "javaScript", imageName: "JavaScript" },
    { image: bootstrap, className: "bootstrap", imageName: "Bootstrap" },

    { image: materialUI, className: "materialUI", imageName: "MaterialUI" },
    { image: npm, className: "npm", imageName: "npm" },
    { image: firebase, className: "firebase", imageName: "FireBase" },
    { image: git_Hub, className: "git_Hub", imageName: "Git-hub" },
    { image: xd, className: "xd", imageName: "Xd" },
    {
      image: adobephotoshop,
      className: "adobephotoshop",
      imageName: "Photoshop",
    },
  ]);
  return (
    <>
      <section className="skill-section py-5">
        <div className="skills-heading-parent pt-5 ">
          <h1 className="heading text-center">
            <span className="heading-first">My</span>
            <span className="heading-second"> Skills</span>
          </h1>
          <p className="heading-detail text-center">
           I use these technologies to design and develop full custom, reliable, blazing-fast, and secure websites and web applications. I also used many other tools for web development, but here I showed the major tools.
          </p>
        </div>
        <div className="skills-parent p-y row py-3  g-4 g-md-0 ">
          {skillsData.map((value, index) => {
            return (
              <>

                <SkillsComponent
                KeyIndex={index}
                  className={value.className}
                  image={value.image}
                  skillName={value.imageName}
                />

                
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SkillsSections;
