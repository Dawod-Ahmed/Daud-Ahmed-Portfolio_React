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
  // GHFGH
  return (
    <>
      <main className="theme-background-second-layer d-flex-direction pb-0">
        <ServeQuality />
        <OfferServices />
        <WorkMethod />
        <FreelanicngSection />
      </main>
    </>
  );
};

export default Services;
