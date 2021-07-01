import React from "react";
import uppink from "../../../assets/Uppink.svg";
import upgreen from "../../../assets/upgreen.svg";
import downred from "../../../assets/downred.svg";
import TransactionDetails from "./../TransactionDetails";

const RecentTransaction = () => {
  return (
    <div
      style={{
        width: "657px",
      }}
    >
      <div className="recent-transact">
        <div className="">
          <div className="recentT">
            <p className="recentP">Recent Transactions</p>
            <p className="vAll">View all</p>
          </div>
        </div>
        <TransactionDetails
          icon={upgreen}
          title={"Wallet deposit"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#038830" }}
        />
        <TransactionDetails
          icon={downred}
          title={"Wallet deposit"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
        <TransactionDetails
          icon={uppink}
          title={"Gold Plan Vest"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ea8e03" }}
        />{" "}
        <TransactionDetails
          icon={downred}
          title={"Wallet deposit"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
        <hr />
      </div>
      {/* chart- transac */}
    </div>
  );
};

export default RecentTransaction;
