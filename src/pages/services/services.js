import React, { useEffect } from "react";
import {
  ServeQuality,
  OfferServices,
  WorkMethod,
  FreelanicngSection,
} from "../components/pagesExport";
const Services = () => {
  useEffect(() => {
    document.title = "Services | Dawood Ahmed";
  }, []);

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
