import React from "react";
import {
  ServeQuality,
  OfferServices,
  WorkMethod,
  FreelanicngSection,
} from "../components/pagesExport";
const Services = () => {
  return (
    <>
      <main className="theme-background-second-layer d-flex-direction">
        <ServeQuality />
        <OfferServices />
        <WorkMethod />
        <FreelanicngSection />
      </main>
    </>
  );
};

export default Services;
