import React from "react";
import uppink from "../../../assets/Uppink.svg";
import upgreen from "../../../assets/upgreen.svg";
import downred from "../../../assets/downred.svg";
import "./Transctiondetails.css";
import TransactionDetails from "../../main/TransactionDetails";

const Transactiondetails = () => {
  return (
    <div className="deposit-main">
      <TransactionDetails
        icon={upgreen}
        title={"Savest deposit"}
        date={"Mar 30, 2021"}
        amount={"+ $10,000.00"}
        style={{ color: "#038830" }}
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
        icon={uppink}
        title={"Savest deposit"}
        date={"Mar 30, 2021"}
        amount={"+ $10,000.00"}
        style={{ color: "#ea8e03" }}
      />
      <div className="hr"></div>

      <TransactionDetails
        icon={upgreen}
        title={"Withdraw to Ovest wallet"}
        date={"Mar 30, 2021"}
        amount={"- $10,000.00"}
        style={{ color: "#038830" }}
      />
      <div className="hr"></div>
      <TransactionDetails
        icon={downred}
        title={"Savest deposit"}
        date={"Mar 30, 2021"}
        amount={"+ $10,000.00"}
        style={{ color: "#ee5253" }}
      />
      <div className="hr"></div>

      <TransactionDetails
        icon={uppink}
        title={"Withdraw to Ovest wallet"}
        date={"Mar 30, 2021"}
        amount={"- $10,000.00"}
        style={{ color: "#ea8e03" }}
      />
      <div className="hr"></div>
    </div>
  );
};

export default Transactiondetails;
