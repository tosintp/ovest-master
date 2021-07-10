import React from "react";
import { connect } from "react-redux";
import "./Main.css";
// import hello from "../../assets/hello.svg";
// import "./../main/";
import AddIcon from "@material-ui/icons/Add";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// import AccountBal from "./AccountBal";
// import MainTitle from "./MainTitle";
import download from "../../assets/Download.svg";
import upload from "../../assets/Upload.svg";
import MainCenL from "./MainCenL";
import PackageWrap from "./PackageWrap";
import apple from "../../assets/apple-btn.png";
import android from "../../assets/apple-btn.png";
// import MainHeader from "./main-header/MainHeader";
import {
  showModal,
  showWithdrawalModal,
} from "../../../../../redux/actions/modal.action";
import DashboardLayout from "../../dashboardDefaultLayout/DashboardLayout";
// import { selectCurrentUser } from "../../../../../redux/selectors/auth.selector";
import useAuth from "../../../../../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Main = ({ toggleModalAppearance, toggleWithdrawalModalAppearance }) => {
  const classes = useStyles();
  // const [showModal, setShowModal] = useState(false);
  // const CurrentUser = useSelector(selectCurrentUser);
  const { user } = useAuth();
  const { lastname } = user.currentUser;

  // useEffect(() => {
  //   console.log("CurrentUser: ", user);
  // }, []);

  const openModal = () => {
    toggleModalAppearance();
    console.log("Open redux");
  };
  const openWithdrawalModal = () => {
    toggleWithdrawalModalAppearance();
    console.log("open redux");
  };

  return (
    <>
      <DashboardLayout>
        <main>
          <div className="main__container">
            {/* <!-- MAIN TITLE STARTS HERE --> */}
            <div className="main__title" style={{ marginTop: "1.7rem" }}>
              <div className="main__greeting">
                <h1>Morning, {lastname}</h1>

                <p>Welcome to your OVest account. View your progress</p>
              </div>
              <div className="hero-btns">
                <Button
                  onClick={openModal}
                  variant="contained"
                  color="#"
                  className={classes.button}
                  startIcon={<AddIcon />}
                  style={{
                    backgroundColor: "#0768F6",
                    color: "white",
                    width: "150px",
                    height: "52px",
                    textTransform: "capitalize",
                    fontSize: "15px",
                    fontWeight: "500",
                    lineHeight: "30px",
                    borderRadius: "4px 4px  4px 0px",
                  }}
                >
                  Fund Wallet
                </Button>

                <Button
                  startIcon={<BackupOutlinedIcon />}
                  onClick={openWithdrawalModal}
                  style={{
                    border: "1px solid #0768F6",
                    color: "#0768F6",
                    height: "52px",
                    width: "140px",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "30px",
                    textTransform: "capitalize",
                    borderRadius: "4px 4px  4px 0px",
                  }}
                >
                  Withdraw
                </Button>
              </div>
            </div>
            {/* <MainHeader /> */}
            {/* <!-- MAIN TITLE ENDS HERE --> */}
            {/* <!-- MAIN CARDS STARTS HERE --> */}
            <div className=" wallet-card " style={{ marginTop: "10px" }}>
              <div className="main__cards  ">
                <div className=" w1">
                  <div className="card_inner1">
                    <p className="card-tit ">OVest Wallet Balance</p>
                    <p className="amount ">&#36; 0.00</p>

                    <div className="wallet-icons mt-4 ">
                      <div className="wallet-icons-bg1">
                        <img className="" src={download} alt="" />
                      </div>
                      <div
                        className="
                  wallet-icons-bg2"
                      >
                        <img className="" src={upload} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main__cards ">
                <div className="wallet w2">
                  <div className="card_inner">
                    <p className="card-tit">Savest Total Balance</p>
                    <p className="amount">&#36; 0.00</p>
                    <p className="change">0.0% portfolio change today</p>

                    <div className="wallet-footer1">
                      <p className="returns">Total Returns:</p>
                      <p className="amount">&#36; 0.00</p>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="main__cards">
                <div className="wallet w3">
                  <div className="card_inner">
                    <p className="card-tit">Total Amount Invested</p>
                    <p className="amount">&#36; 0.00</p>
                    <p className="change">0.0% portfolio change today</p>
                    <div className="wallet-footer2">
                      <p className="returns">Total Returns:</p>
                      <p className="amount">&#36; 0.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-center ">
              <div className="main-center-l ">
                <MainCenL />
              </div>
              <div className="main-center-r ">
                <PackageWrap />
                <div className="mobile-download mt-5">
                  <p>Download the Mobile App</p>
                  <img src={apple} alt="" srcSet="" />
                  <img src={android} alt="" srcSet="" />
                </div>
              </div>
            </div>
            {/* <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Times of Watching</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div> */}
            {/* <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Videos</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div> */}
            {/* <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div> */}
            {/* <!-- MAIN CARDS ENDS HERE --> */}
            {/* <!-- CHARTS STARTS HERE --> */}
            {/* <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div> */}
            {/* <!-- CHARTS ENDS HERE --> */}
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModalAppearance: () => dispatch(showModal()),
  toggleWithdrawalModalAppearance: () => dispatch(showWithdrawalModal()),
});

export default connect(null, mapDispatchToProps)(Main);
