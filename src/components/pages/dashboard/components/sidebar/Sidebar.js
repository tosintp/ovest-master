import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
// import { useRouteMatch } from "react-router-dom";
import logo from "../../assets/logo.svg";
import dashboard from "../../assets/home-icon-whitr.png";
import invest from "../../assets/2.svg";
import savest from "../../assets/3.svg";
import transcations from "../../assets/4.svg";
import refferals from "../../assets/5.svg";
import accounts from "../../assets/6.svg";
import logout from "../../../../Assets/Logout.svg";

import SidebarContent from "./SidebarContent";
import { Util } from "../../../../../helpers/util";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  // let match = useRouteMatch();
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>OVest</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <Link to="/dashboard">
          <SidebarContent image={dashboard} title="Dashboard" />
        </Link>
        <Link to="/dashboard/invest">
          <SidebarContent image={invest} title="Invest" />
        </Link>{" "}
        <Link to="/dashboard/savest">
          <SidebarContent image={savest} title="Savest" />
        </Link>{" "}
        <Link to="/dashboard/transaction">
          <SidebarContent image={transcations} title="Transactions" />
        </Link>{" "}
        <Link to="/dashboard/referral">
          <SidebarContent image={refferals} title="Referrals" />
        </Link>{" "}
        <Link to="/dashboard/account">
          <SidebarContent image={accounts} title="Account" />
        </Link>
        <div className="sidebar__logout">
          <Link to="#">
            {" "}
            <img src={logout} alt="" />
            <p onClick={Util.dispatchLogoutUser}>Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
