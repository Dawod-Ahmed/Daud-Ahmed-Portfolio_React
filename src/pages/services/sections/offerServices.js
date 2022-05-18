import React from "react";
import { CardComponent } from "../../components/pagesExport";
const offerServicesSection = () => {
  
const changeHrefLink =()=>{
  window.location.href = "/contact";
}

  return (
    <>
      <section className="serve-qulaity-section">
        <div className="offer-servcies-left-part ">
          <h1 className="heading my-5">
            <span className="heading-first">My Awesome</span>
            <br />
            <span className="heading-second">Services</span>
          </h1>
          <p className="general-text serve-quality-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the 1500s, when an unknown printer
            took..
          </p>
          <button className="btn" onClick={changeHrefLink}>Contact Me</button>
        </div>
        <div className="services-carsds-parent">
          <CardComponent
            className="services-card"
            cardImageClassname="bugs-fixer"
            title="Bugs"
            title1="Fixing"
            para="Lorem Ipsum is simply dummy of printing and typesetting industry Lorem Ipsum."
            projects="20"
          />
          <CardComponent
            className="services-card"
            cardImageClassname="ui-ux-design"
            title="UI/UX"
            title1="Design"
            para="Lorem Ipsum is simply dummy of printing and typesetting industry Lorem Ipsum."
            projects="20"
          />
          <CardComponent
            className="services-card"
            cardImageClassname="front-end-design"
            title="Front-End 
"
            title1="Development"
            para="Lorem Ipsum is simply dummy of printing and typesetting industry Lorem Ipsum."
            projects="20"
          />
          <CardComponent
            className="services-card"
            cardImageClassname="full-stack-design"
            title="Full-Stack"
            title1="Development"
            para="Lorem Ipsum is simply dummy of printing and typesetting industry Lorem Ipsum."
            projects="20"
          />
        </div>
      </section>
    </>
  );
};

export default offerServicesSection;
