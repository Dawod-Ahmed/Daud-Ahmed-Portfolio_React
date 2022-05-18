import React from "react";

const ShortIntro = () => {
  const changeHrefLink =()=>{
    window.location.href = "/contact";
  }

  return (
    <>
      <section className="h-second-sec d-flex justify-content-between position-relative">
        <div className="h-sec-left-part d-flex flex-column align-items-start justify-content-between">
          <div className="query-txt-parent">
            <p className="problem-solver-txt mt-1 mb-0">
              {`</>`} PROBLEM SOVER
            </p>
            <p className="query-type-text">
              Any Type Of Query <br />& Discussion.
            </p>
          </div>
          <button className="contact-btn btn mb-3" onClick={changeHrefLink}>Faq's & Contact</button>
        </div>
        <div className="h-sec-right-part d-flex flex-column justify-content-between">
          <p className="short-about-para">
            I enjoy solving problems with clean scalable solutions. I have a
            genuine passion for inspiring design.
          </p>
          <div className="experience-parent d-flex justify-content-between ">
            <div className="exp1 d-flex justify-content-between align-items-center">
              <span className="exp-digit">2.5+</span>
              <span className="exp-txt">
                Years of <br />
                experience.
              </span>
            </div>
            <div className="exp2 d-flex justify-content-between align-items-center ">
              <span className="exp-digit">5+</span>
              <span className="exp-txt">
                Years of <br />
                experience.
              </span>
            </div>
          </div>
        </div>
        <div className="background-text position-absolute home-background-text">
          Experiance
        </div>
      </section>
    </>
  );
};

export default ShortIntro;
