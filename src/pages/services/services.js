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
      <main className="d-flex-direction pb-0 w-100">
        <ServeQuality/>
        <OfferServices />
        <WorkMethod />
        <FreelanicngSection />
      </main>
    </>
  );
};

export default Services;
