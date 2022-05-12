import React from "react";
import { HandleProject } from "../../components/pagesExport";

const ServeQuality = () => {
  return (
    <>
      <section className="work-method-section">
        <div className="project-cycle-heading-parent">
          <h1 className="heading my-5 text-center">
            <span className="heading-first">Project</span>
            <br />
            <span className="heading-second">Cycle</span>
          </h1>
          <p className="general-text project-cycle-para text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the 1500s, when an unknown printer
            took..
          </p>
        </div>
        <div className="project-cycle-container">
          <HandleProject
            className="requirements"
            phaseTitle1="1. Understanding Of"
            phaseTitle2="Requirements"
            phaseDetail=" Gathering Data & Understanding Your Requirements."
          />
          <HandleProject
            className="development"
            phaseTitle1="2. Development And"
            phaseTitle2=" Updates"
            phaseDetail="Start Development  & Give You Updates on Project Progress  on Daily Basis"
          />
          <HandleProject
            className="testing"
            phaseTitle1="3. Test Your"
            phaseTitle2="Project"
            phaseDetail="Test Your Project To check ( On All Major Browsers, All devices' compatibility, Back-End Tests, Bugs-Free Project) to Ensure Quality Work."
          />
          <HandleProject
            className="deliver"
            phaseTitle1="4. Deliver Your"
            phaseTitle2="Project"
            phaseDetail="Give Project for Review & Deliver Your Project.
            "
          />
        </div>
      </section>
    </>
  );
};

export default ServeQuality;
