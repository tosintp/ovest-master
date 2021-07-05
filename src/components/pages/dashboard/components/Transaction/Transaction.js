import React from "react";
import "./Transaction.css";
import DashboardLayout from "../../dashboardDefaultLayout/DashboardLayout";
import TransactionHistory from "./TransactionHistory";
import AllTransaction from "./AllTransaction/AllTransaction";

const Transaction = () => {
  return (
    <>
      <DashboardLayout>
        <main>
          <TransactionHistory />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AllTransaction />
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Transaction;
