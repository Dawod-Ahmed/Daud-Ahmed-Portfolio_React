import React from "react";
import {
  portfolioBackground,
  portfolioDownArrow,
  project1,
  project2,
  project3,
  project4,
} from "../../../assets/assets";
const PortfolioHeadinSection = () => {
  return (
    <>
      {" "}
      <section className="portfolio-section">
        <div className="heading-parent">
          <div className="portfolio-heading-parent">
            <div className="heading-parent-child">
              <h1 className="heading">
                <span className="heading-first">My</span>
                <span className="heading-second"> Portfolio</span>
              </h1>
              <p className="portfolio-heading-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                nesciunt porro enim. Ut officiis ipsum minima.
              </p>
            </div>
            <img src={portfolioDownArrow} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHeadinSection;
