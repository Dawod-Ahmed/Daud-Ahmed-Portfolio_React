import React from "react";
import { WorkMehtodArrow } from "../../assets/assets";
const HandleProjectComp = (props) => {
  const { className,phaseTitle1, phaseTitle2, phaseDetail } = props;
  return (
    <div className="project-cycle-parent">
      <div className={`project-cycle-img cycle-img ${className}`}></div>
      <p className="project-cycle-heading text-center">
        <div>{phaseTitle1}</div>
        <div>{phaseTitle2}</div>
      </p>
      <p className="project-cycle-para text-center">{phaseDetail}</p>
      <img src={WorkMehtodArrow} className="project-cycle-arrow" alt="" />
    </div>
  );
};

export default HandleProjectComp;
