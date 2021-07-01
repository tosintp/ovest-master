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
} from "../../../redux/selectors/modal.selector";
import Withdrawal from "./components/withdrawal/Withdrawal";

const Dashboard = () => {
  // const [sidebarOpen, setsidebarOpen] = useState(false);
  const showModal = useSelector(showModalState);
  const showWithdrawalModal = useSelector(showWithdrawalModalState);

  useEffect(() => {
    console.log("showModal: ", showModal);
  });
  useEffect(() => {
    console.log("showWithModal: ", showWithdrawalModal);
  });

  // const openSidebar = () => {
  //   setsidebarOpen(true);
  // };

  // const closeSidebar = () => {
  //   setsidebarOpen(false);
  // };

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

      <DashBoardRoute />
      {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

      <Main />

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
    </div>
  );
};

export default Dashboard;
