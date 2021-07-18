import React, { useState, useEffect } from "react";
import cardicon from "../../../../Assets/cardicon.svg";
import tranfericon from "../../../../Assets/bankicon.svg";
import nebbixicon from "../../../../Assets/nebbixicon.svg";
import nebbixiconactive from "../../../../Assets/activecrypto-icon.svg";
import { useUser } from "../../../../../hooks/use-user";

const FundWalletMethod = ({ setStage }) => {
  const user = useUser();
  const [isNotNigerian, setIsNotNigerian] = useState(false);

  useEffect(() => {
    if (user) {
      setIsNotNigerian(user.country !== "Nigeria");
    }
  }, [user]);

  return (
    <div>
      <div className="fundovestwallet">
        <h5>Fund OVest Wallet</h5>
        <p>Select your preferred method to fund your wallet.</p>
      </div>

      <div className="funding-method">
        <div
          className="banktranfer active-fundwallet-method"
          onClick={() => setStage(1)}
        >
          <img src={tranfericon} alt="tranfer-icon" />
          <p>By Bank Transfer</p>
        </div>
        <div
          className="cardtranfer active-fundwallet-method"
          onClick={() => setStage(5)}
        >
          <img src={cardicon} alt=" card icon" />
          <p>By Card</p>
        </div>
        <div
          className={`cryptotranfer ${
            isNotNigerian ? "active-fundwallet-method" : ""
          }`}
          onClick={() => setStage()}
        >
          <img
            src={isNotNigerian ? nebbixiconactive : nebbixicon}
            alt=" nebbix icon"
          />
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
