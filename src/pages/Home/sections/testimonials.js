import React, { useState } from "react";
import {
  ReviewImage1,
  ReviewImage2,
  ReviewImage3,
  ReviewImage4,
  ReviewImage5,
  ReviewImage6,
  FullFillStar,
  HalfFillStar70,
  PreIcon,
  NextIcon,
  CommaTop,
  CommaDown,
} from "../../../assets/assets";
import { TestimonialComp } from "../../components/pagesExport";
const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage4,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage4,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage4,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage4,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage4,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage4,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
  ]);

  return (
    <>
      <section className="testimonials-section">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {testimonialData.map((value, index) => {
              return (
                <>
                  <TestimonialComp
                    index={index}
                    personImage={value.personImage}
                    commaTop={CommaTop}
                    fullStar={FullFillStar}
                    halfStart70={HalfFillStar70}
                    rewiewStarValue={value.rewiewStar}
                    rewiewDetail={value.rewiewDetail}
                    personName={value.personName}
                    personCompany={value.personCompany}
                    commaBottom={CommaDown}
                  />
                </>
              );
            })}
          </div>
          <div className="scroll-events-parent">
            <div class="carousel-indicators ">
              <button
                className="carosalBtn active"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                // class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                className="carosalBtn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                className="carosalBtn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                className="carosalBtn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                className="carosalBtn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                className="carosalBtn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <button
              class="carousel-control-prev  h-auto carousel-control-btn"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon "
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next  h-auto carousel-control-btn"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon "
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
