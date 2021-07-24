import React from "react";
import Referral from "../../assets/referral.svg";
import Arrowright from "../../assets/Arrowright.svg";
import { Link } from "react-router-dom";

const ReferralProgram = () => {
  return (
    <div>
      <Link to="/dashboard/referral">
        <div className="Account-section">
          <div style={{ display: "flex" }}>
            <div>
              <img src={Referral} alt="" className="imageAccount" />
            </div>
            <div>
              <p className="Account-text">Referral Program</p>
              <p className="account-paragraph">Refer a friend and earn</p>
            </div>
          </div>
          <div>
            <img src={Arrowright} alt="" className="arrow" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ReferralProgram;
