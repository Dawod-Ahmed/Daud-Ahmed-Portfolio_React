import React from "react";

const card = (props) => {
  const { className, cardImageClassname, title, title1, para, projects } =
    props;
  return (
    <div
      className={`cards-parent ${className} d-flex flex-column justify-content-start  align-items-center my-3 mx-4`}
    >
      <div className={`card-img ${cardImageClassname}-img `}></div>
      <div className="card-img-underline mx-auto mt-xl-3 mb-xl-3 "></div>
      <h4 className={`cards-title pt-4 pb-2 text-center`}>
        {title}
        <br />
        {title1}
      </h4>
      <p className={`cards-para text-center mb-xl-5`}>{para}</p>
      <div className={`completed-projects  ${projects} mt-xl-5 `}>
        {projects}+Projects
      </div>
    </div>
  );
};

export default card;
