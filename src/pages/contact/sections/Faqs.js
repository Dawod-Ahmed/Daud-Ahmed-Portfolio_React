import React from "react";
import AccordionData from "./data";
import {
  FaqsDesktopView,
  FaqsMobileView,
  
} from "../../../assets/assets";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

import { Accordion } from "../../components/pagesExport";
const Faqs = () => {
  return (
    <>
      <section className="accordion-section  py-5">
        <div className="faq-heading-parent   ">
          <h1 className="faq-headingg">
            <span className=" heading-first">FAQ</span>
            <span className=" heading-second">'S</span>
          </h1>
          <p className="faqs-para general-text text-center">
            To save your valuable time I mentioned some frequently ask questions, let's check if you have one of these, otherwise contact me and as a full-time freelancer, I will reply to your query within the hour.
          </p>
        </div>

        <div className="faq-accordion-image-parent   w-100 flex-column flex-lg-row align-items-center align-items-lg-start">
          <MouseParallaxContainer
            className="parallax"
            containerStyles={{
              width: "auto",
              overflow: "visible",
              gridTemplateColumns: "auto auto auto auto auto",
            }}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.08}
              factorY={0.08}
              updateStyles={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
              }}
            >
              <img
                src={FaqsDesktopView}
                alt="img"
                className="faqs-desktopView-img faqs-img d-none d-lg-block "
              />
              <img
                src={FaqsMobileView}
                alt="img"
                className="faqs-mobileview-img faqs-img mb-5 d-lg-none"
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <div
            className="accordion-parent accordion"
            id="accordionPanelsStayOpenExample"
          >
            {AccordionData.map((value, index) => {
              return (
                <>
                  <Accordion
                 KeyIndex={index}
                    heading={value.heading}
                    para1={value.para1}
                    para2={value.para2}
                    number={value.number}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
