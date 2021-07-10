import React, { useEffect } from "react";

import { useSelector } from "react-redux";
// import { connect } from "react-redux";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./dashboardIndex.css";
// import Main from "./components/main/Main";
// import Navbar from "./components/navbar/Navbar";
// import Sidebar from "./components/sidebar/Sidebar";
import FundWallet from "./components/fundwallet/FundWallet";
import "./dashboardIndex.css";
import DashBoardRoute from "./dashboardRoute/DashBoardRoute";
import {
  showModalState,
  showWithdrawalModalState,
  showInvestModalState,
} from "../../../redux/selectors/modal.selector";
import EmailVerification from "../signup-verify/EmailVerification";
import Withdrawal from "./components/withdrawal/Withdrawal";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  // const [sidebarOpen, setsidebarOpen] = useState(false);
  const showModal = useSelector(showModalState);
  const showWithdrawalModal = useSelector(showWithdrawalModalState);
  const showInvestModal = useSelector(showInvestModalState);

  const { user } = useAuth();
  const userIsVerified = Boolean(user.currentUser.email_verified_at);
  useEffect(() => {
    console.log("showModal: ", showModal);
    console.log(user);
  });
  useEffect(() => {
    console.log("showWithModal: ", showWithdrawalModal);
  });

  if (userIsVerified)
    return (
      <div className="contain">
        <div
          className="blurEffect"
          style={{ display: showModal ? "block" : "none" }}
        >
          <FundWallet />
        </div>
        <div
          className="blurEffect"
          style={{ display: showWithdrawalModal ? "block" : "none" }}
        >
          <Withdrawal />
        </div>

        {/* <div className="blurEffect" style={{ display: "block" }}>
          <InvestModal />
        </div> */}

        <DashBoardRoute />
        {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

      <Main />

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
      </div>
    );

  return <EmailVerification />;
};

export default Dashboard;
