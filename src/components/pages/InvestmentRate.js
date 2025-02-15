import React from "react";
import buildImage from "../Assets/Build.svg";
import invest1 from "../Assets/invest1.svg";
import invest2 from "../Assets/invest2.svg";
import invest3 from "../Assets/invest3.svg";
import OvestInvestPlan from "./OvestInvestPlan";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import balance from "../Assets/balance.svg";
import "./InvestmentRate.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const InvestmentRate = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="invest-rate">
        <div>
          <img src={buildImage} alt="" className="invest-rate-image" />
        </div>
        <div className="invest-rate-body">
          <div className="invest-details">
            <p className="invest-text">Investment</p>
            <p className="invest-texts">
              Build your future with the best investment rates
            </p>
          </div>
          <div className="investment-rate-section">
            <div>
              <img src={invest1} alt="" className="invstss" />
              <div className="vl"></div>
            </div>
            <p className="invest-section-text ml-3">
            <strong>  Choose your preferred plan(s): </strong>
            
             With OVest you can invest in as
              many as possible investment plans you want for 3 or 6 months.
            </p>
          </div>
          <div className="investment-rate-section">
            <div>
              <img src={invest2} alt="" className="" />
              <div className="vl"></div>
            </div>
            <p className="invest-section-text ml-3">
              <strong> Invest from OVest Wallet: </strong> Fund your OVest wallet using our methods
              of payment designed to suit you. Fund your investment from your
              OVest wallet.
            </p>
          </div>
          <div className="investment-rate-section">
            <div>
              <img src={invest3} alt="" />
            </div>
            <p className="invest-section-text ml-3">
           <strong>   Watch your money grow while we do the work: </strong> All withdrawal (ROI and or Capital) requests are automated ensuring there is no dilatory in the transactions once your investment reaches the maturity period.
            </p>
          </div>
        </div>
      </div>
      <div className="savest-balance">
        <div className="savest-details-balance">
          <p className="savest-balance-text">Savest</p>
          <h1 className="savest-balance-header">
            Put money aside and save with purpose
          </h1>
          <p className="savest-paragraph">
            Saving towards your goal shouldn’t be hard. Savest was created to
            help you save for purpose intentionally for the things you fing
            important. Whatever your saving habit is, OVest has a plan that
            caters for you. Start with your preferred amount and earn 10%
            interest monthly. EVERYONE IS WELCOME!
          </p>
          <Button
            // onClick={openModal}
            variant="contained"
            color="#"
            className={classes.button}
            style={{
              backgroundColor: "#0768F6",
              color: "white",
              width: "178px",
              height: "52px",
              textTransform: "capitalize",
              fontSize: "1.6rem",
              fontWeight: "normal",
              lineHeight: "30px",
              borderRadius: "4px 4px 4px 0px",
              marginTop: "24px",
              marginLeft: "-1px",
            }}
          >
            Get Started Now
          </Button>
        </div>
        <div className="savest-balance-card">
          <img src={balance} alt="" />
          <p
            className="mt-5"
            style={{
              fontSize: "1.8rem",
            }}
          >
            Savest balance
          </p>
          <p className="savest-balance-paragraph">$40,000</p>
          <p
           className="portfolio-percent"
          >
            9.0% portfolio change today
          </p>
          <div className="invest-rate-button">
            <button className="get-button">Get Started Now</button>
            <button className="button-withdraw">Withdraw</button>
          </div>
        </div>
      </div>
      <OvestInvestPlan/>
    </div>
  );
};

export default InvestmentRate;
