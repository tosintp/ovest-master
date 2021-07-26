import React from "react";
import faqsImage from "../Assets/faqsimage.svg";

const FeesCharges = () => {
  return (
    <div className="General-page">
      <div className="General-section">
        <h1>
          Fees &  Charges
        </h1>
        <div className="General-background">
          <p>What is OVest ? </p>
          <div>
            <img src={faqsImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesCharges;
