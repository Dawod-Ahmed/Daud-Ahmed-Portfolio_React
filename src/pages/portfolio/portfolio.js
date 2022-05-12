import React from "react";
import {PortfolioHeading,ProjectSection} from '../components/pagesExport'
const Portfolio = () => {
  return (
    <>
      <main className="theme-background-second-layer d-flex-direction  ">
       <PortfolioHeading/>
       <ProjectSection/>
      </main>
    </>
  );
};

export default Portfolio;
