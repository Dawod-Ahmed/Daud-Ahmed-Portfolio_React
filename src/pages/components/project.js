import React from "react";

const ProjectComponents = (props) => {
  const { image, projectTitle1, projectTitle2, projectDetails, leftImage } =
    props;
  return (
    <>
      {/* {console.log(leftImage)} */}
      {leftImage ? (
        <>
          {" "}
          <div className="project-parent py-5">
            <a href="" className="project-img-parent">
              <img src={image} alt="" className="project-img img-fluid" />

              <h1 className="project-img-text text-center fw-bold text-white position-relative ">
                {projectTitle1}&nbsp;{projectTitle2}
                <br />
                <h3 clasName="fw-bold"> Preview Live</h3>
              </h1>
            </a>
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
                <a href="www.github.com" className="btn btn-explore">
                  Expolore
                </a>
                <a href="www.github.com" className="btn  btn-github mx-4">
                  Github code
                </a>
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
                <a href="www.github.com" className="btn btn-explore">
                  Expolore
                </a>
                <a href="www.github.com" className="btn  btn-github mx-4">
                  Github code
                </a>
              </div>
            </div>
            <a href="" className="project-img-parent text-decoration-none">
              <img src={image} alt="" className="project-img img-fluid" />

              <h1 className="project-img-text text-center fw-bold text-white position-relative">
                {projectTitle1}&nbsp;{projectTitle2}
                <br />
                <h3 clasName="fw-bold"> Preview Live</h3>

              </h1>
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectComponents;
