import React from "react";
// import Navbar from "../components/Navbar";
import Home from "../components/pages/Home";
// import FooterContainer from "../components/pages/FooterContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "../components/pages/Services";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
import Invest from "../components/pages/Invest";
import SignIn from "../components/pages/signin/SignIn";
import EmailVerification from "../components/pages/signup-verify/EmailVerification";
import SignUp from "../components/pages/signup/SignUp";

import Marketing from "../components/pages/Marketing";
import Consulting from "../components/pages/Consulting";
// import Founder from "../components/pages/Founder";

import Dashboard from "../components/pages/dashboard/index";
import ForgetPassword from "../components/pages/forgetpassword/ForgetPassword";
import ResetPassword from "../components/pages/forgetpassword/RessetPassword";
import Faqs from "./../components/pages/Faqs";
import ErrPage from "../components/404Page/404Page";

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Invest" component={Invest} />
        {/* <Route path="/sign-up" component={SignUp} /> */}
        <Route path="/marketing" component={Marketing} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/consulting" component={Consulting} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/faqs" component={Faqs} />

        <Route path="/signupverify" component={EmailVerification} />
        <Route path="/forgetpassword" component={ForgetPassword} />
        <Route path="/resetpassword" component={ResetPassword} />

        <Route path="/signup" component={SignUp} />
        <Route>
          <ErrPage />
        </Route>
        {/* <Route path="/founder" component={Founder} /> */}
      </Switch>
      {/* <FooterContainer /> */}
    </Router>
  );
};

export default AppRoute;
