import React from "react";

const TestimonialComp = (props) => {
  const {
    index,
    personImage,
    commaTop,
    fullStar,
    halfStart70,
    rewiewStarValue,
    rewiewDetail,
    personName,
    personCompany,
    commaBottom,
  } = props;
  return (
    <div class={`carousel-item ${index === 0 ? "active" : ""}`}>
      <img
        src={personImage}
        class="testimonial-image d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <img src={commaTop} alt="img" className="commaUp comma" />
        <div className="star-parent d-flex py-3">
          <img src={fullStar} alt="img" className="star pr-2" />
          <img src={fullStar} alt="img" className="star pr-2" />
          <img src={fullStar} alt="img" className="star pr-2" />
          <img src={fullStar} alt="img" className="star pr-2" />
          <img src={fullStar} alt="img" className="star pr-2" />
          <span className='mx-1 reviewStars'>{rewiewStarValue}</span>
        </div>
        <p className="carousel-heading ">{rewiewDetail}</p>
        <p className="carousel-paragraph testimonial-personName mb-0">
          {personName}
        </p>
        <p className="carousel-paragraph">
          {personCompany}
          <img src={commaBottom} alt="img" className="mx-2 commaDown comma" />
        </p>
      </div>
    </div>
  );
};

export default TestimonialComp;
