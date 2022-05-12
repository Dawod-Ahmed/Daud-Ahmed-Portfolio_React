import React from "react";
import {
  AboutvideoSec,
  AboutSection,
  ExperienceSection,
  SkillsSection,
} from "../components/pagesExport";
const AboutUs = () => {
  return (
    <>
      <main className="theme-background-second-layer d-flex-direction ">
        <AboutvideoSec />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
    </>
  );
};

export default AboutUs;
