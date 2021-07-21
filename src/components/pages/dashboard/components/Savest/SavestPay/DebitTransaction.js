import React from "react";
import downred from "../../../assets/downred.svg";
import "./Transctiondetails.css";
import TransactionDetails from "../../main/TransactionDetails";

const Debitransaction = () => {
  return (
    <div>
      <div className="deposit-main">
        <TransactionDetails
          icon={downred}
          title={"Withdraw to Ovest wallet"}
          date={"Mar 30, 2021"}
          amount={"- $10,000.00"}
          style={{ color: "#ee5253" }}
        />

        <div className="hr"></div>
        <TransactionDetails
          icon={downred}
          title={"Withdraw to Ovest wallet"}
          date={"Mar 30, 2021"}
          amount={"- $10,000.00"}
          style={{ color: "#ee5253" }}
        />
        <div className="hr"></div>
        <TransactionDetails
          icon={downred}
          title={"Withdraw to Ovest wallet"}
          date={"Mar 30, 2021"}
          amount={"- $10,000.00"}
          style={{ color: "#ee5253" }}
        />
        <div className="hr"></div>
        <TransactionDetails
          icon={downred}
          title={"Withdraw to Ovest wallet"}
          date={"Mar 30, 2021"}
          amount={"- $10,000.00"}
          style={{ color: "#ee5253" }}
        />
        <div className="hr"></div>
      </div>
    </div>
  );
};

export default Debitransaction;
