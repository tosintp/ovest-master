import React from "react";
import "./Transaction.css";
import TransImage from "../../assets/Transaction.svg";

const NoSavestTransaction = () => {
  return (
    <div className="TransactionSection">
      <div className="">
        <div className="transactionDetails">
          <p className="detailsText">Recent Transactions</p>
          <img src={TransImage} alt="" className="centerImage" />
          <p className="trans-text">No transactions yet</p>
          <p className="transText">
            Create a target saving, the transactions will <br></br>appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoSavestTransaction;
