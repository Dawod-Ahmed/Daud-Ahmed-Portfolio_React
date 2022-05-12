import React from "react";
import { FreelancingImage } from "../../../assets/assets";
const Freelancing = () => {
  return (
    <>
      <section className="freelancing-section-parent">
        <div className="freelancing-left-content">
          <h1 className="heading  freelancing-heading">
            <span className="heading-first freelancing-heading-one">
              Hire Me for
            </span>
            <br />
            <span className="heading-second freelancing-heading-two">
              Freelancing
            </span>
          </h1>
          <p className="general-text freelancing-para pt-3 pb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the 1500s, when an unknown printer
            took..
          </p>
          <button className="btn freelancin-btn">Contact Me</button>
        </div>
        <div className="freelancing-right-img">
          <img src={FreelancingImage} alt="img" className="freelancing-img" />
        </div>
      </section>
    </>
  );
};

export default Freelancing;
