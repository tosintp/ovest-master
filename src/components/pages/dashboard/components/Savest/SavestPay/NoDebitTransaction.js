import React from "react";
import TransImage from "../../../assets/Transaction.svg";
import "../Transaction.css";

const NoDebitTransaction = () => {
  return (
    <div>
      <div className="">
        <div
          style={{
            width: "inherit",
            height: "100%",
            background: "#fff",
          }}
        >
          <p className="detailsText">No Debit Transactions</p>
          <img src={TransImage} alt="" className="centerImage" />
          <p className="trans-text">No debit transactions yet</p>
        </div>
      </div>
    </div>
  );
};

export default NoDebitTransaction;
