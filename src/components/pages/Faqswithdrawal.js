import React from "react";
import faqsImage from "../Assets/faqsimage.svg";
import "./General.css";

const Faqswithdrawal = () => {
  return (
    <div className="General-page">
      <div className="General-section">
        <h1>Withdrawals</h1>
        <div>
          <div className="General-background">
            <p>When can I withdraw my money?</p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
          <div className="General-background-one pb-5">
            <p>What are the withdrawal options?</p>
            <div>
              <img src={faqsImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqswithdrawal;
