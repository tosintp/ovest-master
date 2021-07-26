import React from "react";
import faqsImage from "../Assets/faqsimage.svg";
import "./General.css";

const General = () => {
  return (
    <div className="General-page">
      <div className="General-section">
        <div>
          <h1>General</h1>
        </div>
        <div>
          <div className="General-background">
            <p>What is OVest ? </p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
          <div className="General-background-one">
            <p>Why should I invest with OVest ? </p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
          <div className="General-background-one">
            <p>Is the business duly registered? </p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
          <div className="General-background-one">
            <p>How are you able to offer higher returns?</p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
