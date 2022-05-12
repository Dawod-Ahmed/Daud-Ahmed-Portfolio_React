import React from "react";
import { AboutDaud, AboutImageShadow,AboutBackImg } from "../../../assets/assets";
const AboutMe = () => {
  return (
    <>
      <section className="about-me-section d-flex justify-content-between ali position-relative">
        <div className="about-left-img-part">
          <img src={AboutDaud} alt="" className="about-self-img" />
          <img
            src={AboutImageShadow}
            alt=""
            className="about-shadow-image ml-5"
          />
        </div>
        <div className="about-right-part-part">
          <h1 className="about-heading">
            <span className=" heading-first">About</span>
            <span className=" heading-second"> me</span>
          </h1>
          <p className="about-para general-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim
            architecto illo repellat officia nemo ipsam dolore rerum pariatur
            ducimus cumque dicta odit nam earum fuga magni quaerat, quas
            reiciendis?
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            facilis dolorem, omnis doloribus ea dolor, numquam quo reiciendis
            temporibus harum fuga consectetur dolore adipisci. Maiores
            architecto consequuntur officia nihil ratione?
          </p>
          <button className="cv-btn btn">Resume</button>
        </div>
        
      </section>
    </>
  );
};

export default AboutMe;
