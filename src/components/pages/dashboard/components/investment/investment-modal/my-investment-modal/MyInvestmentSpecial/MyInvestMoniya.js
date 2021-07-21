import React, { useState } from "react";
import * as moment from "moment";

import dots from "../../../../../assets/dots.svg";
import angelaicon from "../../../../../assets/angelaicon.svg";
import closemodalicon from "../../../../../assets/close-modal-icon.svg";
import railwayicon from "../../../../../assets/moniya-railway-icon.svg";

const MyInvestMoniya = ({ investment }) => {
  const [showRoiInfo, setShowRoiInfo] = useState(false);

  const handleclick = () => {
    if (investment.timeLeft === 0) {
      setShowRoiInfo(true);
    }
  };

  return (
    <div className="moniya-body">
      <div className="moniya-main">
        <div className="headertitle-flex">
          <h5 className="moniya-h5">{investment.propertyName}</h5>
          <div className="connect-dots mt-3">
            <img src={dots} alt="" className="connect-dotsimg" />
          </div>
        </div>
        <div className="mt-4">
          <img src={angelaicon} alt="" />
        </div>
        <div className="silverplan">
          <h5 className="silverplan-header">Goals Investment</h5>
          <div className="silverplan-flex">
            <div className="investamount mt-4">
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
              <p className="flex-main">Status:</p>
              <p className="now-matured">{investment.status}</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Investment Type:</p>
              <p className="flex-mini">{investment.investmentType}</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Location:</p>
              <p className="flex-mini">{investment.location}</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleclick}
          className={investment.timeLeft === 0 ? "invest" : "claim-property"}
        >
          Claim property
        </button>
        <div className="moniya-note">
          <p className="moniyamain-note">
            Note: There is no cash payout in LandVest investment (OHouse
            Estate), interest and capital would be used in becoming a
            Land-Owner.
          </p>
        </div>
      </div>
      <div
        className={`silverinvestment__roi-info-bg ${
          showRoiInfo ? "show-roi-info" : ""
        }`}
      >
        <div className="silverinvestment__roi-info-content">
          <div className="profit-roi-modal">
            <div className="claim-property-img">
              <img
                src={closemodalicon}
                alt="close-modal"
                className="close-icon-btn"
                onClick={() => setShowRoiInfo(false)}
              />
            </div>
            <div className="ovest-support-main">
              <div className="railway-icon-img">
                <img src={railwayicon} alt="" />
              </div>
              <h5>{investment.propertyName}</h5>
              <p>
                Contact <span> OVest Support</span> to claim your landvest
                investment plan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInvestMoniya;
