import React from 'react'
import './InvestmentTransaction.css'
import TransactionDetails from '../../main/TransactionDetails'
import uppink from "../../../assets/Uppink.svg";
import upgreen from "../../../assets/upgreen.svg";
import downred from "../../../assets/downred.svg";

const InvestmentTransaction = () =>{
    return (
        <div className="deposit-main">
            <TransactionDetails
            icon={upgreen}
            title={"Silvest investment plan"}
            date={"Mar 30, 2021"}
            amount={"+ $10,000.00"}
            status={"Processed"}
            style={{ color: "#038830"}}
            />
      <div className="hr"></div>
      <TransactionDetails
          icon={downred}
          title={"Goldvest plan investment"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
      <div className="hr"></div>
      <TransactionDetails
            icon={upgreen}
            title={"Silvest investment plan"}
            date={"Mar 30, 2021"}
            amount={"+ $10,000.00"}
            status={"Processed"}
            style={{ color: "#038830"}}
            />
      <div className="hr"></div>
      <TransactionDetails
          icon={downred}
          title={"Goldvest plan investment"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
      <div className="hr"></div>
        </div>
    )
}

export default InvestmentTransaction
