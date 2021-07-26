import React from "react";
import "./SavestFlexible.css";
import backtick from "../../../../../assets/backtick.svg";

const InvestNow = ({ setMenu }) => {
  return (
    <div className="startinvestment-body">
      <div className="startinvestment-main">
        <div className="confirminvestment-main">
          <h5 className="create-flexible-h5"> Save Now</h5>
          <p className="create-flexible-p">Choose Payment Method</p>
        </div>
        <div className="silverplan">
          <p className="fundwith-header">Fund With</p>
          <hr className="hr" />
          <div className="silverplan-flex">
            <div className="ovest-wallet">
              <p className="ovestwallet-main">Ovest Wallet</p>
              <div className="savestflexible-balance">
                {/* <p className="save-now-balance mt-3">Balance: N0</p> */}
                <p className="save-now-with-balance mt-3">
                  Balance: N20,000,000
                </p>
                <p
                  onClick={() => setMenu(5)}
                  className="save-now-change-payment"
                >
                  Change this{" "}
                  <span>
                    <img
                      src={backtick}
                      alt=""
                      className="ml-2"
                      onClick={() => setMenu(4)}
                    />
                  </span>{" "}
                </p>
              </div>
              {/* <p className="funds-p mt-5">
                Insufficient funds. <span>Fund wallet</span>
              </p> */}
            </div>
          </div>
        </div>
        <div className="note-main p-4">
          <p className="funds-deduction">
            Funds will be deducted automatically from your available payment
            method(s) on OVest.
          </p>
        </div>
        <button onClick={() => setMenu(6)} className="savest-button">
          Save now
        </button>
        {/* <button className="claim-property">Save N500</button> */}
      </div>
    </div>
  );
};

export default InvestNow;
