import React from "react";

const TestimonialComp = (props) => {
  const {
    personImage,
    commaTop,
    fullStar,
    // halfStart70,
    rewiewStarValue,
    rewiewDetail,
    personName,
    personCompany,
    commaBottom,
  } = props;
  return (
    <>
      <img
        src={personImage}
        className="testimonial-image d-block w-100 mx-auto mx-sm-0"
        alt="img"
      />
      <div className="carousel-caption d-none d-md-block ">
        <img src={commaTop} alt="img" className="commaUp comma" />
        <div className="star-parent d-flex py-3">
          <img src={fullStar} alt="img" className="star pr-2" />
          <img src={fullStar} alt="img" className="star pr-2" />
          <img src={fullStar} alt="img" className="star pr-2" />
          <img src={fullStar} alt="img" className="star pr-2" />
          <img src={fullStar} alt="img" className="star pr-2" />
          <span className="mx-1 reviewStars">{rewiewStarValue}</span>
        </div>
        <p className="carousel-heading ">{rewiewDetail}</p>
        <p className="carousel-paragraph testimonial-personName mb-0">
          {personName}
        </p>
        <p className="carousel-paragraph">
          {personCompany}
          <img
            src={commaBottom}
            alt="img"
            className="mx-3 mt-3 commaDown comma"
          />
        </p>
      </div>
    </>
  );
};

export default TestimonialComp;
