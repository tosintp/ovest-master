import React, { useState } from "react";
import * as moment from "moment";
import "./MyInvestment.css";
import Button from "@material-ui/core/Button";
import closemodalicon from "../../../../../Assets/closemodalicon.svg";
import Rectangle64 from "../../../assets/Rectangle 64.svg";
import MyInvestmentIndex from "../investment-modal/my-investment-modal/MyInvestmentModal/MyInvestmentIndex";
import MyInvestSpecialIndex from "../investment-modal/my-investment-modal/MyInvestmentSpecial/MyInvestSpecialIndex";

const SingleInvestment = (investment) => {
  const { capital, status, timeLeft, balance, setInvestment, name, isSpecial } =
    investment;

  return (
    <div className="all-investment">
      <img src={Rectangle64} alt="" className="allinvestment-img" />
      <div className="all-investmentchild">
        <h6 className="allinvestment-h6">{name}</h6>
        <p className="allinvestment-p">Capital NGN{capital}</p>
        <div>
          <a href={isSpecial ? "#myinvestspecial" : "#myinvestmentmodal"}>
            <Button
              variant="contained"
              color="#"
              style={{
                backgroundColor: "#0768F6",
                color: "white",
                width: "149px",
                height: "40px",
                textTransform: "capitalize",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "19px",
                borderRadius: "4px 4px 4px 0px",
                letterSpacing: "0.03em",
                textAlign: "center",
                marginTop: "4rem",
              }}
              onClick={() => setInvestment(investment)}
            >
              Plan Details
            </Button>
          </a>
        </div>
      </div>
      <div className="balance-sheet">
        <p className="balance-plan">{status} </p>
        <p className="balance-countdown">Countdown: {timeLeft}days</p>
        <p className="balance-naira">N{balance}</p>
        <p className="balance-p">Balance</p>
      </div>
    </div>
  );
};

const MyInvestment = ({ investments }) => {
  const [page, setPage] = useState(0);
  const [investment, setInvestment] = useState({});

  return (
    <div className="parent-allinvestment">
      <p className="get-started">Here is the list of all your investments</p>

      {investments.map((investment) => {
        const { startDate, duration } = investment;
        const hasMatured = moment(startDate)
          .add(duration, "months")
          .isBefore(moment());
        const status = hasMatured ? "matured" : "not matured";
        const timeLeft = moment().diff(
          moment(startDate).add(duration, "months"),
          "days"
        );

        return (
          <SingleInvestment
            {...investment}
            status={status}
            timeLeft={(timeLeft < 0 && Math.abs(timeLeft)) || 0}
            key={investment.id}
            setInvestment={setInvestment}
          />
        );
      })}

      {/* my investment silver plan  */}
      <>
        <div id="myinvestmentmodal" className="myinvestmentmodal">
          <div className="investmodal-head">
            {page === 0 ? (
              <a
                href="#"
                className="closemodalicon-btn"
                onClick={() => {
                  setPage(0);
                }}
              >
                <img src={closemodalicon} alt="" className="closemodal" />
              </a>
            ) : null}

            <MyInvestmentIndex {...{ page, setPage, investment }} />
          </div>
        </div>
      </>
      {/* my investment special package */}
      <>
        <div id="myinvestspecial" className="myinvestspecial">
          <div className="investmodal-head">
            {page === 0 ? (
              <a
                href="#"
                className="closemodalicon-btn"
                onClick={() => {
                  setPage(0);
                }}
              >
                <img src={closemodalicon} alt="" className="closemodal" />
              </a>
            ) : null}

            <MyInvestSpecialIndex {...{ page, setPage, investment }} />
          </div>
        </div>
      </>
    </div>
  );
};

export default MyInvestment;
