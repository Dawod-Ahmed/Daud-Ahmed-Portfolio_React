import React from "react";
import AccordionData from "./data";
import { FaqsDesktopView, FaqsMobileView } from "../../../assets/assets";
import { Accordion } from "../../components/pagesExport";
const Faqs = () => {
  return (
    <>
      <section className="accordion-section mb-5 pb-5">
        <div className="faq-heading-parent pb-5 ">
          <h1 className="faq-headingg">
            <span className=" heading-first">FAQ</span>
            <span className=" heading-second">'S</span>
          </h1>
          <p className="faqs-para general-text text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim
            architecto illo repellat officia nemo ipsam dolore rerum pariatur
            ducimus cumque dicta odit nam earum fuga magni quaerat, quas
            reiciendis?
          </p>
        </div>

        <div className="faq-accordion-image-parent w-100">
          <img
            src={FaqsDesktopView}
            alt="img"
            className="faqs-desktopView-img faqs-img d-none d-lg-block "
          />
          <img
            src={FaqsMobileView}
            alt="img"
            className="faqs-mobileview-img faqs-img d-lg-none"
          />
          <div
            className="accordion-parent accordion"
            id="accordionPanelsStayOpenExample"
          >
            {AccordionData.map((value, index) => {
              return (
                <>
                  <Accordion
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
