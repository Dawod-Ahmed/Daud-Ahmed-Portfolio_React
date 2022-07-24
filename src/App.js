import React, { useEffect, useState } from "react";
import "./styles/general/main.scss";
import {
  Home,
  ThemeFirstLayer,
  AboutMe,
  Portfolio,
  Services,
  ContactPage,
  // Layout,
  Header,
  Footer,
} from "./pages/components/pagesExport";

import { Route, Switch, Redirect } from "react-router-dom";
import Headroom from "react-headroom";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Bars } from "react-loader-spinner";
const App = () => {
  // const [hidePreloader, setHidePreloader] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setHidePreloader(false);
  //   }, 4000);
  //   setInterval(() => {
  //     clearInterval(interval);
  //   }, 4000);
  //   // return () => clearInterval(interval);
  // }, []);

  function getWindowWidth() {
    const innerWidth = window.innerWidth;
    return innerWidth;
  }

  const [headroom, setHeadroom] = useState(false);
  // const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
   
    function handleWindowResize() {
     // setWindowWidth(getWindowWidth());
        
      console.log("Testing", getWindowWidth());
         if (getWindowWidth() < 992) {
      setHeadroom(true);
    } else {
      setHeadroom(false);
    }

    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {/* <div class="btn btn-primary show-tooltip">Hover Me to Preview
        <div class="tooltips">
            <h3>Lorem Ipsum</h3>
            <p>Dolor sit amet, consectetur adipiscing elit.</p>
            
            
        </div>
    </div> */}
      {/* { hidePreloader ? <div className="preloader-parent  w-100 ">
        <img src={Logo} alt="img" className="preloader-logo mb-5 pb-4 " />
        <Bars
          type="Bars"
          height="100"
          width="50"
          color="#00da5d"
          ariaLabel="Loading"
        />
      </div> : <> */}

      <ThemeFirstLayer />
      {/* </MouseParallaxChild>
      </MouseParallaxContainer> */}
      {/* <Fade duration={4000} opposite collapse> */}
      <div className="pages-parent mx-auto bg-transparent">
        {headroom ? (
          <Headroom>
            <Header />
          </Headroom>
        ) : (
          <Header />
        )}
        {/* <Headroom>
          <Header />
        </Headroom> */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/projects" component={Portfolio} />
          <Route exact path="/contact" component={ContactPage} />
          <Redirect exact to="/home" />
        </Switch>
        <Footer />
      </div>
      {/* </Fade> */}

      {/* </>} */}
    </>
  );
};

export default App;
