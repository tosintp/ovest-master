import React from "react";

const SavingsSummary = ({ setMenu }) => {
  return (
    <div className="create-flexible-plan">
      <div className="create-flexible-plan-main">
        <div className="create-flexible-header">
          <h5 className="create-flexible-h5">Saving Summary</h5>
          <p className="create-flexible-p">
            Let’s go over all you have selected, then proceed to saving into
            this plan.
          </p>
        </div>
        <div className="silverplan">
          <h5 className="silverplan-header">Saving Summary</h5>
          <div className="silverplan-flex">
            <div className="investamount">
              <p className="flex-main">Target Amount:</p>
              <p className="pricetag">N50,000.00</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Periodic Savings:</p>
              <p className="flex-mini">N500.00</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Start Date:</p>
              <p className="flex-mini">10 Apr, 2021</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Maturity Date:</p>
              <p className="flex-mini">10 Jun, 2021</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Saving Frequency:</p>
              <p className="flex-mini">Weekly</p>
            </div>

            <div className="investamount">
              <p className="flex-main">Interest Rate:</p>
              <p className="pricetag">10% monthly</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Return Value:</p>
              <p className="pricetag">N20,000</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Savest Type:</p>
              <p className="flex-mini">Flexible</p>
            </div>
            <div className="investamount">
              <p className="flex-mini">Total Payout:</p>
              <p className="pricetag-mini">N70,000</p>
            </div>
          </div>
        </div>
        <div className="flexible-plan-note">
          <p className="flexible-plan-note-p">
            {" "}
            <span>Note:</span> 10% interest is subject to limiting withdrawals
            to twice a month. Withdrawing more than twice a month forfeit
            interest for the month. Withdrawals from Savest can only be made
            every 15th and 30th day of every month.
          </p>
        </div>
        <div className="checkbox-main">
          <input type="checkbox" name="" id="" className="checkbox-input" />
          <label htmlFor="" className="termsandcondition">
            By clicking this, you’ve agreed to
            <span> OVest terms and conditions</span>
          </label>
        </div>

        <button onClick={() => setMenu(10)} className="savest-button mb-2">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SavingsSummary;
