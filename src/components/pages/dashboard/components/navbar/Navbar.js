import React from "react";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import profile from "../../assets/profile.png";
import caret from "../../assets/caret.svg";

import notification from "../../assets/Notification.svg";
import useAuth from "../../../../../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Navbar = ({ sidebarOpen, openSidebar }) => {
  const { user } = useAuth();
  const classes = useStyles();
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      {/* <div className="nav"> */}
      <div className="navbar__left">
        <h1>ACCOUNT OVERVIEW</h1>
      </div>
      <div className="navbar__right ml-">
        <a href="#!">
          <img
            width="30"
            className="notification"
            src={notification}
            alt="avatar"
          />
        </a>
        <a href="#!">
          <Avatar
            alt="Travis Howard"
            src={profile}
            style={{
              border: "5px solid #fec59a",
              // padding: "px",
            }}
          />
        </a>
        <a href="#!" className="ml-2">
          {/* {user.currentUser.firstname}  {user.currentUser.lastname} */}
          opeyemi peter
          <img width="10" className="ml-1" src={caret} alt="avatar" />
        </a>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
