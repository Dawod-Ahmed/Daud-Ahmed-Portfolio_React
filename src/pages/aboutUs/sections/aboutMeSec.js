import React from "react";
import { AboutDaud, AboutImageShadow } from "../../../assets/assets";
import {Link} from 'react-router-dom'
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";


const AboutMe = () => {
  return (
    <>
      <section className="about-me-section d-flex justify-content-between ali position-relative py-5">
      <MouseParallaxContainer
 
 className="parallax"
 containerStyles={{
   width: "100%",
  overflow:"visible",
   gridTemplateColumns: "auto auto auto auto auto",
 }}
 resetOnLeave
>
 <MouseParallaxChild
   factorX={0.06}
   factorY={0.06}
   updateStyles={{
    
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     width: "auto",
     height: "100%",
   }}
 >
        <div className="about-left-img-part">
          <img src={AboutDaud} alt="" className="about-self-img" />
          <img
            src={AboutImageShadow}
            alt=""
            className="about-shadow-image ml-5"
          />
        </div>
               
</MouseParallaxChild>
        </MouseParallaxContainer>
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
          <Link to="" className="cv-btn btn resume-btn">Resume</Link>
        </div>
        
      </section>
    </>
  );
};

export default AboutMe;
