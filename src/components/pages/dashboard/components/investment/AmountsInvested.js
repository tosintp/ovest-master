import React, { useEffect, useState } from "react";
import "./AmountsInvested.css";
import Graph from "../../assets/Graph.png";
import Vector from "../../assets/Vector.svg";
import Vector2 from "../../assets/Vector2.svg";
import { $api } from "../../../../../helpers/$api";

const AmountsInvested = () => {
  const [stats, setStats] = useState({
    totalAmountInvested: "0.00",
    totalInvestmentPackages: "0",
    totalReturns: "0.00",
    portfolioChange: "0.00",
  });

  useEffect(() => {
    (async () => {
      try {
        const stats = await $api.user.getInvestmentStats();

        setStats(stats);
      } catch (error) {
        // error getting investment stats.
      }
    })();
  }, [setStats]);

  return (
    <div className="amounts-invested">
      <div className="amountsinvested-card">
        <div className="totalinvestment">
          <div className="icon1">
            <img src={Graph} alt="" className="icon-image" />
          </div>
          <p className="card-tit">Total Amount Invested</p>
          <p className="amount">${stats.totalAmountInvested}</p>
        </div>
      </div>

      <div className="amountsinvested-card">
        <div className="totalinvestment">
          <div className="icon1">
            <img src={Vector} alt="" className="icon-image" />
          </div>
          <p className="card-tit">Total Investment Packages</p>
          <p className="amount">{stats.totalInvestmentPackages}</p>
        </div>
      </div>

      <div className="amountsinvested-card">
        <div className="totalinvestment">
          <div className="icon1">
            <img src={Vector2} alt="" className="icon-image" />
          </div>
          <p className="card-tit">Total Returns</p>
          <p className="amount">${stats.totalReturns}</p>
          <p className="mini-amount">
            {stats.portfolioChange}% portfoilo change today
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmountsInvested;
