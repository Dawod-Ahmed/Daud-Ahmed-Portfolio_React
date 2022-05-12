import React from "react";
import {
  Home,
  ThemeFirstLayer,
  AboutMe,
  Portfolio,
  Services,
  ContactPage,
} from "./components/pagesExport";

const Pages = () => {
  return (
    <>
      <ThemeFirstLayer />+
      <div className="PagesParent ">
        {/* <h1>Pages</h1> */}

        <Home />
        {/* <AboutMe /> */}
        {/* <Portfolio /> */}
        {/* <Services /> */}
        {/* <ContactPage /> */}
      </div>
    </>
  );
};

export default Pages;
