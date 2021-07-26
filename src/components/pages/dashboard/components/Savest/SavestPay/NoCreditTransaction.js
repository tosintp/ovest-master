import React from "react";
import TransImage from "../../../assets/Transaction.svg";
import "../Transaction.css";

const NoCreditTransaction = () => {
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
          <p className="detailsText">No Credit Transactions</p>
          <img src={TransImage} alt="TransImage" className="centerImage" />
          <p className="trans-text">No Credit transactions yet</p>
        </div>
      </div>
    </div>
  );
};

export default NoCreditTransaction;
