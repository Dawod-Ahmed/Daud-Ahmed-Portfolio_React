import React from "react";
import { FreelancingImage } from "../../../assets/assets";
import { Link } from "react-router-dom";

const Freelancing = () => {
  return (
    <>
      <section className="freelancing-section-parent mt-5">
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
          <Link to="/contact" className="btn freelancin-btn">
            Contact Me
          </Link>
        </div>
        <div className="freelancing-right-img">
          <img src={FreelancingImage} alt="img" className="freelancing-img" />
        </div>
      </section>
    </>
  );
};

export default Freelancing;
