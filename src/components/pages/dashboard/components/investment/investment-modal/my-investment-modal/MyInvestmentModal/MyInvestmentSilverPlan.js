import React from "react";
import * as moment from "moment";
import "./MyInvestmentModal.css";
import dots from "../../../../../assets/dots.svg";
import angelaicon from "../../../../../assets/angelaicon.svg";

const MyInvestmentSilverPlan = ({ setPage, investment }) => {
  return (
    <div className="myinvestmentbody">
      <div className="myinvestment-main">
        <div className="header-flex">
          <h5 className="silvestinvestment-h5">{investment.name}</h5>
          <div onClick={() => setPage(1)} className="dots-main">
            <img src={dots} alt="" className="dots-img" />
          </div>
        </div>
        <div>
          <img src={angelaicon} alt="" />
        </div>
        <div className="totalreturn-card mt-5">
          <div className="totalreturn-body">
            <p className="totalreturn-head">Total Balance</p>
            <p className="totalreturn-amount">{investment.balance}</p>
            <p className="totalreturn-mini">
              {investment.change}% portfoilo change today
            </p>
            <p className="amountreturned">Total Returns:</p>
            <p className="main-amount">N{investment.returns}</p>
          </div>
        </div>
        <p className="countdown-p mt-3">
          Countdown: <span>{investment.timeLeft}days</span>
        </p>
        <div className="silverplan">
          <h5 className="silverplan-header">{investment.name}</h5>
          <div className="silverplan-flex">
            <div className="investamount">
              <p className="flex-main">Investment Amount:</p>
              <p className="pricetag">N{investment.capital}</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Duration:</p>
              <p className="flex-mini">{investment.duration} Months</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Start Date:</p>
              <p className="flex-mini">
                {moment(investment.startDate).format("DD MMM, YYYY")}
              </p>
            </div>
            <div className="investamount">
              <p className="flex-main">Maturity Date:</p>
              <p className="flex-mini">
                {moment(investment.startDate)
                  .add(investment.duration, "months")
                  .format("DD MMM, YYYY")}
              </p>
            </div>
            <div className="investamount">
              <p className="flex-main">Interest Rate:</p>
              <p className="pricetag">{investment.interest}% P/A</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Status:</p>
              <p className="matured-status">{investment.status}</p>
            </div>
            <div className="investamount">
              <p className="flex-mini">Total Payout:</p>
              <p className="pricetag-mini">N{investment.payout}</p>
            </div>
          </div>
        </div>
        {investment.timeLeft === 0 && (
          <div className="totalreturn-note">
            <p className="little-note">
              Your Silvest Investment plan has been closed and deposited in your
              wallet for withdrawal or reinvestment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInvestmentSilverPlan;
