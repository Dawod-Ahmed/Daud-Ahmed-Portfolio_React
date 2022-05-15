import React from "react";
import "./styles/general/main.scss";
import {
  Home,
  ThemeFirstLayer,
  AboutMe,
  Portfolio,
  Services,
  ContactPage,
  Header,
} from "./pages/components/pagesExport";
import { Route, Switch, Redirect } from "react-router-dom";
const App = () => {
  return (
    <>
      <ThemeFirstLayer />
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <AboutMe /> */}
      {/* <Portfolio /> */}
      {/* <Services /> */}
      {/* <ContactPage /> */}

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/contact" component={ContactPage} />
        <Redirect exact to="/home" />
      </Switch>
    </>
  );
};

export default App;
