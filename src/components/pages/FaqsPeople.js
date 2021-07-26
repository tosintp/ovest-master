import React from "react";
import faqsImage from "../Assets/faqsimage.svg";


const FaqsPeople = () => {
  return (
    <div className="General-page">
      <div className="General-section">
        <h1>Our People</h1>
        <div>
          <div className="General-background">
            <p>Who is behind OVest?</p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsPeople;
