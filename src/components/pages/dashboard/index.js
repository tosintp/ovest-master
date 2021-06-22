import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./dashboardIndex.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import FundWallet from "./components/fundwallet/FundWallet";
import "./dashboardIndex.css";
import DashBoardRoute from "./dashboardRoute/DashBoardRoute";
import { showModalState } from "../../../redux/selectors/modal.selector";

const Dashboard = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const showModal = useSelector(showModalState);

  useEffect(() => {
    console.log("showModal: ", showModal);
  }, []);

  const openSidebar = () => {
    setsidebarOpen(true);
  };

  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  return (
    <div className="contain">
      <div
        className="blurEffect"
        style={{ display: showModal ? "block" : "none" }}
      >
        <FundWallet />
      </div>

      <DashBoardRoute />
      {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

      <Main />

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
    </div>
  );
};

export default Dashboard;
