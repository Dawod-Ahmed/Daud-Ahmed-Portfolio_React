import React from "react";
import "./styles/general/main.scss";
import {
  Home,
  ThemeFirstLayer,
  AboutMe,
  Portfolio,
  Services,
  ContactPage,
  Layout,
  Header,
  Footer,
} from "./pages/components/pagesExport";
import {
  TopRight,
  TopLeft,
  MidLeft,
  MidRight,
  BottomLeft,
  BottomRight,
} from "./assets/assets";
import { Route, Switch, Redirect } from "react-router-dom";
const App = () => {
  return (
    <>
      <ThemeFirstLayer />
<div className="pages-parent">
      <Header />

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
    </>
  );
};

export default App;
