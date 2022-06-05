import React,{useEffect} from "react";
import { PortfolioHeading, ProjectSection } from "../components/pagesExport";
const Portfolio = () => {
  

 
    useEffect(() => {
      document.title = "Portfolio | Dawood Ahmed";
    }, []);


  return (
    <>
      <main className="theme-background-second-layer d-flex-direction pd-0 pt-0 ">
        <PortfolioHeading />
        <ProjectSection />
      </main>
    </>
  );
};

export default Portfolio;
