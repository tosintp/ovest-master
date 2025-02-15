import React from "react";
import silverrate from "../Assets/silverrate.svg";
import Goldvestrate from "../Assets/Goldvestrate.svg";
import specialrate from "../Assets/specialrate.svg";
import "./OvestInvestPlan.css";
import Testimony from "./Testimony";
import TelegramCommunity from "./TelegramCommunity";

const OvestInvestPlan = () => {
  return (
    <div>
      <div className="ovest-investment-plan">
        <div className="ovest-invest-header">
          <h1>OVest Investment Plan</h1>
          <p>
            Grow your money with compound interest, we have made it easier for
            everyone to start investing.
          </p>
        </div>
        <div className="investCard-rate">
          <div className="invest-rate-card">
            <img src={silverrate} alt="" />
            <h1>Silvest Investment Plan</h1>
            <p className="interest-paragraph mt-3">50% Interest Rate</p>
            <p className="interest-text">
              Start with as low as N50,000 or $100{" "}
            </p>
            <p className="interest-text">90 days investment plan</p>
          </div>
          <div className="invest-rate-card">
            <img src={Goldvestrate} alt="" />
            <h1
              style={{
                color: "#EE5253",
              }}
            >
              Goldvest Investment Plan
            </h1>
            <p className="interest-paragraph">125% Interest Rate</p>
            <p className="interest-text">
              Start with as low as N200,000 or $500{" "}
            </p>
            <p className="interest-text">180 days investment plan</p>
          </div>
          <div className="invest-rate-card">
            <img src={specialrate} alt="" />
            <h1
              style={{
                color: "#E9B040",
              }}
            >
              Special Investment Plan
            </h1>
            <p className="interest-paragraph">OHouse Estate</p>
            <p className="interest-text">Start with as low as N300,000 </p>
            <p className="interest-text">Land owner in 6 months</p>
          </div>
        </div>
      </div>

      <div className="Goldvest-rate-section">
        <div className="Goldvest-flex">
          <div className="Goldvest-text-details">
            <h1>Do the Math</h1>
            <p>
              Select an investment option above to use the investment calculator
            </p>
          </div>
          <div className="Goldvest-background">
            <div className="Goldvest-invest-details">
              <p>IF YOU INVEST</p>
              <p>GoldVest Plan</p>
            </div>
            <div className="input-section">
              <input type="Tel" placeholder="Amount" className="input-invest" />
            </div>
            <p className="period-text">FOR A PERIOD OF</p>
            <select className="ovest-invest-select">
              <option value="" key="">
                3 months
              </option>
              <option value="" key="">
                6 months
              </option>
            </select>
            <div>
              <div className="invest-rate-flex">
                <p>YOU’LL GET A RETURN OF</p>
                <p>TOTAL</p>
              </div>
              <div className="invest-rate-flex">
                <p>N2,2345.34</p>
                <p>N102,2345.34</p>
              </div>
            </div>
            <p className="invest-rate-text">
              *These results are for indicative purposes only. This calculator
              provides an average interest rate for each plan
            </p>
          </div>
        </div>
      </div>
      <div className="testimony-component">
        <Testimony />
      </div>
      <div className="telegram-component">
        <TelegramCommunity />
      </div>
      <div className="footer-component"></div>
    </div>
  );
};

export default OvestInvestPlan;
