import React from "react";
import { portfolioDownArrow } from "../../../assets/assets";
const PortfolioHeadinSection = () => {
  return (
    <>
      {" "}
      <section className="portfolio-section">
        <div className="heading-parent">
          <div className="portfolio-heading-parent">
            <div className="heading-parent-child">
              <h1 className="heading px-3 px-sm-0">
                <span className="heading-first">My</span>
                <span className="heading-second"> Portfolio</span>
              </h1>
              <p className="portfolio-heading-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                nesciunt porro enim. Ut officiis ipsum minima.
              </p>
            </div>
            <img
              src={portfolioDownArrow}
              alt="img"
              className="scroll-down-arrow-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHeadinSection;
