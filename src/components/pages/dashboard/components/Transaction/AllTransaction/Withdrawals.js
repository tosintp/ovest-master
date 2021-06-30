import React from 'react'
import './Withdrawals.css'
import TransactionDetails from '../../main/TransactionDetails'
import uppink from "../../../assets/Uppink.svg";
import upgreen from "../../../assets/upgreen.svg";
import downred from "../../../assets/downred.svg";

const Withdrawals = () =>{
    return (
        <div>
        <TransactionDetails
                icon={downred}
                title={"Goldvest plan investment"}
                date={"Mar 30, 2021"}
                amount={"- $10,000.00"}
                status={"Processed"}
                style={{ color: "#ee5253" }}
                />
            <div className="hr"></div>
            <TransactionDetails
                icon={downred}
                title={"Silvest plan investment"}
                date={"Mar 30, 2021"}
                amount={"- $10,000.00"}
                status={"Processed"}
                style={{ color: "#ee5253" }}
                />
            <div className="hr"></div>
            <TransactionDetails
                icon={downred}
                title={"OVestor Fund Transfer"}
                date={"Mar 30, 2021"}
                amount={"- $10,000.00"}
                status={"Processed"}
                style={{ color: "#ee5253" }}
                />
            <div className="hr"></div>
            <TransactionDetails
                icon={downred}
                title={"Withdraw to Ovest Wallet"}
                date={"Mar 30, 2021"}
                amount={"- $10,000.00"}
                status={"Processed"}
                style={{ color: "#ee5253" }}
                />
            <div className="hr"></div>
            <TransactionDetails
                icon={downred}
                title={"Withdraw to Bank"}
                date={"Mar 30, 2021"}
                amount={"- $10,000.00"}
                status={"Processed"}
                style={{ color: "#ee5253" }}
                />
            <div className="hr"></div>
            <TransactionDetails
                icon={downred}
                title={"Silvest plan investment"}
                date={"Mar 30, 2021"}
                amount={"- $10,000.00"}
                status={"Processed"}
                style={{ color: "#ee5253" }}
                />
            <div className="hr"></div><TransactionDetails
                icon={downred}
                title={"Goldvest plan investment  "}
                date={"Mar 30, 2021"}
                amount={"- $10,000.00"}
                status={"Processed"}
                style={{ color: "#ee5253" }}
                />
            <div className="hr"></div>
        </div>
        
    )
}

export default Withdrawals
