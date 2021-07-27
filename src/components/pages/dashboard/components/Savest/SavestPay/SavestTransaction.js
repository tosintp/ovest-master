import React, { useState, useEffect } from "react";
import "./SavestTransaction.css";
import Tabs from "../SavestPay/Tabs";
import { $api } from "../../../../../../helpers/$api";
import NoSavestTransaction from "../NoSavestTransaction";
// import TransactionCard from './Transactioncard';
// import Transactiondetails from './Transactiondetails'

const SavestTransaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const transactions = await $api.user.getSavestTransactions();

        Array.isArray(transactions) && setTransactions(transactions);
      } catch (error) {
        // error getting transactions
      }
    })();
  }, [setTransactions]);

  if (!transactions.length) {
    return <NoSavestTransaction />;
  }

  return (
    <div>
      <div className="transactionSession">
        <div className="transactionTitle">
          <p>Savest Transactions</p>
          <span>View Earnings</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Tabs transactions={transactions} />
          {/* <TransactionCard/> */}
        </div>
        {/* <Transactiondetails/> */}
      </div>
    </div>
  );
};

export default SavestTransaction;
