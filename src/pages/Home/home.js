import React from "react";
import {
  HeroSection,
  ShortIntroSection,
  HomeCardsSec,
  TestimonialsSec,
} from "../components/pagesExport";
 
const Home = () => {
  return (
    <>
      <main className="theme-background-second-layer d-flex-direction  ">
        <HeroSection />
        <ShortIntroSection />
        <HomeCardsSec />
        <TestimonialsSec />
       
      </main>
    </>
  );
};

export default Home;
