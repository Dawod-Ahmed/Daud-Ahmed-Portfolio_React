import React, { useEffect } from "react";
import {
  HeroSection,
  ShortIntroSection,
  HomeCardsSec,
  TestimonialsSec,
} from "../components/pagesExport";

const Home = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <>
      <main className="theme-background-second-layer d-flex-direction  ">
        <HeroSection />
        <ShortIntroSection />
        <HomeCardsSec />
        {/* FDFDFD */}
        {/* <TestimonialsSec /> */}
      </main>
    </>
  );
};

export default Home;
