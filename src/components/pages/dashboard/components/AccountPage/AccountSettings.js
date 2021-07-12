import React from 'react'
import Account1 from "../../assets/account1.svg";
import Arrowright from "../../assets/Arrowright.svg";



const AccountSettings = () => {
  return (
    <div>
      <div className="Account-section">
        <div style={{ display: "flex" }}>
          <div>
            <img src={Account1} alt="" className="imageAccount" />
          </div>
          <div>
            <p className="Account-text">Account Settings</p>
            <p className="account-paragraph">Edit Profile</p>
          </div>
        </div>
        <div>
          <img src={Arrowright} alt="" className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default AccountSettings
