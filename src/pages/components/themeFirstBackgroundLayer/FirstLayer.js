import React from "react";
import {
  TopRight,
  TopLeft,
  MidLeft,
  MidRight,
  BottomLeft,
  BottomRight,
} from "../../../assets/assets";

import ShapeImgage from "./shapesImages";

const FirstLayer = () => {
  return (
    <>
     
        <div className="theme-background-first-layer    position-fixed  ">
          
            <ShapeImgage
              className="shape-TopRight position-absolute shape"
              image={TopRight}
            />
            {/* <img
              src={TopRight}
              alt="img"
              className="shape-TopRight position-absolute shape"
            /> */}
         
            <ShapeImgage
              className="shape-TopLeft position-absolute shape"
              image={TopLeft}
            />
            {/* <img
              src={TopLeft}
              alt="img"
              className="shape-TopLeft position-absolute shape"
            />
         */}
          <ShapeImgage
            className="shape-MidLeft position-absolute shape"
            image={MidLeft}
          />
          <ShapeImgage
            className="shape-MidRight position-absolute shape"
            image={MidRight}
          />
          <ShapeImgage
            className="shape-BottomLeft position-absolute shape"
            image={BottomLeft}
          />
          <ShapeImgage
            className="shape-BottomRight position-absolute shape"
            image={BottomRight}
          />
        </div>
       

      {/* <div className="page-hider-onScroll theme-background-second-layer py-5  position-fixed "></div> */}
    </>
  );
};

export default FirstLayer;
