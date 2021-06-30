import React from 'react'
import './Deposits.css'
import TransactionDetails from '../../main/TransactionDetails'
import uppink from "../../../assets/Uppink.svg";
import upgreen from "../../../assets/upgreen.svg";
import downred from "../../../assets/downred.svg";

const Deposits = () =>{
    return (
        <div className="deposit-main">
            <TransactionDetails
            icon={upgreen}
            title={"Wallet deposit"}
            date={"Mar 30, 2021"}
            amount={"+ $10,000.00"}
            status={"Processed"}
            style={{ color: "#038830"}}
            />
      <div className="hr"></div>
      <TransactionDetails
          icon={downred}
          title={"Gold Plan Investment"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
      <div className="hr"></div>

        <TransactionDetails
          icon={uppink}
          title={"Wallet deposit"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ea8e03" }}
        />
      <div className="hr"></div>
      
      <TransactionDetails
            icon={upgreen}
            title={"Wallet deposit"}
            date={"Mar 30, 2021"}
            amount={"+ $10,000.00"}
            status={"Processed"}
            style={{ color: "#038830"}}
            />
      <div className="hr"></div>
      <TransactionDetails
          icon={downred}
          title={"Gold Plan Investment"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
      <div className="hr"></div>

        <TransactionDetails
          icon={uppink}
          title={"Gold Plan Vest"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ea8e03" }}
        />
      <div className="hr"></div>
      
 

        </div>
    )
}

export default Deposits
