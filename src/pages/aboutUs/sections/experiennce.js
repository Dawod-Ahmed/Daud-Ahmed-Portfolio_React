import React from "react";
import { ExperienceCard } from "../../components/pagesExport";
import { AboutBackImg } from "../../../assets/assets";
const experiennceSection = () => {
  return (
    <>
      <section className="experience-section d-flex  flex-column justify-content-center align-items-center position-relative">
        <img
          src={AboutBackImg}
          alt="img"
          className="position-absolute aboutme-background-text mx-auto"
        />
      
        <h1 className="heading experience-heading  my-5">
          <span className="heading-first">Experiance &</span>
          <br />
          <span className="heading-second">Education</span>
        </h1>
        <div className="experience-cards-parent  d-flex justify-content-between mt-5">
          <ExperienceCard
            title={"Universty Of Pakistan"}
            location={"2017-2021"}
            detail={"Software engineering"}
            duration={
              " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.."
            }
          />
          <ExperienceCard
            title={"Universty Of Pakistan"}
            location={"2017-2021"}
            detail={"Software engineering"}
            duration={
              " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.."
            }
          />
          <ExperienceCard
            title={"Universty Of Pakistan"}
            location={"2017-2021"}
            detail={"Software engineering"}
            duration={
              " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.."
            }
          />
          <ExperienceCard
            title={"Universty Of Pakistan"}
            location={"2017-2021"}
            detail={"Software engineering"}
            duration={
              " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.."
            }
          />
        </div>
      </section>
    </>
  );
};

export default experiennceSection;
