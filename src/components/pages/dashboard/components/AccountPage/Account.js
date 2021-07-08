import React, { useState } from "react";
import { connect } from "react-redux";
import { showModal } from "../../../../../redux/actions/modal.action";
import closemodalicon from "../../../../Assets/closemodalicon.svg";
import DashboardLayout from "../../dashboardDefaultLayout/DashboardLayout";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Arrowright from "../../assets/Arrowright.svg";
import FundsImage from "../../assets/FundsImage.svg";
import Mark from "../../assets/mark.svg";
import BankImage from "../../assets/Bankimage.svg";
import Portfolio from "../../assets/Portfolio.svg";
import Account1 from "../../assets/account1.svg";
import PackageDetails from "../main/PackagesDetails";
import refer from "../../assets/refer.png";
import arrow from "../../assets/footer-arrow.png";
import apple from "../../assets/apple-btn.png";
import android from "../../assets/apple-btn.png";
import "./Account.css";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import support from "../../assets/support.svg";
import Referral from "../../assets/referral.svg";
import About from "../../assets/About.svg";
import Legal from "../../assets/Legal.svg";
import AccountIndex from "./AccountModal/AccountIndex";

const Account = ({ toggleModalAppearance }) => {
  const [section, setSection] = useState(0);
  const classes = withStyles();

  const openModal = () => {
    toggleModalAppearance();
    console.log("open redux");
  };

  //Material-ui Button Styles//
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 32,
      height: 20,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: "white",

        "& + $track": {
          backgroundColor: "#FD740E",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#ffffff",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 14,
      height: 17,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[500],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //Material-ui button styles ends//
  return (
    <DashboardLayout>
      <main>
        <div className="main-section">
          <div>
            <div className="account-page">
              <h1>My Account</h1>
              <p>Angela Daniel</p>
            </div>
            <div className="AccountPage">
              <div
                className="AccountDetails "
                style={{
                  width: "592px",
                  height: "60px",
                  marginTop: "40px",
                }}
              >
                <p>Enable Payment Option</p>
                <a href="#accountModal">
                  <img
                    src={Arrowright}
                    alt=""
                    className="arrow"
                    // onClick={openModal}
                  />
                </a>
              </div>
              <div
                className="AccountDetails"
                style={{
                  width: "592px",
                  height: "60px",
                  marginTop: "20px",
                }}
              >
                <p>Enable Dark Moden</p>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <IOSSwitch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                      />
                    }
                  />
                </FormGroup>
              </div>
              <div className="Account-section">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={Account1} alt="" className="imageAccount" />
                  </div>
                  <div className="Account-text">
                    <p>Account Settings</p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginTop: "-7px",
                        color: "#666666",
                      }}
                    >
                      Edit Profile
                    </p>
                  </div>
                </div>
                <img src={Arrowright} alt="" className="arrow" />
              </div>
              <div className="Account-section">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={Mark} alt="" className="imageAccount" />
                  </div>
                  <div className="Account-text">
                    <p>Verification</p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginTop: "-7px",
                        color: "#666666",
                      }}
                    >
                      Verify your identity
                    </p>
                  </div>
                </div>
                <img src={Arrowright} alt="" className="arrow" />
              </div>
              <div className="Account-section">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={FundsImage} alt="" className="imageAccount" />
                  </div>
                  <div className="Account-text">
                    <p>Funds Transfer</p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginTop: "-7px",
                        color: "#666666",
                      }}
                    >
                      Transfer funds to another OVestor
                    </p>
                  </div>
                </div>
                <img src={Arrowright} alt="" className="arrow" />
              </div>
              <div className="Account-section">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={Portfolio} alt="" className="imageAccount" />
                  </div>
                  <div className="Account-text">
                    <p>Portfolio</p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginTop: "-7px",
                        color: "#666666",
                      }}
                    >
                      Breakdown of your finance
                    </p>
                  </div>
                </div>
                <img src={Arrowright} alt="" className="arrow" />
              </div>
              <div className="Account-section">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={BankImage} alt="" className="imageAccount" />
                  </div>
                  <div className="Account-text">
                    <p>Banks & Cards</p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginTop: "-7px",
                        color: "#666666",
                      }}
                    >
                      Set up your card & bank details
                    </p>
                  </div>
                </div>
                <img src={Arrowright} alt="" className="arrow" />
              </div>
              <div className="Account-section">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={support} alt="" className="imageAccount" />
                  </div>
                  <div className="Account-text">
                    <p>Support</p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginTop: "-7px",
                        color: "#666666",
                      }}
                    >
                      Chat with OVest support
                    </p>
                  </div>
                </div>
                <img src={Arrowright} alt="" className="arrow" />
              </div>
              <div className="Account-section">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={Referral} alt="" className="imageAccount" />
                  </div>
                  <div className="Account-text">
                    <p>Referral Program</p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginTop: "-7px",
                        color: "#666666",
                      }}
                    >
                      Refer a friend and earn
                    </p>
                  </div>
                </div>
                <img src={Arrowright} alt="" className="arrow" />
              </div>
              <div className="Account-section">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={About} alt="" className="imageAccount" />
                  </div>
                  <div className="Account-text">
                    <p>About OVest</p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginTop: "-7px",
                        color: "#666666",
                      }}
                    >
                      About OVest app
                    </p>
                  </div>
                </div>
                <a href="#accountModal">
                  <img
                    src={Arrowright}
                    alt=""
                    className="arrow"
                    onClick={() => setSection(1)}
                  />
                </a>
              </div>
              <div className="Account-section">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={Legal} alt="" className="imageAccount" />
                  </div>
                  <div className="Account-text">
                    <p>Legal</p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginTop: "-7px",
                        color: "#666666",
                      }}
                    >
                      Terms & Conditions
                    </p>
                  </div>
                </div>
                <img src={Arrowright} alt="" className="arrow" />
              </div>
            </div>
          </div>

          <div className="refer-page">
            <PackageDetails
              style={{
                backgroundColor: "#eaf7f3",
                color: "#08990d",
              }}
              title={"Refer & Earn"}
              image={refer}
              body={"Get rewarded when friends signup & invest"}
              footer={"Refer a Friend"}
              footerIcon={arrow}
            />
            <div className="mobile-download mt-5 ">
              <p>Download the Mobile App</p>
              <div className="col-4">
                <img src={apple} alt="" srcSet="" />
                <img src={android} alt="" srcSet="" className="mt-3" />
              </div>
            </div>
          </div>
        </div>
        <>
          <div id="accountModal" className="account-modal">
            <div className="accountmodal-head">
              {section === 0 ? (
                <a href="#" className="closemodalicon-btn">
                  <img
                    src={closemodalicon}
                    alt="close modal"
                    className="closemodal"
                  />
                </a>
              ) : null}
              <AccountIndex {...{ section, setSection }} />
            </div>
          </div>
        </>
      </main>
    </DashboardLayout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModalAppearance: () => dispatch(showModal()),
  // toggleWithdrawalModalAppearance: () => dispatch(showWithdrawalModal()),
});
export default connect(null, mapDispatchToProps)(Account);
