import React from "react";
import * as moment from "moment";
// import uppink from "../../../assets/Uppink.svg";
import upgreen from "../../../assets/upgreen.svg";
import downred from "../../../assets/downred.svg";
import "./Transctiondetails.css";
import TransactionDetails from "../../main/TransactionDetails";
import { Util } from "../../../../../../helpers/util";

const Transactiondetails = ({ transactions, transactionTypeAllowed }) => {
  return (
    <div className="deposit-main">
      {transactions.map((transaction) => {
        const { prev_balance, avail_balance, created_at } = transaction;
        const isCreditTransaction = prev_balance - avail_balance < 0;
        const icon = isCreditTransaction ? upgreen : downred;
        const sign = isCreditTransaction ? "+" : "-";
        const color = isCreditTransaction ? "#038830" : "#ee5253";

        if (transactionTypeAllowed) {
          if (transactionTypeAllowed === "credit" && !isCreditTransaction) {
            return null;
          }

          if (transactionTypeAllowed === "debit" && isCreditTransaction) {
            return null;
          }
        }

        return (
          <>
            <TransactionDetails
              icon={icon}
              title={"No DESC"}
              date={moment(created_at).format("MMM DD, YYYY")}
              amount={`${sign} $${Util.formatMoneyNumber(avail_balance)}`}
              style={{ color }}
            />
            <div className="hr"></div>
          </>
        );
      })}
    </div>
  );
};

export default Transactiondetails;
