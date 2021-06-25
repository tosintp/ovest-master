import React from "react";
import "./Transaction.css";
import TransImage from "../../assets/Transaction.svg";
import line from "../../assets/line.svg";

const Transaction = () => {
  return (
    <div className="TransactionSection">
      <div className="transaction">
        <div className="transactionDetails">
          <p className="detailsText">Recent Transactions</p>
          <img src={TransImage} alt="" className="centerImage" />
          <p className="trans-text">No transactions yet</p>
          <p className="transText">
            Create a target saving, the transactions will <br></br>appear here.
          </p>
        </div>
        <div className="Savings">
          <div className="Savings-details">
            <p className="infoText">Savings Info</p>
            <p className="start-text">Start Date</p>
            <img src={line} alt="" />
            <p className="start-text">Start Date</p>
            <img src={line} alt="" />
            <p className="withdraw-text">Withdrawal</p>
            <div className="textMonth">
              <span className="textNumber mr-2">0</span>this month
            </div>
          </div>
          <div className="sectionDetails">
            <p className="activeText">Inactive</p>
            <p className="withdraw-texts">Maturity Date</p>
            <img src={line} alt="" />
            <p className="frequency-texts">Frequency</p>
            <img src={line} alt="" />
            <p className="withdraw-texts ml-2 mt-5 pt-2">Total Payout</p>
            <img src={line} alt="" className="mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
