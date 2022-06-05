import React from "react";

const ProjectComponents = (props) => {
  const { image, projectTitle1, projectTitle2, projectDetails, leftImage } =
    props;
  return (
    <>
      {console.log(leftImage)}
      {leftImage ? (
        <>
          {" "}
          <div className="project-parent py-5">
            <img src={image} alt="" className="project-img" />
            <div className="projet-detail-parent">
              <h2 className="project-name">
                <span className="heading-first project-name-first">
                  {`${projectTitle1}`}
                </span>
                <span className="heading-second project-name-second">
                  {` ${projectTitle2}`}
                </span>
              </h2>
              <p className="project-details mt-2">{projectDetails}</p>
              <div className="btn-parent mt-3">
                <a href="" className="btn btn-explore">Expolore</a>
                <a href="" className="btn  btn-github mx-4">Github code</a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="project-parent py-5">
            <div className="projet-detail-parent">
              <h2 className="project-name">
                <span className="heading-first project-name-first">
                  {`${projectTitle1}`}
                </span>
                <span className="heading-second project-name-second">
                  {` ${projectTitle2}`}
                </span>
              </h2>
              <p className="project-details mt-2">{projectDetails}</p>
              <div className="btn-parent mt-3">
                <a href="" className="btn btn-explore">Expolore</a>
                <a href="" className="btn  btn-github mx-4">Github code</a>
              </div>
            </div>
            <img src={image} alt="" className="project-img" />
          </div>
        </>
      )}
    </>
  );
};

export default ProjectComponents;
