import React from "react";
import { DaudImg, homeSrcolldownButton } from "../../../assets/assets";
const hero = () => {
  return (
    <section className="hero-section d-flex justify-content-center">
      <div className="hero-two-parts-parent w-100 ">
        <div className="left-content-part ">
          <span className="welcome-txt">welcome</span>
          <h1 className="dev-name">
            <span className="heading-first">I'm Dawood Ahmed,</span>
            <br />
            <span className="heading-second">Web Developer</span>
          </h1>
          <p className="dev-intro-txt general-text  mt-2 mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took..
          </p>
          <div class="btns-group border-0" aria-label="Basic example ">
            <button type="button" class="btn btn-project ">
              Projects
            </button>
            <button type="button" class="btn btn-play-video mx-4">
              Play <div className="btn-play-icon "></div>
            </button>
          </div>
        </div>

        <div className="right-img-part img-background">
          <img src={DaudImg} alt="img" className="dev-img" />
        </div>
      </div>
      <div className="scroll-down-element">
        <span className="hero-scroll-first-line">
          Want to know more about me?{" "}
        </span>
        <span className="hero-scroll-second-line">Scroll Down</span>
        <img
          src={homeSrcolldownButton}
          alt=""
          className="hero-scroll-down-img"
        />
      </div>
    </section>
  );
};

export default hero;
