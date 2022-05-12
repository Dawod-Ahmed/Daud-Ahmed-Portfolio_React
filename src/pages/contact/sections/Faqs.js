import React from "react";
import AccordionData from "./data";
import { FaqsDesktopView, FaqsMobileView } from "../../../assets/assets";
import { Accordion } from "../../components/pagesExport";
const Faqs = () => {
  return (
    <>
      <section className="accordion-section my-5 py-5">
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
        <div className="accordion-parent accordion" id="accordionExample">
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
      </section>
    </>
  );
};

export default Faqs;
