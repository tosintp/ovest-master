import React from "react";
import "./withdrawal.css";
import savesticon1 from "../../../../Assets/savesticon.svg";

const WithdrawalMethod = ({ setStage1 }) => {
  return (
    <div>
      <div className="WithdrawalMethod">
        <h5>Withdraw</h5>
        <p>Where would you like to withdraw money to?</p>
      </div>

      <div className="withdraw-method">
        <div className="savestplan" onClick={() => setStage1(1)}>
          <img src={savesticon1} alt="saves-icon" />
          <p className='withdrawplan-p'>My Savest Account</p>
        </div>
        <div className="investplan" onClick={() => setStage1(1)}>
          <img src={savesticon1} alt="saves-icon" />
          <p className='withdrawplan-p'>My Savest Account</p>
        </div>
        <div className="bankplan" onClick={() => setStage1(1)}>
          <img src={savesticon1} alt="saves-icon" />
          <p className='withdrawplan-p'>My Savest Account</p>
        </div>
        <div className="transferplan" onClick={() => setStage1(1)}>
          <img src={savesticon1} alt="saves-icon" />
          <p className='withdrawplan-p'>My Savest Account</p>
        </div>
      </div>

      <div className="fundmethodnotification">
        <p>
          Kindly note that your withdrawal is made by your deposit/investment
          method
        </p>
      </div>
    </div>
  );
};

export default WithdrawalMethod;
