import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/pages/Home";
import FooterContainer from "../components/pages/FooterContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "../components/pages/Services";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
import SignIn from "../components/pages/signin/SignIn";
import SignUp from "../components/pages/signup/SignUp";

import Marketing from "../components/pages/Marketing";
import Consulting from "../components/pages/Consulting";
import Founder from "../components/pages/Founder";

import Dashboard from "../components/pages/dashboard/index";
import { ProtectedRoute } from "./protectedRoute";

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        {/* <Route path="/sign-up" component={SignUp} /> */}
        <Route path="/marketing" component={Marketing} />
        <Route path="/consulting" component={Consulting} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/founder" component={Founder} /> */}
      </Switch>
      {/* <FooterContainer /> */}
    </Router>
  );
};

export default AppRoute;
