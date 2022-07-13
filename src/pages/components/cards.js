import React from "react";

const card = (props) => {
  const { className, cardImageClassname, title, title1, para, projects } =
    props;
  return (
    <div
      className={`${className} `}
    >
      <div className={`card-img ${cardImageClassname}`}></div>
      <div className="card-img-underline mx-auto mt-xl-3 my-3 my-sm-3 my-md-4 "></div>
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
