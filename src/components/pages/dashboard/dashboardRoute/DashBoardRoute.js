import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Investment from "../investment/Investment";

const DashBoardRoute = ({ sidebarOpen, openSidebar, closeSidebar }) => {
  let match = useRouteMatch();
  
  return (
    <>
      {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> */}

      <Switch>
        {/* <Route path="/" exact component={Main} /> */}

        <Route path={match.path} exact component={Main} />
        <Route path={`${match.path}/invest`} exact component={Investment} />
      </Switch>

      {/* <Sidebar {...{sidebarOpen, closeSidebar, match}} /> */}
    </>
  );
};

export default DashBoardRoute;
