import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/pages/footer";
// import Footer from "../components/pages/footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
