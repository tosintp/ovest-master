import React from "react";
import cardicon from "../../../../Assets/cardicon.svg";
import tranfericon from "../../../../Assets/bankicon.svg";
import nebbixicon from "../../../../Assets/nebbixicon.svg";

const FundWalletMethod = ({ setStage }) => {
  return (
    <div>
      <div className="fundovestwallet">
        <h5>Fund OVest Wallet</h5>
        <p>Select your preferred method to fund your wallet.</p>
      </div>

      <div className="funding-method">
        <div className="banktranfer" onClick={() => setStage(1)}>
          <img src={tranfericon} alt="tranfer-icon" />
          <p>By Bank Transfer</p>
        </div>
        <div className="cardtranfer" onClick={() => setStage(5)}>
          <img src={cardicon} alt=" card icon" />
          <p>By Card</p>
        </div>
        <div className="cryptotranfer" onClick={() => setStage()}>
          <img src={nebbixicon} alt=" nebbix icon" />
          <p>
            By Nebbix <br /> ( Cryptocurrency)
          </p>
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

export default FundWalletMethod;
