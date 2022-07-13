import React from "react";
import { AboutDaud, AboutImageShadow } from "../../../assets/assets";
import {Link} from 'react-router-dom'
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { AboutBackImg } from "../../../assets/assets";


const AboutMe = () => {
  return (
    <>
      <section className="about-me-section d-flex flex-column flex-lg-row align-items-center justify-content-between ali position-relative py-5">
      <img
          src={AboutBackImg}
          alt="img"
          className="position-absolute aboutme-background-text mx-auto"
        />
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
        <div className="about-right-part px-sm-4 px-md-5">
          <h1 className="about-heading">
            <span className=" heading-first">About</span>
            <span className=" heading-second"> me</span>
          </h1>
          <p className="about-para general-text">
            I started my software development journey at the start of 2018. During this period, I spent massive time on JavaScript and its related tools and technologies and primarily in real-time industry work experience to learn and develop web development projects.

            <br />    <br /> 
           I am a Full-stack web developer and web designer with a Specialization in front-end development. I like to create a modern, fully responsive, clean UI interface, maintainable code, and bugs-free website and web application with React.js, Gatsby.js, Next.js, Html 5, CSS 3, JavaScript, Bootstrap, and many other helpful web technologies.
          </p>
          <Link to="" className="cv-btn btn resume-btn">Resume</Link>
        </div>
        
      </section>
    </>
  );
};

export default AboutMe;
