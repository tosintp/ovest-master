import React from "react";

const SavingsSummary = ({ setMenu }) => {
  return (
    <div className="create-flexible-plan">
      <div className="create-flexible-plan-main">
        <div className="create-flexible-header">
          <h5 className="create-flexible-h5">Confirm Details</h5>
        </div>
        <div className="silverplan">
          <h5 className="silverplan-header">Withdraw Summary</h5>
          <div className="silverplan-flex">
            <div className="investamount">
              <p className="flex-main">Amount Saved:</p>
              <p className="pricetag">N50,000.00</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Interest Earned:</p>
              <p className="flex-mini">N500.00</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Amount to Withdraw</p>
              <p className="flex-mini">N10,000</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Balance after Withdrawal:</p>
              <p className="flex-mini">N45,000</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Saving Frequency:</p>
              <p className="flex-mini">Weekly</p>
            </div>
            <div className="investamount">
              <p className="flex-mini">Completion Date:</p>
              <p className="pricetag-mini">25 Apr, 2021</p>
            </div>
          </div>
        </div>
        <button onClick={() => setMenu(2)} className="savest-button mb-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SavingsSummary;
