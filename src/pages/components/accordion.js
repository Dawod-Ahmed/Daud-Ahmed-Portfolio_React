import React, { useState } from "react";

const Accordion = ({ heading, para1, para2, number }) => {
  const [isActive, setisActive] = useState(false);
  console.log(isActive);
  return (
    <>
      <div className="w-100" id="accordionExample">
        <div className="accordion-item">
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
              {para1}
              <br />
              {para2}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="accordion" id="accordionExample"> */}
      {/* <div class="accordion-item">
        <h2 class="accordion-header" id={`heading${number}`}>
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${number}`}
            aria-expanded="true"
            aria-controls={`#collapse${number}`}
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
          id={`#collapse${number}`}
          class="accordion-collapse collapse"
          aria-labelledby={`heading${number}`}
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {para1}
            <br />
            {para2}
          </div>
        </div>
      </div> */}
      {/* </div> */}
      {/* <div className="accordion mb-4" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id={`heading${number}  `}>
            <button
              class={`accordion-button collapsed`}
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
            class="accordion-collapse collapse"
            aria-labelledby={`heading${number}`}
          >
            <div class="accordion-body">
              {para1}
              <br />
              {para2}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Accordion;
