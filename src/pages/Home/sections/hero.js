import React, { useEffect, useState } from "react";
import { DaudImg, homeSrcolldownButton } from "../../../assets/assets";
import { Link } from "react-router-dom";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
const HeroSection = () => {
  const [hideWelcome, setHideWelcome] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setHideWelcome("d-none");
    }, 6000);
    setInterval(() => {
      clearInterval(interval);
    }, 6000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-section d-flex justify-content-center pb-5">
        <div className="hero-two-parts-parent w-100 ">
          <div className="left-content-part ">
            <span className={`welcome-txt ${hideWelcome}`}>Welcome</span>
            <h1 className="dev-name">
              <span className="heading-first">I'm Dawood Ahmed,</span>
              <br />
              <span className="heading-second position-relative">
                A&nbsp;
                <span className="hero-text hero-text1 heading-second ">
                  Web Developer
                </span>
                <span className="hero-text hero-text2 heading-second ">
                  UI/UX Designer
                </span>
                <span className="hero-text hero-text3 heading-second ">
                  Freelancer
                </span>
              </span>
            </h1>
            <p className="dev-intro-txt general-text  mt-2 mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>
            <div className="btns-group border-0" aria-label="Basic example ">
              <Link to="./projects" type="button" className="btn btn-project ">
                Projects
              </Link>
              {/* <button to="" type="button" className="btn btn-play-video mx-4">
              Play <div className="btn-play-icon "></div>
            </button> */}
            </div>
          </div>
          <MouseParallaxContainer
            className="parallax"
            containerStyles={{
              width: "100%",
              overflow: "visible",
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
              <div className="right-img-part img-background">
                <img src={DaudImg} alt="img" className="dev-img" />
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className="scroll-down-element">
          <span className="hero-scroll-first-line">
            Want to know more about me?{" "}
          </span>
          <span className="hero-scroll-second-line">Scroll Down</span>
          <img
            src={homeSrcolldownButton}
            alt=""
            className="hero-scroll-down-img scroll-down-arrow-img"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
