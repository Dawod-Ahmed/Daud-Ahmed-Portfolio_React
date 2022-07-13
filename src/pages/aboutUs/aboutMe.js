import React, { useEffect } from "react";
import { Fade } from "react-reveal";

import {
  AboutvideoSec,
  AboutSection,
  ExperienceSection,
  SkillsSection,
} from "../components/pagesExport";
const AboutUs = () => {
  useEffect(() => {
    document.title = "About | Dawood Ahmed";
  }, []);

  return (
    <>
      <Fade duration={4000} opposite collapse></Fade>
      <main className="w-100 d-flex-direction about-main pt-0">
        <AboutvideoSec />
          <AboutSection />
          <ExperienceSection />
        <SkillsSection />
      </main>
      <Fade />
    </>
  );
};

export default AboutUs;
