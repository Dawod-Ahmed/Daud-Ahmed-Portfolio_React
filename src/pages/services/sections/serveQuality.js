import React from "react";
import {
  reactJs,
  gatsbyjs,
  next,
  portfolioDownArrow,
  SelfServicesImage,
} from "../../../assets/assets";
const ServeQuality = () => {
  return (
    <>
      <section className="serve-qulaity-section">
        <div className="serve-quality-left-part mb-5">
          <img src={SelfServicesImage} alt="" className="self-services-image" />
          <div className="serve-quality-icons-parent">
            <img src={next} alt="" className="s-skill-icon s-next-icon" />
            <img src={reactJs} alt="" className="s-skill-icon s-react-icon" />
            <img src={gatsbyjs} alt="" className="s-skill-icon s-gatsby-icon" />
          </div>
        </div>
        <div className="serve-quality-part-parent ">
          <h1 className="heading my-5">
            <span className="heading-first">Experiance &</span>
            <br />
            <span className="heading-second">Education</span>
          </h1>
          <p className="general-text serve-quality-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto,
            ratione tempore blanditiis optio rem quae quam earum commodi, ipsam
            velit, maxime illum voluptate? Nisi, doloribus? At placeat culpa
            suscipit.
          </p>
          <img src={portfolioDownArrow} alt="" className="s-down-arrow" />
        </div>
      </section>
    </>
  );
};

export default ServeQuality;
