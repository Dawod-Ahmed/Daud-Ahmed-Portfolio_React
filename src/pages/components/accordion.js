import React, { useState } from "react";

const Accordion = ({ heading, para1, para2, number }) => {
  const [isActive, setisActive] = useState(false);
  console.log(isActive);
  return (
    <>
      <div className="accordion-item w-100 mb-3">
        <h2 className="accordion-header" id={`heading${number}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${number}`}
            aria-expanded="false"
            aria-controls={`collapse${number}`}
            onClick={() => setisActive(!isActive)}
          >
            <span className="d-inline-block">{heading}</span>
            <div className="expander-parent d-flex flex-column justify-content-center align-items-center ">
              <div className="expanderX expander"></div>
              <div
                className={`expanderY expander  ${
                  isActive ? "activeAccordion" : ""
                }`}
              ></div>
            </div>
          </button>
        </h2>
        <div
          id={`collapse${number}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${number}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p className="accordion-paragraph mb-3">{para1}</p>

            <p className="accordion-paragraph">{para2}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
