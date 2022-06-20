import { Footer, Header } from "../pagesExport";
  
import React from "react";

const WebLayout = ({ children }) => {
  return (
    <div>
{/* <ThemeFirstLayer> */}
      <Header />
      {children}
      <Footer />
      {/* </ThemeFirstLayer> */}
    </div>
  );
};
export default WebLayout;
