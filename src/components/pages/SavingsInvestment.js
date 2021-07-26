import React from "react";
import faqsImage from "../Assets/faqsimage.svg";

const SavingsInvestment = () => {
  return (
    <div className="General-page">
      <div className="General-section mb-5">
        <h1>Savings & Investment</h1>
        <div>
          <div className="General-background">
            <p>How much can I invest on OVest?</p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>

          <div className="General-background-one">
            <p>I’m ready, how do I invest? </p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
          <div className="General-background-one">
            <p>Can I have multiple accounts?</p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
          <div className="General-background-one">
            <p>Can I invest if I’m outside Nigeria?</p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
          <div className="General-background-one">
            <p>What rate of return do I earn on my capital?</p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
          <div className="General-background-one">
            <p>How do my earnings accumulate on OVest?</p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
          <div className="General-background-one">
            <p>What does “working days” mean and how is it calculated?</p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsInvestment;
