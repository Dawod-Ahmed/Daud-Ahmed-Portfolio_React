import React from "react";

const SkillsIcnos = (props) => {
  const { image, className, skillName,KeyIndex } = props;
  return (
    <>
      <div className="skill-img-parent  p-2 p-sm-3 p-md-4  p-xl-5 col-4   col-md-3" key={KeyIndex}>

        <div className="skills-img-div show-tooltip" >
          <div className="bg-gradient-color-hidder "></div>
          <div className="tooltips">
            <h3>Lorem Ipsum</h3>
            <p>Dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <img
            src={image}
            alt="img"
            className={`${className} skill-img  show-tooltip`}
          />
        </div>
        <div className="skill-name pt-3"> {skillName}</div>
       </div>
    </>
  );
};

export default SkillsIcnos;
// Adobe XD is a vector-based software that can be used for designing anything from smartwatches to fully-fledged mobile and web applications.