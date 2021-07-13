import React from 'react'
import Mark from "../../assets/mark.svg";
import Arrowright from "../../assets/Arrowright.svg";


const Verfication = () => {
  return (
    <div>
      <div className="Account-section">
        <div style={{ display: "flex" }}>
          <div>
            <img src={Mark} alt="" className="imageAccount" />
          </div>
          <div>
            <p className="Account-text">Verification</p>
            <p className="account-paragraph">Verify your identity</p>
          </div>
        </div>
        <div>
          <img src={Arrowright} alt="" className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Verfication
