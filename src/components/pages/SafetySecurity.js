import React from "react";
import faqsImage from "../Assets/faqsimage.svg";

const SafetySecurity = () => {
  return (
    <div className="General-page">
      <div className="General-section">
        <h1>Safety & Security</h1>
        <div>
          <div className="General-background">
            <p>Is my money secured with OVest? </p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
          <div className="General-background-one">
            <p>What are the risk involved in the investment platform? </p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySecurity;
