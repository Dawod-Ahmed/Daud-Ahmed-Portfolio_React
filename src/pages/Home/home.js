import React, { useEffect } from "react";
import {
  HeroSection,
  ShortIntroSection,
  HomeCardsSec,
  TestimonialsSec,
} from "../components/pagesExport";
// import { Fade } from "react-reveal";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Dawood Ahmed";
  }, []);

  return (
    <>
      {/* <Fade> */}
        <main className="w-100 d-flex-direction  ">
          <HeroSection />
          <ShortIntroSection />
          <HomeCardsSec />

//          <TestimonialsSec />
        </main>
      {/* </Fade> */}
    </>
  );
};
export default Home;
