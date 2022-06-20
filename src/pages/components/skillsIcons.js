import React from "react";

const SkillsIcnos = (props) => {
  const { image, className, skillName,KeyIndex } = props;
  return (
    <>
      <div className="skill-img-parent  p-5 col-md-4 col-xl-3" key={KeyIndex}>

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
