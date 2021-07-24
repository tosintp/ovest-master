import React from "react";
import * as moment from "moment";
import "./MyInvestmentModal.css";
import search from "../../../../../assets/Search.svg";

const SingleEarningItem = ({ date, price }) => {
  return (
    <>
      <div className="earning-flex">
        <p className="price-p">{moment(date).format("DD MMM, YYYY")}</p>
        <p className="price-p">N{price}</p>
      </div>
      <hr />
    </>
  );
};

const Earning = ({ transactions, setPage }) => {
  return (
    <div className="earning-body">
      <div className="myinvestment-main">
        <div className="earning-flex">
          <h5 className="earning-h5">Earning in Last 60 Days</h5>
          <img src={search} alt="" />
        </div>
        <p className="earning-p">View your investment earnings transaction</p>
        <div className="dateandearning mt-5">
          <div className="earning-flex">
            <p className="date-p">Date</p>
            <p className="date-p">Earnings</p>
          </div>
          <hr />
          {(transactions || []).map(({ date, earning }) => {
            return <SingleEarningItem date={date} price={earning} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Earning;
